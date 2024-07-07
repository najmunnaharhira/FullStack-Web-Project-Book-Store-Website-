import profile1 from "../../assets/people/profile1.png";
import { Avatar } from "flowbite-react";
import { FaStar } from "react-icons/fa6";

// import profile2 from "../../assets/people/profile2.png";

const ReviewCard = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>I recently visited the bookshop in Chittagong, Katalgonj area, and I must say, it is really impressive. The collection of books is extensive, covering various genres and topics. The ambiance is cozy and inviting, making it a perfect place to spend hours browsing through books</p>
                <Avatar
                    alt="avatar of John Doe"
                    img={profile1}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Jahan Dana</h5>
                <p className='text-sm'>Book Enthusiast</p>
            </div>

            </div>
      
    );
};

export default ReviewCard;
