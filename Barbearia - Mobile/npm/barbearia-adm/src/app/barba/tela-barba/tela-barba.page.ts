import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-barba',
  templateUrl: './tela-barba.page.html',
  styleUrls: ['./tela-barba.page.scss'],
})
export class TelaBarbaPage implements OnInit {
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
