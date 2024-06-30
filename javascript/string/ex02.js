var content =
    "Học lập trình không khó Học lập trình không khó Học lập trình không khó Học lập trình không khó";
var key = "học";
var position = content.toLowerCase().indexOf(key.toLowerCase());
var newContent = "";
while (position !== -1) {
    newContent +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + key.length)}</span>`;

    content = content.slice(position + key.length);
    console.log(position);
    position = content.toLowerCase().indexOf(key.toLowerCase());
}
newContent += content;

document.write(newContent);

//Tìm và Highlight từ đầu tiên sau đó lưu kết quả vào 1 biến (Cắt từ đầu đến hêt highlight)
