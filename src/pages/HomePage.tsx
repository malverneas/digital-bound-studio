import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookCard } from "@/components/BookCard";
import { books } from "@/data/books";
import { Search, Star, TrendingUp, Award, Filter } from "lucide-react";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const genres = ["all", "mystery", "romance", "science fiction", "business"];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "all" || 
                        book.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Discover Your Next
              <span className="block gradient-golden bg-clip-text text-transparent">
                Great Read
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 animate-fade-in-up [animation-delay:0.2s]">
              Immerse yourself in worlds of wonder. From thrilling mysteries to heartwarming romances, 
              find books that will captivate your imagination and expand your horizons.
            </p>
            
            {/* Featured Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-fade-in-up [animation-delay:0.3s]">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-primary-foreground/80">Digital Books</div>
              </div>
              <div className="text-center animate-fade-in-up [animation-delay:0.4s]">
                <div className="text-3xl font-bold mb-2">50,000+</div>
                <div className="text-primary-foreground/80">Happy Readers</div>
              </div>
              <div className="text-center animate-fade-in-up [animation-delay:0.5s]">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80">Access</div>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="golden" 
              className="text-lg px-8 py-6 animate-fade-in-up [animation-delay:0.6s]"
            >
              <Star className="w-5 h-5 mr-2" />
              Start Reading Today
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-golden rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-32 h-32 gradient-card rounded-full opacity-30 blur-2xl animate-pulse [animation-delay:1s]" />
      </section>

      {/* Search and Filters Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search books, authors..." 
                  className="pl-10 h-12 bg-background border-0 shadow-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant={selectedGenre === genre ? "elegant" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGenre(genre)}
                    className="capitalize"
                  >
                    {genre === "all" ? "All Books" : genre}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Showing {filteredBooks.length} books
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "featured" ? "elegant" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("featured")}
                >
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </Button>
                <Button
                  variant={sortBy === "rating" ? "elegant" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("rating")}
                >
                  <Award className="w-4 h-4 mr-1" />
                  Top Rated
                </Button>
                <Button
                  variant={sortBy === "trending" ? "elegant" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("trending")}
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Trending
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="animate-fade-in-up">
                <BookCard book={book} />
              </div>
            ))}
          </div>
          
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">No books found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse different genres
              </p>
              <Button variant="elegant" onClick={() => {
                setSearchQuery("");
                setSelectedGenre("all");
              }}>
                Browse All Books
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-4">
              Never Miss a Great Book
            </h2>
            <p className="text-muted-foreground mb-8">
              Get personalized book recommendations and exclusive deals delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email..." 
                className="flex-1"
              />
              <Button variant="elegant">
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>Weekly recommendations</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 fill-accent text-accent" />
                <span>Exclusive deals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}