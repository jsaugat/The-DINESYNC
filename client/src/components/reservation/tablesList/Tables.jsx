import { useSelector, useDispatch } from "react-redux";
import { setTable } from "@/slices/reservation/selectionSlice";
import { setTotalTables } from "@/slices/reservation/totalTablesSlice";
import { useEffect, useState } from "react";
// styles
import styles from "./style.module.scss";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import { TablesViewDrawer } from "@/master";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function Tables({ search, getFormattedDateTime }) {
  let {
    date: selectedDate,
    time: selectedTime,
    size: selectedSize,
    table: { number: tableNumber },
  } = useSelector((state) => state.selection);
  const totalTables = useSelector((state) => state.totalTables);
  const dispatch = useDispatch();

  /**
   * @function getFormattedDateTime
   * @desc Format together the date and time selected by the user.
   */

  useEffect(() => {
    /**
     * @function fetchTableAvailability
     * @desc Fetch tables availability from the server using formattedDateTime (date, time) and size picked by the user.
     */
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
              date: selectedDateTime,
            }),
          }
        );
        // in response we get first doc from Day collection whose structure is { date: ..., tables : [tableSchema]}, tables is an array. now,
        if (response.ok) {
          console.log("Tables fetched successfully");
          const { tables } = await response.json();
          console.log("Tables: ", tables);
          // Filter available tables with party size criteria.
          // if size is not selected, return all tables
          const filteredTables = !selectedSize
            ? tables
            : tables.filter((table) => table.capacity == selectedSize);
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
  }, [selectedDate, selectedTime, getFormattedDateTime]);

  return (
    /**
     * go to @/shadcn/table.jsx to style the table, for e.g. TableCell > <td className="w-1/5"></td>
     */
    <main className="dark:bg-black/20 backdrop-blur-md rounded-3xl p-4 border border-onyx w-[24rem] table-auto shadow-2xl shadow-black">
      <Table>
        <TableCaption>
          A list of available tables based on your selection.
        </TableCaption>
        <ScrollArea className="w-full h-[19.2rem]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Table ID</TableHead>
              <TableHead className="text-center">Capacity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {totalTables?.map((table) => (
              <TableRow
                key={table.number}
                className={`cursor-pointer ${
                  table.isAvailable ? "" : "text-neutral-500 hover:bg-black"
                }`}
                onClick={() => dispatch(setTable(table.number))}
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
                  <span>T-{table.number}</span>
                </TableCell>
                <TableCell className="text-center">{table.capacity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-white bg-transparent py-3">
              {totalTables.length ? (
                tableNumber ? (
                  <span className="flex gap-2 justify-center">
                    <CheckCircleIcon
                      fontSize="small"
                      className="rounded-full size-0"
                    />{" "}
                    <span>Table <span className="text-googleBlue">T-{tableNumber}</span> is selected.</span>
                  </span>
                ) : (
                  <span>Please Select a Table</span>
                )
              ) : (
                <span className="text-googleBlue">
                  <span>&#8592; &#xa0;</span> Select preferences to reveal
                  tables.
                </span>
              )}
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
