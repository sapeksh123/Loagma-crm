"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Calendar, DollarSign, Package, Download } from "lucide-react"

export function OrdersModule() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "ABC Store",
      date: "2024-11-12",
      amount: "$2,450",
      status: "Delivered",
      items: 5,
      fulfillment: "100%",
      paymentStatus: "Paid",
      shippingDate: "2024-11-10",
      deliveryDate: "2024-11-12",
      notes: "Delivered on time",
    },
    {
      id: "ORD002",
      customer: "XYZ Retail",
      date: "2024-11-11",
      amount: "$1,890",
      status: "Processing",
      items: 3,
      fulfillment: "60%",
      paymentStatus: "Pending",
      shippingDate: "2024-11-13",
      deliveryDate: "2024-11-15",
      notes: "Awaiting payment confirmation",
    },
    {
      id: "ORD003",
      customer: "Daily Mart",
      date: "2024-11-10",
      amount: "$3,200",
      status: "Delivered",
      items: 8,
      fulfillment: "100%",
      paymentStatus: "Paid",
      shippingDate: "2024-11-09",
      deliveryDate: "2024-11-10",
      notes: "Bulk order completed",
    },
    {
      id: "ORD004",
      customer: "Quick Shop",
      date: "2024-11-09",
      amount: "$950",
      status: "Pending",
      items: 2,
      fulfillment: "20%",
      paymentStatus: "Paid",
      shippingDate: "2024-11-14",
      deliveryDate: "2024-11-16",
      notes: "Awaiting stock confirmation",
    },
    {
      id: "ORD005",
      customer: "Super Store",
      date: "2024-11-08",
      amount: "$4,100",
      status: "Shipped",
      items: 6,
      fulfillment: "90%",
      paymentStatus: "Paid",
      shippingDate: "2024-11-12",
      deliveryDate: "2024-11-14",
      notes: "In transit",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredOrders = orders.filter((o) => {
    const matchesSearch = o.id.includes(searchTerm) || o.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || o.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const statusColors = {
    Delivered: "bg-green-100 text-green-800",
    Processing: "bg-blue-100 text-blue-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-purple-100 text-purple-800",
  }

  const paymentColors = {
    Paid: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
  }

  const orderStats = {
    total: orders.length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
    processing: orders.filter((o) => o.status === "Processing").length,
    totalRevenue: orders.reduce((sum, o) => sum + Number.parseInt(o.amount.replace(/[$,]/g, "")), 0),
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Order Management</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track and manage all customer orders with fulfillment details
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Create Order</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Orders</p>
              <p className="text-2xl md:text-3xl font-bold mt-2">{orderStats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Delivered</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">{orderStats.delivered}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Processing</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">{orderStats.processing}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-2">
                ${(orderStats.totalRevenue / 1000).toFixed(1)}K
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground flex-shrink-0" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-sm"
                />
              </div>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-sm"
            >
              <option value="all">All Status</option>
              <option value="Delivered">Delivered</option>
              <option value="Shipped">Shipped</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Orders</CardTitle>
          <CardDescription className="text-xs md:text-sm">{filteredOrders.length} orders found</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Items</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Fulfillment</th>
                  <th className="text-left py-3 px-4 font-semibold">Payment</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {order.date}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {order.items}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 font-semibold">
                        <DollarSign className="w-4 h-4 flex-shrink-0" />
                        {order.amount}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status as keyof typeof statusColors]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: order.fulfillment }}></div>
                        </div>
                        <span className="text-xs font-medium">{order.fulfillment}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${paymentColors[order.paymentStatus as keyof typeof paymentColors]}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-sm">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.customer}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${statusColors[order.status as keyof typeof statusColors]}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">{order.amount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Items</p>
                        <p className="font-medium">{order.items}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Payment</p>
                        <p className="font-medium">{order.paymentStatus}</p>
                      </div>
                    </div>
                    <div className="bg-muted p-2 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Fulfillment</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-background rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: order.fulfillment }}></div>
                        </div>
                        <span className="text-xs font-medium">{order.fulfillment}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
