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
                    <Card title="Average Speed"  imgSrc="graph.svg"/>
                    <Card title="MFD"  imgSrc="graph.svg"/>
                    <Card title="Congestion Hotspots"  imgSrc="graph.svg"/>
                </div>

                <div className="flex-1">
                    <Card title="Map"  imgSrc="/map.png"/>
                </div>

                <div className="flex flex-col flex-1">
                    <Card title="Average Flows"  imgSrc="graph.svg"/>
                    <Card title="Emissions"  imgSrc="graph.svg"/>
                    <Card title="Level of Service"  imgSrc="graph.svg"/>
                </div>
            </div>
        </div>
    );
}