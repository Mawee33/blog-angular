import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContenu: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  @Input() postLikes: number;
  @Input() postUnlikes: number;
  constructor() { }

  ngOnInit(): void {
  }

    onLike(){
      this.postLikes ++;
       console.log(this.postLikes);
    }

    onUnlike(){
        this.postUnlikes ++;
        console.log(this.postUnlikes);
    }

    getColor() {
      if(this.postLikes > this.postUnlikes) {
        return 'green';
      } else if(this.postLikes < this.postUnlikes) {
        return 'red';
      }
    }
}
