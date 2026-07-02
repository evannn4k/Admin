import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", jam: 40 },
  { month: "February", jam: 28 },
  { month: "March", jam: 34 },
  { month: "April", jam: 52 },
  { month: "May", jam: 27 },
  { month: "June", jam: 36 },
];

const chartConfig = {
  jam: {
    label: "Jam",
    color: "var(--chart-1)",
  },
};

export default function ChartDashboard() {
  return (
    <div className="bg-brand-100 p-4 rounded-2xl border border-zinc-200">
      <div className="flex items-center gap-2 text-brand-500 font-semibold text-lg">
        <FontAwesomeIcon icon={faChartLine} /> Activity
      </div>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="jam"
            type="natural"
            fill="var(--color-jam)"
            fillOpacity={0.4}
            stroke="var(--color-jam)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
