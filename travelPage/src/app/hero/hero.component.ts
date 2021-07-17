import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroBtnText: string;
  heroBtnUrl: string;

  constructor() {
    this.heroHeading = "Travel Boss";
    this.heroText = "Spicy jalapeno pastrami meatball spare ribs, buffalo kielbasa ball tip porchetta bresaola doner sausage cow chuck. Jerky boudin ham hock salami pork picanha meatloaf andouille short ribs bacon sirloin beef. Beef ribs jowl pastrami jerky, porchetta bacon drumstick pancetta chicken pork cow pig chislic tongue. Shank short loin picanha alcatra spare ribs beef salami. Shankle pork loin bresaola, buffalo filet mignon alcatra boudin. Capicola beef ribs short ribs, swine tongue pork loin t-bone pork buffalo venison strip steak pastrami kielbasa ground round picanha. Shank bacon tongue prosciutto jerky turducken bresaola shankle fatback.";
    this.heroBtnText = "Learn more";
    this.heroBtnUrl = "blog-page";
  }

  ngOnInit(): void {
  }
}
