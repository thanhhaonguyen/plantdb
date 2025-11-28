import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading } = useContext(AuthContext);

  // Hiển thị loading khi đang khôi phục user từ localStorage
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-[18px]">
        Đang tải...
      </div>
    );
  }

  // Kiểm tra xem user đã đăng nhập chưa
  if (!user) {
    toast.info("Vui lòng đăng nhập để sử dụng dịch vụ!");
    return <Navigate to="/login" replace />;
  }

  // Kiểm tra role nếu có yêu cầu role cụ thể
  if (requiredRole && user.role !== requiredRole) {
    toast.error("Bạn không có quyền truy cập vào trang này!");

    return (
      <>
        <Navigate to="/" replace />
      </>
    )
  }

  return children;
};

export default ProtectedRoute;
