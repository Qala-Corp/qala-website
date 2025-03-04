"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  Lock,
  LogOut,
  PanelLeft,
  Settings,
  Shield,
  User,
  Users,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`border-r bg-muted/40 ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300 ease-in-out`}>
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {!isCollapsed && (
            <>
              <Lock className="h-6 w-6" />
              <span>Qalá</span>
            </>
          )}
          {isCollapsed && <Lock className="h-6 w-6 mx-auto" />}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsCollapsed(!isCollapsed)}>
          <PanelLeft className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && <p className="text-xs font-medium">PROJECTS</p>}
          {!isCollapsed && (
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add Project</span>
            </Button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex w-full items-center justify-between ${isCollapsed ? "px-2" : "px-3"}`}
            >
              {!isCollapsed && (
                <>
                  <span>My Project</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
              {isCollapsed && <Lock className="h-4 w-4 mx-auto" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Projects</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Project</DropdownMenuItem>
            <DropdownMenuItem>Another Project</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" /> Create Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center">
          <Link href="/dashboard">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <Home className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Dashboard</span>}
            </Button>
          </Link>
          <Link href="/dashboard/secrets">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <Lock className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Secrets</span>}
            </Button>
          </Link>
          <Link href="/dashboard/environments">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <FileText className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Environments</span>}
            </Button>
          </Link>
          <Link href="/dashboard/integrations">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <Shield className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Integrations</span>}
            </Button>
          </Link>
          <Link href="/dashboard/team">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <Users className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Team</span>}
            </Button>
          </Link>
          <Link href="/dashboard/audit">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <Bell className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Audit Logs</span>}
            </Button>
          </Link>
          <Link href="/dashboard/billing">
            <Button variant="ghost" className={`w-full justify-start ${isCollapsed ? "px-2" : "px-3"}`}>
              <CreditCard className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Billing</span>}
            </Button>
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex w-full items-center justify-between ${isCollapsed ? "px-2" : "px-3"}`}
            >
              {!isCollapsed && (
                <>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>John Doe</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
              {isCollapsed && <User className="h-4 w-4 mx-auto" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

