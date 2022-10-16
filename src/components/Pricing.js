import "./Pricing.css";

function Pricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>

        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. That's $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>
                <strong>2 meals </strong>per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>

          <div className="plan-sign-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>
      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following
        </aside>
      </div>
    </section>
  );
}

export default Pricing;

// Prices include all applicable taxes. Users can cancel at any time.

// Starter: $399 per month

// - 1 meal per day
// - Order times are between 11am and 9pm
// - Delivery is free

// Complete: $649 per month

// - 2 meal2 per day
// - Order 24/7
// - Delivery is free
// - Get access to latest recipes
