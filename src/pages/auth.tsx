import { Link, useNavigate } from "react-router-dom";
import { CreditCard, Plus, Trash2, ArrowLeft, Calendar, User, Clock, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Login() {
   return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
         <Card className="w-full max-w-md shadow-2xl p-4 md:p-8">
            <CardHeader className="border-b-0 pb-0 items-center text-center mb-10">
               <CardTitle>Вход в аккаунт</CardTitle>
               <CardDescription className="uppercase tracking-widest text-xs md:text-sm mt-2">Введите email и пароль, чтобы войти.</CardDescription>
            </CardHeader>
            <CardContent>
               <form className="space-y-6">
                  <div className="space-y-2 flex flex-col">
                     <Label>Email</Label>
                     <Input type="email" />
                  </div>
                  <div className="space-y-2 flex flex-col">
                     <div className="flex justify-between items-center">
                        <Label>Пароль</Label>
                        <a href="#" className="text-xs text-gold hover:underline">Забыли пароль?</a>
                     </div>
                     <Input type="password" />
                  </div>

                  <Button className="w-full mt-4">
                     Войти
                  </Button>
               </form>
            </CardContent>
            <CardFooter className="pt-8 border-t border-zinc-200 justify-center">
               <div className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">
                  Нет аккаунта? <Link to="/signup" className="text-black font-bold ml-2">Зарегистрироваться</Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}

export function Signup() {
   return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
         <Card className="w-full max-w-xl shadow-2xl p-4 md:p-8">
            <CardHeader className="border-b-0 pb-0 items-center text-center mb-10">
               <CardTitle>Регистрация</CardTitle>
               <CardDescription className="uppercase tracking-widest text-xs md:text-sm mt-2">Создайте аккаунт для бронирования и управления заказами.</CardDescription>
            </CardHeader>
            <CardContent>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2 flex flex-col">
                        <Label>Имя</Label>
                        <Input />
                     </div>
                     <div className="space-y-2 flex flex-col">
                        <Label>Фамилия</Label>
                        <Input />
                     </div>
                  </div>
                  <div className="space-y-2 flex flex-col">
                     <Label>Email</Label>
                     <Input type="email" />
                  </div>
                  <div className="space-y-2 flex flex-col">
                     <Label>Пароль</Label>
                     <Input type="password" />
                  </div>

                  <Button className="w-full mt-4">
                     Зарегистрироваться
                  </Button>
               </form>
            </CardContent>
            <CardFooter className="pt-8 border-t border-zinc-200 justify-center">
               <div className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">
                  Уже есть аккаунт? <Link to="/login" className="text-black font-bold ml-2">Войти</Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}

export function Account() {
   const navigate = useNavigate();
   return (
      <div className="grid-container py-16 min-h-[70vh]">
         <h1 className="text-4xl tracking-widest mb-12 border-b border-black pb-6 uppercase">Личный кабинет <span className="font-light text-zinc-500">Алексей Мерсер</span></h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="col-span-1 space-y-3 font-sans text-xs font-bold uppercase tracking-widest sticky top-24 h-fit">
               <a href="#history" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-all bg-white">Мои бронирования</a>
               <a href="#profile" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-all bg-white">Профиль</a>
               <a href="#payment" className="block w-full text-left p-4 md:p-5 border border-zinc-200 hover:border-black text-zinc-600 hover:text-black transition-all bg-white">Способы оплаты</a>
               <button className="w-full text-left p-4 md:p-5 border border-zinc-200 hover:text-red-500 transition-all mt-12 bg-white font-medium">Выйти</button>
            </div>

            {/* Main Panel */}
            <div className="col-span-1 md:col-span-2 space-y-24">
               
               <div id="history" className="space-y-12 scroll-mt-24">
                  {/* Loyalty Status */}
                  <div className="border border-black p-8 md:p-10 flex flex-col md:flex-row justify-between items-center bg-stone-light shadow-inner">
                     <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Уровень лояльности</h3>
                        <div className="text-2xl sm:text-3xl font-display font-bold tracking-[0.2em] text-gold drop-shadow-sm uppercase">Золотой уровень</div>
                     </div>
                     <div className="text-center md:text-right">
                        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Накопленные баллы</h3>
                        <div className="text-2xl sm:text-3xl tracking-widest font-mono text-black">14,200</div>
                     </div>
                  </div>

                  {/* Bookings */}
                  <div>
                     <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Предстоящие бронирования</h2>

                     <div className="border border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-center hover:border-black transition-all bg-white shadow-sm hover:shadow-md">
                        <div className="flex flex-col sm:flex-row items-center sm:gap-8 mb-6 sm:mb-0 w-full text-center sm:text-left">
                           <div className="bg-black text-white p-4 text-center aspect-square flex flex-col justify-center min-w-[80px] w-20 mb-4 sm:mb-0 mx-auto sm:mx-0 shadow-inner">
                              <span className="text-[10px] uppercase tracking-widest">Окт</span>
                              <span className="text-3xl font-bold font-sans">12</span>
                           </div>
                           <div>
                              <h4 className="font-bold tracking-widest uppercase mb-2 text-lg">Люкс</h4>
                              <p className="text-xs text-zinc-500 font-mono tracking-widest">Номер бронирования: #NT-88902A</p>
                           </div>
                        </div>
                        <Button 
                           variant="outline" 
                           onClick={() => navigate('/account/booking/NT-88902A')} 
                           className="w-full sm:w-auto px-8 py-3 whitespace-nowrap"
                        >
                           Изменить бронирование
                        </Button>
                     </div>
                  </div>
               </div>

               {/* Profile Settings */}
               <div id="profile" className="scroll-mt-24">
                  <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Настройки профиля</h2>
                  <form className="space-y-8 bg-white border border-zinc-200 p-8 shadow-sm">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2 flex flex-col">
                          <Label>Имя</Label>
                          <Input defaultValue="Алексей" />
                        </div>
                        <div className="space-y-2 flex flex-col">
                          <Label>Фамилия</Label>
                          <Input defaultValue="Мерсер" />
                        </div>
                     </div>
                     <div className="space-y-2 flex flex-col">
                       <Label>Email</Label>
                       <Input type="email" defaultValue="alex.mercer@example.com" />
                     </div>
                     <div className="space-y-2 flex flex-col">
                       <Label>Телефон</Label>
                       <Input type="tel" defaultValue="+7 (999) 123-45-67" />
                     </div>
                     <div className="pt-4">
                        <Button type="button">
                           Сохранить изменения
                        </Button>
                     </div>
                  </form>
               </div>

               {/* Payment Methods */}
               <div id="payment" className="scroll-mt-24">
                  <h2 className="text-xl tracking-widest border-b border-zinc-200 pb-4 mb-6 uppercase">Способы оплаты</h2>
                  
                  <div className="space-y-4 mb-8">
                     {/* Saved card 1 */}
                     <div className="border border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                           <div className="bg-stone-light p-3 border border-zinc-200">
                              <CreditCard className="w-6 h-6 text-black" />
                           </div>
                           <div>
                              <div className="flex items-center gap-3 mb-1">
                                 <h4 className="font-bold tracking-widest uppercase text-sm">Visa заканчивается на 4242</h4>
                                 <Badge>Основной</Badge>
                              </div>
                              <p className="text-xs text-zinc-500 font-mono tracking-widest">Истекает 12/28</p>
                           </div>
                        </div>
                        <button className="text-zinc-400 hover:text-red-500 transition-all p-2">
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
                        <button className="text-zinc-400 hover:text-red-500 transition-all p-2">
                           <Trash2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>

                  <Button variant="secondary" className="w-full flex items-center gap-3 border-dashed h-16 text-zinc-500">
                     <Plus className="w-5 h-5" />
                     Добавить карту
                  </Button>
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
            <ArrowLeft className="w-4 h-4" /> Назад в личный кабинет
         </button>
         
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-6 gap-4">
            <div>
               <h1 className="text-3xl md:text-4xl tracking-widest uppercase">Изменение бронирования</h1>
               <p className="text-zinc-500 mt-2 font-mono tracking-widest text-sm uppercase">Номер: #NT-88902A</p>
            </div>
            <Badge variant="default" className="gap-2 h-8 px-4 text-[10px]">
               <CheckCircle className="w-3 h-3 text-gold" /> Подтверждено
            </Badge>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               {/* Current Configuration */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Детали бронирования</h2>
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
                        <button className="text-xs text-gold uppercase tracking-widest font-bold mt-4 text-left hover:text-black transition-colors">Изменить</button>
                     </div>
                  </div>
               </section>
               
               {/* Services */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Дополнительные услуги</h2>
                  <div className="space-y-4">
                     <label className="flex items-start gap-4 p-6 border border-zinc-200 bg-white cursor-pointer hover:border-black transition-colors group">
                        <Checkbox className="mt-1" defaultChecked id="service-1" />
                        <div className="flex-1">
                           <Label htmlFor="service-1" className="text-sm cursor-pointer group-hover:text-black">Завтрак в номер</Label>
                           <span className="block text-xs font-light text-zinc-500 mt-2">Ежедневная подача завтрака в номер с 8:00.</span>
                        </div>
                        <div className="font-mono text-sm tracking-widest">+2 500 ₽/день</div>
                     </label>
                     <label className="flex items-start gap-4 p-6 border border-zinc-200 bg-white cursor-pointer hover:border-black transition-colors group">
                        <Checkbox className="mt-1" id="service-2" />
                        <div className="flex-1">
                           <Label htmlFor="service-2" className="text-sm cursor-pointer group-hover:text-black">SPA-зона</Label>
                           <span className="block text-xs font-light text-zinc-500 mt-2">Неограниченный доступ к бассейну и сауне на весь срок проживания.</span>
                        </div>
                        <div className="font-mono text-sm tracking-widest">+5 000 ₽/весь период</div>
                     </label>
                  </div>
               </section>

               {/* Special Requests */}
               <section>
                  <h2 className="text-xl tracking-widest uppercase border-b border-zinc-200 pb-4 mb-6">Особые запросы</h2>
                  <textarea className="w-full border border-zinc-200 p-6 font-sans outline-none text-sm focus:border-black transition-colors min-h-[150px] resize-y bg-stone-light focus:bg-white" placeholder="Например: поздний заезд, детская кроватка, питание без глютена…"></textarea>
                  <Button className="mt-4">Сохранить пожелания</Button>
               </section>

               {/* Danger Zone */}
               <section className="pt-12 border-t border-zinc-200 mt-12">
                  <Button variant="destructive" size="lg">
                     Отменить бронирование
                  </Button>
               </section>
            </div>

            {/* Receipt Summary Sidebar */}
            <div className="lg:col-span-1">
               <div className="border border-black p-8 bg-stone-light sticky top-24">
                  <h2 className="text-lg tracking-widest uppercase mb-6 font-bold text-center">Люкс</h2>
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" alt="Room" className="w-full h-40 object-cover mb-8 grayscale" />
                  
                  <div className="space-y-4 font-mono text-sm tracking-widest border-b border-zinc-300 pb-6 mb-6">
                     <div className="flex justify-between">
                        <span className="text-zinc-500 font-sans uppercase text-xs">Проживание</span>
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

                  <Button className="w-full">
                     Сохранить изменения
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
