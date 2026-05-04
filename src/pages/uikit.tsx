import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { CreditCard, Trash2, CheckCircle, ArrowRight } from "lucide-react";

export function UIKit() {
  return (
    <div className="grid-container py-16">
      <div className="mb-16">
        <h1 className="text-4xl tracking-widest mb-4 uppercase">UI Kit & Дизайн Система</h1>
        <p className="text-zinc-500 font-light text-sm uppercase tracking-widest">
          Структурированная библиотека React-компонентов
        </p>
      </div>

      {/* Colors */}
      <section className="mb-24">
        <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Цвета / Палитра</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="h-32 bg-black border border-black mb-4 shadow-sm"></div>
            <span className="font-bold uppercase tracking-widest text-xs">Graphite Black</span>
            <span className="font-mono text-[10px] text-zinc-500 mt-1">HEX: #000000</span>
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
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-24">
        <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Кнопки (Buttons)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-stone-light p-8 md:p-12 border border-zinc-200">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 font-sans">Варианты (Variants)</h3>
              <div className="flex flex-col gap-4 items-start">
                <Button variant="default">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 font-sans">Размеры (Sizes)</h3>
              <div className="flex flex-col gap-4 items-start">
                <Button size="lg">Large Button</Button>
                <Button size="default">Default Button</Button>
                <Button size="sm">Small Button</Button>
                <div className="flex gap-4 items-center">
                  <Button size="icon" variant="outline">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <span className="text-xs font-mono text-zinc-500">Icon Button</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Forms & Inputs */}
      <section className="mb-24">
        <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Элементы форм (Forms)</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-6 border-b border-zinc-200 pb-2">Поля ввода (Input & Label)</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-input">Электронная почта</Label>
                <Input id="email-input" type="email" placeholder="alex@example.com" />
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Обязательное поле для заполнения</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password-input">Пароль (Disabled)</Label>
                <Input id="password-input" type="password" disabled value="password123" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-6 border-b border-zinc-200 pb-2">Чекбоксы (Checkbox)</h3>
            <div className="space-y-4">
              
              <div className="flex items-center space-x-4 p-4 border border-zinc-200 bg-white">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">Я принимаю условия соглашения</Label>
              </div>
              
              <div className="flex items-center space-x-4 p-4 border border-zinc-200 bg-white">
                <Checkbox id="promo" defaultChecked />
                <Label htmlFor="promo" className="cursor-pointer">Подписаться на рассылку</Label>
              </div>

              <div className="flex items-center space-x-4 p-4 border border-zinc-200 bg-stone-light opacity-70">
                <Checkbox id="disabled-check" disabled />
                <Label htmlFor="disabled-check" className="cursor-pointer">Неактивный чекбокс</Label>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Badges */}
      <section className="mb-24">
        <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Индикаторы (Badges)</h2>
        <div className="flex flex-wrap gap-6 p-8 border border-zinc-200 bg-stone-light">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Default</span>
            <Badge variant="default">Основной</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Secondary</span>
            <Badge variant="secondary">Архив</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Destructive</span>
            <Badge variant="destructive">Отменено</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Outline</span>
            <Badge variant="outline">В процессе</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">With Icon</span>
            <Badge variant="default" className="gap-1.5">
              <CheckCircle className="w-3 h-3 text-gold" /> Подтверждено
            </Badge>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-24">
        <h2 className="text-2xl uppercase tracking-widest border-b border-black pb-4 mb-8 font-bold">Карточки (Cards)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-stone-light p-8 md:p-12 border border-zinc-200">
          
          {/* Form Card Example */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 font-sans">Auth/Form Card</h3>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Доступ к сетке</CardTitle>
                <CardDescription className="uppercase tracking-widest mt-2">Введите учетные координаты.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 flex flex-col">
                  <Label>Email</Label>
                  <Input type="email" placeholder="user@example.com" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <Label>Пароль</Label>
                  <Input type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4 border-none pt-2">
                <Button className="w-full">Инициализировать сессию</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Payment Card Example */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 font-sans">Data/List Card</h3>
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
              <button className="text-zinc-400 hover:text-red-500 transition-all p-2 cursor-pointer">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
