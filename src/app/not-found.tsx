import { Button } from "@/components/ui/button"
import Link from "next/link"


const Error = () => {
    return (
        <section className="bg-popover min-h-screen grid items-center">
            <div className="max-w-[1024px] max-h-[500px] w-full h-full rounded-lg mx-auto bg-background py-15 text-center grid items-center">
                <div>
                    <h1 className="text-6xl font-semibold mb-2">404</h1>
                    <h2 className="text-2xl font-semibold">Sorry, we can't find that page</h2>
                    <Button className="mt-7 px-15 rounded-full">
                        <Link href={"/"}>Back To Home</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Error