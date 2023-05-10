/// <reference types="react" />
import { type LayerProps } from '../core';
import { TileLayer as LeafletTileLayer, type TileLayerOptions } from 'leaflet';
export interface TileLayerProps extends TileLayerOptions, LayerProps {
    url: string;
}
export declare const TileLayer: import("react").ForwardRefExoticComponent<TileLayerProps & import("react").RefAttributes<LeafletTileLayer>>;
