export function Services() {
  const facilities = [
    { name: "Симметричная кухня", desc: "Наш ресторан относится к гастрономии как к геометрии.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
    { name: "Структура Spa", desc: "Термальные ванны, встроенные в монолитные каменные ниши.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" },
    { name: "Линейный фитнес", desc: "Гребные и силовые тренажеры в кубе со стеклянными стенами.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
    { name: "Сетки конференций", desc: "Звуконепроницаемые залы заседаний с идеальной акустикой.", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="grid-container py-16">
      <h1 className="text-4xl tracking-widest text-center mb-16 uppercase">Услуги и объекты</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 border-t border-black pt-8">
        {facilities.map((fac, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-col-reverse' : ''} mb-16 lg:mb-0 group`}>
             <div className="overflow-hidden border border-black p-2 bg-white">
               <img src={fac.img} alt={fac.name} className="w-full h-[400px] object-cover grayscale transition-strict duration-700 hover:grayscale-0 hover:scale-105" />
             </div>
             <div className={`p-8 text-center bg-stone-light border border-zinc-200 ${idx % 2 !== 0 ? 'border-b-0 pb-12 pt-8' : 'border-t-0 pt-12 pb-8'}`}>
               <h3 className="text-xl md:text-2xl tracking-widest mb-4 uppercase">{fac.name}</h3>
               <p className="font-light text-zinc-600 max-w-sm mx-auto text-sm md:text-base leading-relaxed">{fac.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", category: "Экстерьер", span: "md:col-span-2 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1542314831-c6a4d14b03cc", category: "Интерьеры", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", category: "Интерьеры", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", category: "Детали", span: "md:col-span-1 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874", category: "Интерьеры", span: "md:col-span-2 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427", category: "Интерьеры", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", category: "Экстерьер", span: "md:col-span-2 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304", category: "Детали", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f", category: "Интерьеры", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6", category: "Детали", span: "md:col-span-2 md:row-span-1" }
  ];

  return (
    <div className="grid-container py-16">
       <h1 className="text-4xl tracking-widest text-center mb-6 uppercase">Визуальные записи</h1>
       <p className="text-center font-light text-zinc-500 mb-12 text-sm md:text-base">Архитектурная чистота и симметрия в каждой детали.</p>
       
       <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          <button className="border border-black px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-widest bg-black text-white font-semibold">Все</button>
          <button className="border border-black px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-zinc-100 transition-colors bg-white">Экстерьер</button>
          <button className="border border-black px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-zinc-100 transition-colors bg-white">Интерьеры</button>
          <button className="border border-black px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-zinc-100 transition-colors bg-white">Детали</button>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
             <div key={i} className={`overflow-hidden bg-zinc-100 group border border-zinc-200 relative ${img.span}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 z-10 transition-colors duration-500"></div>
                <img src={`${img.url}?q=80&w=800&auto=format&fit=crop`} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 cursor-pointer" />
                <div className="absolute bottom-0 left-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">{img.category}</span>
                </div>
             </div>
          ))}
       </div>
       
       <div className="mt-16 flex justify-center">
          <button className="border border-black px-8 py-4 uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-strict">Загрузить еще</button>
       </div>
    </div>
  );
}

export function Offers() {
  return (
    <div className="grid-container py-16">
       <h1 className="text-4xl tracking-widest text-center mb-4 uppercase">Специальные структуры</h1>
       <p className="text-center font-light text-zinc-500 mb-16 text-sm md:text-base">Эксклюзивные предложения для наших взыскательных гостей.</p>

       <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {[
            { tag: "Сезонное", title: "Осенняя симметрия", desc: "Скидка 20% на все выравнивания форм во время равноденствия. Включает геометрический завтрак.", btn: "Применить" },
            { tag: "Длительное", title: "7-Дневная Ось", desc: "Оставайтесь семь дней подряд для достижения идеальной рутины. Включает доступ к структуре Spa.", btn: "Забронировать Ось" },
          ].map((offer, i) => (
            <div key={i} className="border border-black flex flex-col sm:flex-row relative bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full sm:w-1/3 min-h-[150px] sm:min-h-full bg-zinc-800 border-b sm:border-b-0 sm:border-r border-black flex items-center justify-center p-8 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20 mix-blend-overlay"></div>
                 <h2 className="text-white text-3xl font-display tracking-widest transform sm:-rotate-90 whitespace-nowrap text-center z-10 uppercase drop-shadow-md">{offer.tag}</h2>
              </div>
              <div className="w-full sm:w-2/3 p-8 md:p-12 flex flex-col justify-center items-start">
                 <h3 className="text-xl md:text-2xl uppercase tracking-widest mb-4 font-bold">{offer.title}</h3>
                 <p className="font-light text-zinc-600 mb-8 text-sm md:text-base leading-relaxed">{offer.desc}</p>
                 <button className="border border-black px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-strict">
                   {offer.btn}
                 </button>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
}

export function Dining() {
  const menu = [
    { name: "Сферический Тартар", desc: "Идеальная сфера из свежайшего тунца с эмульсией.", price: "2 400 ₽" },
    { name: "Кубический Стейк", desc: "Говядина су-вид, нарезанная точными кубами, с линейным пюре.", price: "4 200 ₽" },
    { name: "Линейный Десерт", desc: "Шоколадный ганаш в форме идеального параллелепипеда.", price: "1 100 ₽" },
  ];

  return (
    <div className="grid-container py-16">
      <h1 className="text-4xl tracking-widest text-center mb-6 uppercase">Гастрономическая Геометрия</h1>
      <p className="text-center font-light text-zinc-500 mb-16 max-w-2xl mx-auto text-sm md:text-base">Наш ресторан возводит кулинарию в ранг точной науки. Форма и содержание находятся в идеальном балансе.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="border border-black p-2 bg-white">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" alt="Restaurant interior" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-strict duration-700" />
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl tracking-widest uppercase border-b border-black pb-4">Меню</h2>
          <div className="space-y-6">
            {menu.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-zinc-200 pb-6 group hover:border-black transition-colors">
                <div className="mb-2 sm:mb-0 max-w-md">
                  <h3 className="text-lg tracking-widest uppercase font-bold mb-1 group-hover:text-gold transition-colors">{item.name}</h3>
                  <p className="text-sm font-light text-zinc-500">{item.desc}</p>
                </div>
                <div className="font-mono text-lg tracking-widest text-black">{item.price}</div>
              </div>
            ))}
          </div>
          <button className="bg-black text-white px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-gold transition-strict mt-4">
            Резерв стола
          </button>
        </div>
      </div>
    </div>
  );
}
