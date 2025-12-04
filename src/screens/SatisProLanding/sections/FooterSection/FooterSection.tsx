import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SatisPro</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              SatisPro is an independent service provider and not affiliated with Google. Google Business Profile is a free service from Google, and you remain the owner of your account. Access is granted securely through OAuth and can be revoked at any time. Our fees cover only our management and automation services, not access to Google Business Profile. Learn more at support.google.com/business
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/satispro/" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a href="mailto:contact@satispro.net" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><Link to="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">Terms & Privacy</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 SatisPro. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/terms-of-use" className="hover:text-white transition-colors">Website Terms of Use</Link>
              <Link to="/end-user-policy" className="hover:text-white transition-colors">End User Policy</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
