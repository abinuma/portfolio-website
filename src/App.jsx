import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#11071f] min-h-screen overflow-x-hidden ">
      <Navbar />
    </div>
  );
};

export default App;
