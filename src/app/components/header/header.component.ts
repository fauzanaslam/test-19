import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="flex justify-between items-center shadow-md text text-white px-25 bg-[#080c14]"
    >
      <div class="flex">
        <a href="/">
          <img src="/logoimg.png" alt="logo" width="70" class="p-3" />
        </a>
        <div class="flex">
          <div class=" px-4 py-6">Pasar</div>
          <div class=" px-4 py-6">Tentang Kami</div>
          <div class=" px-4 py-6">Kontak Kami</div>
        </div>
      </div>
      <div class="flex gap-2">
        <app-primary-button title="SIGN IN" />
        <app-primary-button title="SIGN UP" />
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {}
