import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Plus, MessageCircle } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-linear-to-br from-cyan-50 via-white to-emerald-50 pt-20 md:pt-24">
            {/* Background com padrões decorativos */}
            <div className="absolute inset-0">
                {/* Padrões de fundo - pontos decorativos */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-300/40 rounded-full"></div>
                <div className="absolute top-32 left-20 w-2 h-2 bg-teal-300/40 rounded-full"></div>
                <div className="absolute top-40 left-32 w-2 h-2 bg-emerald-300/40 rounded-full"></div>
                <div className="absolute top-52 left-16 w-2 h-2 bg-cyan-300/40 rounded-full"></div>
                <div className="absolute bottom-32 right-20 w-2 h-2 bg-teal-300/40 rounded-full"></div>
                <div className="absolute bottom-40 right-32 w-2 h-2 bg-emerald-300/40 rounded-full"></div>
                <div className="absolute bottom-52 right-16 w-2 h-2 bg-cyan-300/40 rounded-full"></div>
                
                {/* Formas abstratas de fundo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
                    {/* Texto à esquerda */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Título principal */}
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-gray-900">Sua agenda</span>
                                <br />
                                <span className="text-gray-900">odontológica</span>
                                <br />
                                <span className="text-emerald-500">rodando no automático</span>
                            </h1>
                        </div>
                        
                        {/* Subtítulo */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Sua saúde bucal é nossa prioridade. Agende uma consulta conosco hoje mesmo.
                        </p>

                        {/* Botões de ação */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <Button 
                                asChild
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                <Link href="#sistema" className="flex items-center gap-2">
                                    <span>Saiba Mais</span>
                                    <Plus className="w-4 h-4" />
                                </Link>
                            </Button>
                            
                            <Link 
                                href="#video"
                                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                            >
                                <Play className="w-5 h-5 fill-gray-700 hover:fill-emerald-600" />
                                <span>Assistir Agora</span>
                            </Link>
                        </div>

                    </div>

                    {/* Imagem do doutor à direita com elemento flutuante */}
                    <div className="relative mt-8 md:mt-0">
                        <div className="relative z-10 flex justify-center md:justify-end">
                            {/* Elemento flutuante com estatística */}
                            <div className="absolute top-8 md:top-16 left-4 md:left-8 z-20 bg-white rounded-xl shadow-xl p-4 md:p-6 border border-gray-100">
                                <div className="flex flex-col items-center">
                                    {/* Círculo de progresso */}
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2">
                                        <svg className="transform -rotate-90 w-full h-full">
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="40%"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="8"
                                            />
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="40%"
                                                fill="none"
                                                stroke="#10b981"
                                                strokeWidth="8"
                                                strokeDasharray={`${82 * 2.51} 251`}
                                                className="transition-all duration-1000"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg md:text-xl font-bold text-emerald-600">82%</span>
                                        </div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium text-center">
                                        agendamentos<br />automatizados
                                    </p>
                                    <ArrowRight className="absolute -bottom-2 -right-2 w-4 h-4 text-emerald-500" />
                                </div>
                            </div>

                            {/* Imagem do doutor */}
                            <div className="relative pt-4">
                                <Image
                                    src="/doctor-hero.png"
                                    alt="Profissional de odontologia"
                                    width={500}
                                    height={500}
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elemento de chat/contato - posicionado no canto inferior esquerdo */}
                <div className="absolute bottom-6 left-4 md:bottom-8 md:left-8 z-20">
                    <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 w-[240px] md:w-[260px]">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                <MessageCircle className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 mb-1 wrap-break-word">Tem uma dúvida?</p>
                                <p className="text-xs text-gray-600 break-all">contato@odontopro.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}