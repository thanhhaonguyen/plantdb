import axios from 'axios';

// Cấu hình base URL cho backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://plantdb-api.lab.io.vn';

// Tạo instance axios với cấu hình mặc định
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để thêm token vào header nếu có
api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.token) {
        config.headers.Authorization = `Bearer ${userData.token}`;
      }
    }
    return config;
  },
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      "Lỗi không xác định từ server";
    
    // 401: Hết hạn đăng nhập
    if (status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    // 403: Không có quyền
    if (status === 403) {
      console.warn("Không có quyền truy cập!");
    }

    // 500: Lỗi server
    if (status >= 500){
      console.error("Lỗi hệ thống: ", message);
    }

    return Promise.reject({
      status,
      message,
      raw: error
    });
  }
);

// Interceptor để xử lý response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Nếu token hết hạn hoặc không hợp lệ, xóa user khỏi localStorage
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
