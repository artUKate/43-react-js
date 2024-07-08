import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyForm from './components/myForm/MyForm';
import App from './app/App';
import Lesson01 from './lessons/lesson_01/Lesson01';
// import Lesson02 from './lessons/lesson_02/Lesson02';
import Homework02 from './homeworks/Homework02';
import MyForm from './components/myForm/MyForm';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
       <App />
       <Lesson01/>
     <Homework02/>
       {/* <Lesson02/> */}
       <MyForm/>
  </>
);



