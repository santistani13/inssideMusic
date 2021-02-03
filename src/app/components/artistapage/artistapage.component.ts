import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-artistapage',
  templateUrl: './artistapage.component.html',
  styleUrls: ['./artistapage.component.css']
})
export class ArtistapageComponent implements OnInit {

  loading: boolean; 
  artista : any = {};
  track: any = {};  
  topTracks: any [] = []; 

  constructor( private router: ActivatedRoute,
               private ms: MusicService ) {
    this.loading = true; 
    this.router.params.subscribe( params => {
      this.getAartista( params [ 'id' ] );
      this.getTopTracks( params [ 'id' ] );
    })
   }

  ngOnInit(): void {
  }
  getAartista( id: string ){
    this.ms.getArtista( id )
    .subscribe( artista => {
      console.log( artista );
      this.artista = artista;
      this.loading = false;
    }) 
  }

  getTopTracks( id: string ) {
    this.ms.getTopTracks( id )
    .subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    })
  }
  agregarAFavoritos( track:any ){
    this.ms.addFav(track);
    console.log(track);
  }

}
