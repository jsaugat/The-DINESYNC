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
  return (
      <main className="mx-auto h-[60rem]">
          {myTables.map((table, idx) => (
            <div
              key={idx}
            >
              <div>T-{table.number}</div>
              <div>{table.capacity}</div>
              <div>{table.createdDate}</div>
            </div>
          ))}
      </main>
  );
}
