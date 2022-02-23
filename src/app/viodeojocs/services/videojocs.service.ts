import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';


@Injectable({
  providedIn: 'root'
})
export class VideojocsService {

  private apiKey = "85cf1449ca2a48229fd7accf6f3e593c";
  private videojocsUrl = "https://api.rawg.io/api/games";
  public videjoc: any;
  private pcId = 4;
  private xboxOneId = 1;
  private xbox360Id = 14;
  private xboxSXId = 186;
  private ps5Id = 187;
  private ps4Id = 18;
  private ps3Id = 16;
  private ps2Id = 15;
  private psVitaId = 19;
  private pspId = 17;
  private switch = 7;
  private nintendo3dsId = 8;
  private wiiId = 11;
  private linuxId = 6;
  private macosId = 5;
  private iosId = 3;
  private androidId = 21;




  constructor(private http: HttpClient) {
    
   }

  listarVideojocs(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?key=" + this.apiKey).toPromise();
  }

  listarVideojocsAccio(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?genres=action&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsAventura(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?genres=adventure&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsCasual(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?genres=casual&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsEstrategia(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?genres=strategy&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsDeportes(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?genres=sports&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsAndroid(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.androidId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsIOS(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.iosId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsLinux(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.linuxId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsMacOS(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.macosId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsNintendo(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.nintendo3dsId +","+ this.switch + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsWii(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.wiiId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsPlaystation(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.ps5Id + "," + this.ps4Id + "," + this.ps3Id + "," + this.ps2Id + "," + this.psVitaId + "," + this.pspId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsXbox(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.xboxOneId + "," + this.xbox360Id + "," + this.xboxSXId + "&page_size=70&key=" + this.apiKey).toPromise();
  }

  listarVideojocsPC(): Promise<any> {
    return this.http.get(this.videojocsUrl + "?platforms=" + this.pcId + "&page_size=70&key=" + this.apiKey).toPromise();
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