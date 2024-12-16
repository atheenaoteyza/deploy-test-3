import React, { useRef } from "react";
import { app, auth } from "../firebaseConfig";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const saveData = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user in the database
      const db = getDatabase(app);
      const userRef = ref(db, `users/${user.uid}`);
      try {
        await set(userRef, {
          email,
          uid: user.uid,
          invoices: {},
        });
        alert("User registered");
      } catch (error) {
        alert("error db");
      }
    } catch (error) {
      console.error("error during registration", error.message);
    }
  };
  return (
    <div>
      <input type="text" placeholder="Email" ref={emailRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button onClick={saveData}>save</button>
    </div>
  );
};

export default Register;
