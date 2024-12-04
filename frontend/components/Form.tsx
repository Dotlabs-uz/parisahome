'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TfiEmail } from 'react-icons/tfi';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { useParams, useRouter } from 'next/navigation';

type Inputs = {
    name: string;
    telNumber: string;
    email: string;
    message: string;
};

const Form = ({ form }: any) => {
    const { push } = useRouter()
    const { lang } = useParams()
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
                const formResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/contact`,
                    data,
                    { headers: { 'Content-Type': 'application/json' } }
                );

                if (formResponse.status === 200 || formResponse.status === 201) {
                    setSuccessMessage('Форма успешно отправлена!');
                    reset();
                    push(`/en/thanks`)
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

    return (
        <div className="bg-white my-10 overflow-hidden">
            <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20 max-md:py-10">
                <div className="md:max-w-md w-full anim-element-left">
                    <div className="text-black mb-5 max-sm:text-center anim-element">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold">{form.heading}</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base">{form.subheading}</p>
                    </div>
                    {successMessage && <p className="text-center text-lg text-green-600">{successMessage}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">{form.nameLabel}</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                {...register('name', {
                                    required: true,
                                    minLength: 3,
                                    pattern: /^[A-Za-zА-Яа-яЁё]+(?:[-\s][A-Za-zА-Яа-яЁё]+)*$/,
                                })}
                                placeholder={form.namePlaceholder}
                            />
                            {errors.name && <span className="text-[red]">{form.requiredField}</span>}
                        </label>

                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">{form.phoneLabel}</p>
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
                                placeholder={form.phonePlaceholder}
                            />
                            {errors.telNumber && <span className="text-[red]">{form.requiredField}</span>}
                        </label>

                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">{form.emailLabel}</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="email"
                                {...register('email', { required: true })}
                                placeholder={form.emailPlaceholder}
                            />
                            {errors.email && <span className="text-[red]">{form.requiredField}</span>}
                        </label>

                        <label className="w-full mb-9 max-md:mb-5 block anim-element">
                            <p className="mb-1">{form.messageLabel}</p>
                            <input
                                disabled={loading}
                                className="w-full py-1 px-3 rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                {...register('message', { required: true })}
                                placeholder={form.messagePlaceholder}
                            />
                            {errors.message && <span className="text-[red]">{form.requiredField}</span>}
                        </label>

                        <button
                            disabled={loading}
                            className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full anim-element"
                        >
                            {loading ? form.loadingButton : form.submitButton}
                        </button>
                    </form>
                </div>

                <div className="w-full relative">
                    <div className="">
                        <h2 className="text-3xl max-md:text-2xl font-semibold anim-element">{form.heading2}</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg anim-element">
                            <TfiEmail className="text-[18px] max-sm:text-[15px]" /> {form.email}
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoCallOutline className="text-2xl max-sm:text-[15px]" /> {form.phone1}
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoCallOutline className="text-2xl max-sm:text-[15px]" /> {form.phone2}
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoCallOutline className="text-2xl max-sm:text-[15px]" /> {form.phoneProcurement}
                        </p>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg mt-1 anim-element">
                            <IoLocationOutline className="text-2xl max-sm:text-[15px]" /> {form.address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
