# Hướng dẫn cài đặt và chạy dự án

## Yêu cầu hệ thống

- Node.js
- npm
- Database (MySQL)

## 1. Clone dự án về máy

### Bước 1: Clone repository

```bash
git clone https://github.com/thanhhaonguyen/plantdb
```

### Bước 2: Mở thư mục dự án

```bash
cd PlantDB
```

### Bước 3: Chạy db.sql

Chạy **db.sql** trong MySQL Workbench để có dữ liệu mẫu

## 2. Cấu hình biến môi trường

Mở **2 terminal** riêng biệt và thực hiện các lệnh sau:

### Bước 1: Tạo file `.env` cho Backend ở terminal 1

```bash
cd backend
cp .example.env .env
```

### Bước 2: Chỉnh sửa file `.env`

Mở file `backend/.env` và điền thông tin cấu hình:

```env
# Database Configuration
DB_HOST=localhost
DB_NAME=ten_database_cua_ban
DB_USER=root
DB_PASS=mat_khau_database
DB_PORT=3306

# Server Port
PORT=5000

# Secret Key (dùng cho JWT)
SECRET_KEY=random_secret_key
REFRESH_SECRET_KEY=

# Cors
CORS_ORIGIN=http://localhost:3000

# App lang: 'en' or 'vn'
APP_LANG=en

# access token & refresh token expire time
ACCESS_TOKEN_EXPIRE_TIME=1h
REFRESH_TOKEN_EXPRITE=7d
```

> **Gợi ý:** Để tạo SECRET_KEY ngẫu nhiên, bạn có thể chạy lệnh:
>
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

### Bước 3: Tạo file `.env` cho Frontend ở terminal 2

```bash
cd frontend
cp .example.env .env
```

### Bước 2: Chỉnh sửa file `.env`

Mở file `backend/.env` và điền thông tin cấu hình:

```env
VITE_API_URL=http://localhost:5000
```

## 3. Cài đặt dependencies

### Terminal 1 - Backend

```bash
npm install
```

### Terminal 2 - Frontend

```bash
npm install
```

## 4. Chạy dự án

Sau khi cài đặt xong, tiếp tục ở **2 terminal** vừa mở:

### Terminal 1 - Chạy Backend

```bash
npm run dev
```

Backend sẽ chạy tại: `http://localhost:5000` (hoặc PORT bạn đã cấu hình)

### Terminal 2 - Chạy Frontend

```bash
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

## 5. Kiểm tra dự án

- Truy cập Frontend: `http://localhost:3000`
- API Backend: `http://localhost:5000`
