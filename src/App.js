import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfoundcomponent from "./components/Notfoundcomponent";

const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/signup/signup"));
const Order = React.lazy(() => import("./pages/orders/order"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Notfoundcomponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
