import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

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
    const marker = new Feature({
      geometry: new Point(fromLonLat([21.77249, 49.68811])),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: '../../../assets/gps_marker_red.webp',
          scale: 0.18,
        }),
      })
    );

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        markerLayer,
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([21.77247, 49.68803]),
        zoom: 17.7,
      }),
    });
  }
}
