import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritasComponent } from './components/favoritas/favoritas.component';
import { HomeComponent } from './components/home/home.component';
import { ListasComponent } from './components/listas/listas.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'listas', component: ListasComponent },
  { path: 'favoritas', component: FavoritasComponent },
   { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
