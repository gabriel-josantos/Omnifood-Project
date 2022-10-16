import "./Testimonials.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Testimonials() {
  const galleryFigs = arr.map((num) => (
    <figure key={num} className="gallery-item">
      <img
        src={`img/gallery/gallery-${num}.jpg`}
        alt="Photo of beautifully arranged food"
      />
    </figure>
  ));

  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonial-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src="img/customers/dave.jpg"
              alt="Photo of customer Dave Bryson"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src="img/customers/ben.jpg"
              alt="Photo of customer Ben Hadley"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash;Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src="img/customers/steve.jpg"
              alt="Photo of customer Steve Miller"
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash;Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              src="img/customers/hannah.jpg"
              alt="Photo of customer Hannah
            Smith"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">{galleryFigs}</div>
    </section>
  );
}

export default Testimonials;
