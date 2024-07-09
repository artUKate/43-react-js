import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson04 from './lessons/lesson_04/Lesson04';
// import Lesson01 from './lessons/lesson_01/Lesson01';
// import Lesson02 from './lessons/lesson_02/Lesson02';
// import Homework02 from './homeworks/Homework02';
// import MyForm from './components/myForm/MyForm';
// import Counter from './components/counter/Counter';
// import Homework04 from './homeworks/Homework04';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
       <App /> 
       {/* <Lesson01/> */}
       {/* <Lesson02/> */}
       {/* <Homework02/>  */}
       {/* <MyForm/> */}
       {/* <Counter/> */}
       {/* <Homework04/> */}
       <Lesson04/>
  </>
);



