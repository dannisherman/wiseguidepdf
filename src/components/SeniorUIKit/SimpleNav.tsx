import React from "react";
import { Link } from "react-router-dom";

export const SimpleNav = () => (
  <nav className="flex gap-6 p-4 text-lg bg-white border-b shadow-sm justify-center">
    <Link to="/#library">PDF Guides</Link>
    <Link to="/#tips">Digital Tips</Link>
    <Link to="/#contact">Contact</Link>
  </nav>
);
