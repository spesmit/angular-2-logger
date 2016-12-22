export class User {

  constructor(username:string, aToken:string) {
    this.username = username;
    this.aToken = aToken;
  }

  private username:string;
  private aToken:string;

  getUsername():string {
    return this.username;
  }

  getAToken():string {
    return this.aToken;
  }
}
