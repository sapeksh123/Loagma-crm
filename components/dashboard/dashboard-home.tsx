"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, ShoppingCart, AlertCircle, MapPin, Phone, ArrowUp, ArrowDown } from "lucide-react"

interface DashboardHomeProps {
  userRole: string
}

export function DashboardHome({ userRole }: DashboardHomeProps) {
  const kpiData = [
    {
      icon: Phone,
      label: "Total Leads",
      value: "1,248",
      change: "+12%",
      color: "bg-blue-500",
      trend: "up",
      target: "1,500",
    },
    {
      icon: Users,
      label: "Active Customers",
      value: "856",
      change: "+8%",
      color: "bg-green-500",
      trend: "up",
      target: "1,000",
    },
    {
      icon: ShoppingCart,
      label: "Orders This Month",
      value: "342",
      change: "+24%",
      color: "bg-purple-500",
      trend: "up",
      target: "300",
    },
    {
      icon: MapPin,
      label: "Visits Completed",
      value: "1,092",
      change: "+15%",
      color: "bg-orange-500",
      trend: "up",
      target: "1,200",
    },
    {
      icon: AlertCircle,
      label: "Open Tickets",
      value: "28",
      change: "-5%",
      color: "bg-red-500",
      trend: "down",
      target: "20",
    },
    {
      icon: TrendingUp,
      label: "Revenue",
      value: "$125.4K",
      change: "+18%",
      color: "bg-emerald-500",
      trend: "up",
      target: "$150K",
    },
  ]

  const chartData = [
    { month: "Jan", leads: 400, orders: 240, visits: 320, revenue: 12000 },
    { month: "Feb", leads: 520, orders: 290, visits: 380, revenue: 14500 },
    { month: "Mar", leads: 480, orders: 310, visits: 420, revenue: 15200 },
    { month: "Apr", leads: 620, orders: 380, visits: 510, revenue: 18900 },
    { month: "May", leads: 750, orders: 420, visits: 580, revenue: 21000 },
    { month: "Jun", leads: 890, orders: 480, visits: 650, revenue: 24500 },
  ]

  const conversionData = [
    { name: "Converted", value: 35, fill: "#10b981" },
    { name: "Pending", value: 45, fill: "#f59e0b" },
    { name: "Lost", value: 20, fill: "#ef4444" },
  ]

  const satisfactionData = [
    { rating: "5 Star", count: 245, fill: "#10b981" },
    { rating: "4 Star", count: 180, fill: "#3b82f6" },
    { rating: "3 Star", count: 95, fill: "#f59e0b" },
    { rating: "2 Star", count: 28, fill: "#ef4444" },
  ]

  const teamEfficiency = [
    { name: "John", efficiency: 92, target: 90 },
    { name: "Sarah", efficiency: 95, target: 90 },
    { name: "Mike", efficiency: 88, target: 90 },
    { name: "Lisa", efficiency: 91, target: 90 },
  ]

  const recentActivities = [
    { action: "New lead added", user: "John Telecaller", time: "2 hours ago", type: "lead", icon: Phone },
    { action: "Order created", user: "Sarah Sales", time: "4 hours ago", type: "order", icon: ShoppingCart },
    { action: "Visit completed", user: "Mike Sales", time: "6 hours ago", type: "visit", icon: MapPin },
    { action: "Complaint resolved", user: "Support Team", time: "1 day ago", type: "complaint", icon: AlertCircle },
    { action: "Customer upgraded", user: "Admin", time: "2 days ago", type: "customer", icon: Users },
  ]

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Welcome back! Here's your comprehensive business overview.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          const TrendIcon = kpi.trend === "up" ? ArrowUp : ArrowDown
          const trendColor = kpi.trend === "up" ? "text-green-600" : "text-red-600"

          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{kpi.label}</p>
                    <p className="text-xl md:text-2xl font-bold mt-2 truncate">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendIcon className={`w-4 h-4 ${trendColor} flex-shrink-0`} />
                      <p className={`text-xs ${trendColor} truncate`}>{kpi.change} from last month</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 truncate">Target: {kpi.target}</p>
                  </div>
                  <div className={`${kpi.color} p-3 rounded-lg flex-shrink-0`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Performance Trends */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Performance Trends</CardTitle>
            <CardDescription className="text-xs md:text-sm">Monthly leads, orders, and visits</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="visits" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Lead Conversion */}
        <Card>
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Lead Conversion</CardTitle>
            <CardDescription className="text-xs md:text-sm">Current status breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Revenue Trend */}
        <Card>
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Revenue Trend</CardTitle>
            <CardDescription className="text-xs md:text-sm">Monthly revenue growth</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b98133" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Team Efficiency */}
        <Card>
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl">Team Efficiency</CardTitle>
            <CardDescription className="text-xs md:text-sm">Performance vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={teamEfficiency}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#3b82f6" />
                <Bar dataKey="target" fill="#10b98133" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer Satisfaction */}
      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Customer Satisfaction</CardTitle>
          <CardDescription className="text-xs md:text-sm">Rating distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={satisfactionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="rating" type="category" width={70} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Recent Activity</CardTitle>
          <CardDescription className="text-xs md:text-sm">Latest updates from your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 md:space-y-4">
            {recentActivities.map((activity, index) => {
              const ActivityIcon = activity.icon
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 md:py-3 border-b last:border-0 gap-2"
                >
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="p-2 bg-muted rounded-lg flex-shrink-0">
                      <ActivityIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm md:text-base truncate">{activity.action}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{activity.user}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{activity.time}</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
