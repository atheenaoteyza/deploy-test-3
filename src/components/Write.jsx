import React, { useState } from "react";
import { app } from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const Write = () => {
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(
      ref(db, "users/8lDKVGEWpUWp1woe7tlCoQykH9r2/invoices")
    );
    set(newDocRef, {
      iid: "invoice#1",
      status: "pending",
      price: 500,
    })
      .then(() => {
        alert("data saved success");
      })
      .catch((error) => {
        alert("error", error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default Write;
