"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react"

// Mock data
const stats = [
  {
    title: "Ingresos del Mes",
    value: "$45,230",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Eventos Este Mes",
    value: "12",
    change: "+3 vs mes anterior",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Clientes Activos",
    value: "24",
    change: "+8 este mes",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Ocupación",
    value: "85%",
    change: "+5% vs mes anterior",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
]

const upcomingEvents = [
  {
    id: 1,
    couple: "María & Juan",
    date: "2024-03-15",
    time: "18:00",
    guests: 150,
    package: "Premium",
    status: "confirmed"
  },
  {
    id: 2,
    couple: "Ana & Carlos",
    date: "2024-03-22",
    time: "19:00",
    guests: 120,
    package: "Deluxe",
    status: "pending"
  },
  {
    id: 3,
    couple: "Laura & Miguel",
    date: "2024-03-29",
    time: "17:30",
    guests: 200,
    package: "Premium Plus",
    status: "confirmed"
  },
  {
    id: 4,
    couple: "Sofia & Diego",
    date: "2024-04-05",
    time: "18:30",
    guests: 180,
    package: "Premium",
    status: "confirmed"
  },
]

const recentActivities = [
  { action: "Nueva cotización creada", client: "Patricia & Roberto", time: "Hace 2 horas" },
  { action: "Pago recibido", client: "María & Juan", time: "Hace 3 horas" },
  { action: "Evento confirmado", client: "Sofia & Diego", time: "Hace 5 horas" },
  { action: "Nueva consulta", client: "Carmen & Luis", time: "Hace 1 día" },
]

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500 mt-1">Bienvenido a tu sistema de gestión de venue</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-zinc-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Próximos Eventos</span>
              <Button size="sm" variant="outline">Ver Todos</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-rose-100 rounded-lg p-3 min-w-[60px]">
                      <span className="text-xs font-medium text-rose-600">
                        {new Date(event.date).toLocaleDateString('es', { month: 'short' }).toUpperCase()}
                      </span>
                      <span className="text-xl font-bold text-rose-600">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">{event.couple}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.guests} invitados
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={event.status === "confirmed" ? "success" : "warning"}>
                      {event.status === "confirmed" ? "Confirmado" : "Pendiente"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-zinc-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900">{activity.action}</p>
                    <p className="text-sm text-zinc-500">{activity.client}</p>
                    <p className="text-xs text-zinc-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
