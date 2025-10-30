"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Clock, Download } from "lucide-react"

export function ComplaintsModule() {
  const [complaints] = useState([
    {
      id: "TKT001",
      customer: "ABC Store",
      issue: "Quality Issue",
      priority: "High",
      status: "Open",
      date: "2024-11-12",
      slaHours: 4,
      hoursElapsed: 2,
      assignedTo: "John Support",
      resolution: "Pending",
      impact: "High",
      category: "Product Quality",
    },
    {
      id: "TKT002",
      customer: "XYZ Retail",
      issue: "Delivery Delay",
      priority: "Medium",
      status: "In Progress",
      date: "2024-11-11",
      slaHours: 24,
      hoursElapsed: 18,
      assignedTo: "Sarah Support",
      resolution: "In Progress",
      impact: "Medium",
      category: "Logistics",
    },
    {
      id: "TKT003",
      customer: "Daily Mart",
      issue: "Wrong Item",
      priority: "High",
      status: "Resolved",
      date: "2024-11-10",
      slaHours: 8,
      hoursElapsed: 6,
      assignedTo: "Mike Support",
      resolution: "Resolved",
      impact: "High",
      category: "Order Error",
    },
    {
      id: "TKT004",
      customer: "Quick Shop",
      issue: "Damaged Package",
      priority: "Low",
      status: "Open",
      date: "2024-11-09",
      slaHours: 48,
      hoursElapsed: 12,
      assignedTo: "Lisa Support",
      resolution: "Pending",
      impact: "Low",
      category: "Packaging",
    },
    {
      id: "TKT005",
      customer: "Super Store",
      issue: "Billing Discrepancy",
      priority: "Medium",
      status: "In Progress",
      date: "2024-11-08",
      slaHours: 24,
      hoursElapsed: 20,
      assignedTo: "John Support",
      resolution: "In Progress",
      impact: "Medium",
      category: "Billing",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")

  const filteredComplaints = complaints.filter((c) => {
    const matchesSearch = c.id.includes(searchTerm) || c.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || c.status === filterStatus
    const matchesPriority = filterPriority === "all" || c.priority === filterPriority
    return matchesSearch && matchesStatus && matchesPriority
  })

  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-blue-100 text-blue-800",
  }

  const statusColors = {
    Open: "bg-red-100 text-red-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Resolved: "bg-green-100 text-green-800",
  }

  const complaintStats = {
    total: complaints.length,
    open: complaints.filter((c) => c.status === "Open").length,
    inProgress: complaints.filter((c) => c.status === "In Progress").length,
    resolved: complaints.filter((c) => c.status === "Resolved").length,
    slaBreached: complaints.filter((c) => (c.hoursElapsed / c.slaHours) * 100 > 80).length,
  }

  const getSLAStatus = (hoursElapsed: number, slaHours: number) => {
    const percentage = (hoursElapsed / slaHours) * 100
    if (percentage > 100) return { text: "Breached", color: "text-red-600", bgColor: "bg-red-50" }
    if (percentage > 80) return { text: "At Risk", color: "text-orange-600", bgColor: "bg-orange-50" }
    return { text: "On Track", color: "text-green-600", bgColor: "bg-green-50" }
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Complaint Management</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Handle and resolve customer complaints with SLA tracking
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Ticket</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Tickets</p>
              <p className="text-xl md:text-3xl font-bold mt-1 md:mt-2">{complaintStats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Open</p>
              <p className="text-xl md:text-3xl font-bold text-red-600 mt-1 md:mt-2">{complaintStats.open}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">In Progress</p>
              <p className="text-xl md:text-3xl font-bold text-yellow-600 mt-1 md:mt-2">{complaintStats.inProgress}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Resolved</p>
              <p className="text-xl md:text-3xl font-bold text-green-600 mt-1 md:mt-2">{complaintStats.resolved}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-3 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">SLA Breached</p>
              <p className="text-xl md:text-3xl font-bold text-orange-600 mt-1 md:mt-2">{complaintStats.slaBreached}</p>
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
                  placeholder="Search complaints..."
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
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-sm"
            >
              <option value="all">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Support Tickets</CardTitle>
          <CardDescription className="text-xs md:text-sm">{filteredComplaints.length} tickets found</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Ticket ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold">Issue</th>
                  <th className="text-left py-3 px-4 font-semibold">Priority</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">SLA Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Assigned To</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredComplaints.map((complaint) => {
                  const slaStatus = getSLAStatus(complaint.hoursElapsed, complaint.slaHours)
                  return (
                    <tr key={complaint.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{complaint.id}</td>
                      <td className="py-3 px-4">{complaint.customer}</td>
                      <td className="py-3 px-4">{complaint.issue}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[complaint.priority as keyof typeof priorityColors]}`}
                        >
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[complaint.status as keyof typeof statusColors]}`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${slaStatus.bgColor}`}>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 flex-shrink-0" />
                            <span className={slaStatus.color}>{slaStatus.text}</span>
                          </div>
                          <p className="text-xs mt-1">
                            {complaint.hoursElapsed}/{complaint.slaHours}h
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs">{complaint.assignedTo}</td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          View
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filteredComplaints.map((complaint) => {
              const slaStatus = getSLAStatus(complaint.hoursElapsed, complaint.slaHours)
              return (
                <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-sm">{complaint.id}</p>
                          <p className="text-xs text-muted-foreground">{complaint.customer}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${priorityColors[complaint.priority as keyof typeof priorityColors]}`}
                        >
                          {complaint.priority}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-muted-foreground">Issue</p>
                          <p className="font-medium">{complaint.issue}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <p className="font-medium">{complaint.status}</p>
                        </div>
                      </div>
                      <div className={`p-2 rounded-lg ${slaStatus.bgColor}`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-medium ${slaStatus.color}`}>{slaStatus.text}</span>
                          <span className="text-xs font-medium">
                            {complaint.hoursElapsed}/{complaint.slaHours}h
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
