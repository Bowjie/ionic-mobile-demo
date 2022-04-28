import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPortalComponent } from './login-portal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPortalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginPortalRoutingModule {}
