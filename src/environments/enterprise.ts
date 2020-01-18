import { User } from "./user";
import { Branch } from "./branch";
export class Enterprise extends User {
  private popularity: number;
  private branches: Branch[];
  constructor(
    id: string,
    email: string,
    username: string,
    popularity: number,
    branches: Branch[]
  ) {
    super(id, email, username);
    this.popularity = popularity;
    this.branches = branches;
  }

  getPopularity(): number {
    return this.popularity;
  }

  getBranches(): Branch[] {
    return this.branches;
  }

  getBranch(branchId): Branch {
    for (let i: number = 0; i < this.branches.length; i++) {
      if (this.branches[i].getId() == branchId) {
        return this.branches[i];
      }
    }
    return null;
  }
}
