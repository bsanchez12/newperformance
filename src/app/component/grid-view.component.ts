import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';

@Component({
    selector: 'grid-view',
    templateUrl: '../view/grid-view.html',
    providers:[ProviderService]      
})
 

export class GridViewComponent {

	 constructor(private _providerService: ProviderService){}

	 ngOnInit() {
 		this.getMaster();		
	}

	getMaster(){
		this._providerService.getMaster()
									.subscribe(
										result => {
												
										},
										error => {
											
										}
									);
	}
}