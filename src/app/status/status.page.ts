import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
   IonBackButton, IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
   import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons,IonBackButton, IonList,
  IonLabel, IonItem, IonRadio, IonRadioGroup]
})

export class StatusPage implements OnInit {
myStatus: string = '';
  constructor(private storage:Storage, private router:Router) { }

async OnSave(){
  console.log(this.myStatus);
  await this.storage.create();
  await this.storage.set('status', this.myStatus);
  this.router.navigate(['/home']);
}

async ionViewWillEnter(){
  await this.storage.create();
   this.myStatus = await this.storage.get('status');

}

  ngOnInit() {
  }

}
