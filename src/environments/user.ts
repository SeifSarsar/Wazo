export class User {
  private id: string;
  private email: string;
  private username: string;
  private generosity: number;

  constructor(id: string, email: string, username: string, generosity: number) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.generosity = generosity;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }
}
