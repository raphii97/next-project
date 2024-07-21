import Card from "@/app/ui/card/page"

export default function Dashboard () {
    return (
        <div className="flex flex-col flex-1 h-screen">
            <div className="flex items-center bg-gray-200 p-2">
                <button className="hamburger p-2">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div>Dashboard</div>
            </div>

            <div className="flex flex-1">
                <div className="flex flex-col flex-1">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className="flex-1">
                    <Card />
                </div>

                <div className="flex flex-col flex-1">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}