export class GameScore {
  name: string;
  score: number;
  //date: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
    //this.date = Date.now();
  }

  // 取得した日付を反映
  /*
  setData(date: number): GameScore {
    this.date = date;
    return this;
  }
  */
}