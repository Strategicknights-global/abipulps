import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Abi Pulp</h1>
        <nav>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/products">Products</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
