/// <reference types="react" />
import { type CircleProps } from '../core';
import { Circle as LeafletCircle } from 'leaflet';
export type { CircleProps } from '../core';
export declare const Circle: import("react").ForwardRefExoticComponent<CircleProps & import("react").RefAttributes<LeafletCircle<any>>>;
