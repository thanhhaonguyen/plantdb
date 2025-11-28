import { useState } from "react";

function Sidebar({onSelectFunction}){
    return (
        <aside className="w-64 bg-gray-100">
            <ul>
                <li>
                    <div>
                        Tổng quan
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a onClick={() => onSelectFunction("Thống kê")}>
                                    Thống kê
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        Quản lý
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a onClick={() => onSelectFunction("Người dùng")}>
                                    Người dùng
                                </a>
                            </li>
                            <li>Cây trồng
                                <ul>
                                    <li>
                                        <a onClick={() => onSelectFunction("Yêu cầu thêm giống")}>
                                            Yêu cầu thêm giống
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => onSelectFunction("Thêm giống mới")}>
                                            Thêm giống mới
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => onSelectFunction("Thêm loại cây trồng mới")}>
                                            Thêm loại cây trồng mới
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => onSelectFunction("Thêm thuộc tính mới cho cây")}>
                                            Thêm thuộc tính mới cho cây
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => onSelectFunction("Upload dữ liệu từ Excel")}>
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
    )
}

function Content({page}){
    let content;

    if (page){
        content = (
            <>
                <p>Page: {page}</p>
            </>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default function Dashboard(){
    const [page, setPage] = useState("");

    return (
        <div>
            <Sidebar onSelectFunction={setPage} />
            <Content page={page} />
        </div>
    )
}