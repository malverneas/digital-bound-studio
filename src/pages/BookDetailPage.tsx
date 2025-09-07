import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  ShoppingCart, 
  CreditCard, 
  Calendar, 
  BookOpen, 
  User, 
  Quote,
  Gift,
  ArrowLeft,
  Heart,
  Share
} from "lucide-react";
import { getBookById, Book } from "@/data/books";
import { toast } from "sonner";

export function BookDetailPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<"digital" | "hardcopy">("digital");
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (bookId) {
      const foundBook = getBookById(bookId);
      if (foundBook) {
        setBook(foundBook);
      } else {
        navigate("/");
      }
    }
  }, [bookId, navigate]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-semibold">Book not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${book.title} (${selectedFormat}) added to cart!`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${book.title} (${selectedFormat})`);
    // For digital format, after "purchase", redirect to reader
    if (selectedFormat === "digital") {
      setTimeout(() => {
        navigate(`/reader/${book.id}`);
      }, 2000);
    }
  };

  const mockReviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      comment: "Absolutely captivating! Couldn't put it down.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      author: "Mike R.",
      rating: 4,
      comment: "Great storytelling and character development.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      comment: "This book changed my perspective completely.",
      date: "3 weeks ago",
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="book-3d">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="book-cover w-80 h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 gradient-golden border-0">
                  {book.genre}
                </Badge>
                <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-2">
                  by {book.author}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(book.rating) 
                            ? 'text-accent fill-accent' 
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{book.rating}</span>
                  <span className="text-muted-foreground">
                    ({book.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              {/* Format Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choose Format:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card 
                    className={`cursor-pointer transition-all hover-lift ${
                      selectedFormat === "digital" 
                        ? "ring-2 ring-primary bg-primary/5" 
                        : ""
                    }`}
                    onClick={() => setSelectedFormat("digital")}
                  >
                    <CardContent className="p-4 text-center">
                      <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">Digital Copy</div>
                      <div className="text-2xl font-bold text-primary">
                        ${book.price.digital}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Instant access
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card 
                    className={`cursor-pointer transition-all hover-lift ${
                      selectedFormat === "hardcopy" 
                        ? "ring-2 ring-primary bg-primary/5" 
                        : ""
                    }`}
                    onClick={() => setSelectedFormat("hardcopy")}
                  >
                    <CardContent className="p-4 text-center">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">Hard Copy</div>
                      <div className="text-2xl font-bold text-primary">
                        ${book.price.hardcopy}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ships in 2-3 days
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="elegant" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleBuyNow}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy Now - ${selectedFormat === "digital" ? book.price.digital : book.price.hardcopy}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="ghost" size="lg">
                  <Share className="w-5 h-5" />
                </Button>
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Published {new Date(book.publishedDate).getFullYear()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{book.pages} pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Book Description */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">About This Book</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-4">{book.description}</p>
              <p className="text-muted-foreground leading-relaxed">{book.summary}</p>
            </div>
          </section>

          {/* Reviews Section */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">Reader Reviews</h2>
            
            {/* Rating Overview */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{book.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(book.rating) 
                              ? 'text-accent fill-accent' 
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      Based on {book.reviews.toLocaleString()} reviews
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm w-8">{stars}★</span>
                        <Progress value={stars === 5 ? 75 : stars === 4 ? 20 : 5} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">
                          {stars === 5 ? '75%' : stars === 4 ? '20%' : '5%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{review.author}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                          )}
                          <span className="text-muted-foreground text-sm">• {review.date}</span>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'text-accent fill-accent' 
                                  : 'text-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Read This Book */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">Why Read This Book?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {book.benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full gradient-golden flex items-center justify-center text-accent-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Author Profile */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">About the Author</h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="w-24 h-24 mx-auto md:mx-0">
                    <AvatarFallback className="text-2xl gradient-hero text-primary-foreground">
                      {book.author.split(' ').map(n => n.charAt(0)).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-display text-2xl font-bold mb-4">{book.author}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{book.authorBio}</p>
                    <Button variant="elegant">
                      <User className="w-4 h-4 mr-2" />
                      View More Books
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quotes */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">Memorable Quotes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {book.quotes.map((quote, index) => (
                <Card key={index} className="hover-lift gradient-card border-0">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <blockquote className="text-lg font-medium italic mb-4 leading-relaxed">
                      "{quote}"
                    </blockquote>
                    <cite className="text-muted-foreground">— {book.author}</cite>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Rewards & Offers */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="gradient-golden border-0 text-accent-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-6 h-6" />
                    Bundle Deal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Get this book + 2 more from the same author</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="line-through text-sm">$54.97</span>
                    <span className="text-2xl font-bold">$39.99</span>
                    <Badge className="bg-red-500 text-white">Save 27%</Badge>
                  </div>
                  <Button variant="outline" className="w-full border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                    View Bundle
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-accent" />
                    Loyalty Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Earn 25 points with this purchase</p>
                  <div className="text-sm text-muted-foreground mb-4">
                    100 points = $10 off your next order
                  </div>
                  <Progress value={65} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    You're 35 points away from your next reward!
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}