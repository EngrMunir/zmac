import React, { ChangeEvent, useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DateTimePickPicker = ({ setSelectedDateTime }: { setSelectedDateTime: any }) => {
    const [selectedDate, setSelectedDate] = useState<any>({});
    const [startTime, setStartTime] = useState({ hour: '12', minute: '00', ampm: 'AM' });
    const [endTime, setEndTime] = useState({ hour: '12', minute: '00', ampm: 'PM' });

    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
        const { name, value } = e.target;
        const valueConvertNumber = Number(value);
        if (name === 'hour' && (valueConvertNumber < 0 || valueConvertNumber > 12)) return;
        if (name === 'minute' && (valueConvertNumber < 0 || valueConvertNumber > 59)) return;

        if (type === 'startTime') {
            setStartTime((prev) => ({ ...prev, [name]: valueConvertNumber.toString() }));
        }
        if (type === 'endTime') {
            setEndTime((prev) => ({ ...prev, [name]: valueConvertNumber.toString() }));
        }
    };

    const toggleAMPM = (type: string) => {
        if (type === 'startTime') {
            setStartTime((prev) => ({ ...prev, ampm: prev.ampm === 'AM' ? 'PM' : 'AM' }));
        }
        if (type === 'endTime') {
            setEndTime((prev) => ({ ...prev, ampm: prev.ampm === 'AM' ? 'PM' : 'AM' }));
        }
    };

    useEffect(() => {
        setSelectedDateTime(
            {
                date: selectedDate,
                startTime,
                endTime
            }
        )
    }, [selectedDate, endTime, startTime])

    return (
        <Popover>
            <PopoverTrigger className='border text-accent-foreground rounded-sm text-start h-11 px-2 text-sm'>
                {selectedDate?.from ? (
                    selectedDate.to ? (
                        <>
                            {format(selectedDate.from, "MM-dd-yy")} {startTime.hour}:{startTime.minute}:{startTime.ampm} to{" "}
                            {format(selectedDate.to, "MM-dd-yy")} {endTime.hour}:{endTime.minute}:{endTime.ampm}
                        </>
                    ) : (
                        format(selectedDate.from, "MM-dd-yy")
                    )
                ) : <span>Select date</span>}
            </PopoverTrigger>
            <PopoverContent align='start' className='bg-background p-0 w-auto'>
                <div className=''>
                    <Calendar
                        id='date-range'
                        mode="range"
                        initialFocus
                        defaultMonth={selectedDate?.from}
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        numberOfMonths={2}
                        className="rounded-sm text-sm "
                    />
                </div>
                <div className='flex justify-between px-5 pb-3'>
                    <div className='flex gap-2'>
                        <label>
                            <Input
                                type="number"
                                name="hour"
                                value={startTime.hour}
                                onChange={(e) => handleTimeChange(e, 'startTime')}
                                placeholder="HH"
                                min="1"
                                max="12"
                                className='max-w-12 px-2 h-7 rounded-[4px] text-sm text-center'
                            />
                        </label>
                        <span>:</span>
                        <label>
                            <Input
                                type="number"
                                name="minute"
                                value={startTime.minute}
                                onChange={(e) => handleTimeChange(e, 'startTime')}
                                placeholder="MM"
                                min="0"
                                max="59"
                                className='max-w-12 px-2 h-7 rounded-[4px] text-sm text-center'
                            />
                        </label>
                        <span>:</span>
                        <label>
                            <button type="button" className='border rounded-[4px] text-sm text-center w-12 h-7 block' onClick={() => toggleAMPM('startTime')}>
                                {startTime.ampm}
                            </button>
                        </label>
                    </div>

                    <div className='flex gap-2'>
                        <label>
                            <Input
                                type="number"
                                name="hour"
                                value={endTime.hour}
                                onChange={(e) => handleTimeChange(e, 'endTime')}
                                placeholder="HH"
                                min="1"
                                max="12"
                                className='max-w-12 px-2 h-7 rounded-[4px] text-sm text-center'
                            />
                        </label>
                        <span>:</span>
                        <label>
                            <Input
                                type="number"
                                name="minute"
                                value={endTime.minute}
                                onChange={(e) => handleTimeChange(e, 'endTime')}
                                placeholder="MM"
                                min="0"
                                max="59"
                                className='max-w-12 px-2 h-7 rounded-[4px] text-sm text-center'
                            />
                        </label>
                        <span>:</span>
                        <label>
                            <button type="button" className='border rounded-[4px] text-sm text-center w-12 h-7 block' onClick={() => toggleAMPM('endTime')}>
                                {endTime.ampm}
                            </button>
                        </label>
                    </div>
                </div>
                {/* <div className='px-5 pb-3 mt-2 flex gap-3 justify-end'>
                    <Button size={"xs"} variant={"outline"} className='rounded-[4px] capitalize'>cancel</Button>
                    <Button size={"xs"} className='rounded-[4px] capitalize'>Submit</Button>
                </div> */}
            </PopoverContent>
        </Popover>
    )
}

export default DateTimePickPicker