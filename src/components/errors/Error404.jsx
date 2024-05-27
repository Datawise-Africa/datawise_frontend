import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-bold text-gray-600">Page not found</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}