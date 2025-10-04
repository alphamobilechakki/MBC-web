import React, { useEffect } from "react";
import Product from "../../components/user/Product";
import { useDispatch, useSelector } from "react-redux";
import { userproduct } from "../../redux/slices/ProductSlice";

const ProductHome = () => {
  const dispatch = useDispatch();

  // ✅ Pull state safely
  const { data: products = [], loading, error } =
    useSelector((state) => state.products) || {};

  useEffect(() => {
    dispatch(userproduct());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-10 px-4 md:px-1">
      <div className="justify-between items-center flex lg:px-6 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Our <span className="text-red-600">Products</span>
          </h2>
          <p className="text-gray-500 mt-2">
            "Chuno Apni Pasand– Sab Kuch Ek Jagah"
          </p>
        </div>
        <a href="/">See More</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:p-6">
        {loading ? (
          <p className="col-span-full text-center">Loading...</p>
        ) : error ? (
          <p className="col-span-full text-center text-red-500">
            Error: {error}
          </p>
        ) : products.length === 0 ? (
          <p className="col-span-full text-center">No products available</p>
        ) : (
          products.map((item) => (
            <Product
              key={item._id}
              imgUrl={item.images?.[0] || "/placeholder.jpg"}
              description={item.description}
              quantity={item.sizes?.[0] || "N/A"}
              rating={
                item.reviews?.length
                  ? item.reviews.reduce((sum, r) => sum + r.rating, 0) /
                    item.reviews.length
                  : 0
              }
              sellingPrice={item.sellingPrice}
              actualPrice={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductHome;
