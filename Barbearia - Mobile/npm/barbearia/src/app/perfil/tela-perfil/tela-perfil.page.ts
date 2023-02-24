import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/cadastro';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.page.html',
  styleUrls: ['./tela-perfil.page.scss'],
})
export class TelaPerfilPage implements OnInit {
  public consultas : Observable<User[]>

  public editMode = false

  constructor(private service: ServicesService) { 
    this.consultas = this.service.getContacts()
  }

  edit(){
    switch (this.editMode){
      case false:
        this.editMode = true;
        break;

      case true:
        this.editMode = false;
        break;
    }
  }

  ngOnInit() {

  }

}