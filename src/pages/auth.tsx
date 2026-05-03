import { Link } from "react-router-dom";

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
  return (
    <div className="grid-container py-16 min-h-[70vh]">
       <h1 className="text-4xl tracking-widest mb-12 border-b border-black pb-6 uppercase">Личный пульт: <span className="font-light text-zinc-500">А. МЕРСЕР</span></h1>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="col-span-1 space-y-3 font-sans text-xs font-bold uppercase tracking-widest">
             <button className="w-full text-left p-4 md:p-5 border border-black bg-black text-white shadow-md">История и логи</button>
             <button className="w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-strict bg-white">Настройки профиля</button>
             <button className="w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-strict bg-white">Методы оплаты</button>
             <button className="w-full text-left p-4 md:p-5 border border-zinc-200 hover:text-red-500 transition-strict mt-12 bg-white font-medium">Прервать сессию (Выйти)</button>
          </div>

          {/* Main Panel */}
          <div className="col-span-1 md:col-span-2 space-y-12">
             
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
                   <button className="w-full sm:w-auto border border-black px-8 py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-black hover:text-white transition-strict whitespace-nowrap bg-white">
                      Модулировать
                   </button>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
