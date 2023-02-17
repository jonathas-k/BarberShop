import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { Admin } from 'src/app/models/cadastro';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(
    private firestore: Firestore) {}


  // Create
  userSignUp(data: Admin){
    const document = doc (collection(this.firestore, 'Admin'));
    return setDoc(document, data);    
  }

  }

