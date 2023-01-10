import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRouteModule } from './book-route.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './component/book-item/book-item.component';



@NgModule({
  declarations: 
    [
      BookListComponent,
      BookItemComponent
    ],
  
  imports: [
    CommonModule,
    BookRouteModule
  ]
})
export class BookModule { }
