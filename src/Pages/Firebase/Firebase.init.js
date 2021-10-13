import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthentecation = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentecation;
