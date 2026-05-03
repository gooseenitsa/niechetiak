export function UIKit() {
  return (
    <div className="grid-container py-16">
      <h1 className="text-4xl tracking-widest mb-4 uppercase">UI Kit & Дизайн Система</h1>
      <p className="text-zinc-500 font-light mb-16 text-sm uppercase tracking-widest">Библиотека компонентов для Figma (Стиль Модерн)</p>
      
      {/* Colors */}
      <section className="mb-24">
         <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Цвета / Палитра</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
               <div className="h-32 bg-black border border-black mb-4 shadow-sm"></div>
               <span className="font-bold uppercase tracking-widest text-xs">Graphite Black</span>
               <span className="font-mono text-[10px] text-zinc-500 mt-1">HEX: #000000 / #2D2D2D</span>
            </div>
            <div className="flex flex-col">
               <div className="h-32 bg-white border border-zinc-200 mb-4 shadow-sm"></div>
               <span className="font-bold uppercase tracking-widest text-xs">Pure White</span>
               <span className="font-mono text-[10px] text-zinc-500 mt-1">HEX: #FFFFFF</span>
            </div>
             <div className="flex flex-col">
               <div className="h-32 bg-stone-light border border-zinc-200 mb-4 shadow-sm"></div>
               <span className="font-bold uppercase tracking-widest text-xs">Stone Light</span>
               <span className="font-mono text-[10px] text-zinc-500 mt-1">HEX: #F5F5F5</span>
            </div>
            <div className="flex flex-col">
               <div className="h-32 bg-gold border border-gold mb-4 shadow-sm"></div>
               <span className="font-bold uppercase tracking-widest text-xs">Accent Gold</span>
               <span className="font-mono text-[10px] text-zinc-500 mt-1">HEX: #D4AF37</span>
            </div>
         </div>
      </section>

      {/* Typography */}
      <section className="mb-24">
         <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Типографика</h2>
         <div className="space-y-12">
            <div className="border-l-2 border-black pl-6">
               <h1 className="text-5xl md:text-7xl tracking-[0.2em] mb-4 uppercase text-black font-display font-bold">H1 Display</h1>
               <p className="font-mono text-[10px] text-zinc-500 bg-stone-light p-2 inline-block border border-zinc-200">
                 Font-family: Space Grotesk | Weight: Bold (700) | Letter-spacing: 0.2em | Text-transform: uppercase
               </p>
            </div>
            <div className="border-l-2 border-zinc-300 pl-6">
               <h2 className="text-3xl md:text-4xl tracking-widest mb-4 uppercase text-black font-display font-semibold">H2 Section Title</h2>
               <p className="font-mono text-[10px] text-zinc-500 bg-stone-light p-2 inline-block border border-zinc-200">
                 Font-family: Space Grotesk | Weight: SemiBold (600) | Letter-spacing: 0.1em (widest) | Text-transform: uppercase
               </p>
            </div>
             <div className="border-l-2 border-zinc-300 pl-6">
               <h3 className="text-xl md:text-2xl tracking-widest mb-4 uppercase text-black font-display font-medium">H3 Card/Block Title</h3>
               <p className="font-mono text-[10px] text-zinc-500 bg-stone-light p-2 inline-block border border-zinc-200">
                 Font-family: Space Grotesk | Weight: Medium (500) | Letter-spacing: 0.1em (widest) | Text-transform: uppercase
               </p>
            </div>
            <div className="border-l-2 border-zinc-300 pl-6">
               <p className="text-zinc-600 font-light leading-relaxed max-w-2xl text-sm md:text-base mb-4 font-sans">
                  Основной абзац. Inter, Light (300). Используется для больших объемов текста. Модернистский подход требует большого "воздуха" между строками (line-height: relaxed) и легкого начертания для чистоты формы. Выравнивание строго по левому краю или центрировано при абсолютной симметрии.
               </p>
               <p className="font-mono text-[10px] text-zinc-500 bg-stone-light p-2 inline-block border border-zinc-200">
                 Font-family: Inter | Weight: Light (300) / Regular (400) | Line-height: 1.625 (relaxed) | Color: #52525B
               </p>
            </div>
            <div className="border-l-2 border-zinc-300 pl-6 space-y-4">
               <div>
                 <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans">Small Label / Navigation Links</span>
               </div>
               <p className="font-mono text-[10px] text-zinc-500 bg-stone-light p-2 inline-block border border-zinc-200">
                 Font-family: Inter | Weight: Bold (700) | Size: 10px-12px | Letter-spacing: 0.1em (widest) | Text-transform: uppercase | Color: #A1A1AA / #000000
               </p>
            </div>
         </div>
      </section>

      {/* Inputs & Buttons */}
      <section className="mb-24">
         <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Интерфейсные элементы</h2>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
               <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-6">Кнопки (Buttons)</h3>
               
               <div className="space-y-4 p-6 bg-stone-light border border-zinc-200">
                 <button className="w-full bg-black text-white px-8 py-5 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-strict shadow-md">
                    Primary Action (Главная)
                 </button>
                 <p className="font-mono text-[10px] text-zinc-500 leading-tight">
                    Background: Black (#000000)<br/> Text: White (#FFFFFF) / 12px / Bold / Uppercase<br/> Padding: 20px Vert, 32px Horz<br/> Hover: Yellow Gold (#D4AF37)<br/> Border-radius: 0px (Strict shape)
                 </p>
               </div>

               <div className="space-y-4 p-6 bg-white border border-zinc-200">
                 <button className="w-full bg-white border border-black text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-strict">
                    Secondary Action (Вторичная)
                 </button>
                 <p className="font-mono text-[10px] text-zinc-500 leading-tight">
                    Background: White (#FFFFFF)<br/> Border: 1px Solid Black<br/> Text: Black (#000000) / 12px / Bold / Uppercase<br/> Padding: 16px Vert, 32px Horz<br/> Hover: Invert colors
                 </p>
               </div>

               <div className="space-y-4 p-6 bg-stone-light border border-zinc-200">
                 <a href="#" className="text-gold font-bold hover:underline text-xs uppercase tracking-widest inline-block transition-colors hover:text-black">
                    Текстовая ссылка (Text Link) &rarr;
                 </a>
                 <div className="block mt-2">
                   <p className="font-mono text-[10px] text-zinc-500 leading-tight">
                      Color: #D4AF37<br/> Style: Underline on hover / Arrow icon
                   </p>
                 </div>
               </div>
            </div>

            <div className="space-y-12">
               <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-6">Поля ввода (Inputs)</h3>
               
               <div className="flex flex-col p-6 bg-white border border-zinc-200">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-bold">Standard Text Input</label>
                  <input className="p-4 border border-zinc-300 outline-none focus:border-black font-sans bg-stone-light focus:bg-white transition-colors text-sm" placeholder="Плейсхолдер текстового поля" />
                  <p className="font-mono text-[10px] text-zinc-500 leading-tight mt-4">
                     Label: 10px / Bold / Uppercase / #71717A<br/> Input Box: #F5F5F5 / Border 1px #D4D4D8<br/> Focus State: Bg White / Border Black
                  </p>
               </div>

               <div className="flex flex-col p-6 bg-white border border-zinc-200">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-bold">Dropdown Selection</label>
                  <select className="p-4 border border-zinc-300 outline-none focus:border-black font-sans bg-stone-light focus:bg-white transition-colors text-sm cursor-pointer">
                     <option>Параметр 1</option>
                     <option>Параметр 2</option>
                  </select>
               </div>

               <div className="p-6 bg-white border border-zinc-200 space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-bold block">Interactive Checkbox / Selector</label>
                  <label className="flex items-center justify-between p-5 border border-zinc-200 cursor-pointer hover:border-black transition-strict bg-white shadow-sm hover:shadow-md">
                     <div className="flex items-center gap-4">
                        <input type="checkbox" className="w-5 h-5 accent-black cursor-pointer" />
                        <span className="text-xs font-bold tracking-widest uppercase">Чекбокс элемент</span>
                     </div>
                     <span className="text-gold font-mono text-xs">ИНФО</span>
                  </label>
               </div>
            </div>
         </div>
      </section>

      {/* Structural Components */}
      <section>
         <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Модули макета (Modules)</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-stone-light p-8 md:p-12 border border-zinc-200">
             
             {/* Example Room Card */}
             <div className="flex flex-col">
               <h3 className="text-[10px] mb-4 uppercase tracking-widest text-zinc-400 font-bold font-sans">Image Card Module</h3>
               <div className="border border-black flex flex-col group bg-white relative shadow-sm hover:shadow-lg transition-shadow">
                 <div className="overflow-hidden h-56 border-b border-black relative">
                   <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-500 font-mono text-[10px]">IMAGE PROPORTION 16:9 / 4:3 </span>
                   </div>
                 </div>
                 <div className="p-8 flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-6">
                     <h3 className="text-xl tracking-widest uppercase font-bold">Название блока</h3>
                     <span className="text-gold font-semibold tracking-widest flex flex-col items-end">Значение <span className="text-[10px] font-normal text-zinc-400">ПОДТЕКСТ</span></span>
                   </div>
                   <div className="flex gap-4 mb-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 border-l-2 border-zinc-300 pl-3">
                     <span>Мета 1</span>
                     <span>Мета 2</span>
                   </div>
                   <p className="font-light text-sm text-zinc-600 mb-8 leading-relaxed">
                     Краткое текстовое описание карточки. Строгие выравнивания и отсутствие программных скруглений. Весь текст читаем и выровнен по геометрической сетке.
                   </p>
                   <div className="flex gap-2 w-full mt-auto">
                     <button className="flex-1 bg-white border border-black text-black px-4 py-4 uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-strict font-bold text-center">
                       Вторичное
                     </button>
                     <button className="flex-1 bg-black border border-black text-white px-4 py-4 uppercase tracking-widest text-[10px] hover:bg-gold hover:border-gold transition-strict font-bold shadow-md text-center">
                       Главное действие
                     </button>
                   </div>
                 </div>
               </div>
             </div>

             {/* Example Review Card */}
             <div className="flex flex-col">
               <h3 className="text-[10px] mb-4 uppercase tracking-widest text-zinc-400 font-bold font-sans">Text Emphasis Module</h3>
               <div className="border border-black p-10 md:p-14 flex flex-col items-center bg-white justify-center shadow-sm h-full hover:shadow-md transition-shadow">
                 <div className="flex gap-2 text-gold mb-8 text-xl">
                   {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                 </div>
                 <p className="font-light italic text-zinc-600 md:text-lg mb-8 text-center leading-relaxed">"Стиль цитаты или акцентного текстового блока. Курсив, центрирование, увеличенный 'воздух' вокруг блока, четкая типографика."</p>
                 <span className="uppercase text-xs tracking-widest font-bold border-b-2 border-gold pb-2 pt-2 text-black">Имя Автора / Источник</span>
               </div>
             </div>

         </div>
      </section>
    </div>
  );
}
