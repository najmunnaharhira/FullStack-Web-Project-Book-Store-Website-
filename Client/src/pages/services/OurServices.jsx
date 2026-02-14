import React from "react";

const placeholderIcon = "https://cdn-icons-png.flaticon.com/64/3143/3143637.png";
const serviceLists = [
  { id: 1, title: "Book Delivery", des: "We deliver your books promptly to your door", img: placeholderIcon },
  { id: 2, title: "Personalized Recommendations", des: "Get book suggestions tailored to your preferences", img: placeholderIcon },
  { id: 3, title: "Online Ordering", des: "Explore our catalog & order with ease using our Online Ordering", img: placeholderIcon },
  { id: 4, title: "Gift Cards", des: "Give the gift of reading with our Bookstore Gift Cards", img: placeholderIcon },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Bookstore Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in a love for literature, we curate unforgettable reading experiences and
              offer exceptional services, blending literary artistry with warm
              hospitality.
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200"
              >
                <img src={service.img} alt={service.title} className="mx-auto" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
