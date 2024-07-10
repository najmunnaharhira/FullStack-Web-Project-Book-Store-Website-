import React, { useState } from "react";
import emailjs from "emailjs-com";

const About = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [affiliateForm, setAffiliateForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

  const [membershipForm, setMembershipForm] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'basic'
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleAffiliateChange = (e) => {
    const { name, value } = e.target;
    setAffiliateForm({ ...affiliateForm, [name]: value });
  };

  const handleMembershipChange = (e) => {
    const { name, value } = e.target;
    setMembershipForm({ ...membershipForm, [name]: value });
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Form submitted:', result.text);
      }, (error) => {
        console.log('Form submission error:', error.text);
      });
  };

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    // Handle membership form submission
    console.log('Membership form submitted:', membershipForm);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback form submission
    console.log('Feedback submitted:', feedback);
  };
  const handleAffiliateSubmit = (e) => {
    e.preventDefault();
    // Handle affiliate form submission
    console.log('Affiliate form submitted:', affiliateForm);
  };
  const [faqs] = useState([
    {
      question: 'What are the library hours?',
      answer: 'Our library is open from 9 AM to 11 PM, Saturday to Thursday.'
    },
    {
      question: 'How can I become a member?',
      answer: 'You can become a member by filling out the membership form available at our library or on our website.'
    },
    {
      question: 'Can I reserve books online?',
      answer: 'Yes, you can reserve books online through our library portal.'
    },
    {
      question: 'What are the membership fees?',
      answer: 'The membership fees vary based on the plan you choose. Please visit our membership page for more details.'
    },
    {
      question: 'How can I donate books to the library?',
      answer: 'You can donate books by visiting our library and filling out a donation form.'
    }
  ]);

  const openWhatsAppChat = () => {
    window.open('https://api.whatsapp.com/send?phone=01917218773', '_blank');
  };

  return (
    <div className="mt-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.4c102159742cfa4156cd1c126614a663?rik=yVnG3DCi9TVTiw&pid=ImgRaw&r=0)' }}>
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201ZM699.5 0h201v201h-201ZM499.5 400h201v201h-201ZM-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600 hover:text-red-800 transition-colors duration-300">About Us</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl hover:text-yellow-600 transition-colors duration-300">Gyan Kosh Library</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <span className="text-red-500 hover:text-red-700 transition-colors duration-300">Welcome</span> to <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Gyan Kosh Library</span>, your ultimate destination for a vast collection of books and literary resources. Located in the heart of Katalgonj, Chittagong, we pride ourselves on providing an enriching environment for readers of all ages and interests.
              </p> */}

<p className="text-base font-semibold leading-7 text-indigo-600 hover:text-red-800 transition-colors duration-300">About Us</p>
<h1 className="mt-2 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl hover:text-yellow-600 transition-colors duration-300">Gyan Kosh Library</h1>
<p className="mt-6 text-xl leading-8 text-gray-700">
  <span className="text-red-500 hover:text-red-700 transition-colors duration-300">Welcome</span> to <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Gyan Kosh Library</span>, your ultimate destination for a vast collection of books and literary resources. Located in the heart of Katalgonj, Chittagong, we pride ourselves on providing an enriching environment for readers of all ages and interests.
