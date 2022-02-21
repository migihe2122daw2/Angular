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

    // Animar boton de favoritos
    trigger('favoritos', [
      state('inactive', style({
        // Dejar el corazon blanco
        color: 'white',

      })),
      state('active', style({
        // Poner el corazon rojo
        color: 'red',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])

  ]
})

export class VideojocsTopComponent implements OnInit {

  listaVideojocs: any[] = [];

  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadFavoritos();
    this.loadVideojocs();
  }

  private loadFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    if (favoritos) {
      this.listaVideojocs = JSON.parse(favoritos);
    }
    // Comparar la lista de videojocs con la lista de favoritos
    for (const videojoc of this.listaVideojocs) {
      const favorito = this.listaVideojocs.find(favorito => favorito.id === videojoc.id);
      if (favorito) {
        videojoc.favorito = true;
        videojoc.active = 'active';
      }
    }

  }

  private async loadVideojocs() {
    const videojocs = await this.videojocsService.listarVideojocs();
    this.listaVideojocs = videojocs.results;
    console.log(videojocs.results);
    for (const videojoc of this.listaVideojocs) {
      this.loadDescription(videojoc);
    }
  }

  private async loadDescription(videojoc: any) {
    const description = await this.videojocsService.getDescripcion(videojoc.id);
    videojoc.description = description.description;
    // Hacer que los elementos html de la descripcion sean interpretados como html
    videojoc.description = videojoc.description.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(description.description);
  }

  moveLeft() {
    document.getElementsByClassName('list-videojocs')[0].scrollLeft -= 100;
  }

  moveRight() {
    document.getElementsByClassName('list-videojocs')[0].scrollLeft += 100;
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

  toggle(index: number): void {
  
    this.listaVideojocs[index].active = (this.listaVideojocs[index].active) === 'active' ? 'inactive' : 'active';
  }

}

// Crear efectos de hover en las imagenes de los videojocs

