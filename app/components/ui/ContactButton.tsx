'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Send, Linkedin, Instagram, Mail } from 'lucide-react'

export default function ContactButton() {
    const [open, setOpen] = useState(false)

    const socials = [
        { label: 'Telegram', href: '#', icon: Send },
        { label: 'LinkedIn', href: '#', icon: Linkedin },
        { label: 'Instagram', href: '#', icon: Instagram },
        { label: 'Email', href: '#', icon: Mail },
    ]

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />

            <div
                className="fixed bottom-6 right-6 z-50 flex items-end gap-4"
                onMouseLeave={() => setOpen(false)}
            >
                <div
                    className={`flex flex-col items-end gap-3 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    {socials.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex w-full items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black shadow-lg transition-all duration-300 ease-out ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                                style={{
                                    transitionDelay: open
                                        ? `${(socials.length - index - 1) * 80}ms`
                                        : '0ms',
                                }}
                            >
                                <Icon size={18} />
                                {item.label}
                            </Link>
                        )
                    })}
                </div>

                <button
                    onMouseEnter={() => setOpen(true)}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text-color)] text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl ${open ? 'rotate-45' : 'rotate-0'}`} aria-label="Open contacts"
                >
                    <span className="absolute h-6 w-6 rounded-full bg-white/20 animate-ping" />
                    <span className="relative text-xl">
                        <Phone />
                    </span>
                </button>
            </div>
        </>
    )
}
