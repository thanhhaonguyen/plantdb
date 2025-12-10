import * as speciesService from '../services/species.service.js';
import * as importService from "../services/importSpeciesByExcel/import.service.js";
import * as templateService from "../services/importSpeciesByExcel/template.service.js";

export const getSpeciesList = async (req, res) => {
    try {
        const { typeId, page, limit } = req.query;
        if (!typeId) {
            return res.status(400).json({
                message: "Thiếu typeId"
            })
        };
        const data = await speciesService.getSpeciesList(typeId, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const getSpeciesInfo = async (req, res) => {
    try {
        const {speciesId} = req.params;

        const data = await speciesService.getSpeciesInfo(speciesId);
        if (!data) {
            return res.status(400).json({message: "Không tìm thấy dữ liệu"});
        };

        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const getTemplate = async (req, res) => {
    try {
        const { typeId } = req.query;
        const buffer = await templateService.generateTemplateByType(typeId);

        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="template_type_${typeId}.xlsx"`);
        res.send(buffer);
    } catch (err) {
        if (err.message === "TYPE_NOT_EXIST_OR_HAS_NO_PROPERTIES") {
            return res.status(404).json({
                message: "Loại cây không tồn tại hoặc chưa có thuộc tính nào."
            })
        }
        res.status(500).json({ message: "Server error" });
    }
};

export const importExcel = async (req, res) => {
    try {
        const { typeId } = req.query;
        const fileBuffer = req.file.buffer;

        if (!typeId) {
            return res.status(400).json({ message: "Thiếu typeId!"});
        };


        await importService.importByTypeFromExcel(typeId, fileBuffer);

        res.json({ message: "Import thành công!" });
    } catch (err) {
        if (err.message === "HEADER_INVALID") {
            return res.status(400).json({ message: "Tên cột không hợp lệ." });
        }
        res.status(500).json({ message: err.message });
    }
};
