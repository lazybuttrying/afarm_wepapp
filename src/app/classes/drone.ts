export class Drone {
  id: number;
  // is_fly: boolean;
  start_time: string;
  // end_time: string;
  product_name: string;
  product_img: string;
  user_id: string;
  zone: number;

  constructor(drone: JSON) {
    this.id = drone['id'];
    // this.is_fly = drone['is_fly'];
    this.start_time = drone['start_time'];
    // this.end_time = drone['end_time'];
    this.product_name = drone['product_name'];
    this.product_img = drone['product_img'];
    this.user_id = drone['user_id'];
    this.zone = drone['zone'];
  }
}
