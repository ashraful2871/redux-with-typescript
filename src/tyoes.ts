export interface ITask {
  id: string;
  title: string;
  description: string;
  deuDate: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
  AssignTO: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
