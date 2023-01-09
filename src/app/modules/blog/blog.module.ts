import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';



@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { 

  // blogFunction = () => {
  //   let userModule = new UserModule()
  //   userModule.userModuleMethod()
  // }

}
