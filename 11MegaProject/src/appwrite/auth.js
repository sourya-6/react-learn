import {Client,Account,ID} from "appwrite"
import conf from "../conf/conf.js";
export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return await this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Creation of account Failed",error)
            throw error;
        }
    }
    
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Log in Failed!!",error)
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("User fetching Failed",error) ;
        }
        return null;
    }

    async logout(){
        try {
            return this.account.deleteSessions();
        } catch (error) {
           console.log("Appwrite serive :: logout :: error", error);
        }
    }

}


const authService = new AuthService();
export default authService