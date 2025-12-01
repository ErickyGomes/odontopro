"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"

interface Professional {
    id: string
    name: string
    specialization: string
    description: string
    image: string
}

const professionals: Professional[] = [
    {
        id: "1",
        name: "Dr. Carlos Silva",
        specialization: "Ortodontista",
        description: "Especialista em ortodontia com mais de 15 anos de experiência. Tratamentos com aparelhos fixos e invisíveis.",
        image: "/doctor-hero.png"
    },
    {
        id: "2",
        name: "Dra. Ana Paula",
        specialization: "Implantodontista",
        description: "Especialista em implantes dentários e reabilitação oral. Técnicas modernas e resultados duradouros.",
        image: "/doctor-hero.png"
    },
    {
        id: "3",
        name: "Dr. Roberto Santos",
        specialization: "Endodontista",
        description: "Especialista em tratamento de canal e doenças da polpa dental. Atendimento humanizado e eficiente.",
        image: "/doctor-hero.png"
    },
    {
        id: "4",
        name: "Dra. Mariana Costa",
        specialization: "Periodontista",
        description: "Especialista em tratamento de gengivas e doenças periodontais. Cuidados preventivos e curativos.",
        image: "/doctor-hero.png"
    }
]

export function Professionals() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScroll()
        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener("scroll", checkScroll)
            window.addEventListener("resize", checkScroll)
            return () => {
                container.removeEventListener("scroll", checkScroll)
                window.removeEventListener("resize", checkScroll)
            }
        }
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320 // Largura aproximada de um card + gap
            const newScrollLeft = 
                direction === "left" 
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount
            
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            })
        }
    }

    return (
        <section id="profissionais" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden scroll-mt-20">
            {/* Background pattern sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)`
                }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Conheça nossos{" "}
                        <span className="text-emerald-500">Profissionais</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout.
                    </p>
                </div>

                {/* Carrossel */}
                <div className="relative">
                    {/* Botão esquerdo */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg transition-all ${
                            canScrollLeft 
                                ? "opacity-100 hover:bg-gray-900 cursor-pointer" 
                                : "opacity-50 cursor-not-allowed"
                        }`}
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Container do carrossel */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-12 md:px-16"
                    >
                        {professionals.map((professional) => (
                            <div
                                key={professional.id}
                                className="shrink-0 w-[280px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                {/* Imagem */}
                                <div className="relative w-full h-64 bg-gray-200">
                                    <Image
                                        src={professional.image}
                                        alt={professional.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Conteúdo */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {professional.name}
                                    </h3>
                                    <p className="text-emerald-500 font-semibold mb-3">
                                        {professional.specialization}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                        {professional.description}
                                    </p>
                                    <Button
                                        asChild
                                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                                    >
                                        <Link href={`/agendamentos?profissional=${professional.id}`} className="flex items-center justify-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            Agendar
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botão direito */}
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg transition-all ${
                            canScrollRight 
                                ? "opacity-100 hover:bg-gray-900 cursor-pointer" 
                                : "opacity-50 cursor-not-allowed"
                        }`}
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}

