import app from "../Config/firebaseconfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app)

let signUpUser = (obj) => {
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

let loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.id = res.user.uid;
        const refernece = ref(db, `users/${obj.id}`);
        set(refernece, obj)
          .then(() => {
            resolve("data is going succesfull");
          })
          .catch((err) => {
            reject(err.message);
          });
        // ...
      })
      .catch((error) => {
        console.log(error);
        reject(error);
        // ..
      });
  });
};
let signoutUser = () => {
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
      let reference = ref(db, `${nodeName}/${id ? id : " "}/`);
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
      let postRef = ref(db, `${nodeName}/${obj.id}/`);
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

let fbCustomPost = (nodeName,obj) =>{
  return new Promise ((resolve,reject)=>{
    const refernce = ref(db,`${nodeName}/`);
    set(refernce,obj).then(()=>{
      console.log('data send Successfully !');
    }).then((err)=>{
      console.log(err);
    })
  })
}
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
  checkAuth,
  fbPost,
  fbCustomPost,
};
