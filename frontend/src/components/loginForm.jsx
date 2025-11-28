import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // chặn reload trang mặc định
    try {
      const res = await axios.post("/api/user/login", {
        username,
        password,
      });

      

      // nếu backend trả về token
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setMessage("Đăng nhập thành công!");
      } else {
        setMessage("Đăng nhập thất bại!");
      }
    } catch (error) {
      setMessage("Sai tài khoản hoặc lỗi máy chủ");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend>ĐĂNG NHẬP</legend>

        <label htmlFor="username">Tên đăng nhập:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Mật khẩu:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Đăng nhập" />
      </form>

      <p>{message}</p>
    </div>
  );
}
