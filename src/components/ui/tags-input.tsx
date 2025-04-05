'use client'
import { useState } from "react";
import { Input } from "./input";

const TagsInput = ({ placeholder, onTagChange }: { placeholder: string; onTagChange: (e: string[]) => void }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            onTagChange([...tags, inputValue.trim()])
            setInputValue('');
        }
    };
    const handleBlur = () => {
        if (inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            onTagChange([...tags, inputValue.trim()])
            setInputValue('');
        }
    }

    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
        onTagChange(tags.filter((_, i) => i !== index))
    };

    return (
        <div className="flex flex-wrap border rounded-md min-h-10 px-1 py-1">
            <div className="flex gap-2 flex-wrap ">
                {tags.map((tag, index) => (
                    <div key={index} className=" flex items-center bg-destructive rounded px-2 py-1">
                        <span className="text-sm">{tag}</span>
                        <button
                            type="button"
                            className="ml-1 text-red-500 hover:text-red-700"
                            onClick={() => removeTag(index)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            <Input
                id=""
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                className="border-none focus-visible:ring-0 text-sm"
                placeholder={placeholder}
            />
        </div>
    );
};

export default TagsInput;