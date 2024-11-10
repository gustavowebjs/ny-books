export const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Us
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
              Welcome to our bookstore! We're passionate about connecting
              readers with their perfect books.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              Our mission is to promote literacy and foster a love for reading
              by providing access to quality books at reasonable prices.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Email: contact@bookstore.com
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Phone: (555) 123-4567
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Address: 123 Book Street, Reading City, RC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
