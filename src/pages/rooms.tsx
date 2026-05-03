import { Link } from "react-router-dom";
import { Coffee, Monitor, Wifi, Wind } from "lucide-react";

const mockRooms = [
  { id: "1", type: "Стандартный номер", price: 250, size: 30, guests: 2, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop" },
  { id: "2", type: "Семейный массив", price: 450, size: 55, guests: 4, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop" },
  { id: "3", type: "Ось роскоши (Люкс)", price: 800, size: 90, guests: 2, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" },
  { id: "4", type: "Представительский грид", price: 350, size: 40, guests: 2, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop" },
  { id: "5", type: "Панорамный квадрат", price: 600, size: 70, guests: 3, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop" },
];

export function Rooms() {
  return (
    <div className="grid-container py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-200 pb-8">
        <div>
          <h1 className="text-4xl tracking-widest mb-4 uppercase">Каталог номеров</h1>
          <p className="text-zinc-500 font-light text-sm md:text-base">Исследуйте наши идеально пропорциональные жилые пространства.</p>
        </div>
        <div className="flex items-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
          <span className="text-xs uppercase tracking-widest text-zinc-400 whitespace-nowrap">Фильтр:</span>
          <select className="border border-black p-3 text-xs uppercase tracking-widest outline-none bg-transparent w-full md:w-auto cursor-pointer focus:border-gold transition-colors">
            <option>Все категории</option>
            <option>Стандарт</option>
            <option>Семейные</option>
            <option>Люкс</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {mockRooms.map((room) => (
          <div key={room.id} className="border border-zinc-200 flex flex-col group relative shadow-sm hover:shadow-md transition-shadow">
            <div className="overflow-hidden h-64 border-b border-zinc-200">
              <img src={room.image} alt={room.type} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-strict duration-700 transform group-hover:scale-105" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg md:text-xl tracking-widest uppercase">{room.type}</h3>
                <span className="text-gold font-semibold tracking-widest flex flex-col items-end leading-none">
                  ${room.price} 
                  <span className="text-zinc-400 text-[10px] font-normal mt-1 uppercase">/ НОЧЬ</span>
                </span>
              </div>
              <div className="flex gap-4 md:gap-6 mb-8 text-[10px] md:text-xs font-medium uppercase tracking-widest text-zinc-500 border-l-2 border-zinc-300 pl-4">
                <span>{room.size} КВ.М</span>
                <span>ДО {room.guests} ГОСТЕЙ</span>
              </div>
              <p className="font-light text-sm text-zinc-600 mb-8 line-clamp-3 leading-relaxed">
                Тщательно продуманная пространственная организация, обеспечивающая комфорт без визуального шума. Включает геометричную мебель и нейтральные тона.
              </p>
              <div className="mt-auto grid grid-cols-2 gap-4">
                <Link to={`/rooms/${room.id}`} className="bg-white border border-black text-black px-4 py-4 uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-strict text-center font-bold">
                  Детали
                </Link>
                <Link to={`/booking?room=${room.id}`} className="bg-black border border-black text-white px-4 py-4 uppercase tracking-widest text-[10px] hover:bg-gold hover:border-gold transition-strict text-center font-bold shadow-sm">
                  Бронь
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoomDetail() {
  return (
    <div className="grid-container py-16">
      <Link to="/rooms" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-black transition-strict flex items-center gap-2 mb-8 inline-flex">
        <span>&larr;</span> Назад в каталог
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Gallery Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
           <div className="w-full h-[40vh] md:h-[50vh] bg-zinc-100 border border-black overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-strict duration-700 cursor-zoom-in" alt="Room Main" />
           </div>
           <div className="grid grid-cols-3 gap-2 md:gap-4">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" className="border border-zinc-200 h-24 md:h-32 w-full object-cover grayscale hover:grayscale-0 cursor-pointer transition-strict" alt="Detail 1" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop" className="border border-zinc-200 h-24 md:h-32 w-full object-cover grayscale hover:grayscale-0 cursor-pointer transition-strict" alt="Detail 2" />
              <img src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=400&auto=format&fit=crop" className="border border-zinc-200 h-24 md:h-32 w-full object-cover grayscale hover:grayscale-0 cursor-pointer transition-strict" alt="Detail 3" />
           </div>
        </div>

        {/* Info Column */}
        <div className="w-full lg:w-1/3 flex flex-col">
           <h1 className="text-3xl tracking-widest mb-2 uppercase">Ось роскоши (Люкс)</h1>
           <p className="text-3xl text-gold font-sans font-light mb-8">$800 <span className="text-sm text-zinc-400 font-sans tracking-widest uppercase">/ ночь</span></p>
           
           <div className="border-y border-zinc-200 py-6 mb-8 grid grid-cols-2 gap-y-6 gap-x-2 text-xs font-semibold tracking-widest uppercase items-center">
              <div><span className="block text-[10px] text-zinc-400 font-light mb-1">Площадь</span> 90 КВ.М</div>
              <div><span className="block text-[10px] text-zinc-400 font-light mb-1">Вместимость</span> 2 ГОСТЯ</div>
              <div><span className="block text-[10px] text-zinc-400 font-light mb-1">Кровать</span> 1 KING</div>
              <div><span className="block text-[10px] text-zinc-400 font-light mb-1">Вид</span> ГОРОД</div>
           </div>

           <p className="text-zinc-600 font-light leading-relaxed mb-10 text-sm">
             Наша наиболее выверенная пространственная компоновка. Люкс предлагает панорамные виды, жесткие архитектурные границы и монолитную кровать, структурированную для оптимального выравнивания позвоночника и глубокого отдыха.
           </p>

           <div className="mb-12">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 border-b border-zinc-200 pb-2">Удобства</h4>
              <ul className="space-y-4">
                 <li className="flex items-center gap-4 text-sm text-zinc-600 font-light"><Wifi className="w-4 h-4 text-black" /> Структурированный Wi-Fi</li>
                 <li className="flex items-center gap-4 text-sm text-zinc-600 font-light"><Wind className="w-4 h-4 text-black" /> Точный климат-контроль</li>
                 <li className="flex items-center gap-4 text-sm text-zinc-600 font-light"><Coffee className="w-4 h-4 text-black" /> Крафтовый мини-бар</li>
                 <li className="flex items-center gap-4 text-sm text-zinc-600 font-light"><Monitor className="w-4 h-4 text-black" /> Встроенный Smart TV</li>
              </ul>
           </div>

           <Link to="/booking?room=3" className="w-full bg-black text-white text-center py-5 uppercase tracking-widest hover:bg-gold transition-strict font-bold text-xs shadow-lg mt-auto">
              Забронировать геометрию
           </Link>
        </div>
      </div>
    </div>
  );
}

export function Booking() {
  return (
    <div className="grid-container py-16 flex flex-col items-center">
       <div className="w-full max-w-5xl">
         <h1 className="text-3xl tracking-widest text-center mb-6 uppercase">Оформление бронирования</h1>
         <div className="flex justify-center items-center gap-2 md:gap-4 mb-16 text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-400">
            <span className="text-black">1. Даты</span>
            <span className="border-t border-zinc-300 w-4 md:w-8"></span>
            <span className="text-black">2. Гость</span>
            <span className="border-t border-zinc-300 w-4 md:w-8"></span>
            <span>3. Оплата</span>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-1 lg:col-span-2 flex flex-col space-y-12">
               {/* Details Form */}
               <section>
                 <h2 className="text-sm tracking-widest uppercase border-b border-black pb-4 mb-8 font-bold">Информация о госте</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Имя</label>
                      <input className="p-4 border border-zinc-300 outline-none focus:border-black font-sans transition-colors bg-white text-sm" placeholder="Иван" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Фамилия</label>
                      <input className="p-4 border border-zinc-300 outline-none focus:border-black font-sans transition-colors bg-white text-sm" placeholder="Иванов" />
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Адрес</label>
                      <input type="email" className="p-4 border border-zinc-300 outline-none focus:border-black font-sans transition-colors bg-white text-sm" placeholder="email@example.com" />
                    </div>
                 </div>
               </section>

               {/* Services Form */}
               <section>
                 <h2 className="text-sm tracking-widest uppercase border-b border-black pb-4 mb-8 font-bold">Дополнительные услуги</h2>
                 <div className="space-y-4">
                    <label className="flex items-center justify-between p-6 border border-zinc-200 cursor-pointer hover:border-black transition-strict bg-white shadow-sm">
                       <div className="flex items-center gap-4">
                          <input type="checkbox" className="w-5 h-5 accent-black cursor-pointer" />
                          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">Завтрак (по форме)</span>
                       </div>
                       <span className="text-gold font-mono text-sm">+$35 <span className="text-xs text-zinc-400">/ ДЕНЬ</span></span>
                    </label>
                    <label className="flex items-center justify-between p-6 border border-zinc-200 cursor-pointer hover:border-black transition-strict bg-white shadow-sm">
                       <div className="flex items-center gap-4">
                          <input type="checkbox" className="w-5 h-5 accent-black cursor-pointer" />
                          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">Трансфер (Ось Аэропорт)</span>
                       </div>
                       <span className="text-gold font-mono text-sm">+$80 <span className="text-xs text-zinc-400">РАЗОВО</span></span>
                    </label>
                 </div>
               </section>
            </div>

            {/* Summary Sidebar */}
            <div className="col-span-1 lg:col-span-1 border border-black bg-stone-light p-6 md:p-8 h-fit lg:sticky lg:top-24 shadow-md">
               <h3 className="tracking-widest uppercase text-center border-b border-zinc-300 pb-4 mb-6 text-sm font-bold">Итоговый расчет</h3>
               
               <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold uppercase tracking-widest text-sm">Ось роскоши</span>
                  <button className="text-[10px] text-zinc-500 underline uppercase tracking-widest hover:text-black">Изменить</button>
               </div>
               
               <div className="space-y-3 mb-8 text-xs text-zinc-600 font-sans border-b border-zinc-200 pb-8">
                  <div className="flex justify-between">
                     <span className="uppercase tracking-widest text-[10px] text-zinc-400">Заезд:</span>
                     <span className="font-semibold text-black">12 Октября, 2026</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="uppercase tracking-widest text-[10px] text-zinc-400">Выезд:</span>
                     <span className="font-semibold text-black">15 Октября, 2026</span>
                  </div>
                  <div className="flex justify-between pt-2">
                     <span className="uppercase tracking-widest text-[10px] text-zinc-400">Длительность:</span>
                     <span className="font-semibold text-black">3 Ночи</span>
                  </div>
               </div>

               <div className="space-y-4 mb-8 text-sm font-sans">
                  <div className="flex justify-between font-light">
                     <span className="text-zinc-600">Стоимость (x3)</span>
                     <span className="font-mono text-black">$2,400</span>
                  </div>
                  <div className="flex justify-between font-light">
                     <span className="text-zinc-600">Налоги (12%)</span>
                     <span className="font-mono text-black">$288</span>
                  </div>
                  <div className="flex justify-between text-lg md:text-xl font-bold border-t border-black pt-6 mt-4 items-center">
                     <span className="tracking-widest uppercase text-sm">Итого</span>
                     <span className="text-gold font-mono">$2,688</span>
                  </div>
               </div>

               <button className="w-full bg-black text-white py-4 md:py-5 uppercase tracking-widest hover:bg-gold transition-strict text-xs font-bold shadow-lg mt-4">
                  Подтвердить
               </button>
            </div>
         </div>
       </div>
    </div>
  );
}
