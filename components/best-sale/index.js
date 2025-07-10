"use client";
import React, { useState } from "react";
import useCartStore from "../store/cartStore";

const BestSale = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const addToCart = useCartStore((state) => state.addToCart);

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      description: "Large tropical plant with unique split leaves",
      price: 45.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 128,
      image: "/deal/img (4).jpg",
      discount: 42,
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "Low maintenance air-purifying plant",
      price: 32.5,
      originalPrice: 55.0,
      rating: 4.5,
      reviews: 96,
      image: "/deal/img (5).jpg",
      discount: 41,
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      description: "Trendy statement plant with large violin-shaped leaves",
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.3,
      reviews: 87,
      image: "/deal/img (6).jpg",
      discount: 28,
    },
    {
      id: 4,
      name: "Peace Lily",
      description: "Elegant flowering plant that purifies air",
      price: 28.75,
      originalPrice: 42.99,
      rating: 4.8,
      reviews: 143,
      discount: 33,
      image: "/deal/img (7).jpg",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i}>⭐</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i}>⭐</span>);
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ⭐
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-[#e6f7dc] to-[#DDF6D2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Green Deals Are Here{" "}
            <span className="text-amber-600">– Up to 50% Off!</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-green-800 max-w-2xl mx-auto">
            Discover our premium plant collection at unbeatable prices. Limited
            time offer!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-amber-500 text-white font-bold text-sm px-3 py-1 rounded-full z-10">
                  {product.discount}% OFF
                </div>
                <div className="h-60 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <h2 className="text-xl font-bold text-green-900">
                    {product.name}
                  </h2>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-700">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mb-5">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span>({product.reviews} reviews)</span>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      addToCart(product);
                      showToast("🛒 Added to cart!");
                    }}
                    className="flex-1 bg-emerald-600 text-white py-2.5 px-4 rounded-lg hover:bg-emerald-700 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => openModal(product)}
                    className="bg-amber-500 text-white py-2.5 px-4 rounded-lg hover:bg-amber-600 transition"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-xl overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {selectedProduct.description}
                  </p>
                  <div className="text-lg font-bold text-emerald-700 mb-2">
                    ${selectedProduct.price.toFixed(2)}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Rating:</strong> {selectedProduct.rating.toFixed(1)}{" "}
                    ⭐
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Reviews:</strong> {selectedProduct.reviews}
                  </p>

                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      closeModal();
                      showToast("🛒 Added to cart!");
                    }}
                    className="bg-emerald-600 text-white px-5 py-2 rounded hover:bg-emerald-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toast Message (Top Right) */}
        {toastMessage && (
          <div className="fixed top-5 right-5 bg-green-400 text-white px-5 py-3 rounded-lg shadow-lg z-[9999] transition-opacity duration-300">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSale;
