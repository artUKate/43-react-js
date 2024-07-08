import { useState } from "react";
import './counter.css'
export default function Counter() {
  // let count = 0

  // const handlePlus = () => {
  //   count++
  //   console.log(count);
  // }

  // мы взываем функцию useState()
  // передаем в скобках начальное значение для переменной
  // в ответ мы получаем массив из двух элементов
  // первый - сама волшебная переменная, вызывающая обновление компонентна при изменении
  // второй - функция, перезаписывающая значение этой переменной
  // изменять переменную мы будем только с помощью этой функции

  // в ответ на вызов функции useState() с переданным начальным значением для переменной приходит массив из двух элементов: переменная с состоянием с этим начальным значением и функция ее изменяющая

  // const state = useState(0);
  // const state1 = useState("students");
  // const state2 = useState([1, 2, 3]);

  // // вот что нам пришло в ответ:

  // console.log(state);
  // console.log(state1);
  // console.log(state2);

  // // так мы забрали значения в переменную
  // let arr = state2[0];
  // let setArr = state2[1];

  // console.log(arr);
  // console.log(setArr);

  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  const handleMinus = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="lesson-container">
      <h4>Counter</h4>
      <div>
        <button onClick={handleMinus}>-</button>
        <span className='counterValue'>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        Мы не можем хранить изменяемые данные в react в классических переменных, потому что мы не
        будем видеть их изменения на странице: компонент не будет обновляться 😢
      </p>
      <p>
        Мне нужна 'хитрая' переменная, при изменении которой будет происходить обновление компонента
      </p>
      <p>В каких же каких случая происходит обновление данных? 🧐</p>
      <ol>
        <li>Изменения состояния (state)</li>
        <li>Изменение props</li>
      </ol>
      <p>
        Состояние или state - это особая переменная с данными в react изменение которой вызывает
        обновление компонента
      </p>
      <p>
        Для создания состояния мы используем встроенную в react функцию useState(). Такие внутренние
        стандартные функции называется хуками 🪝 Они решает разные задачи, но это всегда самые
        полезные и часто встречающиеся задачи. Например, хранение изменяемых данных
      </p>
    </div>
  );
}