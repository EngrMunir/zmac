'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { AlNoteBook, AlUser } from "@/lib/icon"
import RegisterForm from "../registerForm"
import SingInForm from "../singInForm"
import Link from 'next/link'

const AccountDropdown = () => {
    const [isSingInFromShow, setIsSingInFromShow] = useState(true)
    const [isRegisterFromShow, setIsRegisterFromShow] = useState(true)

    return (
        <div className="relative group/sign">
            <div className="flex items-center gap-1 cursor-pointer">
                <span><AlUser className="size-8" /></span>
                <div>
                    <small className="leading-3 text-xs block ">Welcome</small>
                    <span className="leading-4 text-xs block font-bold ">Sign in / Register</span>
                </div>
            </div>
            <div className=" py-6 px-2 bg-white shadow-[0_2px_8px_0_rgba(0,0,0,.2)] rounded-3xl w-[300px] absolute left-1/2 -translate-x-1/2 z-30 top-10 opacity-0 invisible group-hover/sign:opacity-100 group-hover/sign:visible transition-all duration-300">
                <div className="bg-white w-4 h-4 rotate-45 absolute -top-2 left-1/2 -translate-x-1/2"></div>
                <div className="px-4">
                    <Dialog>
                        <DialogTrigger className="w-full bg-[#191919] text-xl font-bold text-white rounded-3xl flex justify-center items-center text-center h-12">
                            Sing in
                        </DialogTrigger>
                        <DialogContent className="max-w-md py-10">
                            {
                                isSingInFromShow ?
                                    <SingInForm setIsSingInFromShow={setIsSingInFromShow} setIsRegisterFromShow={setIsRegisterFromShow} />
                                    :
                                    <RegisterForm setIsRegisterFromShow={setIsRegisterFromShow} setIsSingInFromShow={setIsSingInFromShow} />
                            }
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger className="w-full text-accent text-sm leading-[18px] text-center mt-2 mb-4 inline-block">
                            Register
                        </DialogTrigger>
                        <DialogContent className="max-w-md py-10">
                            {
                                isRegisterFromShow ?
                                    <RegisterForm setIsRegisterFromShow={setIsRegisterFromShow} setIsSingInFromShow={setIsSingInFromShow} />
                                    :
                                    <SingInForm setIsSingInFromShow={setIsSingInFromShow} setIsRegisterFromShow={setIsRegisterFromShow} />
                            }
                        </DialogContent>
                    </Dialog>
                </div>
                <span className="w-full h-px bg-[#ebebeb] block"></span>
                <ul className="mt-2">
                    <li>
                        <Link href={"/overview"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                            <AlNoteBook />
                            <span className="inline-block mt-[3px]">My Account</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                            <AlNoteBook />
                            <span className="inline-block mt-[3px]">My Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                            <AlNoteBook />
                            <span className="inline-block mt-[3px]">My Coins</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-1.5 text-base text-[#222] leading-normal py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">
                            <AlNoteBook />
                            <span className="inline-block mt-[3px]">Message Center</span>
                        </Link>
                    </li>
                </ul>
                <span className="w-full h-px bg-[#ebebeb] block my-2"></span>
                <ul>
                    <li>
                        <Link href={"#"} className="text-accent leading-normal block py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">Settings</Link>
                    </li>
                    <li>
                        <Link href={"#"} className="text-accent leading-normal block py-2 px-4 rounded-md hover:text-red-600 hover:bg-slate-100  transition-all">ZMAC Business</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountDropdown