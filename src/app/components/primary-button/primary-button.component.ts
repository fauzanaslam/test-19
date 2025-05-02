import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="text-white bg-transparent border-2 border-solid border-[rgba(213,124,23,1)] px-6 py-2 rounded-full font-medium text-sm cursor-pointer"
    >
      {{ title }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  @Input() title = '';
}
