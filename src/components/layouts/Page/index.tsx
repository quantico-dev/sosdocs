import { seo } from "@/utils/seo"
import Head from "next/head"
import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"
import { ReactNode } from "react"

interface IPage {
    name: string;
    children: ReactNode;
}

export const Page = ({ name, children }: IPage) => {
    return (
        <>
            <Head>
                <title>{seo[name].title}</title>
                <meta name="description" content={seo[name].description} />
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
