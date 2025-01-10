'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/stats', icon: ChartBarIcon, label: 'Stats' },
    { href: '/settings', icon: CogIcon, label: 'Settings' },
  ]

  return (
    <nav className="bg-gray-800 w-20 flex flex-col items-center py-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`mb-8 last:mb-0 last:mt-auto ${pathname === item.href ? 'text-blue-500' : 'text-gray-300 hover:text-white'
            } transition-colors duration-200`}
        >
          <item.icon className="w-8 h-8" />
          <span className="sr-only">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

