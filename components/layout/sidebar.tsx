// "use client"

// import { cn } from "@/lib/utils"
// import { LayoutDashboard, Users, ShoppingCart, MapPin, AlertCircle, BarChart3, Settings, Phone } from "lucide-react"

// interface SidebarProps {
//   activeModule: string
//   onModuleChange: (module: string) => void
//   userRole: string
//   isOpen: boolean
// }

// export function Sidebar({ activeModule, onModuleChange, userRole, isOpen }: SidebarProps) {
//   const modules = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: LayoutDashboard,
//       roles: ["admin", "manager", "sales", "telecaller", "support"],
//     },
//     { id: "leads", label: "Leads", icon: Phone, roles: ["admin", "manager", "sales", "telecaller"] },
//     { id: "customers", label: "Customers", icon: Users, roles: ["admin", "manager", "sales"] },
//     { id: "orders", label: "Orders", icon: ShoppingCart, roles: ["admin", "manager", "sales"] },
//     { id: "visits", label: "Visits", icon: MapPin, roles: ["admin", "manager", "sales"] },
//     { id: "complaints", label: "Complaints", icon: AlertCircle, roles: ["admin", "manager", "support"] },
//     { id: "reports", label: "Reports", icon: BarChart3, roles: ["admin", "manager"] },
//     {
//       id: "settings",
//       label: "Settings",
//       icon: Settings,
//       roles: ["admin", "manager", "sales", "telecaller", "support"],
//     },
//   ]

//   const availableModules = modules.filter((m) => m.roles.includes(userRole))

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 md:hidden z-30"
//           onClick={(e) => {
//             e.stopPropagation()
//           }}
//         />
//       )}

//       <aside
//         className={cn(
//           "bg-sidebar text-sidebar-foreground transition-all duration-300 border-r border-sidebar-border flex flex-col h-screen",
//           "fixed md:relative z-40 md:z-auto",
//           "md:w-64 md:translate-x-0",
//           isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:translate-x-0",
//         )}
//       >
//         <div className="p-4 border-b border-sidebar-border flex-shrink-0">
//           <div className="flex items-center justify-between">
//             {isOpen || (true && <h1 className="text-xl font-bold truncate">LOAGMA</h1>)}
//           </div>
//         </div>

//         <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
//           {availableModules.map((module) => {
//             const Icon = module.icon
//             return (
//               <button
//                 key={module.id}
//                 onClick={() => onModuleChange(module.id)}
//                 className={cn(
//                   "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
//                   "hover:bg-sidebar-accent/20 active:scale-95",
//                   activeModule === module.id
//                     ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
//                     : "text-sidebar-foreground hover:text-sidebar-accent",
//                 )}
//                 title={module.label}
//               >
//                 <Icon className="w-5 h-5 flex-shrink-0" />
//                 <span className="text-sm font-medium truncate">{module.label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </aside>
//     </>
//   )
// }


"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  MapPin,
  AlertCircle,
  BarChart3,
  Settings,
  Phone,
} from "lucide-react"

interface SidebarProps {
  activeModule: string
  onModuleChange: (module: string) => void
  userRole: string
  isOpen: boolean
}

export function Sidebar({ activeModule, onModuleChange, userRole, isOpen }: SidebarProps) {
  const modules = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, roles: ["admin", "manager", "sales", "telecaller", "support"] },
    { id: "leads", label: "Leads", icon: Phone, roles: ["admin", "manager", "sales", "telecaller"] },
    { id: "customers", label: "Customers", icon: Users, roles: ["admin", "manager", "sales"] },
    { id: "orders", label: "Orders", icon: ShoppingCart, roles: ["admin", "manager", "sales"] },
    { id: "visits", label: "Visits", icon: MapPin, roles: ["admin", "manager", "sales"] },
    { id: "complaints", label: "Complaints", icon: AlertCircle, roles: ["admin", "manager", "support"] },
    { id: "reports", label: "Reports", icon: BarChart3, roles: ["admin", "manager"] },
    { id: "settings", label: "Settings", icon: Settings, roles: ["admin", "manager", "sales", "telecaller", "support"] },
  ]

  const availableModules = modules.filter((m) => m.roles.includes(userRole))

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground transition-all duration-300 border-r border-sidebar-border flex flex-col h-screen",
          "fixed md:relative z-40 md:z-auto",
          "md:w-64 md:translate-x-0",
          isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:translate-x-0"
        )}
      >
    {/* Centered Big Logo */}
<div className="p-8 border-b border-sidebar-border flex justify-center items-center">
  <div className="flex flex-col items-center text-center">
    <Image
      src="/image1.png" // ✅ Make sure the file exists in /public
      alt="App Logo"
      width={60}
      height={60}
      className="rounded-xl object-contain drop-shadow-md"
    />

    {/* Text with Yellow Borders */}
    <div className="mt-1">
      <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-0.5"></div> 
      <h1 className="text-lg font-bold tracking-wide text-sidebar-foreground">
        LOAGMA
      </h1>
      <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-0.5"></div> 
    </div>
  </div>
</div>


        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {availableModules.map((module) => {
            const Icon = module.icon
            return (
              <button
                key={module.id}
                onClick={() => onModuleChange(module.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  "hover:bg-sidebar-accent/20 active:scale-95",
                  activeModule === module.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                    : "text-sidebar-foreground hover:text-sidebar-accent"
                )}
                title={module.label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium truncate">{module.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
