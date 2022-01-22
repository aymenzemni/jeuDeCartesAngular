import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartesComponent } from './cartes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: CartesComponent
  }

];
@NgModule({
  declarations: [CartesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CartesModule { }
