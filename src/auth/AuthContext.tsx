import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './authContextValue'

export { AuthContext }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminId, setAdminId] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (token: string) => {
    localStorage.setItem('access_token', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('sales_token')
    setIsAuthenticated(false)
    setAdminId(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
