"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = ({ lang }: any) => {
    const links = [
        { link: `/${lang}`, title: "Home" },
        { link: `/${lang}/about-us`, title: "О нас" },
        { link: `/${lang}/catalog`, title: "Каталог" },
        { link: `/${lang}/contacts`, title: "Контакты" },
        { link: `/${lang}/machineries`, title: "Станки" },
        { link: `/${lang}/certificates`, title: "Сертификаты" },
    ];

    const [openModal, setOpenModal] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement | null>(null);
    const container = useRef<any>();
    const tl = useRef<any>();

    const isActive = (link: string) => {
        const langPrefix = ['/ru', '/en', '/jpn', '/uz'].find(prefix => pathname.startsWith(prefix)) || '/uz';
        const adjustedLink = link.replace(/^\/(ru|en|jpn|uz)/, langPrefix);
        return adjustedLink === langPrefix ? pathname === langPrefix : pathname.startsWith(adjustedLink);
    };

    // Функция для смены языка
    const changeLanguage = (newLang: string) => {
        const currentLang = pathname.split('/')[1];
        const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
        router.push(newPath); // Переход на новую страницу с обновленным языковым префиксом
    };

    useLayoutEffect(() => {
        let lastScrollY = 0;

        // ScrollTrigger для отслеживания прокрутки
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            onUpdate: (self) => {
                const scrollY = window.scrollY;

                if (scrollY > lastScrollY) {
                    // Прокрутка вниз — скрываем header
                    gsap.to(headerRef.current, { y: "-100%", duration: 0.7, ease: "none" });
                } else {
                    // Прокрутка вверх — показываем header
                    gsap.to(headerRef.current, { y: "0%", duration: 0.7, ease: "none" });
                }
                lastScrollY = scrollY;
            },
        });
    }, []);

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    useEffect(() => {
        if (openModal) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [openModal]);

    return (
        <header
            ref={headerRef}
            className="w-full fixed z-50 top-0 left-0 md:border-b md:border-white/40 bg-green"
        >
            <div ref={container} className="custom-container flex items-center justify-between py-3 relative z-10">
                <Link href={`/`} className="header relative z-40">
                    <Image
                        className="w-24 max-lg:w-20"
                        src={"/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                    />
                </Link>

                <nav className="menu-overlay relative z-30">
                    <ul className="flex items-center gap-5 max-lg:gap-3 max-md:hidden">
                        {links.map((i, idx) => (
                            <li
                                key={idx}
                                className={`text-sm font-semibold py-0.5 px-2 rounded-md header text-white ${isActive(i.link) ? "bg-yellow" : ""}`}
                            >
                                <Link href={i.link}>{i.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="hidden max-md:flex max-md:flex-col md:items-center md:justify-between gap-5 max-md:gap-3 px-3 max-md:pt-5 mx-auto">
                        {links.map((i, idx) => (
                            <li key={idx} className={`menu-link-item`}>
                                <p
                                    className={`menu-link-item-holder md:leading-loose text-3xl font-medium py-0.5 px-2 rounded-md text-white ${isActive(i.link) ? "bg-yellow" : ""
                                        }`}
                                >
                                    <Link onClick={() => setOpenModal(false)} href={i.link}>
                                        {i.title}
                                    </Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex gap-5">
                    <div className="custom-select text-white relative z-40">
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={lang}
                            className="select"
                        >
                            <option value="ru" className="bg-yellow">RU</option>
                            <option value="en" className="bg-yellow">EN</option>
                            <option value="uz" className="bg-yellow">UZ</option>
                            <option value="jpn" className="bg-yellow">JPN</option>
                        </select>
                    </div>
                    {/* <div className="custom-select relative w-full">
                        <select
                            className="footer-select"
                        >
                            <option value="1" defaultChecked>dwqdqwd</option>
                            <option value="instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="tiktok">Tik Tok</option>
                        </select>
                    </div> */}
                    <button
                        onClick={() => setOpenModal(!openModal)}
                        className="md:hidden z-10"
                    >
                        <IoMenu className="text-[24px] text-white" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
