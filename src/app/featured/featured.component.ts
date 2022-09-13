import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ObservableArray } from '@nativescript/core'

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {

  dataItems: DataItem[] = [
    { "id": 1, "name": "Item 1", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 2, "name": "Item 2", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 3, "name": "Item 3", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 4, "name": "Item 4", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 5, "name": "Item 5", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 6, "name": "Item 6", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 7, "name": "Item 7", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 8, "name": "Item 8", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 9, "name": "Item 9", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
    { "id": 10, "name": "Item 10", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image" , "selected": false},
];

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}

// >> listview-angular-data-item
export class DataItem {
  constructor(public id?: number,
      public name?: string,
      public description?: string,
      public title?: string,
      public text?: string,
      public image?: string,
      public selected?: boolean,
      public type?: string,
      public category?: string,
      public size?: number,
      public color?: string) {
  }
}
// << listview-angular-data-item