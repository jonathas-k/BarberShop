import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { User } from 'src/app/models/cadastro';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-cadas',
  templateUrl: './tela-cadas.page.html',
  styleUrls: ['./tela-cadas.page.scss'],
})
export class TelaCadasPage implements OnInit {
  user = [];
  segId = "overview";
  public userForm: FormGroup;


  constructor(
    private service:ServicesService, 
    private router:Router, 
    private route:ActivatedRoute, 
    private userBuilder:FormBuilder) { }

    signUp(data:User): void {
      this.service.userSignUp(data);
    }
    
    ngOnInit(){

      this.userForm = this.userBuilder.group({
        nome: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-Z]*')])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        telefone: ['',Validators.compose([Validators.required, Validators.minLength(15)])],
        senha: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
      });

}
}
