'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TfiEmail } from 'react-icons/tfi';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

type Inputs = {
    name: string;
    telNumber: string;
    email: string;
    message: string;
};

const Form = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);
        setSuccessMessage(null);

        if (!executeRecaptcha) {
            console.log("ReCAPTCHA не готов к выполнению");
            setLoading(false);
            return;
        }

        try {
            const gRecaptchaToken = await executeRecaptcha('submit');
            const response = await axios.post('/api/verify-recaptcha', { token: gRecaptchaToken });

            if (response.data.success) {
                // Отправка формы на сервер, если проверка reCAPTCHA пройдена
                const formResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/contact`,
                    { ...data, gRecaptchaToken },
                    { headers: { 'Content-Type': 'application/json' } }
                );

                if (formResponse.status === 200 || formResponse.status === 201) {
                    setSuccessMessage('Форма успешно отправлена!');
                    reset();
                } else {
                    setSuccessMessage('Не удалось отправить форму.');
                }
            } else {
                setSuccessMessage('Проверка reCAPTCHA не пройдена.');
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            setSuccessMessage('Произошла ошибка при отправке формы.');
        } finally {
            setLoading(false);
        }
    };

    // const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //     if (!executeRecaptcha) {
    //         console.log("ReCAPTCHA не готов к выполнению");
    //         return;
    //     }

    //     try {
    //         // Выполнение reCAPTCHA и вывод токена
    //         const gRecaptchaToken = await executeRecaptcha('inquirySubmit');
    //         console.log("reCAPTCHA Token:", gRecaptchaToken);
    //         console.log("data:", data);
    //         // Временная проверка токена
    //         setSuccessMessage(`Ваш reCAPTCHA токен: ${gRecaptchaToken}`);
    //     } catch (error) {
    //         console.error('Ошибка reCAPTCHA:', error);
    //     }
    // };

    return (
        <div className="bg-white my-10 overflow-hidden">
            <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20 max-md:py-10">
                <div className="md:max-w-md w-full anim-element-left">
                    <div className="text-black mb-5 max-sm:text-center anim-element">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold">Остались вопросы?</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base">Заполните форму и мы с вами свяжемся</p>
                    </div>
                    {successMessage && <p className="text-center text-lg text-green-600">{successMessage}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваше имя</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                {...register('name', {
                                    required: true,
                                    minLength: 3,
                                    pattern: /^[A-Za-zА-Яа-яЁё]+(?:[-\s][A-Za-zА-Яа-яЁё]+)*$/,
                                })}
                                placeholder="Напишите свое имя здесь"
                            />
                            {errors.name && <span className="text-[red]">Это поле обязательно</span>}
                        </label>

                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваш телефон</p>
                            {/* <PhoneNumberInput
                                inputProps={register("telNumber", {
                                    required: true,
                                    minLength: 7,
                                    pattern: /^\+?\d+$/,
                                })}
                            /> */}
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                {...register("telNumber", {
                                    required: true,
                                    minLength: 7,
                                    pattern: /^\+?\d+$/,
                                })}
                                placeholder="Ваш tel"
                            />
                            {errors.telNumber && <span className="text-[red]">Это поле обязательно</span>}
                        </label>

                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваш email</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="email"
                                {...register('email', { required: true })}
                                placeholder="Ваш email"
                            />
                            {errors.email && <span className="text-[red]">Это поле обязательно</span>}
                        </label>

                        <label className="w-full mb-9 max-md:mb-5 block anim-element">
                            <p className="mb-1">Ваш комментарий</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                {...register('message', { required: true })}
                                placeholder="Напишите свой комментарий"
                            />
                            {errors.message && <span className="text-[red]">Это поле обязательно</span>}
                        </label>

                        <button
                            disabled={loading}
                            className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full anim-element"
                        >
                            {loading ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                </div>

                <div className="w-full relative">
                    <div className="">
                        <h2 className="text-3xl max-md:text-2xl font-semibold anim-element">Oставайтесь на связи</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg anim-element">
                            <TfiEmail className="text-[18px] max-sm:text-[15px]" /> info@parisahome.com
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoCallOutline className="text-2xl max-sm:text-[15px]" /> +998 95 411-66-66
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoLocationOutline className="text-2xl max-sm:text-[15px]" /> Konigil Samarkand 140319, Uzbekistan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
