import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref, onValue } from "firebase/database";

import app from "./firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);

let signUpUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.id = res.user.uid;
        const reference = ref(db, `users/${obj.id}`);
        set(reference, obj)
          .then(() => {
            resolve("Data Send Successfully in Database and User Created");
          })
          .catch((err) => {
            reject(err.message);
          });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
let loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `users/${res.user.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
let signoutUser = () => {};
let fbGet = () => {};
let fbGetById = () => {};
let fbEdit = () => {};
let fbDelete = () => {};

export {
  signUpUser,
  loginUser,
  signoutUser,
  fbGet,
  fbGetById,
  fbEdit,
  fbDelete,
};
