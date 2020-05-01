import React from "react";
import "./page-services.css";
import Img1 from "../../Resources/img/webdesign.png";
import Img2 from "../../Resources/img/web-dev_2.png";
import Img3 from "../../Resources/img/web-identity_2.png";
import Img4 from "../../Resources/img/e_commerce.jpg";
import Img5 from "../../Resources/img/seo_2.png";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="container1">
        <img src={Img1} alt="" />
        <div>
          <h2>Creative web Design Services</h2>
          <h3>
            Our web design services can help rediscover your business’s image in
            the Internet marketplace. The blending of style and technology we
            offer in conjunction with our expertise enables your business to
            succeed on the Web.
          </h3>
          <h3>
            Our web design services will greatly enhance your business’s
            presence on the Internet. Our brandtenders mix a potent combination
            of brand strategy with a generous splash of creative juices and
            blend in the latest trends in Website UX and UI design and
            programming as a chaser. Since 1998, Lounge Lizard has designed and
            built over 600 Websites from e-commerce, b2c, b2b, non-profit, to
            social networks. We even create custom web applications.
          </h3>
        </div>
      </div>
      {/* ====== */}
      <div className="container2">
        <img src={Img2} alt="" />
        <div>
          <h2>Web Development</h2>
          <h3>
            utilizes web development technologies that are both proven and
            practical. With the options available in the market today, we can
            help you determine what is best for your needs. Our mission at
            MAXBURST is to make the web development process easier for you: we
            help our clients choose the right tools for hosting, ecommerce,
            content management and marketing.
          </h3>
          <h3>
            We provide website development services that are on the cutting edge
            of today’s technologies. Our Web developers are versed in all Web
            technologies such as WordPress, Drupal, Magento, Shopify. We even
            custom develop websites and web applications in Python Django,
            NodeJS, Ruby on Rails, and .NET. Our technical wizards mix a potent
            combination of nerd learning, geek fest participation, Spock-like
            technical brainstorm sessions, and endless hours watching online
            tech conferences and listening to propeller head podcasts. Are these
            guys geeks? You bet they are! Since 1998, Lounge Lizard has enjoyed
            coding over 600 Websites from e-commerce, b2c, b2b, non-profit, to
            social networks. And yes, we even used to code in Perl back in the
            beginning days of the Internet.
          </h3>
        </div>
      </div>
      {/* ====== */}
      <div className="container3">
        <img src={Img3} alt="" />
        <div>
          <h2>Company Identity </h2>
          <h3>
            MAXBURST understands your company identity impacts your bottom line.
            A positive company and product identity enhances your sales and your
            entire marketing communications plan. A strong company identity can
            enhance, create, and project an image that will help you sell your
            product or service.
          </h3>
          <h3>
            We strive to make your companies identity design exactly what you
            are looking for. A company’s corporate identity design is not only
            its personality, but the companies reason of being, spirit and soul.
            The image reflected by the “company’s personality” will make the
            company identifiable and different from the rest.
          </h3>
        </div>
      </div>
      {/* ====== */}
      <div className="container4_4">
        <img src={Img4} alt="" />
        <div>
          <h2>E-Commerce Website</h2>
          <h3>
            Your website is more than a brochure. Your website is meant to
            inspire action. Lounge Lizard websites give the user a clear pathway
            to this action (the sale). Useful information is easy-to-read and
            compelling, while strong calls to action push them through to the
            next step of the buyer’s journey. With clean and intuitive UI/UX
            design, mobile compatibility and fast page load speeds, you’ll see
            more completed purchases, higher average order value and improved
            ROI for your online store with our e-commerce website development
            experience.
          </h3>
        </div>
      </div>
      {/* ======== */}
      <div className="container5">
        <img src={Img5} alt="" />
        <div>
          <h2>SEO / SEM</h2>
          <h3>
            Today’s consumer puts a lot of trust in search engines to find what
            they need. Google receives 63,000 searches per second. Those
            searches involve finding products, reviewing brands, and looking up
            business locations. And when a brand appears in the first page of
            search results, it earns trust from consumers.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section2;
