import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private canciones: any [] = [];
  token: string = '';
  constructor(private http: HttpClient) {
  }

  getToken(){
    return this.http.get('http://localhost:3000/spotify/1535a413fa3c4d91b0b6a061de269a5a/4e764a3dc5fc47d6908652fcc482aa77')
    .pipe(map( (data: token) =>{
      console.log(data);
      this.token = data.access_token;
      return data.access_token;

    } ))
  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token 
    })

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => {
      return data['albums'].items;
    }))
  }
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => {
        return data['artists'].items;
      }))
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map((data: any) => {
        return data['tracks'];
      }))
  }
  getCancion(termino: string) {
    return this.getQuery(`search?q=${termino}&type=track&limit=15`)
      .pipe(map((data: any) => {
        console.log(data);
        return data['tracks'].items;

      }))
  }
  getGenero(termino: string) {
    return this.getQuery(`browse/categories/${termino}/playlists`)
      .pipe(map((data: any) => {
        console.log(data);
        return data ['playlists'].items;
      }))
  }
  addFav(cancion: any) {
    this.canciones.push(cancion);
    console.log(cancion);
    this.guardarCanciones();
  }
  getFavTracks(){
    return this.canciones ;
  }
  guardarCanciones(){
    localStorage.setItem( 'data', JSON.stringify( this.canciones ) );
  }

  }

export interface token {
access_token : string ;
}
