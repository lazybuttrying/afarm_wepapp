export class Quality {
  id: number;
  date: Date;
  zone: number;

  constructor(id: number, date: Date, zone: number) {
    this.id = id;
    this.date = date;
    this.zone = zone;
  }
}
