import Image from "next/image"

interface CardProps {
    title: string;
    imgSrc: string;
}

// @ts-ignore
export default function Card({ title, imgSrc } : CardProps) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow m-2 p-2">
            <h2 className="p-2">{title}</h2>
            <Image src={imgSrc} width={400} height={400} alt="Card Image"/>
        </div>
    );
}