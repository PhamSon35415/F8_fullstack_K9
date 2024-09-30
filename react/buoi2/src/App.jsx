import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
// Ban đầu khi khai báo count =0
// Khi click vào nút + thì count có tăng lên 1 đơn vị nhưng giao điện không đỏi đo
// funcition app dã dc run từ trước rồi
// => Giải pháp có cách nào đó để ép  funciton app dc gọi lại
// usertate trả về cho mình 2 phần tử
// 1. state
// 2. function
// => state là 1 đối tượng có thể lưu trữ dữ liệu tạm thời
// => function là 1 hàm có thể thực hiện các hành động cập nhập lại giá trị cho biế n 1

function App() {
    const [count, setCount] = useState(0);
    const onChangeCount = () => {
        setCount(count + 1);
        console.log(count);
    };
    useEffect(() => {
        console.log("App đã được chạy: ", count);
    }, []);

    return (
        <>
            <span> Count: {count}</span>
            {console.log("test")}
            <button onClick={onChangeCount}>+</button>
            <button>-</button>
        </>
    );
}

export default App;
