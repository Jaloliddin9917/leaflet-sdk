import { type MediaOverlayProps } from '../core';
import { ImageOverlay as LeafletImageOverlay } from 'leaflet';
import type { ReactNode } from 'react';
export interface ImageOverlayProps extends MediaOverlayProps {
    children?: ReactNode;
    url: string;
}
export declare const ImageOverlay: import("react").ForwardRefExoticComponent<ImageOverlayProps & import("react").RefAttributes<LeafletImageOverlay>>;
