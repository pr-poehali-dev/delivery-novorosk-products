import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Доставка Новоорск
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#stores" className="text-gray-600 hover:text-primary transition-colors">Магазины</a>
              <a href="#tariffs" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Доставка продуктов из любого магазина
            <span className="block text-primary">посёлка Новоорск</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Заказывайте продукты из любого магазина города. Мы доставим всё свежим и быстро прямо к вашей двери.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Сделать заказ
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              <Icon name="User" className="mr-2" size={20} />
              Личный кабинет
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingCart" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Любой магазин</h3>
              <p className="text-gray-600">Доставляем из всех магазинов Новоорска</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">От 30 минут до вашей двери</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7</h3>
              <p className="text-gray-600">Работаем круглосуточно</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Точная геолокация</h3>
              <p className="text-gray-600">Отслеживайте курьера в реальном времени</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши партнёры</h2>
            <p className="text-xl text-gray-600">Доставляем из лучших магазинов Новоорска</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <img 
                  src="/img/3460b50d-9734-4456-a187-90b92ab56da0.jpg" 
                  alt="Продуктовый магазин"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Магнит</CardTitle>
                <CardDescription>Продукты, бакалея, товары для дома</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">⭐ 4.8</Badge>
                  <Badge variant="outline">20-30 мин</Badge>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <img 
                  src="/img/62813959-9f6e-45e9-bb0e-dc403cd4e04e.jpg" 
                  alt="Аптека"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Аптека №1</CardTitle>
                <CardDescription>Лекарства, витамины, медицинские товары</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">⭐ 4.9</Badge>
                  <Badge variant="outline">15-25 мин</Badge>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🏪</div>
              </div>
              <CardHeader>
                <CardTitle>Пятёрочка</CardTitle>
                <CardDescription>Свежие продукты, молочная продукция</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">⭐ 4.7</Badge>
                  <Badge variant="outline">25-35 мин</Badge>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы доставки</h2>
            <p className="text-xl text-gray-600">Прозрачные цены без скрытых комиссий</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Обычная доставка</CardDescription>
                <div className="text-3xl font-bold text-primary">150 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Доставка 40-60 мин</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Любой магазин</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Отслеживание заказа</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-primary shadow-lg scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Быстрый</CardTitle>
                <CardDescription>Приоритетная доставка</CardDescription>
                <div className="text-3xl font-bold text-primary">250 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Доставка 20-30 мин</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Любой магазин</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Приоритет в очереди</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>SMS уведомления</span>
                </div>
                <Button className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>VIP обслуживание</CardDescription>
                <div className="text-3xl font-bold text-primary">400 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Доставка 15-20 мин</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Персональный курьер</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Упаковка в подарок</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Поддержка 24/7</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты о нашем сервисе</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">А</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Петрова</CardTitle>
                    <div className="flex text-yellow-400">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличный сервис! Доставили продукты за 25 минут, всё свежее и качественное. Курьер очень вежливый."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">М</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Михаил Иванов</CardTitle>
                    <div className="flex text-yellow-400">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Пользуюсь уже месяц. Очень удобно заказывать из дома, цены честные, доставка быстрая."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">Е</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Сидорова</CardTitle>
                    <div className="flex text-yellow-400">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заказывала лекарства из аптеки срочно. Привезли за 15 минут! Спасибо большое за оперативность."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Зарегистрируйтесь и получите скидку 20% на первый заказ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Введите ваш номер телефона"
              className="bg-white text-gray-900 border-none"
            />
            <Button size="lg" variant="secondary">
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold text-primary">+7 (800) 123-45-67</p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold text-primary">info@delivery-novoorsk.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-semibold text-primary">пос. Новоорск</p>
                <p className="text-gray-600">Оренбургская область</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Доставка Новоорск</h3>
              <p className="text-gray-400">
                Быстрая доставка продуктов из любого магазина города
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Зона доставки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Юридическая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Доставка Новоорск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;