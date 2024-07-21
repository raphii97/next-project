export default function Dashboard () {
    return (
        <div className="flex-col flex-1">
            <div className="flex items-center bg-gray-200 p-2">
                <button className="hamburger p-2">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div>Dashboard</div>
            </div>
            <h1>Hello!</h1>
        </div>
    );
}