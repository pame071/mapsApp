import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'map-mini-map',
  standalone: false,
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.scss'
})

export class MiniMapComponent implements AfterViewInit{

  @Input() lngLat ?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw "divMap can't be null";
    if(!this.lngLat) throw "LngLat can't be null";

    // Mapa
    const map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 5, // starting zoom
      interactive: false
    });

    // Marker


    const marker = new Marker()
      .setLngLat(this.lngLat)
      .addTo(map);

  }

}
