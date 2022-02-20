import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';
// importar animaciones
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-videojocs-top',
  templateUrl: './videojocs-top.component.html',
  styleUrls: ['./videojocs-top.component.css'],
  animations: [
    // animacion al cargar imagen
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', animate(1000)),
    ]),
  ]
})

export class VideojocsTopComponent implements OnInit {

  listaVideojocs: any[] = [];

  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadVideojocs();
  }

  private async loadVideojocs() {
    const videojocs = await this.videojocsService.listarVideojocs();
    this.listaVideojocs = videojocs.results;
    console.log(videojocs.results);
  }

  addFavorito(videojoc: any) {
    // Guardar en localStorage el id y el nombre del videojocs, si ya existe quitarlo
    const favoritos = localStorage.getItem('favoritos');
    let favoritosArray: any[] = [];
    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }
    const existe = favoritosArray.find(favorito => favorito.id === videojoc.id);
    if (existe) {
      const index = favoritosArray.indexOf(existe);
      favoritosArray.splice(index, 1);
    } else {
      favoritosArray.push(videojoc);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
  }

  active = true;

  toggle() {
    this.active = !this.active;
  }

}

// Crear efectos de hover en las imagenes de los videojocs

