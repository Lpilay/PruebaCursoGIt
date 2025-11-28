import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from "src/app/components/components-module";
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonListHeader, IonItem, IonList, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],  
  imports: [ComponentsModule,IonicModule,FormsModule],
  
})
export class InputPage implements OnInit {
  nombre: string = 'Luis Pilay';
  usuario = {
  email: '',
  password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log('submit');  
    console.log(this.usuario);
    console.log(formulario);
    }


}
