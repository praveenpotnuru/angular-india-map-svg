import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IndiaMapService } from './india-map.service';

@Component({
	selector: 'india-map',
	templateUrl: './india-map.component.html',
	styleUrls: ['./india-map.component.css']
})
export class IndiaMapComponent implements OnInit {
	coordinates: object;
	@Input() fillColor: string = "#FFFFFF";
	@Input() fillStateColor: string = "#FF9900";
	@Input() fillHoverColor: string = "#002868";
	@Input() strokeColor: string = "#000000";
	@Output('onMapClick') click = new EventEmitter();

	constructor(private usMapService: IndiaMapService) { }

	ngOnInit() {
		this.usMapService.getIndiaMapCoordinates().then(data => this.coordinates = data);
	}

	onIndiaMapClick(state) {
		this.click.emit({ "state-abbr": state });
	}

	onMapHover(event: any, state: any) {
		event.target.attributes.fill.nodeValue = this.fillHoverColor;
	}
	onMapLeave(event: any, state: any) {
		event.target.attributes.fill.nodeValue = this.fillStateColor;
	}
}
