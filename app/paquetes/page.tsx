"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Check, Edit } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Básico",
    description: "Perfecto para eventos íntimos",
    price: 28000,
    maxGuests: 100,
    features: [
      "Salón principal hasta 5 horas",
      "Mesas y sillas",
      "Mantelería básica",
      "Personal de servicio",
      "Sonido básico",
      "Estacionamiento"
    ],
    color: "blue"
  },
  {
    id: 2,
    name: "Deluxe",
    description: "Para bodas elegantes y memorables",
    price: 38000,
    maxGuests: 150,
    features: [
      "Todo lo del paquete Básico",
      "Salón hasta 6 horas",
      "Decoración de mesas",
      "Iluminación ambiental",
      "DJ profesional",
      "Área lounge",
      "Barra de bebidas",
      "Coordinador de evento"
    ],
    color: "purple",
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    description: "La experiencia completa",
    price: 48000,
    maxGuests: 200,
    features: [
      "Todo lo del paquete Deluxe",
      "Salón hasta 8 horas",
      "Decoración personalizada",
      "Iluminación premium y efectos",
      "Banda en vivo o DJ premium",
      "Foto y video básico",
      "Área VIP",
      "Menú gourmet",
      "Servicio de valet parking"
    ],
    color: "rose"
  },
  {
    id: 4,
    name: "Premium Plus",
    description: "Lujo sin límites",
    price: 65000,
    maxGuests: 250,
    features: [
      "Todo lo del paquete Premium",
      "Salón tiempo ilimitado",
      "Decoración de lujo personalizada",
      "Iluminación arquitectónica",
      "Banda en vivo + DJ",
      "Foto y video profesional completo",
      "Áreas múltiples (ceremonia, coctel, recepción)",
      "Menú gourmet premium",
      "Barra libre premium",
      "Coordinador premium dedicado",
      "Servicio de hospedaje para novios"
    ],
    color: "amber"
  }
]

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200"
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200"
  },
  rose: {
    bg: "bg-rose-100",
    text: "text-rose-600",
    border: "border-rose-200"
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    border: "border-amber-200"
  }
}

export default function PaquetesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Paquetes de Servicio</h1>
          <p className="text-zinc-500 mt-1">Gestiona los paquetes que ofrece tu venue</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Paquete
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => {
          const colors = colorClasses[pkg.color as keyof typeof colorClasses]
          return (
            <Card
              key={pkg.id}
              className={`relative ${pkg.popular ? 'ring-2 ring-rose-500 shadow-lg' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-rose-500">Más Popular</Badge>
                </div>
              )}
              <CardHeader>
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`text-2xl font-bold ${colors.text}`}>
                    {pkg.name.charAt(0)}
                  </span>
                </div>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-zinc-900">
                    ${(pkg.price / 1000).toFixed(0)}k
                  </span>
                  <span className="text-zinc-500 text-sm ml-1">MXN</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">
                  Hasta {pkg.maxGuests} invitados
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full gap-2">
                  <Edit className="h-4 w-4" />
                  Editar Paquete
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Package Comparison */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Comparación de Paquetes</CardTitle>
          <CardDescription>
            Vista rápida de lo que incluye cada paquete
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-900">
                    Característica
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center py-3 px-4 text-sm font-semibold text-zinc-900">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 px-4 text-sm text-zinc-600">Precio</td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="text-center py-3 px-4 text-sm font-medium text-zinc-900">
                      ${pkg.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 px-4 text-sm text-zinc-600">Máximo de invitados</td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="text-center py-3 px-4 text-sm text-zinc-900">
                      {pkg.maxGuests}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-3 px-4 text-sm text-zinc-600">Tiempo de evento</td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="text-center py-3 px-4 text-sm text-zinc-900">
                      {pkg.id === 1 ? "5h" : pkg.id === 2 ? "6h" : pkg.id === 3 ? "8h" : "Ilimitado"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
