import Head from 'next/head'
import Header from '../headerUser/Header'
import { useState } from 'react'
import Sidebar from '../sidebar/SIdebar'
import MobileMenu from '../MobileMenu'
import { mobileOptions } from './mobileOptions'

export default function Layout({ children, title }) {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="lg:base-background flex flex-col lg:flex-row h-screen lg:overflow-hidden w-screen">
                <Sidebar />
                <Header setMobileMenu={setMobileMenu} />
                <MobileMenu
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    options={mobileOptions}
                />
                {children}
            </div>
        </>
    )
}
