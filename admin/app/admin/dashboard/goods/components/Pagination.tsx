"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { GoodsType } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
    goods: GoodsType;
    searchParams: Record<string, string>;
}

const translations = [
    {
        morePages: "More pages",
        next: "Next",
        previous: "Previous",
    },
    {
        morePages: "Больше страниц",
        next: "Следующий",
        previous: "Предыдущий",
    },
];

const PaginationComponent: React.FunctionComponent<PaginationProps> = ({
    goods,
    searchParams,
}) => {
    const categoryQuery = searchParams["categoryId"] ? `&categoryId=${searchParams["categoryId"]}` : "";

    const currentPage = +searchParams["page"] || 1;
    const totalPages = Math.ceil(goods.total / 10);

    return (
        <Pagination className="mt-10 max-sm:mt-5 text-black">
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            href={`/admin/admin/dashboard/goods?page=${currentPage - 1
                                }${categoryQuery}`}
                        />
                    </PaginationItem>
                )}

                {currentPage > 2 && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                href={`/admin/admin/dashboard/goods?page=1${categoryQuery}`}
                            >
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </>
                )}

                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationLink
                            href={`/admin/admin/dashboard/goods?page=${currentPage - 1
                                }${categoryQuery}`}
                        >
                            {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationLink isActive href="#">
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>

                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationLink
                            href={`/admin/admin/dashboard/goods?page=${currentPage + 1
                                }${categoryQuery}`}
                        >
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                {currentPage < totalPages - 1 && (
                    <>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href={`/admin/admin/dashboard/goods?page=${totalPages}${categoryQuery}`}
                            >
                                {totalPages}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationNext
                            // translations={
                            //     translations[params.lang === "en" ? 0 : 1]
                            // }
                            href={`/admin/admin/dashboard/goods?page=${currentPage + 1
                                }${categoryQuery}`}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
