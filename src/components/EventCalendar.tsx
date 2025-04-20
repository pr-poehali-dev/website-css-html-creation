
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedDay, setSelectedDay] = useState(18);

  // Generate days for April 2024 (for demo purposes)
  const generateDays = () => {
    const days = [];
    // Previous month days
    days.push(31);
    
    // Current month days
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    
    // Next month days
    for (let i = 1; i <= 3; i++) {
      days.push(i);
    }
    
    return days;
  };

  const days = generateDays();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getMonthName = (month: number) => {
    const monthNames = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    return monthNames[month];
  };

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <button onClick={prevMonth} className="text-white" aria-label="Previous month">
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{getMonthName(currentMonth)}, {currentYear}</span>
        </div>
        
        <button onClick={nextMonth} className="text-white" aria-label="Next month">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="p-2">
        <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-1">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day, index) => {
            const isCurrentMonth = index > 0 && index < 31;
            const isSelected = isCurrentMonth && day === selectedDay;
            
            return (
              <button
                key={`${day}-${index}`}
                onClick={() => isCurrentMonth && setSelectedDay(day)}
                className={`
                  h-8 w-full flex items-center justify-center rounded-sm text-sm
                  ${!isCurrentMonth ? "text-gray-300" : ""}
                  ${isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
