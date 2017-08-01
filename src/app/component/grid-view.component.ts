import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { Request } from "../model/request";
import { Master } from "../model/master";

@Component({
    selector: 'grid-view',
    templateUrl: '../view/grid-view.html',
    providers:[ProviderService]      
})
 

export class GridViewComponent {

	public masters: Master[];
	public request: Request;

	 constructor(private _providerService: ProviderService){}

	 ngOnInit() {
	 	this.request = new Request();
	 	this.request.table = "maestro";
	 	this.request.where = "1";
	 	this.request.pag = "1";
	 	this.request.limit = "100";
	 	this.request.order = "";
 		this.getMaster(this.request);		
	}

	getMaster(request: Request){		
		this._providerService.getMaster(request)
									.subscribe(
										result => {
											debugger;
											this.masters = result.data;
											alert("Exito en la petición");
										},
										error => {
											alert("Error en la petición");
										}
									);
	}
}