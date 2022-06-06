import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeCardComponent } from 'src/app/anime-card/anime-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeCardComponent,
    // children: [
    //   {
    //     path: 'detail/:id',
    //     component: LoginComponent
    //   }
    // ]
  },
  {
    path: 'detail/:id',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
