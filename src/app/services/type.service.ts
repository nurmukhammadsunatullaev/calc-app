import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ResponseData} from "../models/response-data";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient: HttpClient) { }

  public getTypes() : Observable<ResponseData>{
      return this.httpClient.get<ResponseData>("/rest/info/types");
  }
}
