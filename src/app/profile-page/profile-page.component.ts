import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../environments/Enterprise'
import {Individual} from '../../environments/individual'
import {Branch} from '../../environments/branch'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
