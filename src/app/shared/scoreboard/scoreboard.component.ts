import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  host: {'class': 'col-xl-4 col-md-4 mb-4'}
})
export class ScoreboardComponent implements OnInit {

  @Input() title: string;
  @Input() score: number;
  @Input() link: string;
  @Input() icon: string;
  @Input() color: string;

  constructor() {}

  ngOnInit() {}
}
