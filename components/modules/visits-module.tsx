"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MapPin, Calendar, Camera, Clock, Download, Navigation } from "lucide-react"

export function VisitsModule() {
  const [visits] = useState([
    {
      id: 1,
      customer: "ABC Store",
      date: "2024-11-12",
      location: "Downtown",
      status: "Completed",
      remarks: "Order placed",
      duration: "45 mins",
      distance: "12 km",
      photos: 3,
      nextVisit: "2024-11-26",
      visitType: "Sales",
      outcome: "Order: $2,450",
    },
    {
      id: 2,
      customer: "XYZ Retail",
      date: "2024-11-11",
      location: "Midtown",
      status: "Completed",
      remarks: "Follow-up needed",
      duration: "30 mins",
      distance: "8 km",
      photos: 2,
      nextVisit: "2024-11-18",
      visitType: "Follow-up",
      outcome: "Discussed pricing",
    },
    {
      id: 3,
      customer: "Daily Mart",
      date: "2024-11-10",
      location: "Suburbs",
      status: "Completed",
      remarks: "No order",
      duration: "20 mins",
      distance: "15 km",
      photos: 1,
      nextVisit: "2024-11-24",
      visitType: "Check-in",
      outcome: "Stock check done",
    },
    {
      id: 4,
      customer: "Quick Shop",
      date: "2024-11-13",
      location: "Uptown",
      status: "Scheduled",
      remarks: "Pending",
      duration: "-",
      distance: "10 km",
      photos: 0,
      nextVisit: "2024-11-13",
      visitType: "Sales",
      outcome: "Scheduled",
    },
    {
      id: 5,
      customer: "Super Store",
      date: "2024-11-09",
      location: "Downtown",
      status: "Completed",
      remarks: "Bulk order",
      duration: "60 mins",
      distance: "12 km",
      photos: 5,
      nextVisit: "2024-11-23",
      visitType: "Sales",
      outcome: "Order: $4,100",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredVisits = visits.filter((v) => {
    const matchesSearch =
      v.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || v.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const statusColors = {
    Completed: "bg-green-100 text-green-800",
    Scheduled: "bg-blue-100 text-blue-800",
  }

  const visitStats = {
    total: visits.length,
    completed: visits.filter((v) => v.status === "Completed").length,
    scheduled: visits.filter((v) => v.status === "Scheduled").length,
    totalDistance: visits.reduce((sum, v) => sum + Number.parseInt(v.distance), 0),
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Visit Management</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track field visits with route planning and photo documentation
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="gap-2 text-xs md:text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Schedule Visit</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Visits</p>
              <p className="text-2xl md:text-3xl font-bold mt-2">{visitStats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">{visitStats.completed}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Scheduled</p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">{visitStats.scheduled}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground">Total Distance</p>
              <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-2">{visitStats.totalDistance} km</p>
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
                  placeholder="Search visits..."
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
              <option value="Completed">Completed</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVisits.map((visit) => (
          <Card key={visit.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm md:text-base truncate">{visit.customer}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="truncate">{visit.location}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${statusColors[visit.status as keyof typeof statusColors]}`}
                  >
                    {visit.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-muted p-3 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3 text-primary flex-shrink-0" />
                      <p className="text-xs md:text-sm font-medium truncate">{visit.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                      <p className="text-xs md:text-sm font-medium">{visit.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Navigation className="w-3 h-3 text-primary flex-shrink-0" />
                      <p className="text-xs md:text-sm font-medium">{visit.distance}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Photos</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Camera className="w-3 h-3 text-primary flex-shrink-0" />
                      <p className="text-xs md:text-sm font-medium">{visit.photos}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Type:</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {visit.visitType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Outcome:</span>
                    <span className="text-xs md:text-sm font-medium truncate">{visit.outcome}</span>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Remarks</p>
                  <p className="text-xs md:text-sm">{visit.remarks}</p>
                </div>

                <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                  <span className="text-xs font-medium">Next Visit:</span>
                  <span className="text-xs md:text-sm font-bold text-blue-600">{visit.nextVisit}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1 bg-transparent text-xs md:text-sm">
                    <Camera className="w-3 h-3" />
                    <span className="hidden sm:inline">Photos</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1 bg-transparent text-xs md:text-sm">
                    <Navigation className="w-3 h-3" />
                    <span className="hidden sm:inline">Route</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs md:text-sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
