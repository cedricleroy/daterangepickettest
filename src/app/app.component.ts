import { Component } from '@angular/core';

import { IMyOptions, IMyDateRange, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private dateRangePickerOptions: IMyOptions = {
       dateFormat: 'dd.mm.yyyy',
  };

  selectedDateRangeNormal:IMyDateRange = undefined; // null does not work

  onDateRangeChanged(event: IMyDateRangeModel){
     console.log(event);
     console.log(this.selectedDateRangeNormal);

     // adding the below, init with null is working
     /*if(event.formatted !== '') {
       this.selectedDateRangeNormal = {beginDate: event.beginDate, endDate: event.endDate};
     }*/
  }

  clearDateRange(){
    console.log('clear');
    this.selectedDateRangeNormal = null;
  }

}