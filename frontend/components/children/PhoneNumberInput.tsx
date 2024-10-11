"use client"
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

interface PhoneNumberInputProps {
    inputProps: React.InputHTMLAttributes<HTMLInputElement>; // Пропсы для input, такие как {...register()}
}


const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ inputProps }) => {
    const [mask, setMask] = useState('+999 99 999 9999');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Проверяем, если первый символ не "+7", переключаем маску на международный формат
        if (value.startsWith('+7')) {
            setMask('+7 (999) 999-99-99');
        } else if (value.startsWith('+998')) {
            setMask(`+998-(99)-999-99-99`);
        } else {
            setMask('+999 99 999 9999'); // Маска для международных номеров
        }
    };

    return (
        <InputMask
            {...inputProps}
            className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
            mask={mask}
            placeholder="Напишите свой телефон"
            onChange={handleInputChange}
            alwaysShowMask={false}
        />
    );
};

export default PhoneNumberInput;
