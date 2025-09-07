// Mock book data for the bookstore
import mysteryBook from "@/assets/book-mystery.jpg";
import romanceBook from "@/assets/book-romance.jpg";
import scifiBook from "@/assets/book-scifi.jpg";
import businessBook from "@/assets/book-business.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: {
    digital: number;
    hardcopy: number;
  };
  rating: number;
  reviews: number;
  cover: string;
  genre: string;
  description: string;
  publishedDate: string;
  pages: number;
  isbn: string;
  tags: string[];
  summary: string;
  authorBio: string;
  quotes: string[];
  benefits: string[];
}

export const books: Book[] = [
  {
    id: "shadows-city",
    title: "Shadows in the City",
    author: "Marcus Detective",
    price: {
      digital: 12.99,
      hardcopy: 24.99,
    },
    rating: 4.6,
    reviews: 2847,
    cover: mysteryBook,
    genre: "Mystery",
    description: "A gripping thriller that follows Detective Sarah Chen as she unravels a conspiracy that reaches the highest levels of city government.",
    publishedDate: "2024-03-15",
    pages: 342,
    isbn: "978-0-123456-78-9",
    tags: ["Thriller", "Detective", "Urban", "Crime"],
    summary: "When a series of seemingly unconnected murders rocks the city, Detective Sarah Chen discovers a dark web of corruption that threatens to destroy everything she believes in. Racing against time, she must navigate treacherous alliances and deadly secrets to uncover the truth before becoming the next target.",
    authorBio: "Marcus Detective is a former NYPD detective turned bestselling author. His authentic portrayal of police work and urban crime has earned him critical acclaim and a devoted following.",
    quotes: [
      "The truth has a way of surfacing, no matter how deep you bury it.",
      "In the shadows of the city, justice wears many faces.",
      "Sometimes the greatest criminals hide behind the shiniest badges."
    ],
    benefits: [
      "Experience authentic detective work through expert storytelling",
      "Uncover the dark underbelly of urban politics and corruption",
      "Enjoy edge-of-your-seat suspense that keeps you reading all night"
    ]
  },
  {
    id: "hearts-entwined",
    title: "Hearts Entwined",
    author: "Isabella Rose",
    price: {
      digital: 9.99,
      hardcopy: 19.99,
    },
    rating: 4.8,
    reviews: 5231,
    cover: romanceBook,
    genre: "Romance",
    description: "A heartwarming tale of second chances and unexpected love between a struggling artist and a successful entrepreneur.",
    publishedDate: "2024-02-14",
    pages: 298,
    isbn: "978-0-987654-32-1",
    tags: ["Contemporary", "Second Chance", "Artist", "Entrepreneur"],
    summary: "When Emma's art studio faces closure, she never expects help to come from Daniel, the businessman who broke her heart years ago. As they work together to save her dreams, old feelings resurface and new possibilities emerge in this tale of forgiveness, growth, and enduring love.",
    authorBio: "Isabella Rose is a bestselling contemporary romance author known for her emotionally rich characters and swoon-worthy love stories. She has written over fifteen novels that have touched readers' hearts worldwide.",
    quotes: [
      "Love doesn't follow timelines; it follows the heart.",
      "Sometimes the person you least expect is exactly who you need.",
      "Art, like love, requires vulnerability to create something beautiful."
    ],
    benefits: [
      "Experience the joy of second-chance romance done right",
      "Explore themes of forgiveness, growth, and pursuing dreams",
      "Escape into a world of passion, art, and emotional healing"
    ]
  },
  {
    id: "quantum-frontier",
    title: "Quantum Frontier",
    author: "Dr. Alex Nova",
    price: {
      digital: 14.99,
      hardcopy: 27.99,
    },
    rating: 4.4,
    reviews: 1923,
    cover: scifiBook,
    genre: "Science Fiction",
    description: "A mind-bending journey through space and time as humanity discovers the secrets of quantum manipulation and interdimensional travel.",
    publishedDate: "2024-01-20",
    pages: 456,
    isbn: "978-0-456789-01-2",
    tags: ["Space Opera", "Quantum Physics", "Adventure", "Future"],
    summary: "In 2087, Captain Elena Vasquez leads the first expedition through a quantum gateway to parallel dimensions. What they discover challenges everything humanity believes about reality, consciousness, and their place in the multiverse. A thrilling blend of hard science fiction and adventure.",
    authorBio: "Dr. Alex Nova holds a PhD in Theoretical Physics and has worked with NASA on quantum computing projects. Their scientifically grounded approach to science fiction has earned them recognition in both literary and scientific communities.",
    quotes: [
      "Reality is just the universe's way of keeping everything from happening at once.",
      "In the quantum realm, every choice creates a new world.",
      "The frontier isn't out there among the stars—it's within the very fabric of existence."
    ],
    benefits: [
      "Explore cutting-edge scientific concepts through thrilling storytelling",
      "Experience mind-bending adventures across multiple dimensions",
      "Gain new perspectives on consciousness, reality, and human potential"
    ]
  },
  {
    id: "success-principles",
    title: "Success Principles",
    author: "Jonathan Peak",
    price: {
      digital: 16.99,
      hardcopy: 29.99,
    },
    rating: 4.7,
    reviews: 8456,
    cover: businessBook,
    genre: "Business",
    description: "Transform your mindset and achieve extraordinary results with proven strategies from one of today's leading success coaches.",
    publishedDate: "2024-04-10",
    pages: 384,
    isbn: "978-0-234567-89-0",
    tags: ["Self-Help", "Leadership", "Motivation", "Success"],
    summary: "Based on decades of research and real-world application, Success Principles reveals the fundamental strategies that separate high achievers from everyone else. Learn how to develop unstoppable confidence, create winning habits, and build the life you've always dreamed of.",
    authorBio: "Jonathan Peak is a renowned success coach, keynote speaker, and entrepreneur who has helped thousands of individuals and organizations achieve breakthrough results. His previous books have been translated into over 20 languages.",
    quotes: [
      "Success is not an accident—it's a system of consistent actions aligned with clear purpose.",
      "The difference between successful people and everyone else is not talent, but habits.",
      "Your current situation is not your final destination unless you choose to stay there."
    ],
    benefits: [
      "Master the psychology of success with proven strategies",
      "Develop unshakeable confidence and winning mindsets",
      "Create systems that generate consistent, extraordinary results"
    ]
  }
];

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
}

export function getBooksByGenre(genre: string): Book[] {
  return books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
}