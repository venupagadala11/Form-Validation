import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css']
})
export class DispalyComponent {

  // declerations
  dataToDisplay:any;
  labelData;

  constructor(private router: Router, private route:ActivatedRoute){

    // Get data from the app component in the local variables to print them in this component
    this.dataToDisplay = this.router.getCurrentNavigation()?.extras.state?.['sendDataToDisplay'];
    this.labelData = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    console.log("dis",this.dataToDisplay, this.router.getCurrentNavigation()); //just for debugging purpose
  }
}
