"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Lock, Bell, LogOut, Database, Shield, Download, Upload, Clock } from "lucide-react"
import { useState } from "react"

interface SettingsModuleProps {
  userRole: string
  onLogout: () => void
}

export function SettingsModule({ userRole, onLogout }: SettingsModuleProps) {
  const [backupStatus, setBackupStatus] = useState("ready")
  const [lastBackup, setLastBackup] = useState("2024-11-12 10:30 AM")

  const handleBackup = () => {
    setBackupStatus("backing-up")
    setTimeout(() => {
      setBackupStatus("ready")
      setLastBackup(new Date().toLocaleString())
    }, 2000)
  }

  const dataStats = {
    totalRecords: "12,450",
    storageUsed: "2.4 GB",
    storageLimit: "10 GB",
    lastSync: "2 hours ago",
  }

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Manage your account, security, and data preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <User className="w-4 h-4 md:w-5 md:h-5" />
                Profile Information
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs md:text-sm font-medium">Full Name</label>
                <Input placeholder="John Doe" className="mt-1 text-sm" />
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="mt-1 text-sm" />
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium">Phone Number</label>
                <Input placeholder="+1 (555) 000-0000" className="mt-1 text-sm" />
              </div>
              <Button className="text-xs md:text-sm">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Lock className="w-4 h-4 md:w-5 md:h-5" />
                Security
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Manage your password and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs md:text-sm font-medium">Current Password</label>
                <Input type="password" placeholder="••••••••" className="mt-1 text-sm" />
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium">New Password</label>
                <Input type="password" placeholder="••••••••" className="mt-1 text-sm" />
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium">Confirm Password</label>
                <Input type="password" placeholder="••••••••" className="mt-1 text-sm" />
              </div>
              <Button className="text-xs md:text-sm">Update Password</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
                Notifications
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Email Notifications", checked: true },
                { label: "SMS Alerts", checked: true },
                { label: "Push Notifications", checked: false },
                { label: "Weekly Reports", checked: true },
                { label: "Order Updates", checked: true },
                { label: "Complaint Alerts", checked: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <label className="text-xs md:text-sm font-medium">{item.label}</label>
                  <input type="checkbox" defaultChecked={item.checked} className="w-4 h-4" />
                </div>
              ))}
              <Button className="text-xs md:text-sm">Save Preferences</Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Database className="w-4 h-4 md:w-5 md:h-5" />
                Data Management
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Manage your data and backups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-medium">Storage Usage</span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {dataStats.storageUsed} / {dataStats.storageLimit}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 md:h-3">
                  <div className="bg-primary h-2 md:h-3 rounded-full" style={{ width: "24%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 bg-muted p-3 md:p-4 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Total Records</p>
                  <p className="text-lg md:text-xl font-bold mt-1">{dataStats.totalRecords}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Last Sync</p>
                  <p className="text-lg md:text-xl font-bold mt-1">{dataStats.lastSync}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button variant="outline" className="w-full gap-2 bg-transparent text-xs md:text-sm">
                  <Download className="w-4 h-4" />
                  Export Data
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent text-xs md:text-sm">
                  <Upload className="w-4 h-4" />
                  Import Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Backup Settings */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                Backup & Recovery
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Automatic and manual backup options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-medium text-xs md:text-sm">Last Backup</p>
                    <p className="text-xs text-muted-foreground mt-1">{lastBackup}</p>
                  </div>
                  <span className="px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex-shrink-0">
                    {backupStatus === "backing-up" ? "Backing up..." : "Ready"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 md:p-3 border border-border rounded-lg">
                  <div>
                    <p className="text-xs md:text-sm font-medium">Automatic Daily Backup</p>
                    <p className="text-xs text-muted-foreground">Scheduled at 2:00 AM</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between p-2 md:p-3 border border-border rounded-lg">
                  <div>
                    <p className="text-xs md:text-sm font-medium">Weekly Full Backup</p>
                    <p className="text-xs text-muted-foreground">Every Sunday at 3:00 AM</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 flex-shrink-0" />
                </div>
              </div>

              <Button
                onClick={handleBackup}
                disabled={backupStatus === "backing-up"}
                className="w-full gap-2 text-xs md:text-sm"
              >
                <Clock className="w-4 h-4" />
                {backupStatus === "backing-up" ? "Creating Backup..." : "Create Manual Backup"}
              </Button>

              <Button variant="outline" className="w-full gap-2 bg-transparent text-xs md:text-sm">
                <Download className="w-4 h-4" />
                Restore from Backup
              </Button>
            </CardContent>
          </Card>

          {/* Data Privacy */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                Data Privacy & Compliance
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">GDPR and data protection settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 md:p-3 border border-border rounded-lg">
                  <input type="checkbox" className="w-4 h-4 mt-1 flex-shrink-0" defaultChecked />
                  <div>
                    <p className="text-xs md:text-sm font-medium">Data Processing Agreement</p>
                    <p className="text-xs text-muted-foreground">I agree to the data processing terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 md:p-3 border border-border rounded-lg">
                  <input type="checkbox" className="w-4 h-4 mt-1 flex-shrink-0" defaultChecked />
                  <div>
                    <p className="text-xs md:text-sm font-medium">Privacy Policy</p>
                    <p className="text-xs text-muted-foreground">I have read and accepted the privacy policy</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent text-xs md:text-sm">
                Download Privacy Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Summary Sidebar */}
        <div className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-lg md:text-xl">Account Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="font-semibold capitalize mt-1 text-sm md:text-base">{userRole}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="font-semibold mt-1 text-sm md:text-base">January 2024</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Last Login</p>
                <p className="font-semibold mt-1 text-sm md:text-base">Today at 10:30 AM</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Account Status</p>
                <p className="font-semibold text-green-600 mt-1 text-sm md:text-base">Active</p>
              </div>
              <Button variant="outline" className="w-full gap-2 bg-transparent text-xs md:text-sm" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-lg md:text-xl">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm">API Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm">Database</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm">Sync Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Synced</span>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-muted">
            <CardContent className="pt-4 md:pt-6">
              <p className="text-xs md:text-sm font-medium mb-3">Need Help?</p>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                Contact our support team for assistance with your account or data management.
              </p>
              <Button variant="outline" className="w-full bg-background text-xs md:text-sm">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
