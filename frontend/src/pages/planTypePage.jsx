import { useState, useEffect, useCallback } from "react"
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { getAllTypeByGroup } from "../services/plantType.service";
import BasicPagination from "../components/pagination";

export default function PlantTypePage() {
    const [plantTypeData, setPlantTypeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {groupID} = useParams();
    const [pagination, setPagination] = useState({ totalPages: 1 });
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = Number(searchParams.get("page") || 1);

    const fetchData = useCallback(async (page = 1) => {
        setLoading(true);
        try {
            const data = await getAllTypeByGroup(groupID, page, 12);
            console.log(data);
            setPlantTypeData(data.data);
            setPagination(data.pagination);
        } catch(err){
            console.error(err);
        } finally {
            setLoading(false)
        }
    }, [groupID]);

    useEffect(() => {
        if (groupID) fetchData(pageNum);
    }, [pageNum, groupID, fetchData]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg text-sky-600">Đang tải...</div>
            </div>
        );
    }

    function handlePageChange(event, value) {
        setSearchParams({page: value});
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            { // chỉ hiện thẻ h1 này khi có dữ liệu
                plantTypeData.length > 0 && (
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        DANH SÁCH LOÀI CÂY THUỘC NHÓM {plantTypeData[0].Group.name.toUpperCase()}
                    </h1>)
            }
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4">
                {
                    plantTypeData.map(value => (
                        <NavLink 
                            key={value.id} 
                            to={`/species-type/${value.id}`}
                            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="aspect-[7/4] overflow-hidden">
                                <img 
                                    src="https://media.dolenglish.vn/PUBLIC/MEDIA/3abd3a35-ff15-4532-9a70-be40b42d9fc9.webp" 
                                    alt={value.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                                    {value.name}
                                </h3>
                            </div>
                        </NavLink>
                    ))
                }
            </div>

            <BasicPagination
                pageNum={pagination.totalPages || 1}
                page={pageNum}
                onChangeFunction={handlePageChange}
            />
        </div>
    )
}