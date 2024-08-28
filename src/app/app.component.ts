import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelpersService} from "./helpers.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  constructor(public svcHelpers: HelpersService) {

  }
  title = 'ANGULAR';
  ngOnInit() {
    for(let x=0; x<100; x++) {
      console.log(this.svcHelpers.randomRange(10,15,4));
    }
  }
}
