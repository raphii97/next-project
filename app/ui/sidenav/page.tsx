export default function SideNav() {
    return (
        <div className="h-full w-64 bg-gray-100 flex flex-col">
            <div className="text-2xl font-bold m-6 text-center">Logo</div>
            <nav className="flex flex-col">
                <a href="#" className="hover:bg-blue-100 p-2">Dashboard</a>
                <a href="#" className="hover:bg-blue-100 p-2">Demo</a>
                <a href="#" className="hover:bg-blue-100 p-2">About</a>
            </nav>
        </div>
    );
}
