
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface EventCardProps {
  title: string;
  tags: string[];
  categories: string[];
}

const EventCard: FC<EventCardProps> = ({ title, tags, categories }) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-sm text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="border border-gray-200 px-2 py-1 rounded-sm text-xs text-gray-600"
            >
              {category}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex gap-3 mt-4">
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          Написать
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
          Подробнее <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
