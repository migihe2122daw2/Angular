import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { VideojocsTopComponent } from './videojocs/videojocs-top/videojocs-top.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { VideojocsFavComponent } from './videojocs/videojocs-fav/videojocs-fav.component';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { VidejocsBuscarComponent } from './videojocs/videojocs-buscar/videjocs-buscar.component';
import { VidejocsInfoComponent } from './videojocs/videjocs-info/videjocs-info.component';
import {MatChipsModule} from '@angular/material/chips';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { LOCALE_ID } from '@angular/core';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
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
import { VidejocsIosComponent } from './videojocs/videjocs-ios/videjocs-ios.component';
import { VidejocsAndroidComponent } from './videojocs/videjocs-android/videjocs-android.component';
import { VidejocsLinuxComponent } from './videojocs/videjocs-linux/videjocs-linux.component';
import { VidejocsMacosComponent } from './videojocs/videjocs-macos/videjocs-macos.component';
registerLocaleData(localEs, 'es');


@NgModule({
  declarations: [

    VideojocsTopComponent,
    AppComponent,
    VideojocsFavComponent,
    VidejocsBuscarComponent,
    VidejocsInfoComponent,
    VidejocsAccionComponent,
    VidejocsAventuraComponent,
    VidejocsCasualComponent,
    VidejocsEstrategiaComponent,
    VidejocsDeporteComponent,
    VidejocsPcComponent,
    VidejocsPlaystationComponent,
    VidejocsXboxComponent,
    VidejocsNintendoComponent,
    VidejocsWiiComponent,
    VidejocsIosComponent,
    VidejocsAndroidComponent,
    VidejocsLinuxComponent,
    VidejocsMacosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatAutocompleteModule, 
    MatSliderModule,
    MatChipsModule,
    CarouselModule,
    WavesModule,
    ButtonsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
