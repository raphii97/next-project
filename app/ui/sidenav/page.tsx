import Link from "next/link";

export default function SideNav() {
    return (
        <div className="h-full w-64 bg-gray-100 flex flex-col">
            <div className="text-2xl font-bold m-6 text-center">Logo</div>
            <nav className="flex flex-col">
                <Link href="../dashboard" className="hover:bg-blue-100 p-2">Dashboard</Link>
                <Link href="../demo" className="hover:bg-blue-100 p-2">Demo</Link>
                <Link href="../about" className="hover:bg-blue-100 p-2">About</Link>
            </nav>
        </div>
    );
}
