import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [] 
  loading: boolean ;

  constructor( private ms: MusicService ) { 
    this.loading = true;
    this.ms.getNewReleases().subscribe(  data  => {
  this.nuevasCanciones = data;
  this.loading = false;
    } )
    
  }

  ngOnInit(): void {
  }

}
