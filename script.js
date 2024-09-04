// Prompt nhập
var userContent = prompt('Enter your name:');
var ageContent = prompt('Enter your age:');
var sexContent = prompt('Enter your sex:');
var address = prompt('Enter your address')
var studentClass = prompt('Enter your class')
// lấy element 
const contentDiv = document.getElementById('info');

// thay đổi nội dung của thẻ element mới lấy
contentDiv.innerHTML = `<strong>Tên tôi là: </strong><strong>${userContent}</strong><br>Tuổi: ${ageContent}<br>Giới tính: ${sexContent}<br>Địa chỉ: ${address}<br>Lớp: ${studentClass}`;

//hàm tính tổng
function sumNum() {
    var number1Input = document.getElementById('number1').value;
    var number2Input = document.getElementById('number2').value;
    var sum = parseInt(number1Input) + parseInt(number2Input);
    document.getElementById('sumNum').innerHTML = "Tổng 2 số là:  " + sum;
  }
//   bai3
function choice() {
    // Mảng chứa danh sách các trang web

    const trangWebs = [
      "vtiacademy.edu.vn",
      "www.w3schools.com",
      "google.com.vn",
      "dantri.vn"
    ];
    
    
    // Hiển thị prompt để người dùng nhập ID
    const id = prompt("Mời bạn chọn ID của trang web muốn truy cập:\n" +
      "1. VTI Academy\n" +
      "2. w3schools\n" +
      "3. google\n" +
      "4. dantri");
    
    // Kiểm tra xem ID hợp lệ hay không
    if (id >= 1 && id <= trangWebs.length) {
      // Chuyển hướng đến trang web tương ứng
      window.location.href = "https://" + trangWebs[id - 1];
    } else {
      // Hiển thị thông báo lỗi nếu ID không hợp lệ
      alert("ID không hợp lệ!");
    }}

    // bai 4

    function nhapHocLieu(){// Hàm để hiển thị danh sách học viên
       
    
        // Nhập số lượng học viên cần quản lý
        let numStudents = prompt("Nhập số lượng học viên cần quản lý:");
        let students = []; // Mảng để lưu trữ thông tin học viên
    
        // Nhập thông tin cho từng học viên
        for (let i = 0; i < numStudents; i++) {
          let name = prompt(`Nhập tên học viên thứ ${i+1}:`);
          students.push(name);
        }
    
        
         function displayStudents(students) {
            let output = "<tr><th>ID</th><th>Tên</th></tr>";
            for (let i = 0; i < students.length; i++) {
              output += `<tr><td>${i+1}</td><td>${students[i]}</td></tr>`;
            }
          //   output += "</table>"; tạo bên html thì ko tạo bên này
            document.getElementById("output").innerHTML = output;
          }

          // Hiển thị danh sách học viên
        displayStudents(students);
        }

