import { Component, Input, OnInit } from '@angular/core';
import { MessageTypes } from '../../constants/CONSTANTS';
import { ShowWarningService } from '../../services/show-warning.service';



@Component({
  selector: 'shared-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  // messageType = CONSTANTS.MessageTypes;

   text: string = '';
   type: MessageTypes = MessageTypes.SUCCESS;

  show:boolean=false;

  theme: { bgColor: string, txtColor: string } = { bgColor: '', txtColor: '' };

  constructor(private showWarningService:ShowWarningService){
      showWarningService.showWarning$.subscribe(message =>{
        if(message.show){
          this.showWarning(message.type,message.message);
        }
      })
  }

  ngOnInit(): void {
    this.setTheme();
  }

  private setTheme():void {
    switch (this.type) {
      case MessageTypes.SUCCESS:
        this.theme = { bgColor: '#309e30', txtColor: 'white' }
        break;
      case MessageTypes.ERROR:
        this.theme = { bgColor: '#9e3030', txtColor: 'white' };
        break;
      case MessageTypes.WARNING:
        this.theme = { bgColor: '#FF9900', txtColor: 'white' };
        break;
    }

  }

  private showWarning(pType:MessageTypes,pText:string):void{


    this.type=pType;
    this.text=pText;
    this.setTheme();
    this.show=true;
    setTimeout(()=>{
      this.show=false;
      this.showWarningService.showWarning({message:'',type:MessageTypes.SUCCESS,show:false});
    },3000);
      
  }






}
