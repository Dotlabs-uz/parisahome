"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
    useEffect(() => {
        const splitTypes = document.querySelectorAll(".text-split");

        splitTypes.forEach((char: any) => {
            const bg = "#000000";
            const fg = "#F1F1F1";

            const text = new SplitType(char, { types: "chars" });

            let windowWidth = window.innerWidth;

            const runSplit = () => {
                gsap.fromTo(
                    text.chars,
                    { color: bg },
                    {
                        color: fg,
                        duration: 1,
                        stagger: 0.05,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: char,
                            start: "top bottom",
                            end: "top center",
                            scrub: true,
                            markers: true,
                            toggleActions: "play play reverse reverse",
                        },
                    }
                );
            };

            runSplit();

            const handleResize = () => {
                if (windowWidth !== window.innerWidth) {
                    windowWidth = window.innerWidth;
                    text.revert();
                    runSplit();
                }
            };

            window.addEventListener("resize", handleResize);

            // Удаление обработчика при размонтировании компонента
            return () => {
                window.removeEventListener("resize", handleResize);

                // Удаление всех ScrollTrigger
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }, []);

    return (
        <div className="text-animation-container">
            <h2 className="text-split">
                Анимация текста с <strong>GSAP</strong> и <strong>SplitType</strong> в Next.js
            </h2>
        </div>
    );
};

export default TextAnimation;
