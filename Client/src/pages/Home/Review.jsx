import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import ReviewCard from "../shared/ReviewCard";
import profile from "../../assets/profile.jpg";
import profile2 from "../../assets/people/profile2.png";
import profile3 from "../../assets/people/profile3.png";
import profile4 from "../../assets/people/profile4.png";
import { Avatar } from "flowbite-react";
import { FaStar } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='mb-5'>The variety of books available at this store is impressive. I always find what I'm looking for, and the staff is always ready to help.</p>
                            <Avatar
                                alt="avatar of Mark Ping"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Farhana Akhi</h5>
                            <p className='text-sm'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <ReviewCard />
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='mb-5'>We are extremely satisfied with the quality of service provided by this bookstore. The staff is knowledgeable and friendly, and the atmosphere is welcoming.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile2}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Jese</h5>
                            <p className='text-sm'>Book Lover</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='mb-5'>I love that this bookshop offers both an excellent online platform and a welcoming physical store. Online, I can quickly find and order the books I need, and when I have time, I enjoy browsing the shelves in person. The staff is friendly and knowledgeable in both settings.</p>
                            <Avatar
                                alt="avatar of Shuriya Sultana"
                                img={profile3}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Sultana</h5>
                            <p className='text-sm'>Book Lover</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='mt-7'>
                            <p className='mb-5'>This bookshop offers a seamless integration between their online and offline services. I can order a book online and pick it up in-store the same day. The staff is always friendly and helpful.</p>
                            <Avatar
                                alt="avatar of Farhana"
                                img={profile4}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Farhan</h5>
                            <p className='text-sm'>Book Lover</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-[#b3e5fc] py-8 px-4 md:m-5 rounded-lg border transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-500' style={{ backgroundColor: '#b3e5fc' }}>
                    <ReviewCard />
                </SwiperSlide>
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review;