</p>




            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            src="https://i.pinimg.com/originals/e0/a9/58/e0a958c14a305ca3c07864b8eb39d9ba.jpg"
            alt="Gyan Kosh Library"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-green-700 lg:max-w-lg">
              <p>
                At <span className="text-green-500 hover:text-blue-700 transition-colors duration-300">Gyan Kosh Library</span>, we believe that books are the windows to the world, providing knowledge, inspiration, and endless adventures. Our extensive catalog includes fiction, non-fiction, academic texts, and rare collections, catering to the diverse interests of our patrons.
              </p>
              <p className="mt-6">
                Our mission is to foster a love for reading and lifelong learning in our community. We offer a range of services including book rentals, community reading programs, author events, and more. Whether you are a student, a professional, or a leisure reader, <span className="text-purple-500 hover:text-purple-700 transition-colors duration-300">Gyan Kosh Library</span> has something for you.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Visit Us</h2>
              <p className="mt-6">
                We invite you to visit our library in Katalgonj, Chittagong, and immerse yourself in the serene atmosphere perfect for reading and research. Our friendly staff is always here to assist you in finding the right book or navigating our services.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <p className="mt-6">
                For more information or to visit us, please find us at:
              </p>
              <p>
                <strong>Address:</strong> 2nd Floor, Bichitra Library, 29, Katalgonj ২নং রোড, Chattogram<br />
                <strong>Phone:</strong> <a href="tel:+8801917218773" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">+880 1917-218773</a><br />
                <strong>Email:</strong> info@gyankoshlibrary.com
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">FAQs</h2>
            <ul className="mt-6 space-y-4">
              {faqs.map((faq, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-700">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 py-12 bg-white sm:mt-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 font-semibold text-indigo-600 uppercase">Get in Touch</p>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Let us talk about your project</h2>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-12 sm:flex sm:justify-center">
            <div className="max-w-lg w-full">
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="Full Name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="mt-4 max-w-lg w-full">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 mt-2"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="mt-4 max-w-lg w-full">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="Your Message"
                onChange={handleChange}
                value={form.message}
              />
            </div>
            <div className="mt-6 max-w-lg w-full sm:flex sm:justify-center">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 font-semibold text-indigo-600 uppercase">Feedback</p>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">We would Love to Hear From You</h2>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Your feedback helps us improve our services. Let us know what you think or any suggestions you have for us.
            </p>
          </div>
          <form onSubmit={handleFeedbackSubmit} className="mt-12 sm:flex sm:justify-center">
            <div className="max-w-lg w-full">
              <label htmlFor="feedback" className="sr-only">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows={4}
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="Your Feedback"
                onChange={handleFeedbackChange}
                value={feedback}
              />
            </div>
            <div className="mt-6 max-w-lg w-full sm:flex sm:justify-center">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-4 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Membership</h2>
            <p className="mt-6 text-base leading-7 text-gray-700">Join Gyan Kosh Library today and enjoy access to our vast collection of books and resources.</p>
            <form onSubmit={handleMembershipSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <input type="text" id="name" name="name" value={membershipForm.name} onChange={handleMembershipChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <input type="email" id="email" name="email" value={membershipForm.email} onChange={handleMembershipChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <input type="tel" id="phone" name="phone" value={membershipForm.phone} onChange={handleMembershipChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="plan" className="block text-sm font-medium leading-6 text-gray-900">Plan</label>
                <select id="plan" name="plan" value={membershipForm.plan} onChange={handleMembershipChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </form>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-5 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Form</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </form>
          </div>
        </div>
        <div className="mt-8 py-12 bg-white sm:mt-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 font-semibold text-indigo-600 uppercase">Join Our Affiliate Program</p>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Partner with Us and Earn Rewards</h2>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Become an affiliate partner and promote our library services. Earn commissions for every successful referral you bring in.
            </p>
          </div>
          <form onSubmit={handleAffiliateSubmit} className="mt-12 sm:flex sm:justify-center">
            <div className="max-w-lg w-full">
              <label htmlFor="affiliate-name" className="sr-only">Full Name</label>
              <input
                id="affiliate-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="Full Name"
                onChange={handleAffiliateChange}
                value={affiliateForm.name}
              />
            </div>
            <div className="mt-4 max-w-lg w-full">
              <label htmlFor="affiliate-email" className="sr-only">Email</label>
              <input
                id="affiliate-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 mt-2"
                placeholder="Email"
                onChange={handleAffiliateChange}
                value={affiliateForm.email}
              />
            </div>
            <div className="mt-4 max-w-lg w-full">
              <label htmlFor="affiliate-phone" className="sr-only">Phone</label>
              <input
                id="affiliate-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 mt-2"
                placeholder="Phone"
                onChange={handleAffiliateChange}
                value={affiliateForm.phone}
              />
            </div>
            <div className="mt-4 max-w-lg w-full">
              <label htmlFor="affiliate-website" className="sr-only">Website</label>
              <input
                id="affiliate-website"
                name="website"
                type="url"
                autoComplete="url"
                required
                className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 mt-2"
                placeholder="Website"
                onChange={handleAffiliateChange}
                value={affiliateForm.website}
              />
            </div>
            <div className="mt-6 max-w-lg w-full sm:flex sm:justify-center">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-6 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900  hover:text-indigo-700 ">Any Issue Related to AffiliateProgram</h2>
            <form onSubmit={handleFeedbackSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="feedback" className="block text-sm font-Italic leading-6 text-red-900  hover:text-indigo-700 ">Your Query</label>
                <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} rows="4" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </form>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-7 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-blue-900"> Live Location</h2>
            <p className="mt-6 text-base leading-7 text-pin-700">
              Our library is conveniently located in Katalgonj, Chittagong. Find us on Google Maps:

              
            </p>
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
                  <a href="https://maps.google.com/?q=Gyan+Kosh+Library+Chittagong" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-700 transition-colors duration-300">GYAN KOSH LIBRARY LIVE LOCATION</a>
                </p>
              </div>
            
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Live Chat</h2>
            <p className="mt-6 text-base leading-7 text-gray-700">For instant support, you can chat with us on WhatsApp:</p>
            <button
              onClick={openWhatsAppChat}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <i className="fab fa-whatsapp mr-2"></i> Chat on WhatsApp
            </button>
            
          </div>
        </div>
      </div>
    
  );
}

export default About;