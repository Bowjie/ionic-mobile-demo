import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { LoginSession } from 'projects/shared/models/login-session';
import { SharedService } from 'projects/shared/services/utils/shared.service';
import { UserService } from 'projects/shared/services/api/user.service';
import { StorageService } from 'projects/shared/services/utils/storage.service';
import { ToastService } from 'projects/shared/services/utils/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private userService: UserService,
    private storageService: StorageService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkLoginSession();
  }

  private async checkLoginSession() {
    const storage: LoginSession = await this.storageService.get('session');

    if (storage) {
      try {
        const now = format(new Date(), `yyyy-MM-dd'T'HH:mm:ss`);

        if (now > storage.expiry) {
          this.router.navigate(['/login']);
        } else {
          if (location.pathname === '/' || location.pathname.includes('login')) {
            this.router.navigate(['home']);
          }
          this.setUserLoginDetails(storage);
        }
      } catch (error) {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  private setUserLoginDetails(loginData: LoginSession) {
    //call endpoint of user get with loginData.id params

    this.userService.getDummyUser().subscribe(
      (result) => {
        if (result && result.data) {
          this.sharedService.userSubject.next(result.data[0]);
        }
      },
      () => {
        this.toastService.presentToast('An error occured');
      }
    );
  }
}
