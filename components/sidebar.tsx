"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Package, 
  CreditCard, 
  ImageIcon,
  Heart
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Eventos", href: "/eventos", icon: Calendar },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Cotizaciones", href: "/cotizaciones", icon: FileText },
  { name: "Paquetes", href: "/paquetes", icon: Package },
  { name: "Pagos", href: "/pagos", icon: CreditCard },
  { name: "Galería", href: "/galeria", icon: ImageIcon },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-16 items-center gap-2 border-b border-zinc-200 px-6">
        <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
        <span className="text-xl font-bold text-zinc-900">VenueManager</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-zinc-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-semibold">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-900">Admin</p>
            <p className="text-xs text-zinc-500">admin@venue.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
