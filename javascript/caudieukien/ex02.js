//switch case
// so sánh ==
var action = "add";
switch (action) {
    case "insert":
    case "create":
    case "add":
        console.log("create a new file");
        break;
    case "Update":
    case "edit":
        console.log("update");
        break;
    case "delete":
    case "remove":
    case "destroy":
        console.log("delete");
        break;
    default:
        console.log("Danh sach");
        break;
}
if (action == "insert" || action == "create" || action == "add") {
    console.log("create a new file");
} else if (action == "Update" || action == "edit") {
    console.log("update");
} else if (action == "delete" || action == "remove" || action == "destroy") {
    console.log("delete");
} else {
    console.log("Danh sach");
}
