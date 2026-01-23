export default function UploadContent(){
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("excel", file);

        console.log("upload thanh cong")

    }

    return(
        <div>
            <div>
                <h1>Hướng dẫn upload dữ liệu từ excel</h1>
                <p>Dữ liệu phải có cấu trúc như sau:</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/V%C3%AD_d%E1%BB%A5.jpg" />
            </div>
            <div>
                <input type="file" accept=".xlsx, .xls" onChange={handleUpload}/>
            </div>
        </div>
    );
}