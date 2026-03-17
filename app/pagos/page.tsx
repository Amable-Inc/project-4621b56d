"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

const payments = [
  {
    id: 1,
    couple: "María & Juan",
    eventDate: "2024-03-15",
    totalCost: 45000,
    totalPaid: 25000,
    payments: [
      { date: "2024-01-10", amount: 15000, method: "Transferencia", status: "completed" },
      { date: "2024-02-10", amount: 10000, method: "Tarjeta", status: "completed" }
    ],
    nextPayment: { date: "2024-03-01", amount: 20000 }
  },
  {
    id: 2,
    couple: "Ana & Carlos",
    eventDate: "2024-03-22",
    totalCost: 38000,
    totalPaid: 15000,
    payments: [
      { date: "2024-01-15", amount: 15000, method: "Efectivo", status: "completed" }
    ],
    nextPayment: { date: "2024-03-05", amount: 23000 }
  },
  {
    id: 3,
    couple: "Laura & Miguel",
    eventDate: "2024-03-29",
    totalCost: 65000,
    totalPaid: 50000,
    payments: [
      { date: "2024-01-05", amount: 20000, method: "Transferencia", status: "completed" },
      { date: "2024-02-05", amount: 30000, method: "Transferencia", status: "completed" }
    ],
    nextPayment: { date: "2024-03-15", amount: 15000 }
  },
  {
    id: 4,
    couple: "Sofia & Diego",
    eventDate: "2024-04-05",
    totalCost: 48000,
    totalPaid: 48000,
    payments: [
      { date: "2024-01-20", amount: 20000, method: "Transferencia", status: "completed" },
      { date: "2024-02-15", amount: 28000, method: "Tarjeta", status: "completed" }
    ],
    nextPayment: null
  }
]

export default function PagosPage() {
  const totalRevenue = payments.reduce((sum, p) => sum + p.totalPaid, 0)
  const totalPending = payments.reduce((sum, p) => sum + (p.totalCost - p.totalPaid), 0)
  const paidInFull = payments.filter(p => p.totalPaid >= p.totalCost).length

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Gestión de Pagos</h1>
          <p className="text-zinc-500 mt-1">Seguimiento de pagos y saldos pendientes</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Registrar Pago
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Total Recibido</p>
                <p className="text-2xl font-bold text-green-600 mt-2">
                  ${totalRevenue.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Saldos Pendientes</p>
                <p className="text-2xl font-bold text-red-600 mt-2">
                  ${totalPending.toLocaleString()}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Pagados Completos</p>
                <p className="text-2xl font-bold text-zinc-900 mt-2">{paidInFull}</p>
                <p className="text-xs text-zinc-500 mt-1">de {payments.length} eventos</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Tasa de Cobro</p>
                <p className="text-2xl font-bold text-zinc-900 mt-2">
                  {((totalRevenue / payments.reduce((sum, p) => sum + p.totalCost, 0)) * 100).toFixed(0)}%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payments List */}
      <div className="space-y-4">
        {payments.map((payment) => {
          const remaining = payment.totalCost - payment.totalPaid
          const progress = (payment.totalPaid / payment.totalCost) * 100

          return (
            <Card key={payment.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{payment.couple}</CardTitle>
                    <p className="text-sm text-zinc-500 mt-1">
                      Evento: {new Date(payment.eventDate).toLocaleDateString('es', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <Badge variant={remaining === 0 ? "success" : remaining < payment.totalCost / 2 ? "warning" : "destructive"}>
                    {remaining === 0 ? "Pagado Completo" : `Pendiente: $${remaining.toLocaleString()}`}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-600">Progreso de pago</span>
                    <span className="text-sm font-medium text-zinc-900">{progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="text-green-600 font-medium">
                      Pagado: ${payment.totalPaid.toLocaleString()}
                    </span>
                    <span className="text-zinc-900 font-medium">
                      Total: ${payment.totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Payment History */}
                <div className="border-t border-zinc-200 pt-4">
                  <h4 className="text-sm font-semibold text-zinc-900 mb-3">Historial de Pagos</h4>
                  <div className="space-y-2">
                    {payment.payments.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-green-500 rounded-full" />
                          <div>
                            <p className="text-sm font-medium text-zinc-900">
                              ${p.amount.toLocaleString()}
                            </p>
                            <p className="text-xs text-zinc-500">{p.method}</p>
                          </div>
                        </div>
                        <span className="text-sm text-zinc-500">
                          {new Date(p.date).toLocaleDateString('es', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Payment */}
                {payment.nextPayment && (
                  <div className="border-t border-zinc-200 mt-4 pt-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">Próximo Pago</p>
                        <p className="text-xs text-zinc-500 mt-1">
                          Vence: {new Date(payment.nextPayment.date).toLocaleDateString('es', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-zinc-900">
                          ${payment.nextPayment.amount.toLocaleString()}
                        </p>
                        <Button size="sm" className="mt-2">Registrar Pago</Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
