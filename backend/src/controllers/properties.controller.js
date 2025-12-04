import * as importService from "../services/importSpeciesByExcel/import.service.js";
import * as templateService from "../services/importSpeciesByExcel/template.service.js";

export const downloadTemplate = async (req, res) => {
    try {
        const { TypeID } = req.params;
        const buffer = await templateService.generateTemplateByType(TypeID);

        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="template_type_${TypeID}.xlsx"`);
        res.send(buffer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const importExcel = async (req, res) => {
    try {
        const { TypeID } = req.params;
        const fileBuffer = req.file.buffer;

        await importService.importByTypeFromExcel(TypeID, fileBuffer);

        res.json({ message: "Import thành công!" });
    } catch (err) {
        if (err.message === "HEADER_INVALID") {
            return res.status(400).json({ message: "Tên cột không hợp lệ." });
        }
        res.status(500).json({ message: err.message });
    }
};
