import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  imports: [CounterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.scss'
})

export class AlonePageComponent {

}
