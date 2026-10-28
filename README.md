# Website CV & Portfolio — Hồ Phạm Ái Thư

Website tĩnh sử dụng HTML, CSS và JavaScript thuần. Không cần cài framework.

## Cấu trúc thư mục

- `index.html`: nội dung website
- `style.css`: giao diện, màu sắc và responsive
- `script.js`: menu mobile, lọc dự án, hiệu ứng cuộn, chế độ sáng/tối
- `assets/`: nơi đặt ảnh đại diện hoặc các tài liệu muốn sử dụng

## 1. Xem website trên máy tính

Cách đơn giản:
1. Giải nén tệp ZIP.
2. Mở thư mục `ai_thu_cv_portfolio` bằng Visual Studio Code.
3. Mở `index.html` bằng trình duyệt.

Cách tiện hơn:
1. Cài tiện ích **Live Server** trong Visual Studio Code.
2. Nhấn chuột phải vào `index.html`.
3. Chọn **Open with Live Server**.

Website không cần máy chủ backend.

## 2. Thay ảnh đại diện

1. Đặt ảnh chân dung vào thư mục `assets`, đặt tên `avatar.jpg`.
2. Trong `index.html`, tìm dòng:
   `<!-- <img class="avatar-image" src="assets/avatar.jpg" alt="Ảnh đại diện Hồ Phạm Ái Thư"> -->`
3. Bỏ `<!--` ở đầu và `-->` ở cuối dòng đó.
4. Xóa hoặc ẩn khối `avatar-placeholder` để chỉ còn ảnh chân dung.
5. Lưu tệp và tải lại trang.

Nên dùng ảnh chân dung rõ nét, nền gọn gàng, định dạng JPG hoặc WebP.

## 3. Chỉnh sửa nội dung

- Tìm chữ muốn sửa trong `index.html`.
- Không nhập thẻ HTML như `<br>` vào nội dung hiển thị; hãy dùng các thẻ `<p>` hoặc `<span>` đã có.
- Email, LinkedIn và số điện thoại chưa được cung cấp nên website không tự tạo các thông tin này.
- Các mô tả dự án học tập đang ở mức khái quát. Hãy sửa theo đúng vai trò, tiến độ và kết quả thực tế trước khi gửi nhà tuyển dụng.

## 4. Đăng lên Netlify

Cách nhanh:
1. Mở https://app.netlify.com/drop
2. Đăng nhập/đăng ký Netlify nếu được yêu cầu.
3. Kéo thả thư mục website đã giải nén (thư mục có `index.html`, `style.css`, `script.js`) vào vùng tải lên.
4. Chờ Netlify triển khai xong và mở đường link được cấp.

Nếu Netlify yêu cầu tải thư mục dưới dạng ZIP, hãy nén nội dung website sao cho `index.html` nằm ngay ở cấp đầu tiên trong ZIP, không bị lồng trong nhiều thư mục.
Để đổi tên đường link, mở trang quản lý site trên Netlify và tìm phần Site configuration / Change site name (tên mục có thể thay đổi theo giao diện).

## 5. Trước khi công khai

- Bổ sung email chuyên nghiệp nếu muốn nhà tuyển dụng liên hệ.
- Xác nhận chính xác thông tin học vấn, GPA, thời gian học và tình trạng chứng chỉ.
- Thêm link LinkedIn/GitHub nếu đang sử dụng.
- Kiểm tra lại các liên kết Facebook và nội dung dự án.
- Không đưa số điện thoại, địa chỉ nhà hoặc thông tin cá nhân nhạy cảm lên web nếu không cần thiết.

## Ghi chú

Google Fonts cần kết nối internet để tải font. Website vẫn dùng font dự phòng nếu không có kết nối.


### Ảnh đại diện
Ảnh hồ sơ được lưu tại `assets/avatar.jpg`. Để thay ảnh, thay tệp này bằng ảnh mới và giữ nguyên tên tệp.
