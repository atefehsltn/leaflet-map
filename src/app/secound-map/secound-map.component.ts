import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.js";

@Component({
  selector: 'app-secound-map',
  templateUrl: './secound-map.component.html',
  styleUrls: ['./secound-map.component.scss']
})
export class SecoundMapComponent {
  title = 'mapExample';
  map: any;
  lblLocation: any;

  ngOnInit(): void {

    var tileLayer1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Design By Atefeh Slotani'
    });

    var tileLayer2 = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      attribution: 'Design By Atefeh '
    })

    this.map = L.map('map', {
      center: [31.880356, 54.369030],
      zoom: 5,
      layers: [tileLayer1]
    });


    var hotelEditableLayers = new L.FeatureGroup();
    this.map.addLayer(hotelEditableLayers);

    var mainLayers = {
      "سرورو شماره 1": tileLayer1,
      "سرورو شماره 2": tileLayer2,
    };

    var drawingLayers = {
      "هتل ها ": hotelEditableLayers
    };

    L.control.layers(mainLayers, drawingLayers, {
      position: 'topleft',
      collapsed: false
    }).addTo(this.map);


    var drawOptions: any;

    drawOptions = {
      position: 'topleft',
      draw: {
        polygon: {
          shapeOptions: {
            color: '#564638'
          }
        },
        polyline: true,
        circle: true,
        marker: true,
        rectangle: true
      },
      edit: {
        featureGroup: hotelEditableLayers
      }
    };


    var drawControl = new L.Control.Draw(drawOptions);
    this.map.addControl(drawControl);




    var hotelIcon = L.icon({
      iconUrl: './assets/images/1.png',
      iconSize: [30, 30],
      iconAnchor: [20, 40],
    });

    var resturantIcon = L.icon({
      iconUrl: './assets/images/2.png',
      iconSize: [30, 30],
      iconAnchor: [20, 40],
    });


    this.map.on('draw:created', (e: any) => {
      console.log(e);

      var layer = e.layer;
      var type = e.layerType;

      if (type == 'marker') {
        e.layer.setIcon(hotelIcon);
      }
      hotelEditableLayers.addLayer(layer);
    })

  }
}
