// импортируем стили из соседнего файла
import './lesson01.css';

export default function Lesson01() {
  // описание всего приложения в глобальном объекте document
  // это и есть DOM (Document Object Model)
  // console.dir(document);

  // создаем переменную со значением в теле функции до return
  const heading = 'Урок 01';
  const classContainer = 'lesson-container';

  function formatName(user) {
    return `Имя: ${user.name}, фамилия: ${user.lastName} 🕵️`
  }

  const user = {
    name: 'John',
    lastName: 'Doe'
  };

  // отображение на странице будет зависеть от значения в этой переменной
  const isLogin = false

  return (
    <div className={classContainer}>
      <h4>{heading}</h4>
      <h5>Особенности компонента:</h5>
      <ul>
        <li>Имеет расширение JSX</li>
        <li>Называется с большой буквы</li>
        <li>Компонент это функция</li>
        <li>Возвращает верстку</li>
        <li>Использует import / export</li>
        <li>Не отобразится на странице, если не импортирован</li>
      </ul>
      <h5>Пример работы с динамическими данными:</h5>
      <span>{formatName(user)}</span>
      <h5>Пример условного отображения c тернарным оператором:</h5>
      <span>Пользователь {isLogin ? 'в данный момент' : 'совсем не'} авторизован</span>

    </div>
  );
}

