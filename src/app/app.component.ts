import { Component, OnInit } from '@angular/core';
import { HttpMethService } from './services/http-meth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'W11-L1';
  count: number = 0;
  constructor(private photosSrv: HttpMethService){

  }

  ngOnInit(){
    this.photosSrv.likeO.subscribe(() => {
      this.count++
    })
 }
}
