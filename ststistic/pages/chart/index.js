import {
    ResponsiveContainer,
    AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts"
import Layout from "../../components/Layout";
import mockedData from "./data"

export default function ChartPage() {
    const data = mockedData()
    return <Layout title="Chart title">
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id={"color"} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}></stop>
                    </linearGradient>
                </defs>
                <Area dataKey="value" stroke="#2451B7" fill="url(#color)"/>
                <XAxis dataKey="date" axisLine={false} tickLine={false}/>
                <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount={5} tickFormatter={number => `$ ${number}`}/>
                <Tooltip/>
                <CartesianGrid opacity={0.3} vertical={false}/>
            </AreaChart>
        </ResponsiveContainer>
    </Layout>
}
