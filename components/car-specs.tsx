"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Gauge, Clock, Battery, Ruler, Weight, Users, Briefcase, ShieldCheck, Smartphone } from "lucide-react"

export default function CarSpecs() {
  const [activeTab, setActiveTab] = useState("performance")

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Tabs defaultValue="performance" onValueChange={setActiveTab}>
        <div className="flex justify-center border-b">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl bg-transparent h-auto p-0">
            {[
              { id: "performance", label: "Performance" },
              { id: "dimensions", label: "Dimensions" },
              { id: "battery", label: "Battery" },
              { id: "safety", label: "Safety" },
              { id: "technology", label: "Technology" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`py-4 rounded-none border-b-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none ${
                  activeTab === tab.id ? "border-black text-black" : "border-transparent text-gray-500"
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="p-6 md:p-10">
          <TabsContent value="performance" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Performance Specifications</h3>
                <p className="text-gray-600">
                  The Mercedes-Benz EQS combines exceptional performance with electric efficiency, delivering a driving
                  experience that's both exhilarating and sustainable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Power Output</h4>
                      <p className="text-2xl font-bold">385 kW</p>
                      <p className="text-sm text-gray-500">516 horsepower</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Gauge className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Top Speed</h4>
                      <p className="text-2xl font-bold">210 km/h</p>
                      <p className="text-sm text-gray-500">130 mph</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">0-100 km/h</h4>
                      <p className="text-2xl font-bold">4.3 s</p>
                      <p className="text-sm text-gray-500">0-60 mph in 4.1 s</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Battery className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Range (WLTP)</h4>
                      <p className="text-2xl font-bold">770 km</p>
                      <p className="text-sm text-gray-500">478 miles</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <img
                  src="/perfomance.jpg"
                  alt="Mercedes-Benz Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dimensions" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Dimensions & Capacity</h3>
                <p className="text-gray-600">
                  The Mercedes-Benz EQS combines spacious luxury with aerodynamic efficiency, offering class-leading
                  interior space and cargo capacity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Ruler className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Length</h4>
                      <p className="text-2xl font-bold">5.21 m</p>
                      <p className="text-sm text-gray-500">205.4 inches</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Weight className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Weight</h4>
                      <p className="text-2xl font-bold">2,480 kg</p>
                      <p className="text-sm text-gray-500">5,467 lbs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Seating</h4>
                      <p className="text-2xl font-bold">5 adults</p>
                      <p className="text-sm text-gray-500">Premium comfort</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Cargo Space</h4>
                      <p className="text-2xl font-bold">610 L</p>
                      <p className="text-sm text-gray-500">21.5 cubic ft</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <img
                  src="/dimention.jpeg"
                  alt="Mercedes-Benz Dimensions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="battery" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Battery & Charging</h3>
                <p className="text-gray-600">
                  The Mercedes-Benz EQS features a state-of-the-art battery system with rapid charging capabilities for
                  maximum convenience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Battery className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Battery Capacity</h4>
                      <p className="text-2xl font-bold">107.8 kWh</p>
                      <p className="text-sm text-gray-500">Usable capacity</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Fast Charging</h4>
                      <p className="text-2xl font-bold">200 kW</p>
                      <p className="text-sm text-gray-500">DC charging</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Charging Time</h4>
                      <p className="text-2xl font-bold">31 min</p>
                      <p className="text-sm text-gray-500">10% to 80% (DC)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Gauge className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Energy Consumption</h4>
                      <p className="text-2xl font-bold">16.9 kWh</p>
                      <p className="text-sm text-gray-500">Per 100 km</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <img
                  src="/battry.jpeg"
                  alt="Mercedes-Benz Battery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="safety" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Safety & Assistance</h3>
                <p className="text-gray-600">
                  The Mercedes-Benz EQS features comprehensive safety systems and driver assistance technologies for
                  peace of mind.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <ShieldCheck className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Safety Rating</h4>
                      <p className="text-2xl font-bold">5 Stars</p>
                      <p className="text-sm text-gray-500">Euro NCAP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Driver Assistance</h4>
                      <p className="text-2xl font-bold">Level 3</p>
                      <p className="text-sm text-gray-500">Autonomous capability</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Airbags</h4>
                      <p className="text-2xl font-bold">10 total</p>
                      <p className="text-sm text-gray-500">Including rear airbags</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Crash Prevention</h4>
                      <p className="text-2xl font-bold">PRE-SAFE®</p>
                      <p className="text-sm text-gray-500">Predictive protection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <img
                  src="/safe.jpeg"
                  alt="Mercedes-Benz Safety"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technology" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Technology & Connectivity</h3>
                <p className="text-gray-600">
                  The Mercedes-Benz EQS features cutting-edge technology and connectivity options for an unparalleled
                  digital experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">MBUX Hyperscreen</h4>
                      <p className="text-2xl font-bold">56 inches</p>
                      <p className="text-sm text-gray-500">Curved display</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sound System</h4>
                      <p className="text-2xl font-bold">Burmester® 4D</p>
                      <p className="text-sm text-gray-500">31 speakers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <ShieldCheck className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Augmented Reality</h4>
                      <p className="text-2xl font-bold">Navigation</p>
                      <p className="text-sm text-gray-500">Head-up display</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium">Connectivity</h4>
                      <p className="text-2xl font-bold">5G Ready</p>
                      <p className="text-sm text-gray-500">OTA updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <img
                  src="/tech.jpeg"
                  alt="Mercedes-Benz Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
