import { useState } from "react";
import { downloadExcel } from "./getTemplate";

export default function GetTemplate(){
    const [typeId, setTypeId] = useState(1);
    return(
        <div>
            <p>Chọn nút dưới để tải</p>
            <select value={typeId} onChange={(e) => setTypeId(e.target.value)}>
                <option value={1}>Đậu nành</option>
                <option value={2}>Lúa</option>
            </select>
            <button onClick={() => downloadExcel(typeId)}>Click here</button>
        </div>
    )
}