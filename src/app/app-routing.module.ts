import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListasComponent } from './components/listas/listas.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritasComponent } from './components/favoritas/favoritas.component';
import { ArtistapageComponent } from './components/artistapage/artistapage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'listas', component: ListasComponent },
  { path: 'favoritas', component: FavoritasComponent },
  { path: 'artist/:id', component: ArtistapageComponent },
   { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
