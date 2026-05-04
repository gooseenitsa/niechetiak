import { Link, useNavigate } from "react-router-dom";
import { CreditCard, Plus, Trash2, ArrowLeft, Calendar, User, Clock, CheckCircle } from "lucide-react";

export function Login() {
   return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
         <div className="border border-black p-8 md:p-12 bg-white w-full max-w-md shadow-2xl">
            <h1 className="text-3xl tracking-widest text-center mb-2 uppercase">Доступ к сетке</h1>
            <p className="text-center font-light text-zinc-500 mb-10 text-xs md:text-sm uppercase tracking-widest">Введите учетные координаты.</p>

            <form className="space-y-6">
               <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Email</label>
                  <input type="email" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
               </div>
               <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 flex justify-between font-bold">
                     Пароль
                     <a href="#" className="text-gold hover:underline">Восстановить</a>
                  </label>
                  <input type="password" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
               </div>

               <button className="w-full bg-black text-white py-5 uppercase tracking-widest text-xs hover:bg-gold transition-strict font-bold pt-5 shadow-md">
                  Инициализировать сессию
               </button>
            </form>

            <div className="mt-10 pt-8 border-t border-zinc-200 text-center text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">
               Нет профиля? <Link to="/signup" className="text-black font-bold ml-2">Сформировать</Link>
            </div>
         </div>
      </div>
   );
}

export function Signup() {
   return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
         <div className="border border-black p-8 md:p-12 bg-white w-full max-w-xl shadow-2xl">
            <h1 className="text-3xl tracking-widest text-center mb-2 uppercase">Конструкт лояльности</h1>
            <p className="text-center font-light text-zinc-500 mb-10 text-xs md:text-sm uppercase tracking-widest">Создайте новый массив идентичности.</p>

            <form className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                     <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Имя</label>
                     <input className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                  </div>
                  <div className="flex flex-col">
                     <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Фамилия</label>
                     <input className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                  </div>
               </div>
               <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Email</label>
                  <input type="email" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
               </div>
               <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Ключ безопасности (Пароль)</label>
                  <input type="password" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
               </div>

               <button className="w-full bg-black text-white py-5 uppercase tracking-widest text-xs hover:bg-gold transition-strict font-bold shadow-md mt-4">
                  Создать профиль
               </button>
            </form>

            <div className="mt-10 pt-8 border-t border-zinc-200 text-center text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">
               Профиль существует? <Link to="/login" className="text-black font-bold ml-2">Войти</Link>
            </div>
         </div>
      </div>
   );
}

