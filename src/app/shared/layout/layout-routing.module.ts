import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeCardComponent } from 'src/app/anime-card/anime-card.component';
import { AnimeDetailComponent } from 'src/app/anime-detail/anime-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeCardComponent,
    // children: [
    //   {
    //     path: 'detail/:id',
    //     component: AnimeDetailComponent
    //   }
    // ]
  },
  {
    path: 'detail/:id',
    component: AnimeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
