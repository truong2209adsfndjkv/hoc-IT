document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi biểu mẫu mặc định

    const input = document.getElementById('todoInput');
    const inputValue = input.value; 

    if (inputValue === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    // Tạo một phần tử <li> mới
    const li = document.createElement('li');
    li.textContent = inputValue;

    // Tạo nút xóa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Xóa';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Thêm nút xóa vào <li>
    li.appendChild(deleteBtn);

    // Thêm <li> vào danh sách <ul>
    document.getElementById('todoList').appendChild(li);

    // Xóa nội dung trong ô input sau khi thêm công việc
    input.value = "";
});
