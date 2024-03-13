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

const invoices = [
  {
    invoice: "T1",
    paymentStatus: "Reserved",
    totalAmount: "$250.00",
    paymentMethod: "2",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Tables() {
  const {
    date: selectedDate,
    time: selectedTime,
    size: selectedSize,
  } = useSelector((state) => state.selection);
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
    console.log(selectedDate, months);
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
    console.log(selectedDateTime);
    return selectedDateTime;
  };
  useEffect(() => {
    const fetchTableAvailability = async () => {
      // if date or time is not selected
      if (!selectedDate || !selectedTime) return;

      const selectedDateTime = getFormattedDateTime();

      try {
        const response = await fetch("http://localhost:6900/api/tables/availability", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: selectedDateTime,
          }),
        });
        // in response we get first doc from Day collection whose structure is { date: ..., tables : [tableSchema]}, tables is an array. now,
        const { tables } = await response.json();
        console.log("Tables: ", response)
        // Filter available tables with location and group size criteria
        const filteredTables = tables.filter((table) =>
          selectedSize > 0 ? table.capacity >= selectedSize : true
        );
        dispatch(setTotalTables(filteredTables));
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
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Table ID</TableHead>
            <TableHead className="text-left">Status</TableHead>
            <TableHead className="text-left">Capacity</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-left">
                {invoice.invoice}
              </TableCell>
              <TableCell className="text-left">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="text-left">
                {invoice.paymentMethod}
              </TableCell>
              {/* <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-white py-3">
              Please Select a Table
            </TableCell>
            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
