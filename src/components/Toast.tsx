'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={cn(
      'fixed bottom-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-lg animate-slide-in-right',
      'flex items-center gap-3 min-w-[300px]',
      type === 'success' && 'bg-emerald-50 border border-emerald-200 text-emerald-900',
      type === 'error' && 'bg-rose-50 border border-rose-200 text-rose-900',
      type === 'info' && 'bg-blue-50 border border-blue-200 text-blue-900'
    )}>
      <div className={cn(
        'w-2 h-2 rounded-full',
        type === 'success' && 'bg-emerald-500',
        type === 'error' && 'bg-rose-500',
        type === 'info' && 'bg-blue-500'
      )} />
      <span className="font-medium text-sm">{message}</span>
      <button 
        onClick={onClose}
        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
      >
        ×
      </button>
    </div>
  )
}