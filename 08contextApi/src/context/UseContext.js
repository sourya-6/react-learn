import React from "react";


const UserContext=React.createContext();
//ikkada values ni pass cheyaledhu we can send values in createContext
//createContext is used to declare the state globally without redefining them
//like manam props use chesinappudu tree(props)-->grandfather-->father-->child
//main motive -->global props -->child
export default UserContext;