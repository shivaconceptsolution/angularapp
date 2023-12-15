import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  a:number;
  b:number;
  constructor()
  {
    this.a=0;
    this.b=0;
  }
  add():void
  {
     alert(this.a + this.b);
  }
}
