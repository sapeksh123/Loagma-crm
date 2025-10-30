"use client"

import type React from "react"

import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Mail, Building2 } from "lucide-react"

interface LoginFormProps {
  onLogin: (role: string) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedRole, setSelectedRole] = useState("sales")

  const roles = [
    { id: "admin", label: "Admin", description: "Full system access" },
    { id: "manager", label: "Area Manager", description: "Team management" },
    { id: "sales", label: "Sales Executive", description: "Field operations" },
    { id: "telecaller", label: "Telecaller", description: "Lead management" },
    { id: "support", label: "Support Agent", description: "Ticket handling" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      onLogin(selectedRole)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background to-secondary flex items-center justify-center p-2">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-2xl">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-">
               <div className=" border-b border-sidebar-border flex justify-center items-center">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/image.png" 
                            alt="App Logo"
                            width={120}
                            height={120}
                            className="rounded-lg object-contain"
                          />
                         
                        </div>
                      </div>
            </div>
            <CardDescription>Professional Business Management System</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Select Role</label>
                <div className="grid grid-cols-2 gap-2">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        selectedRole === role.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium text-sm">{role.label}</div>
                      <div className="text-xs text-muted-foreground">{role.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                Demo credentials: Use any email/password combination with selected role
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
