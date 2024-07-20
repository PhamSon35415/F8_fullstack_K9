// Mô hình hóa tài liệu HTML thanhd các object để đễ dàng chỉnh sửa html
// Sử dụng các object để thay đổi html
// các loại dom
/**
 -Dom Document
 - DOM Element
 - DOM Html
 - DOM CSS
 - DOM Event
 - DOM Event Listener
 - DOM Node, NoteList
 - DOM Navigation
 - Bổ sung :Web Component, custom Element,Shadow DOM
 */
// console.log(document);
//  - DOM Element: thao tác dựa vào các thẻ html có sẵn để trả về object (element khác)

var title = document.getElementById("title");
// =>chỉ trả về 1 phần tử đầu tiên

var title = document.getElementsByClassName("title");
// => trả về 1 danh sách các element thỏa mãn điều kiện

var title = document.getElementsByTagName("h2");
// => trả về 1 danh sách các element thỏa mãn điều kiện

var title = document.querySelector(".title");
// => trả về 1 phần tử đầu tiên thỏa mãn điều kiện

var title = document.querySelectorAll(".title");
// => trả về 1 danh sách các element thỏa mãn điều kiện
console.log(title);

// trường hợp đặc biệt
console.log(document.head);
console.log(document.body);
document.title = "Phạm Sơn";
console.log((document.login.email.placeholder = "Phạm Sơn"));
