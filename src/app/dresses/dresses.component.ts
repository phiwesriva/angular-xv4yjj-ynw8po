import { Component, OnInit } from '@angular/core';
import { dress } from '../dress';


@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
dress = dress;
}