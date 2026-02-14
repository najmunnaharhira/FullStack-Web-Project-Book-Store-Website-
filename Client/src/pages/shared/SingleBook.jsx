import React from "react";
import { Banner } from "flowbite-react";
import { Card } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const data = useLoaderData();
    const bookTitle = data?.bookTitle ?? "";
    const imageURL = data?.imageURL ?? "";
    const bookDescription = data?.bookDescription ?? "";
    const authorName = data?.authorName ?? "";
    const pdfURL = data?.bookPDFURL ?? data?.pdfURL ?? "";

    return (
        <div className='mt-20'>
            <Banner>
                <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* Book Details */}
            <div className='my-28 px-4 lg:px-24'>
                <h2 className='text-3xl font-bold text-center mb-16 z-40'>Book Details</h2>
                <Card className='mx-auto max-w-2xl'>
                    <img src={imageURL || "https://via.placeholder.com/400"} alt={bookTitle} className='h-96 w-full object-cover' />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {bookTitle}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {bookDescription || "No description available."}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Author: {authorName || "Unknown"}
                    </p>
                    {pdfURL && (
                        <a
                            href={pdfURL}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read PDF
                        </a>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default SingleBook;
