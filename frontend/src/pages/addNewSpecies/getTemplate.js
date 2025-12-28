import { getTemplate } from "../../services/species.service";

async function downloadExcel(typeId) {
    try {
        const {data, headers} = await getTemplate(typeId);
        const disposition = headers["content-disposition"];

        //tên mặc định nếu backend không gửi tên, nếu có thì RE để filename thành tên từ backend
        let filename = "template.xlsx"; 

        if (disposition) {
            const match = disposition.match(/filename="(.+)"/);
            if (match) {
                filename = match[1];
            }
        }

        const blobUrl = window.URL.createObjectURL(new Blob([data]));

        // thẻ a để tải
        const link = document.createElement("a");

        link.href = blobUrl;
        link.download = filename;

        document.body.appendChild(link);
        link.click();

        link.remove()
        window.URL.revokeObjectURL(blobUrl);
    } catch (error){
        console.error("Lỗi khi tải file", error);
    }
}

export {downloadExcel}