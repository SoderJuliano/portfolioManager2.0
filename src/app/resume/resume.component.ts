import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  @Output() gotoChange:EventEmitter<String> =new EventEmitter<String>();
  close: string = '';

  goto(page: string | undefined) {
    this.gotoChange.emit(page);
  }

  goback() {
    this.close = "close";
    setTimeout(() => {
      this.goto("home");
      this.close = "";
    }, 700);
  }
}
