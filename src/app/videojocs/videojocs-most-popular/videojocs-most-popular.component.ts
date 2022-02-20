import { Component, OnInit } from '@angular/core';
import { VideojocsService } from 'src/app/viodeojocs/services/videojocs.service';
@Component({
  selector: 'app-videojocs-most-popular',
  templateUrl: './videojocs-most-popular.component.html',
  styleUrls: ['./videojocs-most-popular.component.css']
})
export class VideojocsMostPopularComponent implements OnInit {

  listaSeriesVideojocs: any[] = [];

  constructor(private videojocsService: VideojocsService) { }

  ngOnInit(): void {
    this.loadSeriesVideojocs();
  }

  private async loadSeriesVideojocs() {
  const seriesVideojocs = await this.videojocsService.listarSeriesVideojocs();
  this.listaSeriesVideojocs = seriesVideojocs.results;
  console.log(seriesVideojocs.results);
  }
}
