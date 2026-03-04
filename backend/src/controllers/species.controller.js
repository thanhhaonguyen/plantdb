import * as speciesService from '../services/species.service.js';
import * as importService from "../services/importSpeciesByExcel/import.service.js";
import * as templateService from "../services/importSpeciesByExcel/template.service.js";
import { HTTP_STATUS, MESSAGE } from '../constants/index.js';

export const getSpeciesList = async (req, res) => {
    try {
        const { typeId, page, limit } = req.query;
        if (!typeId) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: MESSAGE.MISSING_typeId
            })
        };
        const data = await speciesService.getSpeciesList(typeId, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({message: MESSAGE.SERVER_ERROR});
    }
}

export const getSpeciesInfo = async (req, res) => {
    try {
        const {speciesId} = req.params;

        const data = await speciesService.getSpeciesInfo(speciesId);
        if (!data) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({message: MESSAGE.NO_DATA_FOUND});
        };

        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({message: MESSAGE.SERVER_ERROR});
    }
}

export const getTemplate = async (req, res) => {
    try {
        const { typeId } = req.query;
        const {buffer, typeName} = await templateService.generateTemplateByType(typeId);

        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="template_giong_${typeName}.xlsx"`);
        res.send(buffer);
    } catch (err) {
        if (err.message === "TYPE_NOT_EXIST_OR_HAS_NO_PROPERTIES") {
            return res.status(404).json({
                message: MESSAGE.TYPE_NOT_EXIST_OR_HAS_NO_PROPERTIES
            })
        }
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ message: MESSAGE.SERVER_ERROR });
    }
};

export const importExcel = async (req, res) => {
    try {
        const { typeId } = req.query;
        const fileBuffer = req.file.buffer;

        if (!typeId) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: MESSAGE.MISSING_typeId});
        };


        const parsedTypeId = Number(typeId);
        await importService.importByTypeFromExcel(parsedTypeId, fileBuffer);

        res.json({ message: MESSAGE.IMPORT_SUCCESSFUL });
    } catch (err) {
        if (err.message === "HEADER_INVALID") {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: MESSAGE.INVALID_COL_NAME });
        }
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ message: err.message });
    }
};
