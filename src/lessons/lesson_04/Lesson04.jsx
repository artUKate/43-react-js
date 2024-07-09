import "./lesson04.css";

import { forceUsers } from "./data";
export default function Lesson04() {
  // console.log(forceUsers);
  return (
    <div className="lesson-container">
    <header className="lesson-header">
      <h3>Lesson 04</h3>
    </header>

      {/* итерируемся по массиву объектов и выводим данные по ключам */}
      {forceUsers.map((hero, index) => (
        // для обертки над итерируемой версткой указываем props key с 
        // уникальным значением. это технические данные, который просит react
        <div key={index} className={`card ${hero.isDark ? 'isDark' : 'isLight'}`}>
          <h4>{hero.name}</h4>
          <p>Age: {hero.age}</p>
          <img width={200} src={hero.image} alt={hero.name} />
          
          <p>
            Lightsaber colors:
            <div className="lightsaber-colors">
              {hero.lightsaberColors.map((color, idx) => (
                <span key={idx} style={{ backgroundColor: color }}></span>
              // 🔐 <div style={{ backgroundColor: color, height: "10px", width: "10px" }}></div>
            ))}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}