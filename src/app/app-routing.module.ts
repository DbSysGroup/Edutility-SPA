import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateSetComponent } from './components/create-set/create-set.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-set', component: CreateSetComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
