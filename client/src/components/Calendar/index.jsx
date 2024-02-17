import { useState } from "react";
import ReactCalendar from "react-calendar";
import "./styles.scss";
import { add, format } from "date-fns";
import {
  STORE_OPENING_TIME,
  STORE_CLOSING_TIME,
  INTERVAL,
} from "../constants/config";

const index = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });
  console.log(date);

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const from = add(justDate, { hours: STORE_OPENING_TIME });
    const to = add(justDate, { hours: STORE_CLOSING_TIME });
    const interval = INTERVAL; // minutes

    const times = [];
    for (let i = from; i <= to; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };
  const times = getTimes();

  return (
    <div className="flex flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex flex-wrap gap-4">
          {times?.map((time, i) => (
            <div key={`time${i}`} className="rounded-sm bg-neutral-700 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "hh:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT_CALENDAR p-2"
          view="month"
          onClickDay={(selectedDate) =>
            setDate((prev) => ({ ...prev, justDate: selectedDate }))
          }
        />
      )}
    </div>
  );
};

export default index;
