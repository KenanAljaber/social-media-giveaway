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

  
  postURL:string=''; // the post url that the user will type
  resp:string=''; //for debugging purpose

  comments:Comment[]=[]; // the array of comments that we will get once we fetch the comments

  constructor(
    private postFetcherService:PostFetcherService,
    private warningService:ShowWarningService
      ){}

  /**
   * validate the url of the post
   * if it isa valid call the server to fetch the post's comments
   */
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

  /**
   * validate the post url by using regular expressoin
   * @param postUrl the post url
   * @returns true or false whether the post url is valid or not
   */
  validatePostUrl(postUrl:string):boolean{
    //search for the following pattern: /p/xxxxxxx
        const regex:RegExp= /\/p\/([A-Za-z0-9_-]+)/;
        const match= postUrl.match(regex);
        if(match?.[1]){
          return true;
        }
        return false;
  }

}