export function Account() {
   const navigate = useNavigate();
   return (
      <div className="grid-container py-16 min-h-[70vh]">
         <h1 className="text-4xl tracking-widest mb-12 border-b border-black pb-6 uppercase">Личный пульт: <span className="font-light text-zinc-500">А. МЕРСЕР</span></h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="col-span-1 space-y-3 font-sans text-xs font-bold uppercase tracking-widest sticky top-24 h-fit">
               <a href="#history" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-strict bg-white">История и логи</a>
               <a href="#profile" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-strict bg-white">Настройки профиля</a>
               <a href="#payment" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-strict bg-white">Методы оплаты</a>
               <button className="w-full text-left p-4 md:p-5 border border-zinc-200 hover:text-red-500 transition-strict mt-12 bg-white font-medium">Прервать сессию (Выйти)</button>
            </div>

            {/* Main Panel */}
            <div className="col-span-1 md:col-span-2 space-y-24">
               
               <div id="history" className="space-y-12 scroll-mt-24">
                  {/* Loyalty Status */}
                  <div className="border border-black p-8 md:p-10 flex flex-col md:flex-row justify-between items-center bg-stone-light shadow-inner">
                     <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Уровень лояльности</h3>
                        <div className="text-2xl sm:text-3xl font-display font-bold tracking-[0.2em] text-gold drop-shadow-sm uppercase">Золотая Ось</div>
                     </div>
                     <div className="text-center md:text-right">
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Накопленные баллы</h3>
                        <div className="text-2xl sm:text-3xl tracking-widest font-mono text-black">14,200</div>
                     </div>
                  </div>

                  {/* Bookings */}
                  <div>
                     <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Запланированные визиты</h2>

                     <div className="border border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-center hover:border-black transition-strict bg-white shadow-sm hover:shadow-md">
                        <div className="flex flex-col sm:flex-row items-center sm:gap-8 mb-6 sm:mb-0 w-full text-center sm:text-left">
                           <div className="bg-black text-white p-4 text-center aspect-square flex flex-col justify-center min-w-[80px] w-20 mb-4 sm:mb-0 mx-auto sm:mx-0 shadow-inner">
                              <span className="text-[10px] uppercase tracking-widest">Окт</span>
                              <span className="text-3xl font-bold font-sans">12</span>
                           </div>
                           <div>
                              <h4 className="font-bold tracking-widest uppercase mb-2 text-lg">Ось роскоши</h4>
                              <p className="text-xs text-zinc-500 font-mono tracking-widest">Подтверждение: #NT-88902A</p>
                           </div>
                        </div>
                        <button onClick={() => navigate('/account/booking/NT-88902A')} className="w-full sm:w-auto border border-black px-8 py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-black hover:text-white transition-strict whitespace-nowrap bg-white">
                           Модулировать
                        </button>
                     </div>
                  </div>
               </div>

               {/* Profile Settings */}
               <div id="profile" className="scroll-mt-24">
                  <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Настройки профиля</h2>
                  <form className="space-y-8 bg-white border border-zinc-200 p-8 shadow-sm">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Имя</label>
                          <input defaultValue="Алекс" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Фамилия</label>
                          <input defaultValue="Мерсер" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                        </div>
                     </div>
                     <div className="flex flex-col">
                       <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Email</label>
                       <input type="email" defaultValue="alex.mercer@example.com" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                     </div>
                     <div className="flex flex-col">
                       <label className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">Телефон</label>
                       <input type="tel" defaultValue="+7 (999) 123-45-67" className="p-4 border border-zinc-300 focus:border-black outline-none font-sans transition-colors bg-stone-light focus:bg-white" />
                     </div>
                     <div className="pt-4">
                        <button type="button" className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold transition-strict font-bold shadow-md">
                           Сохранить изменения
                        </button>
                     </div>
                  </form>
               </div>

               {/* Payment Methods */}
               <div id="payment" className="scroll-mt-24">
                  <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Методы оплаты</h2>
                  
                  <div className="space-y-4 mb-8">
                     {/* Saved card 1 */}
                     <div className="border border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                           <div className="bg-stone-light p-3 border border-zinc-200">
                              <CreditCard className="w-6 h-6 text-black" />
                           </div>
                           <div>
                              <h4 className="font-bold tracking-widest uppercase text-sm">Visa заканчивается на 4242</h4>
                              <p className="text-xs text-zinc-500 font-mono tracking-widest mt-1">Истекает 12/28 • Основной</p>
                           </div>
                        </div>
                        <button className="text-zinc-400 hover:text-red-500 transition-strict p-2">
                           <Trash2 className="w-5 h-5" />
                        </button>
                     </div>

                     {/* Saved card 2 */}
                     <div className="border border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                           <div className="bg-stone-light p-3 border border-zinc-200">
                              <CreditCard className="w-6 h-6 text-black" />
                           </div>
                           <div>
                              <h4 className="font-bold tracking-widest uppercase text-sm">Mastercard заканчивается на 5555</h4>
                              <p className="text-xs text-zinc-500 font-mono tracking-widest mt-1">Истекает 09/27</p>
                           </div>
                        </div>
                        <button className="text-zinc-400 hover:text-red-500 transition-strict p-2">
                           <Trash2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>

                  <button className="flex items-center gap-3 border border-dashed border-zinc-400 p-6 w-full justify-center text-zinc-500 hover:text-black hover:border-black transition-strict uppercase tracking-widest font-bold text-xs bg-stone-light hover:bg-white">
                     <Plus className="w-5 h-5" />
                     Добавить новый метод
                  </button>
               </div>

            </div>
         </div>
      </div>
   );
}

