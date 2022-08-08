import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

export function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
