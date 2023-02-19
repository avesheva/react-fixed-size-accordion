import React, { FC, ReactNode, useEffect } from 'react'

export interface IProps {
  animationDuration?: number,
  topBarId?: string,
  bottomBarId?: string,
  bottomBarContentId?: string,

  // Slots
  topBarContent: ReactNode,
  bottomBarContent: ReactNode,
}

let observerInstance: ResizeObserver | null = null
let mounted = false

const ReactFixedSizeAccordion: FC<IProps> = ({
  animationDuration = 0,
  topBarId = 'fsaTopBar',
  bottomBarId = 'bottomBarId',
  bottomBarContentId = '',
  topBarContent,
  bottomBarContent,
}) => {
  useEffect(() => {
    if (!mounted) {
      const topBar: HTMLElement | null = document.getElementById(topBarId)
      const bottomBar: HTMLElement | null = document.getElementById(bottomBarContentId || bottomBarId)

      const heightCalculation = (): ResizeObserver | null => {
        const topBarBlock = topBar?.firstElementChild as HTMLElement | null

        if (!topBarBlock || !bottomBar || !topBar) return null

        const topBarInitialHeight: number = topBarBlock.offsetHeight
        const scrollBlockInitialHeight: number = bottomBar.offsetHeight || 0

        const finishedTopBarBlockHeight = topBarInitialHeight
        const finishedContentBlockHeight = scrollBlockInitialHeight

        topBar.style.height = `${ topBarInitialHeight }px`
        bottomBar.style.height = `${ scrollBlockInitialHeight }px`

        const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
          const x = entries[0].borderBoxSize[0].blockSize
          const y = finishedTopBarBlockHeight - x

          topBar.style.height = `${ Math.round(x) }px`
          bottomBar.style.height = `${ Math.round(finishedContentBlockHeight + y) }px`
        })

        observer.observe(topBarBlock)

        return observer
      }


      if (topBar && bottomBar) {
        topBar.style.transition = `height ${ animationDuration }ms ease`
        bottomBar.style.transition = `height ${ animationDuration }ms ease`

        observerInstance = heightCalculation()
      }

      mounted = true
    }

    return () => {
      if (mounted) {
        mounted = false
        observerInstance?.disconnect()
      }
    }
  }, [])

  return (
    <div>
      <div id={ topBarId } style={{ overflow: 'hidden' }}>
        { topBarContent }
      </div>
      <div id={ bottomBarId } style={{ overflowY: 'auto' }}>
        { bottomBarContent }
      </div>
    </div>
  )
}

export default ReactFixedSizeAccordion
