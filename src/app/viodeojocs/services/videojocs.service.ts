import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class VideojocsService {

  private apiKey = "6081b03a91c746419373f32848d687e3";
  private videojocsUrl = "https://api.rawg.io/api/games";
  public videjoc: any;


  constructor(private http: HttpClient) {
    
   }

  listarVideojocs(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?key=" + this.apiKey).toPromise();
  }

  listarVideojocsPorGenero(genero: string): Promise<any> {
    return this.http.get(this.videojocsUrl + "&genre=" + genero).toPromise();
  }

  listarSeriesVideojocs(): Promise<any> {
    return this.http.get(this.videojocsUrl).toPromise();
  }

  getDescripcion(id: number): Promise<any> {
    return this.http.get(this.videojocsUrl + "/" + id + "?key=" + this.apiKey).toPromise();
  }

  getSearchResults(search: string): Promise<any> {
    return this.http.get(this.videojocsUrl + "?search=" + search + "&key=" + this.apiKey).toPromise();
  }

  getVideojoc(id: string): Promise<any> {
    return this.http.get(this.videojocsUrl + "/" + id + "?key=" + this.apiKey).toPromise();
  }

}