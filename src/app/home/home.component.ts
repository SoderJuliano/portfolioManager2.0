import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() gotoChange:EventEmitter<String> =new EventEmitter<String>();



  ngAfterViewInit(): void {}

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

  goto(page: string | undefined) {
    this.gotoChange.emit(page);
  }
}
