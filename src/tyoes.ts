export interface ITask {
  id: string;
  title: string;
  description: string;
  devDate: string; // Format: YYYY-MM
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
}
