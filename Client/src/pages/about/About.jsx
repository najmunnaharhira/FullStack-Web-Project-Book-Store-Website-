import React from "react";

const About = () => {
  return (
    <div className='mt-20'>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">About Us</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gyan Kosh Library</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Welcome to Gyan Kosh Library, your ultimate destination for a vast collection of books and literary resources. Located in the heart of Chittagong, Katalgonj, we pride ourselves on providing an enriching environment for readers of all ages and interests.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://via.placeholder.com/800x600" // Replace with an actual image
              alt="Gyan Kosh Library"
            /> */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  At Gyan Kosh Library, we believe that books are the windows to the world, providing knowledge, inspiration, and endless adventures. Our extensive catalog includes fiction, non-fiction, academic texts, and rare collections, catering to the diverse interests of our patrons.
                </p>
                <p className="mt-6">
                  Our mission is to foster a love for reading and lifelong learning in our community. We offer a range of services including book rentals, community reading programs, author events, and more. Whether you are a student, a professional, or a leisure reader, Gyan Kosh Library has something for you.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Visit Us</h2>
                <p className="mt-6">
                  We invite you to visit our library in Katalgonj, Chittagong, and immerse yourself in the serene atmosphere perfect for reading and research. Join our community of book lovers and discover the joys of reading at Gyan Kosh Library.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
                <p className="mt-6">
                  For more information, feel free to reach out to us at:
                </p>
                <p>
                  <strong>Address:</strong> Katalgonj, Chittagong, Bangladesh<br />
                  <strong>Phone:</strong> +880 1234 567890<br />
                  <strong>Email:</strong> info@gyankoshlibrary.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
