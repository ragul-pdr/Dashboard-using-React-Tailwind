import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div>this is Dashboard</div>
      <div>
        <p>
          <Link to="/products" className="underline">Go to Products</Link>
        </p>
      </div>
    </>
  );
};

export default Dashboard;
