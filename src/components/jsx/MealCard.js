import "../css/MealCard.css";

function MealCard(props) {
  const mealTagEl = props.tags.map((tag, i) => (
    <span className={`tag tag--${tag.toLowerCase()}`} key={i}>
      {tag}
    </span>
  ));

  return (
    <div className="meal">
      <img
        src={`img/meals/meal-${props.imgNum}.jpg`}
        className="meal-img"
        alt={props.title}
      />
      <div className="meal-content">
        <div className="meal-tags">{mealTagEl}</div>
        <p className="meal-title"></p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="flame"></ion-icon>
            <span>
              <strong>{props.calories}</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
            <span>
              NutriScore &reg;<strong>{props.nutriScore}</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="star-outline"></ion-icon>
            <span>
              <strong>{props.ratings}</strong> rating ({props.nratings})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCard;
