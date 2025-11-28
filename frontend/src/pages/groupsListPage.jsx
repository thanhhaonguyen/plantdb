import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { getAllGroups } from "../services/groups.service";

export default function GroupsListPage() {
  const [groupsData, setgroupsData] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllGroups();
      console.log(data)
      setgroupsData(data);
    } catch (error) {
      console.error(`Error fetching items: ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
   fetchData();
  }, [ fetchData]);

  return (
    
    <div className="min-h-screen bg-gray-100 py-10 px-5">
        {console.log(groupsData)}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            DANH SÁCH NHÓM CÂY
        </h1>

        {/* Loading state */}
        {loading && (
            <p className="text-center text-sky-600 mb-5">Đang tải dữ liệu...</p>
        )}

        {/* Grid dữ liệu */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {groupsData.map((value) => {
            return (
                <NavLink
                key={value.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                to={`/group/${value.id}`}
                >
                {/* Hình ảnh */}
                {/* imageUrl && (
                    <div className="aspect-[7/4] overflow-hidden">
                    <img
                        className="w-full h-auto object-cover"
                        src={imageUrl}
                        alt={speciesName}
                    />
                    </div>
                ) */}

                {/* Tên nhóm */}
                <div className="p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
                    {
                        <p  key={value.id}
                            className="text-xs sm:text-sm md:text-lg font-medium text-gray-700 text-center"
                        >
                            {value.name}
                        </p>
                    }
                </div>
                </NavLink>
            );
            })}
        </div>
    </div>
  );
}
