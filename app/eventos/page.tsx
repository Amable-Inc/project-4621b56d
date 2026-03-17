"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react"

const events = [
  { id: 1, date: 5, couple: "María & Juan", status: "confirmed", package: "Premium" },
  { id: 2, date: 12, couple: "Ana & Carlos", status: "pending", package: "Deluxe" },
  { id: 3, date: 15, couple: "Laura & Miguel", status: "confirmed", package: "Premium Plus" },
  { id: 4, date: 22, couple: "Sofia & Diego", status: "confirmed", package: "Premium" },
  { id: 5, date: 29, couple: "Carmen & Luis", status: "tentative", package: "Básico" },
]

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export default function EventosPage() {
  const [currentMonth, setCurrentMonth] = useState(2) // Marzo (0-indexed)
  const [currentYear] = useState(2024)

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const getEventsForDay = (day: number) => {
    return events.filter(event => event.date === day)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Calendario de Eventos</h1>
          <p className="text-zinc-500 mt-1">Gestiona y visualiza todos tus eventos</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Evento
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {months[currentMonth]} {currentYear}
              </CardTitle>
              <div className="flex gap-2">
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => setCurrentMonth(prev => prev === 0 ? 11 : prev - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => setCurrentMonth(prev => prev === 11 ? 0 : prev + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-zinc-500 py-2">
                  {day}
                </div>
              ))}
              {emptyDays.map((_, idx) => (
                <div key={`empty-${idx}`} className="aspect-square" />
              ))}
              {days.map((day) => {
                const dayEvents = getEventsForDay(day)
                return (
                  <div
                    key={day}
                    className={`aspect-square border border-zinc-200 rounded-lg p-1 ${
                      dayEvents.length > 0 ? "bg-rose-50 border-rose-200" : "bg-white"
                    }`}
                  >
                    <div className="text-sm font-medium text-zinc-900">{day}</div>
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className="text-[10px] bg-rose-500 text-white rounded px-1 mt-1 truncate"
                      >
                        {event.couple.split(" & ")[0]}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <Card>
          <CardHeader>
            <CardTitle>Eventos del Mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-zinc-900">{event.couple}</p>
                    <Badge
                      variant={
                        event.status === "confirmed"
                          ? "success"
                          : event.status === "pending"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {event.status === "confirmed"
                        ? "Confirmado"
                        : event.status === "pending"
                        ? "Pendiente"
                        : "Tentativo"}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-500">
                    {months[currentMonth]} {event.date}, {currentYear}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">{event.package}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
