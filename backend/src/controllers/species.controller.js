import * as speciesService from '../services/species.service.js';
import * as importService from "../services/importSpeciesByExcel/import.service.js";
import * as templateService from "../services/importSpeciesByExcel/template.service.js";

export const getSpeciesList = async (req, res) => {
    try {
        const {TypeID} = req.params;
        const { page, limit } = req.query;
        const data = await speciesService.getSpeciesList(TypeID, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const getSpeciesInfo = async (req, res) => {
    try {
        const {SpeciesID} = req.params;
        const data = await speciesService.getSpeciesInfo(SpeciesID);
        if (!data) {
            return res.status(400).json({message: "Data not found"});
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const getTemplate = async (req, res) => {
    try {
        const { TypeID } = req.params;
        const buffer = await templateService.generateTemplateByType(TypeID);

        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="template_type_${TypeID}.xlsx"`);
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
