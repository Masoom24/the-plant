import React from "react";

const Featured = () => {
  const products = [
    {
      id: 1,
      imgSrc: "/Categories/img1.jpg",
      title: " Rubber Plant",
      price: 89.99,
      reviews: 24,
    },
    {
      id: 2,
      imgSrc: "/Categories/img2.jpg",
      title: " Bird of Paradise ",
      price: 124.99,
      reviews: 36,
    },
    {
      id: 3,
      imgSrc: "/Categories/img3.jpg",
      title: "Spider Plant ",
      price: 59.99,
      reviews: 42,
    },
    {
      id: 4,
      imgSrc: "/Categories/img4.jpg",
      title: "ZZ Plant",
      price: 149.99,
      reviews: 18,
    },
    {
      id: 5,
      imgSrc: "/Categories/img5.jpg",
      title: "Money plant",
      price: 79.99,
      reviews: 31,
    },
    {
      id: 6,
      imgSrc: "/Categories/img6.jpg",
      title: "Euphorbia ",
      price: 39.99,
      reviews: 57,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            New Plnats
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most popular collections this season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#f0fdf4] to-[#ecfae5]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Premium quality collection with modern designs and sustainable
                  materials.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
