import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";
import { ClockIcon } from "@radix-ui/react-icons";
import { setTime } from "@/slices/reservation/selectionSlice";
import { useSelector, useDispatch } from "react-redux";

export default function TimePicker() {
  const selectedTime = useSelector((state) => state.selection.time);
  const dispatch = useDispatch();
  const times = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];
  return (
    <main className="mt-4">
      <Select onValueChange={(value)=> dispatch(setTime(value))}>
        <SelectTrigger className="w-full flex">
          <div className="flex items-center gap-2">
            <ClockIcon className="text-googleBlue" />
            <SelectValue
              placeholder="Pick a Time"
            />
          </div>
        </SelectTrigger>
        <SelectContent>
          {times.map((time, idx) => (
            <SelectItem
              key={idx}
              value={time}
            >
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </main>
  );
}
