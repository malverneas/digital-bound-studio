import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Star,
  Shield,
  Truck,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get the latest book releases, exclusive deals, and reading recommendations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email..." 
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="golden">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & About */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-xl font-bold">BookVault</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your premier destination for digital and physical books. Discover, read, and collect from our vast library of literature.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-accent" />
                  <span>Worldwide shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>24/7 digital access</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Explore</h4>
              <nav className="space-y-3">
                <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Browse Books
                </Link>
                <Link to="/genre/fiction" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fiction
                </Link>
                <Link to="/genre/mystery" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Mystery & Thriller
                </Link>
                <Link to="/genre/romance" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Romance
                </Link>
                <Link to="/genre/sci-fi" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Science Fiction
                </Link>
                <Link to="/genre/business" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Business & Self-Help
                </Link>
              </nav>
            </div>
            
            {/* Account & Support */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Account</h4>
              <nav className="space-y-3">
                <Link to="/profile" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  My Library
                </Link>
                <Link to="/orders" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Order History
                </Link>
                <Link to="/wishlist" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Wishlist
                </Link>
                <Link to="/support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Help Center
                </Link>
                <Link to="/support/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
                <Link to="/support/shipping" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping Info
                </Link>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">support@bookvault.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">1-800-BOOKS-24</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">New York, NY</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h5 className="font-semibold mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                    <Youtube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="py-6 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80 text-center md:text-left">
              © {currentYear} BookVault. All rights reserved. 
              <span className="mx-2">•</span>
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <span className="mx-2">•</span>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Star className="w-4 h-4 text-accent" />
              <span>Trusted by 50,000+ readers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}