import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditService} from "../../services/reddit.service";

@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {

  items: any;
  category: any;
  limit : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public redditService: RedditService
  ) {
    this.getDefault();
  }

  ngOnInit(){
    this.getPosts(this.category,this.limit);
  }

  getPosts(cat,lim){
    this.redditService.getPosts(cat,lim)
      .subscribe(res => {
        this.items = res.data.children;
      })
  }


  viewItem(item){
    this.navCtrl.push('DetailsPage',{
      item: item
    })
  }

  getDefault(){
    this.category= 'sports';
    this.limit=10;

  }
  changeCat(){
    this.getPosts(this.category,this.limit);
  }

}
