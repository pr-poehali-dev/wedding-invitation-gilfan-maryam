import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'program', label: 'Программа', icon: 'Calendar' },
              { id: 'venue', label: 'Место', icon: 'MapPin' },
              { id: 'contacts', label: 'Контакты', icon: 'Phone' },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => scrollToSection(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/6d1bb392-bee0-492e-82fa-3306dee08c36.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={64} className="mx-auto text-primary mb-4" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
            Гильфан & Марьям
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Приглашаем вас разделить с нами
            <br />
            самый важный день в нашей жизни
          </p>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-xl text-muted-foreground mb-2">Дата свадьбы</p>
            <p className="text-4xl font-bold text-primary">1 ноября 2025</p>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Программа мероприятия
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-6">
            {[
              { time: '14:30', title: 'Церемония бракосочетания', description: 'Официальная часть и обмен клятвами', icon: 'Heart' },
              { time: '17:00', title: 'Праздничный банкет', description: 'Ужин и развлекательная программа', icon: 'Utensils' },
              { time: '21:00', title: 'Танцы до утра', description: 'Веселье продолжается!', icon: 'Music' },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">{item.time}</span>
                      <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="venue"
        className="py-20 px-4 bg-gradient-to-b from-secondary to-background"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Место проведения
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <Card className="overflow-hidden border-2 border-border">
            <div
              className="h-80 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/files/10f077bb-949c-4bb0-a269-1f257f051a3c.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" size={32} className="text-primary mt-1" />
                <div>
                  <h3 className="text-3xl font-bold mb-2">Банкетный комплекс "Империя"</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    ул. Боевая, 132 лит С, г. Астрахань
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Уютный банкетный зал с видом на сад. 
                    Для вашего удобства предусмотрена парковка.
                  </p>
                </div>
              </div>
              <Button className="w-full gap-2" size="lg">
                <Icon name="Navigation" size={20} />
                Построить маршрут
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-border">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Гильфан</h3>
              <div className="space-y-3">
                <a
                  href="tel:+79648817711"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={20} />
                  +7 (964) 881-77-11
                </a>
                <a
                  href="https://wa.me/79648817711"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </a>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-border">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Марьям</h3>
              <div className="space-y-3">
                <a
                  href="tel:+79648883992"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={20} />
                  +7 (964) 888-39-92
                </a>
                <a
                  href="https://wa.me/79648883992"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </a>
              </div>
            </Card>
          </div>

          <Card className="p-8 text-center mt-8 bg-gradient-to-br from-primary/5 to-secondary border-2 border-primary/20">
            <Icon name="Heart" size={48} className="mx-auto text-primary mb-4" />
            <p className="text-xl text-foreground mb-4">
              Мы будем рады видеть вас на нашем празднике!
            </p>
            <p className="text-muted-foreground">
              Просим подтвердить ваше присутствие до 27 октября 2025 года
            </p>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          С любовью, Гильфан и Марьям
          <Icon name="Heart" size={18} className="text-primary" />
        </p>
      </footer>
    </div>
  );
};

export default Index;