var content =
    "Học lập trình không khó Học lập trình không khó Học lập trình không khó Học lập trình không khó";
var newContent = "";
var firstContent = "";
var copyContent = content;
var position = 0;
var runContent = setInterval(function () {
    position = content.indexOf(" ");
    console.log(position);
    if (position === -1) {
        position = content.length;
        // console.log(content);
    }
    newContent =
        firstContent +
        `<span> ${content.slice(0, position)} </span>` +
        content.slice(position);
    firstContent += content.slice(0, position + 1);
    content = content.slice(position).trim();
    console.log(content);
    if (content.length === 0) {
        content = copyContent;
        firstContent = "";
    }
    // document.write(newContent);
    document.getElementsByClassName("content")[0].innerHTML = newContent;
}, 200);
