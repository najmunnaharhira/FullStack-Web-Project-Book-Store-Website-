import { Footer } from "flowbite-react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

const FooterMain = () => {
  const footerLinks = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Our Services", path: "/services" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  const handleGoogleMapRedirect = () => {
    window.location.href = "https://maps.google.com/?q=Gyan+Kosh+Library+Chittagong";
  };

  return (
    <Footer bgDark className="bg-gradient-to-r from-pink-300 to-pink-600 text-pink-900">
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              {footerLinks.map((item, index) => (
                <Footer.Link key={index} href={item.path}>
                  {item.link}
                </Footer.Link>
              ))}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link onClick={handleGoogleMapRedirect} style={{ cursor: 'pointer' }}>
                Visit Us: 2nd Floor, Bichitra Library, 29, Katalgonj Road, Chattogram
              </Footer.Link>
              <Footer.Link href="mailto:nazmunnaharhira6@gmail.com">
                Send us an email: nazmunnaharhira6@gmail.com
              </Footer.Link>
              <Footer.Link href="https://www.gyankoshlibrary.com">
                Home
              </Footer.Link>
              <div className="mt-6">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.522244335033!2d91.79826097574243!3d22.366818134726373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89926f6ed3d%3A0x19c1aee509a07f02!2sBichitra%20Library!5e0!3m2!1sen!2sbd!4v1629980556323!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">Google Live Location</h2>
                <p className="mt-2">
                  <a href="https://maps.google.com/?q=Gyan+Kosh+Library+Chittagong" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Find us on Google Maps</a>
                </p>
              </div>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Corporate Sales" />
            <Footer.LinkGroup col>
              <Footer.Link href="mailto:najmunnaharhira10@gmail.com">
                To be a seller! Email Us: najmunnaharhira10@gmail.com
              </Footer.Link>
              <Footer.Link href="https://wa.me/8801708166238">
                Corporate Sales Only: 01917218773 (WhatsApp Message)
              </Footer.Link>
              <Footer.Link href="mailto:hiranajmunnahar07@gmail.com">
                Retailer Only: hiranajmunnahar07@gmail.com
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Address" />
            <Footer.LinkGroup col>
              <Footer.Link href="mailto:gyankoshlibrary405@gmail.com">
                Email Us: gyankoshlibrary405@gmail.com
              </Footer.Link>
              <Footer.Link>
                Address: 2nd Floor, Bichitra Library, 29, Katalgonj Road, Chattogram
              </Footer.Link>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start">
                <Footer.Icon
                  href="https://www.facebook.com/najmunnaharhira360"
                  icon={BsFacebook}
                />
                <Footer.Icon
                  href="https://www.instagram.com/najmunnaharhira360"
                  icon={BsInstagram}
                />
                <Footer.Icon
                  href="https://github.com/najmunnaharhira"
                  icon={BsGithub}
                />
                <Footer.Icon
                  href="https://api.whatsapp.com/send?phone=8801917218773"
                  icon={BsWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-white px-4 py-6 sm:flex sm:items-center sm:justify-between hover:bg-blue-100 transition duration-300 ease-in-out">
          <div className="text-gray-700 flex items-center space-x-2 cursor-pointer">
            <AiOutlineMail
              className="text-pink-500 hover:text-blue-700 transition duration-300 ease-in-out"
              onClick={() => window.location.href = "mailto:nazmunnaharhira6@gmail.com"}
            />
            <p className="text-sm">gyankoshlibrary405@gmail.com</p>
          </div>
          <div className="text-gray-700 flex items-center space-x-2 cursor-pointer">
            <AiOutlinePhone
              className="text-pink-500 hover:text-blue-700 transition duration-300 ease-in-out"
              onClick={() => window.location.href = "tel:+8801917218773"}
            />
            <p className="text-sm">+8801917218773</p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;
