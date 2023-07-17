import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CONSTANTS, MessageTypes } from "../constants/CONSTANTS";

@Injectable({
    providedIn: 'root'
})

export class ShowWarningService {

    private static isShowing:boolean=false;

    private showWarningSub= new BehaviorSubject <{type:MessageTypes,message:string,show:boolean}>({type:MessageTypes.ERROR,message:'',show:false});

    public showWarning$=this.showWarningSub.asObservable();

    constructor() { }

    showWarning(message:{type:MessageTypes,message:string,show:boolean}):void{
        if(!message.show){
            ShowWarningService.isShowing=message.show;
            this.showWarningSub.next(message);
        }else{
            if(!ShowWarningService.isShowing){
                ShowWarningService.isShowing=message.show;
                this.showWarningSub.next(message);
            }
        }
    }   

}