export function EditBooking() {
   const navigate = useNavigate();
   
   return (
      <div className="grid-container py-16 min-h-[80vh]">
         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors mb-12 text-zinc-500">
            <ArrowLeft className="w-4 h-4" /> Назад к профилю
         </button>
         
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-6 gap-4">
            <div>
               <h1 className="text-3xl md:text-4xl tracking-widest uppercase">Модуляция брони</h1>
               <p className="text-zinc-500 mt-2 font-mono tracking-widest text-sm uppercase">#NT-88902A</p>
            </div>
            <div className="bg-black text-white px-4 py-2 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
               <CheckCircle className="w-3 h-3 text-gold" /> Подтверждено
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               {/* Current Configuration */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Текущая конфигурация</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     <div className="border border-zinc-200 p-6 bg-white flex flex-col justify-center shadow-sm">
                        <Calendar className="w-6 h-6 mb-4 text-zinc-400" />
                        <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Даты</h3>
                        <p className="font-sans text-sm font-semibold">12 Окт - 15 Окт 2026</p>
                        <button className="text-xs text-gold uppercase tracking-widest font-bold mt-4 text-left hover:text-black transition-colors">Изменить</button>
                     </div>
                     <div className="border border-zinc-200 p-6 bg-white flex flex-col justify-center shadow-sm">
                        <User className="w-6 h-6 mb-4 text-zinc-400" />
                        <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Гости</h3>
                        <p className="font-sans text-sm font-semibold">2 Взрослых</p>
                        <button className="text-xs text-gold uppercase tracking-widest font-bold mt-4 text-left hover:text-black transition-colors">Изменить</button>
                     </div>
                     <div className="border border-zinc-200 p-6 bg-white flex flex-col justify-center shadow-sm">
                        <Clock className="w-6 h-6 mb-4 text-zinc-400" />
                        <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Заезд</h3>
                        <p className="font-sans text-sm font-semibold">14:00</p>
                        <button className="text-xs text-gold uppercase tracking-widest font-bold mt-4 text-left hover:text-black transition-colors">Опции</button>
                     </div>
                  </div>
               </section>
               
               {/* Services */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Дополнительные модули</h2>
                  <div className="space-y-4">
                     <label className="flex items-start gap-4 p-6 border border-zinc-200 bg-white cursor-pointer hover:border-black transition-colors">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-black text-black border-zinc-300 rounded-none focus:ring-black" defaultChecked />
                        <div className="flex-1">
                           <span className="block text-sm uppercase tracking-widest font-bold">Геометрический Завтрак</span>
                           <span className="block text-xs font-light text-zinc-500 mt-1">Ежедневная доставка в номер точно в 08:00.</span>
                        </div>
                        <div className="font-mono text-sm tracking-widest">+2 500 ₽/день</div>
                     </label>
                     <label className="flex items-start gap-4 p-6 border border-zinc-200 bg-white cursor-pointer hover:border-black transition-colors">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-black text-black border-zinc-300 rounded-none focus:ring-black" />
                        <div className="flex-1">
                           <span className="block text-sm uppercase tracking-widest font-bold">Доступ к Spa-структуре</span>
                           <span className="block text-xs font-light text-zinc-500 mt-1">Безлимитный доступ к термальным зонам.</span>
                        </div>
                        <div className="font-mono text-sm tracking-widest">+5 000 ₽/весь период</div>
                     </label>
                  </div>
               </section>

               {/* Special Requests */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Особые запросы</h2>
                  <textarea className="w-full border border-zinc-200 p-6 font-sans outline-none text-sm focus:border-black transition-colors min-h-[150px] resize-y bg-stone-light focus:bg-white" placeholder="Укажите любые структурные или диетические требования..."></textarea>
                  <button className="bg-black text-white px-8 py-4 uppercase text-xs tracking-widest font-bold mt-4 hover:bg-gold transition-colors">Сохранить комментарий</button>
               </section>

               {/* Danger Zone */}
               <section className="pt-12 border-t border-zinc-200 mt-12">
                  <button className="text-red-500 uppercase tracking-widest font-bold text-xs border border-red-500 px-8 py-4 hover:bg-red-500 hover:text-white transition-colors">Аннулировать бронирование</button>
               </section>
            </div>

            {/* Receipt Summary Sidebar */}
            <div className="lg:col-span-1">
               <div className="border border-black p-8 bg-stone-light sticky top-24">
                  <h2 className="text-lg tracking-widest uppercase mb-6 font-bold text-center">Ось роскоши</h2>
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" alt="Room" className="w-full h-40 object-cover mb-8 grayscale" />
                  
                  <div className="space-y-4 font-mono text-sm tracking-widest border-b border-zinc-300 pb-6 mb-6">
                     <div className="flex justify-between">
                        <span className="text-zinc-500 font-sans uppercase text-xs">Базовый тариф</span>
                        <span>45 000 ₽</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-zinc-500 font-sans uppercase text-xs">Завтрак (3 дня)</span>
                        <span>7 500 ₽</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-zinc-500 font-sans uppercase text-xs">Налог (НДС)</span>
                        <span>10 500 ₽</span>
                     </div>
                  </div>

                  <div className="flex justify-between font-bold text-lg tracking-widest mb-8">
                     <span className="uppercase text-sm mt-1">Итого</span>
                     <span className="font-mono">63 000 ₽</span>
                  </div>

                  <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors">
                     Обновить конфигурацию
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
