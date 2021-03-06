import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Animar boton del menu
    trigger('botonMenu', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('void => *', animate('1000ms ease-in')),
      transition('* => void', animate('1000ms ease-out'))
    ]),

    // Al clicar el boton del menu, girar el boton
    trigger('botonMenu2', [
      state('active', style({
        transform: 'rotate(45deg)'
      })),
      state('inactive', style({
        transform: 'rotate(0deg)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),

    // Animar el boton de favoritos

  ]
})



export class AppComponent {

  listaVideojocs: any[] = [];
  searchValue = '';

  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadVideojocs();
  }

  private loadVideojocs() {
    this.videojocsService.listarVideojocs().then(
      (videojocs: any) => {
        this.listaVideojocs = videojocs;
      }
    );
  }

  async searchResults(query: string) {
    // Guardar la busqueda en session storage
    sessionStorage.setItem('search', query);
  }

  onSubmit() {
    // Redirigir a la pagina de busqueda
    window.location.href = '/buscar/';
  }

  


  isActive = false;

  toggle() {
    this.isActive = !this.isActive;
  }
}