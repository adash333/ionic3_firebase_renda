import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { RankingPage } from '../ranking/ranking';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { GameScore } from '../../models/gameScore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public gameScores: AngularFireList<{}>;
  // タイマー設定
  public countTimer = 13;
  // タップ回数カウンター
  public counter = 0;
  // 「tapFlag」的のタップ可否設定
  public tapFlag = false;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.gameScores = db.list('gameScores');
  }

  goToRanking() {
    this.navCtrl.push('RankingPage');
  }

  // 「Start」ボタン押下時の処理
  startGame() {
    // ボタンの無効化
    //startButtonFlag true のときにstartボタンを押せないようにする
    //startButtonFlag true のときにrankingボタンを押せないようにする
    
    // タップカウンターリセット
    this.counter = 0;
    // タイマーリセット
    this.countTimer = 13;
    // タイマーを起動
    this.countTime(this.countTimer);
    
  }


  //firebaseへのデータ保存
  saveScore(user: string, score: number) {
    this.gameScores.push(new GameScore(user, score))
  }


  // タイマー
  countTime(time: number) {
    if (time > 0){
      if (time >= 11) {
        this.tapFlag = false;
        $("p").html(String(time-10));
      } else if (time == 10) {
        this.tapFlag = true;
        $("p").html("スタート！");
      } else {
        this.tapFlag = true;
        $("p").html(String(time));
      }
      this.countTimer -= 1;
      // １秒後にcountTime()を呼び出す
      setTimeout(() => {
        this.countTime(this.countTimer)
      },1000);
    } else {
      this.tapFlag = false;
      $("p").html("タイムアップ！");
      this.imputName(this.counter);
    }    
  }

  // 名前入力アラートの表示
  imputName(count: number) {
    // 入力アラートを表示
    var name = window.prompt("名前を入力してください", "");
    if (name == null || name == "") {
        $("p").html("保存がキャンセルされました");        
    } else {
      // スコアと入力した名前を保存
      this.saveScore(name, count);
      $("p").html(name + "さんのスコアは" + String(count) + "連打でした"); 
    }
    // ボタンの有効化
    //document.gameForm.start.disabled = false;
    //document.gameForm.ranking.disabled = false;
  }

  // タップ数カウント
  tapCount() {
    if (this.tapFlag) {
      this.counter += 1;
      console.log(this.counter+"回タップしました");
      //$("strong").html(String(this.counter));
    }
  }

}
