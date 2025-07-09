import React from "react";

const BestSale = () => {
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

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-amber-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-amber-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
            >
              <div className="relative">
                {/* Discount badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white font-bold text-sm px-3 py-1 rounded-full z-10 shadow-md">
                  {product.discount}% OFF
                </div>

                {/* Image with hover effect */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-green-900 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h2>

                  <div className="flex flex-col items-end">
                    <div className="text-lg font-bold text-emerald-700">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="flex mr-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-emerald-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                  {/* <button className="bg-amber-500 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                    Buy Now
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSale;
