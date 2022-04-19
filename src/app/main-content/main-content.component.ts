import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  title = "Main content";
  subTitlu = "Titlu content";
  titlePara = "Paragraph1";
  titleMouse = "Mouseee";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = "Second title";
    }, 2000);
  }

  schimbaTitlu() {
    this.title = "Third title";
  }

  onMouseOver() {
    this.subTitlu = "Titlu content2";
  }

  onMouseEnter() {
    this.titlePara = "Paragraph22222";
  }

  onMouseOut() {
    this.titleMouse = "Yesssss";  }
}
