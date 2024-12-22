import Image from "next/image";

export default function PrefItem(
    {image, alt, title, desc}: {image: string, alt: string|null, title: string, desc: string}
) {
    return (<div className="w-[250px] bg-[#dddddd] border border-a0 p-5 pt-10 flex flex-col items-center relative">
        <Image
            src={image}
            width={50}
            height={50}
            alt={alt||"pref"}
            className="absolute -top-6"
        />
        <div className="text-center font-bold">
            {title}
        </div>
        <div className="text-center mt-5">
            {desc}
        </div>
    </div>);
}