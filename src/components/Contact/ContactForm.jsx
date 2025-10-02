import React from "react";
import { people1, people2, people3 } from "../../assets";

const ContactForm = () => {
  const People = [
    {
      id: 1,
      img: people1,
      name: "John Doe",
    },
    {
      id: 2,
      img: people2,
      name: "Wiliam Smith",
    },
    {
      id: 3,
      img: people3,
      name: "Emama Stone",
    },
  ];

  return (
    <section id="form_deatails" className="section-p1">
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We Love To Hear From You</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="TYour Message"
        ></textarea>
        <button className="normal" id="button">Submit</button>
      </form>

      <div className="people">
        {People.map((person) => (
          <div key={person.id}>
            <img src={person.img} alt="here an image" />
            <p>
              <span>{person.name}</span>
              <br /> Senior Marketing Manager
              <br /> Phone: +0001230007788
              <br /> Email: Concate@gmail.com
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
