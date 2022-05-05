import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../projects/mobile/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../../projects/mobile/login-portal/login-portal.module').then(m => m.LoginPortalModule),
    canActivate: [AuthGuard],
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
