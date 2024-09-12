document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    // Lấy dữ liệu từ form
    const postId = document.getElementById('postId').value;

    // Kiểm tra nếu trường ID không trống
    if (!postId) {
        document.getElementById('message').textContent = 'Vui lòng nhập ID bài viết!';
        document.getElementById('message').className = 'error';
        return;
    }

    // Gửi yêu cầu DELETE đến API
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Hiển thị thông báo thành công
            document.getElementById('message').textContent = `Bài viết ID ${postId} đã được xóa thành công!`;
            document.getElementById('message').className = 'success';
        } else {
            // Hiển thị thông báo lỗi nếu không xóa được
            document.getElementById('message').textContent = 'Không thể xóa bài viết. Vui lòng kiểm tra lại ID!';
            document.getElementById('message').className = 'error';
        }
    })
    .catch(error => {
        // Hiển thị thông báo lỗi nếu có lỗi xảy ra
        document.getElementById('message').textContent = 'Có lỗi xảy ra khi xóa bài viết!';
        document.getElementById('message').className = 'error';
        console.error('Error:', error);
    });
});