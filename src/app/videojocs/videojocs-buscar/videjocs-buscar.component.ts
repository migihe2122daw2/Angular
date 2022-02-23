import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-videjocs-buscar',
  templateUrl: './videjocs-buscar.component.html',
  styleUrls: ['./videjocs-buscar.component.css'],
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
export class VidejocsBuscarComponent implements OnInit {

  // Sacar la lista de juegos de AppComponent
  listaVideojocsBuscar: any[] = [];
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
  }

  query: any;

  // Recuperar la query desde sessionStorage
  private async loadVideojocs() {
    this.query = sessionStorage.getItem('search');
    if (this.query) {
      const videojocs = await this.videojocsService.getSearchResults(this.query);
      this.listaVideojocsBuscar = videojocs.results;

      // Guardar en IndexedDB los resultados de cada busqueda
      

        for (const videojoc of this.listaVideojocsBuscar) {
          this.loadDescription(videojoc);
          const favorito = this.listaFavoritos().find(favorito => favorito.id === videojoc.id);
          if (favorito) {
            videojoc.favorito = true;
            videojoc.active = 'active';
          }
        
      }
    }
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

  private async loadDescription(videojoc: any) {
    const description = await this.videojocsService.getDescripcion(videojoc.id);
    videojoc.description = description.description;
    // Hacer que los elementos html de la descripcion sean interpretados como html
    videojoc.description = videojoc.description.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(description.description);
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

    this.listaVideojocsBuscar[index].active = (this.listaVideojocsBuscar[index].active) === 'active' ? 'inactive' : 'active';
  }

  toggleCard(index: number): void {
    this.listaVideojocsBuscar[index].activeI = (this.listaVideojocsBuscar[index].activeI) === 'active' ? 'inactive' : 'active';
  }

}
