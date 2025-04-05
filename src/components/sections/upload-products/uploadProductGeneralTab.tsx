'use client'
import { ChangeEvent, Dispatch, SetStateAction, useMemo, useState } from 'react'
import JoditEditor from 'jodit-react';
import { Input } from '@/components/ui/input'
import TagsInput from '@/components/ui/tags-input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { ProductUpdateFormState } from '@/types/ProductUpdateFormState';
import useJoditEditorConfig from '@/hooks/useJoditEditorConfig';

const categories = [
    { id: 'category-1', label: 'Demo category 1' },
    { id: 'category-2', label: 'Demo category 2' },
    { id: 'category-3', label: 'Demo category 3' },
    // Add more categories as needed
];

export type ProductUploadTabPropsType = {
    handleChangeEvent: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setFromValue: Dispatch<SetStateAction<ProductUpdateFormState>>;
    fromValue: ProductUpdateFormState
}

const UploadProductGeneralTab = ({ handleChangeEvent, setFromValue, fromValue }: ProductUploadTabPropsType) => {
    const [content, setContent] = useState('');
    const config = useJoditEditorConfig()

    const handleCheckboxChange = (id: string, isChecked: boolean | string) => {
        if (isChecked) {

            setFromValue((prev) => {
                const categories = prev.categories || [];
                if (!categories.includes(id)) {
                    return { ...prev, categories: [...categories, id] };
                }
                return prev;
            });
        } else {

            setFromValue((prev) => {
                const categories = prev.categories || [];
                return { ...prev, categories: categories.filter((category: string) => category !== id) };
            });
        }
    };

    const handleTagChange = (e: string[]) => {
        setFromValue((prev) => ({ ...prev, 'tags': e }))
    }

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>

                <div className='w-full flex-1 flex flex-col gap-4'>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="title" className='capitalize text-sm inline-block mb-1'>product name <span className='text-red-600'>*</span></label>
                        <Input className='h-11 text-sm text-accent-foreground' id='title' name='product_name' value={fromValue.product_name} required onChange={handleChangeEvent} />
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="brand" className='capitalize text-sm inline-block mb-1'>Brand</label>
                        <div>
                            <Input className='h-11 text-sm text-accent-foreground' id='brand' name='brand' value={fromValue.brand} onChange={handleChangeEvent} />
                            <small className='text-[10px] text-accent-foreground'>You can choose a brand if you'd like to display your product by brand.</small>
                        </div>
                    </div>

                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="flash" className='capitalize text-sm inline-block mb-1'>Add To Flash</label>
                        <Select onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'flash': value }))}>
                            <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground" id='flash'>
                                <SelectValue placeholder="Choose Flash Title" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="flash-title" className='py-3'>Choose Flash Title</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="unit" className='capitalize text-sm inline-block mb-1'>Unit <span className='text-red-600'>*</span></label>
                        <Input className='h-11 text-sm text-accent-foreground' id='unit' placeholder='Unit (e. g. KG, Pc etc)' required name='unit' value={fromValue.unit} onChange={handleChangeEvent} />
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="weight" className='capitalize text-sm inline-block mb-1'>Weight <span className='text-accent-foreground text-xs'>(In Kg)</span></label>
                        <Input className='h-11 text-sm text-accent-foreground' id='weight' type='number' defaultValue={0} name='weight' value={fromValue.weight} onChange={handleChangeEvent} />
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="min-purchase" className='capitalize text-sm inline-block mb-1'>Minimum Purchase Qty</label>
                        <Input className='h-11 text-sm text-accent-foreground' id='min-purchase' type='number' defaultValue={1} required name='min-purchase' value={fromValue.min_purchase} onChange={handleChangeEvent} />
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="tags" className='capitalize text-sm inline-block mb-1'>Tags</label>
                        <div>
                            <TagsInput onTagChange={handleTagChange} placeholder='Type and hit enter to add a tag' />
                            <small className='text-[10px] text-accent-foreground'>This is used for search. Input those words by which cutomer can find this product.</small>
                        </div>
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="category" className='capitalize text-sm inline-block mb-1'>category</label>
                        <div className='flex flex-col gap-2 text-sm'>
                            {categories.map((category, index) => (
                                <div key={category.id}>
                                    <Checkbox
                                        className='size-3 mr-1 rounded-[2px] [&_svg]:size-2.5 [&_span]:h-2'
                                        id={category.id}
                                        checked={fromValue.categories && fromValue.categories.includes(category.id)}
                                        onCheckedChange={(checked) => handleCheckboxChange(category.id, checked)}
                                    />
                                    <label htmlFor={category.id}>{category.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="featured" className='capitalize text-sm inline-block mb-1'>Featured</label>
                        <div className='text-sm'>
                            <Switch id='featured' checked={fromValue.isFeatured} onCheckedChange={(value) => setFromValue((prev) => ({ ...prev, 'isFeatured': value }))} />
                            <small className='text-[10px] text-accent-foreground block'>If you enable this, this product will be granted as a featured product.</small>
                        </div>
                    </div>
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="todays-deal" className='capitalize text-sm inline-block mb-1'>Todays Deal</label>
                        <div className='text-sm'>
                            <Switch id='todays-deal' checked={fromValue.todays_deal} onCheckedChange={(value) => setFromValue((prev) => ({ ...prev, 'todays-deal': value }))} />
                            <small className='text-[10px] text-accent-foreground block'>If you enable this, this product will be granted as a todays deal product.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="" className='capitalize text-sm inline-block mb-1'>Description</label>
                <JoditEditor
                    value={content}
                    config={config}
                    // tabIndex={1}
                     className='text-sm'
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => setContent(newContent)}
                />
            </div>
        </div>
    )
}

export default UploadProductGeneralTab
