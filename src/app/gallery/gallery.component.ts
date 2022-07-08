import { Component, OnInit } from '@angular/core';
import { ViewGalleryService } from '../view-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private viewgallery:ViewGalleryService) {
    viewgallery.viewGallery().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
data:any=[
  
    




  ]


}
