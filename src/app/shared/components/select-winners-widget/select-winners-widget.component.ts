import { Component } from '@angular/core';
import { ShowWarningService } from '../../services/show-warning.service';
import { MessageTypes } from '../../constants/CONSTANTS';

@Component({
  selector: 'shared-select-winners-widget',
  templateUrl: './select-winners-widget.component.html',
  styleUrls: ['./select-winners-widget.component.scss']
})
export class SelectWinnersWidgetComponent {

  maxWinners:number=30;

  mentions:number=0;

  winners:number|undefined;

  maxMentions:number=5;

  prize:string='';

  progress:number=0;

  isPickingWinners:boolean=false;

  constructor(private warningMessageService:ShowWarningService){

  }


  onWinnersInputBlur(event:Event){
    const val=  (event.target as HTMLInputElement).value;

    if(parseFloat(val)> this.maxWinners || parseFloat(val)==0 ){
      this.warningMessageService.showWarning({message:'Please enter valid values',show:true,type:MessageTypes.ERROR});
      this.winners=1;
    }

  }

  incrementMention(){

    if(this.mentions<this.maxMentions){
      this.mentions=this.mentions + 1;
      return;
    }
    if(this.mentions===this.maxMentions){
      this.mentions=0;
      return;
    }
  }

  decrementMention(){
    if(this.mentions > 0){
      this.mentions=this.mentions - 1;
      return;
    }
    if(this.mentions==0){
      this.mentions=this.maxMentions;
      return;
    }
  }

  async pickWinners(){
      this.isPickingWinners=true;
      await this.test();

  }

async test(){
  for(let i=0;i<10;i++){
    this.progress=this.progress+10;
    await new Promise(resolve=>{setTimeout(resolve,1000)})
  }
}

}
