import Nav from './Nav'
import Logout from './Logout'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex lg:hidden items-center h-20 min-h-[80px] pl-10  lg:px-20 shadow">
            <Logout />
            <Nav setMobileMenu={setMobileMenu} />
        </header>
    )
}
