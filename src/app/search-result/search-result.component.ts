import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css', ]
})
export class SearchResultComponent implements OnInit {
  flag:boolean;

  constructor() { 
    this.flag=false;
  }
model:any;
  ngOnInit() {
  	 this.model = {
    left: true,
    middle: false,
    right: false
  };
  }

showMenu()
{
  this.flag=!this.flag;
}

}
