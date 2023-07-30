import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Kamal"}
          feedback={"You got good coding skills."}
        />

        <TestimonialCard
          name={"Nikhil"}
          feedback={
            "Keep going , You 've been doing exceptionally well!"
          }
        />

        <TestimonialCard
          name={"Anonymous"}
          feedback={"You seem very dedicated "}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;