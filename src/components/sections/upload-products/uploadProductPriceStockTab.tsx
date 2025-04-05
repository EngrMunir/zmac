import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import MultiSelect from '@/components/ui/multi-select';
import { Switch } from '@/components/ui/switch';
import DateTimePickPicker from './dateTimePickPicker';
import { ProductUploadTabPropsType } from './uploadProductGeneralTab';


const UploadProductPriceStockTab = ({ handleChangeEvent, setFromValue, fromValue }: ProductUploadTabPropsType) => {
    const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState({})
    const [productsColors, setProductsColors] = useState<
        { color: string; variant_price: number; SKU: string; quantity: number }[]
    >([]);

    const handleColorChange = (selected: string[]) => {
        const updatedColors = selected.map(color => {
            const existingColor = productsColors.find(product => product.color === color);
            return existingColor || { color, variant_price: 0, SKU: '', quantity: 10 };
        });

        setProductsColors(updatedColors);
    };

    const handleInputChange = (index: number, field: keyof typeof productsColors[0], value: any) => {
        setProductsColors(prevColors =>
            prevColors.map((product, i) =>
                i === index ? { ...product, [field]: value } : product
            )
        );
    };

    useEffect(() => {
        fromValue.products_colors = productsColors;
    }, [productsColors]);

    useEffect(() => {
        setFromValue((prev) => ({ ...prev, 'discount_date_range': selectedDateTime }))
    }, [selectedDateTime])



    const handleAttributeChange = (selected: string[]) => {
        setSelectedAttributes(selected);
    };

    const handleShowStockQuantity = (value: boolean) => {
        setFromValue((prev) => ({ ...prev, 'showStockQuantity': value }))
        if (value) {
            setFromValue((prev) => ({ ...prev, 'showStockText': false }))
            setFromValue((prev) => ({ ...prev, 'hideStock': false }))
        }
    }

    const handleShowStockText = (value: boolean) => {
        setFromValue((prev) => ({ ...prev, 'showStockText': value }))
        if (value) {
            setFromValue((prev) => ({ ...prev, 'showStockQuantity': false }))
            setFromValue((prev) => ({ ...prev, 'hideStock': false }))
        }
    }

    const handleHideStock = (value: boolean) => {
        setFromValue((prev) => ({ ...prev, 'hideStock': value }))
        if (value) {
            setFromValue((prev) => ({ ...prev, 'showStockQuantity': false }))
            setFromValue((prev) => ({ ...prev, 'showStockText': false }))
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <div className='grid grid-cols-[35%_auto] relative mb-5'>
                    <label htmlFor="attributes" className='capitalize text-sm inline-block mb-1'>Select Colors</label>
                    <MultiSelect
                        options={[{ name: 'red', code: '#FF0000' }, { name: 'black', code: '#000000' }]}
                        onSelectionChange={handleColorChange}
                    />
                </div>
                <div className='grid grid-cols-[35%_auto] relative'>
                    <label htmlFor="attributes" className='capitalize text-sm inline-block mb-1'>Select Attributes</label>
                    <MultiSelect
                        options={[{ name: 'size' }, { name: 'fabric' }]}
                        onSelectionChange={handleAttributeChange}
                    />
                </div>
                <small className='text-xs text-accent-foreground'>Choose the attributes of this product and then input values of each attribute</small>
            </div>

            {
                selectedAttributes.includes('fabric') &&
                <div className='grid grid-cols-[35%_auto] relative'>
                    <label htmlFor="fabric" className='capitalize text-sm inline-block mb-1'>Fabric</label>
                    <MultiSelect
                        options={[]}
                    // onSelectionChange={handleSelectionChange}
                    />
                </div>
            }
            {
                selectedAttributes.includes('size') &&
                <div className='grid grid-cols-[35%_auto] relative'>
                    <label htmlFor="fabric" className='capitalize text-sm inline-block mb-1'>Size</label>
                    <MultiSelect
                        options={[]}
                    // onSelectionChange={handleSelectionChange}
                    />
                </div>
            }

            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="price" className='capitalize text-sm inline-block mb-1'>price<span className='text-red-600'>*</span></label>
                <Input type='number' defaultValue={0} className='h-11 text-sm text-accent-foreground' id='price' name='price' value={fromValue.price} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="discount" className='capitalize text-sm inline-block mb-1'>discount</label>
                <Input type='number' defaultValue={0} className='h-11 text-sm text-accent-foreground' id='discount' name='discount' value={fromValue.discount} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="discount-type" className='capitalize text-sm inline-block mb-1'>Discount Type</label>
                <Select onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'discount_type': value }))}>
                    <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground" id='discount-type'>
                        <SelectValue placeholder="Choose Discount Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="flat" className='py-3'>Flat</SelectItem>
                        <SelectItem value="percent" className='py-3'>Percent</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="date-range" className='capitalize text-sm inline-block mb-1'>Discount Date Range</label>
                <DateTimePickPicker setSelectedDateTime={setSelectedDateTime} />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="tax" className='capitalize text-sm inline-block mb-1'>Tax</label>
                <Input type='number' defaultValue={0} className='h-11 text-sm text-accent-foreground' id='tax' name='tax' value={fromValue.tax} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="tax-type" className='capitalize text-sm inline-block mb-1'>Tax Type</label>
                <Select onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'tax_type': value }))}>
                    <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground" id='tax-type'>
                        <SelectValue placeholder="Choose Tax Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="flat" className='py-3'>Flat</SelectItem>
                        <SelectItem value="percent" className='py-3'>Percent</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {
                productsColors.length ?
                    <>
                        <Table className='border'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-xs w-[140px]">Variant</TableHead>
                                    <TableHead className="text-xs">Variant Price</TableHead>
                                    <TableHead className="text-xs">SKU</TableHead>
                                    <TableHead className="text-xs">Quantity</TableHead>
                                    <TableHead className="text-xs">Photo</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    productsColors.map((product, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell className='text-xs text-accent-foreground capitalize'>{product.color}</TableCell>
                                                <TableCell className='text-xs'>
                                                    <Input
                                                        type='number'
                                                        value={product.variant_price}
                                                        onChange={(e) => handleInputChange(index, 'variant_price', parseFloat(e.target.value))}
                                                        className='text-accent-foreground text-sm'
                                                    />
                                                </TableCell>
                                                <TableCell className='text-xs'>
                                                    <Input
                                                        type='text'
                                                        value={product.SKU}
                                                        onChange={(e) => handleInputChange(index, 'SKU', e.target.value)}
                                                        className='text-accent-foreground text-sm'
                                                    />
                                                </TableCell>
                                                <TableCell className='text-xs'>
                                                    <Input
                                                        type='number'
                                                        value={product.quantity}
                                                        onChange={(e) => handleInputChange(index, 'quantity', parseInt(e.target.value))}
                                                        className='text-accent-foreground text-sm'
                                                    />
                                                </TableCell>
                                                <TableCell className='text-xs'>
                                                    <label htmlFor="color-type-img" className='border h-9 rounded-sm flex text-accent-foreground'>
                                                        <span className='bg-destructive h-full flex justify-center items-center px-4 rounded-tl-sm rounded-bl-sm text-sm'>Browser</span>
                                                        <span className='w-[130px] px-3 text-sm flex items-center'>Choose File</span>
                                                    </label>
                                                    <input type='file' id='color-type-img' hidden name='color_type_img' onChange={handleChangeEvent} />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </>
                    :
                    <>
                        <div className='grid grid-cols-[35%_auto]'>
                            <label htmlFor="Quantity" className='capitalize text-sm inline-block mb-1'>Quantity<span className='text-red-600'>*</span></label>
                            <Input type='number' defaultValue={1} className='h-11 text-sm text-accent-foreground' id='Quantity' name='quantity' value={fromValue.quantity} onChange={handleChangeEvent} />
                        </div>
                        <div className='grid grid-cols-[35%_auto]'>
                            <label htmlFor="SKU" className='capitalize text-sm inline-block mb-1'>SKU</label>
                            <Input type='text' className='h-11 text-sm text-accent-foreground' id='SKU' name='SKU' value={fromValue.SKU} onChange={handleChangeEvent} />
                        </div>
                    </>
            }
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="warning" className='capitalize text-sm inline-block mb-1'>Low Stock Quantity Warning</label>
                <Input type='number' defaultValue={1} className='h-11 text-sm text-accent-foreground' id='warning' name='low_quantity_warning' value={fromValue.low_quantity_warning} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="show-stock-quantity" className='capitalize text-sm inline-block mb-1'>Show Stock Quantity</label>
                <Switch onCheckedChange={(value) => handleShowStockQuantity(value)} checked={fromValue.showStockQuantity} id='show-stock-quantity' />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="show-stock-text-only" className='capitalize text-sm inline-block mb-1'>Show Stock With Text Only</label>
                <Switch onCheckedChange={(value) => handleShowStockText(value)} checked={fromValue.showStockText} id='show-stock-text-only' />
            </div>
            <div className='grid grid-cols-[35%_auto]'>
                <label htmlFor="hide-stock" className='capitalize text-sm inline-block mb-1'>Hide Stock</label>
                <Switch onCheckedChange={(value) => handleHideStock(value)} checked={fromValue.hideStock} id='hide-stock' />
            </div>
        </div>
    );
}

export default UploadProductPriceStockTab;