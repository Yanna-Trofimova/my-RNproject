import db from "../../firebase/config";


export const authSingUpUser = ({ email, password}) => async (dispath, getSatte) => { 
    try {

        const user = await db.auth().createUserWithEmailAndPassword(email, password);
        console.log("user", user);
        
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};


export const authSingInUser = () => async (dispath, getSatte) => { };


export const authSingOutUser = () => async (dispath, getSatte) => { };