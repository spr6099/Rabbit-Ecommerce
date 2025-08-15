import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setisDragging] = useState(false);
  const [startX, setstartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(false);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const [canScrollRight, setcanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 2,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 3,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 4,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 6,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 7,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 8,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?/random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setisDragging(true);
    setstartX(e.pageX - scrollRef.current.offsetLeft);
    setscrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // how far the mouse has moved
    scrollRef.current.scrollLeft = scrollLeft - walk; // scroll the container
  };

  const handleMouseUpOrLeave = () => {
    setisDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  // update scroll buttons

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   scrollWidth: container.scrollWidth,
    //   clientWidth: container.clientWidth,
    //   offsetLeft: scrollRef.current.offsetLeft,
    // });

    if (container) {
      const leftScroll = container.scrollLeft;

      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setcanScrollLeft(leftScroll > 0);
      setcanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold  mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight of the runway ,freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded ${
              canScrollLeft
                ? " bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded ${
              canScrollRight
                ? " bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}

      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? " cursor-grabbing" : " cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%]"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              classsName="w-full h-[500px] object-cover rounded-lg "
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium "> {product.name}</h4>
                <p className="mt-1">{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
