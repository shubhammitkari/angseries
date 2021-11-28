import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../appModels/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  // items=[
  //   {aa:'item1'},
  //   {aa:'item2'},
  // ]

  constructor(private gallery:GalleryItems) { }
  galleryImages:[];
  videoGallery;
  ngOnInit() {
    
  // this.galleryImages=this.gallery.galleryImages;
  this.galleryImages=this.gallery.galleryImages;
  this.videoGallery=this.gallery.videosgal;
  // console.log(this.galleryImages)
  }

}
