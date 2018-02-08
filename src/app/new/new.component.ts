import { Component, OnInit } from '@angular/core';
import {BooksComponent } from '../books/books.component';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 private bdata=[];
 private id="" ;

  constructor(
    private route: ActivatedRoute,
    private book:BooksComponent
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id)
    console.log(this.id)
    this.book.getSinglebook(this.id).subscribe(
      res=>{
      this.bdata=res
      console.log(this.bdata)
    }
    )}

}
