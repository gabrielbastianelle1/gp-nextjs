import { MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem'
import Link from 'next/link'

export default function Nav({ setMobileMenu }) {
    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <>
            <MenuIcon
                onClick={openMobileMenu}
                className="h-12 ml-auto mr-10 stroke-slate-600 cursor-pointer lg:hidden "
            />

            <nav className="hidden lg:block flex-grow">
                <div className="flex justify-end space-x-20">
                    <NavItem hrefLink="/signin" text="Login" />
                    <NavItem hrefLink="/signup" text="Registo" />
                </div>
            </nav>
        </>
    )
}
