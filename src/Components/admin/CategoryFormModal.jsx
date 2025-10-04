import React, { useState, useEffect } from "react";

const CategoryFormModal = ({ isOpen, onClose, onSave, editData }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    status: "active",
    image: null,
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {editData ? "Edit Category" : "Add Category"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 mb-1">Category name</label>
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-gray-700 mb-1">Category slug</label>
            <input
              type="text"
              name="slug"
              placeholder="Slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Image Upload (with placeholder-like UI) */}
          <div>
            <label className="block text-gray-700 mb-1">Category Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border p-2 rounded text-gray-500 file:mr-3 file:py-2 file:px-4 
                         file:rounded file:border-0 file:text-sm file:font-semibold 
                         file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 mb-1">Category status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-700 cursor-pointer text-white rounded hover:bg-green-800"
            >
              {editData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryFormModal;
