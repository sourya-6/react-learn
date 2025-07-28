import conf from "../conf/conf";
import { Client, Databases,ID,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    //order:-
    //1. createPost
    //2. updatePost
    //3. deletePost
    //4. getPost
    //5. getPosts
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async UpdatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.UpdatePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status 
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async DeletePost(slug){
        try {
            return await this.DeletePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false;
        }
    }


    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false;
        }

    }

    
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: getFilePreview :: error", error);
            return false;
            
        }
    }

}

const service = new Service();
export default service;