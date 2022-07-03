export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private tokenExpirationDate: Date
  ) {}
  
// It is a property where it runs code when you call it.
get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
        return null;
    }
    return this._token;
  }
  
}
