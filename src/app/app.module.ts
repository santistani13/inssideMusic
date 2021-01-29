import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListasComponent } from './components/listas/listas.component';
import { MusicService } from './services/music.service';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { FavoritasComponent } from './components/favoritas/favoritas.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistapageComponent } from './components/artistapage/artistapage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ListasComponent,
    TarjetaComponent,
    FavoritasComponent,
    LoadingComponent,
    NoimagePipe,
    ArtistapageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
