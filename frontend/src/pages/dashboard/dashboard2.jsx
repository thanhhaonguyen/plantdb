import { useState } from "react";
import UploadContent from "./content/uploadFromExcel";

function Sidebar({ onSelectFunction }) {
    return (
        <aside className="w-64 h-screen bg-gray-100 border-r border-gray-300 p-4">
            <ul className="space-y-6">
                <li>
                    <div className="text-gray-700 font-semibold mb-2">
                        Tổng quan
                    </div>
                    <div>
                        <ul className="space-y-2 ml-2">
                            <li>
                                <a 
                                    onClick={() => onSelectFunction("Thống kê")}
                                    className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                >
                                    Thống kê
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className="text-gray-700 font-semibold mb-2">
                        Quản lý
                    </div>
                    <div>
                        <ul className="space-y-3 ml-2">
                            <li>
                                <a
                                    onClick={() => onSelectFunction("Người dùng")}
                                    className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                >
                                    Người dùng
                                </a>
                            </li>

                            <li className="text-gray-700 font-medium">
                                Cây trồng
                                <ul className="space-y-2 ml-4 mt-2">
                                    <li>
                                        <a 
                                            onClick={() => onSelectFunction("Yêu cầu thêm giống")}
                                            className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                        >
                                            Yêu cầu thêm giống
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            onClick={() => onSelectFunction("Thêm giống mới")}
                                            className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                        >
                                            Thêm giống mới
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            onClick={() => onSelectFunction("Thêm loại cây trồng mới")}
                                            className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                        >
                                            Thêm loại cây trồng mới
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            onClick={() => onSelectFunction("Thêm thuộc tính mới cho cây")}
                                            className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                        >
                                            Thêm thuộc tính mới cho cây
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            onClick={() => onSelectFunction("Upload dữ liệu từ Excel")}
                                            className="block cursor-pointer text-gray-600 hover:text-blue-600"
                                        >
                                            Upload dữ liệu từ Excel
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </aside>
    );
}

function Content({ page }) {
    if (page === "Upload dữ liệu từ Excel"){
        return <UploadContent />
    }
    return (
        <div className="flex-1 p-6">
            {page && (
                <p className="text-lg font-medium text-gray-800">
                    Page: {page}
                </p>
            )}
        </div>
    );
}

export default function Dashboard() {
    const [page, setPage] = useState("");

    return (
        <div className="flex">
            <Sidebar onSelectFunction={setPage} />
            <Content page={page} />
        </div>
    );
}
