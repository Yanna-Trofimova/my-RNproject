import  auth  from "../../firebase/config";


export const authSingUpUser = ({ email, password}) => async (dispath, getSatte) => { 
    try {

        const user = await auth.createUserWithEmailAndPassword(email, password);
        console.log("user", user);


    //      await createUserWithEmailAndPassword(auth, email, password);

    //   const user = await auth.currentUser;
        
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};


export const authSingInUser = () => async (dispath, getSatte) => { };


export const authSingOutUser = () => async (dispath, getSatte) => { };

// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { authSlice } from "./authSlice";
// import { auth } from "../firebase/config";

// const { updateUserProfile, authError, authStateChange, authSingOut } =
//   authSlice.actions;

//   export const authSignUpUser =
//   ({ name, userEmail, password, avatar }) =>
//   async (dispatch, getSatte) => {
//     try {
//       await createUserWithEmailAndPassword(auth, userEmail, password);

//       const user = await auth.currentUser;

//       await updateProfile(user, {
//         displayName: name,
//         photoURL: avatar,
//       });

//       const { displayName, email, uid, photoURL } = await auth.currentUser;
//       dispatch(
//         updateUserProfile({
//           userId: uid,
//           displayName,
//           displayImg: photoURL,
//           email,
//         })
//       );
//     } catch (error) {
//       console.log("error.message", error.message);
//       console.log("🚀 ~ error:", error);
//       dispatch(authError(error.message));
//     }
//   };