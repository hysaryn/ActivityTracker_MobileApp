import {collection, addDoc, doc, deleteDoc, setDoc} from "firebase/firestore";
import {database} from './firebaseSetup';

export async function writeToDB (data) {
try {
    await addDoc(collection(database, "activities"), data);
} catch (err) {
    console.error(err);
}
}

export async function deleteFromDB (id) {
   try {
       await deleteDoc(doc(database, "activities",id));
   } catch (err) {
       console.error(err);
   }
}

export async function updateDB (id, data) {
   try {
       await setDoc(doc(database, "activities", id), data);
   } catch (err) {
       console.error(err);
   }
}