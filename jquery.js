var students = [];
var currentIndex = -1;

function renderTable() {
   /** Tạo biến tableContent để chứa nội dung mà mình cần hiển thị */
   var tableContent = ``;

   /** Cho vòng for chạy từ 0 đến thằng student cuối cùng trong mảng students */
   for (var i = 0; i < students.length; i++) {
      /** Lấy chi tiết thông tin student qua vị trí i */
      var student = students[i];

      /** Tạo 1 biến string để chứa thẻ tr và td, trong đó td để hiển thị i, name, age và 2 nút button của student */
      var string = `<tr>
                            <td>${i}</td>
                            <td>${student.name}</td>
                        
                            <td>${student.age}</td>
                            <td>${student.phone}</td>
                            <td>${student.password}</td>
                            <td>${student.confirmpassword}</td>
                            <td>
                                <button onclick="editStudent(${i})">Edit</button>
                                <button onclick="deleteStudent(${i})">Delete</button>
                              
                        </tr>`;
      /** Cộng giá trị string ở trên vào tableContent để hiển thị ra một list các tr và td cần đưa ra màn hình
       */
      tableContent += string;
   }

   /** Hiển thị tableContent mà mình cần đầu ra màn hình bằng việc sử dụng innerHTML vào thẻ có sẵn trong HTML*/
   $("#studentTable").html(tableContent);
}
/**
 *
 * $(selectors) => selectors: id, className, attribute tagName
 */

function addStudent() {
   /** Lấy ra giá trị name và age của 2 input */
   var name = $("#name").val(); /** document.getElementById("name").value */
   var age = $("#age").val();
   var phone = $("#phone").val();
   var confirmpassword = $("#confirmpassword").val();
   var password = $("#password").val();

   /** Kiểm tra name và age đã được user nhập hay chưa */
   if (name === "" || age === "" || phone ==="" || password ==="" || confirmpassword ==="") {
      /** nếu chưa nhập thì hiển thị lỗi */
      alert("Please fill in both name and age.");
      return;
   }else if (password !== confirmpassword) 
    {
           // Hiển thị thông báo lỗi
           alert('Mật khẩu không trùng khớp!');
           // Hoặc bạn có thể sử dụng một thư viện như jQuery để hiển thị thông báo lỗi một cách trực quan hơn
           return;
       } else {
           // Hai mật khẩu trùng khớp, bạn có thể thực hiện các hành động khác
           console.log('Mật khẩu hợp lệ!');
       }

   /** Tạo một object để chứa thông tin student khi đã nhập */
   var student = {
      name: name,
      age: age,
      phone: phone,
      password: password,
      confirmpassword: confirmpassword,
   };

   /**
    * So sánh:
    * Trường hợp 1: Khi currentIndex = -1 => Lúc này đang là add thêm 1 student mới
    * Trường hợp 2: Khi currentIndex mà khác -1  ( có nghĩa là 1, 2, 3,4, 5, 0 ,....) => Lúc này đang edit student
    */
   if (currentIndex === -1) {
      /** Thêm mới 1 student khi add */
      students.push(student);
   } else {
      /**
       *          0  1  2  3
       * array = [A, B, C, D] => thằng B chuyển thành th F
       * F => vứt thằng B thay bằng thằng F.
       *
       * cách 1 : array[1] = "F".
       *
       * cách 2 : array.splice(1, 1, "F");
       */
      /** Replace student đang edit với thông tin student mới */
      students[currentIndex] = student;

      /** Reset lại biến currentIndex = -1 vì biến này chỉ được dùng trong trường hợp edit */
      currentIndex = -1;
   }

   /** Sau khi đã lưu thông tin student thì mình sẽ xoá value của các ô input */
   $("#name").val("");
   $("#age").val("");
   $("#phone").val("")
   $("#password").val("")
   $("#confirmpassword").val("")

   /** GỌi hàm renderTable để hiển thị ra màn hình */
   renderTable();
}

function editStudent(index) {
   /** Nhận index khi mà user click vào  */
   /** Tìm student trong mảng theo index */
   var student = students[index];

   /** Sau khi đã tìm được student thì mình sẽ update value của các ô input */
   $("#name").val(
      student.name
   ); /** document.getElementById("name").value = student.name */
   $("#age").val(student.age);
   $("#phone").val(student.phone)
   $("#password").val(student.password)
   $("#confirmpassword").val(student.confirm)

   /** update biến currentIndex bằng với index mà user đã click cho trường hợp edit */
   currentIndex = index;
}

function deleteStudent(index) {
   /** Nhận index khi mà user click vào  */
   /** Xóa student trong mảng theo index */
   students.splice(index, 1);

   /** Gọi hàm renderTable để hiển thị ra màn hình với danh sách students mới sau khi đã xoá */
   renderTable();
}

/** Báo với trình duyệt chỉ chạy javascript khi đã load xong html */
$(document).ready(function () {
   /** thêm sự kiện click vào nút button với id là addButton */
   $("#addButton").on("click", function () {
      /** gọi hàm addStudent khi bấm nút */
      addStudent();
   });
});