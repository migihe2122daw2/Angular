import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';
import { VideojocsTopComponent } from '../videojocs-top/videojocs-top.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-videojocs-fav',
  templateUrl: './videojocs-fav.component.html',
  styleUrls: ['./videojocs-fav.component.css'],
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
    

    trigger('hover', [
      state('active', style({
        // Dejar la imagen normal
        transform: 'scale(1)',
      })),
      state('inactive', style({
        // Poner la imagen aumentada
        transform: 'scale(1.1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),

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
export class VideojocsFavComponent implements OnInit {

  listaFav: any[] = [];
  constructor(VideojocsService: VideojocsService) { }
  
  

  ngOnInit(): void {
    this.cargarArray();
  }

  private async cargarArray() {
    const favoritos = await localStorage.getItem('favoritos');
    if (favoritos) {
      // Comprobar que el valor del localStorage tiene algo
      if (favoritos.length > 0) {
      this.listaFav = JSON.parse(favoritos);
      // Marcar el corazon rojo
      for (const videojoc of this.listaFav) {
        const favorito = this.listaFav.find(favorito => favorito.id === videojoc.id);
        if (favorito) {
          videojoc.favorito = true;
          videojoc.active = 'active';
        }
      }
    }
  }else{
    // Dar un mensaje en el html
    this.listaFav = [];
  }

    console.log(this.listaFav);
  }


  eliminarFav(videojoc: any) {
    // Eliminar del localStorage el id y el nombre del videojoc
    const favoritos = localStorage.getItem('favoritos');
    let favoritosArray: any[] = [];
    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }
    const existe = favoritosArray.find(favorito => favorito.id === videojoc.id);
    if (existe) {
      const index = favoritosArray.indexOf(existe);
      favoritosArray.splice(index, 1);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
  }

  // Eliminar elemento de la lista si ya no está en favoritos

  eliminarFavLista(index: number, videojoc: any) {
    
    this.listaFav.splice(index, 1);
    // Eliminar del localStorage el id y el nombre del videojoc
    const favoritos = localStorage.getItem('favoritos');
    let favoritosArray: any[] = [];
    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }
    const existe = favoritosArray.find(favorito => favorito.id === videojoc.id);
    if (existe) {
      const index = favoritosArray.indexOf(existe);
      favoritosArray.splice(index, 1);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));

    // Recargar la lista
    this.cargarArray();
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

  toggle(index: number): void {

    this.listaFav[index].active = (this.listaFav[index].active) === 'active' ? 'inactive' : 'active';
  }

  toggleCard(index: number): void {
    this.listaFav[index].activeI = (this.listaFav[index].activeI) === 'active' ? 'inactive' : 'active';
  }
}
