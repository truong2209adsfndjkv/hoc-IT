document.getElementById('loadButton').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('postList');
            posts.forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title; // Chỉ hiển thị tiêu đề bài viết
                postList.appendChild(li); 
            });
        })
        .catch(error => {
            console.error('Lỗi khi tải bài viết:', error);
        });
});