import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'src/images/blog.png',
    url: 'https://writeyouexperience.web.app/',
    github: 'https://github.com/rydv/react-blog',
    title: 'Blog App',
    text: "MERN stack blog app delivers a seamless user experience with a captivating interface. It provides modern users with an immersive blogging experience.",
  },
  {
    id: nanoid(),
    img: 'src/images/backroads.png',
    url: 'https://backroadtripappp.netlify.app/',
    github: 'https://github.com/rydv/backroads-app',
    title: 'Backroads Trip App',
    text: 'A user-centric design with robust functionality. Intuitively designed interface fosters a captivating user experience, ensuring effortless navigation.',
  },
  {
    id: nanoid(),
    img: 'src/images/wazzup.png',
    url: 'https://my-chat-bb980.web.app/register',
    github: 'https://github.com/rydv/wazz-app',
    title: 'Chat App',
    text: 'The chat app, leveraging WebSocket implementation, offers real-time communication, ensuring instant message delivery.',
  },
];
