import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CertificateProps {
	item: any;
}

const Certificate: React.FC<CertificateProps> = ({ item }) => {
	return (
		<div className="w-full rounded overflow-hidden shadow-lg bg-white">
			<div className="w-full flex justify-end items-center gap-2 mb-2">
				<div className="rounded-full p-1 border border-blue-500 hover:bg-gray-200 transition-all cursor-pointer">
					<Pencil width={20} height={20} />
				</div>
				<div className="rounded-full p-1 border border-red-500 hover:bg-gray-200 transition-all cursor-pointer">
					<Trash width={20} height={20} />
				</div>
			</div>
			<Image
				className="w-full h-48 object-cover bg-gray-200"
				unoptimized={true}
				src={item.images[0].url}
				alt={item.title}
				width={200}
				height={200}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{item.title}</div>
				<p className="text-gray-700 text-base">{item.description}</p>
			</div>
		</div>
	);
};

export default Certificate;
