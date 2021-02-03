
import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
artists: any [] =[];
tracks: any [] = [];
playlists: any [] = [];
loading: boolean ; 
canciones: boolean ;
tarjetas: boolean;
generos: boolean;
lista: string [] = [
  'artista', 'genero', 'cancion'
]
buscador: string = '' ;

  constructor( private ms: MusicService ) { 
    this.loading = false;
    this.canciones = false;
    this.tarjetas = false;
    this.generos = false
  }

  ngOnInit(): void {
  
  }

  buscar( termino:string ){
   if ( this.buscador === 'artista' ){
    this.ms.getArtista(termino).subscribe( data =>{
      this.loading = true;
      console.log(data);
      this.artists = data ;
      this.loading = false;
      this.canciones = false; 
      this.tarjetas = true;
      this.generos = false;
    });
    
   }
    if ( this.buscador === 'cancion' ){
      this.ms.getCancion(termino).subscribe (data => {
        this.tracks = data ;
        this.canciones = true;
        this.tarjetas = false;
        this.generos = false;
      })
    }
    if ( this.buscador === 'genero' ){
      this.ms.getGenero(termino).subscribe(data => {
        this.playlists = data; 
       this.canciones = false;
       this.tarjetas = false;
       this.generos = true;
      })
    }
  }

  elegirCat( ls:string ){
console.log(ls);
this.buscador = ls; 

  }

  agregarAFavoritos(track: any){
   this.ms.addFav(track);
     console.log(track);
  }
  
}