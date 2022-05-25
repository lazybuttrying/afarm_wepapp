export class Token {
  _whoLogin: string;
  constructor(whoLogin: string) {
    this.whoLogin = whoLogin;
  }

  get whoLogin(): string {
    return this._whoLogin;
  }
  set whoLogin(value: string) {
    this._whoLogin = value;
  }
}
