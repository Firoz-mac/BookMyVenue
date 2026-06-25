import { RiHomeSmile2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { Search, Landmark } from 'lucide-react';
import demoVenueImage from './demoVenueImage.png';
import bookMyVenue from './BookMyVenue.png';
import Neutral from './Neutral.png'
import Satisfied from './Satisfied.png'
import Happy from './Happy.png'
import ExtremelyHappy from './ExtremelyHappy.png'

export const images = {
  bookMyVenue,
  demoVenueImage,
}

export const mobileNavMenuContent = [
    {
        title: 'Home',
        icon: RiHomeSmile2Fill,
        path: '/'
    },
    {
        title: 'Venues',
        icon: LuBuilding2,
        path: '/venues'
    },
    {
        title: 'Search',
        icon: Search,
        path: '/search'
    },
    {
        title: 'Profile',
        icon: FaUserCircle,
        path: '/profile'
    },
];

export const mainCategories = [
  {
    title:'Wedding Halls',
    icon: Landmark,
  },
  {
    title:'Cafes',
    icon: Landmark,
  },
  {
    title:'Hotels',
    icon: Landmark,
  },
  {
    title:'Conference Rooms',
    icon: Landmark,
  },
  {
    title:'Banquet Halls',
    icon: Landmark,
  },
  {
    title:'Resorts',
    icon: Landmark,
  },
  {
    title:'Party Venues',
    icon: Landmark,
  },
  {
    title:'Malls',
    icon: Landmark,
  },
  {
    title:'Wedding Halls',
    icon: Landmark,
  },
  {
    title:'Cafes',
    icon: Landmark,
  },
  {
    title:'Hotels',
    icon: Landmark,
  },
  {
    title:'Conference Rooms',
    icon: Landmark,
  },
  {
    title:'Banquet Halls',
    icon: Landmark,
  },
  {
    title:'Resorts',
    icon: Landmark,
  },
  {
    title:'Party Venues',
    icon: Landmark,
  },
  {
    title:'Banquet Halls',
    icon: Landmark,
  },
  {
    title:'Resorts',
    icon: Landmark,
  },
  {
    title:'Party Venues',
    icon: Landmark,
  },
  {
    title:'Banquet Halls',
    icon: Landmark,
  },
  {
    title:'Resorts',
    icon: Landmark,
  },
  {
    title:'Party Venues',
    icon: Landmark,
  },
  {
    title:'Banquet Halls',
    icon: Landmark,
  },
  {
    title:'Resorts',
    icon: Landmark,
  },
  {
    title:'Party Venues',
    icon: Landmark,
  },

];

export const dummyVenues = [
  {
    id: 1,
    title: "Grand Palace Convention Center",
    category: "Wedding Hall",
    city: "Kochi",
    location: "Edappally, Kochi",
    rating: 4.8,
    reviews: 324,
    price: 85000,
    capacity: 1200,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    featured: true,
  },

  {
    id: 2,
    title: "Blue Orchid Banquet Hall",
    category: "Banquet Hall",
    city: "Thrissur",
    location: "MG Road, Thrissur",
    rating: 4.7,
    reviews: 218,
    price: 65000,
    capacity: 800,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    featured: true,
  },

  {
    id: 3,
    title: "Royal Garden Resort",
    category: "Outdoor Venue",
    city: "Munnar",
    location: "Tea Valley, Munnar",
    rating: 4.9,
    reviews: 412,
    price: 120000,
    capacity: 500,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    featured: true,
  },

  {
    id: 4,
    title: "Lakeside Event Arena",
    category: "Event Space",
    city: "Alappuzha",
    location: "Lake View Road",
    rating: 4.6,
    reviews: 156,
    price: 45000,
    capacity: 350,
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    featured: false,
  },

  {
    id: 5,
    title: "Emerald Conference Hall",
    category: "Conference Hall",
    city: "Kozhikode",
    location: "Beach Road",
    rating: 4.5,
    reviews: 88,
    price: 25000,
    capacity: 200,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    featured: false,
  },

  {
    id: 6,
    title: "Golden Crown Auditorium",
    category: "Auditorium",
    city: "Ernakulam",
    location: "Kaloor",
    rating: 4.8,
    reviews: 275,
    price: 70000,
    capacity: 1000,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
    featured: true,
  },
];

export const venueAtmospheresCategory = [
  {
    title: "City Center",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    title: "In The Mountains",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Luxury",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Intimate",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
  },
  {
    title: "Modern",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
  },
  {
    title: "Regional",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b",
  },
];


export const footerData = {
  explore:[
    {
      title:'Home',
      path:'/'
    },
    {
      title:'Popular Destinations',
      path:'/'
    },
    {
      title:'Wedding Destinations',
      path:'/'
    },
    {
      title:'Corporate Events',
      path:'/'
    },
  ],
  links:[
    {
      title:'Register',
      path:'/'
    },
    {
      title:'Login',
      path:'/'
    },
    {
      title:'Order',
      path:'/'
    },
    {
      title:'Help',
      path:'/'
    },
  ],
  company:[
    {
      title:'About Us',
      path:'/'
    },
    {
      title:'List Venue',
      path:'/'
    },
  ],
  terms:[
    {
      title:'Privacy Policy',
      path:'/'
    },
    {
      title:'Terms of Service',
      path:'/'
    },
    {
      title:'Cookie Policy',
      path:'/'
    },
  ]
}

export const bookingSteps = [
  {
    title: "Choose Venue",
    description: "Browse and select the perfect venue for your event.",
  },
  {
    title: "Select Date & Time",
    description: "Pick your preferred date and available time slot.",
  },
  {
    title: "Confirm Booking",
    description: "Review your details and complete the booking.",
  },
  {
    title: "Enjoy Your Event",
    description: "Receive confirmation and enjoy your event.",
  },
]

export const feedbackOptions = [
  {
    icon: Neutral,
    label: 'Neutral',
  },
  {
    icon: Satisfied,
    label: 'Satisfied',
  },
  {
    icon: Happy,
    label: 'Happy',
  },
  {
    icon: ExtremelyHappy,
    label: 'Happy Plus',
  },
]