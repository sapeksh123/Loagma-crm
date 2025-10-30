"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ReportsModule() {
  const [dateRange, setDateRange] = useState("month")

  const salesData = [
    { week: "Week 1", sales: 4000, target: 4500, expenses: 1200 },
    { week: "Week 2", sales: 5200, target: 4500, expenses: 1400 },
    { week: "Week 3", sales: 4800, target: 4500, expenses: 1300 },
    { week: "Week 4", sales: 6100, target: 4500, expenses: 1600 },
  ]

  const teamPerformance = [
    { name: "John", leads: 45, orders: 12, visits: 28, conversion: 26.7 },
    { name: "Sarah", leads: 52, orders: 15, visits: 32, conversion: 28.8 },
    { name: "Mike", leads: 38, orders: 10, visits: 24, conversion: 26.3 },
    { name: "Lisa", leads: 48, orders: 14, visits: 30, conversion: 29.2 },
  ]

  const productPerformance = [
    { product: "Product A", sales: 4200, growth: 12 },
    { product: "Product B", sales: 3800, growth: 8 },
    { product: "Product C", sales: 5100, growth: 15 },
    { product: "Product D", sales: 2900, growth: 5 },
  ]

  const regionData = [
    { name: "Downtown", value: 2400, fill: "#3b82f6" },
    { name: "Midtown", value: 1800, fill: "#10b981" },
    { name: "Uptown", value: 1200, fill: "#f59e0b" },
    { name: "Suburbs", value: 1600, fill: "#ef4444" },
  ]

  const monthlyTrend = [
    { month: "May", revenue: 24000, orders: 120, customers: 450 },
    { month: "Jun", revenue: 28000, orders: 140, customers: 520 },
    { month: "Jul", revenue: 32000, orders: 160, customers: 580 },
    { month: "Aug", revenue: 38000, orders: 190, customers: 650 },
    { month: "Sep", revenue: 42000, orders: 210, customers: 720 },
    { month: "Oct", revenue: 48000, orders: 240, customers: 800 },
  ]

  const reportStats = {
    totalRevenue: "$48,000",
    totalOrders: 240,
    avgOrderValue: "$200",
    conversionRate: "28.2%",
    customerRetention: "85%",
    teamEfficiency: "91%",
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Comprehensive business performance and team metrics
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export Report</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
            <div className="flex gap-2 flex-wrap">
              {["week", "month", "quarter", "year"].map((range) => (
                <Button
                  key={range}
                  variant={dateRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateRange(range)}
                  className={`text-xs md:text-sm ${dateRange === range ? "" : "bg-transparent"}`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </Button>
              ))}
            </div>
            <div className="flex-1 min-w-0 w-full md:w-auto">
              <Input type="date" placeholder="Custom date range" className="text-sm" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2">{reportStats.totalRevenue}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Orders</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2">{reportStats.totalOrders}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Avg Order Value</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2">{reportStats.avgOrderValue}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-lg md:text-2xl font-bold text-green-600 mt-1 md:mt-2">{reportStats.conversionRate}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Customer Retention</p>
              <p className="text-lg md:text-2xl font-bold text-blue-600 mt-1 md:mt-2">
                {reportStats.customerRetention}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Team Efficiency</p>
              <p className="text-lg md:text-2xl font-bold text-purple-600 mt-1 md:mt-2">{reportStats.teamEfficiency}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Weekly Sales Performance</CardTitle>
            <CardDescription className="text-xs md:text-sm">Sales vs Target vs Expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" />
                <Bar dataKey="target" fill="#10b981" />
                <Bar dataKey="expenses" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Regional Distribution</CardTitle>
            <CardDescription className="text-xs md:text-sm">Sales by region</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Monthly Trend</CardTitle>
          <CardDescription className="text-xs md:text-sm">Revenue, orders, and customer growth</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="customers" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Team Performance</CardTitle>
          <CardDescription className="text-xs md:text-sm">Individual metrics and conversion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 md:px-4 font-semibold">Team Member</th>
                  <th className="text-left py-3 px-2 md:px-4 font-semibold">Leads</th>
                  <th className="text-left py-3 px-2 md:px-4 font-semibold">Orders</th>
                  <th className="text-left py-3 px-2 md:px-4 font-semibold">Visits</th>
                  <th className="text-left py-3 px-2 md:px-4 font-semibold">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {teamPerformance.map((member, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-2 md:px-4 font-medium">{member.name}</td>
                    <td className="py-3 px-2 md:px-4">{member.leads}</td>
                    <td className="py-3 px-2 md:px-4">{member.orders}</td>
                    <td className="py-3 px-2 md:px-4">{member.visits}</td>
                    <td className="py-3 px-2 md:px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {member.conversion.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Product Performance</CardTitle>
          <CardDescription className="text-xs md:text-sm">Sales and growth by product</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={productPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" />
              <Bar dataKey="growth" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
