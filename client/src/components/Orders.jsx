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
  const isoToReadableDate = (isoDate, type) => {
    const date = new Date(isoDate);

    // Options for formatting the date and time
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
    
    // Extract readable date andtime
    if (type === "date") {
      return date.toLocaleDateString("en-US", optionsDate);
    } else if (type === "time") {
      return date.toLocaleTimeString("en-US", optionsTime);
    }
  };
  return (
    <main className="mx-auto h-[60rem] flex flex-col items-start gap-3 text-[0.9rem]">
      <h3 className="text-3xl my-6 mb-4 text-white">Order History</h3>
      {myTables.map((table, idx) => (
        <figure key={idx} className="p-6 bg-neutral-900 rounded-xl">
          {/* T-{table.number}
              {table.capacity}
              {table.createdDate} */}
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex-1 px-3 text-googleBlue">Table ID</div>
              <div className="flex-1 px-3 text-googleBlue">Table Size</div>
              <div className="flex-1 px-3 text-googleBlue">Date</div>
              <div className="flex-1 px-3 text-googleBlue">Time</div>
              <div className="flex-1 px-3 text-googleBlue">Duration</div>
            </div>
            <div className="flex">
              <div className="flex-1 py-2">
                <RoundedNeutralDiv>T-{table.number}</RoundedNeutralDiv>
              </div>
              <div className="flex-1 py-2">
                <RoundedNeutralDiv>{table.capacity}</RoundedNeutralDiv>
              </div>
              <div className="flex-3 py-2">
                <RoundedNeutralDiv>
                  {isoToReadableDate(table.reservedDate, "date")}
                </RoundedNeutralDiv>
              </div>
              <div className="flex-3 py-2">
                <RoundedNeutralDiv>
                  {isoToReadableDate(table.reservedDate, "time")}
                </RoundedNeutralDiv>
              </div>
              <div className="flex-1 py-2">
                <RoundedNeutralDiv>1h</RoundedNeutralDiv>
              </div>
            </div>
          </div>
          <section className="flex">
            <h4 className="text-googleBlue">Booking Details</h4>
            <div className="inline-flex flex-col gap-1">
              <RoundedNeutralDiv>{table.bookerName}</RoundedNeutralDiv>
              <RoundedNeutralDiv>{table.bookerEmail}</RoundedNeutralDiv>
              <RoundedNeutralDiv>{table.bookerPhone}</RoundedNeutralDiv>
            </div>
          </section>
          <span>{`Reservation Requested at ${isoToReadableDate(
            table.createdDate
          )}`}</span>
        </figure>
      ))}
    </main>
  );
}

const RoundedNeutralDiv = ({ children, className }) => {
  return (
    <div className={`inline-block px-2 py-1 rounded-full bg-neutral-800`}>
      {children}
    </div>
  );
};
