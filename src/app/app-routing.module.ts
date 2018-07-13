import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlocklyComponent } from './blockly/blockly.component';

 const routes: Routes = [
    { path: 'b', component: BlocklyComponent }];
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
