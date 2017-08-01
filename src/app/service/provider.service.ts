import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import { Request } from "../model/request";
import { Master } from "../model/master";

@Injectable()
export class ProviderService {

 constructor(private _http: Http){}
 
 getMaster(request:Request){
 		debugger;
 		let headers = new Headers({ 'Content-Type': 'x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
		return this._http.post("http://52.35.213.206/Performance_SPE/Select",
								request,
								options)
							.map(res => res.json());
	}
 
}