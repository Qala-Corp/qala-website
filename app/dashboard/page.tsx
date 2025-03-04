import { ArrowLeft, Bell, ChevronDown, Lock, Plus, Search, Settings, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Link href="/" className="lg:hidden">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Back to home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search secrets..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-4 w-4" />
              <span className="sr-only">User</span>
            </Button>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your secrets and environment variables.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Secret
              </Button>
            </div>
          </div>
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Secrets</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="staging">Staging</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">API Keys</CardTitle>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="font-medium">STRIPE_API_KEY</div>
                        <div className="text-sm text-muted-foreground">Last updated 2 days ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="font-medium">AWS_ACCESS_KEY</div>
                        <div className="text-sm text-muted-foreground">Last updated 5 days ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">GITHUB_TOKEN</div>
                        <div className="text-sm text-muted-foreground">Last updated 1 week ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add API Key
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Database Credentials</CardTitle>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="font-medium">DATABASE_URL</div>
                        <div className="text-sm text-muted-foreground">Last updated 1 day ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="font-medium">DB_PASSWORD</div>
                        <div className="text-sm text-muted-foreground">Last updated 1 day ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">DB_USERNAME</div>
                        <div className="text-sm text-muted-foreground">Last updated 1 day ago</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Database Credential
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="production" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Production Environment</CardTitle>
                  <CardDescription>Manage your production environment secrets.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="rounded-md bg-muted p-4">
                    <div className="text-sm font-medium">No secrets found</div>
                    <div className="text-sm text-muted-foreground">
                      Add your first production secret to get started.
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Production Secret
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

