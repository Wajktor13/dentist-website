import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})

export class ContactSectionComponent implements OnInit {
    private map!: Map;
  
    public ngOnInit(): void {
        this.configureMap();
    }

    private configureMap() {
        this.map = new Map({
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
            ],
            target: 'map',
            view: new View({
              center: fromLonLat([21.77247, 49.68803]),
              zoom: 18,
            }),
          });
    }
  }
