"use client"
import { ReactNode, Suspense } from "react"

type Props = {
  condition: () => Promise<boolean>
  children: ReactNode
  loadingFallback?: ReactNode
  otherwise?: ReactNode
}

export function AsyncIf({
  children,
  condition,
  loadingFallback,
  otherwise,
}: Props) {
  return (
    <Suspense fallback={loadingFallback}>
      <SuspendedComponent condition={condition} otherwise={otherwise}>
        {children}
      </SuspendedComponent>
    </Suspense>
  )
}

import { useEffect, useState } from "react"

function SuspendedComponent({
  children,
  condition,
  otherwise,
}: Omit<Props, "loadingFallback">) {
  const [result, setResult] = useState<boolean | null>(null)

  useEffect(() => {
    let mounted = true
    condition().then(res => {
      if (mounted) setResult(res)
    })
    return () => { mounted = false }
  }, [condition])

  if (result === null) return null
  return result ? <>{children}</> : <>{otherwise}</>
}
