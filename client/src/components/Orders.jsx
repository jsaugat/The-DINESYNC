import { Button } from "@/shadcn/ui/button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const { _id: userId } = useSelector((state) => state.auth.userInfo);
  const [myTables, setMyTables] = useState([]);
  useEffect(() => {
    console.log("user Id: ", userId);
    const getMyOrders = async () => {
      const response = await fetch(
        `http://localhost:6900/api/tables/myorders?userId=${userId}`
      );
      const data = await response.json();
      setMyTables(data);
      console.log("My Orders: ", data);
    };
    getMyOrders();
  }, [userId]);
  // console.log("my tables: ", myTables)
  const ISOToReadableDate = (ISODate, type) => {
    const date = new Date(ISODate);

    // Options for formatting the date and time
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };

    // Extract readable date andtime
    if (type === "date") {
      return date.toLocaleDateString("en-US", optionsDate);
    } else if (type === "time") {
      // Convert "10:00 AM" to "10 AM"
      const timeArray = date.toLocaleTimeString("en-US", optionsTime).split(":");
      timeArray[1] = timeArray[1].slice(-2);
      return timeArray.join(" ");
    }
  };
  return (
    <div className="w-1/3">
      <main className="h-[60rem] flex flex-col items-start gap-3 text-[0.9rem]">
        <h3 className="text-3xl my-6 mb-4 text-white">Order History</h3>
        {myTables.map((table, idx) => (
          <figure
            key={idx}
            className="relative px-4 py-6 pb-12 min-w-fit bg-gradient-to-br from-cardBlack via-cardBlack to-cardBlack border rounded-3xl"
          >
            {/* T-{table.number}
              {table.capacity}
              {table.createdDate} */}
            <div
              className="grid grid-cols-5 gap-x-1 text-center"
              style={{ gridTemplateColumns: "1fr 1fr 2fr 1.2fr 1fr" }}
            >
              <div className=" text-googleBlue">Table ID</div>
              <div className=" text-googleBlue">Table Size</div>
              <div className=" text-googleBlue">Date</div>
              <div className=" text-googleBlue">Time</div>
              <div className=" text-googleBlue">Duration</div>

              <div className="py-2 px-1">
                <RoundedNeutralDiv>T-{table.number}</RoundedNeutralDiv>
              </div>
              <div className="py-2 px-1">
                <RoundedNeutralDiv>0{table.capacity}</RoundedNeutralDiv>
              </div>
              <div className="py-2 px-1">
                <RoundedNeutralDiv>
                  {ISOToReadableDate(table.reservedDate, "date")}
                </RoundedNeutralDiv>
              </div>
              <div className="py-2 px-1">
                <RoundedNeutralDiv>
                  {ISOToReadableDate(table.reservedDate, "time")}
                </RoundedNeutralDiv>
              </div>
              <div className="py-2 px-1">
                <RoundedNeutralDiv>1 hr</RoundedNeutralDiv>
              </div>
            </div>

            <section className="flex gap-4 my-4">
              <h4 className="text-googleBlue ml-2">Booking Details</h4>
              <div className="inline-flex flex-col gap-1">
                <RoundedNeutralDiv>{table.bookerName}</RoundedNeutralDiv>
                <RoundedNeutralDiv>{table.bookerEmail}</RoundedNeutralDiv>
                <RoundedNeutralDiv>{table.bookerPhone}</RoundedNeutralDiv>
              </div>
            </section>

            {/* Reservation Requested */}
            <span className="absolute text-neutral-500 text-[.8rem] font-medium bottom-5 left-4">
              {`Reservation Requested at ${ISOToReadableDate( table.createdDate, "date")}`}
            </span>

            {/* Cancel Reservation */}
            <Button className="absolute right-4 bottom-5 rounded-full text-red-400 bg-red-500/10 hover:bg-red-500/20">
              Cancel Reservation
            </Button>
          </figure>
        ))}
      </main>
    </div>
  );
}

const RoundedNeutralDiv = ({ children, className }) => {
  return (
    <div className={`inline-block px-3 py-1 rounded-full bg-white/5 w-fit`}>
      {children}
    </div>
  );
};
