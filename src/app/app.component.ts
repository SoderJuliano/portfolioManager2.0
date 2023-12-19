import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AboutComponent]
})
export class AppComponent {
  title = 'portfoliomanager2.0';
  isActive1: string = "active";
  isActive2: string = "desactive";
  isActive3: string = "desactive";
  page: string = 'home';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  loadCarroucel() {
    this.carrocel();
    setTimeout(() => {
      this.carrocel();
    }, 15000);
    setTimeout(() => {
      this.carrocel();
    }, 35000);
  }

  carrocel() {
    setTimeout(() => {
      this.rotateClasses();
    }, 3000);
    setTimeout(() => {
      this.rotateClasses();
    }, 6000);
    setTimeout(() => {
      this.rotateClasses();
    }, 9000);
  }

  rotateClasses() {
    if (this.isActive1 === 'active') {
        this.isActive1 = 'desactive';
        this.isActive2 = 'active';
    } else if (this.isActive2 === 'active') {
        this.isActive2 = 'desactive';
        this.isActive3 = 'active';
    } else {
        this.isActive3 = 'desactive';
        this.isActive1 = 'active';
    }
  }

  goto(page: string){
    this.page = page;
    alert('page');
  }
}

