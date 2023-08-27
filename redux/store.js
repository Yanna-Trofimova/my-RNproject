import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/authReducer';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    
});

 const reducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: rootReducer,
});


// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistReducer,
// } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { authSlice } from "./authSlice";

// // service firebase.storage {
// //   match /b/{bucket}/o {
// //     match /publicFolder/{allPaths=**} {
// //       allow read, write;
// //     }
// //     match /{allPaths=**} {
// //       allow read, write: if request.auth != null;
// //     }
// //   }
// // }

// const persistConfig = {
//   key: "auth",
//   storage: AsyncStorage,
// };
// const rootReducers = combineReducers({ [authSlice.name]: authSlice.reducer });

// const reducer = persistReducer(persistConfig, rootReducers);
// export const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);