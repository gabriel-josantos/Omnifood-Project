import "../css/Featured.css";

function Featured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
          <img
            src="img/logos/business-insider.png"
            alt="buniness insider logo"
          />
          <img
            src="img/logos/the-new-york-times.png"
            alt="The new york times logo"
          />
          <img src="img/logos/forbes.png" alt="Forbes logo" />
          <img src="img/logos/usa-today.png" alt="Usa Today logo" />
        </div>
      </div>
    </section>
  );
}

export default Featured;
