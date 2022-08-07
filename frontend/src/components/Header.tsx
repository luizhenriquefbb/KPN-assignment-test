import Logo  from "./Logo";


export function Header() {
    return (
        <header className="w-full h-20 py-5 px-48 flex items-center justify-center bg-gradient-to-r from-myGreen-1 to-myGreen-2">
            <Logo style={{ height: 70 }} />
        </header>
    )

}