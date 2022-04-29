import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { format } from 'date-fns';
import { LoginSession } from 'projects/shared/models/login-session';
import { LoadingService } from 'projects/shared/services/utils/loader.service';
import { StorageService } from 'projects/shared/services/utils/storage.service';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss'],
})
export class LoginPortalComponent implements OnInit {
  public usernameEmail: string = null;
  public password: string = null;
  public isDisabledLogin: boolean = true;

  constructor(
    private storageService: StorageService,
    private loadingService: LoadingService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  public async login() {
    if (this.usernameEmail && this.password) {
      const session: LoginSession = {
        value: 'auth-bearer',
        expiry: format(new Date(new Date().getTime() + 1 * 60 * 60 * 1000), "yyyy-MM-dd'T'HH:mm:ss"),
        uId: '',
      };

      this.storageService.set('session', session);

      const loading = await this.loadingService.presentLoading();

      setTimeout(async () => {
        await loading.dismiss();
      }, 2000);

      await loading.onDidDismiss();

      this.navController.navigateForward('/home');
    }
  }
}
