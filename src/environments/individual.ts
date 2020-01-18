import { User } from "./user";

export class Individual extends User {
  private reliability: number;

  constructor(
    id: string,
    email: string,
    username: string,
    reliability: number
  ) {
    super(id, email, username);
    this.reliability = reliability;
  }

  getPopularity(): number {
    return this.reliability;
  }
}
