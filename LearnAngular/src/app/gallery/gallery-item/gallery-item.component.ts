import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from 'src/app/appModels/gallery';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit, OnDestroy {
  id;
  gallery;
  selectedObject;
  constructor(
    private _activatedRoute:ActivatedRoute, 
    private _gallery: GalleryItems,
    private _header:HeaderService
    ) { 
    }

  ngOnInit() {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'Back to Gallery', url:'/gallery'});

    // this.id = this._activatedRoute.snapshot.params['id'];

    this._activatedRoute.params.subscribe(
      (params: Params)=>{
        this.id = params['id'];
        this.gallery = this._gallery.galleryImages
        // console.log(this._gallery.galleryImages[this.id])
        this.selectedObject = this._gallery.galleryImages[this.id - 1];
        // console.log(this.selectedObject)
      }
    );
  }

  ngOnDestroy(){
    this._header.headerNav.next(true);
    this._header.goBackLink.next({text:'', url:''});
  }

}
