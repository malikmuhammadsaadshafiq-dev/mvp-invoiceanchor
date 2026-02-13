'use client'

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-card">
      <div className="flex justify-between items-start mb-4">
        <div className="skeleton h-6 w-32 rounded-lg" />
        <div className="skeleton h-8 w-20 rounded-full" />
      </div>
      <div className="skeleton h-4 w-24 rounded mb-2" />
      <div className="skeleton h-4 w-full rounded mb-4" />
      <div className="skeleton h-4 w-3/4 rounded mb-6" />
      <div className="flex gap-2">
        <div className="skeleton h-10 flex-1 rounded-xl" />
        <div className="skeleton h-10 flex-1 rounded-xl" />
      </div>
    </div>
  )
}