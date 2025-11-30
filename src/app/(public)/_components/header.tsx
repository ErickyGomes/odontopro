"use client"

import Link from "next/link";
import { 
    Home, 
    Users, 
    Calendar, 
    DollarSign, 
    FileText, 
    Settings, 
    LogOut,
    ChevronDown,
    ChevronUp,
    Menu,
    Bell,
    Mail,
    RotateCcw
} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

interface NavItem {
    label: string;
    href: string;
    icon: React.ElementType;
    children?: { label: string; href: string }[];
    requiresAuth?: boolean;
}

// Componente de navegação para mobile (drawer)
function MobileNavigationContent({ onLinkClick }: { onLinkClick?: () => void }) {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
    const pathname = usePathname()
    const { isAuthenticated } = useAuthState()

    const allNavItems: NavItem[] = [
        { 
            label: "Home", 
            href: "/",
            icon: Home,
            requiresAuth: true
        },
        { 
            label: "Profissionais", 
            href: "#profissionais",
            icon: Users,
            requiresAuth: false
        },
        { 
            label: "Configurações",
            href: "/configuracoes",
            icon: Settings,
            requiresAuth: true
        },
        { 
            label: "Sair",
            href: "/sair",
            icon: LogOut,
            requiresAuth: true
        }
    ]

    // Filtra os itens baseado no estado de autenticação
    const navItems = allNavItems.filter(item => 
        !item.requiresAuth || isAuthenticated
    )

    const toggleExpanded = (href: string) => {
        const newExpanded = new Set(expandedItems)
        if (newExpanded.has(href)) {
            newExpanded.delete(href)
        } else {
            newExpanded.add(href)
        }
        setExpandedItems(newExpanded)
    }

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname?.startsWith(href)
    }

    return (
        <nav className="flex flex-col p-2 gap-1 overflow-y-auto h-[calc(100vh-4rem)]">
            {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isItemActive = isActive(item.href)
                const isExpanded = expandedItems.has(item.href)

                return (
                    <div key={item.href}>
                        <div className="flex items-center">
                            <Link
                                href={item.href}
                                onClick={onLinkClick}
                                className={`flex-1 flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                                    isItemActive
                                        ? "bg-emerald-500 text-white"
                                        : "text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                <item.icon className="w-5 h-5 shrink-0" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                            {hasChildren && (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        toggleExpanded(item.href)
                                    }}
                                    className="p-1 rounded-md hover:bg-gray-200 transition-colors"
                                    aria-label={isExpanded ? "Recolher" : "Expandir"}
                                >
                                    {isExpanded ? (
                                        <ChevronUp className="w-4 h-4 text-gray-600" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-600" />
                                    )}
                                </button>
                            )}
                        </div>
                        
                        {/* Submenu */}
                        {hasChildren && isExpanded && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                {item.children?.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={onLinkClick}
                                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                            isActive(child.href)
                                                ? "text-emerald-600 font-medium bg-emerald-50"
                                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                        }`}
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )
            })}
        </nav>
    )
}

// Componente de navbar horizontal para desktop
function DesktopNavbar() {
    const pathname = usePathname()
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    // Links principais centralizados (sem ícones, apenas texto)
    const navItems = [
        { label: "Profissionais", href: "#profissionais" },
    ]

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname?.startsWith(href)
    }

    return (
        <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
                const isItemActive = isActive(item.href)

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium transition-colors ${
                            isItemActive
                                ? "text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    )
}

// Hook compartilhado para autenticação (para usar a mesma lógica em desktop e mobile)
function useAuthState() {
    // TODO: Substituir por lógica de autenticação real
    // Por enquanto, usando estado local como exemplo
    const [isAuthenticated] = useState(false) // Altere para true para testar usuário logado
    const [user] = useState<{ name: string } | null>(null) // Altere para { name: "Nome do Usuário" } para testar
    
    return { isAuthenticated, user }
}

// Componente de ações do usuário (direita) - Desktop
function UserActions() {
    const { isAuthenticated, user } = useAuthState()

    return (
        <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
                <>
                    {/* Nome do usuário - clicável para dashboard */}
                    <Link 
                        href="/dashboard"
                        className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                        {user.name}
                    </Link>

                    {/* Settings */}
                    <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>

                    {/* Logout */}
                    <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <RotateCcw className="w-5 h-5" />
                    </button>
                </>
            ) : (
                /* Se não estiver logado, mostra link para login */
                <Link 
                    href="/login"
                    className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors"
                >
                    Entrar
                </Link>
            )}
        </div>
    )
}

// Componente de ações do usuário para mobile (dentro do drawer)
function MobileUserActions({ onLinkClick }: { onLinkClick?: () => void }) {
    const { isAuthenticated, user } = useAuthState()

    return (
        <div className="border-t border-gray-200 p-4">
            {isAuthenticated && user ? (
                <Link 
                    href="/dashboard"
                    onClick={onLinkClick}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    <span className="text-sm font-medium">{user.name}</span>
                </Link>
            ) : (
                <Link 
                    href="/login"
                    onClick={onLinkClick}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors text-sm font-medium"
                >
                    Entrar
                </Link>
            )}
        </div>
    )
}

export function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    return (
        <>
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
                <Link href="/" className="text-lg font-semibold text-gray-800">
                    Odonto<span className="text-emerald-500">PRO</span>
                </Link>
                <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                    <SheetTrigger className="p-2 rounded-md hover:bg-gray-100">
                        <Menu className="w-6 h-6 text-gray-700" />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] p-0 flex flex-col">
                        <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                        <div className="h-16 border-b border-gray-200 flex items-center px-4">
                            <h2 className="text-lg font-semibold text-gray-800">Odonto<span className="text-emerald-500">PRO</span></h2>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <MobileNavigationContent onLinkClick={() => setIsMobileOpen(false)} />
                        </div>
                        <MobileUserActions onLinkClick={() => setIsMobileOpen(false)} />
                    </SheetContent>
                </Sheet>
            </header>

            {/* Desktop Navbar */}
            <header className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-gray-50 border-b border-gray-200 z-50 items-center px-6">
                {/* Logo à esquerda */}
                <Link href="/" className="flex items-center gap-3">
                    
                    <span className="text-xl font-bold text-gray-900">Odonto<span className="text-emerald-500">PRO</span></span>
                </Link>

                {/* Links centralizados */}
                <div className="flex-1 flex justify-center">
                    <DesktopNavbar />
                </div>

                {/* Ações do usuário à direita */}
                <UserActions />
            </header>
        </>
    )
}