export interface ITask {
  id: string;
  title: string;
  description: string;
  devDate: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
}
