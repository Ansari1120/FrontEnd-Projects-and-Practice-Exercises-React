import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, onValue, set, ref } from "firebase/database";
import firebaseAuth from "firebase-auth";

const auth = getAuth(app);
const db = getDatabase(app);

let Usersignup = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(
      (res) => {
        obj.id = res.user.uid;
        const user = res.user;
        //created new user in database users with id as base
        const reference = ref(db, `users/${obj.id}`);
        updateProfile(user, { displayName: obj.userName });
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

let UserLogin = (obj) => {
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

let userSignOut = () => {
  return signOut(auth);
};
let checkAuth = () => {
  return new Promise((resolve,reject)=>{
   auth.onAuthStateChanged((user)=>{
      if(user){
        const uid = user.uid;
        resolve(uid);
      }else{
        reject('User Not Logged In');
      }
    })
  })
};
let fbGet = () => {};

let fbGetId = () => {};

let fbEdit = () => {};

let fbDelete = () => {};

export {
  checkAuth,
  UserLogin,
  Usersignup,
  userSignOut,
  fbGet,
  fbGetId,
  fbEdit,
  fbDelete,
};
