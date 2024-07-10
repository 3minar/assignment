import {UserGender} from "./UserGender";

export class UserModel {
  constructor(public name: string,
              public age: number,
              public gender: UserGender,
              public address: string,
              public username: string,
              public password: string,) {
  }
}
