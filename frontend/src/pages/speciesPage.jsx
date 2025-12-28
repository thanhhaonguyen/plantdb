import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getSpeciesInformation } from "../services/species.service";

export default function SpeciesPage() {
    const [speciesData, setSpeciesData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const { speciesID } = useParams();

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getSpeciesInformation(speciesID);
            setSpeciesData(data);
            const repImage = data.Images?.find(img => img.is_representative === 1);
            setSelectedImage(repImage || data.Images?.[0]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [speciesID]);

    useEffect(() => {
        if (speciesID) fetchData();
    }, [speciesID, fetchData]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg text-gray-600">Đang tải...</div>
            </div>
        );
    }

    if (!speciesData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg text-red-600">Không tìm thấy thông tin loài cây</div>
            </div>
        );
    }

    const primaryName = speciesData.SpeciesNames?.find(n => n.is_primary === 1)?.name || 'N/A';
    const otherNames = speciesData.SpeciesNames?.filter(n => n.is_primary === 0) || [];

    // Component Gallery ảnh để tái sử dụng
    const ImageGallery = () => (
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden lg:sticky lg:top-4">
            {/* Ảnh chính */}
            {selectedImage && (
                <div className="border-b border-gray-300">
                    <img
                        src={selectedImage.url}
                        alt={selectedImage.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="px-3 py-2 bg-gray-50 text-sm text-gray-600 text-center">
                        {selectedImage.name}
                    </div>
                </div>
            )}

            {/* Thumbnails */}
            {speciesData.Images?.length > 1 && (
                <div className="p-3">
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                        Hình ảnh khác
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {speciesData.Images.map(image => (
                            <button
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                className={`rounded overflow-hidden border-2 transition-all ${
                                    selectedImage?.id === image.id
                                        ? 'border-blue-500 shadow-md'
                                        : 'border-gray-200 hover:border-blue-300'
                                }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.name}
                                    className="w-full h-20 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Tiêu đề - luôn hiển thị đầu tiên */}
                <h1 className="text-4xl font-bold text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">
                    {primaryName}
                </h1>
                
                {/* Tên khác */}
                {otherNames.length > 0 && (
                    <div className="mb-4 text-gray-600 italic">
                        {otherNames.map((name, index) => (
                            <span key={name.id}>
                                {name.name}
                                {index < otherNames.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                )}

                {/* Layout chính */}
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                    
                    {/* Cột bên trái - Nội dung chính */}
                    <div className="flex-1 lg:max-w-3xl">
                        {/* Gallery ảnh CHỈ hiển thị trên MOBILE */}
                        <div className="lg:hidden mb-6">
                            <ImageGallery />
                        </div>

                        {/* Xuất xứ */}
                        <div className="mb-6 text-gray-700">
                            <span className="font-semibold">Xuất xứ:</span> {speciesData.origin}
                        </div>

                        {/* Mô tả */}
                        <div className="mt-6 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold mb-3 border-b border-gray-300 pb-2">
                                Mô tả
                            </h2>
                            {/* Nên tạo thêm cột mô tả trong cơ sở dữ liệu chẳng hạn
                            <p className="mb-4">
                                {primaryName} là một trong những giống cây trồng có giá trị cao, 
                                được phát triển tại {speciesData.origin}.
                            </p>
                            */}
                            <p className="mb-4">
                                Giống {primaryName} hiện chưa có mô tả.
                            </p>
                        </div>

                        {/* Bảng thông số */}
                        <div className="mt-6 bg-white border border-gray-300 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                                <h2 className="text-xl font-bold text-gray-800">Thông số kỹ thuật</h2>
                            </div>
                            <table className="w-full">
                                <tbody>
                                    {speciesData.PropertiesValues?.map((prop, index) => {
                                        const value = prop.Property.value_type === 'num'
                                            ? prop.number_value
                                            : prop.EnumProperty?.enum_value || 'N/A';

                                        return (
                                            <tr
                                                key={`${prop.properties_id}-${index}`}
                                                className="border-b border-gray-200 last:border-b-0"
                                            >
                                                <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-700 w-2/5 align-top">
                                                    {prop.Property.name}
                                                </td>
                                                <td className="px-4 py-3 text-gray-900">
                                                    {value}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Cột bên phải - Gallery ảnh CHỈ hiển thị trên DESKTOP */}
                    <div className="hidden lg:block lg:w-80 flex-shrink-0">
                        <ImageGallery />
                    </div>
                </div>
            </div>
        </div>
    );
}