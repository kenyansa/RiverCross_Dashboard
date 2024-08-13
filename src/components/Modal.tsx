import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function Modal({ onClose }: { onClose: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    comments: '',
  });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = () => {
    console.log('User Input:', userInput);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-gray-100 rounded-lg p-8 max-w-md w-full shadow-lg">
        <h2 className="text-2xl text-lime-500 bg-slate-200 font-semibold mb-4 text-center">Product Details</h2>
        {currentProduct ? (
          <div className="text-center">
            <img src={currentProduct.image} alt={currentProduct.title} className="w-48 h-48 object-cover rounded-lg mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{currentProduct.title}</h3>
            <p className="text-lg  bg-slate-200 text-gray-700 mb-2">Category: {currentProduct.category}</p>
            <p className="text-lg font-semibold text-blue-600 mb-4">Price: ${currentProduct.price}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInput.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={userInput.comments}
            onChange={handleInputChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

