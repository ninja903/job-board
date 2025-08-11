
"use client"

import { ReactNode, Suspense, use } from "react"

type Props = {
  condition: () => Promise<boolean>
  children: ReactNode
  loadingFallback?: ReactNode
  otherwise?: ReactNode
}

export function AsyncIf({
  children,
  condition,
  loadingFallback = null, 
  otherwise = null,
}: Props) {
  return (
    <Suspense fallback={loadingFallback}>
      <SuspendedComponent condition={condition} otherwise={otherwise}>
        {children}
      </SuspendedComponent>
    </Suspense>
  )
}


function SuspendedComponent({
  children,
  condition,
  otherwise,
}: Omit<Props, "loadingFallback">) {

  const shouldRender = use(condition())

 
  return shouldRender ? <>{children}</> : <>{otherwise}</>
}