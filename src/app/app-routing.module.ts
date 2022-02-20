import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideojocsFavComponent } from './videojocs/videojocs-fav/videojocs-fav.component';
import { VideojocsTopComponent } from './videojocs/videojocs-top/videojocs-top.component';

  const routes: Routes = [
    { path: '', component: VideojocsTopComponent },    
  { path: 'favoritos', component: VideojocsFavComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
