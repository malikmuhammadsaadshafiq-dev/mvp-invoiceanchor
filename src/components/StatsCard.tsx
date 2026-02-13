'use client'

import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  icon: React.ReactNode
  delay?: number
}

export function StatsCard({ title, value, subtitle, trend, icon, delay = 0 }: StatsCardProps) {
  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-lg border border-emerald-500/20 rounded-3xl p-6 transition-all duration-300',
        'hover:bg-white/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10',
        'fade-in-up'
      )}
      style={{ '--delay': `${delay}s` } as React.CSSProperties}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-2xl border border-emerald-500/20">
          {icon}
        </div>
        {trend && (
          <span className={cn(
            'flex items-center text-xs font-medium',
            trend === 'up' && 'text-emerald-400',
            trend === 'down' && 'text-red-400',
            trend === 'neutral' && 'text-white/60'
          )}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {trend === 'neutral' && '→'}
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-white tracking-tight mb-1">{value}</h3>
      <p className="text-sm font-medium text-white/60 mb-1">{title}</p>
      {subtitle && <p className="text-xs text-white/40">{subtitle}</p>}
    </div>
  )
}