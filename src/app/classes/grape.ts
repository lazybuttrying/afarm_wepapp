export class Grape {
  //   quality_id: number;
  //   grape_id: number;
  berry: number;
  sick_berry: number;
  maturity: string;
  pruning: string;
  img: string;

  constructor(grape: JSON) {
    // this.quaility_id = grape['quality_id'];
    // this.grape_id = grape['grape_id'];
    this.berry = grape['berry'];
    this.sick_berry = grape['sick_berry'];
    this.maturity = grape['maturity'];
    this.pruning = grape['pruning'];
    this.img = grape['img'];
  }
}
