'use client'
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Check, ChevronDown, X } from 'lucide-react';

interface Option {
  name: string;
  code?: string;
  img?: string;
  icon?: string;
}

interface MultiSelectProps {
  options: Option[];
  initialSelected?: string[];
  placeholder?: string;
  onSelectionChange?: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, initialSelected = [], placeholder = 'Search', onSelectionChange }) => {
  const [selectedValue, setSelectedValue] = useState<string[]>(initialSelected);

  const handleAttributeChange = (value: string) => {
    const newSelectedValue = selectedValue.includes(value)
      ? selectedValue.filter((item) => item !== value)
      : [...selectedValue, value];

    setSelectedValue(newSelectedValue);

    if (onSelectionChange) {
      onSelectionChange(newSelectedValue);
    }
  };

  const handleRemoveTag = (e: MouseEvent<HTMLSpanElement>, value: string) => {
    e.preventDefault();
    const newSelectedValue = selectedValue.filter((item) => item !== value);
    setSelectedValue(newSelectedValue);

    if (onSelectionChange) {
      onSelectionChange(newSelectedValue);
    }
  };

  return (
    <Popover>
      <PopoverTrigger className='text-sm text-accent-foreground border rounded-sm text-start min-h-11 p-2 flex items-center justify-between'>
        {
          selectedValue.length ?
            <div className='flex items-center gap-3'>
              {
                selectedValue.map((item, index) =>
                  <p key={index} className='pl-4 pr-5 py-1 bg-destructive rounded-full relative cursor-default capitalize'>
                    <span>{item}</span>
                    <span onClick={(e) => handleRemoveTag(e, item)} className='absolute right-1 cursor-pointer hover:text-red-600 transition-all duration-300'><X size={12} /></span>
                  </p>
                )
              }
            </div>
            :
            <span>Nothing selected </span>
        }
        <span className='text-[#bbbbbb]'><ChevronDown size={15} /></span>
      </PopoverTrigger>
      <PopoverContent align='start' className='text-sm bg-background text-accent-foreground p-1 w-[600px]'>
        <Input placeholder={placeholder} className='text-sm mb-1' />
        {options.length ? options.map((option, index) => (
          <div
            key={index}
            className='py-3 px-3 capitalize rounded-sm cursor-pointer flex justify-between items-center flex-wrap hover:bg-destructive transition-all duration-300'
            onClick={() => handleAttributeChange(option.name)}
          >
            {renderOption ? renderOption(option) : <span>{option.name}</span>}
            {selectedValue.includes(option.name) && <Check size={14} />}
          </div>
        ))
          :
          null
        }
      </PopoverContent>
    </Popover>
  );
}

export default MultiSelect;


const renderOption = (option: { name: string; code?: string; img?: string; icon?: string }) => (
  <div className="flex items-center gap-2">
    {option.img && <img src={option.img} alt={option.name} className="w-4 h-4 mr-2" />}
    {option.icon && <span className={`icon-class ${option.icon} mr-2`}></span>}
    {option.code && <span className={`ml-2 text-xs w-3 h-3 rounded-[2px] inline-block`} style={{backgroundColor:`${option.code}`}}></span>}
    <span>{option.name}</span>
  </div>
);