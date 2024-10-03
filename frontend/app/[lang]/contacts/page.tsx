"use client";
import FlowerModal from "@/components/children/FlowerModal";
import { animateElementsOnScroll } from "@/lib/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Form from "@/components/Form";

type Inputs = {
    name: string;
    telNumber: string;
    email: string;
    message: string;
};

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
    const sectionRef = useRef<any>(null);
    const [loadind, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setLoading(true);
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, data)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    reset();
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll(".anim-element");
        if (elements) {
            animateElementsOnScroll(elements);
        }
    }, []);

    return (
        <div ref={sectionRef} className="pt-14">
            <div>
                <div className="relative py-32 max-lg:py-20 bg-[url('https://parisahome.com/sites/all/themes/sap/img/dist/footer-bg.jpg')] bg-cover bg-no-repeat">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
                    <div className="anim-element">
                        <h2 className="relative z-10 text-center text-7xl max-lg:text-6xl max-md:text-5xl font-medium text-white">
                            Контакты
                        </h2>
                    </div>
                </div>
            </div>

            <Form />
        </div>
    );
};

export default Page;
