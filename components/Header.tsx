'use client';

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/Hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import Button from "./Button";
import useAuthModal from "@/Hooks/useAuthModal";



interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({

    children,
    className,
}) => {
    const authModal = useAuthModal();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user, subscription } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        router.refresh();
        // Reset any playing songs
        if (error) {
            toast.error(error.message);
        }else{
            toast.success('Logged out successfully');
        }
    }
    return (

        <div
            className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
                className
            )}
        >
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            ">
                <div className="
                hidden
                md:flex
                gap-x-2
                items-center
                ">

                    <button
                        className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft size={35} className='text-white' />
                    </button>

                    <button
                        className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight size={35} className='text-white' />

                    </button>

                </div>
                <div className="
                flex
                md:hidden
                gap-x-2
                items-center
                ">
                    <button className="
                    rounded-full
                    p-2
                    bg-white
                    flex   
                    justify-center
                    hover:opacity-75
                    transition
                    ">
                        <HiHome className='
                            text-black
                        ' />

                    </button>

                    <button className="
                    rounded-full
                    p-2
                    bg-white
                    flex   
                    justify-center
                    hover:opacity-75
                    transition
                    ">
                        <BiSearch className='
                            text-black
                        ' />
                    </button>
                </div>
                <div className="
                flex
                justify-between
                items-center
                gap-x-4
                ">
                    {user ? (
                        <div className="
                        flex
                        gap-x-4
                        items-center

                        ">
                            <Button
                            onClick={handleLogout}
                            className="
                            bg-white
                            px-6
                            py-2
                            "
                            >
                                logout
                            </Button>

                            <Button className="
                            bg-white
                            "
                            onClick={() => router.push('/account')}
                            >
                                <FaUserAlt />
                            </Button>
                            
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}
                                    className="
                        bg-transparent
                        text-neutral-300
                        font-medium
                        "
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}

                                    className="
                        bg-white
                        px-6
                        py-2
                        "

                                >
                                    Sign in
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}

        </div>
    );


}

export default Header;

