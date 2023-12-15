import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-scs',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  s:String = 'welcome in shiva concept solution'
  a:number = 1000
  b:number=2000
  c:number=0
  ngOnInit(): void {
   console.log(this.a+this.b)
   console.log('Init');
  }
  constructor() {
    // Initialization code or dependency injection logic can go here
    console.log('Component instance created');
  }
  fun(): number {
    return this.a + this.b;
  }
}
