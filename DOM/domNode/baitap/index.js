var product = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 },
];
var bodyTable = document.querySelector(".bodyTable");
product.forEach(function (value) {
    var sp = `
    <td>${value.id}</td>
    <td>${value.name}</td>
    <td>${value.price}</td>
    <td><input type="number" id="inputValue_${value.id}" value="1">
    <button type="button" style="width: 100%;" id="addProduct_${value.id}" onclick="addNew(${value.id})">Thêm vào giỏ hàng</button>
    </td>
    `;
    bodyTable.innerHTML += sp;
});
console.log(product[0].id);

var containerCard = document.querySelector(".cart");

function addNew(id) {
    var inputValue = document.getElementById(`inputValue_${id}`).value;
    if (+inputValue <= 0) inputValue = 1;
    var listProductAdd = localStorage.getItem("list-Product")
        ? JSON.parse(localStorage.getItem("list-Product"))
        : [];
    var test = listProductAdd.findIndex((product) => product.id === id);
    if (test !== -1) {
        listProductAdd[test].solg =
            parseInt(listProductAdd[test].solg) + parseInt(inputValue);
        listProductAdd[test].thanhtien =
            parseFloat(listProductAdd[test].thanhtien) +
            parseFloat(inputValue) * parseFloat(listProductAdd[test].price);
    } else {
        listProductAdd.push({
            id: id,
            name: product[id - 1].name,
            price: product[id - 1].price,
            solg: inputValue,
            thanhtien: inputValue * product[id - 1].price,
        });
    }

    localStorage.setItem("list-Product", JSON.stringify(listProductAdd));
    loadData();
}
function loadData() {
    var listProductAdd = localStorage.getItem("list-Product")
        ? JSON.parse(localStorage.getItem("list-Product"))
        : [];

    var tongtien = 0;
    var tongsolg = 0;
    if (listProductAdd.length == 0) {
        containerCard.innerHTML = "<h3>Không còn sản phẩm nào !</h3>";
        return;
    }
    containerCard.innerHTML = `<table>
            <thead>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th style="width: 20%;">Số lượng</th>
            <th>Thành tiền</th>
            <th style="width: 20%;">Xóa</th>
            </thead>
            <tbody class="table_cart_body">
            ${listProductAdd.map(function (value, index) {
                tongtien += parseFloat(value.thanhtien);
                tongsolg += parseFloat(value.solg);
                return `
                    <tr>
                        <td> ${index + 1}</td>
                        <td> ${value.name}</td>
                        <td> ${value.price}</td>
                        <td> <input type="number" value="${
                            value.solg
                        }" data-id="${value.id}"/></td>
                        <td> ${value.thanhtien}</td>
                    <td><button type="button" style="width: 100%;" id="deleteProduct_${
                        value.id
                    }" onclick="deleteProduct(${value.id})">Xóa</button></td>
                    </tr>
                    `;
            })}
            <tr>
            <td colspan="3">Tổng</td>
            <td> ${tongsolg}</td>
            <td colspan="2">${tongtien}</td>
            </tr>
            
            </tbody>
    </table>
    <hr/>
    <button onclick="updateCard()">Cập nhập giỏ hàng</button>
    <button onclick="deleteCard()">Xóa giỏ hàng</button>
    
    `;
}
function updateCard() {
    var confirmation = confirm(`Bạn có chắc chắn muốn cập nhập hay không ?`);
    if (confirmation) {
        var listProductAdd = localStorage.getItem("list-Product")
            ? JSON.parse(localStorage.getItem("list-Product"))
            : [];
        containerCard
            .querySelectorAll(".table_cart_body input")
            .forEach(function (item) {
                var inputValue = item.value;
                if (+inputValue <= 0) inputValue = 1;
                var id2 = parseInt(item.dataset.id);
                var test = listProductAdd.findIndex((x) => x.id === id2);
                if (test !== -1) {
                    listProductAdd[test].solg = parseInt(inputValue);
                    listProductAdd[test].thanhtien =
                        parseFloat(inputValue) *
                        parseFloat(listProductAdd[test].price);
                }
            });
        alert("Cập nhập thành công !");
        localStorage.setItem("list-Product", JSON.stringify(listProductAdd));
        loadData();
    }
}

function deleteProduct(id) {
    var confirmation = confirm(
        `Bạn có chắc chắn muốn xóa sản phẩm với id ${id}?`
    );
    if (confirmation) {
        var listProductAdd = localStorage.getItem("list-Product")
            ? JSON.parse(localStorage.getItem("list-Product"))
            : [];
        var indexToRemove = listProductAdd.findIndex((item) => item.id === id);

        if (indexToRemove !== -1) {
            listProductAdd.splice(indexToRemove, 1);
            localStorage.setItem(
                "list-Product",
                JSON.stringify(listProductAdd)
            );
            loadData();
            alert("Xóa thành công !");
        }
        if (listProductAdd.length == 0) {
            containerCard.innerHTML = "<h3>Không còn sản phẩm nào !</h3>";
        }
    }
}
function deleteCard() {
    var confirmation = confirm(`Bạn có chắc chắn muốn xóa giỏ hàng không ?`);
    if (confirmation) {
        localStorage.removeItem("list-Product");
        containerCard.innerHTML = "<h3>Không còn sản phẩm nào !</h3>";
        alert("Xóa thành công !");
    }
}
window.addEventListener("load", loadData());
