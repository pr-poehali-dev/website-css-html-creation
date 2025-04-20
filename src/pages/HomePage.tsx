
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Slider from "@/components/Slider";
import SearchBlock from "@/components/SearchBlock";
import EventCalendar from "@/components/EventCalendar";
import EventCard from "@/components/EventCard";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <img src="/logo-b.svg" alt="Science" className="h-8" />
          <span className="ml-2 text-primary font-bold text-xl">Science</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary">Пункт 1</a>
          <a href="#" className="text-gray-600 hover:text-primary">Пункт 2</a>
          <a href="#" className="text-gray-600 hover:text-primary">Пункт 3</a>
          <a href="#" className="text-gray-600 hover:text-primary">Пункт 4</a>
        </nav>
        <div className="text-primary font-bold">+7 (800) 999-99-99</div>
      </header>
      
      <main className="container mx-auto py-6 px-4">
        <section className="mb-12">
          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <Slider />
          </div>
        </section>
        
        <section className="mb-12">
          <SearchBlock />
        </section>
        
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-1">Мероприятия на <span className="bg-orange-400 text-white px-2 py-1 rounded-sm">18 апреля</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <EventCalendar />
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <EventCard 
                title="Международная научно-практическая конференция: 'Переход от образовательной среды к образовательной экосистеме в интересах устойчивого развития'"
                tags={["Очень длинный тэг", "Тэг", "Очень длинный тэг", "Тэг", "Очень длинный тэг", "Тэг", "Тэг", "Тэг"]}
                categories={["Образование", "Онлайн", "Студенты"]}
              />
              
              <EventCard 
                title="Международная научно-практическая конференция: 'Переход от образовательной среды к образовательной экосистеме в интересах устойчивого развития'"
                tags={[]}
                categories={["Образование", "Онлайн", "Студенты"]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
