"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Download, Send } from "lucide-react"

const quotations = [
  {
    id: "COT-001",
    couple: "Patricia & Roberto",
    date: "2024-02-15",
    eventDate: "2024-06-20",
    package: "Premium",
    amount: 45000,
    status: "pending",
    validUntil: "2024-03-15"
  },
  {
    id: "COT-002",
    couple: "Valentina & Andrés",
    date: "2024-02-10",
    eventDate: "2024-07-15",
    package: "Premium Plus",
    amount: 65000,
    status: "accepted",
    validUntil: "2024-03-10"
  },
  {
    id: "COT-003",
    couple: "Isabella & Fernando",
    date: "2024-02-08",
    eventDate: "2024-05-25",
    package: "Deluxe",
    amount: 38000,
    status: "pending",
    validUntil: "2024-03-08"
  },
  {
    id: "COT-004",
    couple: "Camila & Sebastián",
    date: "2024-02-05",
    eventDate: "2024-08-10",
    package: "Básico",
    amount: 28000,
    status: "rejected",
    validUntil: "2024-03-05"
  },
  {
    id: "COT-005",
    couple: "Daniela & Mateo",
    date: "2024-02-01",
    eventDate: "2024-09-05",
    package: "Premium",
    amount: 48000,
    status: "accepted",
    validUntil: "2024-03-01"
  },
]

export default function CotizacionesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Cotizaciones</h1>
          <p className="text-zinc-500 mt-1">Crea y gestiona cotizaciones para tus clientes</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nueva Cotización
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Total Cotizaciones</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">{quotations.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Pendientes</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">
              {quotations.filter(q => q.status === "pending").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Aceptadas</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {quotations.filter(q => q.status === "accepted").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Valor Total</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">
              ${quotations.reduce((sum, q) => sum + q.amount, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quotations List */}
      <Card>
        <CardHeader>
          <CardTitle>Todas las Cotizaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {quotations.map((quote) => (
              <div
                key={quote.id}
                className="p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-5 w-5 text-zinc-400" />
                      <h3 className="font-semibold text-zinc-900">{quote.id}</h3>
                      <Badge
                        variant={
                          quote.status === "accepted"
                            ? "success"
                            : quote.status === "pending"
                            ? "warning"
                            : "destructive"
                        }
                      >
                        {quote.status === "accepted"
                          ? "Aceptada"
                          : quote.status === "pending"
                          ? "Pendiente"
                          : "Rechazada"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-3">
                      <div>
                        <p className="text-xs text-zinc-500">Cliente</p>
                        <p className="text-sm font-medium text-zinc-900">{quote.couple}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Fecha Evento</p>
                        <p className="text-sm text-zinc-700">
                          {new Date(quote.eventDate).toLocaleDateString('es', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Paquete</p>
                        <p className="text-sm text-zinc-700">{quote.package}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Monto</p>
                        <p className="text-sm font-semibold text-zinc-900">
                          ${quote.amount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Válida Hasta</p>
                        <p className="text-sm text-zinc-700">
                          {new Date(quote.validUntil).toLocaleDateString('es', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                    {quote.status === "pending" && (
                      <Button size="sm" className="gap-2">
                        <Send className="h-4 w-4" />
                        Enviar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
