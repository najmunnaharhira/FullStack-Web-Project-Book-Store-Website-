import React from "react";
import bookDeliveryIcon from "../../assets/services/icon1.png";
import bookRecommendationIcon from "../../assets/services/icon2.png";
import giftCardIcon from "../../assets/services/icon4.png";
import onlineOrderingIcon from "../../assets/services/icon3.png";
import { Link } from "react-router-dom";

const serviceLists = [
  { id: 1, title: "Book Delivery", des: "We deliver your books promptly to your door", img: bookDeliveryIcon, link: "/shop" },
  { id: 2, title: "Personalized Recommendations", des: "Get book suggestions tailored to your preferences", img: bookRecommendationIcon, link: "/recommendations" },
  { id: 3, title: "Online Ordering", des: "Explore our catalog & order with ease using our Online Ordering", img: onlineOrderingIcon, link: "/shop" },
  { id: 4, title: "Gift Cards", des: "Give the gift of reading with our Bookstore Gift Cards", img: giftCardIcon, link: "/gift-cards" },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <h2 className="title text-4xl font-bold text-green-700 hover:text-green-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Our Bookstore Journey And Services
            </h2>
            <p className="subtitle text-2xl font-bold text-green-500 hover:text-chocolate-500 transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Our Story & Services
            </p>
            <p className="my-5 text-secondary text-lg font-semibold leading-[30px] text-green-700 hover:text-green-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Rooted in a profound love for literature, our bookstore is dedicated to curating
              unforgettable reading experiences. We offer exceptional services that blend literary
              artistry with warm hospitality, ensuring that every visit is a journey into the
              enchanting world of books.
            </p>
            <p className="my-5 text-secondary leading-[30px] text-chocolate-600 hover:text-chocolate-800 transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Our carefully selected collection spans genres and eras, from timeless classics to
              contemporary bestsellers. Our knowledgeable staff is always on hand to provide
              personalized recommendations, helping you discover new favorites and hidden gems.
            </p>
            <p className="my-5 text-secondary leading-[30px] text-chocolate-600 hover:text-chocolate-800 transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Whether you are looking for the perfect gift, a relaxing read, or educational resources,
              our bookstore is a haven for all book lovers. We also host a variety of events, including
              author signings, book clubs, and reading sessions, fostering a vibrant literary community.
            </p>
            <Link to="/shop" className="block mt-8">
              <button className="bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-green-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {service.link ? (
                  <Link to={service.link} className="block">
                    <img src={service.img} alt={service.title} className="mx-auto" />
                    <h5 className="pt-3 font-semibold text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">{service.title}</h5>
                    <p className="text-black text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg">{service.des}</p>
                  </Link>
                ) : (
                  <>
                    <img src={service.img} alt={service.title} className="mx-auto" />
                    <h5 className="pt-3 font-semibold text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">{service.title}</h5>
                    <p className="text-black text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg">{service.des}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
