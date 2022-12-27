import Nav from './Nav'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex items-center h-20 px-20 shadow">
            <p className="font-extrabold text-lg">Logo</p>
            <Nav setMobileMenu={setMobileMenu} />
        </header>
    )
}
