// src/utils/invoiceUtils.js
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebaseConfig";

export const addInvoice = async (invoiceName, invoiceData) => {
  try {
    const db = getDatabase(app);
    const customKey = invoiceName;
    const newInvoiceRef = ref(
      db,
      `users/8lDKVGEWpUWp1woe7tlCoQykH9r2/invoices/${customKey}`
    );
    await set(newInvoiceRef, invoiceData);
    console.log(`Invoice "${invoiceName}" added successfully.`);
  } catch (error) {
    console.error("Error adding invoice:", error.message);
  }
};
