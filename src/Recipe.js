import './App.css';

function Recipe({image, label, calories, ingredients}) {
      return (
        <div className="wrapper">
          <div className="menu">
            <div className="single_menu">
              <div className="menu_image">
                <img src={image} alt="img"/>
              </div>
              <div className="menu_content">
                <h4>{label} <span>{calories.toFixed()} kcal</span></h4>
                <ul>
                  {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Recipe;