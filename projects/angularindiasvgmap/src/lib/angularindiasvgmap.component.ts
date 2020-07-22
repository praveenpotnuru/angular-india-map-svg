import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AngularindiasvgmapService } from './angularindiasvgmap.service';

@Component({
  selector: 'india-map',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
  <g>
      <path *ngFor="let coordinate of coordinates;let i = index" [attr.id]="coordinate.id" [attr.d]="coordinate.d"
          [attr.fill]="fillStateColor" [attr.stroke]="strokeColor" (click)="onIndiaMapClick(coordinate.id,coordinate.title)"
          style="cursor: pointer;" (mouseover)="onMapHover($event,coordinate.id)"
          (mouseleave)="onMapLeave($event,coordinate.id)">
      </path>
  </g>
</svg>
  `,
  styles: []
})
export class AngularindiasvgmapComponent implements OnInit {

  coordinates: object;
  @Input() fillColor: string = "#FFFFFF";
  @Input() fillStateColor: string = "#FF9900";
  @Input() fillHoverColor: string = "#002868";
  @Input() strokeColor: string = "#000000";
  @Output('onMapClick') click = new EventEmitter();

  constructor(private indiaMapService: AngularindiasvgmapService) { }

  ngOnInit() {
    this.indiaMapService.getIndiaMapCoordinates().then(data => this.coordinates = data);
  }

  onIndiaMapClick(state: any, abbr: any) {
    this.click.emit({ "state-id": state, "abbr": abbr });
  }

  onMapHover(event: any, state: any) {
    event.target.attributes.fill.nodeValue = this.fillHoverColor;
  }
  onMapLeave(event: any, state: any) {
    event.target.attributes.fill.nodeValue = this.fillStateColor;
  }

}
