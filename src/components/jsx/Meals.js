import "../css/Meals.css";
import { mealCategories } from "../../helpers/config";

import MealCard from "./MealCard";

function Meals() {
  const listItems = mealCategories.map((cat) => (
    <li key={cat} className="list-item">
      <ion-icon class="list-icon" name="checkmark"></ion-icon>
      <span>{cat}</span>
    </li>
  ));

  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        <MealCard
          imgNum="1"
          title="Japanese Gyozas"
          tags={["Vegetarian"]}
          calories="650"
          nutriScore="76"
          rating="4.9"
          nratings="550"
        />
        <MealCard
          imgNum="2"
          title="Avocado Salad"
          tags={["Vegan", "Paleo"]}
          calories="400"
          nutriScore="92"
          rating="4.8"
          nratings="441"
        />
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet</h3>
          <ul className="list">{listItems}</ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
