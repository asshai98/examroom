import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

interface Options {
  key: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examroom-fe-task';
  navLinks: any[];
  activeLinkIndex = -1; 
  options: Options[] = [
    { key: "multi-choise", value: "Multuple choise" },
    { key: "multi-answ", value: "Multiple answer" }
  ];
  selectedValue: string = "";

  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Create',
          link: './Create',
          index: 0
      }, 
      {
          label: 'View',
          link: './View',
          index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  onSelectionChange(value: string) {
    this.selectedValue = value
  }
}
