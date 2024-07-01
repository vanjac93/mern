import { BreakpointType, breakpointsAliases } from '~/theme/breakpoints'
import { useEffect, useRef, useState } from 'react'

function getBreakpoint(currentBp?: BreakpointType): BreakpointType | undefined {
  const width = window.innerWidth
  if (width < breakpointsAliases.xs && currentBp !== 'xs') {
    return 'xs'
  }
  if (breakpointsAliases.sm < width && width < breakpointsAliases.md && currentBp !== 'sm') {
    return 'sm'
  }
  if (breakpointsAliases.md < width && width < breakpointsAliases.lg && currentBp !== 'md') {
    return 'md'
  }
  if (breakpointsAliases.lg < width && width < breakpointsAliases.xl && currentBp !== 'lg') {
    return 'lg'
  }
  if (breakpointsAliases.xl < width && width < breakpointsAliases.xxl && currentBp !== 'xl') {
    return 'xl'
  }
  if (width > breakpointsAliases.xxl && currentBp !== 'xxl') {
    return 'xxl'
  }
}

export default function useBreakpoints(): BreakpointType {
  const [breakpoint, setBreakpoint] = useState<BreakpointType | undefined>(getBreakpoint())
  const bpRef = useRef<BreakpointType>()

  useEffect(() => {
    bpRef.current = breakpoint
  })

  useEffect(() => {
    function onResize() {
      const bp = getBreakpoint(bpRef.current)
      if (bp) {
        setBreakpoint(bp)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return breakpoint as BreakpointType
}
