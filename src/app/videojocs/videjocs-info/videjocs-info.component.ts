import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';

@Component({
  selector: 'app-videjocs-info',
  templateUrl: './videjocs-info.component.html',
  styleUrls: ['./videjocs-info.component.css']
})
export class VidejocsInfoComponent implements OnInit {

  // Recoger el el videojoc de Servicios
  videojoc: any;


  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadVideojoc();
  }

  private async loadVideojoc() {
    // Leer el id que se pasa por sessionStorage
    const id = await sessionStorage.getItem('id');

    // Recuperar el videojoc de localStorage
    const videojoc = localStorage.getItem('videojocs');
    console.log(videojoc);
    if (videojoc) {
      // Comprobar que el valor del localStorage tiene algo
      if (videojoc.length > 0) {
        // Convertir el string a objeto
        this.videojoc = JSON.parse(videojoc);
      }
    }

    console.log(this.videojoc);
  }
}
