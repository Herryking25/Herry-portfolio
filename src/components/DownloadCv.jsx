import { useState } from 'react';

function DownloadCV() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleDownload = () => {
    // Simulate file download after form submission
    const fileUrl = 'src\assets\images\Heritage Cv.pdf'; // Replace with your file URL
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Bolatito Heritage CV.pdf'); // Set the file name
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form validation here if needed
    handleDownload(); // Trigger file download
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Download Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 max-w-max rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-600
                text-white"
      >
        Download Cv
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Download Cv</h2>

            <form action='https://getform.io/f/byvpxkoa' method='POST' onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-500"
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-br from-orange-500 to-pink-600 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>

            {/* Close Modal */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DownloadCV;
