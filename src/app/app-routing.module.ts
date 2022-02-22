import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideojocsFavComponent } from './videojocs/videojocs-fav/videojocs-fav.component';
import { VideojocsTopComponent } from './videojocs/videojocs-top/videojocs-top.component';
import { VideojocsMostPopularComponent } from './videojocs/videojocs-most-popular/videojocs-most-popular.component';
import { VidejocsBuscarComponent } from './videojocs/videojocs-buscar/videjocs-buscar.component';
import { VidejocsInfoComponent } from './videojocs/videjocs-info/videjocs-info.component';

  const routes: Routes = [
    { path: '', component: VideojocsTopComponent },    
  { path: 'favoritos', component: VideojocsFavComponent },
  { path: 'buscar', component: VidejocsBuscarComponent },
  { path: 'info', component: VidejocsInfoComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
