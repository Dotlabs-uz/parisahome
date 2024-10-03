import Image from "next/image";
import React from "react";

interface CertificateProps {
	item: any;
}

const Certificate: React.FC<CertificateProps> = ({ item }) => {
	return (
		<div className="w-full rounded overflow-hidden shadow-lg bg-white">
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
