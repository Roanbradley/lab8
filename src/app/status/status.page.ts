import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
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
    IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList,
    IonLabel, IonItem, IonRadio, IonRadioGroup]
})

export class StatusPage implements OnInit {
  myStatus: string = ''; // Holds the user's status

  constructor(private storage: Storage, private router: Router) { }

  // Save the status to storage and navigate to home
  async OnSave(){
    await this.storage.create();
    await this.storage.set('status', this.myStatus);
    this.router.navigate(['/home']);
  }

  // Load the saved status when the page is about to enter
  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  ngOnInit() {}
}

