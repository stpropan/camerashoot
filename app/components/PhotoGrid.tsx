import Image from "next/image"

export default function PhotoGrid(
    { photos, className="" }: { photos: Photo[], className?: string }
) {
    return (
        <div className={"grid grid-cols-2 gap-2 " + className}>
            {
                photos.map((photo, index) => {
                    return (<Image
                        src={photo.src}
                        alt={photo.alt}
                        width={200}
                        height={200}
                        key={index}
                        className="w-[250px] h-[250px] object-cover"
                    />)
                })
            }
        </div>
    )
}

interface Photo {
    alt: string,
    src: string,
}