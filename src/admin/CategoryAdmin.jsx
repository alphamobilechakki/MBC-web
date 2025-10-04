import React, { useEffect, useState } from "react";
import CategoryTable from "../Components/admin/CategoryTable";
import CategoryFormModal from "../Components/admin/CategoryFormModal";
import { useDispatch, useSelector } from "react-redux";
import { fatchCategories } from "../redux/slices/CategorySlice";

const CategoryAdmin = () => {

    const dispatch = useDispatch();
    // const { item: categories, loading, error } = useSelector((state) => state.categories)


    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [editData, setEditData] = useState(null);


    // ✅ Fetch categories when component mounts
    // useEffect(() => {
    //     dispatch(fatchCategories());
    // }, [dispatch])

    // const handleSave = (data) => {
    //     console.log("data saved ", data)
    // }


    // const handleEdit = (data) => {
    //     console.log("Edit data", data)
    // }


    // const handleDelete = (id) => {
    //     // here you’d call API for delete
    //     console.log("Delete id:", id);
    // };









    const [categories, setCategories] = useState([
        { id: 1, name: "Atta", slug: "atta", status: "active", image: "https://via.placeholder.com/40", createdAt: "2025-09-08", },
        { id: 2, name: "Masale", slug: "masale", status: "inactive", image: "https://via.placeholder.com/40", createdAt: "2025-09-07", },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const handleSave = (data) => {
        if (editData) { setCategories(categories.map((cat) => (cat.id === editData.id ? { ...data, id: cat.id } : cat))); }
        else {
            setCategories([...categories,
            { ...data, id: Date.now(), createdAt: new Date().toISOString().split("T")[0] }]);
        } setEditData(null);
    };
    const handleEdit = (cat) => { setEditData(cat); setIsModalOpen(true); };
    const handleDelete = (id) => { setCategories(categories.filter((cat) => cat.id !== id)); };


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
{/* 
            {loading && <p>Loading categories...</p>}
            {error && <p className="text-red-600">{error}</p>}


            {!loading && !error && (
                <CategoryTable
                    categories={categories}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            )} */}

            <CategoryTable
                categories={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />


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
