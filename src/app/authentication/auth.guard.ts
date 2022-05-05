/* eslint-disable no-debugger */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { format } from 'date-fns';
import { LoginSession } from 'projects/shared/models/login-session';
import { StorageService } from 'projects/shared/services/utils/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService) {}

  async canActivate() {
    const storage: LoginSession = await this.storageService.get('session');
    const path = location.pathname;

    if (storage && path.includes('login')) {
      return false;
    }

    return true;
  }
}
