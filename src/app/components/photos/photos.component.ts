import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { HttpMethService } from 'src/app/services/http-meth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  sub!: Subscription;
  photos: Photo[] | undefined;
  count: number = 0;

  constructor(http: HttpClient, private photosSrv: HttpMethService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.sub = this.photosSrv.get().subscribe((res) => {
      console.log(res);
      this.photos = res;
      console.log(res)
    })
  }

  deletePhoto(id: number) {
    this.sub = this.photosSrv.delete(id).subscribe(() => {
        this.photos = this.photos?.filter((user) => user.id != id);
        console.log(`Utente ${id} cancellato`);
    })
}

like(){
  this.photosSrv.likeS.next(this.count);
}

}
