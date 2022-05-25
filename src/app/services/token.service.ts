import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Token } from '../classes/token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: Token = null;
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  async getToken(): Promise<string>{
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
        if (value) {
          this.token = new Token(value);
        }
        resolve(value);
      });
    });
  }

  async setToken(value: string) {
    await this.storage.set('token', value);
  }
}
