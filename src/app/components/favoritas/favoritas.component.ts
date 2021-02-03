import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {

  tracks: any[] = [];
  constructor(private ms: MusicService) {
    this.tracks = this.ms.getFavTracks();
    console.log(this.tracks);
  }
    ngOnInit(): void {}
eliminarCancion(i:number){
  this.tracks.splice(i, 1);
}
  
}




