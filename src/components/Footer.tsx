import { Separator } from "@/components/ui/separator";


export const Footer = () => {


    return (
        <footer className="mt-5">
            <Separator />
            <div className=" flex justify-between my-5 mx-3">
                <p className=" font-semibold text-primary">Projeto de estudos B7Web</p>
                <p className="font-semibold text-primary">Wesley Pimentel &copy; </p>
            </div>
        </footer>
    )
};