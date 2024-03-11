import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/shadcn/lib/utils";
import { Button } from "@/shadcn/ui/button";
import { Calendar } from "@/shadcn/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/ui/popover";

export default function DatePicker() {
  const [date, setDate] = React.useState();

  const getFormattedDateTime = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateStr = `${
      months[selection.date.getMonth()]
    } ${selection.date.getDate()} ${selection.date.getFullYear()}`;
    let formattedTime = selection.time.slice(0, -2);
    formattedTime =
      selection.time > 12
        ? formattedTime + 12 + ":00"
        : formattedTime + ":00";

    const formattedDateTime = new Date(`${dateStr} ${formattedTime}`);
    return formattedDateTime;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"minimal"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-googleBlue" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-white">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}