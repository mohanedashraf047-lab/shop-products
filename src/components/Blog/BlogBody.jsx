import React from "react";
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7 } from "../../assets";
import { Link } from "react-router-dom";

const BlogBody = () => {
  const Blogbox = [
    {
      id:1, img: blog1,
    },
    {
      id:2, img: blog2,
    },
    {
      id:3, img: blog3,
    },
    {
      id:4, img: blog4,
    },
    {
      id:5, img: blog5,
    },
    {
      id:6, img: blog6,
    },
    {
      id:7, img: blog7,
    },
  ];

  return (
    <div>
      <section id="blog">
        {Blogbox.map((item) => (
          <div className="blog-box" key={item.id}>
            <div className="blog-imag">
              <img src={item.img} alt="" />
            </div>
            <div className="blog-details">
              <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                culpa fuga laborum velit aut, ut, hic ducimus nesciunt
                temporibus commodi placeat earum, doloremque deserunt. Aliquam
                animi explicabo cupiditate optio! Maiores.
              </p>
              <Link to='/blog'>CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
          </div>
        ))}

        {/* <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b1.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b2.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b3.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b3.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b4.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b5.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b6.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div class="blog-box">
          <div class="blog-imag">
            <img src="img/blog/b7.jpg" alt="" />
          </div>

          <div class="blog-details">
            <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus
              commodi placeat earum, doloremque deserunt. Aliquam animi
              explicabo cupiditate optio! Maiores.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div> */}
      </section>
    </div>
  );
};

export default BlogBody;
