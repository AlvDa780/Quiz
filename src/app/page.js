'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}