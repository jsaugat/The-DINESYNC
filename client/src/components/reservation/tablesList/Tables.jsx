import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/ui/table";
import { useSelector, useDispatch } from "react-redux";
import { setTotalTables } from "@/slices/reservation/totalTablesSlice";
import { useEffect } from "react";
// styles
import styles from "./style.module.scss";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import { TablesViewDrawer } from "@/master";
// shadcn components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/ui/tooltip";

export default function Tables() {
  let {
    date: selectedDate,
    time: selectedTime,
    size: selectedSize,
  } = useSelector((state) => state.selection);
  const totalTables = useSelector((state) => state.totalTables);
  const dispatch = useDispatch();
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
    selectedDate = new Date(selectedDate);
    const formattedDate = `${
      months[selectedDate.getMonth()]
    } ${selectedDate.getDate()} ${selectedDate.getFullYear()}`;

    let hours = parseInt(selectedTime.slice(0, -2));
    const isPM = selectedTime.endsWith("PM");

    if (isPM && hours !== 12) {
      hours += 12;
    } else if (!isPM && hours === 12) {
      hours = 0;
    }

    const formattedTime = `${hours.toString().padStart(2, "0")}:00`;

    const selectedDateTime = new Date(`${formattedDate} ${formattedTime}`);
    console.log("Selected Date Time: ", selectedDateTime);
    return selectedDateTime;
  };
  useEffect(() => {
    const fetchTableAvailability = async () => {
      // if date or time is not selected
      if (!selectedDate || !selectedTime) return;
      const selectedDateTime = getFormattedDateTime();

      try {
        const response = await fetch(
          "http://localhost:6900/api/tables/availability",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // date: selectedDateTime,
              date: new Date("March 12, 2024 15:30:00 UTC"),
            }),
          }
        );
        // in response we get first doc from Day collection whose structure is { date: ..., tables : [tableSchema]}, tables is an array. now,
        if (response.ok) {
          console.log("Tables fetched successfully");
          const { tables } = await response.json();
          console.log("Tables: ", tables);
          // Filter available tables with location and group size criteria
          const filteredTables = tables.filter(
            (table) => table.capacity == selectedSize
          );
          dispatch(setTotalTables(filteredTables));
        } else {
          console.log(
            "Error fetching tables from the endpoint: " + response.statusText
          );
        }
      } catch (err) {
        console.log("Error fetching tables availability: " + err);
      }
    };
    fetchTableAvailability();
  }, [selectedTime, selectedDate, selectedSize]);
  return (
    /**
     * go to @/shadcn/table.jsx to style the table, for e.g. TableCell > <td className="w-1/5"></td>
     */
    <main className="dark:bg-black/20 backdrop-blur-md rounded-3xl p-4 border border-onyx w-[24rem] table-auto">
      <Table>
        <TableCaption>
          A list of available tables based on your selection.
        </TableCaption>
        <ScrollArea className="w-full h-[18.8rem]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Table ID</TableHead>
              <TableHead className="text-center">Capacity</TableHead>
              {/* <TableHead className="text-right">Amount</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {totalTables.map((table) => (
              <TableRow
                key={table.number}
                className="cursor-pointer"
                onClick={() => console.log("hi")}
              >
                <TableCell className="text-center">
                  {table.isAvailable ? (
                    <div
                      className={`${styles.available} ${styles.statusIndicator}`}
                    >
                      <span class="rounded-full size-2 bg-green-500 shadow-md shadow-black"></span>{" "}
                      AVAILABLE
                    </div>
                  ) : (
                    <div
                      className={`${styles.booked} ${styles.statusIndicator}`}
                    >
                      <span class="rounded-full size-2 bg-red-600 shadow-sm shadow-black"></span>{" "}
                      BOOKED
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium text-center">
                  <span>T {table.number}</span>
                </TableCell>
                <TableCell className="text-center">{table.capacity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-white py-3">
              Please Select a Table
            </TableCell>
            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
      {/* Table Viewer Drawer */}
      <TablesViewDrawer onlyIcon={true} />
    </main>
  );
}
