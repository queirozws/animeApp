import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/layout/login/login.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'animes',
        loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule)
      },
      // {
      //   path: 'detail:id',
      //   loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule)
      // }
    ]
  },
  {
    path: 'signin',
    component: LoginComponent,
    // canActivate: 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
