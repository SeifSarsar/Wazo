import { User } from "./user";
import { Enterprise } from "./enterprise";
export class Branch extends User {
  private popularity: number;
  private enterprise: Enterprise;
  constructor(
    id: string,
    email: string,
    username: string,
    popularity: number,
    enterprise: Enterprise
  ) {
    super(id, email, username);
    this.popularity = popularity;
    this.enterprise = enterprise;
  }

  getPopularity(): number {
    return this.popularity;
  }

  getEnterprise(): Enterprise {
    return this.enterprise;
  }
}
