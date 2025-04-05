import { Dispatch, SetStateAction } from "react"
import { Link } from "react-scroll"
import { Input } from "@/components/ui/input"
import { AlFacebookOriginal, AlGoogleOriginal } from "@/lib/icon"
import { Button } from "../ui/button"

const SingInForm = ({ setIsSingInFromShow, setIsRegisterFromShow }: { setIsSingInFromShow: Dispatch<SetStateAction<boolean>>, setIsRegisterFromShow: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div>
            <p className="text-2xl text-start mb-3 font-bold">Sing In</p>
            <form action="">
                <Input placeholder="Please enter your phone number or email" className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6" />
                <Input type="password" placeholder="Please enter your password" className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6 mt-6" />
                <p className="text-right mt-1.5 text-accent text-[15px]">
                    <Link to={"#"} className="hover:text-primary-foreground">Forgot password?</Link>
                </p>
                <p className="text-accent text-center mt-10 flex items-center gap-4">
                    <span className="block w-full h-px bg-[rgba(0,0,0,0.43)]"></span>
                    <span className="shrink-0">Or, Login With</span>
                    <span className="block w-full h-px bg-[rgba(0,0,0,0.43)]"></span>
                </p>
                <div className="flex justify-between gap-5 mt-5">
                    <div className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-[rgba(0,0,0,0.43)] transition-all duration-300">
                        <AlGoogleOriginal className="size-7" />
                        <span>Google</span>
                    </div>
                    <div className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-[rgba(0,0,0,0.43)] transition-all duration-300">
                        <AlFacebookOriginal className="size-7" />
                        <span>Facebook</span>
                    </div>
                </div>
                <Button size={"sm"} className="w-full mt-8 font-bold text-lg">Log In</Button>
                <p className="text-accent text-sm mt-5 text-center">Don't have an account? <span onClick={() => { setIsSingInFromShow(false), setIsRegisterFromShow(true) }} className="font-semibold text-primary-foreground cursor-pointer">Register</span></p>
            </form>
        </div>
    )
}

export default SingInForm