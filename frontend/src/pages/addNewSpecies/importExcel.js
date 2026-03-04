import { importExcel } from "../../services/species.service";

async function handleImport(typeId, file) {
    try {
        const result = await importExcel(typeId, file);
        alert(result.message);
    } catch (error) {
        console.error("Lỗi import:", error);
        alert(error.response?.data?.message || "Import thất bại");
    }
}

export { handleImport };