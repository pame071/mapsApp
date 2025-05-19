import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'maplibre-gl';

@Component({
  standalone: false,
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})

export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 5;
  public map?: Map;
  public lngLat: LngLat= new LngLat(-70.55192437971527, -29.284931653628632);



  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove;
  }

  zoomChanged( value: number ){
    this.zoom = value;
    this.map?.zoomTo(value);
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });


    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter();
    });

  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }
}
