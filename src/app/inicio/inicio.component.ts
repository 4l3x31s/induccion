import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  @ViewChild('miVideo', {static: true}) elem: ElementRef;
  constructor() { }

  ngOnInit() {
    //this.elem.nativeElement.();
    this.elem.nativeElement.play();
    
    
  }

}
