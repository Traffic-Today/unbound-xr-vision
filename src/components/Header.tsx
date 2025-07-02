
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, User, ShoppingCart, Globe, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-white text-sm py-2 px-4 border-b font-extra-light">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-gray-600">
            Dé <strong className="font-bold">One-Stop-Shop</strong> voor <strong className="font-bold">XR</strong> enthousiastelingen en professionals!
          </span>
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              +31 (0)85 1302 742
            </span>
            <span>Consument</span>
            <span>Zakelijk</span>
            <div className="flex items-center">
              <img src="https://flagcdn.com/w20/nl.png" alt="NL" className="w-4 h-3 mr-1" />
              <span>NL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-[#292457] text-white font-extra-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://unboundxr.nl/b2b/static/version1750945588/frontend/Batao/UnboundxrB2B/nl_NL/images/logo.svg" 
                alt="Unbound XR" 
                className="h-8"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-[#6ECBF5] bg-transparent hover:bg-transparent font-bold">
                      Bekijk ons assortiment
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white text-gray-900 p-4 min-w-[300px] font-extra-light">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">VR Headsets</a>
                        <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">AR Brillen</a>
                        <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">Accessoires</a>
                        <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">Software</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Waar ben je naar op zoek?"
                  className="w-80 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 font-extra-light"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-[#6ECBF5] hover:bg-transparent p-2">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-[#6ECBF5] hover:bg-transparent p-2">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-[#6ECBF5] hover:bg-transparent p-2">
                <Globe className="h-5 w-5" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:text-[#6ECBF5] hover:bg-transparent p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#3a2f6b]">
              <div className="space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-white hover:text-[#6ECBF5] justify-start w-full font-bold">
                      Bekijk ons assortiment
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white font-extra-light">
                    <DropdownMenuItem>VR Headsets</DropdownMenuItem>
                    <DropdownMenuItem>AR Brillen</DropdownMenuItem>
                    <DropdownMenuItem>Accessoires</DropdownMenuItem>
                    <DropdownMenuItem>Software</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Waar ben je naar op zoek?"
                    className="w-full px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 font-extra-light"
                  />
                  <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Feature bar */}
      <div className="bg-white py-3 px-4 border-b font-extra-light">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center text-sm text-gray-600 space-y-2 lg:space-y-0">
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span><strong className="font-bold">Voor 23:00 besteld</strong>, dezelfde dag verzonden</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span><strong className="font-bold">Niet gevonden wat je zocht?</strong></span>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Bezoek ook onze <strong className="font-bold">Consultancy website</strong></span>
          </div>
          <div className="flex items-center">
            <span className="text-orange-500 mr-2">⭐</span>
            <span><strong className="font-bold">8.8/10</strong></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
