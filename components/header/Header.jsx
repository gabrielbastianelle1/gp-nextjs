import Nav from './Nav'
import Link from 'next/link'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex items-center h-20 min-h-[80px] pl-10  lg:px-20 shadow">
            <Link href="/">
                <img className="h-20" src="/images/logo.jpeg" />
            </Link>
            <Nav setMobileMenu={setMobileMenu} />
        </header>
    )
}
