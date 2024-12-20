import React, { useRef, useState } from "react";
import { auth } from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userId, setUserId] = useState(null); // State to hold the user ID
  const [userData, setUserData] = useState(null); // State to hold the user data

  const loginUser = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Log in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Authenticated user

      // Log the user ID
      console.log("User ID:", user.uid);
      setUserId(user.uid); // Save userId to state

      // Fetch user data from Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("User Data:", userData); // Log user data
        setUserData(userData);
      } else {
        console.log("No user data found.");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" ref={emailRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button onClick={loginUser}>Login</button>

      {userId && <p>User ID: {userId}</p>}
      {userData && (
        <div>
          <p>User Email: {userData.email}</p>
          <p>User Invoices: {JSON.stringify(userData.invoices)}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
