import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    // loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule)
    
  },

  {
    path: 'blog',
    
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    
  },

  {
    path: 'profile',
    
    loadChildren: () => import('./modules/profile/profile-route.module').then(m => m.ProfileRouteModule)
    
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
