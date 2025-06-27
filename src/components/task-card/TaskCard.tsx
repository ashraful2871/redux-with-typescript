import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/tyoes";
import { cn } from "@/lib/utils";
interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
  return (
    <Card className="bg-black border border-gray-800 text-white px-4 py-3 mb-2">
      <CardContent className="p-0 flex items-start justify-between">
        {/* Left content */}
        <div className="flex items-start gap-2">
          {/* Green dot */}
          <div
            className={cn("h-2.5 w-2.5 rounded-full  mt-1", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          />
          <div>
            <h3 className="text-sm font-semibold">{task.title}</h3>
            <p className="text-sm text-muted-foreground">{task.description}</p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button className="text-red-500 hover:text-red-600">
            <Trash2 size={16} />
          </button>
          <Checkbox id="terms" className="border-2 border-white" />
        </div>
      </CardContent>
    </Card>
  );
}
