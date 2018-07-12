import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceBlocklyComponent } from './service-blockly/service-blockly.component';

 const routes: Routes = [
    { path: 'b', component: ServiceBlocklyComponent }];
@NgModule({
 
      
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
