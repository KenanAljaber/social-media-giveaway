import { Injectable } from "@angular/core";
import { Comment } from "src/app/fetching/types/comment.interface";

@Injectable({
  providedIn: "root"
})
export class CommentsListService {
  private static commentsList: Comment[] = [];

  constructor() {}

  get commentList() {
    return CommentsListService.commentsList;
  }

  set commentsList(newCommentsList:Comment[]){
        CommentsListService.commentsList=newCommentsList;
  }

  addComment(comment: Comment) {
    CommentsListService.commentsList.push(comment);
  }

  removeComment(comment: Comment) {
    const index = CommentsListService.commentsList.indexOf(comment);
    if (index > -1) {
      CommentsListService.commentsList.splice(index, 1);
    }
  }
}
