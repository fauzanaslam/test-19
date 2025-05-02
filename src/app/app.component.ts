import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <div class="min-h-screen" style="background-color: rgba(0, 0, 0, 1)">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'test-19';

  ngOnInit(): void {
    initFlowbite();
  }
}
