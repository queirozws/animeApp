import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { AnimeCardComponent } from '../../anime-card/anime-card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    AnimeCardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    AnimeCardComponent
  ]
})
export class LayoutModule { }
