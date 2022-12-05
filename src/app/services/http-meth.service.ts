import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpMethService {

  likeS = new Subject();
  likeO = this.likeS.asObservable();

  constructor(private http: HttpClient) {
  }

  get(){
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(res => res));
  }

  delete(id:number){
    return this.http.delete('https://jsonplaceholder.typicode.com/photos/' + id)
  }


}
