import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-link',
  templateUrl: './side-link.component.html',
  styleUrls: ['./side-link.component.css']
})
export class SideLinkComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() route: string;
  
  constructor() {}

  ngOnInit() {}
}
