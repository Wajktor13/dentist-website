import { Component, AfterViewInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  title = 'dentist-website';
  
  public ngAfterViewInit() {
    initTE({ Carousel });
  }
}
