import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { GameScore } from '../../models/gameScore';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  public FB_gameScores: AngularFireList<{}>;
  public gameScores: GameScore[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.FB_gameScores = db.list('/gameScores');
    this.FB_gameScores.snapshotChanges().subscribe((actions: any[]) => {
      this.gameScores = [];
      actions.forEach((action: any) => {
        // 取得したデータを反映
        const val = action.payload.val()
        this.gameScores.push(new GameScore(val.name, val.score));
      });
      this.gameScores.sort( function(a, b) {
        return a.score > b.score ? -1 : 1;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

}
