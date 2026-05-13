import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLavoraOpen, setIsLavoraOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi sono', href: '/chi-sono' },
    { 
      name: 'Lavora con me', 
      href: '#',
      activePrefix: '/lavora-con-me',
      hasSubmenu: true,
      submenu: [
        { name: 'Pinterest', href: '/lavora-con-me/pinterest' },
        { name: 'Content Flow', href: '/lavora-con-me/content-flow' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
  ];

  const isActive = (link: any) => {
    if (link.href === '/') return location.pathname === '/';
    if (link.activePrefix) return location.pathname.startsWith(link.activePrefix);
    return link.href !== '#' && location.pathname.startsWith(link.href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-[#F0E5DE]/90 backdrop-blur-md border-comp-sabbia/30 text-primary-night' 
        : 'bg-primary-cream border-comp-sabbia/30 text-primary-night'
    }`}>
      <div className="container-custom h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Kaffeina Logo" 
            className="h-16 w-auto object-contain transition-all duration-300" 
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-6 min-w-0 flex-nowrap">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group shrink-0"
              onMouseEnter={() => link.hasSubmenu && setIsLavoraOpen(true)}
              onMouseLeave={() => link.hasSubmenu && setIsLavoraOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-[9px] lg:text-[11px] xl:text-[13px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1 whitespace-nowrap ${
                  isActive(link) 
                    ? 'text-primary-pink' 
                    : 'text-primary-night hover:text-primary-pink'
                }`}
              >
                {link.name}
                {link.hasSubmenu && <ChevronDown size={14} className={`transition-transform duration-300 ${isLavoraOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {link.hasSubmenu && (
                <AnimatePresence>
                  {isLavoraOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white border border-comp-sabbia rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] py-3 z-50 overflow-hidden"
                    >
                      {link.submenu?.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.href} 
                          className={`block px-6 py-2.5 text-[14px] transition-colors ${
                            location.pathname === sub.href ? 'text-primary-pink bg-comp-crema' : 'text-comp-cacao hover:bg-comp-crema hover:text-primary-night'
                          }`}
                          onClick={() => setIsLavoraOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-1 lg:gap-4 border-l border-comp-sabbia/20 ml-1 lg:ml-2 pl-1 lg:pl-4 xl:pl-8 shrink-0">
            <Link to="/shop/cart" className={`relative p-1 lg:p-2 transition-colors ${
              location.pathname === '/shop/cart' 
                ? 'text-primary-pink' 
                : 'text-primary-night hover:text-primary-pink'
            }`}>
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/prenota-una-call" className="btn-primary !px-3 lg:!px-4 !py-2 !text-[10px] lg:!text-[12px] xl:!px-6 xl:!py-3 xl:!text-[14px]">
              PRENOTA UNA CALL
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary-night" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-comp-sabbia overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasSubmenu ? (
                    <div className="space-y-6">
                      <div className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isActive(link) ? 'text-primary-pink' : 'text-comp-salvia'}`}>{link.name}</div>
                      <div className="pl-4 flex flex-col gap-6">
                        {link.submenu?.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.href} 
                            className={`text-[15px] font-bold uppercase tracking-widest ${location.pathname === sub.href ? 'text-primary-pink' : 'text-primary-night'}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`text-[16px] font-bold uppercase tracking-widest ${isActive(link) ? 'text-primary-pink' : 'text-primary-night'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/prenota-una-call" onClick={() => setIsOpen(false)} className="btn-primary w-full flex justify-center !bg-primary-night !text-white">
                PRENOTA UNA CALL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
