export default function List({ children, title, className }) {
    return (
        <div
            className={`${className} flex flex-col bg-white w-10/12 max-w-3xl pb-6 m-auto mt-10 rounded-3xl min-w-[300px] space-y-3 `}
        >
            <header className="bg-headerList rounded-3xl p-3 text-center text-2xl">
                {title}
            </header>
            {children}
        </div>
    )
}
