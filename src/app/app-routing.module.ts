import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideojocsFavComponent } from './videojocs/videojocs-fav/videojocs-fav.component';
import { VideojocsTopComponent } from './videojocs/videojocs-top/videojocs-top.component';
import { VidejocsBuscarComponent } from './videojocs/videojocs-buscar/videjocs-buscar.component';
import { VidejocsInfoComponent } from './videojocs/videjocs-info/videjocs-info.component';
import { VidejocsAccionComponent } from './videojocs/videjocs-accion/videjocs-accion.component';
import { VidejocsAventuraComponent } from './videojocs/videjocs-aventura/videjocs-aventura.component';
import { VidejocsCasualComponent } from './videojocs/videjocs-casual/videjocs-casual.component';
import { VidejocsEstrategiaComponent } from './videojocs/videjocs-estrategia/videjocs-estrategia.component';
import { VidejocsDeporteComponent } from './videojocs/videjocs-deporte/videjocs-deporte.component';
import { VidejocsPcComponent } from './videojocs/videjocs-pc/videjocs-pc.component';
import { VidejocsPlaystationComponent } from './videojocs/videjocs-playstation/videjocs-playstation.component';
import { VidejocsXboxComponent } from './videojocs/videjocs-xbox/videjocs-xbox.component';
import { VidejocsNintendoComponent } from './videojocs/videjocs-nintendo/videjocs-nintendo.component';
import { VidejocsWiiComponent } from './videojocs/videjocs-wii/videjocs-wii.component';
import { VidejocsLinuxComponent } from './videojocs/videjocs-linux/videjocs-linux.component';
import { VidejocsMacosComponent } from './videojocs/videjocs-macos/videjocs-macos.component';
import { VidejocsIosComponent } from './videojocs/videjocs-ios/videjocs-ios.component';
import { VidejocsAndroidComponent } from './videojocs/videjocs-android/videjocs-android.component';

  const routes: Routes = [
    { path: '', component: VideojocsTopComponent },    
  { path: 'favoritos', component: VideojocsFavComponent },
  { path: 'buscar', component: VidejocsBuscarComponent },
  { path: 'info', component: VidejocsInfoComponent },
  { path: 'accion', component: VidejocsAccionComponent },
  { path: 'aventura', component: VidejocsAventuraComponent },
  { path: 'casual', component: VidejocsCasualComponent },
  { path: 'estrategia', component: VidejocsEstrategiaComponent },
  { path: 'deporte', component: VidejocsDeporteComponent },
  { path: 'pc', component: VidejocsPcComponent },
  { path: 'ps', component: VidejocsPlaystationComponent },
  { path: 'xbox', component: VidejocsXboxComponent },
  { path: 'nintendo', component: VidejocsNintendoComponent },
  { path: 'wii', component: VidejocsWiiComponent },
  { path: 'linux', component: VidejocsLinuxComponent },
  { path: 'macos', component: VidejocsMacosComponent },
  { path: 'ios', component: VidejocsIosComponent },
  { path: 'android', component: VidejocsAndroidComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
