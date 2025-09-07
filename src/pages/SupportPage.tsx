import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageCircle, 
  Book, 
  CreditCard, 
  Truck, 
  Shield,
  Clock,
  Star
} from "lucide-react";
import { toast } from "sonner";

export function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const supportCategories = [
    {
      icon: Book,
      title: "Reading & Books",
      description: "Help with digital reading, book access, and library management",
      color: "bg-blue-500"
    },
    {
      icon: CreditCard,
      title: "Orders & Payments",
      description: "Billing questions, refunds, and payment methods",
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Track orders, shipping options, and delivery issues",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Account & Security",
      description: "Account settings, password reset, and security concerns",
      color: "bg-purple-500"
    }
  ];

  const faqs = [
    {
      question: "How do I access my digital books?",
      answer: "After purchasing a digital book, it will appear in your library. Click on the book cover to open the built-in reader. Your books are accessible 24/7 from any device."
    },
    {
      question: "Can I download books to read offline?",
      answer: "For security and copyright protection, our digital books can only be read through our online reader platform. This ensures authors' rights are protected while giving you access anywhere with internet."
    },
    {
      question: "What's your return policy?",
      answer: "Digital books can be refunded within 7 days of purchase if you haven't read more than 20% of the book. Physical books can be returned within 30 days in original condition."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship physical books worldwide. Shipping costs and delivery times vary by location. Digital books are available instantly worldwide."
    },
    {
      question: "How do I reset my password?",
      answer: "Click the 'Forgot Password' link on the login page, enter your email address, and we'll send you instructions to reset your password."
    },
    {
      question: "Can I gift books to others?",
      answer: "Absolutely! During checkout, select 'This is a gift' and enter the recipient's email. They'll receive instructions on how to access their gifted book."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for secure transactions."
    },
    {
      question: "How do I track my physical book order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also check your order status in your account under 'Order History'."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're here to ensure you have the best reading experience. Browse our FAQs or contact our support team.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">&lt; 2 hours</div>
                <div className="text-primary-foreground/80 text-sm">Average response time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80 text-sm">Digital book access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-primary-foreground/80 text-sm">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Support Categories */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            What Do You Need Help With?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Still Need Help? Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Support */}
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get detailed help via email
                </p>
                <p className="font-semibold mb-2">support@bookvault.com</p>
                <Badge variant="outline">Response within 2 hours</Badge>
              </CardContent>
            </Card>

            {/* Phone Support */}
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <p className="font-semibold mb-2">1-800-BOOKS-24</p>
                <Badge variant="outline">Mon-Fri 9AM-9PM EST</Badge>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Instant help from our experts
                </p>
                <Button variant="elegant" className="mb-2">
                  Start Chat
                </Button>
                <div>
                  <Badge variant="outline">Available 24/7</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Send Us a Message</CardTitle>
                <p className="text-center text-muted-foreground">
                  We'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Please describe your issue or question in detail..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="elegant" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-8">Why Readers Trust BookVault</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-4 text-green-500" />
                <h4 className="font-semibold mb-2">Secure & Private</h4>
                <p className="text-sm text-muted-foreground">Bank-level security for all transactions</p>
              </div>
              
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
                <h4 className="font-semibold mb-2">Top Rated</h4>
                <p className="text-sm text-muted-foreground">4.9/5 stars from 50,000+ customers</p>
              </div>
              
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <h4 className="font-semibold mb-2">Fast Support</h4>
                <p className="text-sm text-muted-foreground">Quick responses when you need help</p>
              </div>
              
              <div className="text-center">
                <Book className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                <h4 className="font-semibold mb-2">Book Experts</h4>
                <p className="text-sm text-muted-foreground">Passionate readers helping readers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}