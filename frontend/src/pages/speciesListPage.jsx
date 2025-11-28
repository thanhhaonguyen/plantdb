import { useState, useEffect, useCallback } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import BasicPagination from "../components/pagination";
import { getSpeciesListByType } from "../services/species.service";

export default function SpeciesListPage() {
  const [speciesData, setSpeciesData] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [loading, setLoading] = useState(false);
  const { typeID } = useParams();
  //const [pageNum, setPageNum] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = Number(searchParams.get("page") || 1);

  const fetchData = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const data = await getSpeciesListByType(typeID, page, 12);
      console.log(data);
      setSpeciesData(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error(`Error fetching items: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [typeID]);

  useEffect(() => {
   fetchData(pageNum);
  }, [pageNum, typeID, fetchData]);

  function handlePageChange(event, value) {
    //setPageNum(value);
    setSearchParams({page: value});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        DANH SÁCH GIỐNG CÂY
      </h1>

      {/* Loading state */}
      {loading && (
        <p className="text-center text-sky-600 mb-5">Đang tải dữ liệu...</p>
      )}

      {/* Grid dữ liệu */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speciesData.map((value) => {
          const imageUrl = value.Images?.[0]?.url;
          const speciesName = value.SpeciesNames?.[0]?.name || "Không có tên";
          return (
            <NavLink
              key={value.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              to={`/species/${value.id}`}
            >
              {/* Hình ảnh */}
              {imageUrl && (
                <div className="aspect-[7/4] overflow-hidden">
                  <img
                    className="w-full h-auto object-cover"
                    src={imageUrl}
                    alt={speciesName}
                  />
                </div>
              )}

              {/* Tên loài */}
              <div className="p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
                {value.SpeciesNames?.map((names) => (
                  <p
                    key={names.id}
                    className="text-xs sm:text-sm md:text-lg font-medium text-gray-700 text-center"
                  >
                    {names.name}
                  </p>
                ))}
              </div>
            </NavLink>
          );
        })}
      </div>

      <BasicPagination
        pageNum={pagination.totalPages || 1}
        page={pageNum}
        onChangeFunction={handlePageChange}
      />
    </div>
  );
}
