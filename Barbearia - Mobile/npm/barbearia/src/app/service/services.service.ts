import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { User } from 'src/app/models/cadastro';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(
    private firestore: Firestore) {}


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'Users'));
    return setDoc(document, data);    
  }

  }

