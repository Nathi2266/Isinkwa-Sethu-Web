import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { reportError } from '@/lib/monitoring'

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error('useCarousel must be used within Carousel')
  return context
}

function Carousel({ opts, plugins, orientation = 'horizontal', className, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  )
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)

  const onSelect = React.useCallback((emblaApi) => {
    if (!emblaApi) return
    try {
      setCanPrev(emblaApi.canScrollPrev())
      setCanNext(emblaApi.canScrollNext())
    } catch (error) {
      reportError(error, { feature: 'carousel' })
    }
  }, [])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={{ carouselRef, api, orientation, canPrev, canNext }}>
      <div className={cn('relative', className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className, ...props }) {
  const { api, canPrev } = useCarousel()
  return (
    <Button
      variant="outline-gold"
      size="icon"
      className={cn('absolute left-0 top-1/2 z-10 -translate-y-1/2', className)}
      disabled={!canPrev}
      onClick={() => api?.scrollPrev()}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft />
    </Button>
  )
}

function CarouselNext({ className, ...props }) {
  const { api, canNext } = useCarousel()
  return (
    <Button
      variant="outline-gold"
      size="icon"
      className={cn('absolute right-0 top-1/2 z-10 -translate-y-1/2', className)}
      disabled={!canNext}
      onClick={() => api?.scrollNext()}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight />
    </Button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
