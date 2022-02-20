import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojocsService {

  private apiKey = "6081b03a91c746419373f32848d687e3";
  private videojocsUrl = "https://api.rawg.io/api/games?page_size=50&key=6081b03a91c746419373f32848d687e3";



  constructor(private http: HttpClient) {
    
   }

  listarVideojocs(): Promise<any> {
    return this.http.get(this.videojocsUrl).toPromise();
  }

  listarVideojocsPorGenero(genero: string): Promise<any> {
    return this.http.get(this.videojocsUrl + "&genre=" + genero).toPromise();
  }

  listarSeriesVideojocs(): Promise<any> {
    return this.http.get(this.videojocsUrl).toPromise();
  }

}
