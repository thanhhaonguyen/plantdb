export const validateHeader = (validHeaders, headers) => {
    return validHeaders.every((h, i) => h === headers[i]);
};

export const findInvalidEnumValues = (rows, enumMap) => {
    const errors = [];

    for (const [colName, validValues] of Object.entries(enumMap)) {
        const values = [...new Set(rows.map(r => r[colName]).filter(v => v != null && v.toString().trim() !== ""))];
        const invalid = values.filter(v => !validValues.includes(v));

        if (invalid.length > 0) {
        errors.push(`Cột ${colName} có giá trị sai: ${invalid.join(", ")}`);
        }
    }

    return errors;
};
