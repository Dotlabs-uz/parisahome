"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PaginationProps {
    products: any;
    searchParams: any;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
    products,
    searchParams
}) => {
    const [queryUrl, setQueryUrl] = useState('');
    const params = useParams();
    const totalPages = Math.ceil(products.total / 10);

    useEffect(() => {
        let url = '';
        for (let key in searchParams) {
            url += `&${key}=${searchParams[key]}`;
        }
        setQueryUrl(url);
    }, [searchParams]);

    const currentPage = +params.paginationPageId || 1;

    return (
        <div className="flex items-center mt-10 max-sm:mt-5 gap-2 justify-center mb-10">
            {/* Кнопка назад */}
            {currentPage > 1 && (
                <Link
                    href={`/${params.lang}/catalog/${currentPage - 1}?${queryUrl}`}
                    className="text-sm font-medium p-2 rounded border border-white text-white"
                >
                    Назад
                </Link>
            )}

            {/* Первая страница */}
            {currentPage > 2 && (
                <>
                    <Link
                        href={`/${params.lang}/catalog/1?${queryUrl}`}
                        className="text-lg font-medium px-3 py-1 rounded border border-white text-white"
                    >
                        1
                    </Link>
                    {currentPage > 3 && <span className="text-white">...</span>}
                </>
            )}

            {/* Предыдущая страница */}
            {currentPage > 1 && (
                <Link
                    href={`/${params.lang}/catalog/${currentPage - 1}?${queryUrl}`}
                    className="text-lg font-medium px-3 py-1 rounded border border-white text-white"
                >
                    {currentPage - 1}
                </Link>
            )}

            {/* Текущая страница */}
            <span className="text-lg font-medium px-3 py-1 rounded border border-yellow bg-yellow text-white">
                {currentPage}
            </span>

            {/* Следующая страница */}
            {currentPage < totalPages && (
                <Link
                    href={`/${params.lang}/catalog/${currentPage + 1}?${queryUrl}`}
                    className="text-lg font-medium px-3 py-1 rounded border border-white text-white"
                >
                    {currentPage + 1}
                </Link>
            )}

            {/* Последняя страница */}
            {currentPage < totalPages - 1 && (
                <>
                    {currentPage < totalPages - 2 && <span className="text-white">...</span>}
                    <Link
                        href={`/${params.lang}/catalog/${totalPages}?${queryUrl}`}
                        className="text-lg font-medium px-3 py-1 rounded border border-white text-white"
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {/* Кнопка вперед */}
            {currentPage < totalPages && (
                <Link
                    href={`/${params.lang}/catalog/${currentPage + 1}?${queryUrl}`}
                    className="text-sm font-medium p-2 rounded border border-white text-white"
                >
                    Вперед
                </Link>
            )}
        </div>
    );
};

export default Pagination;
