import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


   async function getItems(userID){
    try{
        const gatherItems = collection(db, "users", userID, "items");
        const getItem = await getDocs(gatherItems);
        const items = getItem.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        return items;
        } catch (error) {
            console.error("Could not get items: ", error);
            return [];
        }

    }

   async function addItem(userID, item){
    try {
    const gatherItems = collection(db, "users", userID, "items");
    const docRef = await addDoc(gatherItems, item);
    return docRef.id;
   } catch (error) {
    console.error('Error adding item ', error);
    return null;
    }
   };

   async function updateItem(){

   }

   async function deleteItem(){
    
   }

   export { getItems, addItem };