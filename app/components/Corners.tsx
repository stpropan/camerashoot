export default function Corners({ color="#fff" }: {color?: string}) {
    return (
        <>
            <div className="absolute block top-0 left-0 w-[20px] h-[20px] border-t border-l border-white"></div>
            <div className="absolute block top-0 right-0 w-[20px] h-[20px] border-t border-r border-white"></div>
            <div className="absolute block bottom-0 right-0 w-[20px] h-[20px] border-b border-r border-white"></div>
            <div className="absolute block bottom-0 left-0 w-[20px] h-[20px] border-b border-l border-white"></div>
        </>
    )
}