export interface Comment {
  comment: string;
  date: Date;
  userId: string;
}

export interface Materials {
  name: string;
  quantity: number;
  unit: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  createDate: Date;
  endDate: Date | null;
  priority: string;
  status: string;
  assignedTo: string;
  materialsUsed: Materials[];
  hoursSpent: number; // can be just the sum of all the hours or can be a day and hours spent log
  comments: Comment[];
  lastUpdated: Date;
}
