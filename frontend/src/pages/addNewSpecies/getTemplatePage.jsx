import { useState } from "react";
import { downloadExcel } from "./getTemplate";
import { handleImport } from "./importExcel";

export default function GetTemplate() {
    const [downloadTypeId, setDownloadTypeId] = useState(1);
    const [uploadTypeId, setUploadTypeId] = useState(1);
    const [file, setFile] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="mx-auto max-w-3xl space-y-6">

                {/* Tiêu đề trang */}
                <div className="bg-lime-500 rounded-2xl px-6 py-5 shadow-md">
                    <h2 className="text-white text-xl font-bold tracking-wide uppercase">
                        Import giống cây từ Excel
                    </h2>
                    <p className="text-lime-100 text-sm mt-1">
                        Tải mẫu, điền dữ liệu và import vào hệ thống
                    </p>
                </div>

                {/* Hướng dẫn */}
                <div className="bg-white rounded-2xl shadow-sm border border-lime-100 px-6 py-5">
                    <h3 className="text-green-800 font-semibold text-base mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                        </svg>
                        Hướng dẫn thực hiện
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-700 list-none">
                        {[
                            "Chọn loại giống cây để tải file mẫu.",
                            <>Nhấn <strong className="text-green-700">Tải template</strong> để tải mẫu về máy.</>,
                            "Mở file và nhập dữ liệu theo đúng cấu trúc có sẵn.",
                            "Chọn lại đúng loại giống cây tương ứng khi thực hiện upload.",
                            <>Chọn file đã hoàn tất và nhấn <strong className="text-green-700">Import</strong> để hệ thống xử lý.</>,
                        ].map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3 text-sm text-yellow-800">
                        <span className="font-semibold">⚠ Lưu ý:</span> Các cột có nền màu vàng là thuộc tính dạng enum.
                        Giá trị nhập vào phải trùng khớp với dữ liệu đã được định nghĩa trong cơ sở dữ liệu.
                        Nếu nhập sai hoặc không tồn tại trong hệ thống, quá trình import sẽ bị từ chối.
                    </div>
                </div>

                {/* Tải template */}
                <div className="bg-white rounded-2xl shadow-sm border border-lime-100 px-6 py-5">
                    <h3 className="text-green-800 font-semibold text-base mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Tải file mẫu (Template)
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="flex flex-col gap-1 flex-1 w-full">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Chọn loại giống cây
                            </label>
                            <select
                                value={downloadTypeId}
                                onChange={(e) => setDownloadTypeId(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-200 transition"
                            >
                                <option value={1}>Đậu nành</option>
                                <option value={2}>Lúa</option>
                            </select>
                        </div>
                        <button
                            onClick={() => downloadExcel(downloadTypeId)}
                            className="mt-5 sm:mt-auto flex items-center gap-2 rounded-lg bg-lime-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-lime-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 whitespace-nowrap"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Tải template
                        </button>
                    </div>
                </div>

                {/* Upload / Import */}
                <div className="bg-white rounded-2xl shadow-sm border border-lime-100 px-6 py-5">
                    <h3 className="text-green-800 font-semibold text-base mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                        Import dữ liệu từ file Excel
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Chọn loại giống cây
                            </label>
                            <select
                                value={uploadTypeId}
                                onChange={(e) => setUploadTypeId(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-200 transition"
                            >
                                <option value={1}>Đậu nành</option>
                                <option value={2}>Lúa</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Chọn file Excel
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer rounded-lg border-2 border-dashed border-lime-300 bg-lime-50 px-4 py-3 hover:border-lime-500 hover:bg-lime-100 transition-all duration-150">
                                <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                <span className="text-sm text-gray-600 truncate">
                                    {file ? file.name : "Chưa chọn file (.xlsx, .xls)"}
                                </span>
                                <input
                                    type="file"
                                    accept=".xlsx,.xls"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        <button
                            onClick={() => handleImport(uploadTypeId, file)}
                            disabled={!file}
                            className="flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-green-800 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
                            </svg>
                            Import
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}