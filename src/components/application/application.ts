import {Component, OnInit} from '@angular/core'
import './application.scss'


@Component({
  selector: 'app-root',
  template: `
  <h1>Hello World</h1>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // console.log('init called')
  }
}
