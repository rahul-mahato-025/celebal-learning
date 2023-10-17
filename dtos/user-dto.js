export default class UserDto {
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
  }
}
