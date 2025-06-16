"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building, Home, Users, Maximize } from "lucide-react"
import Image from "next/image"

// Types
interface Tower {
  id: string
  name: string
  description: string
  floors: number
  color: string
}

interface Apartment {
  id: string
  unitType: string
  area: number
  rooms: number
  bathrooms: number
  price: string
  thumbnail: string
  layoutImage: string
}

interface Floor {
  id: string
  number: number
  apartments: Apartment[]
}

// Mock data
const towers: Tower[] = [
  {
    id: "tower-a",
    name: "Tower A",
    description: "Premium residential tower with city views",
    floors: 15,
    color: "bg-blue-500",
  },
  {
    id: "tower-b",
    name: "Tower B",
    description: "Modern apartments with garden access",
    floors: 12,
    color: "bg-green-500",
  },
  {
    id: "tower-c",
    name: "Tower C",
    description: "Luxury penthouses and executive suites",
    floors: 18,
    color: "bg-purple-500",
  },
]

const generateApartments = (floorNumber: number): Apartment[] => {
  const unitTypes = ["Studio", "1BR", "2BR", "3BR", "Penthouse"]
  const apartments: Apartment[] = []

  for (let i = 1; i <= 4; i++) {
    const unitType = unitTypes[Math.floor(Math.random() * unitTypes.length)]
    const baseArea =
      unitType === "Studio" ? 45 : unitType === "1BR" ? 65 : unitType === "2BR" ? 85 : unitType === "3BR" ? 120 : 200
    const area = baseArea + Math.floor(Math.random() * 20)
    const rooms =
      unitType === "Studio" ? 1 : unitType === "1BR" ? 2 : unitType === "2BR" ? 3 : unitType === "3BR" ? 4 : 5

    apartments.push({
      id: `apt-${floorNumber}-${i}`,
      unitType,
      area,
      rooms,
      bathrooms: Math.ceil(rooms / 2),
      price: `$${(area * 15 + Math.floor(Math.random() * 500)).toLocaleString()}`,
      thumbnail: `/placeholder.svg?height=200&width=300&text=${unitType}`,
      layoutImage: `/placeholder.svg?height=400&width=600&text=${unitType}+Layout`,
    })
  }

  return apartments
}

const generateFloors = (towerFloors: number): Floor[] => {
  const floors: Floor[] = []

  for (let i = 1; i <= towerFloors; i++) {
    floors.push({
      id: `floor-${i}`,
      number: i,
      apartments: generateApartments(i),
    })
  }

  return floors
}

export default function RealEstateFloorSelector() {
  const [selectedTower, setSelectedTower] = useState<Tower | null>(null)
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null)
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null)
  const [floors, setFloors] = useState<Floor[]>([])

  const handleTowerSelect = (tower: Tower) => {
    setSelectedTower(tower)
    setFloors(generateFloors(tower.floors))
    setSelectedFloor(null)
    setSelectedApartment(null)
  }

  const handleFloorSelect = (floor: Floor) => {
    setSelectedFloor(floor)
    setSelectedApartment(null)
  }

  const handleApartmentSelect = (apartment: Apartment) => {
    setSelectedApartment(apartment)
  }

  const handleBack = () => {
    if (selectedApartment) {
      setSelectedApartment(null)
    } else if (selectedFloor) {
      setSelectedFloor(null)
    } else if (selectedTower) {
      setSelectedTower(null)
    }
  }

  // Tower Overview
  if (!selectedTower) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Residential Towers</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your perfect home across our three distinctive towers, each offering unique amenities and
              stunning views.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {towers.map((tower) => (
              <Card
                key={tower.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                onClick={() => handleTowerSelect(tower)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${tower.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tower.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{tower.description}</p>
                  <Badge variant="secondary" className="mb-4">
                    {tower.floors} Floors Available
                  </Badge>
                  <Button className="w-full group-hover:bg-primary/90">Explore Tower</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Floor Selection
  if (!selectedFloor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8 pt-8">
            <Button variant="ghost" onClick={handleBack} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Towers
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{selectedTower.name}</h1>
              <p className="text-gray-600">{selectedTower.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {floors.map((floor) => (
              <Card
                key={floor.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                onClick={() => handleFloorSelect(floor)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${selectedTower.color} rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold">{floor.number}</span>
                  </div>
                  <h3 className="font-semibold mb-2">Floor {floor.number}</h3>
                  <p className="text-sm text-gray-600">{floor.apartments.length} units</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Apartment Detail View
  if (selectedApartment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8 pt-8">
            <Button variant="ghost" onClick={handleBack} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Floor {selectedFloor.number}
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedTower.name} - Floor {selectedFloor.number}
              </h1>
              <p className="text-gray-600">Unit {selectedApartment.id}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src={selectedApartment.layoutImage || "/placeholder.svg"}
                    alt={`${selectedApartment.unitType} layout`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    {selectedApartment.unitType}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Area:</span>
                      <span className="font-semibold">{selectedApartment.area} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Rooms:</span>
                      <span className="font-semibold">{selectedApartment.rooms}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Bathrooms:</span>
                      <span className="text-lg">{selectedApartment.bathrooms}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">Price:</span>
                      <span className="text-2xl font-bold text-green-600">{selectedApartment.price}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6" size="lg">
                    Schedule Viewing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Apartment Layout View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 pt-8">
          <Button variant="ghost" onClick={handleBack} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Floors
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedTower.name} - Floor {selectedFloor.number}
            </h1>
            <p className="text-gray-600">{selectedFloor.apartments.length} available units</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedFloor.apartments.map((apartment) => (
            <Card
              key={apartment.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
              onClick={() => handleApartmentSelect(apartment)}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={apartment.thumbnail || "/placeholder.svg"}
                    alt={`${apartment.unitType} thumbnail`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-2 right-2 z-20">{apartment.unitType}</Badge>
                </div>

                <div className="p-4 relative z-20">
                  <h3 className="font-semibold text-lg mb-2">Unit {apartment.id}</h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="font-medium">{apartment.area} m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms:</span>
                      <span className="font-medium">{apartment.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span className="font-medium">{apartment.bathrooms}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{apartment.price}</span>
                    <Button size="sm" className="group-hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
