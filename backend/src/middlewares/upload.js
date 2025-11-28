import multer from "multer";

const storage = multer.memoryStorage();
// Lưu file vào ram

export const upload = multer({ storage });