import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';
// importar animaciones
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-videjocs-accion',
  templateUrl: './videjocs-accion.component.html',
  styleUrls: ['./videjocs-accion.component.css'],
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
    ]),

    // Animacion pasar por encima de la imagen de la tarjeta
    trigger('hover', [
      state('inactive', style({
        // Dejar la imagen normal
        transform: 'scale(1)',
      })),
      state('active', style({
        // Poner la imagen aumentada
        transform: 'scale(1.1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),

    // Animar titulo
    trigger('titulo', [
      state('void', style({
        // Al cargar la pagina, aparece por arriba
        transform: 'translateY(-100px)',
        opacity: 0,
      })),
      transition('void => *', animate('1000ms ease-in')),
      

    ]),



  ]
})

export class VidejocsAccionComponent implements OnInit {

  listaVideojocs: any[] = [];
  listaFavoritos(): any[] {
    const favoritos = localStorage.getItem('favoritos');
    if (favoritos) {
      // Comprobar que el valor del localStorage tiene algo
      if (favoritos.length > 0) {
        return JSON.parse(favoritos);
      }
    }
    return [];
  }


  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadVideojocs();
    this.toggleTitulo();
  }



  private async loadVideojocs() {
    const videojocs = await this.videojocsService.listarVideojocsAccio();
    this.listaVideojocs = videojocs.results;
    for (const videojoc of this.listaVideojocs) {
      this.loadDescription(videojoc);
      const favorito = this.listaFavoritos().find(favorito => favorito.id === videojoc.id);
      if (favorito) {
        videojoc.favorito = true;
        videojoc.active = 'active';
      }
    }
  }

  private async loadDescription(videojoc: any) {
    const description = await this.videojocsService.getDescripcion(videojoc.id);
    videojoc.description = description.description;
    // Hacer que los elementos html de la descripcion sean interpretados como html
    videojoc.description = videojoc.description.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(this.listaVideojocs);
  }

  mostrarInfoJuego(videojoc: any): void {
    //Guardar el id en sessionStorage
    sessionStorage.setItem('id', videojoc.id);
    // Meter el objeto videojoc en el indexedDB
    this.guardarVideojoc(videojoc); 
    
  }

  guardarVideojoc(videojoc: any) {
    // Guardar el objeto en localStorage
    const videojocs = localStorage.getItem('videojocs');
    let videojocsArray: any[] = [];
    if (videojocs) {
      videojocsArray = JSON.parse(videojocs);
    }
    const existe = videojocsArray.find(videojoc => videojoc.id === videojoc.id);
    if (existe) {
      return;
    }
    videojocsArray.push(videojoc);
    localStorage.setItem('videojocs', JSON.stringify(videojocsArray));
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
  activeT = false;

  toggleTitulo(): void {
    this.activeT = !this.activeT;
  }

  toggleCard(index: number): void {
    this.listaVideojocs[index].activeI = (this.listaVideojocs[index].activeI) === 'active' ? 'inactive' : 'active';
  }
}
