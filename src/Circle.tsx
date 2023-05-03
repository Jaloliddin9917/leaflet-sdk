import {
  type CircleProps,
  createElementObject,
  createPathComponent,
  extendContext,
  updateCircle,
} from './core';
import { Circle as LeafletCircle } from 'leaflet'

export type { CircleProps } from './core'

export const Circle = createPathComponent<LeafletCircle, CircleProps>(
  function createCircle({ center, children: _c, ...options }, ctx) {
    const circle = new LeafletCircle(center, options)
    return createElementObject(
      circle,
      extendContext(ctx, { overlayContainer: circle }),
    )
  },
  updateCircle,
)
