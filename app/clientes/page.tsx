"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Mail, Phone, Calendar } from "lucide-react"

const clients = [
  {
    id: 1,
    couple: "María González & Juan Pérez",
    email: "maria.juan@email.com",
    phone: "+52 55 1234 5678",
    eventDate: "2024-03-15",
    status: "confirmed",
    package: "Premium",
    guests: 150,
    totalPaid: 25000,
    totalCost: 45000
  },
  {
    id: 2,
    couple: "Ana Martínez & Carlos López",
    email: "ana.carlos@email.com",
    phone: "+52 55 2345 6789",
    eventDate: "2024-03-22",
    status: "pending",
    package: "Deluxe",
    guests: 120,
    totalPaid: 15000,
    totalCost: 38000
  },
  {
    id: 3,
    couple: "Laura Sánchez & Miguel Torres",
    email: "laura.miguel@email.com",
    phone: "+52 55 3456 7890",
    eventDate: "2024-03-29",
    status: "confirmed",
    package: "Premium Plus",
    guests: 200,
    totalPaid: 50000,
    totalCost: 65000
  },
  {
    id: 4,
    couple: "Sofia Ramírez & Diego Flores",
    email: "sofia.diego@email.com",
    phone: "+52 55 4567 8901",
    eventDate: "2024-04-05",
    status: "confirmed",
    package: "Premium",
    guests: 180,
    totalPaid: 30000,
    totalCost: 48000
  },
  {
    id: 5,
    couple: "Carmen Ruiz & Luis Hernández",
    email: "carmen.luis@email.com",
    phone: "+52 55 5678 9012",
    eventDate: "2024-04-12",
    status: "tentative",
    package: "Básico",
    guests: 100,
    totalPaid: 0,
    totalCost: 28000
  },
]

export default function ClientesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Clientes</h1>
          <p className="text-zinc-500 mt-1">Gestiona la información de tus clientes</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Cliente
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar clientes por nombre, email o teléfono..."
              className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <div className="grid grid-cols-1 gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-zinc-900">{client.couple}</h3>
                    <Badge
                      variant={
                        client.status === "confirmed"
                          ? "success"
                          : client.status === "pending"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {client.status === "confirmed"
                        ? "Confirmado"
                        : client.status === "pending"
                        ? "Pendiente"
                        : "Tentativo"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Mail className="h-4 w-4 text-zinc-400" />
                      {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Phone className="h-4 w-4 text-zinc-400" />
                      {client.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Calendar className="h-4 w-4 text-zinc-400" />
                      {new Date(client.eventDate).toLocaleDateString('es', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="text-sm text-zinc-600">
                      <span className="font-medium">{client.guests}</span> invitados
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-6">
                    <div>
                      <p className="text-xs text-zinc-500">Paquete</p>
                      <p className="text-sm font-medium text-zinc-900">{client.package}</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Pagado</p>
                      <p className="text-sm font-medium text-green-600">
                        ${client.totalPaid.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Total</p>
                      <p className="text-sm font-medium text-zinc-900">
                        ${client.totalCost.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Pendiente</p>
                      <p className="text-sm font-medium text-red-600">
                        ${(client.totalCost - client.totalPaid).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Ver Detalles</Button>
                  <Button size="sm">Editar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
