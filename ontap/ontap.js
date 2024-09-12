var button = document.getElementById('clickText')
var header = document.getElementById('header')

button.addEventListener('click', function(){
    // thay doi van ban
    header.textContent='van ban da duoc thay doi'
})

// bai 2
   
document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử DOM
    const backgroundBox = document.getElementById('fullcolor');
    const changeBackgroundButton = document.getElementById('changeBackgroundButton');

    // Danh sách các màu nền để thay đổi
    const backgrounds = ['lightblue',];
    var currentBackgroundIndex = 0;

    // Thay đổi nền khi nút được nhấn
    changeBackgroundButton.addEventListener('click', () => {
        // Chọn nền tiếp theo trong danh sách
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        backgroundBox.style.backgroundColor = backgrounds[currentBackgroundIndex];
    });
});

// bai 4

// document.addEventListener ('DOMContentLoaded', function(){
//     const inputData = document.getElementById('inputdata');
//     const addData = document.getElementById('adddata');
//     const list = document.getElementById('list');
    
//     addData.addEventListener('click', function(){
//     const inputData = document.getElementById('inputdata').value;
//     console.log(inputData);
//     document.getElementById('list').innerHTML=`<li>${inputData}</li>`
//     })
//     var listData = [];
    
   
//     listData.push{
//         data:listData.value,
//     };

  
// });

