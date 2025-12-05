import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (username === "" || password === "") {
      toast.error("Vui lòng điền đầy đủ thông tin"); 
      return
    };

    try {
      const res = await axios.post("/api/user/login", {
        username,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success(`Đăng nhập thành công! Vui lòng chờ 1s`, {autoClose: 1000});

        await new Promise(r => setTimeout(r, 1000));

        window.location.replace('/');
      } else {
        toast.error("Đăng nhập thất bại!");
      }
    } catch (error) {
      toast.error("Sai tài khoản hoặc mật khẩu!");
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (username === "" || password === "" || repeatPassword === "" || email === "") {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (password !== repeatPassword) {
      toast.error("Mật khẩu không khớp!");
      return;
    }

    try {
      {/*
      const res = await axios.post("/api/user/register", {
        username,
        email,
        password,
      });
      console.log(`Res: ${res}`);
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      setTimeout(() => {
        setActiveTab("login");
        setUsername("");
        setPassword("");
        setRepeatPassword("");
        setEmail("");
      }, 2000);
      */}

      toast.error("Chức năng tạm thời không khả dụng!");
      setTimeout(() => {
        setActiveTab("register");
        setUsername("");
        setPassword("");
        setRepeatPassword("");
        setEmail("");
      }, 2000);
    } catch (error) {
      toast.error("Tài khoản hoặc email đã tồn tại.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-bl from-lime-300 via-yellow-300 to-[#00d19a] pt-10 pb-10">
      <div className="max-w-md mx-auto pb-8 bg-white pl-10 pr-10 border rounded-xl ">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-300 dark:border-gray-600 mb-6">
          <button
            onClick={() => {
              setActiveTab("login");
            }}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === "login"
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              setActiveTab("register");
            }}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === "register"
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Đăng ký
          </button>
        </div>

        {/* Tab Content - với min-height để tránh nhảy layout */}
        <div className="min-h-[400px] transition-all duration-300 ease-in-out">
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="animate-fade-in">
              <div className="mb-5">
                <label
                  htmlFor="login-username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên đăng nhập:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="login-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên người dùng.."
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="login-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Đăng nhập
              </button>
            </form>
          )}

          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="animate-fade-in">
              <div className="mb-5">
                <label
                  htmlFor="register-username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên đăng nhập:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="register-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên người dùng.."
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="register-email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@example.com"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="register-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="register-repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nhập lại mật khẩu:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  id="register-repeat-password"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Đăng ký
              </button>
            </form>
          )}
        </div>

        {/* CSS cho animation fade-in */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
}