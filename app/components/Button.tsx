export default function Button(
    {text, className="", alt}: {text: string, className?: string, alt: boolean}
) {
    return (
    <div className={"py-4 px-16 w-fit h-fit border-primary " + (alt ? "bg-transparent": "bg-primary") +
        " border duration-300 hover:cursor-pointer " + (!alt ? "hover:bg-transparent": "hover:bg-primary") +
        " hover:text-white " + className}>
        {text}
    </div>
    );
}