import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/24/outline";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome to Our Bookstore
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
            Discover your next favorite book in our carefully curated
            collection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                New Arrivals
              </h2>
              <p className="text-gray-800 dark:text-gray-200">
                Check out our latest additions to the collection.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Featured Authors
              </h2>
              <p className="text-gray-800 dark:text-gray-200">
                Explore works from award-winning authors.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button
              leftIcon={<LinkIcon className="h-5 w-5 text-white" />}
              onClick={() => navigate("/best-books")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Check Out Our Best Sellers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
