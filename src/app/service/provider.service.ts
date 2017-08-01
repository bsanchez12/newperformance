import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProviderService {

 constructor(private _http: Http){}
 
 getMaster(){
		return this._http.get("http://localhost/api-restaurante/restaurantes-api.php/restaurantes")
							.map(res => res.json());
	}
 
}