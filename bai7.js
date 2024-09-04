window.addEventListener("DOMContentLoaded", function () {
  function redirectToWebsite() {
    /** Lưu trữ dữ liệu user đã nhập vào userChoice */
    var userChoice = prompt(
      "Mời bạn chọn trang web muốn chuyển đến:\n1. VTI Academy\n2. w3schools\n3. Google\n4. Dantri"
    );

    /** Tạo biến url = rỗng */
    var url = "";

    /** Kiểm tra các điều kiện với userChoice */
    switch (userChoice) {
      /** Nếu user nhập vào số 1 */
      case "1":
        /** Gán url = url của vti academy */
        url = "https://vtiacademy.edu.vn/";
        /** Sử dụng break để không chạy xuống case 2,3,4 */
        break;
      /** Nếu user nhập vào số 2 */
      case "2":
        /** Gán url = url của w3 school */
        url = "https://www.w3schools.com/";
        /** Sử dụng break để không chạy xuống case 3,4 */
        break;
      /** Nếu user nhập vào số 3 */
      case "3":
        /** Gán url = url của google */
        url = "https://www.google.com/";
        /** Sử dụng break để không chạy xuống case 4 */
        break;
      /** Nếu user nhập vào số 4 */
      case "4":
        /** Gán url = url của dân trí */
        url = "https://www.dantri.com.vn/";
        /** Sử dụng break để không chạy xuống case default */
        break;
      /** Nếu user ko nhập các số 1,2,3,4 */
      default:
        alert("Lựa chọn không hợp lệ. Vui lòng chọn số từ 1 đến 4.");
        return;
    }

    /** Sau khi có được url => sử dụng window.location.href = giá trị url để di chuyển sang trang mới */
    window.location.href = url;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", redirectToWebsite);

  /** Bài 4 */

  /** Tìm ra nút button ở bên html bằng id */
  var btnStudent = document.getElementById("btnStudent");

  /** Thêm sự kiện click vào nút button đã tìm ra
   * sự kiện tên là "click",
   * function để thực thi khi người dùng ấn button là manageStudents
   */
  btnStudent.addEventListener("click", manageStudents);

  function manageStudents() {
    /** Lưu trữ số lượng học viên user nhập vào trong biến numberOfStudents */
    var numberOfStudents = prompt(
      "Mời bạn chọn số lượng học viên cần quản lý:"
    );
    /** Chuyển kiểu dữ liệu của numberOfStudents sang số vì giá trị mặc định nó là string */
    numberOfStudents = parseInt(numberOfStudents);

    /** Kiểm tra nếu như người dùng nhập vào một số ko hợp lệ ( nhập chữ hoặc nhập số <= 0)
     * => Mình in ra lỗi và không thực thi các code ở dưới bằng lệnh return;
     */
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
      alert("Vui lòng nhập một số hợp lệ.");
      return;
    }

    /** Tạo ra 1 mảng students để chứa các student khi người dùng nhập vào */
    var students = [];

    /** Cho vòng for chạy từ số 0 đến số lượng students mà user đã nhập ở đầu bài */
    for (var i = 0; i < numberOfStudents; i++) {
      /** Tạo biến studentName để lưu trữ tên của student mà người dùng vừa mới nhập */
      var studentName = prompt(`Nhập liệu học viên thứ ${i}`);

      /** Tạo một object để chứa thông tin student gồm id và name của nó. */
      var student = {
        id:
          i +
          1 /** i + 1 bởi vì mình đang cho i chạy từ 0 => id nó sẽ được + 1 */,
        name: studentName /** lưu name của student  */,
      };

      /** Thêm student vừa mới tạo vào mảng students có sẵn ở trên */
      students.push(student);
    }

    /** Gọi hàm displayStudents và truyền students vào hàm để thực thi việc hiển thị ra ngoài màn hình */
    displayStudents(students);
  }

  function displayStudents(students) {
    /** Lấy students sau khi đã được truyền từ hàm trên */

    /** Tạo biến tableContent để chứa nội dung mà mình cần hiển thị */
    var tableContent = "";

    /** Cho vòng for chạy từ 0 đến thằng student cuối cùng trong mảng students */
    for (var index = 0; index < students.length; index++) {
      /** Lấy chi tiết thông tin student qua vị trí index */
      var student = students[index];

      /** Tạo 1 biến string để chứa thẻ tr và td, trong đó td để hiển thị id và name của student */
      var string = `<tr>
               <td>${student.id}</td>
               <td>${student.name}</td>
             </tr>`;

      /** Cộng giá trị string ở trên vào tableContent để hiển thị ra một list các tr và td cần đưa ra màn hình
       */
      tableContent += string;
    }

    /** Khi kết thúc vòng for, ta sẽ được table như dưới dạng :
        * tableContent => `<tr>
               <td>1</td>
               <td>Huy</td>
             </tr><tr>
               <td>2</td>
               <td>Hung</td>
             </tr><tr>
               <td>3</td>
               <td>Tram</td>
             </tr>`
        */

    /** Hiển thị tableContent mà mình cần đầu ra màn hình bằng việc sử dụng innerHTML vào thẻ có sẵn trong HTML*/
    document.getElementById("studentTable").innerHTML = tableContent;
  }
});
