import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  imports: [],
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.scss'
})

export class CounterAloneComponent {

  @Input()
  public counter: number = 10;
}
