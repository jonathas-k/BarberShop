import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc, deleteDoc } from '@angular/fire/firestore';

import { Login } from 'model/login';
import { User } from 'model/user';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore: Firestore) { }

  userSignUp(data: User) {
    const document = doc (collection(this.firestore, 'data'));
    return setDoc(document, data);    
  }

  userLogin(data:Login) {
    console.warn(data)
    const document = doc (collection(this.firestore, 'data'));
    return setDoc(document, data);

  }
 
  deleteUser() {
    localStorage.removeItem("login");
  }
}
