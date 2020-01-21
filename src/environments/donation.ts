import { User } from "./user";
import { Category, Coordinates } from "./global";

export class Donation {
  private id: string;
  private name: string;
  private user: string;
  private capacity: number;
  private image: string;

  private receivers: User[];
  private date: Date;
  private category: Category;
  private coordinates: Coordinates;
  constructor(
    id: string,
    name: string,
    user: string,
    capacity: number,
    receivers: User[],
    date: Date,
    category: Category,
    image: string,
    coordinates: Coordinates
  ) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.capacity = capacity;
    this.receivers = receivers;
    this.date = date;
    this.category = category;
    this.image = image;
    this.coordinates = coordinates;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getUser(): string {
    return this.user;
  }
  setUser(user: string): void {
    this.user = user;
  }

  getCapacity(): number {
    return this.capacity;
  }
  setCapacity(capacity: number) {
    this.capacity = capacity;
  }

  getReceivers(): User[] {
    return this.receivers;
  }
  setReceivers(receivers: User[]) {
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
