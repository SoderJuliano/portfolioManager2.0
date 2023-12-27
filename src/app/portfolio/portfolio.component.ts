import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

  all: string = "selected";
  react: string = "";
  angular: string = "";
  vue: string = "";
  php: string = "";
  api: string = "";
  filter = 'all';

  @Output() gotoChange: EventEmitter<String> = new EventEmitter<String>();
  close: string = '';

  projects = [
    {
      name: 'custom-cv',
      type: 'Vue.js',
      url: 'https://custom-cv-online.netlify.app/'
    },
    {
      name: 'pokedex',
      type: 'Vue.js',
      url: 'https://soder-pokedex.netlify.app/'
    },
    {
      name: 'pokemon mini-game',
      type: 'React.js',
      url: 'https://julianosoderpokemonbattle.netlify.app/'
    },
    {
      name: 'bill payment site',
      type: 'PHP',
      url: 'http://parcelas.negocio.tk/'
    },
    {
      name: 'old-portfolio',
      type: 'AngularJS',
      url: 'https://julianoportfolio.netlify.app/'
    },
    {
      name: 'Juliano Soder portfolio',
      type: 'AngularJS',
      url: 'https://juliano-soder.netlify.app/'
    },
    {
      name: 'SIGECloud',
      type: 'Vue.js',
      url: 'https://sigecloudtest.netlify.app/'
    },
    {
      name: 'Abra Api',
      type: 'NestJS API',
      url: 'https://abra-api.top/api'
    },
    {
      name: 'Sapory Italian menu',
      type: 'Vue.js',
      url: 'https://deluxe-sapory.netlify.app'
    }
];

  switchSpan(event: any) {

    this.all = "";
    this.react = "";
    this.angular = "";
    this.php = "";
    this.vue = "";
    this.api = "";
    this.filter = event.target.id;

    switch (event.target.id) {
      case 'all':
        this.all = "selected";
        break;
      case 'react':
          this.react = "selected";
          break;
      case 'angular':
        this.angular = "selected";
        break;
      case 'vue':
          this.vue = "selected";
          break;
      case 'php':
        this.php = "selected";
        break;
      case 'api':
          this.api = "selected";
          break;
      default:
        break;
    }
  }

  open(url: string) {
    window.open(url, '_blank');
  }

  goback() {
    this.close = "close";
    setTimeout(() => {
      this.gotoChange.emit("home");
      this.close = "";
    }, 700);
  }
}
