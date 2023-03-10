import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, onValue,set, ref } from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);

let userSignup = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(
      (res) => {
        obj.id = res.user.uid;
        //created new user in database users with id as base
        const reference = ref(db, `users/${obj.id}`);
        set(reference, obj)
          .then(() => {
            resolve(
              "Data Sent to Database Successfully and user added to database"
            );
          })
          .catch((err) => {
            reject(err.message);
          });
      }
    );
  });
};

let userLogin = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `users/${res.user.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("Data not Found !");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

let userSignOut = () => {};

let fbGet = () => {};

let fbGetId = () => {};

let fbEdit = () => {};

let fbDelete = () => {};

export { userLogin, userSignup, userSignOut, fbGet, fbGetId, fbEdit, fbDelete };
