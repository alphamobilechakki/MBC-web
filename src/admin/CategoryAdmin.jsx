import React, { useEffect, useState } from "react";
import CategoryTable from "../Components/admin/CategoryTable";
import CategoryFormModal from "../Components/admin/CategoryFormModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminCategories } from "../redux/slices/CategorySlice";

const CategoryAdmin = () => {
  const dispatch = useDispatch();
  const { data: categories, loading, error } = useSelector((state) => state.categories);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchAdminCategories());
  }, [dispatch]);

  const handleSave = (data) => {
    console.log("data saved ", data);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    console.log("Delete id:", id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Category Management</h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 cursor-pointer bg-[#C6363E] text-white rounded hover:bg-[#9b1d23]"
        >
          + Add Category
        </button>
      </div>

      {loading && <p>Loading categories...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <CategoryTable
          categories={categories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <CategoryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editData={editData}
      />
    </div>
  );
};

export default CategoryAdmin;
