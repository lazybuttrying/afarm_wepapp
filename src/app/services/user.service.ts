import { Injectable } from '@angular/core';
import { Drone } from '../classes/drone';
import axios from 'axios';
import { Queries } from '../api/queries';
import { Configure } from '../api/configure';
import { User } from '../classes/user';
import { iif } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //public user: User = null;
  private query: Queries = new Queries();

  constructor() {}


  async getUser(user_id: string, pw: string): Promise<User> {
    this.query.select_user(user_id,pw);
    Configure.hasura['data'] = this.query.hasura;
    const response = await axios(Configure.hasura);
    return (
      response.data.data.afarm_user.length > 0 ?
      response.data.data.afarm_user[0] :
      null
    );
  }

  async insertUser(
    userId: string,
    userPw: string,
    userName: string,
    userEmail: string
  ): Promise<string> {
    this.query.insert_user(userId, userPw, userName, userEmail);
    Configure.hasura['data'] = this.query.hasura;
    const response = await axios(Configure.hasura);
    console.log(response.data);
    try{
      return response.data.data.insert_afarm_user_one.user_id;
    }
    catch(e){
      return null;
    }
  }
}
