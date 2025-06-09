import { Link } from "react-router-dom";

export const SimpleNav = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-6 py-4 text-lg bg-white border-b shadow-sm">
      <Link to="/#library" className="text-slate-800 hover:text-blue-600 font-semibold">
        PDF Guides
      </Link>
      <Link to="/#tips" className="text-slate-800 hover:text-blue-600 font-semibold">
        Digital Tips
      </Link>
      <Link to="/#contact" className="text-slate-800 hover:text-blue-600 font-semibold">
        Contact
      </Link>
      <Link to="/signup" className="text-slate-800 hover:text-blue-600 font-semibold">
        Sign Up
      </Link>
    </nav>
  );
};