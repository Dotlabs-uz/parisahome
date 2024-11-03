"use client";

import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { GoodItemType, GoodsType } from "@/types";
import { getCookies } from "@/lib/cookies.request";
import { callMessage } from "@/lib/utils";
import action from "../../actions";
import { useRouter } from "next/navigation";

const DeleteGoods = async (id: number) => {
    const token = await getCookies("token");

    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/product/" + id,
        {
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (res.ok) {
        callMessage("default", "Product deleted successfully");
        action("product");
    } else {
        console.error("Error deleting product:", res.statusText);
        callMessage("destructive", "Something went wrong");
    }
};

export const columns: ColumnDef<GoodItemType>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "ruName",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("ruName")}</div>
        ),
    },
    {
        accessorKey: "categoryId",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    CategoryId
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const payment: any = row.original;

            return <div className="lowercase">{payment.category.ruTitle}</div>;
        },
    },
    {
        accessorKey: "images",
        header: () => <div>Images</div>,
        cell: ({ row }) => {
            const images: any = row.getValue("images");

            return (
                <div className="flex items-center gap-2">
                    {images.map((item: any) => (
                        <Image
                            key={item.id}
                            src={item.url}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                        />
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));

            const formatted = new Intl.NumberFormat("SUM", {
                style: "currency",
                currency: "SUM",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            const { push } = useRouter();

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    payment.id.toString()
                                )
                            }
                        >
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                                push(`/admin/dashboard/goods/${payment.id}`);
                            }}
                        >
                            Update
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="text-red-500 focus:text-white focus:bg-red-500 cursor-pointer"
                            onClick={() => DeleteGoods(+payment.id)}
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export function GoodsTable({ goods: { data } }: { goods: GoodsType }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-black">
                    Goods List
                </h2>
            </div>
            <div className="rounded-md border text-black">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 pt-4"></div>
        </div>
    );
}
