import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/cadastro';
import { map } from 'rxjs/operators'
import { Servicos } from '../models/servicos';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  valor: string
  
  constructor(
    private firestore: Firestore) {}


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'Admin'));
    return setDoc(document, data);    
  }

  AddServico(data: Servicos){
    const document = doc (collection(this.firestore, 'Servicos'));
    return setDoc(document, data);    
  }

  // Read
  getContacts(): Observable<User[]> {
    const contactsCollection = collection(this.firestore, 'Admin');
    return collectionData(contactsCollection, {idField: 'id'}).pipe(
      map(contacts => contacts as User[])
    );
  }

  getServicos(): Observable<Servicos[]> {
    const contactsCollection = collection(this.firestore, 'Servicos');
    return collectionData(contactsCollection, {idField: 'id'}).pipe(
      map(contacts => contacts as Servicos[])
    );
  }

  getServicoByIndex(index: number): Observable<Servicos> {
    return this.getServicos().pipe(
      map(servicos => servicos[index.valueOf()])
    );
  }

  }

