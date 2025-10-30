"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MapPin, TrendingUp, Phone, Mail, Download } from "lucide-react"

export function CustomersModule() {
  const [customers] = useState([
    {
      id: 1,
      name: "ABC Store",
      location: "Downtown",
      lastOrder: "2024-11-10",
      totalOrders: 12,
      status: "Active",
      email: "abc@store.com",
      phone: "9876543210",
      totalSpent: "$24,500",
      avgOrderValue: "$2,042",
      loyaltyScore: 850,
      engagement: "High",
    },
    {
      id: 2,
      name: "XYZ Retail",
      location: "Midtown",
      lastOrder: "2024-11-08",
      totalOrders: 8,
      status: "Active",
      email: "xyz@retail.com",
      phone: "9876543211",
      totalSpent: "$16,200",
      avgOrderValue: "$2,025",
      loyaltyScore: 720,
      engagement: "Medium",
    },
    {
      id: 3,
      name: "Quick Shop",
      location: "Uptown",
      lastOrder: "2024-10-25",
      totalOrders: 5,
      status: "Inactive",
      email: "quick@shop.com",
      phone: "9876543212",
      totalSpent: "$8,900",
      avgOrderValue: "$1,780",
      loyaltyScore: 450,
      engagement: "Low",
    },
    {
      id: 4,
      name: "Daily Mart",
      location: "Suburbs",
      lastOrder: "2024-11-12",
      totalOrders: 15,
      status: "Active",
      email: "daily@mart.com",
      phone: "9876543213",
      totalSpent: "$32,800",
      avgOrderValue: "$2,187",
      loyaltyScore: 920,
      engagement: "Very High",
    },
    {
      id: 5,
      name: "Super Store",
      location: "Downtown",
      lastOrder: "2024-11-11",
      totalOrders: 10,
      status: "Active",
      email: "super@store.com",
      phone: "9876543214",
      totalSpent: "$21,500",
      avgOrderValue: "$2,150",
      loyaltyScore: 780,
      engagement: "High",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredCustomers = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || c.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const customerStats = {
    total: customers.length,
    active: customers.filter((c) => c.status === "Active").length,
    totalRevenue: customers.reduce((sum, c) => sum + Number.parseInt(c.totalSpent.replace(/[$,]/g, "")), 0),
    avgOrderValue: (
      customers.reduce((sum, c) => sum + Number.parseInt(c.avgOrderValue.replace(/[$,]/g, "")), 0) / customers.length
    ).toFixed(0),
  }

  const engagementColor = {
    "Very High": "bg-green-100 text-green-800",
    High: "bg-blue-100 text-blue-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-red-100 text-red-800",
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Customer Management</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            View and manage your customer database with detailed metrics
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Customer</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Customers</p>
              <p className="text-2xl md:text-3xl font-bold mt-2">{customerStats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Active</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">{customerStats.active}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">
                ${(customerStats.totalRevenue / 1000).toFixed(1)}K
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Avg Order Value</p>
              <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-2">${customerStats.avgOrderValue}</p>
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
                  placeholder="Search customers..."
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm md:text-base truncate">{customer.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{customer.location}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate text-xs">{customer.email}</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 bg-muted p-3 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Orders</p>
                    <p className="text-lg md:text-xl font-bold">{customer.totalOrders}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Spent</p>
                    <p className="text-lg md:text-xl font-bold">{customer.totalSpent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avg Order</p>
                    <p className="text-lg md:text-xl font-bold">{customer.avgOrderValue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Loyalty</p>
                    <p className="text-lg md:text-xl font-bold text-primary">{customer.loyaltyScore}</p>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${engagementColor[customer.engagement as keyof typeof engagementColor]}`}
                  >
                    {customer.engagement}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <TrendingUp className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <span className="truncate">{customer.lastOrder}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent text-xs md:text-sm" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
