import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { User } from 'src/app/models/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user = {} as Login
  
  constructor(
    private firestore: Firestore,
    public afAuth: AngularFireAuth
    ) {}


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'Users'));
    return setDoc(document, data);    
  }

  async Login(user){
      try{
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
        console.log(result)
      }
      catch(e){
        console.log(e)
      }
    }
  }

