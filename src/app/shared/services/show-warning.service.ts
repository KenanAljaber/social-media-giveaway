import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CONSTANTS, MessageTypes } from "../constants/CONSTANTS";

@Injectable({
    providedIn: 'root'
})

export class ShowWarningService {


    private static isVisible:boolean=false;//indicate whether there is a message already visible

    //the object that will hold the state of the message
    private showWarningSub= new BehaviorSubject <{type:MessageTypes,message:string,show:boolean}>({type:MessageTypes.ERROR,message:'',show:false});

    //an observable allows to other to listen to all changes that will happen to the message state
    public showWarning$=this.showWarningSub.asObservable();

    constructor() { }

    /**
     * update the message state only if it is not visible
     * @param message an object that include the textMessage and the type of the message and a boolean flag that indicates whether show the message or not
     */
    showWarning(message:{type:MessageTypes,message:string,show:boolean}):void{
        if(!message.show){
            ShowWarningService.isVisible=message.show;
            this.showWarningSub.next(message);
        }else{
            if(!ShowWarningService.isVisible){
                ShowWarningService.isVisible=message.show;
                this.showWarningSub.next(message);
            }
        }
    }   

}