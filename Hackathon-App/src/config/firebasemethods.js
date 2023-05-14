import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "./firebaseconfig";
import {
  getDatabase,
  onValue,
  set,
  ref,
  push,
  remove,
} from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);

let Usersignup = (obj, nodeName) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(
      (res) => {
        obj.id = res.user.uid;
        const user = res.user;
        //created new user in database users with id as base
        const reference = ref(
          db,
          nodeName === "Transporters"
            ? `tranporterusers/${res.user.uid}`
            : `users/${res.user.uid}`
        );
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

let UserLogin = (obj, nodeName) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(
          db,
          nodeName === "Transporters"
            ? `tranporterusers/${res.user.uid}`
            : `users/${res.user.uid}`
        );
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
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        reject("User Not Logged In");
      }
    });
  });
};

let fbGet = (nodeName, id) => {
  let reference = ref(db, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(reference, (dt) => {
      if (dt.exists()) {
        if (id) {
          resolve(dt.val());
        } else {
          resolve(Object.values(dt.val()));
        }
      } else {
        reject("no Data Found");
      }
    });
  });
};

//firebase add data + edit data
let fbPost = (nodeName, obj, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      let reference = ref(db, `${nodeName}/${id ? id : ""}`);
      set(reference, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      let keyRef = ref(db, `${nodeName}`);
      obj.id = push(keyRef).key;
      let postRef = ref(db, `${nodeName}/${obj.id}`);
      set(postRef, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

let fbCustomPost = (nodeName, obj) => {
  return new Promise((resolve, reject) => {
    const refernce = ref(db, `${nodeName}/`);
    set(refernce, obj)
      .then(() => {
        // console.log("data send Successfully !");
        resolve("data send sucessfully");
      })
      .then((err) => {
        // console.log(err);
        reject(err);
      });
  });
};

let fbGetId = () => {};

let fbDelete = (nodeName, id) => {
  const refrence = ref(db, nodeName + "/" + id);
  return remove(refrence);
};

export {
  checkAuth,
  UserLogin,
  Usersignup,
  userSignOut,
  fbGet,
  fbGetId,
  fbDelete,
  fbPost,
  fbCustomPost,
};
