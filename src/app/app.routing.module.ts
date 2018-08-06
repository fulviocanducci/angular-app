import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthLogged } from './core/auth/auth.logged';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    canActivate: [ 
      AuthGuard 
    ]
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    canActivate: [
      AuthLogged
    ]
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },  
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [
      AuthLogged
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
