import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPortalComponent } from './login-portal.component';
import { IonicModule } from '@ionic/angular';
import { LoginPortalRoutingModule } from './login-portal.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPortalComponent],
  imports: [IonicModule, CommonModule, FormsModule, LoginPortalRoutingModule],
})
export class LoginPortalModule {}
