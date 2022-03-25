import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluacion';

  isDarktheme: boolean = false;

  ngOnInit(){
    this.isDarktheme = localStorage.getItem('theme')=== "Dark" ? true:false;
    console.log(this.isDarktheme)
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarktheme? "Dark" : "Light");
    
  }

}
