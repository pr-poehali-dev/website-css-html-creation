
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBlock = () => {
  return (
    <div className="bg-[#24293e] rounded-md p-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-white text-xl font-bold mb-4">Блок с поиском</h2>
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-4 h-4 bg-blue-500 rotate-45" />
          ))}
        </div>
      </div>
      
      <div className="w-full md:w-2/3 bg-white p-4 rounded-md">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              type="text" 
              placeholder="Товары, услуги..." 
              className="pl-10 bg-white"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full">Поиск</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
