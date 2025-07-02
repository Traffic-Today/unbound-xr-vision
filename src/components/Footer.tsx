
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#292457] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">unbound</h3>
            <p className="text-gray-300 leading-relaxed mb-6 font-extra-light">
              Unbound Consultancy is Europa's vooraanstaande expertisecentrum voor XR-toepassingen, met een team van deskundige zakelijke consultants en onbeperkte mogelijkheden voor maatwerk XR hardware-en software integraties.
            </p>
            <Button className="bg-[#6ECBF5] hover:bg-[#5BB8E2] text-white">
              Contact opnemen
            </Button>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">OVER UNBOUND XR</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-extra-light">
                Contact
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-extra-light">
                Werken bij
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-extra-light">
                Virtual Reality Blog
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-extra-light">
                VR merken
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors font-extra-light">
                Software partners
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">CONTACTGEGEVENS</h4>
            <div className="space-y-3 text-gray-300 font-extra-light">
              <p>+31 (0)850657182</p>
              <p>service@unboundxr.nl</p>
              <p>Kerkenbos 1063F, 6546 BB Nijmegen</p>
              <p>KvK 74112406</p>
              <p>BTW NL859776761B01</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-gray-300 mb-6 font-extra-light">Onze partners:</p>
          <div className="flex flex-wrap items-center gap-8 mb-8 opacity-60">
            {/* Partner logos placeholder - in a real implementation these would be actual logo images */}
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">PICO</div>
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">VIVE</div>
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">Microsoft</div>
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">Realwear</div>
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">HoloLens</div>
            <div className="bg-white rounded px-4 py-2 text-gray-400 text-sm">XOSAR</div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-600">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2017 - 2025 Unbound Consultancy
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-white rounded-sm"></div>
                <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                <span className="text-gray-400 text-sm">Dutch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
