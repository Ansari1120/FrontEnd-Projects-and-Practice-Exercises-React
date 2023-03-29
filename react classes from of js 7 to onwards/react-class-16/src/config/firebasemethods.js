import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, onValue, set, ref, push } from "firebase/database";

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

let UserLogin = (obj, nodeName) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(
          db,
          nodeName === "institute"
            ? `institute/${res.user.uid}`
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

let fbPost = (nodeName, obj, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      //post new Data
      let reference = ref(db, `${nodeName}/${id ? id : ""}`);
      set(reference, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      //edit existing data
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

let IntituteLogin = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `institute/${res.user.uid}`);
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

let AdminLogin = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `admin/${res.user.uid}`);
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
  fbPost,
  fbCustomPost,
};
