import { Component, Input, OnInit } from '@angular/core';
import { MessageTypes } from '../../constants/CONSTANTS';
import { ShowWarningService } from '../../services/show-warning.service';



@Component({
  selector: 'shared-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  
   text: string = ''; // the message text 
   type: MessageTypes = MessageTypes.SUCCESS; // type of the message

  show:boolean=false; // flag to indicate whether showing the message or not

  theme: { bgColor: string, txtColor: string } = { bgColor: '', txtColor: '' }; // the theme that will be applied to the message container

  constructor(private showWarningService:ShowWarningService){
    //subscribe to the ShowWarningService so we can show message each time it is needed
      showWarningService.showWarning$.subscribe(message =>{
        if(message.show){
          this.showWarning(message.type,message.message);
        }
      })
  }

  ngOnInit(): void {
    this.setTheme();
  }

  /**
   * set the theme according to the type
   */
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

  /**
   * show the warning message for 3 seconds and then disappear it
   * @param pType the message type
   * @param pText the message text
   */
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
