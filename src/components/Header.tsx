import { Logo } from "./Logo";
import { Sidebar } from "@/components/cart/Sidebar";
import { ThemeToggle } from "./theme-toggle";


export const Header = () => {


    return (
        <header className=" flex justify-between my-5 mx-3">
            <>
                <div className=" flex gap-3 items-center">
                    <Logo />
                    <ThemeToggle />
                </div>

                <div>
                    <Sidebar />
                </div>
            </>

        </header>
    )
};