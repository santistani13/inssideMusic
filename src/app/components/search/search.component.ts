
import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
artists: any [] =[];
loading: boolean ; 

  constructor( private ms: MusicService) { 
    this.loading = false;
  }

  ngOnInit(): void {
  }

  buscar( termino:string ){
   
    this.ms.getArtista(termino).subscribe( data =>{
      this.loading = true;
      this.artists = data ;
      this.loading = false;
    });
    
  }


}
