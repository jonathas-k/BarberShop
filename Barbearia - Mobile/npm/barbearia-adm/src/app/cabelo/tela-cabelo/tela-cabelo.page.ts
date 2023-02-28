import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Servicos } from 'src/app/models/servicos';
import { ServicesService } from 'src/app/service/service.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-tela-cabelo',
  templateUrl: './tela-cabelo.page.html',
  styleUrls: ['./tela-cabelo.page.scss'],
})
export class TelaCabeloPage implements OnInit {
  public consultas : Observable<Servicos[]>
  public editMode = false
  
  constructor(private alertController: AlertController, private service:ServicesService) {
    this.consultas = this.service.getServicos()
   }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Criar um novo serviço',
      cssClass: 'custom-alert',
      
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
        },
        {
          name: 'descricao',
          placeholder: 'Descrição',
        },
        {
          name: 'valor',
          type: 'number',
          placeholder: 'Valor',
          min: 1,
        },
      ],

      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Criar',
          cssClass: 'alert-button-confirm',

          handler: async(dados) =>{
            const nome = dados.nome;
            const descricao = dados.descricao;
            const valor = dados.valor;

            this.service.AddServico(dados)
          }
        },
      ],
    });

    await alert.present();
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
