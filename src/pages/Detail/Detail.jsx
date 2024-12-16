import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { request } from "../../api";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request
      .get(`/product/get/${id}`)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          navigate("/not-found");
        }
      })
      .catch(() => navigate("/not-found"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) {
    return <div className="text-center py-20 text-white">Yuklanmoqda...</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 bg-wite min-h-screen">
      <div className="grid md:grid-cols-2 gap-6 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden border border-gray-700">
        <div className="flex items-center justify-center bg-gray-800 p-4">
          <img
            src={data?.image || "https://via.placeholder.com/400"}
            alt={data?.name || "Mahsulot rasmi"}
            className="rounded-md max-h-[400px] object-contain"
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-red-500 mb-3">{data?.name}</h1>
          <p className="text-gray-400 mb-4 leading-relaxed">{data?.description}</p>

          <div className="mb-4">
            <span className="text-2xl font-bold text-red-500">${data?.price}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <button
              className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-red-500"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-white">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-red-500"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition mb-4">
            Savatga qo‘shish
          </button>

          <div className="flex items-center justify-between text-2xl">
            <button
              className={`${
                data?.isInWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
              title="Sevimlilarga qo‘shish"
            >
              {data?.isInWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button
              className={`${
                data?.isInCart ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
              title="Savatga qo‘shish"
            >
              <IoCartOutline />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-red-500 mb-2">Mahsulot ma'lumotlari:</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>
                <strong>Kategoriya:</strong> {data?.categoryId}
              </li>
              <li>
                <strong>Omborda:</strong> {data?.stock > 0 ? "Bor" : "Yo‘q"}
              </li>
              <li>
                <strong>Reyting:</strong> {data?.average_rating || "Noaniq"}
              </li>
              <li>
                <strong>Yangilangan:</strong> {new Date(data?.updatedAt).toLocaleDateString()}
              </li>
              <li>
                <strong>Qo‘shilgan:</strong> {new Date(data?.createdAt).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
