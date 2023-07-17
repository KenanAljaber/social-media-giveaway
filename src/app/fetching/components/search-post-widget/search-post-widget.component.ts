import { Component } from '@angular/core';
import { PostFetcherService } from '../../services/postfetcher.service';
import { Comment } from '../../types/comment.interface';
import { ShowWarningService } from 'src/app/shared/services/show-warning.service';
import { MessageTypes } from 'src/app/shared/constants/CONSTANTS';

@Component({
  selector: 'fetching-search-post-widget',
  templateUrl: './search-post-widget.component.html',
  styleUrls: ['./search-post-widget.component.scss']
})
export class SearchPostWidgetComponent {

  postURL:string='';
  resp:string='';

  comments:Comment[]=[];

  constructor(
    private postFetcherService:PostFetcherService,
    private warningService:ShowWarningService
      ){}

   searchPost(){
    if(!this.postURL || this.postURL.trim().length==0 || !this.validatePostUrl(this.postURL)){
      this.warningService.showWarning({message:"Please enter a valid post url",type:MessageTypes.WARNING,show:true})
      return;
    }
    this.postFetcherService.getCommentsByPostLink(this.postURL).subscribe(resp=>{
      this.comments=resp.comments;
      console.log(this.comments);
      
    })  
  }

  validatePostUrl(postUrl:string):boolean{
        const regex:RegExp= /\/p\/([A-Za-z0-9_-]+)/;
        const match= postUrl.match(regex);
        if(match?.[1]){
          return true;
        }
        return false;
  }

}
