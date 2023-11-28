import Link from "next/link";

export default function Nav() {
    return (
        <header>
            <nav
                className="flex items-center justify-center p-6 lgLpx-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-l.5 p-1.5">
                        Next.js Authentication
                    </a>
                </div>
                <Link href="/dashboard" className="px-5">Dashboard</Link>
                <Link href="/getuser">User</Link>
                <Link href="/login" className="px-5">Login</Link>
            </nav>
        </header>
    )
}