import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isActive1: string = "active";
  isActive2: string = "desactive";
  isActive3: string = "desactive";

  ngAfterViewInit(): void {}

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
}
