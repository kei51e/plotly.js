/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var defaultLine = require('../../components/color').defaultLine;


module.exports = {
    domain: {
        x: {
            valType: 'info_array',
            role: 'info',
            items: [
                {valType: 'number', min: 0, max: 1},
                {valType: 'number', min: 0, max: 1}
            ],
            dflt: [0, 1],
            description: [
                'Sets the horizontal domain of this subplot',
                '(in plot fraction).'
            ].join(' ')
        },
        y: {
            valType: 'info_array',
            role: 'info',
            items: [
                {valType: 'number', min: 0, max: 1},
                {valType: 'number', min: 0, max: 1}
            ],
            dflt: [0, 1],
            description: [
                'Sets the vertical domain of this subplot',
                '(in plot fraction).'
            ].join(' ')
        }
    },

    style: {
        valType: 'string',
        values: ['basic', 'streets', 'outdoors', 'light', 'dark', 'satellite', 'satellite-streets'],
        dflt: 'basic',
        role: 'style',
        description: [
            'Sets the Mapbox map style.',
            'Either input the defaults Mapbox names or the URL to a custom style.'
        ].join(' ')
    },
    center: {
        lon: {
            valType: 'number',
            dflt: 0,
            role: 'info',
            description: 'Sets the longitude of the center of the map (in degrees East).'
        },
        lat: {
            valType: 'number',
            dflt: 0,
            role: 'info',
            description: 'Sets the latitude of the center of the map (in degrees North).'
        }
    },
    zoom: {
        valType: 'number',
        dflt: 1,
        role: 'info',
        description: 'Sets the zoom level of the map.'
    },
    bearing: {
        valType: 'number',
        dflt: 0,
        role: 'info',
        description: 'Sets the bearing angle of the map (in degrees counter-clockwise from North).'
    },
    pitch: {
        valType: 'number',
        dflt: 0,
        role: 'info',
        description: [
            'Sets the pitch angle of the map',
            '(in degrees, where *0* means perpendicular to the surface of the map).'
        ].join(' ')
    },

    layers: {
        _isLinkedToArray: true,

        sourcetype: {
            valType: 'enumerated',
            values: ['geojson', 'vector'],
            dflt: 'geojson',
            role: 'info',
            description: [
                'Sets the source type for this layer.',
                'Support for *raster*, *image* and *video* source types is coming soon.'
            ].join(' ')
        },

        source: {
            valType: 'any',
            role: 'info',
            description: [
                'Sets the source data for this layer.',
                'Source can be either a URL,',
                'a geojson object (with `sourcetype` set to *geojson*)',
                'or an array of tile URLS (with `sourcetype` set to *vector*).'
            ].join(' ')
        },

        sourcelayer: {
            valType: 'string',
            dflt: '',
            role: 'info',
            description: [
                'Specifies the layer to use from a vector tile source.',
                'Required for *vector* source type that supports multiple layers.'
            ].join(' ')
        },

        type: {
            valType: 'enumerated',
            values: ['circle', 'line', 'fill'],
            dflt: 'line',
            role: 'info',
            description: [
                'Sets the layer type.',
                'Support for *raster*, *background* types is coming soon.',
                'Note that *line* and *fill* are not compatible with Point',
                'GeoJSON geometry.'
            ].join(' ')
        },

        // attributes shared between all types
        below: {
            valType: 'string',
            dflt: '',
            role: 'info',
            description: [
                'Determines if the layer will be inserted',
                'before the layer with the specified ID.',
                'If omitted or set to \'\',',
                'the layer will be inserted above every existing layer.'
            ].join(' ')
        },
        color: {
            valType: 'color',
            dflt: defaultLine,
            role: 'style',
            description: [
                'Sets the primary layer color.',
                'If `type` is *circle*, color corresponds to the circle color',
                'If `type` is *line*, color corresponds to the line color',
                'If `type` is *fill*, color corresponds to the fill color',
                'If `type` is *symbol*, color corresponds to the icon color'
            ].join(' ')
        },
        opacity: {
            valType: 'number',
            min: 0,
            max: 1,
            dflt: 1,
            role: 'info',
            description: 'Sets the opacity of the layer.'
        },

        // type-specific style attributes
        circle: {
            radius: {
                valType: 'number',
                dflt: 15,
                role: 'style',
                description: [
                    'Sets the circle radius.',
                    'Has an effect only when `type` is set to *circle*.'
                ].join(' ')
            }
        },

        line: {
            width: {
                valType: 'number',
                dflt: 2,
                role: 'style',
                description: [
                    'Sets the line radius.',
                    'Has an effect only when `type` is set to *line*.'
                ].join(' ')
            }
        },

        fill: {
            outlinecolor: {
                valType: 'color',
                dflt: defaultLine,
                role: 'style',
                description: [
                    'Sets the fill outline color.',
                    'Has an effect only when `type` is set to *fill*.'
                ].join(' ')
            }
        },

        }
    }

};
