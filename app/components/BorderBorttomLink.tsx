export default function BorderBorttomLink(
    {name, href=""}: {name: string, href?: string}
) {
    return (<a
        className="relative hover:cursor-pointer
        hover:before:block before:hidden
        before:border-b before:border-white
        before:absolute before:-bottom-2
        before:w-full before:h-full
        hover:before:animate-extending"
        href={href}>
        {name}
    </a>)
}