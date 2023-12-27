import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from "./resume/resume.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AboutComponent, HomeComponent, ResumeComponent, PortfolioComponent]
})
export class AppComponent {
  title = 'portfoliomanager2.0';
  page: string = 'home';
  mainclass: string = "";
  home: string = 'selected';
  about: string = '';
  portfolio: string = '';
  resume: string = '';

  ngOnInit(): void {}

  goto(page: string){
    this.page = page;
    this.about = '';
    this.home = '';
    this.portfolio = '';
    this.resume = '';

    switch (page) {
      case 'about':
        this.mainclass = "whitebg";
        this.about = 'selected';
        break;
      case 'home':
        this.home = 'selected';
        break;
      case 'resume':
        this.resume = 'selected';
        break;
      case 'portfolio':
        this.portfolio = 'selected';
        break;
      default:
        this.mainclass = "";
        break;
    }
  }
  gotoChild(event: string | any) {
    console.log('event.trigger');
    this.page = event;
  }

  openContact(){
    window.open('https://www.linkedin.com/in/julianosoder/', '_blank');
  }
}

