import { User } from "./user";
import { Individual } from "./individual";
import { Category, Coordinates } from "./global";

export class Donation {
  private id: string;
  private user: User;
  private capacity: number;
  private image: string;

  private receivers: Individual[];
  private date: Date;
  private category: Category;
  private coordinates: Coordinates;
  constructor(
    id: string,
    user: User,
    capacity: number,
    receivers: Individual[],
    date: Date,
    category: Category,
    coordinates: Coordinates
  ) {
    this.id = id;
    this.user = user;
    this.capacity = capacity;
    this.receivers = receivers;
    this.date = date;
    this.category = category;
    this.coordinates = coordinates;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getUser(): User {
    return this.user;
  }
  setUser(user: User): void {
    this.user = user;
  }

  getCapacity(): number {
    return this.capacity;
  }
  setCapacity(capacity: number) {
    this.capacity = capacity;
  }

  getReceivers(): Individual[] {
    return this.receivers;
  }
  setReceivers(receivers: Individual[]) {
    this.receivers = receivers;
  }

  getDate(): Date {
    return this.date;
  }
  getCategory(): Category {
    return this.category;
  }

  getCoordinates(): Coordinates {
    return this.coordinates;
  }
}
