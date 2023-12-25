import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  d = new Date();
  year = this.d.getFullYear();
  email: string = 'julianosoder1989@gmail.com';
  close: string = "";
  @Output() gotoChange:EventEmitter<String> =new EventEmitter<String>();

  goback() {
    this.close = "close";
    setTimeout(() => {
      this.goto("home");
      this.close = "";
    }, 700);
  }

  goto(page: string | undefined) {
    this.gotoChange.emit(page);
  }
}
