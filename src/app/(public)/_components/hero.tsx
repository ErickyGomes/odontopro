import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop, Users } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-white">
            {/* Background com gradiente e formas decorativas */}
            <div className="absolute inset-0">
                {/* Forma principal com gradiente */}
                <div className="absolute inset-x-0 top-0 bottom-0 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-b-[60px] md:rounded-b-[100px] transform -skew-y-1 origin-top"></div>
                
                {/* Formas decorativas abstratas */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Texto à esquerda */}
                    <div className="text-white space-y-6 md:space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Clínica sem agendamento, nunca mais.
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                            A primeira ferramenta do Brasil que une profissionais de odontologia com pacientes, clínicas e consultórios em poucos cliques.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                asChild
                                size="lg"
                                className="bg-white text-emerald-600 hover:bg-gray-100 border-2 border-white font-semibold text-base px-8 py-6 rounded-lg"
                            >
                                <Link href="#planos">
                                    Conheça os planos de assinatura
                                </Link>
                            </Button>
                        </div>

                        {/* Elementos de UI decorativos */}
                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 max-w-md">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 max-w-md">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 max-w-md">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                                <div className="flex-1 h-1 bg-white/30 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Imagem/Ilustração à direita */}
                    <div className="relative hidden md:block">
                        <div className="relative z-10">
                            {/* Placeholder para imagem do profissional */}
                            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                                {/* Simulação de profissional com laptop */}
                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mb-6 border-4 border-white/30">
                                        <Users className="w-24 h-24 text-white" />
                                    </div>
                                    <div className="bg-white/20 rounded-xl p-4 border border-white/30 backdrop-blur-sm">
                                        <Laptop className="w-32 h-32 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Padrão decorativo de fundo */}
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 to-teal-400/10 rounded-3xl blur-2xl transform rotate-6"></div>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos adicionais */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent"></div>
        </section>
    )
}