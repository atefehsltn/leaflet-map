import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.js";

@Component({
  selector: 'app-first-map',
  templateUrl: './first-map.component.html',
  styleUrls: ['./first-map.component.scss']
})
export class FirstMapComponent {

  title = 'mapExample';
  map: any;
  lblLocation: any;

  ngOnInit(): void {

    this.map = L.map('map').setView([31.880356, 54.369030], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Design By Atefeh Slotanio'
    }).addTo(this.map);

    var iconSetting = L.Icon.extend({
      options: {
        iconSize: [40, 40],
        iconAnchor: [20, 40]

      }
    });

    // var customeIcon = new iconSetting({iconUrl: 'location.png'}) ;
    var customIcon = L.icon({
      iconUrl: './assets/images/marker-icon.png',
      iconSize: [30, 30],
      iconAnchor: [20, 40],
      // popupAnchor: [-3, -76],
      // shadowUrl: 'shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });

    // .openPopup()
    L.marker([31.880356, 54.369030], { icon: customIcon }).addTo(this.map).bindPopup('سلام من <b><i>ایران</i> </b> هستم');

    var popup = L.popup();

    // e value noghtei hast ke roosh click kardam
    //setLatLang in jaii ke man click karadam kojast

    this.map.on('click', (e: any) => {
      popup.setLatLng(e.latlng).
        setContent("شما بر روی نقطه ای با مختصات " + e.latlng.toString() + "کلیک کرده اید").openOn(this.map)
    })

    this.map.on('mousemove', (e: any) => {
      this.lblLocation = e.latlng.toString();
    })


    var editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);


      var drawOptions: any ;

    drawOptions = {
      position: 'topright',
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
      }
    };

    var drawControl = new L.Control.Draw(drawOptions);
    this.map.addControl(drawControl);

    this.map.on('draw:created' , (e: any) => {
      var layer = e.layer;
      var type = e.layerType;

      if(type == 'marker'){
        alert('it is marker')
      }

      if(type == 'polygon'){
        layer.bindPopup('I am a polygon')
      }

      editableLayers.addLayer(layer);
    })



  }
}
