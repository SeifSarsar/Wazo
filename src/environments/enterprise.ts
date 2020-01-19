import { User } from "./user";
import { Branch } from "./branch";
export class Enterprise extends User {
  private branches: Branch[];
  constructor(id: string, email: string, username: string, generosity: number) {
    super(id, email, username, generosity);
    //this.branches = branches;
  }
  /*nches(): Branch[] {
    return this.branches;
  }

  getBranch(branchId): Branch {
    for (let i: number = 0; i < this.branches.length; i++) {
      if (this.branches[i].getId() == branchId) {
        return this.branches[i];
      }
    }
    return null;
  }*/
}
