import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";
import { ClockIcon } from "@radix-ui/react-icons";

export default function TimePicker() {
  const times = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
  ]
  return (
    <main className="mt-4">
      <Select>
        <SelectTrigger className="w-full flex">
          <div className="flex items-center gap-2">
            <ClockIcon className="text-googleBlue" />
            <SelectValue
              placeholder="Pick a Time"
              className="placeholder:text-neutral-400"
            />
          </div>
        </SelectTrigger>
        <SelectContent>
          {times.map((time, idx) => (
            <SelectItem key={idx} value={time}>{time}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </main>
  );
}
