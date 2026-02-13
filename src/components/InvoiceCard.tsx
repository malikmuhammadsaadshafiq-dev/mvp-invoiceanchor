'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Invoice {
  id: string
  clientName: string
  clientEmail: string
  amount: number
  currency: string
  dueDate: string
  status: 'pending' | 'paid' | 'overdue' | 'chasing'
  description: string
  createdAt: string
  followUpStage: number
  lastFollowUpDate: string | null
}

interface InvoiceCardProps {
  invoice: Invoice
  onDelete: (id: string) => void
  onSendReminder: (id: string) => void
  onMarkPaid: (id: string) => void
  animationDelay?: number
  isDeleting?: boolean
}

export function InvoiceCard({ 
  invoice, 
  onDelete, 
  onSendReminder, 
  onMarkPaid,
  animationDelay = 0,
  isDeleting = false
}: InvoiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors = {
    pending: 'bg-amber-100 text-amber-800 border-amber-200',
    paid: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    overdue: 'bg-rose-100 text-rose-800 border-rose-200',
    chasing: 'bg-purple-100 text-purple-800 border-purple-200',
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount)
  }

  const getFollowUpLabel = (stage: number) => {
    const labels = ['Initial', 'Polite', 'Firm', 'Final']
    return labels[stage] || 'Initial'
  }

  return (
    <div 
      className={cn(
        'bg-white rounded-[2rem] p-6 border border-gray-100 shadow-card',
        'transition-all duration-300',
        isHovered && !isDeleting && 'shadow-card-hover -translate-y-1',
        isDeleting && 'animate-slide-out-left opacity-0',
        'fade-in-up'
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">
            {invoice.clientName}
          </h3>
          <p className="text-sm text-gray-500">{invoice.clientEmail}</p>
        </div>
        <span className={cn(
          'px-3 py-1 rounded-full text-xs font-semibold border',
          statusColors[invoice.status]
        )}>
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-2xl font-bold text-gray-900 mb-1">
          {formatCurrency(invoice.amount, invoice.currency)}
        </p>
        <p className="text-sm text-gray-500">
          Due {formatDate(invoice.dueDate)}
        </p>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {invoice.description}
      </p>

      {invoice.status !== 'paid' && (
        <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Follow-up stage: {getFollowUpLabel(invoice.followUpStage)}
          {invoice.lastFollowUpDate && (
            <span className="text-gray-400">
              • Last sent {formatDate(invoice.lastFollowUpDate)}
            </span>
          )}
        </div>
      )}

      <div className="flex gap-2">
        {invoice.status !== 'paid' && (
          <>
            <button
              onClick={() => onSendReminder(invoice.id)}
              className="flex-1 bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Send Reminder
            </button>
            <button
              onClick={() => onMarkPaid(invoice.id)}
              className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-semibold py-2.5 px-4 rounded-xl border border-emerald-200 transition-colors active:scale-95"
            >
              Mark Paid
            </button>
          </>
        )}
        {invoice.status === 'paid' && (
          <button
            onClick={() => onMarkPaid(invoice.id)}
            disabled
            className="flex-1 bg-gray-100 text-gray-400 text-sm font-semibold py-2.5 px-4 rounded-xl cursor-not-allowed"
          >
            Paid on {invoice.lastFollowUpDate ? formatDate(invoice.lastFollowUpDate) : 'N/A'}
          </button>
        )}
        <button
          onClick={() => onDelete(invoice.id)}
          className="p-2.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors active:scale-95"
          title="Delete invoice"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}