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

    this.heroText = "Spicy jalapeno bacon ipsum dolor amet cow pork loin fatback drumstick shank cupim boudin short ribs picanha ham hock. Drumstick bresaola pig, t-bone rump flank prosciutto filet mignon alcatra tail. Chuck ribeye sausage pork. Alcatra ham swine tongue shank picanha frankfurter boudin chislic prosciutto short loin tail pork.";

    this.heroBtnText = "Learn more";

    this.heroBtnUrl = "#";
   }

  ngOnInit(): void {
  }

}
