import { MenuIcon } from '@heroicons/react/solid'

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
        </>
    )
}
