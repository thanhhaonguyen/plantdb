import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // lưu thông tin user hiện tại
  const [isLoading, setIsLoading] = useState(true); // trạng thái loading khi khôi phục user

  // Kiểm tra xem có user trong localStorage không (khi F5 lại trang)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Đánh dấu hoàn tất việc khôi phục
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    toast("Đã đăng xuất!", {autoClose: 500});
    localStorage.removeItem("user");
    setUser(null);
  };

  // Hàm kiểm tra xem user có role admin không
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  // Hàm kiểm tra xem user có role cụ thể không
  const hasRole = (role) => {
    return user && user.role === role;
  };

  // Hàm kiểm tra xem user đã đăng nhập chưa
  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAdmin, 
      hasRole, 
      isAuthenticated,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};