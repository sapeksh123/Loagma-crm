"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { DashboardHome } from "@/components/dashboard/dashboard-home"
import { LeadsModule } from "@/components/modules/leads-module"
import { CustomersModule } from "@/components/modules/customers-module"
import { OrdersModule } from "@/components/modules/orders-module"
import { VisitsModule } from "@/components/modules/visits-module"
import { ComplaintsModule } from "@/components/modules/complaints-module"
import { ReportsModule } from "@/components/modules/reports-module"
import { SettingsModule } from "@/components/modules/settings-module"

interface DashboardProps {
  userRole: string
  onLogout: () => void
}

export function Dashboard({ userRole, onLogout }: DashboardProps) {
  const [activeModule, setActiveModule] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleModuleChange = (module: string) => {
    setActiveModule(module)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const renderModule = () => {
    switch (activeModule) {
      case "leads":
        return <LeadsModule />
      case "customers":
        return <CustomersModule />
      case "orders":
        return <OrdersModule />
      case "visits":
        return <VisitsModule />
      case "complaints":
        return <ComplaintsModule />
      case "reports":
        return <ReportsModule />
      case "settings":
        return <SettingsModule userRole={userRole} onLogout={onLogout} />
      default:
        return <DashboardHome userRole={userRole} />
    }
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        activeModule={activeModule}
        onModuleChange={handleModuleChange}
        userRole={userRole}
        isOpen={sidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} userRole={userRole} onLogout={onLogout} />
        <main className="flex-1 overflow-auto">{renderModule()}</main>
      </div>
    </div>
  )
}
