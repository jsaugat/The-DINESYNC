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
  const selectedDate = useSelector((state) => state.selection.date);
  const selectedDateDate = new Date(selectedDate).getDate();
  const dispatch = useDispatch();
  const times = [
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
  ];

  const disablePast = (time) => {
    const isPM = time.slice(-2) === "PM";
    const timeHour = parseInt(time.slice(0, -2));
    const isHour12 = time.slice(0, -2) === "12";
    const currentHour = new Date().getHours();
    console.log(currentHour);

    // Convert the time string to a 24-hour format for easier comparison
    let timeIn24HourFormat = isPM
      ? timeHour === 12 // if 12 PM
        ? 12
        : timeHour + 12
      : timeHour === 12 // if 12 AM
      ? 0
      : timeHour;

    if (selectedDateDate === new Date().getDate()) {
      if (isPM) {
        if (isHour12) {
          return currentHour >= timeIn24HourFormat;
        } else {
          return timeIn24HourFormat <= currentHour;
        }
      } else {
        if (isHour12) {
          return timeIn24HourFormat <= currentHour;
        } else {
          return timeIn24HourFormat <= currentHour;
        }
      }
    }
    return false;
  };

  return (
    <main className="mt-4">
      <Select onValueChange={(value) => dispatch(setTime(value))}>
        <SelectTrigger className="w-full flex">
          <div className="flex items-center gap-2">
            <ClockIcon className="text-googleBlue" />
            <SelectValue placeholder="Pick a Time" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {times.map((time, idx) => (
            <SelectItem
              key={idx}
              value={time}
              // disable if the time is before the current time
              disabled={disablePast(time)}
            >
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </main>
  );
}
