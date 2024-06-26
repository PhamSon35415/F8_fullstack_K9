// câu lệnh rẽ nhánh
// 1 if else

/*
// if(điều kiện){
khối lệnh dúng}
else{
    khối lệnh sai
}
    1.3 câu lệnh if nhiều nhánh
    if(dieukien2){}
 */
// 2 Switch case
var salary = 6000000;
var income, tax;
if (salary > 0) {
    if (salary <= 5000000) {
        tax = 0;
    } else if (salary > 5000000 && salary < 10000000) {
        tax = 0.03;
    } else if (salary >= 15000000) {
        tax = 0.05;
    }
}
income = salary - salary * tax;

console.log(income);

var saleRate = 5;
var salePrice = 1000000;
//x-(5*x)/100 =1000000
// x(1-5/100)=1000000
