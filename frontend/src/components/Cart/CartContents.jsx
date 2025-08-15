import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
const CartContents = () => {
  const cartProducts = [
    {
      id: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 19.99,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Jeans",
      size: "XL",
      color: "Blue",
      quantity: 4,
      price: 24.7,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start ">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover mr-4 rounded"
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p className="text-sm text-gray-500">
              size:{product.size},color:{product.color}
            </p>
            <div>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                -
              </button>
              <span className="mx-4">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                +
              </button>
            </div>
          </div>
          <div>
            <p className="font-medium"> ₹ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
