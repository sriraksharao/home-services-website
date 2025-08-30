import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        {/* Newsletter */}
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-8">
              Get the latest home service tips and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-2xl font-bold mb-6">HomeServices</h4>
            <p className="text-background/80 mb-6">
              Your trusted platform for finding reliable home service professionals. 
              Quality work, every time.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="text-background border-background/20 hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-background border-background/20 hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-background border-background/20 hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-background border-background/20 hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Popular Services</h5>
            <ul className="space-y-3 text-background/80">
              <li><Link to="/services/house-cleaning" className="hover:text-background transition-colors">House Cleaning</Link></li>
              <li><Link to="/services/plumbing" className="hover:text-background transition-colors">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="hover:text-background transition-colors">Electrical Work</Link></li>
              <li><Link to="/services/handyman" className="hover:text-background transition-colors">Handyman Services</Link></li>
              <li><Link to="/services/painting" className="hover:text-background transition-colors">Painting</Link></li>
              <li><Link to="/services/hvac" className="hover:text-background transition-colors">HVAC Services</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Company</h5>
            <ul className="space-y-3 text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-background transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Become a Pro</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Support</h5>
            <ul className="space-y-3 text-background/80">
              <li><Link to="/contact" className="hover:text-background transition-colors">Help Center</Link></li>
              <li><Link to="/about" className="hover:text-background transition-colors">Safety</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-background/20">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>support@homeservices.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/80">
            © 2024 HomeServices. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-background/80">
            <Link to="/contact" className="hover:text-background transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-background transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-background transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;