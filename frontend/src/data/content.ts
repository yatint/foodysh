export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  image: string;
  rating: number;
  time: string;
  price: string;
  badge: string;
  category: string;
  blurb: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  area: string;
  rating: number;
  time: string;
  offer: string;
}

export const CUISINE_FILTERS = [
  { id: "all", label: "All" },
  { id: "nashik", label: "Nashik Specials" },
  { id: "biryani", label: "Biryani & Mughlai" },
  { id: "south", label: "South Indian" },
  { id: "street", label: "Street Food" },
  { id: "pizza", label: "Pizza & Burgers" },
  { id: "dessert", label: "Desserts" },
];

export const DISHES: Dish[] = [
  {
    id: "misal-pav",
    name: "Nashik Kat Misal Pav",
    restaurant: "Sadhana Chulivarchi Misal",
    image: "https://images.pexels.com/photos/17223837/pexels-photo-17223837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.9,
    time: "18 min",
    price: "₹120",
    badge: "Nashik's #1",
    category: "nashik",
    blurb: "The legendary fiery tarri, crunchy farsan and soft pav — the breakfast Nashik swears by, served smoking hot.",
  },
  {
    id: "matka-biryani",
    name: "Dum Matka Biryani",
    restaurant: "Barbeque Villa & Biryani House",
    image: "https://images.pexels.com/photos/31537384/pexels-photo-31537384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.8,
    time: "25 min",
    price: "₹280",
    badge: "Chef Special",
    category: "biryani",
    blurb: "Slow-sealed in clay pots with saffron, fried onions and secret garam masala. Broken open only at your door.",
  },
  {
    id: "pithla-bhakri",
    name: "Pithla Bhakri Thali",
    restaurant: "Hotel Radhakrishna Pure Veg",
    image: "https://images.pexels.com/photos/17223836/pexels-photo-17223836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.7,
    time: "20 min",
    price: "₹160",
    badge: "Authentic",
    category: "nashik",
    blurb: "Rustic Maharashtrian soul food — jowar bhakri, zingy pithla, thecha and raw onion, straight from the chulha.",
  },
  {
    id: "kanda-bhaji",
    name: "Kanda Bhaji & Jalebi",
    restaurant: "Gangapur Road Treat Corner",
    image: "https://images.unsplash.com/photo-1621334721541-370a13974de8?crop=entropy&cs=srgb&fm=jpg&q=85",
    rating: 4.6,
    time: "15 min",
    price: "₹90",
    badge: "Evening Craving",
    category: "street",
    blurb: "Monsoon-evening essentials: crisp onion fritters with syrup-drenched jalebis. Nashik's favourite 6pm ritual.",
  },
  {
    id: "shahi-chicken",
    name: "Shahi Chicken Handi",
    restaurant: "Al-Khatib Dawat",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?crop=entropy&cs=srgb&fm=jpg&q=85",
    rating: 4.8,
    time: "22 min",
    price: "₹320",
    badge: "Non-Veg King",
    category: "biryani",
    blurb: "Rich, royal and unapologetically spicy — slow-cooked chicken handi that College Road queues up for.",
  },
  {
    id: "masala-dosa",
    name: "Crispy Masala Dosa",
    restaurant: "Aaswad South House",
    image: "https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.7,
    time: "20 min",
    price: "₹140",
    badge: "All-Day Hero",
    category: "south",
    blurb: "Golden, ghee-crisped dosa with spiced potato heart, coconut chutney and piping-hot sambar.",
  },
  {
    id: "woodfire-pizza",
    name: "Wood-Fired Cheese Pull Pizza",
    restaurant: "Cafe Italia, College Road",
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?crop=entropy&cs=srgb&fm=jpg&q=85",
    rating: 4.6,
    time: "30 min",
    price: "₹349",
    badge: "Trending",
    category: "pizza",
    blurb: "Blistered crust from a real wood fire, molten mozzarella and basil. The cheese pull is guaranteed.",
  },
  {
    id: "smash-burger",
    name: "Smash Burger Combo",
    restaurant: "Burger Baap, Mahatma Nagar",
    image: "https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=srgb&fm=jpg&q=85",
    rating: 4.5,
    time: "25 min",
    price: "₹199",
    badge: "Late Night",
    category: "pizza",
    blurb: "Double-smashed patty, oozing cheddar, house sauce and a heap of peri-peri fries.",
  },
  {
    id: "gulab-jamun",
    name: "Hot Gulab Jamun (4 pc)",
    restaurant: "Shree Sweets, M.G. Road",
    image: "https://images.pexels.com/photos/9198596/pexels-photo-9198596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.9,
    time: "15 min",
    price: "₹80",
    badge: "Bestseller",
    category: "dessert",
    blurb: "Pillowy khoya dumplings soaked in rose-cardamom syrup, delivered still warm.",
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "sadhana",
    name: "Sadhana Chulivarchi Misal",
    image: "https://images.pexels.com/photos/17223837/pexels-photo-17223837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cuisines: ["Misal Pav", "Maharashtrian"],
    area: "College Road",
    rating: 4.9,
    time: "15–20 min",
    offer: "₹50 OFF above ₹199",
  },
  {
    id: "barbeque-villa",
    name: "Barbeque Villa & Biryani House",
    image: "https://images.pexels.com/photos/31537384/pexels-photo-31537384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cuisines: ["Biryani", "Mughlai", "Kebabs"],
    area: "Gangapur Road",
    rating: 4.8,
    time: "25–30 min",
    offer: "50% OFF up to ₹100",
  },
  {
    id: "panchavati-gaurav",
    name: "Panchavati Gaurav Thali",
    image: "https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cuisines: ["Thali", "Pure Veg", "Gujarati"],
    area: "Panchavati",
    rating: 4.9,
    time: "20–25 min",
    offer: "Free Gulab Jamun",
  },
  {
    id: "treat-corner",
    name: "Gangapur Road Treat Corner",
    image: "https://images.pexels.com/photos/35128164/pexels-photo-35128164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cuisines: ["Street Food", "Chaat", "Wraps"],
    area: "Gangapur Road",
    rating: 4.6,
    time: "15–20 min",
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: "al-khatib",
    name: "Al-Khatib Dawat",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=srgb&fm=jpg&q=85",
    cuisines: ["North Indian", "Handi", "Roomali"],
    area: "Mahatma Nagar",
    rating: 4.8,
    time: "22–28 min",
    offer: "20% OFF tonight",
  },
  {
    id: "radhakrishna",
    name: "Hotel Radhakrishna Pure Veg",
    image: "https://images.pexels.com/photos/10078270/pexels-photo-10078270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cuisines: ["South Indian", "Thali", "Tiffin"],
    area: "Nashik Road",
    rating: 4.7,
    time: "20–25 min",
    offer: "₹30 OFF above ₹149",
  },
];

export const MARQUEE_ITEMS = [
  "Misal Pav",
  "Dum Biryani",
  "College Road Cafes",
  "Hot Jalebis",
  "Gangapur Road Treats",
  "Pithla Bhakri",
  "Panchavati Spices",
  "Good Food • Faster • Happier",
];

export const AREAS = [
  "Panchavati",
  "College Road",
  "Gangapur Road",
  "Mahatma Nagar",
  "Indira Nagar",
  "CIDCO",
  "Satpur",
  "Nashik Road",
];
