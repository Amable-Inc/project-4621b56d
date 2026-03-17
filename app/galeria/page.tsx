"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Download, Trash2 } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    title: "Salón Principal",
    category: "Interior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    title: "Jardín Exterior",
    category: "Exterior"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    title: "Mesa Imperial",
    category: "Montaje"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    title: "Decoración de Noche",
    category: "Interior"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
    title: "Área de Ceremonia",
    category: "Exterior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=800",
    title: "Pista de Baile",
    category: "Interior"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=800",
    title: "Montaje Elegante",
    category: "Montaje"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
    title: "Terraza Lounge",
    category: "Exterior"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800",
    title: "Centro de Mesa",
    category: "Montaje"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    title: "Vista Nocturna",
    category: "Exterior"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800",
    title: "Salón Decorado",
    category: "Interior"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800",
    title: "Ambiente Romántico",
    category: "Interior"
  }
]

const categories = ["Todos", "Interior", "Exterior", "Montaje"]

export default function GaleriaPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Galería del Venue</h1>
          <p className="text-zinc-500 mt-1">Muestra lo mejor de tu espacio para eventos</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Subir Fotos
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "Todos" ? "default" : "outline"}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Total de Fotos</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">{galleryImages.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Interiores</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">
              {galleryImages.filter(img => img.category === "Interior").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Exteriores</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">
              {galleryImages.filter(img => img.category === "Exterior").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-zinc-500">Montajes</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">
              {galleryImages.filter(img => img.category === "Montaje").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Card key={image.id} className="group overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <Button size="icon" variant="secondary" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="h-8 w-8">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="font-medium text-zinc-900 text-sm">{image.title}</p>
              <p className="text-xs text-zinc-500 mt-1">{image.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Agregar Más Fotos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-zinc-300 rounded-lg p-12 text-center hover:border-rose-500 transition-colors cursor-pointer">
            <Plus className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
            <p className="text-zinc-600 font-medium mb-2">
              Arrastra tus fotos aquí o haz clic para seleccionar
            </p>
            <p className="text-sm text-zinc-500">
              Formatos soportados: JPG, PNG, WEBP (máx. 10MB)
            </p>
            <Button className="mt-4">Seleccionar Archivos</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
