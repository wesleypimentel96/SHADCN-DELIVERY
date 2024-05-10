import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TabsSkeleton } from "@/components/products/Skeleton";
import { ProductsTab } from "@/components/products/Tab";
import { Suspense } from "react";



const Home = () => {
    return (
        <div className=" w-full max-w-4xl mx-auto">
            <Header />
            <div className=" mx-3">
                

                <Suspense fallback={<TabsSkeleton />}>
                    <ProductsTab />
                </Suspense>
            </div>
            <Footer />
        </div>

    )
};



export default Home;