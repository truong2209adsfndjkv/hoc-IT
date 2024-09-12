document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form reload trang

    // Lấy dữ liệu từ form
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Kiểm tra nếu các trường không trống
    if (!title || !body) {
        document.getElementById('message').textContent = 'Vui lòng nhập đầy đủ tiêu đề và nội dung!';
        document.getElementById('message').className = 'error';
        return;
    }

    // Dữ liệu bài viết mới
    const postData = {
        title: title,
        body: body,
        userId: 1 // Giả định userId là 1
    };

    // Gửi yêu cầu POST đến API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        // Hiển thị thông báo thành công
        document.getElementById('message').textContent = 'Bài viết đã được thêm thành công!';
        document.getElementById('message').className = 'success';

        // Xóa nội dung của form sau khi thành công
        document.getElementById('postForm').reset();
    })
    .catch(error => {
        // Hiển thị thông báo lỗi nếu có lỗi xảy ra
        document.getElementById('message').textContent = 'Có lỗi xảy ra khi thêm bài viết!';
        document.getElementById('message').className = 'error';
        console.error('Error:', error);
    });
});