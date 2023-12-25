import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from "./resume/resume.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AboutComponent, HomeComponent, ResumeComponent]
})
export class AppComponent {
  title = 'portfoliomanager2.0';
  page: string = 'home';
  mainclass: string = "";

  ngOnInit(): void {}

  goto(page: string){
    this.page = page;

    switch (page) {
      case 'about':
        this.mainclass = "whitebg";
        break;
      default:
        this.mainclass = "";
        break;
    }
  }
  gotoChild(event: string | any) {
    console.log('event.trigger');
    console.log(event);
    this.page = event;
  }
}

