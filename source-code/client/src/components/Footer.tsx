import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036241636/bjCLfRgewlNYTUlf.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src={LOGO_URL}
              alt="Alpha Consulting Engineers"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading mechanical and electrical engineering consultancy in Singapore since 1995. 
              Delivering excellence across commercial, residential, healthcare, and industrial sectors.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Mechanical Engineering",
                "Electrical Engineering",
                "Fire Protection",
                "Sustainable Design",
                "Project Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  2 Bukit Merah Central #16-01<br />
                  Singapore 159835
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+6562762228" className="text-slate-400 hover:text-white transition-colors">
                  +65 6276 2228
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:ace@alpha.com.sg" className="text-slate-400 hover:text-white transition-colors">
                  ace@alpha.com.sg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Alpha Consulting Engineers Pte Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-slate-400">ISO 9001:2015 Certified</span>
              <span className="text-slate-400">ISO 14001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
