import {Injectable} from "@angular/core" ;
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { SERVER } from "src/app/shared/proxies/proxy-service.server";
import { PROXY_SERVICE } from "src/app/shared/proxies/proxy-service.routes";
import { Comment } from "../types/comment.interface";

@Injectable({providedIn:'root'})

export class PostFetcherService{

    private REST_API_SERVER= SERVER.CONTEXT;
    constructor(private http:HttpClient){}

    getCommentsByPostLink(postUrl:string):Observable<{comments:Comment[],commentsCount:number}>{
        const encodedUrl = encodeURIComponent(postUrl);
        const url= `${this.REST_API_SERVER}/${PROXY_SERVICE.comments.getByPostId}/${encodedUrl}`;
        return this.http.get<{comments:Comment[],commentsCount:number}>(url);
    }

    handleError(error:HttpErrorResponse){
        
    }

}

