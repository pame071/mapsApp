import { Component } from '@angular/core';

interface MenuItem{
  route: string;
  name: string;
}

@Component({
  selector: 'maps-side-menu',
  standalone: false,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullsreen', name: 'FullScreen'},
    { route: '/maps/zoom-range', name: 'ZoomRange'},
    { route: '/maps/markers', name: 'Markes'},
    { route: '/maps/properties', name: 'Houses'},
  ]

}
