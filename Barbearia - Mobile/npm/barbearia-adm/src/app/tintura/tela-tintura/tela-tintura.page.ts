import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-tintura',
  templateUrl: './tela-tintura.page.html',
  styleUrls: ['./tela-tintura.page.scss'],
})
export class TelaTinturaPage implements OnInit {
  public editMode = false

  constructor() { }

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
