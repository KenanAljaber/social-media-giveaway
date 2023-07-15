import { Component } from '@angular/core';
import { PostFetcherService } from '../../services/postfetcher.service';
import { Comment } from '../../types/comment.interface';

@Component({
  selector: 'fetching-search-post-widget',
  templateUrl: './search-post-widget.component.html',
  styleUrls: ['./search-post-widget.component.scss']
})
export class SearchPostWidgetComponent {

  postURL:string='';
  resp:string='';

  comments:Comment[]=[];

  constructor(private postFetcherService:PostFetcherService){}

   searchPost(){
    this.postFetcherService.getCommentsByPostLink(this.postURL).subscribe(resp=>{
      this.comments=resp.comments;
      console.log(this.comments);
      
    })
      
  }

}
