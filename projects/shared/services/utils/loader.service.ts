import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  public async presentLoading(message: string = 'Please wait...') {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });
    await loading.present();

    return loading;
  }
}
