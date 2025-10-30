"use client"

import { Menu, Bell, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
  userRole: string
  onLogout?: () => void
}

export function Header({ onMenuClick, userRole, onLogout }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <h2 className="text-lg md:text-xl font-semibold truncate">LOAGMA CRM</h2>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="relative hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
          <User className="w-4 h-4" />
          <span className="text-sm font-medium capitalize">{userRole}</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onLogout}
          className="hover:bg-destructive/10 hover:text-destructive"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
