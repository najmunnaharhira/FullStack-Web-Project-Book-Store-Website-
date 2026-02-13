import React, { useContext } from "react";
import { Spinner } from "flowbite-react";
import { AuthContext } from "../../contexts/AuthProvider";

const posts = [
  {
    id: 1,
    title: 'Review of "To Kill a Mockingbird"',
    href: '#',
    description:
      'An in-depth review of Harper Lee\'s classic novel, focusing on its themes of racial injustice and moral growth.',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Jane Doe',
      role: 'Literature Enthusiast',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHVzZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE2MzMwMzU2Njg&ixlib=rb-1.2.1&q=80&w=400',
    },
  },
  {
    id: 2,
    title: 'Exploring the Mysteries of "1984"',
    href: '#',
    description:
      'A critical analysis of George Orwell\'s dystopian masterpiece and its relevance in today\'s world.',
    date: 'Feb 15, 2023',
    datetime: '2023-02-15',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Diana Khan',
      role: 'Book Critic',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHVzZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE2MzMwMzU2Njg&ixlib=rb-1.2.1&q=80&w=400',
    },
  },
  {
    id: 3,
    title: 'The Magic of "Harry Potter and the Philosopher\'s Stone"',
    href: '#',
    description:
      'A review of the first book in J.K. Rowling\'s beloved Harry Potter series, exploring its magical impact on readers of all ages.',
    date: 'Mar 22, 2023',
    datetime: '2023-03-22',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Christina Rowlands',
      role: 'Fantasy Fanatic',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHx1c2VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjMzMDM1NjY4&auto=format&fit=crop&w=400&q=60',
    },
  },
  {
    id: 4,
    title: 'The World of "The Great Gatsby"',
    href: '#',
    description:
      'Exploring the themes and characters of F. Scott Fitzgerald\'s iconic novel set in the Jazz Age.',
    date: 'Apr 30, 2023',
    datetime: '2023-04-30',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Michael Johnson',
      role: 'Literary Analyst',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    },
  },
  {
    id: 5,
    title: 'Exploring "Pride and Prejudice"',
    href: '#',
    description:
      'An exploration of Jane Austen\'s timeless novel, delving into its social commentary and enduring popularity.',
    date: 'May 15, 2023',
    datetime: '2023-05-15',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Emily Roberts',
      role: 'Literary Scholar',
      href: '#',
      imageUrl:'https://images.unsplash.com/photo-1579710039144-85d6bdffddc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    },
  },
  {
    id: 6,
    title: 'The Impact of "Brave New World"',
    href: '#',
    description:
      'Examining Aldous Huxley\'s dystopian vision and its relevance in contemporary society.',
    date: 'Jun 20, 2023',
    datetime: '2023-06-20',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'David Thompson',
      role: 'Literature Professor',
      href: '#',
      imageUrl:'https://images.unsplash.com/photo-1607017137021-5dc7e8cd4317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
        
    },
  },
  // More posts...

  // Add more posts...
  {
    id: 7,
    title: 'Discovering "The Catcher in the Rye"',
    href: '#',
    description:
      'An analysis of J.D. Salinger\'s iconic novel and its impact on adolescent literature.',
    date: 'Jul 10, 2023',
    datetime: '2023-07-10',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Jonathan Harris',
      role: 'Literature Professor',
      href: '#',
      imageUrl:'https://images.unsplash.com/photo-1600364768707-1385e68a48f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
   
    },
  },
  {
    id: 8,
    title: 'The Legacy of "Frankenstein"',
    href: '#',
    description:
      'Exploring Mary Shelley\'s classic novel and its enduring influence on science fiction literature.',
    date: 'Aug 22, 2023',
    datetime: '2023-08-22',
    category: { title: 'Book Review', href: '#' },
    author: {
      name: 'Rachel Green',
      role: 'Literature Enthusiast',
      href: '#',
      imageUrl:'https://images.unsplash.com/photo-1560787313-5dff3307e257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
       
    },
  },
];

const Blog = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Dive into the world of literature with our insightful book reviews.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="flex max-w-xl flex-col items-start justify-between transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-pink-100"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500 group-hover:text-pink-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-pink-200"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-pink-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 group-hover:text-pink-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt={post.author.name} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 group-hover:text-pink-600">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 group-hover:text-pink-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
