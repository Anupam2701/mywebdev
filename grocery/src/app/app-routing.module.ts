import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';

const routes: Routes = [
  { path: 'fruit', component: FruitComponent },
  { path: 'vegetable', component: VegetableComponent },
  { path: '', redirectTo: '/fruit', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

