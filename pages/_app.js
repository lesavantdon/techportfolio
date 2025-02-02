// pages/_app.js
import React from "react";
import NavBar from "../components/NavBar"; // ✅ Import the NavBar
import "../styles/globals.css"; // Ensure you have global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
