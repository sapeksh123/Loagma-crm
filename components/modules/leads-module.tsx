"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Phone, Calendar, TrendingUp, Download } from "lucide-react"

export function LeadsModule() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "ABC Store",
      contact: "9876543210",
      source: "Google Maps",
      status: "Interested",
      followUp: "2024-11-15",
      value: "$5,000",
      conversionRate: "45%",
      lastContact: "2024-11-10",
      notes: "High potential customer",
    },
    {
      id: 2,
      name: "XYZ Retail",
      contact: "9876543211",
      source: "JustDial",
      status: "Pending",
      followUp: "2024-11-16",
      value: "$3,200",
      conversionRate: "30%",
      lastContact: "2024-11-08",
      notes: "Waiting for approval",
    },
    {
      id: 3,
      name: "Quick Shop",
      contact: "9876543212",
      source: "Social Media",
      status: "Not Interested",
      followUp: "2024-11-17",
      value: "$1,500",
      conversionRate: "10%",
      lastContact: "2024-11-05",
      notes: "Budget constraints",
    },
    {
      id: 4,
      name: "Daily Mart",
      contact: "9876543213",
      source: "Referral",
      status: "Interested",
      followUp: "2024-11-18",
      value: "$8,500",
      conversionRate: "65%",
      lastContact: "2024-11-12",
      notes: "Ready to close",
    },
    {
      id: 5,
      name: "Super Store",
      contact: "9876543214",
      source: "Direct Call",
      status: "Interested",
      followUp: "2024-11-19",
      value: "$6,200",
      conversionRate: "55%",
      lastContact: "2024-11-11",
      notes: "Negotiating terms",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSource, setFilterSource] = useState("all")

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.contact.includes(searchTerm)
    const matchesStatus = filterStatus === "all" || lead.status === filterStatus
    const matchesSource = filterSource === "all" || lead.source === filterSource
    return matchesSearch && matchesStatus && matchesSource
  })

  const statusColors = {
    Interested: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    "Not Interested": "bg-red-100 text-red-800",
  }

  const leadStats = {
    total: leads.length,
    interested: leads.filter((l) => l.status === "Interested").length,
    pending: leads.filter((l) => l.status === "Pending").length,
    totalValue: leads.reduce((sum, l) => sum + Number.parseInt(l.value.replace(/[$,]/g, "")), 0),
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Lead Management</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage and track all potential customers with conversion metrics
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Lead</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Leads</p>
              <p className="text-2xl md:text-3xl font-bold mt-2">{leadStats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Interested</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">{leadStats.interested}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-2">{leadStats.pending}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Value</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">
                ${(leadStats.totalValue / 1000).toFixed(1)}K
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
                  placeholder="Search leads..."
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
              <option value="Interested">Interested</option>
              <option value="Pending">Pending</option>
              <option value="Not Interested">Not Interested</option>
            </select>
            <select
              value={filterSource}
              onChange={(e) => setFilterSource(e.target.value)}
              className="px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-sm"
            >
              <option value="all">All Sources</option>
              <option value="Google Maps">Google Maps</option>
              <option value="JustDial">JustDial</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Direct Call">Direct Call</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-lg md:text-xl">Leads List</CardTitle>
          <CardDescription className="text-xs md:text-sm">{filteredLeads.length} leads found</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Contact</th>
                  <th className="text-left py-3 px-4 font-semibold">Source</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Value</th>
                  <th className="text-left py-3 px-4 font-semibold">Conversion</th>
                  <th className="text-left py-3 px-4 font-semibold">Follow-up</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{lead.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {lead.contact}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{lead.source}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status as keyof typeof statusColors]}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{lead.value}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{lead.conversionRate}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        {lead.followUp}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        Call
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3">
            {filteredLeads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-sm">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.source}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${statusColors[lead.status as keyof typeof statusColors]}`}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Contact</p>
                        <p className="font-medium">{lead.contact}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Value</p>
                        <p className="font-medium">{lead.value}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Conversion</p>
                        <p className="font-medium">{lead.conversionRate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Follow-up</p>
                        <p className="font-medium">{lead.followUp}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      <Phone className="w-3 h-3 mr-1" />
                      Call
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
