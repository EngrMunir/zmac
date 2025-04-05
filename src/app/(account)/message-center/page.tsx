const MessageCenter = () => {
    return (
        <div className="bg-background rounded-md min-h-[470px] h-full">
            <div className="px-5 grid grid-cols-[30%_auto] h-full relative after:absolute after:left-0 after:top-12 after:w-full after:border-b">
                <div className="border-r border-b pt-3">
                    <span className="text-xl">Messages</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default MessageCenter