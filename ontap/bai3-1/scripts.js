document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    // Lấy dữ liệu từ form
    const postId = document.getElementById('postId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Kiểm tra nếu các trường không trống
    if (!postId || !title || !body) {
        document.getElementById('message').textContent = 'Vui lòng nhập đầy đủ ID, tiêu đề và nội dung!';
        document.getElementById('message').className = 'error';
        return;
    }

    // Dữ liệu bài viết cập nhật
    const postData = {
        title: title,
        body: body,
        userId: 1 // Giả định userId là 1
    };

    // Gửi yêu cầu PUT đến API
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        // Hiển thị thông báo thành công
        document.getElementById('message').textContent = `Bài viết ID ${postId} đã được cập nhật thành công!`;
        document.getElementById('message').className = 'success';

        // Xóa nội dung của form sau khi thành công
        document.getElementById('updateForm').reset();
    })
    .catch(error => {
        // Hiển thị thông báo lỗi nếu có lỗi xảy ra
        document.getElementById('message').textContent = 'Có lỗi xảy ra khi cập nhật bài viết!';
        document.getElementById('message').className = 'error';
        console.error('Error:', error);
    });
});