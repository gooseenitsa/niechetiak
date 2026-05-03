import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: "Номера", path: "/rooms" },
    { name: "Услуги", path: "/services" },
    { name: "Галерея", path: "/gallery" },
    { name: "Акции", path: "/offers" },
    { name: "О нас", path: "/about" },
    { name: "UI Kit", path: "/ui-kit" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-light">
      {/* Top Bar - Strict utility */}
      <div className="bg-black text-white h-10 w-full flex items-center justify-between px-8 text-xs tracking-widest uppercase font-medium">
        <div className="hidden md:block">+1 800 555 0199 <span>|</span> INFO@NIECHETIAK.COM</div>
        <div className="flex gap-6 w-full md:w-auto justify-end">
          <Link to="/login" className="hover:text-gold transition-strict">Войти</Link>
          <Link to="/signup" className="hover:text-gold transition-strict">Регистрация</Link>
        </div>
      </div>

      {/* Main Header - Center Axis Symmetry */}
      <header className="bg-white border-b border-black sticky top-0 z-50">
        <div className="grid-container flex items-center justify-between h-20">
          <div className="flex-1 hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[11px] lg:text-sm uppercase tracking-widest font-semibold hover:text-gold transition-strict",
                  location.pathname === link.path && "text-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link to="/" className="flex-shrink-0 text-2xl lg:text-3xl font-display font-bold tracking-[0.2em] text-black text-center mx-4">
            NIECHE TIAK
          </Link>
          
          <div className="flex-1 hidden md:flex items-center justify-end gap-6 lg:gap-8">
             {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[11px] lg:text-sm uppercase tracking-widest font-semibold hover:text-gold transition-strict",
                  location.pathname === link.path && "text-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className="bg-black text-white px-4 lg:px-6 py-3 text-[10px] lg:text-xs uppercase tracking-widest hover:bg-gold transition-strict font-semibold">
              Бронь
            </Link>
          </div>
          
          {/* Mobile menu fallback element */}
          <div className="md:hidden">
            <button className="text-black uppercase text-xs tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-strict">
              Меню
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      {/* Footer - Architectural Grid */}
      <footer className="bg-black text-white pt-20 pb-10">
        <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-800 pb-16">
          <div className="flex flex-col items-center md:items-start space-y-4">
             <Link to="/" className="text-2xl font-display font-bold tracking-[0.2em] text-white text-center md:text-left">
              NIECHE TIAK
            </Link>
            <p className="text-zinc-400 text-sm max-w-xs text-center md:text-left mt-4 font-light">
              Модернистская архитектура и бескомпромиссный сервис в самом сердце абсолютной симметрии.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div className="flex flex-col space-y-3">
              <span className="text-gold text-xs tracking-widest uppercase mb-2">Навигация</span>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-sm text-zinc-300 hover:text-white transition-strict">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-gold text-xs tracking-widest uppercase mb-2">Информация</span>
              <a href="#" className="text-sm text-zinc-300 hover:text-white transition-strict">Конфиденциальность</a>
              <a href="#" className="text-sm text-zinc-300 hover:text-white transition-strict">Условия сервиса</a>
              <Link to="/account" className="text-sm text-zinc-300 hover:text-white transition-strict mt-4 block">Аккаунт</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm text-zinc-300 space-y-2 text-center md:text-right font-light">
             <span className="text-gold text-xs tracking-widest uppercase mb-2">Контакты</span>
             <p>100 Symmetry Avenue</p>
             <p>Geometria, 90210</p>
             <p className="mt-2">+1 800 555 0199</p>
             <p>INFO@NIECHETIAK.COM</p>
          </div>
        </div>
        
        <div className="grid-container mt-8 text-center text-xs text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Nieche Tiak. Все права строго защищены.
        </div>
      </footer>
    </div>
  );
}
