import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import 'leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.js";
import { ShowDialogComponent } from './components/show-dialog/show-dialog.component';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { RemoveRecordComponent } from './components/remove-record/remove-record.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mapExample';
  map: any;
  lblLocation: any;

  constructor(private dialog: MatDialog) {

  }

   locationList = [
    { isDeleted:false, lat: 37.7195265626227, lng: 46.93359375000001, title: "تبریز", Address: "تبریز خیابان اول پلاک 1", placeType: "h" },
      { isDeleted:false, lat: 35.60496409485937, lng: 51.50390625000001, title: "تهران", Address: "تهران خیابان اول پلاک 1", placeType: "h" },
      { isDeleted:false, lat: 32.54851512118243, lng: 51.767578125, title: "اصفهان", Address: "اصفهان خیابان اول پلاک 1", placeType: "h" },
      { isDeleted:false, lat: 35.783389740701296, lng: 58.88671875000001, title: "مشهد", Address: "مشهد خیابان اول پلاک 1", placeType: "h" },
      { isDeleted:false, lat: 34.562259303839774, lng: 50.93261718750001, title: "قم", Address: "قم خیابان اول پلاک 1", placeType: "h" },
      { isDeleted:false, lat: 29.231097541675027, lng: 52.99804687500001, title: "شیراز", Address: "شیراز خیابان اول پلاک 1", placeType: "r" },
      { isDeleted:false, lat: 27.061667813752774, lng: 55.98632812500001, title: "بندرلنگه", Address: "بندرلنگه خیابان اول پلاک 1", placeType: "r" },
      { isDeleted:false, lat: 29.11600059007595, lng: 60.51269531250001, title: "زاهدان", Address: "زاهدان خیابان اول پلاک 1", placeType: "r" },
      { isDeleted:false, lat: 31.767357597242206, lng: 48.91113281250001, title: "اهواز", Address: "اهواز خیابان اول پلاک 1", placeType: "r" },
      { isDeleted:false, lat: 31.767357597242206, lng: 54.31640625000001, title: "یزد", Address: "یزد خیابان اول پلاک 1", placeType: "r" }
  ];

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
      "موقعیت ها ": hotelEditableLayers
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


    for (let i = 0; i < this.locationList.length; i++) {
      if (this.locationList[i].placeType == "h") {
        L.marker([this.locationList[i].lat, this.locationList[i].lng], { icon: hotelIcon })
        .on('click', () => { this.showDetails(i) })
        .on('dragend' , (e: L.LeafletEvent) => {this.editMarkerDetail(e,i)})
        .on('remove' , () => {this.removeMarker(i)})
        .addTo(hotelEditableLayers)
      } else {
        L.marker([this.locationList[i].lat, this.locationList[i].lng], { icon: resturantIcon })
        .on('click', () => { this.showDetails(i) }).addTo(hotelEditableLayers)
        .on('dragend', (e: L.LeafletEvent) => { this.editMarkerDetail(e, i) })
        .on('remove', () => { this.removeMarker(i) })
        .addTo(hotelEditableLayers)

      }
    }

//part 9
    this.map.on('draw:created', (e: any) => {
      console.log(e);

      var layer = e.layer;
      var type = e.layerType;

      if (type == 'marker') {
        // e.layer.setIcon(hotelIcon);
        const dialogRef = this.dialog.open(CreateRecordComponent, {
          width: '30%',
          data: {
            lat: layer._latlng.lat,
            lng: layer._latlng.lng,
          }
        });
        dialogRef.afterClosed().subscribe((result: any) =>{
          if(result){
            if (result.value.placeType === 'h') {
              layer.setIcon(hotelIcon)
              .on('click', () => { this.showDetails(this.locationList.length - 1) })
              .on('dragend', (e: L.LeafletEvent) => { this.editMarkerDetail(e, this.locationList.length - 1) })
              .addTo(hotelEditableLayers);


            }else {
              layer.setIcon(resturantIcon)
              .on('click', () => {this.showDetails(this.locationList.length - 1) })
              .on('dragend', (e: L.LeafletEvent) => { this.editMarkerDetail(e, this.locationList.length - 1) })
              .addTo(hotelEditableLayers);
            }

            this.locationList.push();
            hotelEditableLayers.addLayer(layer);

          }
        })

      }
    })

  }

  showDetails(index: number) {


    const dialogRef = this.dialog.open(ShowDialogComponent, {
      width: '30%',
      data: {
        title: this.locationList[index].title,
        address: this.locationList[index].Address,

      }
    });
  }

//part 10
   editMarkerDetail(e: L.LeafletEvent, i: number)  {
    console.log(e);
    const dialogRef = this.dialog.open(EditRecordComponent, {
      width: '30%',
      data: {
        lat: e.target._latlng.lat,
        lng: e.target._latlng.lng,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.locationList[i].Address = result.value.Address;
      this.locationList[i].title = result.value.title;
      this.locationList[i].lat = result.value.lat;
      this.locationList[i].lng = result.value.lng;
    })
  }

   removeMarker = (i: number) => {
    const dialogRef = this.dialog.open(RemoveRecordComponent, {
      width: '30%',
      data: {
        title: this.locationList[i].title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.locationList[i].isDeleted = true;
      }
    })
  }


      // search
    // var searchLayer = L.layerGroup().addTo(this.map);
    // // const searchControl: any = new (<any>L.Control).Search({
    // //   layer: this.searchLayer
    // // });
    // this.map.addControl((<any>L.Control).Search({
    //   layer: searchLayer
    // }));

}
