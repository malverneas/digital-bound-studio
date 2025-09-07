import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, CreditCard, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Book {
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
}

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Card 
      className="book-3d hover-lift group cursor-pointer overflow-hidden border-0 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewDetails}
    >
      <div className="relative overflow-hidden">
        <img 
          src={book.cover} 
          alt={book.title}
          className="book-cover w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <Badge className="absolute top-4 right-4 gradient-golden border-0">
          {book.genre}
        </Badge>
        
        {/* Quick action buttons on hover */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Button 
              size="sm" 
              variant="elegant" 
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                // Mock: simulate purchase and redirect to reader
                toast.success(`Digital copy purchased! Opening reader...`);
                setTimeout(() => navigate(`/reader/${book.id}`), 1500);
              }}
            >
            <CreditCard className="w-4 h-4 mr-2" />
            Digital ${book.price.digital}
          </Button>
          <Button 
            size="sm" 
            variant="bookstore" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic for hardcopy
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Print ${book.price.hardcopy}
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-display font-semibold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        <p className="text-muted-foreground mb-3 font-medium">
          by {book.author}
        </p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating) 
                    ? 'text-accent fill-accent' 
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {book.rating} ({book.reviews} reviews)
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {book.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="outline" 
          className="w-full group-hover:variant-elegant group-hover:text-primary-foreground transition-all"
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}