import * as propertiesService from "../services/properties.service.js";
import { checkEnumCols, checkHeader, generateTemplateExcel } from "../utils/exel.js";

export const getAllPropertiesByTypeId = async (req, res) => {
    try {
        const {TypeID} = req.params;
        const data = await propertiesService.getAllPropertiesByTypeId(TypeID)
        const buffer = await generateTemplateExcel(TypeID, data);
        
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment; filename="template_type_${TypeID}.xlsx"`
        );
        res.send(buffer);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const importExcelByType = async (req, res) => {
    try {
        const {TypeID} = req.params;
        const fileBuffer = req.file.buffer;
        
        const properties = await propertiesService.getAllPropertiesByTypeId(TypeID);
        
        // chỉnh sửa chỗ này nếu có cập nhập generateTemplateExcel ở utils/excel.js 
        const validHeaders = ["Species Name", ...properties.map(prop => prop.name)];

        const isValid = checkHeader(validHeaders, fileBuffer);

        if (!isValid) {
            return res.status(400).json({
                message: "Tên cột không hợp lệ, vui lòng làm theo mẫu excel."
            })
        }

        const enumError = await checkEnumCols(properties, fileBuffer);
        if (enumError.length > 0) {
            console.log(enumError.join("\n"));
            return res.status(400).json({
                message: enumError.join(".")
            });
        }

        // xử lý gọi hàm import dữ liệu vào 
        res.json({message: "Ok!"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}