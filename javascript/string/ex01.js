//  String là  tập hợp các ký tự

var fullname = "Phạm Sơn";
console.log(fullname);
// kiểm tra 1 biến có  phải chuỗi hay không
if (typeof fullname === "string") {
    console.log("ok");
}
// lưu ý trong tất cả các kiểu đữ liêu trừ null và undefined
// => js bọc object ở bên ngoài kiểu đữ liệu để chứa các phương thức thuộc tính xử lý
// mỗi kiểu đữ liệu trong js sẽ có 1 hàm tạo (constructor tương ứng)
// Chuỗi => String
// Sô => number
// logic => boolean
// mảng => array()
//  đối tượng =>object()

console.log(fullname.length);
console.log(String.prototype);
// at(index) hoặc charAt(index) =>trả về ký tự dựa vào index (index bắt đầu từu số)
console.log(fullname.at(2));
// charCodeAt(index) => trả về mã ASCII của ký tựu theo index
console.log(fullname.charCodeAt(2));
// concat() =>nối chuỗi (ít dùng)
console.log(fullname.concat(" ", "Phạm", "Sơn"));
// length => trả về độ đài của chuỗi
console.log(fullname.length);
// indexOf(x) => trả về index đầu tiên tìm dc chuỗi x trong chuỗi cha nếu không tìm dc trả về -1
console.log(fullname.indexOf("S"));
// lastIndexOf(x) => trả về index cuối cùng tìm dc chuỗi x trong chuỗi cha nếu không tìm dc trả về -1
console.log(fullname.lastIndexOf("S"));
// includes(x) =>Tìm chuỗi x trong chuỗi cha trả về true và false
console.log(fullname.includes("S"));
// slice(start,end) =>cắt chuỗi từ chuỗi cha đến end -1
console.log(fullname.slice(2, 5)); //cắt từ 2=>5
console.log(fullname.slice(2)); //cắt từ vị trí thứ 2
console.log(fullname.slice(-5)); //5 ký tự cuối chuỗi
// replace(x1,x2) thay  thế x1=>x2 chỉ thay cái đầu
console.log(fullname.replace("S", "p"));
// replaceAll(x1,x2) thay thế tất cả  x1 => x2
// startsWith(x1) tìm chuỗi x1 có bắt đầu trong chuỗi cha không
console.log(fullname.startsWith("P"));
// endsWith(x1) tìm chuỗi x1 có kết thúc trong chuỗi cha không
console.log(fullname.endsWith("S"));
// toUpperCase()=>chuyển thành chữ hoa
console.log(fullname.toUpperCase());
// toLowerCase()=>chuyển thành chữ thường
console.log(fullname.toLowerCase());
// trim() => xóa khoẳng trăng đầu và cuối chuỗi
console.log(fullname.trim());
// trimStart(),trimLeft=> xóa khỏng trắng đầu chuỗi
console.log(fullname.trimStart());
// trimEnd(),trimRight=> xóa khỏng trắng cuối chuỗi
// split()=>tách chuỗi thành mảng đự vào ký tự phân cách
console.log(fullname.split(" "));
// repeat()=> lặp lại chuỗi theo số lần nhât định
console.log("*".repeat(3));
// match() =>Cắt chuỗi dựa vào biểu thức chinh quy (regex)
var x = "Hello anh em F8, số điện thoại 0345465652";
var phone = x.match(/0\d{9}/g);
console.log(phone);
