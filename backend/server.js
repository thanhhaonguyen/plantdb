import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import groupRoutes from "./src/routes/groups.routes.js";
import plantTypeRroutes from "./src/routes/plantType.route.js";
import userRoutes from "./src/routes/user.route.js";
import speciesRoutes from "./src/routes/species.route.js"
import propertiesRoutes from "./src/routes/properties.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Cấu hình CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || "", // Cho phép frontend truy cập
  credentials: true, // Cho phép gửi cookies và headers xác thực
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

//routes
app.use("/api/groups", groupRoutes);
app.use("/api/plant-types", plantTypeRroutes);
app.use("/api/species", speciesRoutes);
app.use("/api/user", userRoutes);
app.use("/api/properties", propertiesRoutes);

// kiểm tra kết nối DB
sequelize.authenticate()
  .then(() => console.log("✅ Database connected..."))
  .catch(err => console.error("❌ Database connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
