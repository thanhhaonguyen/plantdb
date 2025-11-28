import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ pageNum, onChangeFunction, page }) {
  return (
    <Stack spacing={2} alignItems="center" marginBottom={4} marginTop={4}>
      <Pagination
        count={pageNum}         // tổng số trang
        page={page}            // trang hiện tại
        onChange={onChangeFunction}  // hàm xử lý khi đổi trang
        color="primary"
      />
    </Stack>
  );
}
