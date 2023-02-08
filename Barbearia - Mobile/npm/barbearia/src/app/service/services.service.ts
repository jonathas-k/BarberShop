import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { User } from 'src/app/models/cadastro';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private firestore: Firestore) { }


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'data'));
    return setDoc(document, data);    
  }

  // Logar
  userLogin(data:Login) {
    console.warn(data)
    const document = doc (collection(this.firestore, 'data'));
    return setDoc(document, data);
  }

  // Read
  }

