import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-zinc-900 border-b border-black flex flex-col justify-center items-center">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14b03cc?q=80&w=2000&auto=format&fit=crop" 
          alt="Nieche Tiak Facade" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-7xl tracking-[0.2em] mb-6 drop-shadow-lg uppercase px-4">Чистая структура.</h1>
          <p className="text-zinc-200 text-sm md:text-lg uppercase tracking-widest mb-12 max-w-xl font-light drop-shadow-md px-4">
            Бескомпромиссный отдых, определяемый чистой геометрией и безупречным сервисом.
          </p>
          <Link to="/booking" className="bg-white text-black px-12 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-gold hover:text-white transition-strict border border-transparent hover:border-gold">
            Забронировать номер
          </Link>
        </div>
        
        {/* Booking Widget (Quick Search) */}
        <div className="absolute -bottom-24 md:-bottom-16 w-full max-w-5xl mx-auto px-4 z-20">
          <div className="bg-white border border-black shadow-[0px_20px_40px_rgba(0,0,0,0.1)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-zinc-200 pb-4 md:pb-0 md:pr-4">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Заезд</label>
              <input type="date" className="p-2 border border-zinc-300 focus:border-black outline-none font-sans cursor-pointer text-sm" />
            </div>
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-zinc-200 pb-4 md:pb-0 md:px-4">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Выезд</label>
              <input type="date" className="p-2 border border-zinc-300 focus:border-black outline-none font-sans cursor-pointer text-sm" />
            </div>
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-zinc-200 pb-4 md:pb-0 md:px-4">
              <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Гости</label>
              <select className="p-2 border border-zinc-300 focus:border-black outline-none font-sans bg-transparent cursor-pointer text-sm">
                <option>1 Взрослый</option>
                <option>2 Взрослых</option>
                <option>2 Взрослых, 1 Ребенок</option>
                <option>Семейное размещение</option>
              </select>
            </div>
            <div className="flex items-end mt-2 md:mt-0">
              <button className="w-full bg-black text-white py-3 uppercase text-sm tracking-widest hover:bg-gold transition-strict h-[42px]">
                Найти
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for widget */}
      <div className="h-40 md:h-32"></div>

      {/* Categories Block */}
      <section className="grid-container py-16 text-center">
        <h2 className="text-3xl mb-12 tracking-widest uppercase">Наши номера</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Стандарт", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop" },
            { name: "Семейный", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop" },
            { name: "Люкс", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" }
          ].map((room, i) => (
            <div key={i} className="group relative outline outline-1 outline-zinc-200 overflow-hidden">
               <img src={room.image} alt={room.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-strict duration-700" />
               <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                 <h3 className="text-white text-xl tracking-widest uppercase">{room.name}</h3>
                 <Link to={`/rooms`} className="text-gold text-xs uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-strict delay-100 flex items-center justify-center gap-2">
                   Посмотреть детали <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                 </Link>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/rooms" className="px-8 py-4 border border-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-strict inline-block">
             Все категории
          </Link>
        </div>
      </section>

      {/* Brief About / Services Teaser */}
      <section className="bg-stone-light border-y border-zinc-200 py-24">
        <div className="grid-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px] border border-black p-4">
             <img src="https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=800&auto=format&fit=crop" alt="Services" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Философия</span>
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-widest leading-tight uppercase">Высокий уровень <br/>через строгий порядок</h2>
            <p className="text-zinc-600 font-light mb-8 leading-relaxed">
              Каждый угол в Nieche Tiak рассчитан так, чтобы дарить покой. Мы верим, что симметричное окружение культивирует ментальное спокойствие. От наших выверенных гастрономических впечатлений до структурированной безмятежности нашей Spa-зоны — совершенство является нашей основой.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-0 mb-10 w-full text-xs lg:text-sm font-medium uppercase tracking-widest border-l-2 border-gold pl-6">
               <div>Изысканная кухня</div>
               <div>Минималистичный Spa</div>
               <div>Геометричный бассейн</div>
               <div>Конференц-залы</div>
            </div>
            <Link to="/services" className="px-8 py-4 bg-black text-white hover:bg-zinc-800 uppercase text-sm tracking-widest transition-strict text-center w-full sm:w-auto">
              Подробнее об услугах
            </Link>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="grid-container py-24 text-center">
        <h2 className="text-3xl mb-16 tracking-widest uppercase">Отзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: "А. Мерсер", text: "Архитектурная чистота не имеет себе равных. Безупречный отдых." },
             { name: "Дж. Вэнс", text: "Каждая деталь математически совершенна, в сочетании с теплым и точным сервисом." },
             { name: "Э. Руссо", text: "Храм модернизма. Я никогда не чувствовал себя таким собранным и расслабленным." }
           ].map((r, i) => (
             <div key={i} className="border border-zinc-200 p-8 lg:p-10 flex flex-col items-center">
               <div className="flex gap-1 text-gold mb-6">
                 {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
               </div>
               <p className="font-light italic text-zinc-600 mb-8">"{r.text}"</p>
               <span className="uppercase text-xs tracking-widest font-bold border-b border-black pb-1">{r.name}</span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}

export function About() {
  return (
    <div className="py-16 grid-container text-center max-w-4xl px-4">
      <h1 className="text-4xl tracking-widest mb-8 uppercase">О нас</h1>
      <p className="mb-6 font-light leading-relaxed text-zinc-600">
        Отель Nieche Tiak был основан на философии, согласно которой пространственная чистота диктует возвышенный опыт. 
        Построенное в 2024 году, наше здание является данью уважения минималистичному модернистскому движению, отвергая все ненужные украшения, чтобы обеспечить отдых, ориентированный исключительно на форму, функцию и безупречный сервис.
      </p>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
         <div className="border border-zinc-200 p-8 space-y-4">
           <h3 className="tracking-widest uppercase font-bold text-sm">Наша концепция</h3>
           <p className="font-light text-sm text-zinc-600 leading-relaxed">Каждая комната спроектирована на основе идеальной сетки, обеспечивающей симметричные линии обзора, которые подсознательно снижают стресс.</p>
         </div>
         <div className="border border-zinc-200 p-8 space-y-4">
           <h3 className="tracking-widest uppercase font-bold text-sm">Наш сервис</h3>
           <p className="font-light text-sm text-zinc-600 leading-relaxed">Предсказуемо, точно и ненавязчиво. Мы предоставляем именно то, что вам нужно, геометрически согласовываясь с вашим графиком.</p>
         </div>
      </div>
      
      <div className="border-t border-black pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
         <div>
           <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop" alt="About architecture" className="w-full grayscale border border-black p-2" />
         </div>
         <div className="space-y-6">
            <h2 className="text-2xl tracking-widest uppercase mb-4">Контактная информация</h2>
            <div className="space-y-3 uppercase text-xs tracking-widest text-zinc-600">
               <p><strong className="text-black">Адрес:</strong> 100 Symmetry Avenue, Geometria</p>
               <p><strong className="text-black">Телефон:</strong> +1 800 555 0199</p>
               <p><strong className="text-black">Email:</strong> info@niechetiak.com</p>
            </div>
            <form className="space-y-4 mt-8 pt-8 border-t border-zinc-200 flex flex-col">
               <input className="w-full border border-black p-3 font-sans outline-none text-sm focus:border-gold transition-colors" placeholder="ВАШЕ ИМЯ" />
               <input className="w-full border border-black p-3 font-sans outline-none text-sm focus:border-gold transition-colors" placeholder="ВАШ EMAIL" />
               <textarea className="w-full border border-black p-3 font-sans outline-none text-sm focus:border-gold min-h-[120px] resize-y transition-colors" placeholder="СООБЩЕНИЕ"></textarea>
               <button className="bg-black text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-gold transition-strict font-semibold">Отправить форму</button>
            </form>
         </div>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-display tracking-widest text-zinc-200 mb-4 select-none">404</h1>
      <h2 className="text-2xl lg:text-3xl uppercase tracking-widest mb-6">Структурная аномалия</h2>
      <p className="text-zinc-500 font-light mb-12 max-w-sm">
        Координата, к которой вы пытаетесь получить доступ, не существует в нашей текущей архитектурной сетке.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link to="/" className="w-full sm:w-auto border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-strict font-semibold">
          На главную
        </Link>
        <Link to="/rooms" className="w-full sm:w-auto bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold transition-strict font-semibold">
          В каталог
        </Link>
      </div>
    </div>
  );
}
