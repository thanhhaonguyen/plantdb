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
                <img src="https://analyse-it.com/docs/user-guide/images/datasetlayout.png" />
            </div>
            <div>
                <input type="file" accept=".xlsx, .xls" onChange={handleUpload}/>
            </div>
        </div>
    );
}