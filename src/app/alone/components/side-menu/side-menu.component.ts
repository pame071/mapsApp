import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  route: string;
  name: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullsreen', name: 'FullScreen'},
    { route: '/maps/zoom-range', name: 'ZoomRange'},
    { route: '/maps/markers', name: 'Markes'},
    { route: '/maps/properties', name: 'Houses'},
    { route: '/alone', name: 'Alone Page'},
  ]

}
