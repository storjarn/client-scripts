(function() {
    COLOR = {};

    var Colors = {
        // Reds
        IndianRed: 'CD5C5C', //  205,92,92
        LightCoral: 'F08080', //  240,128,128
        Salmon: 'FA8072', //  250,128,114
        DarkSalmon: 'E9967A', //  233,150,122
        Crimson: 'DC143C', //  220,20,60
        Red: 'FF0000', //  255,0,0
        FireBrick: 'B22222', //  178,34,34
        DarkRed: '8B0000', //  139,0,0
        // Pinks
        Pink: 'FFC0CB', //  255,192,203
        LightPink: 'FFB6C1', //  255,182,193
        HotPink: 'FF69B4', //  255,105,180
        DeepPink: 'FF1493', //  255,20,147
        MediumVioletRed: 'C71585', //  199,21,133
        PaleVioletRed: 'DB7093', //  219,112,147
        // Oranges
        LightSalmon: 'FFA07A', //  255,160,122
        Coral: 'FF7F50', //  255,127,80
        Tomato: 'FF6347', //  255,99,71
        OrangeRed: 'FF4500', //  255,69,0
        DarkOrange: 'FF8C00', //  255,140,0
        Orange: 'FFA500', //  255,165,0
        // Yellows
        Gold: 'FFD700', //  255,215,0
        Yellow: 'FFFF00', //  255,255,0
        LightYellow: 'FFFFE0', //  255,255,224
        LemonChiffon: 'FFFACD', //  255,250,205
        LightGoldenrodYellow: 'FAFAD2', //  250,250,210
        PapayaWhip: 'FFEFD5', //  255,239,213
        Moccasin: 'FFE4B5', //  255,228,181
        PeachPuff: 'FFDAB9', //  255,218,185
        PaleGoldenrod: 'EEE8AA', //  238,232,170
        Khaki: 'F0E68C', //  240,230,140
        DarkKhaki: 'BDB76B', //  189,183,107
        // Purples
        Lavender: 'E6E6FA', //  230,230,250
        Thistle: 'D8BFD8', //  216,191,216
        Plum: 'DDA0DD', //  221,160,221
        Violet: 'EE82EE', //  238,130,238
        Orchid: 'DA70D6', //  218,112,214
        Fuchsia: 'FF00FF', //  255,0,255
        Magenta: 'FF00FF', //  255,0,255
        MediumOrchid: 'BA55D3', //  186,85,211
        MediumPurple: '9370DB', //  147,112,219
        Amethyst: '9966CC', //  153,102,204
        BlueViolet: '8A2BE2', //  138,43,226
        DarkViolet: '9400D3', //  148,0,211
        DarkOrchid: '9932CC', //  153,50,204
        DarkMagenta: '8B008B', //  139,0,139
        Purple: '800080', //  128,0,128
        Indigo: '4B0082', //  75,0,130
        SlateBlue: '6A5ACD', //  106,90,205
        DarkSlateBlue: '483D8B', //  72,61,139
        // Greens
        GreenYellow: 'ADFF2F', //  173,255,47
        Chartreuse: '7FFF00', //  127,255,0
        LawnGreen: '7CFC00', //  124,252,0
        Lime: '00FF00', //  0,255,0
        LimeGreen: '32CD32', //  50,205,50
        PaleGreen: '98FB98', //  152,251,152
        LightGreen: '90EE90', //  144,238,144
        MediumSpringGreen: '00FA9A', //  0,250,154
        SpringGreen: '00FF7F', //  0,255,127
        MediumSeaGreen: '3CB371', //  60,179,113
        SeaGreen: '2E8B57', //  46,139,87
        ForestGreen: '228B22', //  34,139,34
        Green: '008000', //  0,128,0
        DarkGreen: '006400', //  0,100,0
        YellowGreen: '9ACD32', //  154,205,50
        OliveDrab: '6B8E23', //  107,142,35
        Olive: '808000', //  128,128,0
        DarkOliveGreen: '556B2F', //  85,107,47
        MediumAquamarine: '66CDAA', //  102,205,170
        DarkSeaGreen: '8FBC8F', //  143,188,143
        LightSeaGreen: '20B2AA', //  32,178,170
        DarkCyan: '008B8B', //  0,139,139
        Teal: '008080', //  0,128,128
        // Blues/Cyans
        Aqua: '00FFFF', //  0,255,255
        Cyan: '00FFFF', //  0,255,255
        LightCyan: '   ', //'E0FFFF',  //  224,255,255
        PaleTurquoise: 'AFEEEE', //  175,238,238
        Aquamarine: '7FFFD4', //  127,255,212
        Turquoise: '40E0D0', //  64,224,208
        MediumTurquoise: '48D1CC', //  72,209,204
        DarkTurquoise: '00CED1', //  0,206,209
        CadetBlue: '5F9EA0', //  95,158,160
        SteelBlue: '4682B4', //  70,130,180
        LightSteelBlue: 'B0C4DE', //  176,196,222
        PowderBlue: 'B0E0E6', //  176,224,230
        LightBlue: 'ADD8E6', //  173,216,230
        SkyBlue: '87CEEB', //  135,206,235
        LightSkyBlue: '87CEFA', //  135,206,250
        DeepSkyBlue: '00BFFF', //  0,191,255
        DodgerBlue: '1E90FF', //  30,144,255
        CornflowerBlue: '6495ED', //  100,149,237
        MediumSlateBlue: '7B68EE', //  123,104,238
        RoyalBlue: '4169E1', //  65,105,225
        Blue: '0000FF', //  0,0,255
        MediumBlue: '0000CD', //  0,0,205
        DarkBlue: '00008B', //  0,0,139
        Navy: '000080', //  0,0,128
        MidnightBlue: '191970', //  25,25,112
        // Browns
        Cornsilk: 'FFF8DC', //  255,248,220
        BlanchedAlmond: 'FFEBCD', //  255,235,205
        Bisque: 'FFE4C4', //  255,228,196
        NavajoWhite: 'FFDEAD', //  255,222,173
        Wheat: 'F5DEB3', //  245,222,179
        BurlyWood: 'DEB887', //  222,184,135
        Tan: 'D2B48C', //  210,180,140
        RosyBrown: 'BC8F8F', //  188,143,143
        SandyBrown: 'F4A460', //  244,164,96
        Goldenrod: 'DAA520', //  218,165,32
        DarkGoldenrod: 'B8860B', //  184,134,11
        Peru: 'CD853F', //  205,133,63
        Chocolate: 'D2691E', //  210,105,30
        SaddleBrown: '8B4513', //  139,69,19
        Sienna: 'A0522D', //  160,82,45
        Brown: 'A52A2A', //  165,42,42
        Maroon: '800000', //  128,0,0
        // Whites
        White: 'FFFFFF', //  255,255,255
        Snow: 'FFFAFA', //  255,250,250
        Honeydew: 'F0FFF0', //  240,255,240
        MintCream: 'F5FFFA', //  245,255,250
        Azure: 'F0FFFF', //  240,255,255
        AliceBlue: 'F0F8FF', //  240,248,255
        GhostWhite: 'F8F8FF', //  248,248,255
        WhiteSmoke: 'F5F5F5', //  245,245,245
        Seashell: 'FFF5EE', //  255,245,238
        Beige: 'F5F5DC', //  245,245,220
        OldLace: 'FDF5E6', //  253,245,230
        FloralWhite: 'FFFAF0', //  255,250,240
        Ivory: 'FFFFF0', //  255,255,240
        AntiqueWhite: 'FAEBD7', //  250,235,215
        Linen: 'FAF0E6', //  250,240,230
        LavenderBlush: 'FFF0F5', //  255,240,245
        MistyRose: 'FFE4E1', //  255,228,225
        // Greys
        Gainsboro: 'DCDCDC', //  220,220,220
        LightGrey: 'D3D3D3', //  211,211,211
        Silver: 'C0C0C0', //  192,192,192
        DarkGray: 'A9A9A9', //  169,169,169
        Gray: '808080', //  128,128,128
        DimGray: '696969', //  105,105,105
        LightSlateGray: '778899', //  119,136,153
        SlateGray: '708090', //  112,128,144
        DarkSlateGray: '2F4F4F', //  47,79,79
        Black: '000000' //  0,0,0
    };

    for (var key in Colors) {
        (function(key) {
            var descriptor = {
                enumerable: true,
                configurable: false,
                // writable: false,
                get: function() {
                    return '#' + Colors[key];
                }
            };
            Object.defineProperty(COLOR, key, descriptor);
        })(key);
    }

    COLOR.get = function(name){
        return Colors[name];
    };

})();
