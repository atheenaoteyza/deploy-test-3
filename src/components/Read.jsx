import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../firebaseConfig";
import { addInvoice } from "./AddInvoice";

const Read = () => {
  const [invoices, setInvoices] = useState({});

  const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const newDocRef = ref(db, "users/8lDKVGEWpUWp1woe7tlCoQykH9r2/invoices");
      const snapshot = await get(newDocRef);

      if (snapshot.exists()) {
        setInvoices(snapshot.val());
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAddInvoice = async () => {
    // Call the addInvoice function with custom key and data
    await addInvoice("TestInvoice2", { price: 1000, status: "paid" });
    fetchData(); // Refresh the data after adding the invoice
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <button onClick={handleAddInvoice}>Add Invoice</button>
      <ul>
        {Object.entries(invoices).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
