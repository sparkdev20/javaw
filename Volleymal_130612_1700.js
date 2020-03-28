var ag = {
    bg: [],
    cg: [{
        dg: "snd_musicTitle",
        eg: 1,
        fg: ".mp3",
        gg: "snd_musicTitle",
        hg: 0,
        volume: 1,
        ig: 0,
        preload: !0
    }, {
        dg: "snd_musicWinner",
        eg: 1,
        fg: ".mp3",
        gg: "snd_win",
        hg: 0,
        volume: 1,
        ig: 0,
        preload: !0
    }, {
        dg: "snd_h1",
        eg: 0,
        fg: ".mp3",
        gg: "snd_boom1",
        hg: 0,
        volume: 1,
        ig: 0,
        preload: !0
    }, {
        dg: "snd_h2",
        eg: 0,
        fg: ".mp3",
        gg: "snd_boom2",
        hg: 0,
        volume: 1,
        ig: 0,
        preload: !0
    }],
    jg: [{
        dg: "sp_labkhand_logo",
        width: 28,
        height: 28,
        kg: !1,
        lg: 14,
        mg: 14,
        ng: 27,
        og: 27,
        pg: [0]
    }, {
        dg: "sp_pawn",
        width: 134,
        height: 132,
        kg: !1,
        qg: !0,
        lg: 62,
        mg: 107,
        rg: 1,
        ng: 133,
        og: 131,
        pg: [1,
            2, 3, 4, 5
        ],
        sg: [
            [0x88, 0x00, 0x00, 0x1C, 0x8F, 0x00, 0x01, 0xFE, 0x3F, 0x8D, 0x00, 0x03, 0x01, 0xFC, 0x3F, 0x80, 0x8D, 0x00, 0x02, 0xFC, 0x1F, 0x80, 0x8D, 0x00, 0x01, 0x78, 0x1E, 0x8E, 0x00, 0x01, 0x78, 0x1C, 0x8E, 0x00, 0x01, 0x7F, 0x1C, 0x8D, 0x00, 0x05, 0x01, 0xFF, 0xBF, 0xF0, 0xFF, 0x80, 0x8A, 0x00, 0x05, 0x07, 0xFF, 0xFF, 0xF9, 0xFF, 0xF0, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xC0, 0x8A, 0x00, 0x05, 0x1F, 0xFF, 0xFF, 0xF8, 0xFF, 0x80, 0x88, 0x00, 0x05, 0x3F, 0xFF, 0xBF, 0xFF, 0xFF, 0xF8, 0x89, 0x00, 0x00, 0x07, 0x84, 0xFF, 0x00, 0xF8, 0x89, 0x00, 0x00, 0x07, 0x84, 0xFF, 0x00, 0xFC, 0x8A,
                0x00, 0x05, 0x1F, 0xFC, 0x7F, 0xFF, 0xFF, 0xFC, 0x8C, 0x00, 0x03, 0x7F, 0xFF, 0xFF, 0xFC, 0x8C, 0x00, 0x03, 0x7F, 0xFF, 0xFF, 0xFC, 0x8C, 0x00, 0x03, 0x7F, 0xFF, 0xFF, 0xF0, 0x8C, 0x00, 0x03, 0x3F, 0xFF, 0xFF, 0xE0, 0x8C, 0x00, 0x05, 0x3F, 0xFF, 0xFF, 0xFC, 0x20, 0x60, 0x8A, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x01, 0xFD, 0xF8, 0x8A, 0x00, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x07, 0x83, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x07, 0x83, 0xFF, 0x00, 0xF0, 0x8A, 0x00, 0x00, 0x03, 0x83, 0xFF, 0x00, 0xF0, 0x8A, 0x00, 0x00, 0x01, 0x83, 0xFF,
                0x00, 0xE0, 0x8A, 0x00, 0x00, 0x01, 0x83, 0xFF, 0x00, 0xE0, 0x8A, 0x00, 0x04, 0x01, 0xFF, 0xFF, 0x9F, 0xFF, 0x8C, 0x00, 0x03, 0xFF, 0xFF, 0xC3, 0x80, 0x8C, 0x00, 0x02, 0x7F, 0xFF, 0xC0, 0x8D, 0x00, 0x02, 0x3F, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x1F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x0F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x0F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x07, 0xFF, 0xFC, 0x8D, 0x00, 0x02, 0x03, 0xFF, 0xFC, 0x8D, 0x00, 0x02, 0x03, 0xFF, 0xFE, 0x8D, 0x00, 0x02, 0x01, 0xFF, 0xFF, 0x8D, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0x80, 0x8C, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0x80, 0x8D, 0x00, 0x02, 0xFF, 0xFF, 0xC0, 0x8D,
                0x00, 0x02, 0xFF, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xFC, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xFC, 0x8D, 0x00, 0x02, 0xFF, 0xFF, 0xFC, 0x8D, 0x00, 0x02, 0xFF, 0xFF, 0xFC, 0x8C, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0xFE, 0x8C, 0x00, 0x03, 0x3F, 0xFF, 0xFF, 0xFE, 0x8C, 0x00, 0x03,
                0x7F, 0xFF, 0xFF, 0xFE, 0x8B, 0x00, 0x00, 0x01, 0x82, 0xFF, 0x00, 0xFE, 0x8B, 0x00, 0x00, 0x07, 0x82, 0xFF, 0x00, 0xFE, 0x8B, 0x00, 0x00, 0x7F, 0x82, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x07, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xFE, 0x89, 0x00, 0x00, 0x7F, 0x84, 0xFF, 0x00, 0xFC, 0x85, 0x00, 0x03, 0x01, 0xF8, 0x00, 0x7F, 0x85, 0xFF, 0x00, 0xFC, 0x85, 0x00, 0x02, 0x3F, 0xFE, 0x07, 0x86, 0xFF, 0x00, 0xFC, 0x85, 0x00, 0x02, 0xFE, 0x0F, 0x9F, 0x86, 0xFF, 0x00, 0xF8, 0x84, 0x00, 0x02, 0x01, 0xE0, 0x03, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x03, 0x80, 0x01, 0x87,
                0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x07, 0x00, 0x03, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x07, 0x00, 0x07, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x03, 0x00, 0x0F, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x01, 0x80, 0x0F, 0x87, 0xFF, 0x00, 0xE0, 0x85, 0x00, 0x01, 0x70, 0x1F, 0x87, 0xFF, 0x00, 0xE0, 0x85, 0x00, 0x01, 0x0F, 0x1F, 0x87, 0xFF, 0x00, 0xE0, 0x85, 0x00, 0x01, 0x0F, 0x9F, 0x87, 0xFF, 0x00, 0xC0, 0x85, 0x00, 0x01, 0x1F, 0x9F, 0x87, 0xFF, 0x00, 0xC0, 0x85, 0x00, 0x01, 0x1F, 0x9F, 0x87, 0xFF, 0x00, 0xC0, 0x84, 0x00, 0x02, 0x08, 0x1F, 0x1F, 0x87, 0xFF, 0x00, 0x80, 0x85, 0x00,
                0x01, 0x3C, 0x1F, 0x87, 0xFF, 0x87, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x00, 0xFE, 0x87, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x00, 0xFE, 0x87, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x00, 0xFE, 0x87, 0x00, 0x00, 0x03, 0x86, 0xFF, 0x00, 0xFE, 0x87, 0x00, 0x02, 0x03, 0xFF, 0xF9, 0x84, 0xFF, 0x00, 0xFC, 0x87, 0x00, 0x03, 0x01, 0xFF, 0xFC, 0x3F, 0x83, 0xFF, 0x00, 0xFC, 0x87, 0x00, 0x03, 0x01, 0xFF, 0xFC, 0x1F, 0x83, 0xFF, 0x00, 0xF8, 0x88, 0x00, 0x07, 0xFF, 0xFC, 0x1F, 0xFF, 0x9F, 0xFF, 0xFF, 0xF0, 0x88, 0x00, 0x07, 0x7F, 0xF8, 0x1F, 0xFF, 0x9F, 0xFF, 0xFF, 0xE0, 0x88, 0x00, 0x07, 0x7F, 0xF8, 0x1F, 0xFF, 0x8F, 0xFF,
                0xFF, 0xC0, 0x88, 0x00, 0x07, 0x7F, 0xF0, 0x1F, 0xFF, 0x0F, 0xFF, 0xFF, 0xC0, 0x88, 0x00, 0x07, 0xFF, 0xE0, 0x3F, 0xFE, 0x0F, 0xFF, 0xFF, 0x80, 0x87, 0x00, 0x07, 0x01, 0xFF, 0xC0, 0x3F, 0xFC, 0x07, 0xFF, 0xFF, 0x88, 0x00, 0x07, 0x03, 0xFF, 0x80, 0x7F, 0xF0, 0x07, 0xFF, 0xFE, 0x88, 0x00, 0x07, 0x07, 0xFF, 0x00, 0x7F, 0xE0, 0x07, 0xFD, 0xFC, 0x88, 0x00, 0x07, 0x07, 0xFE, 0x00, 0xFF, 0x80, 0x03, 0xFD, 0xFC, 0x88, 0x00, 0x07, 0x07, 0xFC, 0x01, 0xFE, 0x00, 0x03, 0xFC, 0xF8, 0x88, 0x00, 0x07, 0x03, 0xFC, 0x03, 0xFC, 0x00, 0x01, 0xFC, 0xF8, 0x88, 0x00, 0x07, 0x03, 0xFC, 0x0F, 0xF8, 0x00, 0x00, 0xFC,
                0xFC, 0x88, 0x00, 0x07, 0x03, 0xF8, 0x3F, 0xF8, 0x00, 0x00, 0xFF, 0xFE, 0x88, 0x00, 0x07, 0x03, 0xF8, 0x1F, 0xF8, 0x00, 0x01, 0xFF, 0xFF, 0x88, 0x00, 0x07, 0x03, 0xF0, 0x1F, 0xF0, 0x00, 0x01, 0xFF, 0xFF, 0x88, 0x00, 0x07, 0x03, 0xF0, 0x0F, 0xE0, 0x00, 0x01, 0xFF, 0xFE, 0x88, 0x00, 0x07, 0x03, 0xF0, 0x0F, 0xE0, 0x00, 0x00, 0xFE, 0xF8, 0x88, 0x00, 0x07, 0x01, 0xF0, 0x07, 0xE0, 0x00, 0x00, 0xF8, 0x78, 0x88, 0x00, 0x07, 0x01, 0xF0, 0x07, 0xE0, 0x00, 0x00, 0xF0, 0x78, 0x88, 0x00, 0x07, 0x01, 0xF0, 0x07, 0xE0, 0x00, 0x01, 0xE0, 0x78, 0x88, 0x00, 0x07, 0x01, 0xF0, 0x07, 0xE0, 0x00, 0x01, 0xE0, 0x78,
                0x89, 0x00, 0x06, 0xF0, 0x03, 0xE0, 0x00, 0x01, 0xE0, 0x78, 0x89, 0x00, 0x06, 0xF0, 0x03, 0xE0, 0x00, 0x03, 0xC0, 0x78, 0x89, 0x00, 0x06, 0xF0, 0x01, 0xE0, 0x00, 0x03, 0xC0, 0x78, 0x89, 0x00, 0x06, 0xF8, 0x01, 0xF0, 0x00, 0x03, 0x80, 0x78, 0x89, 0x00, 0x06, 0x78, 0x01, 0xF0, 0x00, 0x03, 0x80, 0x78, 0x89, 0x00, 0x06, 0x7C, 0x00, 0xF0, 0x00, 0x03, 0x80, 0x78, 0x89, 0x00, 0x06, 0xFE, 0x00, 0xF0, 0x00, 0x03, 0x80, 0x38, 0x89, 0x00, 0x06, 0xFF, 0x00, 0x78, 0x00, 0x03, 0x80, 0x38, 0x88, 0x00, 0x07, 0x01, 0xFE, 0x00, 0x78, 0x00, 0x03, 0x80, 0x3C, 0x88, 0x00, 0x07, 0x01, 0xFC, 0x00, 0x7C, 0x00, 0x03,
                0x80, 0x3C, 0x89, 0x00, 0x06, 0x7C, 0x00, 0x3C, 0x00, 0x03, 0x80, 0x3C, 0x89, 0x00, 0x06, 0x3C, 0x00, 0x3F, 0x00, 0x07, 0xE0, 0x1E, 0x89, 0x00, 0x06, 0x3C, 0x00, 0x3F, 0x00, 0x0F, 0xF0, 0x1E, 0x89, 0x00, 0x06, 0x7F, 0x00, 0x3F, 0x00, 0x1F, 0xF8, 0x0F, 0x88, 0x00, 0x08, 0x01, 0xFF, 0x80, 0x1F, 0x00, 0x0F, 0xE0, 0x0F, 0xC0, 0x87, 0x00, 0x08, 0x01, 0xFF, 0xC0, 0x0F, 0xE0, 0x07, 0xC0, 0x1F, 0xFE, 0x87, 0x00, 0x09, 0x03, 0xFF, 0xE0, 0x0F, 0xFC, 0x07, 0xE0, 0x0F, 0xFF, 0x80, 0x86, 0x00, 0x09, 0x03, 0xFF, 0xF0, 0x0F, 0xFF, 0x1F, 0xFC, 0x0F, 0xFF, 0xC0, 0x86, 0x00, 0x09, 0x03, 0xFF, 0xF0, 0x0F, 0xFF,
                0x3F, 0xFC, 0x07, 0xFF, 0xF0, 0x86, 0x00, 0x09, 0x03, 0xFF, 0xF0, 0x0F, 0xFF, 0xBF, 0xFE, 0x0F, 0xFF, 0xF8, 0x86, 0x00, 0x09, 0x03, 0xFF, 0xF0, 0x03, 0xFC, 0x3F, 0xFE, 0x01, 0xFF, 0xC0, 0x8B, 0x00, 0x01, 0x3F, 0xFE, 0x97, 0x00
            ],
            [0xCD, 0x00, 0x01, 0x01, 0xFE, 0x8E, 0x00, 0x02, 0x03, 0xFF, 0x80, 0x8D, 0x00, 0x05, 0x07, 0xFF, 0x80, 0xE0, 0x03, 0x80, 0x8A, 0x00, 0x05, 0x0F, 0xFF, 0xFF, 0xE1, 0x8F, 0xC0, 0x8A, 0x00, 0x05, 0x0F, 0xFF, 0xFF, 0xEE, 0x1F, 0xE0, 0x8A, 0x00, 0x05, 0x0F, 0xFF, 0xFF, 0xFC, 0x1F, 0xE0, 0x8A, 0x00, 0x05, 0x07, 0xFF, 0xFF, 0xF8, 0x3F, 0xE0, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF,
                0x00, 0xE0, 0x8A, 0x00, 0x84, 0xFF, 0x00, 0xC0, 0x89, 0x00, 0x00, 0x01, 0x84, 0xFF, 0x00, 0x80, 0x89, 0x00, 0x00, 0x07, 0x84, 0xFF, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xF0, 0x8A, 0x00, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xE0, 0x8A, 0x00, 0x00, 0x7F, 0x83, 0xFF, 0x00, 0xF0, 0x8A, 0x00, 0x00, 0x7F, 0x83, 0xFF, 0x00, 0xF0, 0x89, 0x00, 0x01, 0x01, 0x7F, 0x83, 0xFF, 0x00, 0xF0, 0x89, 0x00, 0x00, 0x01, 0x84, 0xFF, 0x00, 0xE0, 0x89, 0x00, 0x00, 0x03, 0x84, 0xFF, 0x00, 0xE0, 0x89, 0x00, 0x00, 0x03, 0x84, 0xFF, 0x00, 0xE0, 0x89, 0x00, 0x00, 0x03, 0x84,
                0xFF, 0x00, 0xE0, 0x89, 0x00, 0x00, 0x0F, 0x84, 0xFF, 0x00, 0xF8, 0x89, 0x00, 0x00, 0x0F, 0x84, 0xFF, 0x00, 0xFE, 0x89, 0x00, 0x00, 0x07, 0x85, 0xFF, 0x89, 0x00, 0x00, 0x0F, 0x85, 0xFF, 0x00, 0x80, 0x88, 0x00, 0x00, 0x0F, 0x85, 0xFF, 0x00, 0x80, 0x88, 0x00, 0x00, 0x0F, 0x85, 0xFF, 0x89, 0x00, 0x00, 0x03, 0x84, 0xFF, 0x00, 0xFE, 0x89, 0x00, 0x00, 0x03, 0x84, 0xFF, 0x00, 0xE0, 0x89, 0x00, 0x00, 0x07, 0x84, 0xFF, 0x00, 0xF0, 0x89, 0x00, 0x00, 0x07, 0x85, 0xFF, 0x00, 0xBF, 0x88, 0x00, 0x00, 0x03, 0x86, 0xFF, 0x00, 0x80, 0x87, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x00, 0xC0, 0x87, 0x00, 0x00, 0x07, 0x86,
                0xFF, 0x00, 0xC0, 0x87, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x00, 0xE0, 0x87, 0x00, 0x00, 0x03, 0x86, 0xFF, 0x00, 0xE0, 0x87, 0x00, 0x00, 0x03, 0x86, 0xFF, 0x00, 0xF0, 0x87, 0x00, 0x00, 0x03, 0x86, 0xFF, 0x00, 0xF0, 0x87, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x00, 0xF0, 0x87, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x00, 0xF0, 0x87, 0x00, 0x00, 0x07, 0x82, 0xFF, 0x00, 0xF3, 0x82, 0xFF, 0x00, 0xF0, 0x87, 0x00, 0x00, 0x03, 0x82, 0xFF, 0x00, 0xF1, 0x82, 0xFF, 0x00, 0xE0, 0x87, 0x00, 0x00, 0x01, 0x82, 0xFF, 0x00, 0xF1, 0x82, 0xFF, 0x00, 0xE0, 0x87, 0x00, 0x00, 0x03, 0x82, 0xFF, 0x00, 0xF1, 0x82, 0xFF, 0x00, 0xC0, 0x87,
                0x00, 0x00, 0x03, 0x82, 0xFF, 0x00, 0xF0, 0x82, 0xFF, 0x00, 0xC0, 0x87, 0x00, 0x00, 0x03, 0x82, 0xFF, 0x00, 0xF0, 0x82, 0xFF, 0x00, 0x80, 0x87, 0x00, 0x00, 0x01, 0x82, 0xFF, 0x04, 0xF0, 0x7F, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x0A, 0x07, 0xFF, 0xC0, 0x7F, 0xFF, 0xFF, 0xF8, 0x3F, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x0A, 0xFF, 0xFF, 0xFE, 0x7F, 0xFF, 0xFF, 0xF8, 0x3F, 0xFF, 0xFF, 0x80, 0x84, 0x00, 0x00, 0x07, 0x85, 0xFF, 0x03, 0xFC, 0x0F, 0xFF, 0xFF, 0x85, 0x00, 0x00, 0x1F, 0x85, 0xFF, 0x03, 0xFE, 0x0F, 0xFF, 0xFC, 0x85, 0x00, 0x00, 0x7F, 0x86, 0xFF, 0x02, 0x03, 0xFF, 0xF8, 0x85, 0x00, 0x87, 0xFF, 0x02,
                0x81, 0xFF, 0xC0, 0x84, 0x00, 0x00, 0x03, 0x87, 0xFF, 0x02, 0xC0, 0x1F, 0x80, 0x84, 0x00, 0x00, 0x0F, 0x87, 0xFF, 0x00, 0xC0, 0x86, 0x00, 0x00, 0x3F, 0x87, 0xFF, 0x00, 0xE0, 0x86, 0x00, 0x88, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x00, 0x01, 0x88, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x00, 0x07, 0x88, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x00, 0x0F, 0x88, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x01, 0x1F, 0x7F, 0x87, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x01, 0x3E, 0x7F, 0x87, 0xFF, 0x00, 0xF0, 0x85, 0x00, 0x01, 0x78, 0x7F, 0x87, 0xFF, 0x00, 0xF8, 0x85, 0x00, 0x00, 0xF0, 0x88, 0xFF, 0x00, 0xFC, 0x85, 0x00, 0x00, 0xF0, 0x88, 0xFF,
                0x00, 0xFE, 0x84, 0x00, 0x01, 0x01, 0xE0, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xE0, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x89, 0xFF, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x89, 0xFF, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x01, 0x03, 0xC1, 0x88, 0xFF, 0x00, 0xFC, 0x84, 0x00, 0x01, 0x01, 0xC0, 0x88, 0xFF, 0x00, 0xF8, 0x84, 0x00, 0x01,
                0x01, 0xF0, 0x88, 0xFF, 0x00, 0xF8, 0x84, 0x00, 0x01, 0x03, 0xF8, 0x88, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x01, 0x07, 0xF8, 0x88, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x0F, 0xF8, 0x7F, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x02, 0x0F, 0xF8, 0x7F, 0x87, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x04, 0x0F, 0xF8, 0x3F, 0xFF, 0xEF, 0x85, 0xFF, 0x00, 0xF0, 0x84, 0x00, 0x04, 0x1F, 0xF8, 0x3F, 0xFF, 0xEF, 0x85, 0xFF, 0x00, 0xE0, 0x84, 0x00, 0x04, 0x1F, 0xF8, 0x1F, 0xFF, 0xE7, 0x85, 0xFF, 0x00, 0xE0, 0x84, 0x00, 0x04, 0x3F, 0xF8, 0x1F, 0xFF, 0xE7, 0x85, 0xFF, 0x00, 0xC0, 0x84, 0x00, 0x04, 0x7F, 0xF0, 0x0F, 0xFF, 0xE3,
                0x82, 0xFF, 0x03, 0xFC, 0x0F, 0xFF, 0xC0, 0x83, 0x00, 0x05, 0xFF, 0xFF, 0xE0, 0x0F, 0xFF, 0xE3, 0x82, 0xFF, 0x03, 0xF8, 0x0F, 0xFF, 0x80, 0x82, 0x00, 0x0D, 0x03, 0xFF, 0xFF, 0xC0, 0x07, 0xFF, 0xC3, 0xFF, 0xF0, 0x1F, 0xF0, 0x0F, 0xFF, 0x80, 0x82, 0x00, 0x0C, 0x07, 0xFF, 0xFF, 0x00, 0x07, 0xFF, 0xC1, 0xFF, 0xF0, 0x1F, 0xE0, 0x0F, 0xFF, 0x83, 0x00, 0x0C, 0x0F, 0x3F, 0xF8, 0x00, 0x0F, 0xFF, 0x81, 0xFF, 0xE0, 0x1F, 0xE0, 0x07, 0xFE, 0x83, 0x00, 0x00, 0x1E, 0x82, 0x00, 0x08, 0x1F, 0xFF, 0x01, 0xFF, 0xE0, 0x1F, 0xF0, 0x07, 0xFE, 0x83, 0x00, 0x00, 0x1C, 0x82, 0x00, 0x08, 0x1F, 0xFC, 0x01, 0xFF, 0xC0,
                0x3F, 0xF8, 0x07, 0xFC, 0x83, 0x00, 0x00, 0x1C, 0x82, 0x00, 0x08, 0x1F, 0xF0, 0x01, 0xFF, 0x80, 0x7F, 0xFC, 0x07, 0xF8, 0x83, 0x00, 0x00, 0x1C, 0x82, 0x00, 0x08, 0x1F, 0x80, 0x03, 0xFE, 0x00, 0xFF, 0xFE, 0x03, 0xF8, 0x83, 0x00, 0x00, 0x0E, 0x82, 0x00, 0x08, 0x1F, 0x00, 0x07, 0xF0, 0x00, 0xFF, 0xFE, 0x07, 0xFC, 0x83, 0x00, 0x00, 0x07, 0x82, 0x00, 0x08, 0x1E, 0x00, 0x07, 0xC0, 0x00, 0xFF, 0xFC, 0x0F, 0xFE, 0x83, 0x00, 0x0C, 0x01, 0xC0, 0x00, 0x00, 0x0E, 0x00, 0x07, 0xC0, 0x00, 0x7F, 0xF0, 0x0F, 0xFC, 0x87, 0x00, 0x08, 0x0C, 0x00, 0x03, 0xC0, 0x00, 0x3F, 0xE0, 0x0F, 0xF8, 0x87, 0x00, 0x08, 0x0E,
                0x00, 0x03, 0xC0, 0x00, 0x1F, 0xC0, 0x07, 0xF0, 0x87, 0x00, 0x08, 0x0E, 0x00, 0x01, 0xC0, 0x00, 0x1F, 0x80, 0x03, 0xF0, 0x87, 0x00, 0x08, 0x0E, 0x00, 0x01, 0xE0, 0x00, 0x1F, 0x80, 0x03, 0xF0, 0x87, 0x00, 0x08, 0x0F, 0x00, 0x01, 0xE0, 0x00, 0x1F, 0x00, 0x03, 0xF0, 0x87, 0x00, 0x08, 0x0F, 0x00, 0x01, 0xF0, 0x00, 0x1F, 0x00, 0x03, 0xF0, 0x87, 0x00, 0x08, 0x0F, 0x80, 0x01, 0xF8, 0x00, 0x1F, 0x00, 0x03, 0xF8, 0x87, 0x00, 0x08, 0x1F, 0xE0, 0x01, 0xFE, 0x00, 0x1F, 0x00, 0x03, 0xF8, 0x87, 0x00, 0x08, 0x1F, 0xF0, 0x01, 0xFF, 0x00, 0x1F, 0x00, 0x07, 0xFC, 0x87, 0x00, 0x08, 0x1F, 0xF0, 0x01, 0xFF, 0x00,
                0x1F, 0x00, 0x0F, 0xFC, 0x87, 0x00, 0x08, 0x1F, 0xF0, 0x01, 0xFE, 0x00, 0x1F, 0x00, 0x0F, 0xFE, 0x87, 0x00, 0x08, 0x1F, 0xE0, 0x00, 0x7F, 0xC6, 0x1F, 0x00, 0x0F, 0xFF, 0x87, 0x00, 0x09, 0x0F, 0xE0, 0x00, 0x7F, 0xFF, 0xBF, 0x00, 0x0F, 0xFF, 0xFC, 0x86, 0x00, 0x09, 0x07, 0xF0, 0x00, 0x3F, 0xFF, 0xBF, 0x80, 0x00, 0xFF, 0xFE, 0x86, 0x00, 0x09, 0x07, 0xFC, 0x00, 0x3F, 0xFF, 0xFF, 0xE0, 0x00, 0xFF, 0xFF, 0x86, 0x00, 0x09, 0x1F, 0xFF, 0x80, 0x3F, 0xFF, 0xFF, 0xC0, 0x00, 0xFF, 0xFF, 0x86, 0x00, 0x0A, 0x1F, 0xFF, 0x80, 0x3F, 0xFF, 0xFF, 0xE0, 0x00, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x0A, 0x3F, 0xFF, 0x80,
                0x3F, 0xFF, 0xFF, 0xE0, 0x00, 0xFF, 0xFF, 0xC0, 0x85, 0x00, 0x0A, 0x3F, 0xFF, 0x80, 0x07, 0xFF, 0xFF, 0xF0, 0x00, 0xFF, 0xFF, 0xF0, 0x85, 0x00, 0x0A, 0x1F, 0xFF, 0x80, 0x00, 0x0F, 0xFF, 0xF0, 0x00, 0xFF, 0xFF, 0xF0, 0x85, 0x00, 0x0A, 0x1F, 0xFF, 0xC0, 0x00, 0x0F, 0xFF, 0xF8, 0x00, 0x7F, 0xFF, 0xC0, 0x85, 0x00, 0x09, 0x1F, 0xFF, 0xC0, 0x00, 0x0F, 0xFF, 0xF8, 0x00, 0x3F, 0xFE, 0x86, 0x00, 0x08, 0x0F, 0xFF, 0xE0, 0x00, 0x1F, 0xFF, 0xF8, 0x00, 0x1E, 0x87, 0x00, 0x06, 0x03, 0xFF, 0x00, 0x00, 0x1F, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x1F, 0xFF, 0xF0, 0x8D, 0x00, 0x02, 0x1F, 0xFF, 0xF0, 0x8D, 0x00, 0x02,
                0x03, 0xFF, 0x80, 0xC9, 0x00
            ],
            [0xFF, 0x00, 0xA3, 0x00, 0x00, 0x03, 0x8D, 0x00, 0x02, 0x40, 0x00, 0x07, 0x8C, 0x00, 0x03, 0x03, 0xFC, 0x00, 0x0F, 0x8C, 0x00, 0x05, 0x0F, 0xFE, 0x00, 0x1F, 0x00, 0x20, 0x8A, 0x00, 0x05, 0x1F, 0xFF, 0x80, 0x1F, 0x01, 0xE0, 0x8A, 0x00, 0x05, 0x7F, 0xFF, 0x80, 0x3F, 0x03, 0xE0, 0x8A, 0x00, 0x05, 0xFF, 0xFF, 0xC0, 0x3F, 0x07, 0xE0, 0x89, 0x00, 0x06, 0x01, 0xFF, 0xFF, 0xE0, 0x3F, 0x0F, 0xC0, 0x89, 0x00, 0x06, 0x0F, 0xFF, 0xFF, 0xE0, 0x3E, 0x1F, 0xC0, 0x89, 0x00, 0x06, 0x3F, 0xFF, 0xFF, 0xF0, 0x7E, 0x1F, 0xC0, 0x89, 0x00, 0x82, 0xFF, 0x03, 0xF8, 0x7E, 0x3F, 0x80, 0x88,
                0x00, 0x00, 0x03, 0x82, 0xFF, 0x03, 0xF8, 0x7E, 0x3F, 0x80, 0x88, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x03, 0xFC, 0x7E, 0x7F, 0x80, 0x88, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x02, 0xFC, 0x7E, 0x7F, 0x89, 0x00, 0x00, 0x7F, 0x82, 0xFF, 0x02, 0xFE, 0x7E, 0x7E, 0x89, 0x00, 0x84, 0xFF, 0x01, 0x3E, 0x7C, 0x88, 0x00, 0x00, 0x01, 0x84, 0xFF, 0x01, 0xFE, 0x78, 0x88, 0x00, 0x00, 0x03, 0x85, 0xFF, 0x00, 0xF0, 0x88, 0x00, 0x00, 0x07, 0x85, 0xFF, 0x00, 0xF0, 0x88, 0x00, 0x00, 0x0F, 0x85, 0xFF, 0x00, 0xF3, 0x88, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x00, 0xC0, 0x87, 0x00, 0x00, 0x3F, 0x86, 0xFF, 0x00, 0xE0, 0x84, 0x00, 0x03,
                0xF8, 0x00, 0x00, 0x7F, 0x86, 0xFF, 0x00, 0xE0, 0x83, 0x00, 0x03, 0x1F, 0xF8, 0x00, 0x00, 0x87, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x03, 0x3F, 0xC4, 0x00, 0x07, 0x87, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x03, 0x7F, 0x84, 0x00, 0x3F, 0x87, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x02, 0x7F, 0x24, 0x00, 0x88, 0xFF, 0x00, 0x80, 0x83, 0x00, 0x02, 0xFF, 0x3C, 0x01, 0x88, 0xFF, 0x00, 0x80, 0x83, 0x00, 0x02, 0xFE, 0x18, 0x07, 0x88, 0xFF, 0x07, 0x80, 0x00, 0x80, 0x00, 0x00, 0xF8, 0x00, 0x0F, 0x88, 0xFF, 0x07, 0x80, 0x01, 0x80, 0x00, 0x00, 0xE0, 0x00, 0x1F, 0x88, 0xFF, 0x07, 0x80, 0x03, 0xC0, 0x00, 0x00, 0xC0, 0x00, 0x3F,
                0x88, 0xFF, 0x07, 0x80, 0x07, 0xC0, 0x00, 0x01, 0x80, 0x00, 0x3F, 0x88, 0xFF, 0x07, 0x80, 0x07, 0xE0, 0x00, 0x01, 0x80, 0x00, 0x7F, 0x88, 0xFF, 0x06, 0x80, 0x07, 0xE0, 0x00, 0x01, 0x80, 0x01, 0x89, 0xFF, 0x06, 0x80, 0x07, 0xE0, 0x00, 0x01, 0x80, 0x0F, 0x89, 0xFF, 0x06, 0xC0, 0x0F, 0xE0, 0x00, 0x00, 0xC0, 0x3F, 0x89, 0xFF, 0x06, 0xE0, 0x0F, 0xF0, 0x00, 0x00, 0xC0, 0x7F, 0x89, 0xFF, 0x06, 0xF0, 0x0F, 0xF0, 0x00, 0x00, 0xC0, 0x7F, 0x89, 0xFF, 0x05, 0xF8, 0x0F, 0xF0, 0x00, 0x00, 0xE0, 0x8A, 0xFF, 0x06, 0xF0, 0x0F, 0xF0, 0x00, 0x00, 0xF9, 0xE3, 0x89, 0xFF, 0x06, 0xF0, 0x0F, 0xF0, 0x00, 0x00, 0x7F,
                0xC3, 0x89, 0xFF, 0x06, 0xF0, 0x1F, 0xF0, 0x00, 0x00, 0x3F, 0x87, 0x89, 0xFF, 0x06, 0xE0, 0x1F, 0xF0, 0x00, 0x00, 0x0F, 0x07, 0x89, 0xFF, 0x06, 0xE0, 0x1F, 0xF0, 0x00, 0x00, 0x03, 0x07, 0x89, 0xFF, 0x02, 0xC0, 0x1F, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x89, 0xFF, 0x02, 0xC4, 0x1F, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x89, 0xFF, 0x02, 0xEC, 0x3F, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x89, 0xFF, 0x02, 0xFC, 0x3F, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x89, 0xFF, 0x02, 0xFC, 0x7F, 0xE0, 0x82, 0x00, 0x00, 0x1F, 0x89, 0xFF, 0x02, 0xFC, 0x7F, 0xE0, 0x82, 0x00, 0x00, 0x1F, 0x89, 0xFF, 0x02, 0xFC, 0x7F, 0xE0, 0x82, 0x00, 0x00,
                0x1F, 0x8B, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xEC, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00,
                0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x00, 0x0F, 0x87, 0xFF, 0x00, 0x3F, 0x82, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x87, 0xFF, 0x00, 0x3F, 0x82, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x01, 0xFE, 0x1F, 0x82, 0xFF,
                0x00, 0xE0, 0x82, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x01, 0xFC, 0x1F, 0x82, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x01, 0xFC, 0x1F, 0x82, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x01, 0xF8, 0x0F, 0x82, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x01, 0xE0, 0x07, 0x82, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x01, 0xE0, 0x01, 0x82, 0xFF, 0x00, 0x80, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x05, 0xE0, 0x00, 0x7F, 0xFF, 0xFF, 0x80, 0x82, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x04, 0xE0, 0x00, 0x7F, 0xFF, 0xFF, 0x83, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x04, 0xF0,
                0x00, 0x3F, 0xFF, 0xFE, 0x83, 0x00, 0x00, 0x1F, 0x86, 0xFF, 0x04, 0xF0, 0x00, 0x3F, 0xFF, 0xFC, 0x83, 0x00, 0x00, 0x0F, 0x86, 0xFF, 0x04, 0xF0, 0x00, 0x3F, 0xFF, 0xFC, 0x83, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x04, 0xF0, 0x00, 0x1F, 0xFF, 0xF0, 0x83, 0x00, 0x00, 0x07, 0x86, 0xFF, 0x04, 0xF0, 0x00, 0x1F, 0xFF, 0xE0, 0x83, 0x00, 0x02, 0x07, 0xFF, 0xCF, 0x84, 0xFF, 0x04, 0xF0, 0x00, 0x0F, 0xFF, 0xC0, 0x83, 0x00, 0x02, 0x03, 0xFF, 0xCF, 0x84, 0xFF, 0x04, 0xF0, 0x00, 0x07, 0xFF, 0x80, 0x83, 0x00, 0x02, 0x03, 0xFF, 0xCF, 0x84, 0xFF, 0x03, 0xF0, 0x00, 0x03, 0xFE, 0x84, 0x00, 0x02, 0x03, 0xFF, 0xCF, 0x82,
                0xFF, 0x05, 0xF7, 0xFF, 0xF0, 0x00, 0x00, 0xFC, 0x84, 0x00, 0x02, 0x03, 0xFF, 0xCF, 0x82, 0xFF, 0x05, 0xF7, 0xFF, 0xF0, 0x00, 0x00, 0x38, 0x84, 0x00, 0x02, 0x03, 0xFF, 0xCF, 0x82, 0xFF, 0x02, 0xF3, 0xFF, 0xF0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xCF, 0xFF, 0x9F, 0xFF, 0xF1, 0xFF, 0xF0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xCF, 0xFF, 0x87, 0xFF, 0xF1, 0xFF, 0xF0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xCF, 0xFF, 0x87, 0xFF, 0xF0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xE7, 0xFF, 0x87, 0xFF, 0xE0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xC7, 0xFF, 0x87, 0xFF, 0xE0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF,
                0xC7, 0xFF, 0x87, 0xFF, 0xE0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xC7, 0xFF, 0x87, 0xFF, 0xE0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xC7, 0xFF, 0x87, 0xFF, 0xF0, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xE7, 0xFF, 0x83, 0xFF, 0xF1, 0xFF, 0xE0, 0x87, 0x00, 0x08, 0x03, 0xFF, 0xE7, 0xFF, 0xC3, 0xFF, 0xF1, 0xFF, 0xF0, 0x87, 0x00, 0x08, 0x07, 0xFF, 0xE7, 0xFF, 0xC3, 0xFF, 0xF9, 0xFF, 0xF8, 0x87, 0x00, 0x08, 0x07, 0xFF, 0xE7, 0xFF, 0xC3, 0xFF, 0xF9, 0xFF, 0xF8, 0x87, 0x00, 0x08, 0x07, 0xFF, 0xE7, 0xFF, 0xE3, 0xFF, 0xFD, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0x07, 0xFF, 0xF7, 0xFF, 0xE3, 0xFF,
                0xFD, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0x0F, 0xFF, 0xF7, 0xFF, 0xE7, 0xFF, 0xFD, 0xFF, 0xFE, 0x87, 0x00, 0x08, 0x0F, 0xFF, 0xF7, 0xFF, 0xF7, 0xFF, 0xFD, 0xFF, 0xFE, 0x87, 0x00, 0x08, 0x0F, 0xFF, 0xF3, 0xFF, 0xF7, 0xFF, 0xFD, 0xFF, 0xFE, 0x87, 0x00, 0x02, 0x0F, 0xFF, 0xF0, 0x82, 0xFF, 0x02, 0xFC, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0x0F, 0xFF, 0xF0, 0x0F, 0x07, 0xFF, 0xFC, 0xFF, 0xC0, 0x87, 0x00, 0x06, 0x0F, 0xF8, 0x80, 0x00, 0x07, 0xFF, 0xE0, 0x8D, 0x00, 0x01, 0x03, 0x1E, 0xFF, 0x00, 0xA1, 0x00
            ],
            [0x9D, 0x00, 0x00, 0x7F, 0x8E, 0x00, 0x02, 0x03, 0xFF, 0x80, 0x8D, 0x00, 0x02, 0xFF, 0xFF, 0x80, 0x8C, 0x00,
                0x03, 0x03, 0xFF, 0xFF, 0xD0, 0x8C, 0x00, 0x03, 0x07, 0xFF, 0xFF, 0xFC, 0x8C, 0x00, 0x04, 0x0F, 0xFF, 0xFF, 0xFE, 0x60, 0x8B, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x00, 0xF0, 0x8B, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x00, 0xF0, 0x8B, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x0F, 0x82, 0xFF, 0x00, 0xF8, 0x8B, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x00, 0xF0, 0x8B, 0x00, 0x00, 0x1F, 0x82, 0xFF, 0x00, 0xF0,
                0x8B, 0x00, 0x00, 0x3F, 0x82, 0xFF, 0x00, 0xF0, 0x8B, 0x00, 0x00, 0x7F, 0x82, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x01, 0x83, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x03, 0x83, 0xFF, 0x00, 0xFC, 0x8A, 0x00, 0x00, 0x07, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xFE, 0x84, 0x00, 0x06, 0xE0, 0x00, 0x00, 0x3F, 0xE0, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xFE, 0x83, 0x00, 0x07, 0x07, 0xFC, 0x00, 0x00, 0xFF, 0xFC, 0x00, 0x1F, 0x83, 0xFF, 0x00, 0xFE, 0x83, 0x00, 0x07, 0x1F, 0xFF, 0x00, 0x03,
                0xFF, 0xFF, 0x00, 0x3F, 0x83, 0xFF, 0x00, 0xFC, 0x83, 0x00, 0x07, 0x3F, 0xFF, 0x80, 0x07, 0xFF, 0xFF, 0xF0, 0x7F, 0x83, 0xFF, 0x00, 0xFC, 0x83, 0x00, 0x03, 0xFF, 0xFF, 0xE0, 0x0F, 0x87, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x04, 0x01, 0xFF, 0xFF, 0xF0, 0x1F, 0x87, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x04, 0x03, 0xFF, 0xFF, 0xF8, 0x3F, 0x87, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x04, 0x03, 0xFF, 0xFF, 0xFC, 0x7F, 0x87, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x03, 0x07, 0xFF, 0xFF, 0xFE, 0x88, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x02, 0x1F, 0xE0, 0x7F, 0x89, 0xFF, 0x00, 0xF8, 0x82,
                0x00, 0x02, 0x1F, 0xC0, 0x3F, 0x89, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x02, 0x3F, 0x80, 0x0F, 0x89, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x02, 0x3F, 0x00, 0x07, 0x89, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x02, 0x3F, 0x00, 0x03, 0x89, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x02, 0x7E, 0x00, 0x01, 0x89, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x02, 0x7C, 0x00, 0x00, 0x89, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x03, 0x7C, 0x00, 0x00, 0x7F, 0x88, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x03, 0xF8, 0x00, 0x00, 0x7F, 0x89, 0xFF, 0x82, 0x00, 0x03, 0xF8, 0x00, 0x00, 0x7F, 0x89, 0xFF, 0x82, 0x00, 0x03, 0xF8, 0x00, 0x00, 0x7F, 0x89, 0xFF, 0x82, 0x00, 0x03,
                0xF0, 0x00, 0x00, 0x7F, 0x89, 0xFF, 0x06, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x7F, 0x89, 0xFF, 0x05, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x8A, 0xFF, 0x05, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x8A, 0xFF, 0x05, 0x00, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x89, 0xFF, 0x06, 0xFE, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x89, 0xFF, 0x06, 0xFE, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x89, 0xFF, 0x06, 0xFE, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xFE, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xFE, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xFC, 0x00, 0x00, 0x01, 0xE0, 0x00,
                0x01, 0x89, 0xFF, 0x06, 0xFC, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xFC, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xF8, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xF0, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x06, 0xF0, 0x00, 0x00, 0x01, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x02, 0xE0, 0x00, 0x01, 0x89, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x02, 0xE0, 0x00, 0x03, 0x89, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x02, 0xF0, 0x00, 0x03, 0x89, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x02, 0x70, 0x00, 0x03, 0x89, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x02, 0x70, 0x00,
                0x03, 0x89, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x02, 0x70, 0x00, 0x03, 0x89, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x02, 0x70, 0x00, 0x07, 0x89, 0xFF, 0x00, 0x80, 0x82, 0x00, 0x02, 0x30, 0x00, 0x07, 0x89, 0xFF, 0x83, 0x00, 0x02, 0x30, 0x00, 0x07, 0x88, 0xFF, 0x00, 0xFE, 0x83, 0x00, 0x02, 0x38, 0x00, 0x0F, 0x88, 0xFF, 0x00, 0xFC, 0x83, 0x00, 0x02, 0x38, 0x00, 0x0F, 0x88, 0xFF, 0x00, 0xF0, 0x83, 0x00, 0x02, 0x38, 0x00, 0x0F, 0x88, 0xFF, 0x00, 0xE0, 0x83, 0x00, 0x04, 0x38, 0x00, 0x1F, 0xFF, 0xFC, 0x86, 0xFF, 0x00, 0xE0, 0x83, 0x00, 0x04, 0x38, 0x00, 0x1F, 0xFF, 0xFC, 0x86, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x06,
                0x38, 0x00, 0x3F, 0xFF, 0xF8, 0xFF, 0xFB, 0x84, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x06, 0x38, 0x00, 0x3F, 0xFF, 0xF8, 0xFF, 0xF9, 0x84, 0xFF, 0x00, 0xC0, 0x83, 0x00, 0x06, 0x38, 0x00, 0x7F, 0xFF, 0xF0, 0xFF, 0xF9, 0x84, 0xFF, 0x00, 0x80, 0x83, 0x00, 0x06, 0x78, 0x00, 0xFF, 0xFF, 0xF0, 0xFF, 0xF1, 0x84, 0xFF, 0x00, 0x80, 0x82, 0x00, 0x07, 0x01, 0xF8, 0x03, 0xFF, 0xFF, 0xE0, 0xFF, 0xF1, 0x84, 0xFF, 0x83, 0x00, 0x07, 0x03, 0xF8, 0x07, 0xFF, 0xFF, 0xC0, 0xFF, 0xF1, 0x83, 0xFF, 0x00, 0xFE, 0x83, 0x00, 0x07, 0x07, 0xF8, 0x0F, 0xFF, 0xFF, 0x80, 0xFF, 0xF1, 0x83, 0xFF, 0x00, 0xFC, 0x83, 0x00, 0x07, 0x07,
                0xF8, 0x0F, 0xFF, 0xFF, 0x00, 0xFF, 0xF1, 0x83, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x08, 0x20, 0x0F, 0xF8, 0x0F, 0xFF, 0xFE, 0x01, 0xFF, 0xE1, 0x83, 0xFF, 0x00, 0xFC, 0x83, 0x00, 0x07, 0x0F, 0xF0, 0x1F, 0xFF, 0xFC, 0x01, 0xFF, 0xE1, 0x83, 0xFF, 0x00, 0xF8, 0x83, 0x00, 0x07, 0x0F, 0xF0, 0x1F, 0xFF, 0xF8, 0x01, 0xFF, 0xE1, 0x83, 0xFF, 0x00, 0xF8, 0x83, 0x00, 0x07, 0x1F, 0xF0, 0x1F, 0xFF, 0xF0, 0x03, 0xFF, 0xC1, 0x83, 0xFF, 0x00, 0xF8, 0x83, 0x00, 0x07, 0x1F, 0xF0, 0x1F, 0xFF, 0xF0, 0x03, 0xFF, 0xC1, 0x83, 0xFF, 0x00, 0xF8, 0x83, 0x00, 0x07, 0x3F, 0xE0, 0x1F, 0xFF, 0xE0, 0x07, 0xFF, 0x81, 0x83, 0xFF,
                0x00, 0xF8, 0x82, 0x00, 0x0D, 0x20, 0x3F, 0xE0, 0x3F, 0xFF, 0xC0, 0x07, 0xFF, 0x81, 0xFF, 0xFF, 0xFC, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x20, 0x7F, 0xC0, 0x3F, 0xFF, 0xC0, 0x0F, 0xFF, 0x01, 0xFF, 0xFF, 0xF0, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x30, 0xFF, 0xC0, 0x3F, 0xFF, 0xC0, 0x0F, 0xFE, 0x00, 0xFF, 0xFF, 0xE0, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x19, 0xFF, 0x80, 0x3F, 0xFF, 0x80, 0x0F, 0xFE, 0x00, 0xFF, 0xFF, 0x80, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x1F, 0xFF, 0x00, 0x3F, 0xFF, 0x80, 0x0F, 0xFE, 0x00, 0xFF, 0xFF, 0x00, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x0F, 0xFE, 0x00, 0x3F, 0xFF, 0x80, 0x07, 0xFE, 0x00, 0xFF,
                0xFE, 0x00, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x07, 0xFC, 0x00, 0x3F, 0xFF, 0x00, 0x07, 0xFE, 0x00, 0xFF, 0xFE, 0x00, 0x7F, 0xF8, 0x82, 0x00, 0x0D, 0x01, 0xF0, 0x00, 0x7F, 0xFF, 0x00, 0x07, 0xFE, 0x00, 0xFF, 0xFE, 0x00, 0x7F, 0xF8, 0x85, 0x00, 0x0A, 0x7F, 0xFF, 0x00, 0x07, 0xFE, 0x00, 0xFF, 0xFE, 0x00, 0x3F, 0xF8, 0x85, 0x00, 0x0A, 0x7F, 0xFF, 0x00, 0x07, 0xFE, 0x00, 0xFF, 0xFE, 0x00, 0x3F, 0xF8, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFE, 0x00, 0x7F, 0xFF, 0x00, 0x3F, 0xF8, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFE, 0x00, 0x7F, 0xFF, 0x00, 0x3F, 0xFC, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00,
                0x07, 0xFE, 0x00, 0x7F, 0xFF, 0x00, 0x3F, 0xFC, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFE, 0x00, 0x7F, 0xFF, 0x00, 0x3F, 0xFC, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0x00, 0x7F, 0xFF, 0x80, 0x3F, 0xFE, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0x00, 0x3F, 0xFF, 0x80, 0x3F, 0xFE, 0x85, 0x00, 0x0A, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0x00, 0x3F, 0xFF, 0x80, 0x1F, 0xFF, 0x85, 0x00, 0x0B, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0x80, 0x3F, 0xFF, 0xC0, 0x1F, 0xFF, 0xC0, 0x84, 0x00, 0x0B, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xC0, 0x3F, 0xFF, 0xC0, 0x1F, 0xFF, 0xFE, 0x84, 0x00, 0x0B, 0x7F, 0xFE, 0x00,
                0x07, 0xFF, 0xFC, 0x3F, 0xFF, 0xE0, 0x1F, 0xFF, 0xFE, 0x84, 0x00, 0x0B, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0xFF, 0xE0, 0x1F, 0xFF, 0xFF, 0x84, 0x00, 0x0B, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0xFF, 0xE0, 0x1F, 0xFF, 0xFF, 0x84, 0x00, 0x0C, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0xFF, 0xF2, 0x1F, 0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0C, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0xFF, 0xFF, 0x0F, 0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0C, 0x7F, 0xFE, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0xFF, 0xFF, 0x8F, 0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0C, 0x7F, 0xFF, 0x00, 0x03, 0xFF, 0xFE, 0x3F, 0xFF, 0xFF, 0x8F,
                0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0C, 0x7F, 0xFF, 0xE0, 0x03, 0xFF, 0xFE, 0x3F, 0xFF, 0xFF, 0x8F, 0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0C, 0x7F, 0xFF, 0xF0, 0x03, 0xFF, 0xFC, 0x3F, 0xFF, 0xFF, 0x8F, 0xFF, 0xFF, 0x80, 0x83, 0x00, 0x0B, 0x7F, 0xFF, 0xF8, 0x03, 0xFF, 0xF0, 0x3F, 0xFF, 0xFF, 0xC7, 0xFF, 0xFF, 0x84, 0x00, 0x0B, 0x7F, 0xFF, 0xF8, 0x01, 0xFF, 0xE0, 0x3F, 0xFF, 0xFF, 0xC7, 0xFF, 0xFF, 0x84, 0x00, 0x0B, 0x7F, 0xFF, 0xF8, 0x00, 0xFE, 0x00, 0x3F, 0xFF, 0xFF, 0xC3, 0xFF, 0xFE, 0x84, 0x00, 0x0B, 0x7F, 0xFF, 0xF8, 0x00, 0x20, 0x00, 0x3F, 0xFF, 0xFF, 0xC3, 0xFF, 0xFC, 0x84, 0x00, 0x02, 0x7F, 0xFF,
                0xF8, 0x82, 0x00, 0x05, 0x3F, 0xFF, 0xFF, 0xC1, 0xFF, 0xF0, 0x84, 0x00, 0x02, 0x7F, 0xFF, 0xF0, 0x82, 0x00, 0x05, 0x1F, 0xFF, 0xFF, 0x80, 0xFF, 0x80, 0x84, 0x00, 0x02, 0x7F, 0xFF, 0xF0, 0x82, 0x00, 0x04, 0x1F, 0xFF, 0xFF, 0x80, 0x60, 0x85, 0x00, 0x02, 0x3F, 0xFF, 0xE0, 0x82, 0x00, 0x02, 0x1F, 0xFF, 0xFF, 0x87, 0x00, 0x02, 0x3F, 0xFF, 0xE0, 0x82, 0x00, 0x02, 0x0F, 0xFF, 0xFE, 0x87, 0x00, 0x01, 0x3F, 0xEF, 0x83, 0x00, 0x02, 0x0F, 0xFF, 0xF8, 0x87, 0x00, 0x01, 0x1F, 0x80, 0x83, 0x00, 0x02, 0x07, 0xFF, 0xF8, 0x8D, 0x00, 0x02, 0x07, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x03, 0xE7, 0x80, 0x8E, 0x00, 0x00,
                0xC0, 0x85, 0x00
            ],
            [0x96, 0x00, 0x02, 0x7F, 0xFF, 0xE0, 0x8C, 0x00, 0x03, 0x07, 0xFF, 0xFF, 0xFE, 0x8C, 0x00, 0x00, 0x3F, 0x82, 0xFF, 0x00, 0x80, 0x8B, 0x00, 0x83, 0xFF, 0x00, 0xE0, 0x8A, 0x00, 0x00, 0x03, 0x83, 0xFF, 0x00, 0xF8, 0x8A, 0x00, 0x00, 0x0F, 0x83, 0xFF, 0x00, 0xFE, 0x8A, 0x00, 0x00, 0x3F, 0x84, 0xFF, 0x00, 0x80, 0x89, 0x00, 0x00, 0x7F, 0x84, 0xFF, 0x00, 0xC0, 0x88, 0x00, 0x00, 0x01, 0x85, 0xFF, 0x00, 0xF0, 0x88, 0x00, 0x00, 0x03, 0x85, 0xFF, 0x00, 0xF8, 0x88, 0x00, 0x00, 0x0F, 0x85, 0xFF, 0x00, 0xFC, 0x88, 0x00, 0x00, 0x1F, 0x85, 0xFF, 0x00, 0xFE, 0x88, 0x00, 0x00, 0x3F, 0x86, 0xFF,
                0x88, 0x00, 0x00, 0x7F, 0x86, 0xFF, 0x00, 0x80, 0x87, 0x00, 0x87, 0xFF, 0x02, 0xC0, 0x00, 0xC0, 0x84, 0x00, 0x00, 0x01, 0x87, 0xFF, 0x02, 0xE0, 0x00, 0xC0, 0x84, 0x00, 0x00, 0x03, 0x87, 0xFF, 0x02, 0xF0, 0x00, 0xE0, 0x84, 0x00, 0x00, 0x07, 0x87, 0xFF, 0x02, 0xF8, 0x00, 0xF0, 0x84, 0x00, 0x00, 0x0F, 0x87, 0xFF, 0x02, 0xF8, 0x00, 0xF8, 0x84, 0x00, 0x00, 0x0F, 0x87, 0xFF, 0x02, 0xFC, 0x01, 0xF8, 0x84, 0x00, 0x00, 0x1F, 0x87, 0xFF, 0x02, 0xFE, 0x01, 0xFC, 0x84, 0x00, 0x00, 0x3F, 0x87, 0xFF, 0x02, 0xFE, 0x01, 0xFC, 0x84, 0x00, 0x00, 0x3F, 0x88, 0xFF, 0x01, 0x03, 0xFE, 0x84, 0x00, 0x00, 0x7F, 0x88,
                0xFF, 0x01, 0x03, 0xFF, 0x84, 0x00, 0x89, 0xFF, 0x01, 0x07, 0xFF, 0x84, 0x00, 0x89, 0xFF, 0x02, 0x87, 0xFF, 0x80, 0x82, 0x00, 0x00, 0x01, 0x89, 0xFF, 0x02, 0x8F, 0xFF, 0x80, 0x82, 0x00, 0x00, 0x01, 0x8B, 0xFF, 0x00, 0x80, 0x82, 0x00, 0x00, 0x03, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x03, 0x8B, 0xFF, 0x00, 0xC0, 0x82, 0x00, 0x00, 0x03, 0x8B, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x07, 0x8B, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x07, 0x8B, 0xFF, 0x00, 0xE0, 0x82, 0x00, 0x00, 0x07, 0x8B, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x00, 0x07, 0x8B, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00,
                0xF0, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x0F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x1F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x3F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x00, 0x7F, 0x8B, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x8C, 0xFF, 0x03, 0xF8, 0x00, 0x00, 0x01, 0x8C, 0xFF, 0x03, 0xF8, 0x00, 0x00, 0x03, 0x8C, 0xFF, 0x04, 0xF8, 0x00, 0x00, 0x07, 0x3F, 0x8B, 0xFF, 0x04, 0xF8, 0x00, 0x00, 0x0E, 0x3F, 0x8B, 0xFF, 0x04,
                0xF8, 0x00, 0x00, 0x1C, 0x7F, 0x8B, 0xFF, 0x04, 0xF8, 0x00, 0x00, 0x1C, 0x7F, 0x8B, 0xFF, 0x04, 0xF8, 0x00, 0x00, 0x38, 0x7F, 0x8B, 0xFF, 0x04, 0xF8, 0x00, 0x00, 0x30, 0x7F, 0x8B, 0xFF, 0x04, 0xF0, 0x00, 0x00, 0x30, 0x7F, 0x8B, 0xFF, 0x04, 0xF0, 0x00, 0x00, 0x60, 0x7F, 0x8B, 0xFF, 0x04, 0xF0, 0x00, 0x00, 0x60, 0x7F, 0x8B, 0xFF, 0x04, 0xF0, 0x00, 0x00, 0x40, 0x7F, 0x8B, 0xFF, 0x04, 0xE0, 0x00, 0x00, 0x40, 0x7F, 0x8B, 0xFF, 0x04, 0xE0, 0x00, 0x00, 0x40, 0x7F, 0x8B, 0xFF, 0x04, 0xC0, 0x00, 0x00, 0x40, 0x7F, 0x8B, 0xFF, 0x04, 0xC0, 0x00, 0x00, 0x40, 0x7F, 0x8B, 0xFF, 0x04, 0xC0, 0x00, 0x00, 0x40,
                0x7F, 0x8B, 0xFF, 0x04, 0x80, 0x00, 0x00, 0x60, 0x7F, 0x8B, 0xFF, 0x04, 0x80, 0x00, 0x00, 0x60, 0x7F, 0x8B, 0xFF, 0x82, 0x00, 0x01, 0x60, 0x7F, 0x8A, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x01, 0x60, 0x7F, 0x8A, 0xFF, 0x00, 0xFE, 0x82, 0x00, 0x01, 0x70, 0x7F, 0x8A, 0xFF, 0x00, 0xFC, 0x82, 0x00, 0x01, 0x70, 0x7F, 0x8A, 0xFF, 0x00, 0xF8, 0x82, 0x00, 0x01, 0x70, 0x3F, 0x8A, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x01, 0x70, 0x3F, 0x8A, 0xFF, 0x00, 0xF0, 0x82, 0x00, 0x01, 0x70, 0x3F, 0x8A, 0xFF, 0x05, 0xE0, 0x00, 0x7C, 0x00, 0x70, 0x3F, 0x8A, 0xFF, 0x05, 0xC0, 0x00, 0x7E, 0x00, 0x70, 0x3F, 0x8A, 0xFF, 0x05, 0x80,
                0x00, 0x7F, 0xF8, 0x30, 0x1F, 0x8A, 0xFF, 0x05, 0x00, 0x00, 0x7F, 0xFC, 0x30, 0x1F, 0x8A, 0xFF, 0x05, 0x00, 0x00, 0x7F, 0xFC, 0x30, 0x1F, 0x8A, 0xFF, 0x05, 0x00, 0x00, 0x7F, 0xFC, 0x30, 0x1F, 0x8A, 0xFF, 0x05, 0x80, 0x00, 0x1F, 0xFC, 0x30, 0x0F, 0x8A, 0xFF, 0x05, 0x80, 0x00, 0x1F, 0xF8, 0x20, 0x0F, 0x8A, 0xFF, 0x05, 0x80, 0x00, 0x3F, 0xC0, 0x00, 0x0F, 0x8A, 0xFF, 0x05, 0x80, 0x00, 0x3F, 0x00, 0x40, 0x0F, 0x8A, 0xFF, 0x05, 0xC0, 0x00, 0x3F, 0x00, 0x00, 0x0F, 0x8A, 0xFF, 0x05, 0xC0, 0x00, 0x7E, 0x00, 0x00, 0x07, 0x8A, 0xFF, 0x05, 0xE0, 0x00, 0x7E, 0x00, 0x00, 0x07, 0x85, 0xFF, 0x00, 0xF1, 0x83,
                0xFF, 0x07, 0xE0, 0x00, 0xFC, 0x00, 0x00, 0x07, 0xFF, 0xFE, 0x83, 0xFF, 0x0D, 0xE1, 0xFF, 0xFF, 0xCF, 0xFF, 0xF0, 0x01, 0xFC, 0x00, 0x00, 0x07, 0xFF, 0xFE, 0x3F, 0x82, 0xFF, 0x0D, 0xE1, 0xFF, 0xFF, 0xC7, 0xFF, 0xF8, 0x03, 0xF8, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x07, 0x82, 0xFF, 0x0D, 0xE1, 0xFF, 0xFF, 0xC7, 0xFF, 0xFE, 0x0F, 0xF0, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xE1, 0xFF, 0xFF, 0xC3, 0x82, 0xFF, 0x06, 0xF0, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xE1, 0xFF, 0xFF, 0xC3, 0x82, 0xFF, 0x06, 0xE0, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xE1, 0xFF,
                0xFF, 0xC1, 0x82, 0xFF, 0x06, 0xC0, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xE1, 0xFF, 0xFF, 0xC0, 0x82, 0xFF, 0x06, 0x80, 0x00, 0x00, 0x03, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x06, 0xE1, 0xFF, 0xFF, 0xC0, 0x3F, 0xFF, 0xFF, 0x82, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x06, 0xC1, 0xFF, 0xFF, 0xC0, 0x1F, 0xFF, 0xFE, 0x82, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x06, 0xC1, 0xFF, 0xFF, 0xC0, 0x07, 0xFF, 0xF0, 0x82, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xC1, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xC1, 0xFF, 0xFF,
                0x80, 0x85, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0xC1, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0x81, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x03, 0x01, 0xFF, 0xFE, 0x00, 0x82, 0xFF, 0x03, 0x81, 0xFF, 0xFF, 0x80, 0x85, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0x00, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFF, 0x86, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0x00, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFF, 0x86, 0x00, 0x03, 0x01, 0xFF, 0xFF, 0x00, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFF, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x00, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFE, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x00,
                0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFE, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x80, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFE, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x80, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFE, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x81, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFC, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x81, 0x82, 0xFF, 0x02, 0x81, 0xFF, 0xFC, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0x81, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xFC, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xC1, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xFC, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xC1, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xF8, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xC1, 0x82, 0xFF, 0x02, 0x83,
                0xFF, 0xF8, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xE1, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xF8, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xE1, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xF8, 0x87, 0x00, 0x02, 0xFF, 0xFF, 0xF0, 0x82, 0xFF, 0x02, 0x83, 0xFF, 0xF8, 0x87, 0x00, 0x08, 0xFF, 0xFF, 0xF0, 0x3F, 0xFF, 0xFF, 0x83, 0xFF, 0xF8, 0x87, 0x00, 0x08, 0xFF, 0xFF, 0xF0, 0x3E, 0xFF, 0xFF, 0xC3, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0xFF, 0xFF, 0xE0, 0x3E, 0xFF, 0xFF, 0xC7, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0xFF, 0xFF, 0xC0, 0x1C, 0xFF, 0xFF, 0xC7, 0xFF, 0xFC, 0x87, 0x00, 0x08, 0x7F, 0xFC, 0x00, 0x00, 0xFF, 0xFF, 0xCF, 0xFF, 0xFE, 0x87, 0x00,
                0x08, 0x3F, 0xF8, 0x00, 0x01, 0xFF, 0xFF, 0xCF, 0xFF, 0xFE, 0x87, 0x00, 0x08, 0x01, 0xF0, 0x00, 0x01, 0xFF, 0xFF, 0xE7, 0xFF, 0xFF, 0x8A, 0x00, 0x05, 0x01, 0xFF, 0xFF, 0xE3, 0xFF, 0xFE, 0x8A, 0x00, 0x05, 0x01, 0xFF, 0xFF, 0xC3, 0xFF, 0xFC, 0x8B, 0x00, 0x04, 0xFF, 0xFF, 0xC1, 0xDF, 0x80, 0x8B, 0x00, 0x03, 0xFF, 0xFF, 0xE0, 0x0F, 0x8C, 0x00, 0x02, 0x7F, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x7F, 0xFF, 0xE0, 0x8D, 0x00, 0x02, 0x1F, 0xFC, 0x80, 0x8D, 0x00, 0x01, 0x01, 0xF8, 0x8F, 0x00, 0x00, 0xE0, 0x88, 0x00
            ]
        ]
    }, {
        dg: "sp_toor",
        width: 150,
        height: 150,
        kg: !1,
        lg: 71,
        mg: 134,
        rg: 56,
        ng: 99,
        tg: 59,
        og: 136,
        pg: [6]
    }, {
        dg: "sp_bomb",
        width: 48,
        height: 48,
        kg: !1,
        lg: 24,
        mg: 24,
        rg: 1,
        ng: 47,
        tg: 1,
        og: 47,
        pg: [7]
    }, {
        dg: "sp_barg",
        width: 20,
        height: 17,
        kg: !1,
        ng: 19,
        og: 16,
        pg: [8, 9, 10, 11]
    }, {
        dg: "sp_cloud",
        width: 100,
        height: 57,
        kg: !1,
        ng: 99,
        og: 56,
        pg: [12]
    }, {
        dg: "sp_hp_b",
        width: 200,
        height: 29,
        kg: !1,
        ng: 199,
        og: 28,
        pg: [13]
    }, {
        dg: "sp_hp_f",
        width: 200,
        height: 29,
        kg: !1,
        ng: 199,
        og: 28,
        pg: [14]
    }, {
        dg: "sp_logo",
        width: 64,
        height: 64,
        kg: !1,
        lg: 64,
        mg: 64,
        ng: 63,
        og: 63,
        pg: [15]
    }, {
        dg: "spHUD_title",
        width: 500,
        height: 120,
        kg: !1,
        lg: 250,
        mg: 60,
        rg: 2,
        ng: 498,
        og: 119,
        pg: [16]
    }, {
        dg: "spHUD_btnBack",
        width: 93,
        height: 65,
        kg: !1,
        lg: 46,
        mg: 32,
        ng: 92,
        og: 64,
        pg: [17]
    }],
    ug: [{
        dg: "bck_l0",
        vg: !1,
        kg: !1,
        preload: !1,
        pg: 18
    }, {
        dg: "bck_lf",
        vg: !1,
        kg: !1,
        preload: !1,
        pg: 19
    }],
    wg: [{
        dg: "p_zar_01",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 288,
            bh: 640,
            ch: 100
        }, {
            ah: 416,
            bh: 416,
            ch: 100
        }, {
            ah: 608,
            bh: 416,
            ch: 100
        }, {
            ah: 768,
            bh: 912,
            ch: 100
        }]
    }, {
        dg: "p_zar_06",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 288,
            bh: 640,
            ch: 100
        }, {
            ah: 384,
            bh: 224,
            ch: 100
        }, {
            ah: 672,
            bh: 240,
            ch: 100
        }, {
            ah: 752,
            bh: 912,
            ch: 100
        }]
    }, {
        dg: "p_goor_01",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 288,
            bh: 672,
            ch: 100
        }, {
            ah: 512,
            bh: 480,
            ch: 100
        }, {
            ah: 848,
            bh: 864,
            ch: 100
        }]
    }, {
        dg: "p_goor_06",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 288,
            bh: 672,
            ch: 100
        }, {
            ah: 816,
            bh: 352,
            ch: 100
        }, {
            ah: 816,
            bh: 528,
            ch: 100
        }, {
            ah: 816,
            bh: 880,
            ch: 100
        }]
    }, {
        dg: "p_goor_07",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 288,
            bh: 672,
            ch: 100
        }, {
            ah: 880,
            bh: 400,
            ch: 100
        }, {
            ah: 848,
            bh: 512,
            ch: 100
        }, {
            ah: 640,
            bh: 528,
            ch: 100
        }, {
            ah: 656,
            bh: 912,
            ch: 100
        }]
    }, {
        dg: "p_shir_07",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 384,
            bh: 672,
            ch: 100
        }, {
            ah: 448,
            bh: 496,
            ch: 100
        }, {
            ah: 544,
            bh: 368,
            ch: 100
        }, {
            ah: 576,
            bh: 464,
            ch: 100
        }, {
            ah: 496,
            bh: 496,
            ch: 100
        }, {
            ah: 432,
            bh: 400,
            ch: 100
        }, {
            ah: 496,
            bh: 320,
            ch: 100
        }, {
            ah: 752,
            bh: 336,
            ch: 100
        }, {
            ah: 704,
            bh: 448,
            ch: 100
        }, {
            ah: 608,
            bh: 400,
            ch: 100
        }, {
            ah: 672,
            bh: 304,
            ch: 100
        }, {
            ah: 800,
            bh: 288,
            ch: 100
        }, {
            ah: 848,
            bh: 368,
            ch: 100
        }, {
            ah: 800,
            bh: 912,
            ch: 100
        }]
    }, {
        dg: "toor_01",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 512,
            bh: 688,
            ch: 100
        }, {
            ah: 512,
            bh: 192,
            ch: 100
        }, {
            ah: 560,
            bh: 144,
            ch: 100
        }, {
            ah: 640,
            bh: 144,
            ch: 100
        }, {
            ah: 720,
            bh: 192,
            ch: 100
        }, {
            ah: 816,
            bh: 432,
            ch: 100
        }, {
            ah: 912,
            bh: 880,
            ch: 100
        }]
    }, {
        dg: "toor_02",
        eg: 1,
        xg: !1,
        yg: 4,
        zg: [{
            ah: 512,
            bh: 688,
            ch: 100
        }, {
            ah: 512,
            bh: 192,
            ch: 100
        }, {
            ah: 464,
            bh: 144,
            ch: 100
        }, {
            ah: 384,
            bh: 144,
            ch: 100
        }, {
            ah: 304,
            bh: 192,
            ch: 100
        }, {
            ah: 208,
            bh: 432,
            ch: 100
        }, {
            ah: 112,
            bh: 880,
            ch: 100
        }]
    }],
    dh: [eh, fh, gh, hh, ih, jh, kh],
    lh: [{
        dg: "f_en_log",
        mh: 4,
        bold: !1,
        nh: !1,
        oh: 48,
        ph: 57,
        qh: 0,
        rh: 4,
        sh: "Arial",
        th: 20,
        uh: 1,
        vh: 1,
        wh: [{
            xh: 32,
            yh: " ",
            ah: 22,
            bh: 168,
            zh: 8,
            ai: 35,
            shift: 8,
            bi: 0
        }, {
            xh: 33,
            yh: "!",
            ah: 212,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 9,
            bi: 3
        }, {
            xh: 34,
            yh: "\"",
            ah: 177,
            bh: 168,
            zh: 8,
            ai: 14,
            shift: 11,
            bi: 1
        }, {
            xh: 35,
            yh: "#",
            ah: 185,
            bh: 72,
            zh: 16,
            ai: 28,
            shift: 17,
            bi: 0
        }, {
            xh: 36,
            yh: "$",
            ah: 221,
            bh: 72,
            zh: 14,
            ai: 31,
            shift: 17,
            bi: 1
        }, {
            xh: 37,
            yh: "%",
            ah: 61,
            bh: 0,
            zh: 23,
            ai: 28,
            shift: 27,
            bi: 2
        }, {
            xh: 38,
            yh: "&",
            ah: 206,
            bh: 36,
            zh: 18,
            ai: 28,
            shift: 20,
            bi: 1
        }, {
            xh: 39,
            yh: "'",
            ah: 238,
            bh: 168,
            zh: 3,
            ai: 14,
            shift: 6,
            bi: 1
        }, {
            xh: 40,
            yh: "(",
            ah: 54,
            bh: 168,
            zh: 8,
            ai: 34,
            shift: 10,
            bi: 2
        }, {
            xh: 41,
            yh: ")",
            ah: 44,
            bh: 168,
            zh: 8,
            ai: 34,
            shift: 10,
            bi: 0
        }, {
            xh: 42,
            yh: "*",
            ah: 165,
            bh: 168,
            zh: 10,
            ai: 15,
            shift: 12,
            bi: 1
        }, {
            xh: 43,
            yh: "+",
            ah: 64,
            bh: 138,
            zh: 15,
            ai: 25,
            shift: 18,
            bi: 1
        }, {
            xh: 44,
            yh: ",",
            ah: 187,
            bh: 168,
            zh: 3,
            ai: 32,
            shift: 8,
            bi: 3
        }, {
            xh: 45,
            yh: "-",
            ah: 155,
            bh: 168,
            zh: 8,
            ai: 22,
            shift: 10,
            bi: 1
        }, {
            xh: 46,
            yh: ".",
            ah: 207,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 8,
            bi: 3
        }, {
            xh: 47,
            yh: "/",
            ah: 64,
            bh: 168,
            zh: 9,
            ai: 28,
            shift: 8,
            bi: 0
        }, {
            xh: 48,
            yh: "0",
            ah: 24,
            bh: 0,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 49,
            yh: "1",
            ah: 22,
            bh: 8,
            zh: 2,
            ai: 6,
            shift: 4,
            bi: 1
        }, {
            xh: 50,
            yh: "2",
            ah: 6,
            bh: 8,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 51,
            yh: "3",
            ah: 18,
            bh: 0,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 52,
            yh: "4",
            ah: 17,
            bh: 8,
            zh: 3,
            ai: 6,
            shift: 4,
            bi: 1
        }, {
            xh: 53,
            yh: "5",
            ah: 6,
            bh: 0,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 54,
            yh: "6",
            ah: 12,
            bh: 0,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 55,
            yh: "7",
            ah: 12,
            bh: 8,
            zh: 3,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 56,
            yh: "8",
            ah: 0,
            bh: 0,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 57,
            yh: "9",
            ah: 0,
            bh: 8,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 58,
            yh: ":",
            ah: 202,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 8,
            bi: 3
        }, {
            xh: 59,
            yh: ";",
            ah: 192,
            bh: 168,
            zh: 3,
            ai: 32,
            shift: 8,
            bi: 3
        }, {
            xh: 60,
            yh: "<",
            ah: 171,
            bh: 138,
            zh: 14,
            ai: 25,
            shift: 18,
            bi: 2
        }, {
            xh: 61,
            yh: "=",
            ah: 235,
            bh: 138,
            zh: 15,
            ai: 22,
            shift: 18,
            bi: 1
        }, {
            xh: 62,
            yh: ">",
            ah: 187,
            bh: 138,
            zh: 14,
            ai: 25,
            shift: 18,
            bi: 2
        }, {
            xh: 63,
            yh: "?",
            ah: 237,
            bh: 72,
            zh: 15,
            ai: 28,
            shift: 17,
            bi: 1
        }, {
            xh: 64,
            yh: "@",
            ah: 0,
            bh: 0,
            zh: 28,
            ai: 34,
            shift: 30,
            bi: 2
        }, {
            xh: 65,
            yh: "A",
            ah: 177,
            bh: 0,
            zh: 21,
            ai: 28,
            shift: 20,
            bi: -1
        }, {
            xh: 66,
            yh: "B",
            ah: 78,
            bh: 72,
            zh: 17,
            ai: 28,
            shift: 20,
            bi: 2
        }, {
            xh: 67,
            yh: "C",
            ah: 23,
            bh: 36,
            zh: 20,
            ai: 28,
            shift: 22,
            bi: 1
        }, {
            xh: 68,
            yh: "D",
            ah: 89,
            bh: 36,
            zh: 19,
            ai: 28,
            shift: 22,
            bi: 2
        }, {
            xh: 69,
            yh: "E",
            ah: 167,
            bh: 72,
            zh: 16,
            ai: 28,
            shift: 20,
            bi: 2
        }, {
            xh: 70,
            yh: "F",
            ah: 136,
            bh: 108,
            zh: 15,
            ai: 28,
            shift: 18,
            bi: 2
        }, {
            xh: 71,
            yh: "G",
            ah: 67,
            bh: 36,
            zh: 20,
            ai: 28,
            shift: 23,
            bi: 1
        }, {
            xh: 72,
            yh: "H",
            ah: 186,
            bh: 36,
            zh: 18,
            ai: 28,
            shift: 22,
            bi: 2
        }, {
            xh: 73,
            yh: "I",
            ah: 197,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 7,
            bi: 2
        }, {
            xh: 74,
            yh: "J",
            ah: 221,
            bh: 138,
            zh: 12,
            ai: 28,
            shift: 15,
            bi: 1
        }, {
            xh: 75,
            yh: "K",
            ah: 0,
            bh: 72,
            zh: 18,
            ai: 28,
            shift: 20,
            bi: 2
        }, {
            xh: 76,
            yh: "L",
            ah: 0,
            bh: 138,
            zh: 14,
            ai: 28,
            shift: 17,
            bi: 2
        }, {
            xh: 77,
            yh: "M",
            ah: 154,
            bh: 0,
            zh: 21,
            ai: 28,
            shift: 25,
            bi: 2
        }, {
            xh: 78,
            yh: "N",
            ah: 20,
            bh: 72,
            zh: 18,
            ai: 28,
            shift: 22,
            bi: 2
        }, {
            xh: 79,
            yh: "O",
            ah: 0,
            bh: 36,
            zh: 21,
            ai: 28,
            shift: 23,
            bi: 1
        }, {
            xh: 80,
            yh: "P",
            ah: 59,
            bh: 72,
            zh: 17,
            ai: 28,
            shift: 20,
            bi: 2
        }, {
            xh: 81,
            yh: "Q",
            ah: 111,
            bh: 0,
            zh: 21,
            ai: 30,
            shift: 23,
            bi: 1
        }, {
            xh: 82,
            yh: "R",
            ah: 45,
            bh: 36,
            zh: 20,
            ai: 28,
            shift: 22,
            bi: 2
        }, {
            xh: 83,
            yh: "S",
            ah: 40,
            bh: 72,
            zh: 17,
            ai: 28,
            shift: 20,
            bi: 1
        }, {
            xh: 84,
            yh: "T",
            ah: 97,
            bh: 72,
            zh: 17,
            ai: 28,
            shift: 19,
            bi: 1
        }, {
            xh: 85,
            yh: "U",
            ah: 226,
            bh: 36,
            zh: 18,
            ai: 28,
            shift: 22,
            bi: 2
        }, {
            xh: 86,
            yh: "V",
            ah: 223,
            bh: 0,
            zh: 21,
            ai: 28,
            shift: 20,
            bi: -1
        }, {
            xh: 87,
            yh: "W",
            ah: 30,
            bh: 0,
            zh: 29,
            ai: 28,
            shift: 30,
            bi: 0
        }, {
            xh: 88,
            yh: "X",
            ah: 131,
            bh: 36,
            zh: 19,
            ai: 28,
            shift: 19,
            bi: 0
        }, {
            xh: 89,
            yh: "Y",
            ah: 110,
            bh: 36,
            zh: 19,
            ai: 28,
            shift: 19,
            bi: 0
        }, {
            xh: 90,
            yh: "Z",
            ah: 148,
            bh: 72,
            zh: 17,
            ai: 28,
            shift: 18,
            bi: 0
        }, {
            xh: 91,
            yh: "[",
            ah: 147,
            bh: 168,
            zh: 6,
            ai: 34,
            shift: 8,
            bi: 2
        }, {
            xh: 92,
            yh: "\\",
            ah: 75,
            bh: 168,
            zh: 9,
            ai: 28,
            shift: 8,
            bi: 0
        }, {
            xh: 93,
            yh: "]",
            ah: 139,
            bh: 168,
            zh: 6,
            ai: 34,
            shift: 8,
            bi: 0
        }, {
            xh: 94,
            yh: "^",
            ah: 125,
            bh: 168,
            zh: 12,
            ai: 18,
            shift: 14,
            bi: 1
        }, {
            xh: 95,
            yh: "_",
            ah: 134,
            bh: 0,
            zh: 18,
            ai: 34,
            shift: 18,
            bi: -1
        }, {
            xh: 96,
            yh: "`",
            ah: 231,
            bh: 168,
            zh: 5,
            ai: 10,
            shift: 10,
            bi: 1
        }, {
            xh: 97,
            yh: "a",
            ah: 169,
            bh: 108,
            zh: 14,
            ai: 28,
            shift: 16,
            bi: 1
        }, {
            xh: 98,
            yh: "b",
            ah: 153,
            bh: 108,
            zh: 14,
            ai: 28,
            shift: 17,
            bi: 2
        }, {
            xh: 99,
            yh: "c",
            ah: 96,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 15,
            bi: 1
        }, {
            xh: 100,
            yh: "d",
            ah: 48,
            bh: 138,
            zh: 14,
            ai: 28,
            shift: 17,
            bi: 1
        }, {
            xh: 101,
            yh: "e",
            ah: 201,
            bh: 108,
            zh: 14,
            ai: 28,
            shift: 16,
            bi: 1
        }, {
            xh: 102,
            yh: "f",
            ah: 32,
            bh: 168,
            zh: 10,
            ai: 28,
            shift: 8,
            bi: 0
        }, {
            xh: 103,
            yh: "g",
            ah: 169,
            bh: 36,
            zh: 15,
            ai: 34,
            shift: 17,
            bi: 0
        }, {
            xh: 104,
            yh: "h",
            ah: 156,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 17,
            bi: 2
        }, {
            xh: 105,
            yh: "i",
            ah: 217,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 7,
            bi: 2
        }, {
            xh: 106,
            yh: "j",
            ah: 86,
            bh: 168,
            zh: 7,
            ai: 34,
            shift: 9,
            bi: -2
        }, {
            xh: 107,
            yh: "k",
            ah: 141,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 15,
            bi: 2
        }, {
            xh: 108,
            yh: "l",
            ah: 222,
            bh: 168,
            zh: 3,
            ai: 28,
            shift: 7,
            bi: 2
        }, {
            xh: 109,
            yh: "m",
            ah: 200,
            bh: 0,
            zh: 21,
            ai: 28,
            shift: 25,
            bi: 2
        }, {
            xh: 110,
            yh: "n",
            ah: 126,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 17,
            bi: 2
        }, {
            xh: 111,
            yh: "o",
            ah: 233,
            bh: 108,
            zh: 14,
            ai: 28,
            shift: 16,
            bi: 1
        }, {
            xh: 112,
            yh: "p",
            ah: 116,
            bh: 72,
            zh: 14,
            ai: 34,
            shift: 17,
            bi: 2
        }, {
            xh: 113,
            yh: "q",
            ah: 132,
            bh: 72,
            zh: 14,
            ai: 34,
            shift: 17,
            bi: 1
        }, {
            xh: 114,
            yh: "r",
            ah: 105,
            bh: 168,
            zh: 8,
            ai: 28,
            shift: 10,
            bi: 2
        }, {
            xh: 115,
            yh: "s",
            ah: 81,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 15,
            bi: 1
        }, {
            xh: 116,
            yh: "t",
            ah: 95,
            bh: 168,
            zh: 8,
            ai: 28,
            shift: 8,
            bi: 0
        }, {
            xh: 117,
            yh: "u",
            ah: 111,
            bh: 138,
            zh: 13,
            ai: 28,
            shift: 17,
            bi: 2
        }, {
            xh: 118,
            yh: "v",
            ah: 51,
            bh: 108,
            zh: 15,
            ai: 28,
            shift: 15,
            bi: 0
        }, {
            xh: 119,
            yh: "w",
            ah: 86,
            bh: 0,
            zh: 23,
            ai: 28,
            shift: 22,
            bi: -1
        }, {
            xh: 120,
            yh: "x",
            ah: 185,
            bh: 108,
            zh: 14,
            ai: 28,
            shift: 14,
            bi: 0
        }, {
            xh: 121,
            yh: "y",
            ah: 152,
            bh: 36,
            zh: 15,
            ai: 34,
            shift: 15,
            bi: 0
        }, {
            xh: 122,
            yh: "z",
            ah: 16,
            bh: 138,
            zh: 14,
            ai: 28,
            shift: 15,
            bi: 0
        }, {
            xh: 123,
            yh: "{",
            ah: 11,
            bh: 168,
            zh: 9,
            ai: 34,
            shift: 10,
            bi: 1
        }, {
            xh: 124,
            yh: "|",
            ah: 227,
            bh: 168,
            zh: 2,
            ai: 34,
            shift: 8,
            bi: 3
        }, {
            xh: 125,
            yh: "}",
            ah: 0,
            bh: 168,
            zh: 9,
            ai: 34,
            shift: 10,
            bi: 0
        }, {
            xh: 126,
            yh: "~",
            ah: 203,
            bh: 138,
            zh: 16,
            ai: 21,
            shift: 18,
            bi: 1
        }, {
            xh: 127,
            ah: 203,
            bh: 72,
            zh: 16,
            ai: 28,
            shift: 23,
            bi: 3
        }, ],
    }, {
        dg: "f_fa_GUI",
        mh: 4,
        bold: !1,
        nh: !1,
        oh: 48,
        ph: 57,
        qh: 0,
        rh: 4,
        sh: "Times New Roman",
        th: 21,
        uh: 1,
        vh: 1,
        wh: [{
            xh: 0,
            ah: 390,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 1,
            ah: 455,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 2,
            ah: 520,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 3,
            ah: 325,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 4,
            ah: 130,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 5,
            ah: 195,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 6,
            ah: 260,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 7,
            ah: 845,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 8,
            ah: 910,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 9,
            ah: 0,
            bh: 317,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 10,
            ah: 780,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 11,
            ah: 585,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 12,
            ah: 650,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 13,
            ah: 715,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 14,
            ah: 65,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 15,
            ah: 390,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 16,
            ah: 455,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 17,
            ah: 520,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 18,
            ah: 325,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 19,
            ah: 130,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 20,
            ah: 195,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 21,
            ah: 260,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 22,
            ah: 845,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 23,
            ah: 910,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 24,
            ah: 0,
            bh: 243,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 25,
            ah: 780,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 26,
            ah: 585,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 27,
            ah: 650,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 28,
            ah: 715,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 29,
            ah: 195,
            bh: 317,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 30,
            ah: 130,
            bh: 317,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 31,
            ah: 65,
            bh: 317,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 32,
            yh: " ",
            ah: 42,
            bh: 880,
            zh: 13,
            ai: 101,
            shift: 13,
            bi: 0
        }, {
            xh: 33,
            yh: "!",
            ah: 135,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 21,
            bi: 5
        }, {
            xh: 34,
            yh: "\"",
            ah: 359,
            bh: 880,
            zh: 15,
            ai: 33,
            shift: 21,
            bi: 6
        }, {
            xh: 36,
            yh: "$",
            ah: 865,
            bh: 0,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 37,
            yh: "%",
            ah: 134,
            bh: 596,
            zh: 39,
            ai: 78,
            shift: 44,
            bi: 3
        }, {
            xh: 38,
            yh: "&",
            ah: 800,
            bh: 0,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 39,
            yh: "'",
            ah: 930,
            bh: 0,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 40,
            yh: "(",
            ah: 424,
            bh: 778,
            zh: 21,
            ai: 87,
            shift: 27,
            bi: 6
        }, {
            xh: 41,
            yh: ")",
            ah: 575,
            bh: 778,
            zh: 20,
            ai: 87,
            shift: 27,
            bi: 6
        }, {
            xh: 42,
            yh: "*",
            ah: 929,
            bh: 596,
            zh: 38,
            ai: 73,
            shift: 44,
            bi: 3
        }, {
            xh: 43,
            yh: "+",
            ah: 0,
            bh: 596,
            zh: 42,
            ai: 74,
            shift: 48,
            bi: 3
        }, {
            xh: 44,
            yh: ",",
            ah: 243,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 21,
            bi: 5
        }, {
            xh: 45,
            yh: "-",
            ah: 841,
            bh: 687,
            zh: 37,
            ai: 59,
            shift: 43,
            bi: 3
        }, {
            xh: 46,
            yh: ".",
            ah: 189,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 21,
            bi: 5
        }, {
            xh: 47,
            yh: "/",
            ah: 62,
            bh: 778,
            zh: 27,
            ai: 78,
            shift: 33,
            bi: 3
        }, {
            xh: 48,
            yh: "0",
            ah: 18,
            bh: 0,
            zh: 4,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 49,
            yh: "1",
            ah: 22,
            bh: 9,
            zh: 3,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 50,
            yh: "2",
            ah: 6,
            bh: 9,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 51,
            yh: "3",
            ah: 12,
            bh: 9,
            zh: 3,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 52,
            yh: "4",
            ah: 0,
            bh: 9,
            zh: 4,
            ai: 6,
            shift: 4,
            bi: 0
        }, {
            xh: 53,
            yh: "5",
            ah: 17,
            bh: 9,
            zh: 3,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 54,
            yh: "6",
            ah: 6,
            bh: 0,
            zh: 4,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 55,
            yh: "7",
            ah: 0,
            bh: 0,
            zh: 4,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 56,
            yh: "8",
            ah: 12,
            bh: 0,
            zh: 4,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 57,
            yh: "9",
            ah: 24,
            bh: 0,
            zh: 4,
            ai: 7,
            shift: 4,
            bi: 0
        }, {
            xh: 58,
            yh: ":",
            ah: 225,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 21,
            bi: 5
        }, {
            xh: 59,
            yh: ";",
            ah: 171,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 21,
            bi: 5
        }, {
            xh: 60,
            yh: "<",
            ah: 723,
            bh: 778,
            zh: 23,
            ai: 72,
            shift: 27,
            bi: 5
        }, {
            xh: 61,
            yh: "=",
            ah: 605,
            bh: 687,
            zh: 37,
            ai: 63,
            shift: 43,
            bi: 3
        }, {
            xh: 62,
            yh: ">",
            ah: 648,
            bh: 778,
            zh: 23,
            ai: 72,
            shift: 27,
            bi: 5
        }, {
            xh: 63,
            yh: "?",
            ah: 858,
            bh: 778,
            zh: 21,
            ai: 72,
            shift: 27,
            bi: 6
        }, {
            xh: 64,
            yh: "@",
            ah: 153,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 15,
            bi: -2
        }, {
            xh: 65,
            yh: "A",
            ah: 808,
            bh: 687,
            zh: 31,
            ai: 72,
            shift: 32,
            bi: 2
        }, {
            xh: 66,
            yh: "B",
            ah: 678,
            bh: 687,
            zh: 32,
            ai: 72,
            shift: 24,
            bi: -4
        }, {
            xh: 67,
            yh: "C",
            ah: 261,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 17,
            bi: 2
        }, {
            xh: 68,
            yh: "D",
            ah: 991,
            bh: 778,
            zh: 19,
            ai: 72,
            shift: 20,
            bi: 2
        }, {
            xh: 69,
            yh: "E",
            ah: 769,
            bh: 778,
            zh: 22,
            ai: 73,
            shift: 26,
            bi: 4
        }, {
            xh: 70,
            yh: "F",
            ah: 904,
            bh: 778,
            zh: 21,
            ai: 72,
            shift: 20,
            bi: -1
        }, {
            xh: 71,
            yh: "G",
            ah: 116,
            bh: 880,
            zh: 17,
            ai: 72,
            shift: 16,
            bi: -1
        }, {
            xh: 72,
            yh: "H",
            ah: 305,
            bh: 880,
            zh: 14,
            ai: 72,
            shift: 17,
            bi: 4
        }, {
            xh: 73,
            yh: "I",
            ah: 57,
            bh: 880,
            zh: 18,
            ai: 72,
            shift: 20,
            bi: 4
        }, {
            xh: 74,
            yh: "J",
            ah: 699,
            bh: 317,
            zh: 45,
            ai: 88,
            shift: 50,
            bi: 4
        }, {
            xh: 75,
            yh: "K",
            ah: 260,
            bh: 317,
            zh: 51,
            ai: 88,
            shift: 54,
            bi: 4
        }, {
            xh: 76,
            yh: "L",
            ah: 356,
            bh: 778,
            zh: 21,
            ai: 88,
            shift: 20,
            bi: -1
        }, {
            xh: 77,
            yh: "M",
            ah: 973,
            bh: 778,
            zh: 16,
            ai: 88,
            shift: 16,
            bi: -1
        }, {
            xh: 78,
            yh: "N",
            ah: 489,
            bh: 317,
            zh: 45,
            ai: 93,
            shift: 50,
            bi: 4
        }, {
            xh: 79,
            yh: "O",
            ah: 681,
            bh: 0,
            zh: 52,
            ai: 93,
            shift: 54,
            bi: 4
        }, {
            xh: 80,
            yh: "P",
            ah: 153,
            bh: 778,
            zh: 22,
            ai: 92,
            shift: 20,
            bi: -1
        }, {
            xh: 81,
            yh: "Q",
            ah: 379,
            bh: 778,
            zh: 20,
            ai: 92,
            shift: 16,
            bi: -1
        }, {
            xh: 82,
            yh: "R",
            ah: 638,
            bh: 506,
            zh: 45,
            ai: 73,
            shift: 50,
            bi: 4
        }, {
            xh: 83,
            yh: "S",
            ah: 793,
            bh: 317,
            zh: 52,
            ai: 74,
            shift: 54,
            bi: 4
        }, {
            xh: 84,
            yh: "T",
            ah: 835,
            bh: 778,
            zh: 21,
            ai: 72,
            shift: 20,
            bi: -1
        }, {
            xh: 85,
            yh: "U",
            ah: 77,
            bh: 880,
            zh: 18,
            ai: 72,
            shift: 16,
            bi: -1
        }, {
            xh: 86,
            yh: "V",
            ah: 685,
            bh: 506,
            zh: 45,
            ai: 73,
            shift: 50,
            bi: 4
        }, {
            xh: 87,
            yh: "W",
            ah: 45,
            bh: 412,
            zh: 51,
            ai: 74,
            shift: 54,
            bi: 4
        }, {
            xh: 88,
            yh: "X",
            ah: 793,
            bh: 778,
            zh: 22,
            ai: 72,
            shift: 20,
            bi: -1
        }, {
            xh: 89,
            yh: "Y",
            ah: 21,
            bh: 880,
            zh: 19,
            ai: 72,
            shift: 16,
            bi: -1
        }, {
            xh: 90,
            yh: "Z",
            ah: 82,
            bh: 506,
            zh: 39,
            ai: 88,
            shift: 42,
            bi: 4
        }, {
            xh: 91,
            yh: "[",
            ah: 439,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 4
        }, {
            xh: 92,
            yh: "\\",
            ah: 955,
            bh: 317,
            zh: 43,
            ai: 88,
            shift: 42,
            bi: -1
        }, {
            xh: 93,
            yh: "]",
            ah: 396,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 41,
            bi: -1
        }, {
            xh: 94,
            yh: "^",
            ah: 41,
            bh: 506,
            zh: 39,
            ai: 88,
            shift: 42,
            bi: 4
        }, {
            xh: 95,
            yh: "_",
            ah: 353,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 6
        }, {
            xh: 96,
            yh: "`",
            ah: 653,
            bh: 317,
            zh: 44,
            ai: 92,
            shift: 42,
            bi: -1
        }, {
            xh: 97,
            yh: "a",
            ah: 98,
            bh: 412,
            zh: 41,
            ai: 92,
            shift: 41,
            bi: -1
        }, {
            xh: 98,
            yh: "b",
            ah: 123,
            bh: 506,
            zh: 39,
            ai: 88,
            shift: 42,
            bi: 4
        }, {
            xh: 99,
            yh: "c",
            ah: 568,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 4
        }, {
            xh: 100,
            yh: "d",
            ah: 89,
            bh: 596,
            zh: 43,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 101,
            yh: "e",
            ah: 564,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 102,
            yh: "f",
            ah: 262,
            bh: 506,
            zh: 38,
            ai: 88,
            shift: 42,
            bi: 4
        }, {
            xh: 103,
            yh: "g",
            ah: 525,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 4
        }, {
            xh: 104,
            yh: "h",
            ah: 44,
            bh: 596,
            zh: 43,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 105,
            yh: "i",
            ah: 736,
            bh: 596,
            zh: 40,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 106,
            yh: "j",
            ah: 177,
            bh: 778,
            zh: 28,
            ai: 72,
            shift: 32,
            bi: 4
        }, {
            xh: 107,
            yh: "k",
            ah: 203,
            bh: 687,
            zh: 36,
            ai: 73,
            shift: 39,
            bi: 4
        }, {
            xh: 108,
            yh: "l",
            ah: 297,
            bh: 778,
            zh: 28,
            ai: 72,
            shift: 32,
            bi: 4
        }, {
            xh: 109,
            yh: "m",
            ah: 165,
            bh: 687,
            zh: 36,
            ai: 73,
            shift: 39,
            bi: 4
        }, {
            xh: 110,
            yh: "n",
            ah: 576,
            bh: 687,
            zh: 27,
            ai: 88,
            shift: 29,
            bi: 3
        }, {
            xh: 111,
            yh: "o",
            ah: 101,
            bh: 687,
            zh: 30,
            ai: 88,
            shift: 32,
            bi: 3
        }, {
            xh: 112,
            yh: "p",
            ah: 489,
            bh: 687,
            zh: 27,
            ai: 88,
            shift: 29,
            bi: 3
        }, {
            xh: 113,
            yh: "q",
            ah: 69,
            bh: 687,
            zh: 30,
            ai: 88,
            shift: 32,
            bi: 3
        }, {
            xh: 114,
            yh: "r",
            ah: 547,
            bh: 687,
            zh: 27,
            ai: 88,
            shift: 29,
            bi: 3
        }, {
            xh: 115,
            yh: "s",
            ah: 133,
            bh: 687,
            zh: 30,
            ai: 88,
            shift: 32,
            bi: 3
        }, {
            xh: 116,
            yh: "t",
            ah: 553,
            bh: 0,
            zh: 62,
            ai: 88,
            shift: 65,
            bi: 4
        }, {
            xh: 117,
            yh: "u",
            ah: 485,
            bh: 0,
            zh: 66,
            ai: 88,
            shift: 68,
            bi: 4
        }, {
            xh: 118,
            yh: "v",
            ah: 478,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 39,
            bi: -1
        }, {
            xh: 119,
            yh: "w",
            ah: 383,
            bh: 687,
            zh: 35,
            ai: 72,
            shift: 35,
            bi: -1
        }, {
            xh: 120,
            yh: "x",
            ah: 617,
            bh: 0,
            zh: 62,
            ai: 88,
            shift: 65,
            bi: 4
        }, {
            xh: 121,
            yh: "y",
            ah: 281,
            bh: 0,
            zh: 66,
            ai: 88,
            shift: 68,
            bi: 4
        }, {
            xh: 122,
            yh: "z",
            ah: 693,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 39,
            bi: -1
        }, {
            xh: 123,
            yh: "{",
            ah: 309,
            bh: 687,
            zh: 35,
            ai: 72,
            shift: 35,
            bi: -1
        }, {
            xh: 124,
            yh: "|",
            ah: 213,
            bh: 0,
            zh: 66,
            ai: 88,
            shift: 70,
            bi: 4
        }, {
            xh: 125,
            yh: "}",
            ah: 0,
            bh: 0,
            zh: 69,
            ai: 88,
            shift: 72,
            bi: 4
        }, {
            xh: 126,
            yh: "~",
            ah: 446,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 44,
            bi: -1
        }, {
            xh: 127,
            ah: 0,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 128,
            yh: "€",
            ah: 65,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 129,
            ah: 735,
            bh: 0,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 130,
            yh: "‚",
            ah: 175,
            bh: 596,
            zh: 42,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 131,
            yh: "ƒ",
            ah: 349,
            bh: 0,
            zh: 66,
            ai: 88,
            shift: 70,
            bi: 4
        }, {
            xh: 132,
            yh: "„",
            ah: 142,
            bh: 0,
            zh: 69,
            ai: 88,
            shift: 72,
            bi: 4
        }, {
            xh: 133,
            yh: "…",
            ah: 590,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 44,
            bi: -1
        }, {
            xh: 134,
            yh: "†",
            ah: 219,
            bh: 596,
            zh: 42,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 135,
            yh: "‡",
            ah: 494,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 51,
            bi: 4
        }, {
            xh: 136,
            yh: "ˆ",
            ah: 194,
            bh: 412,
            zh: 51,
            ai: 72,
            shift: 53,
            bi: 4
        }, {
            xh: 137,
            yh: "‰",
            ah: 951,
            bh: 506,
            zh: 45,
            ai: 72,
            shift: 43,
            bi: -1
        }, {
            xh: 138,
            yh: "Š",
            ah: 650,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 139,
            yh: "‹",
            ah: 542,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 51,
            bi: 4
        }, {
            xh: 140,
            yh: "Œ",
            ah: 247,
            bh: 412,
            zh: 51,
            ai: 72,
            shift: 53,
            bi: 4
        }, {
            xh: 141,
            ah: 780,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 142,
            yh: "Ž",
            ah: 715,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 143,
            ah: 650,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 144,
            ah: 845,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 145,
            yh: "‘",
            ah: 857,
            bh: 506,
            zh: 45,
            ai: 72,
            shift: 43,
            bi: -1
        }, {
            xh: 146,
            yh: "’",
            ah: 435,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 147,
            yh: "“",
            ah: 736,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 43,
            bi: 4
        }, {
            xh: 148,
            yh: "”",
            ah: 818,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 41,
            bi: 4
        }, {
            xh: 149,
            yh: "•",
            ah: 91,
            bh: 778,
            zh: 29,
            ai: 72,
            shift: 28,
            bi: -1
        }, {
            xh: 150,
            yh: "–",
            ah: 912,
            bh: 687,
            zh: 30,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 151,
            yh: "—",
            ah: 695,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 43,
            bi: 4
        }, {
            xh: 152,
            yh: "˜",
            ah: 654,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 41,
            bi: 4
        }, {
            xh: 153,
            yh: "™",
            ah: 207,
            bh: 778,
            zh: 28,
            ai: 72,
            shift: 28,
            bi: -1
        }, {
            xh: 154,
            yh: "š",
            ah: 944,
            bh: 687,
            zh: 30,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 155,
            yh: "›",
            ah: 213,
            bh: 506,
            zh: 47,
            ai: 73,
            shift: 51,
            bi: 4
        }, {
            xh: 156,
            yh: "œ",
            ah: 847,
            bh: 317,
            zh: 52,
            ai: 73,
            shift: 55,
            bi: 4
        }, {
            xh: 157,
            ah: 65,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 158,
            yh: "ž",
            ah: 0,
            bh: 169,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 159,
            yh: "Ÿ",
            ah: 521,
            bh: 778,
            zh: 25,
            ai: 72,
            shift: 23,
            bi: -1
        }, {
            xh: 160,
            yh: " ",
            ah: 698,
            bh: 778,
            zh: 23,
            ai: 72,
            shift: 23,
            bi: -1
        }, {
            xh: 161,
            yh: "¡",
            ah: 982,
            bh: 412,
            zh: 39,
            ai: 88,
            shift: 42,
            bi: 4
        }, {
            xh: 162,
            yh: "¢",
            ah: 482,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 4
        }, {
            xh: 163,
            yh: "£",
            ah: 548,
            bh: 778,
            zh: 25,
            ai: 72,
            shift: 23,
            bi: -1
        }, {
            xh: 164,
            yh: "¤",
            ah: 623,
            bh: 778,
            zh: 23,
            ai: 72,
            shift: 23,
            bi: -1
        }, {
            xh: 165,
            yh: "¥",
            ah: 595,
            bh: 317,
            zh: 56,
            ai: 73,
            shift: 60,
            bi: 4
        }, {
            xh: 166,
            yh: "¦",
            ah: 427,
            bh: 317,
            zh: 60,
            ai: 73,
            shift: 62,
            bi: 4
        }, {
            xh: 167,
            yh: "§",
            ah: 346,
            bh: 687,
            zh: 35,
            ai: 72,
            shift: 34,
            bi: -1
        }, {
            xh: 168,
            yh: "¨",
            ah: 775,
            bh: 687,
            zh: 31,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 169,
            yh: "©",
            ah: 536,
            bh: 317,
            zh: 57,
            ai: 73,
            shift: 60,
            bi: 4
        }, {
            xh: 170,
            yh: "ª",
            ah: 365,
            bh: 317,
            zh: 60,
            ai: 73,
            shift: 62,
            bi: 4
        }, {
            xh: 171,
            yh: "«",
            ah: 454,
            bh: 687,
            zh: 33,
            ai: 72,
            shift: 32,
            bi: -1
        }, {
            xh: 172,
            yh: "¬",
            ah: 0,
            bh: 778,
            zh: 30,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 173,
            yh: "­",
            ah: 771,
            bh: 506,
            zh: 37,
            ai: 88,
            shift: 41,
            bi: 4
        }, {
            xh: 174,
            yh: "®",
            ah: 611,
            bh: 412,
            zh: 41,
            ai: 88,
            shift: 44,
            bi: 4
        }, {
            xh: 175,
            yh: "¯",
            ah: 241,
            bh: 687,
            zh: 35,
            ai: 73,
            shift: 38,
            bi: 2
        }, {
            xh: 176,
            yh: "°",
            ah: 351,
            bh: 596,
            zh: 41,
            ai: 73,
            shift: 42,
            bi: 2
        }, {
            xh: 177,
            yh: "±",
            ah: 927,
            bh: 778,
            zh: 20,
            ai: 72,
            shift: 19,
            bi: -1
        }, {
            xh: 178,
            yh: "²",
            ah: 0,
            bh: 880,
            zh: 19,
            ai: 72,
            shift: 19,
            bi: -1
        }, {
            xh: 179,
            yh: "³",
            ah: 0,
            bh: 687,
            zh: 30,
            ai: 89,
            shift: 34,
            bi: 4
        }, {
            xh: 180,
            yh: "´",
            ah: 817,
            bh: 596,
            zh: 32,
            ai: 89,
            shift: 35,
            bi: 4
        }, {
            xh: 181,
            yh: "µ",
            ah: 712,
            bh: 687,
            zh: 32,
            ai: 72,
            shift: 31,
            bi: -1
        }, {
            xh: 182,
            yh: "¶",
            ah: 327,
            bh: 778,
            zh: 27,
            ai: 72,
            shift: 27,
            bi: -1
        }, {
            xh: 183,
            yh: "·",
            ah: 0,
            bh: 506,
            zh: 39,
            ai: 88,
            shift: 43,
            bi: 4
        }, {
            xh: 184,
            yh: "¸",
            ah: 0,
            bh: 412,
            zh: 43,
            ai: 88,
            shift: 46,
            bi: 4
        }, {
            xh: 185,
            yh: "¹",
            ah: 881,
            bh: 778,
            zh: 21,
            ai: 72,
            shift: 20,
            bi: -1
        }, {
            xh: 186,
            yh: "º",
            ah: 207,
            bh: 880,
            zh: 16,
            ai: 72,
            shift: 16,
            bi: -1
        }, {
            xh: 187,
            yh: "»",
            ah: 518,
            bh: 687,
            zh: 27,
            ai: 88,
            shift: 29,
            bi: 1
        }, {
            xh: 188,
            yh: "¼",
            ah: 278,
            bh: 687,
            zh: 29,
            ai: 88,
            shift: 31,
            bi: 2
        }, {
            xh: 189,
            yh: "½",
            ah: 494,
            bh: 778,
            zh: 25,
            ai: 72,
            shift: 29,
            bi: 4
        }, {
            xh: 190,
            yh: "¾",
            ah: 237,
            bh: 778,
            zh: 28,
            ai: 72,
            shift: 31,
            bi: 4
        }, {
            xh: 191,
            yh: "¿",
            ah: 746,
            bh: 687,
            zh: 27,
            ai: 84,
            shift: 26,
            bi: -1
        }, {
            xh: 192,
            yh: "À",
            ah: 644,
            bh: 687,
            zh: 32,
            ai: 72,
            shift: 32,
            bi: -1
        }, {
            xh: 193,
            yh: "Á",
            ah: 746,
            bh: 317,
            zh: 45,
            ai: 88,
            shift: 49,
            bi: 4
        }, {
            xh: 194,
            yh: "Â",
            ah: 313,
            bh: 317,
            zh: 50,
            ai: 88,
            shift: 53,
            bi: 4
        }, {
            xh: 195,
            yh: "Ã",
            ah: 401,
            bh: 778,
            zh: 21,
            ai: 87,
            shift: 20,
            bi: -1
        }, {
            xh: 196,
            yh: "Ä",
            ah: 748,
            bh: 778,
            zh: 19,
            ai: 87,
            shift: 19,
            bi: -1
        }, {
            xh: 197,
            yh: "Å",
            ah: 307,
            bh: 596,
            zh: 42,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 198,
            yh: "Æ",
            ah: 417,
            bh: 0,
            zh: 66,
            ai: 88,
            shift: 70,
            bi: 4
        }, {
            xh: 199,
            yh: "Ç",
            ah: 71,
            bh: 0,
            zh: 69,
            ai: 88,
            shift: 72,
            bi: 4
        }, {
            xh: 200,
            yh: "È",
            ah: 302,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 51,
            bi: 4
        }, {
            xh: 201,
            yh: "É",
            ah: 300,
            bh: 412,
            zh: 51,
            ai: 72,
            shift: 53,
            bi: 4
        }, {
            xh: 202,
            yh: "Ê",
            ah: 810,
            bh: 506,
            zh: 45,
            ai: 72,
            shift: 43,
            bi: -1
        }, {
            xh: 203,
            yh: "Ë",
            ah: 607,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 204,
            yh: "Ì",
            ah: 777,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 43,
            bi: 4
        }, {
            xh: 205,
            yh: "Í",
            ah: 900,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 41,
            bi: 4
        }, {
            xh: 206,
            yh: "Î",
            ah: 673,
            bh: 778,
            zh: 23,
            ai: 72,
            shift: 23,
            bi: -1
        }, {
            xh: 207,
            yh: "Ï",
            ah: 732,
            bh: 506,
            zh: 37,
            ai: 88,
            shift: 41,
            bi: 4
        }, {
            xh: 208,
            yh: "Ð",
            ah: 376,
            bh: 880,
            zh: 18,
            ai: 25,
            shift: 0,
            bi: 0
        }, {
            xh: 209,
            yh: "Ñ",
            ah: 568,
            bh: 880,
            zh: 3,
            ai: 23,
            shift: 0,
            bi: 6
        }, {
            xh: 210,
            yh: "Ò",
            ah: 468,
            bh: 880,
            zh: 11,
            ai: 24,
            shift: 0,
            bi: 3
        }, {
            xh: 211,
            yh: "Ó",
            ah: 494,
            bh: 880,
            zh: 11,
            ai: 23,
            shift: 0,
            bi: 3
        }, {
            xh: 212,
            yh: "Ô",
            ah: 546,
            bh: 880,
            zh: 10,
            ai: 23,
            shift: 0,
            bi: 4
        }, {
            xh: 213,
            yh: "Õ",
            ah: 455,
            bh: 880,
            zh: 11,
            ai: 24,
            shift: 0,
            bi: 3
        }, {
            xh: 214,
            yh: "Ö",
            ah: 558,
            bh: 880,
            zh: 8,
            ai: 23,
            shift: 0,
            bi: 5
        }, {
            xh: 215,
            yh: "×",
            ah: 573,
            bh: 880,
            zh: 3,
            ai: 23,
            shift: 0,
            bi: 7
        }, {
            xh: 216,
            yh: "Ø",
            ah: 481,
            bh: 880,
            zh: 11,
            ai: 23,
            shift: 0,
            bi: 3
        }, {
            xh: 217,
            yh: "Ù",
            ah: 442,
            bh: 880,
            zh: 11,
            ai: 24,
            shift: 0,
            bi: 3
        }, {
            xh: 218,
            yh: "Ú",
            ah: 533,
            bh: 880,
            zh: 11,
            ai: 23,
            shift: 0,
            bi: 3
        }, {
            xh: 219,
            yh: "Û",
            ah: 520,
            bh: 880,
            zh: 11,
            ai: 23,
            shift: 0,
            bi: 3
        }, {
            xh: 220,
            yh: "Ü",
            ah: 428,
            bh: 880,
            zh: 12,
            ai: 23,
            shift: 0,
            bi: 2
        }, {
            xh: 221,
            yh: "Ý",
            ah: 414,
            bh: 880,
            zh: 12,
            ai: 23,
            shift: 0,
            bi: 2
        }, {
            xh: 222,
            yh: "Þ",
            ah: 507,
            bh: 880,
            zh: 11,
            ai: 23,
            shift: 0,
            bi: 3
        }, {
            xh: 223,
            yh: "ß",
            ah: 292,
            bh: 880,
            zh: 11,
            ai: 96,
            shift: 0,
            bi: 4
        }, {
            xh: 224,
            yh: "à",
            ah: 279,
            bh: 880,
            zh: 11,
            ai: 100,
            shift: 0,
            bi: 3
        }, {
            xh: 225,
            yh: "á",
            ah: 396,
            bh: 880,
            zh: 16,
            ai: 24,
            shift: 0,
            bi: 2
        }, {
            xh: 226,
            yh: "â",
            ah: 321,
            bh: 880,
            zh: 16,
            ai: 37,
            shift: 0,
            bi: 7
        }, {
            xh: 227,
            yh: "ã",
            ah: 817,
            bh: 778,
            zh: 16,
            ai: 95,
            shift: 0,
            bi: 4
        }, {
            xh: 228,
            yh: "ä",
            ah: 339,
            bh: 880,
            zh: 18,
            ai: 32,
            shift: 0,
            bi: 5
        }, {
            xh: 229,
            yh: "å",
            ah: 474,
            bh: 778,
            zh: 18,
            ai: 100,
            shift: 0,
            bi: 17
        }, {
            xh: 230,
            yh: "æ",
            ah: 910,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 231,
            yh: "ç",
            ah: 585,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 232,
            yh: "è",
            ah: 260,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 233,
            yh: "é",
            ah: 195,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 234,
            yh: "ê",
            ah: 130,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 235,
            yh: "ë",
            ah: 325,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 236,
            yh: "ì",
            ah: 520,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 237,
            yh: "í",
            ah: 455,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 238,
            yh: "î",
            ah: 390,
            bh: 95,
            zh: 63,
            ai: 72,
            shift: 72,
            bi: 4
        }, {
            xh: 240,
            yh: "ð",
            ah: 597,
            bh: 778,
            zh: 24,
            ai: 72,
            shift: 24,
            bi: 0
        }, {
            xh: 241,
            yh: "ñ",
            ah: 398,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 44,
            bi: -1
        }, {
            xh: 242,
            yh: "ò",
            ah: 263,
            bh: 596,
            zh: 42,
            ai: 72,
            shift: 42,
            bi: -1
        }, {
            xh: 243,
            yh: "ó",
            ah: 350,
            bh: 506,
            zh: 46,
            ai: 72,
            shift: 51,
            bi: 4
        }, {
            xh: 244,
            yh: "ô",
            ah: 141,
            bh: 412,
            zh: 51,
            ai: 72,
            shift: 53,
            bi: 4
        }, {
            xh: 245,
            yh: "õ",
            ah: 904,
            bh: 506,
            zh: 45,
            ai: 72,
            shift: 43,
            bi: -1
        }, {
            xh: 246,
            yh: "ö",
            ah: 521,
            bh: 596,
            zh: 41,
            ai: 72,
            shift: 41,
            bi: -1
        }, {
            xh: 247,
            yh: "÷",
            ah: 122,
            bh: 778,
            zh: 29,
            ai: 72,
            shift: 28,
            bi: -1
        }, {
            xh: 248,
            yh: "ø",
            ah: 880,
            bh: 687,
            zh: 30,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 249,
            yh: "ù",
            ah: 941,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 43,
            bi: 4
        }, {
            xh: 250,
            yh: "ú",
            ah: 859,
            bh: 412,
            zh: 39,
            ai: 89,
            shift: 41,
            bi: 4
        }, {
            xh: 251,
            yh: "û",
            ah: 267,
            bh: 778,
            zh: 28,
            ai: 72,
            shift: 28,
            bi: -1
        }, {
            xh: 252,
            yh: "ü",
            ah: 976,
            bh: 687,
            zh: 30,
            ai: 72,
            shift: 30,
            bi: -1
        }, {
            xh: 253,
            yh: "ý",
            ah: 164,
            bh: 506,
            zh: 47,
            ai: 73,
            shift: 51,
            bi: 4
        }, {
            xh: 254,
            yh: "þ",
            ah: 901,
            bh: 317,
            zh: 52,
            ai: 73,
            shift: 55,
            bi: 4
        }, {
            xh: 255,
            yh: "ÿ",
            ah: 447,
            bh: 778,
            zh: 25,
            ai: 72,
            shift: 23,
            bi: -1
        }, ],
    }],
    ci: [],
    di: [{}, ],
    ei: [{
        dg: "logo_labkhand",
        fi: !0,
        parent: -100,
        gi: hi,
        ii: ji,
        ki: li,
        mi: [],
        ni: []
    }, {
        dg: "logo_labkhand_cre",
        parent: -100,
        gi: oi,
        ii: pi,
        mi: [],
        ni: []
    }, {
        dg: "btn_sel_char",
        qi: 1,
        fi: !0,
        parent: -100,
        gi: ri,
        ki: si,
        ti: ui,
        vi: wi,
        mi: [],
        ni: []
    }, {
        dg: "msg_log",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: xi,
        yi: zi,
        mi: [],
        ni: []
    }, {
        dg: "controller_Global",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: aj,
        bj: cj,
        dj: ej,
        fj: gj,
        hj: ij,
        mi: [],
        ni: []
    }, {
        dg: "controller_Main",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: jj,
        kj: lj,
        dj: mj,
        nj: oj,
        pj: qj,
        fj: rj,
        mi: [],
        ni: []
    }, {
        dg: "player_user",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: sj,
        mi: [],
        ni: []
    }, {
        dg: "player_AI",
        qi: -1,
        fi: !0,
        parent: -100,
        mi: [],
        ni: []
    }, {
        dg: "pawn",
        qi: 1,
        fi: !0,
        parent: -100,
        gi: tj,
        uj: vj,
        ki: wj,
        xj: yj,
        zj: ak,
        bk: ck,
        bj: dk,
        dj: ek,
        mi: [],
        ni: [11, fk]
    }, {
        dg: "pawn_AI",
        qi: 1,
        fi: !0,
        parent: 8,
        gi: gk,
        ki: hk,
        dj: ik,
        mi: [],
        ni: []
    }, {
        dg: "toor",
        qi: 2,
        fi: !0,
        parent: -100,
        gi: jk,
        ki: kk,
        mi: [],
        ni: [11, lk]
    }, {
        dg: "bomb",
        qi: 3,
        fi: !0,
        parent: -100,
        gi: mk,
        nk: ok,
        ii: pk,
        ki: qk,
        mi: [],
        ni: [10, rk, 8, sk]
    }, {
        dg: "tir_expo",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: tk,
        ki: uk,
        mi: [],
        ni: []
    }, {
        dg: "hit_expo",
        qi: -1,
        fi: !0,
        vk: -1,
        parent: -100,
        gi: wk,
        ki: xk,
        mi: [],
        ni: []
    }, {
        dg: "gfx_barg",
        qi: 4,
        fi: !0,
        vk: -2,
        parent: -100,
        gi: yk,
        ki: zk,
        mi: [],
        ni: [11, al]
    }, {
        dg: "gfx_celeb",
        qi: 4,
        fi: !0,
        vk: -2,
        parent: -100,
        gi: bl,
        ki: cl,
        mi: [],
        ni: [11, dl]
    }, {
        dg: "celeb_end",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: el,
        ii: fl,
        kj: gl,
        mi: [],
        ni: []
    }, {
        dg: "gfx_fall_barg_cre",
        qi: -1,
        fi: !0,
        parent: -100,
        gi: hl,
        kj: il,
        mi: [],
        ni: []
    }, {
        dg: "cloud",
        qi: 5,
        fi: !0,
        parent: -100,
        gi: jl,
        vi: kl,
        mi: [],
        ni: []
    }, {
        dg: "cloud_platform",
        qi: 5,
        fi: !0,
        parent: -100,
        gi: ll,
        vi: ml,
        mi: [],
        ni: []
    }, {
        dg: "hp_bar_madlet_player",
        qi: 7,
        fi: !0,
        parent: -100,
        gi: nl,
        yi: ol,
        mi: [],
        ni: []
    }, {
        dg: "hp_bar_madlet_AI",
        qi: 7,
        fi: !0,
        parent: -100,
        gi: pl,
        yi: ql,
        mi: [],
        ni: []
    }, {
        dg: "gfx_bombUltimate",
        qi: 3,
        fi: !0,
        parent: -100,
        gi: rl,
        ki: sl,
        mi: [],
        ni: []
    }, {
        dg: "gfx_goal",
        qi: 3,
        fi: !0,
        parent: -100,
        gi: tl,
        ki: ul,
        vi: vl,
        mi: [],
        ni: []
    }, {
        dg: "Logo",
        qi: 8,
        fi: !0,
        parent: -100,
        mi: [],
        ni: []
    }, {
        dg: "HUD_title",
        qi: 9,
        fi: !0,
        parent: -100,
        mi: [],
        ni: []
    }, {
        dg: "HUD_btnBack",
        qi: 10,
        fi: !0,
        parent: -100,
        ti: wl,
        mi: [],
        ni: []
    }],
    xl: [{
        dg: "lvl_title",
        yl: "Valimall",
        ch: 60,
        zl: 9089279,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 134,
            bh: 0,
            bm: 4,
            hm: 100000,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: []
    }, {
        dg: "lvl_start",
        yl: "Valimall",
        ch: 60,
        zl: 9089279,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 938,
            bh: 700,
            bm: 1,
            hm: 100001,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 134,
            bh: 700,
            bm: 4,
            hm: 100002,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 160,
            bh: 700,
            bm: 2,
            hm: 100003,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 320,
            bh: 700,
            bm: 2,
            hm: 100004,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 480,
            bh: 700,
            bm: 2,
            hm: 100005,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 640,
            bh: 700,
            bm: 2,
            hm: 100006,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 800,
            bh: 700,
            bm: 2,
            hm: 100007,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 153,
            bh: 118,
            bm: 24,
            hm: 100008,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 508,
            bh: 290,
            bm: 25,
            hm: 100009,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -43,
            bh: 628,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000000,
            zl: -1
        }]
    }, {
        dg: "lvl_1",
        yl: "Valimall",
        ch: 60,
        zl: 16760445,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            jm: 1024,
            km: 768,
            lm: 1024,
            mm: 768,
            nm: 150,
            om: 150,
            pm: 8,
            qm: 8,
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 870,
            bh: 702,
            bm: 1,
            hm: 100010,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 30,
            bh: 36,
            bm: 5,
            hm: 100011,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 720,
            bm: 10,
            hm: 100012,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 270,
            bh: 720,
            bm: 8,
            hm: 100013,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 110,
            bh: 720,
            bm: 12,
            hm: 100014,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 720,
            bm: 12,
            hm: 100015,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 900,
            bh: 234,
            bm: 18,
            hm: 100016,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 830,
            bh: 72,
            bm: 18,
            hm: 100017,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 780,
            bh: 504,
            bm: 18,
            hm: 100018,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 420,
            bh: 72,
            bm: 18,
            hm: 100019,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 150,
            bh: 180,
            bm: 18,
            hm: 100020,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 50,
            bh: 414,
            bm: 18,
            hm: 100021,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 770,
            bh: 720,
            bm: 9,
            hm: 100022,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 130,
            bh: 180,
            bm: 20,
            hm: 100023,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 690,
            bh: 180,
            bm: 21,
            hm: 100024,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 500,
            bh: 100,
            bm: 26,
            hm: 100025,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -10,
            bh: 648,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000001,
            zl: -1
        }]
    }, {
        dg: "lvl_2",
        yl: "Valimall",
        ch: 60,
        zl: 16756059,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            jm: 1024,
            km: 768,
            lm: 1024,
            mm: 768,
            nm: 100,
            om: 100,
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 870,
            bh: 702,
            bm: 1,
            hm: 100026,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 30,
            bh: 36,
            bm: 5,
            hm: 100027,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 720,
            bm: 10,
            hm: 100028,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 270,
            bh: 720,
            bm: 8,
            hm: 100029,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 110,
            bh: 720,
            bm: 12,
            hm: 100030,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 720,
            bm: 12,
            hm: 100031,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 150,
            bh: 180,
            bm: 18,
            hm: 100032,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 50,
            bh: 414,
            bm: 18,
            hm: 100033,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 830,
            bh: 504,
            bm: 9,
            hm: 100034,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 130,
            bh: 180,
            bm: 20,
            hm: 100035,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 690,
            bh: 180,
            bm: 21,
            hm: 100036,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 780,
            bh: 504,
            bm: 19,
            hm: 100037,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 140,
            bh: 504,
            bm: 19,
            hm: 100038,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 430,
            bh: 288,
            bm: 18,
            hm: 100039,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 550,
            bh: 198,
            bm: 18,
            hm: 100040,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 420,
            bh: 396,
            bm: 18,
            hm: 100041,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 420,
            bh: 486,
            bm: 18,
            hm: 100042,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 670,
            bh: 396,
            bm: 18,
            hm: 100043,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 710,
            bh: 306,
            bm: 18,
            hm: 100044,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 500,
            bh: 100,
            bm: 26,
            hm: 100045,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 670,
            bh: 270,
            bm: 14,
            hm: 100046,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 270,
            bm: 14,
            hm: 100047,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 780,
            bh: 378,
            bm: 14,
            hm: 100048,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 840,
            bh: 270,
            bm: 14,
            hm: 100049,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 378,
            bm: 14,
            hm: 100050,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 900,
            bh: 252,
            bm: 14,
            hm: 100051,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 780,
            bh: 252,
            bm: 14,
            hm: 100052,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -39,
            bh: 628,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000002,
            zl: -1
        }]
    }, {
        dg: "lvl_3",
        yl: "Valimall",
        ch: 60,
        zl: 8695039,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            jm: 1024,
            km: 768,
            lm: 1024,
            mm: 768,
            nm: 100,
            om: 100,
            pm: 8,
            qm: 0,
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 870,
            bh: 702,
            bm: 1,
            hm: 100053,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 30,
            bh: 36,
            bm: 5,
            hm: 100054,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 720,
            bm: 10,
            hm: 100055,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 270,
            bh: 720,
            bm: 8,
            hm: 100056,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 110,
            bh: 720,
            bm: 12,
            hm: 100057,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 720,
            bm: 12,
            hm: 100058,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 220,
            bh: 396,
            bm: 18,
            hm: 100059,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 660,
            bh: 720,
            bm: 9,
            hm: 100060,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 130,
            bh: 180,
            bm: 20,
            hm: 100061,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 690,
            bh: 180,
            bm: 21,
            hm: 100062,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 540,
            bh: 504,
            bm: 18,
            hm: 100063,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 500,
            bh: 100,
            bm: 26,
            hm: 100064,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 670,
            bh: 270,
            bm: 14,
            hm: 100065,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 270,
            bm: 14,
            hm: 100066,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 320,
            bh: 270,
            bm: 14,
            hm: 100067,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -10,
            bh: 630,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000003,
            zl: -1
        }]
    }, {
        dg: "lvl_4",
        yl: "Valimall",
        ch: 60,
        zl: 7049705,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            jm: 1024,
            km: 768,
            lm: 1024,
            mm: 768,
            nm: 100,
            om: 100,
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 870,
            bh: 702,
            bm: 1,
            hm: 100068,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 30,
            bh: 36,
            bm: 5,
            hm: 100069,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 720,
            bm: 10,
            hm: 100070,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 270,
            bh: 720,
            bm: 8,
            hm: 100071,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 110,
            bh: 720,
            bm: 12,
            hm: 100072,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 720,
            bm: 12,
            hm: 100073,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 150,
            bh: 180,
            bm: 18,
            hm: 100074,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 840,
            bh: 432,
            bm: 9,
            hm: 100075,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 130,
            bh: 180,
            bm: 20,
            hm: 100076,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 690,
            bh: 180,
            bm: 21,
            hm: 100077,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 790,
            bh: 432,
            bm: 19,
            hm: 100078,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 430,
            bh: 288,
            bm: 18,
            hm: 100079,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 550,
            bh: 198,
            bm: 18,
            hm: 100080,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 420,
            bh: 396,
            bm: 18,
            hm: 100081,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 740,
            bh: 540,
            bm: 19,
            hm: 100082,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 160,
            bh: 54,
            bm: 17,
            hm: 100083,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 500,
            bh: 100,
            bm: 26,
            hm: 100084,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 670,
            bh: 270,
            bm: 14,
            hm: 100085,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 270,
            bm: 14,
            hm: 100086,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 340,
            bh: 144,
            bm: 14,
            hm: 100087,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 230,
            bh: 306,
            bm: 14,
            hm: 100088,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 620,
            bh: 54,
            bm: 14,
            hm: 100089,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 840,
            bh: 126,
            bm: 14,
            hm: 100090,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -20,
            bh: 630,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000004,
            zl: -1
        }]
    }, {
        dg: "lvl_5",
        yl: "Valimall",
        ch: 60,
        zl: 5644067,
        am: [{
            fi: !0,
            bm: 0,
            cm: !1,
            dm: !1,
            em: !0
        }, {}, {}, {}, {}, {}, {}, {}],
        fm: [{
            jm: 1024,
            km: 768,
            lm: 1024,
            mm: 768,
            nm: 100,
            om: 100,
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }, {
            bm: -100
        }],
        gm: [{
            ah: 870,
            bh: 702,
            bm: 1,
            hm: 100091,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 30,
            bh: 36,
            bm: 5,
            hm: 100092,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 510,
            bh: 720,
            bm: 10,
            hm: 100093,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 270,
            bh: 720,
            bm: 8,
            hm: 100094,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 110,
            bh: 720,
            bm: 12,
            hm: 100095,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 910,
            bh: 720,
            bm: 12,
            hm: 100096,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 770,
            bh: 720,
            bm: 9,
            hm: 100097,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 130,
            bh: 180,
            bm: 20,
            hm: 100098,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 690,
            bh: 180,
            bm: 21,
            hm: 100099,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 880,
            bh: 450,
            bm: 18,
            hm: 100100,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 530,
            bh: 450,
            bm: 18,
            hm: 100101,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }, {
            ah: 500,
            bh: 100,
            bm: 26,
            hm: 100102,
            uh: 1,
            vh: 1,
            zl: 4294967295
        }],
        im: [{
            ah: -20,
            bh: 630,
            bm: 1,
            zh: 1024,
            ai: 142,
            vk: -999999,
            hm: 10000005,
            zl: -1
        }]
    }],
    rm: [0, 1, 2, 3, 4, 5, 6],
    sm: [{
        ah: 942,
        bh: 762,
        zh: 28,
        ai: 28,
        tm: 0,
        um: 0,
        vm: 28,
        wm: 28,
        xm: 28,
        ym: 28,
        zm: 0
    }, {
        ah: 634,
        bh: 762,
        zh: 98,
        ai: 132,
        tm: 12,
        um: 0,
        vm: 98,
        wm: 132,
        xm: 134,
        ym: 132,
        zm: 0
    }, {
        ah: 810,
        bh: 430,
        zh: 131,
        ai: 126,
        tm: 2,
        um: 3,
        vm: 131,
        wm: 126,
        xm: 134,
        ym: 132,
        zm: 0
    }, {
        ah: 506,
        bh: 762,
        zh: 121,
        ai: 116,
        tm: 7,
        um: 8,
        vm: 121,
        wm: 116,
        xm: 134,
        ym: 132,
        zm: 0
    }, {
        ah: 810,
        bh: 294,
        zh: 131,
        ai: 132,
        tm: 1,
        um: 0,
        vm: 131,
        wm: 132,
        xm: 134,
        ym: 132,
        zm: 0
    }, {
        ah: 810,
        bh: 158,
        zh: 134,
        ai: 132,
        tm: 0,
        um: 0,
        vm: 134,
        wm: 132,
        xm: 134,
        ym: 132,
        zm: 0
    }, {
        ah: 810,
        bh: 2,
        zh: 150,
        ai: 150,
        tm: 0,
        um: 0,
        vm: 150,
        wm: 150,
        xm: 150,
        ym: 150,
        zm: 0
    }, {
        ah: 946,
        bh: 294,
        zh: 48,
        ai: 48,
        tm: 0,
        um: 0,
        vm: 48,
        wm: 48,
        xm: 48,
        ym: 48,
        zm: 0
    }, {
        ah: 946,
        bh: 346,
        zh: 20,
        ai: 17,
        tm: 0,
        um: 0,
        vm: 20,
        wm: 17,
        xm: 20,
        ym: 17,
        zm: 0
    }, {
        ah: 998,
        bh: 226,
        zh: 20,
        ai: 17,
        tm: 0,
        um: 0,
        vm: 20,
        wm: 17,
        xm: 20,
        ym: 17,
        zm: 0
    }, {
        ah: 974,
        bh: 762,
        zh: 20,
        ai: 17,
        tm: 0,
        um: 0,
        vm: 20,
        wm: 17,
        xm: 20,
        ym: 17,
        zm: 0
    }, {
        ah: 942,
        bh: 794,
        zh: 20,
        ai: 17,
        tm: 0,
        um: 0,
        vm: 20,
        wm: 17,
        xm: 20,
        ym: 17,
        zm: 0
    }, {
        ah: 838,
        bh: 762,
        zh: 100,
        ai: 57,
        tm: 0,
        um: 0,
        vm: 100,
        wm: 57,
        xm: 100,
        ym: 57,
        zm: 0
    }, {
        ah: 810,
        bh: 562,
        zh: 200,
        ai: 29,
        tm: 0,
        um: 0,
        vm: 200,
        wm: 29,
        xm: 200,
        ym: 29,
        zm: 0
    }, {
        ah: 738,
        bh: 834,
        zh: 200,
        ai: 29,
        tm: 0,
        um: 0,
        vm: 200,
        wm: 29,
        xm: 200,
        ym: 29,
        zm: 0
    }, {
        ah: 950,
        bh: 158,
        zh: 64,
        ai: 64,
        tm: 0,
        um: 0,
        vm: 64,
        wm: 64,
        xm: 64,
        ym: 64,
        zm: 0
    }, {
        ah: 2,
        bh: 762,
        zh: 497,
        ai: 120,
        tm: 2,
        um: 0,
        vm: 497,
        wm: 120,
        xm: 500,
        ym: 120,
        zm: 0
    }, {
        ah: 738,
        bh: 762,
        zh: 93,
        ai: 65,
        tm: 0,
        um: 0,
        vm: 93,
        wm: 65,
        xm: 93,
        ym: 65,
        zm: 0
    }, {
        ah: 4,
        bh: 4,
        zh: 800,
        ai: 600,
        tm: 0,
        um: 0,
        vm: 800,
        wm: 600,
        xm: 800,
        ym: 600,
        zm: 0
    }, {
        ah: 0,
        bh: 612,
        zh: 1024,
        ai: 142,
        tm: 0,
        um: 0,
        vm: 1024,
        wm: 142,
        xm: 1024,
        ym: 142,
        zm: 0
    }, {
        ah: 738,
        bh: 870,
        zh: 32,
        ai: 16,
        tm: 0,
        um: 0,
        vm: 32,
        wm: 16,
        xm: 32,
        ym: 16,
        zm: 0
    }, {
        ah: 966,
        bh: 2,
        zh: 32,
        ai: 16,
        tm: 0,
        um: 0,
        vm: 32,
        wm: 16,
        xm: 32,
        ym: 16,
        zm: 0
    }],
    an: ["Volleymal_130612_1700_texture_0.png"],
    bn: {
        cn: !1,
        dn: 612995557,
        en: "626f441e-e6f0-4a9a-a7c1-814d391ae0b6",
        fn: !0,
        gn: !1,
        hn: !0,
        scale: -1,
        jn: !0,
        kn: !1,
        ln: !0,
        mn: !0,
        nn: !1,
        on: !1,
        pn: !0,
        qn: 0,
        rn: !1
    }
};

function eh(sn, tn, un) {
    {
        if ((un == "r")) {
            {
                if ((((sn.ah < sn.vn)) && ((sn.wn != "jump")))) {
                    {
                        sn.xn += 1;
                        sn.yn(-sn.zn);
                        sn.ao(+sn.bo);
                        sn.co = sn.eo;
                        sn.wn = "jump";
                    }
                };
            }
        } else {
            if ((un == "l")) {
                {
                    if ((((sn.ah > sn.fo)) && ((sn.wn != "jump")))) {
                        {
                            sn.xn -= 1;
                            sn.yn(-sn.zn);
                            sn.ao(-sn.bo);
                            sn.co = sn.eo;
                            sn.wn = "jump";
                        }
                    };
                }
            } else {
                if ((un == "u")) {
                    {
                        if ((sn.wn != "jump")) {
                            {
                                sn.yn(go((-sn.zn * 1.5), (-sn.zn * 3)));
                                sn.ao(0);
                                sn.co = sn.eo;
                                sn.wn = "jump";
                            }
                        };
                    }
                } else {
                    if ((un == "m")) {
                        {
                            if ((sn.ah < (sn.fo + ((sn.vn - sn.fo) / 2)))) {
                                {
                                    eh(sn, tn, "r");
                                }
                            } else {
                                {
                                    eh(sn, tn, "l");
                                }
                            };
                        }
                    }
                }
            }
        };
    };
}

function fh(sn, tn, un) {
    {
        eh(sn, tn, un);
    };
}

function gh(sn, tn) {
    {
        sn.ho = io.jo();
        switch (io.jo()) {
        case 2:
            sn.ho = 3;
            break;
        case 3:
            sn.ho = 4;
            break;
        case 4:
            sn.ho = 5;
            break;
        case 5:
            sn.ho = 6;
            break;
        case 6:
            sn.ho = 2;
            break;
        default:
            sn.ho = 2;
        };
        global.ko += 1;
        return sn.ho;
    };
}

function hh(sn, tn) {
    {
        sn.ho = 0;
        switch (io.jo()) {
        case 2:
            sn.ho = 0;
            break;
        case 3:
            sn.ho = 1;
            break;
        case 4:
            sn.ho = 2;
            break;
        case 5:
            sn.ho = 3;
            break;
        case 6:
            sn.ho = 4;
            break;
        };
        return sn.ho;
    };
}

function ih(sn, tn, un) {
    {
        sn.lo(un);
        sn.mo = 10;
        sn.no = sn.mo;
        sn.eo = 0.22;
        sn.zn = 3;
        sn.bo = 2.5;
        sn.oo = 2;
        sn.po = 10;
        sn.qo = 2;
        sn.ro = 5;
        if ((un == 0)) {
            {
                sn.so = "zarrafeh";
                sn.mo = 9;
                sn.no = sn.mo;
                sn.eo = 0.22;
                sn.zn = 3;
                sn.bo = 3;
                sn.oo = 4;
                sn.po = 12;
                sn.qo = 3;
                sn.ro = 6;
            }
        } else {
            if ((un == 1)) {
                {
                    sn.so = "goorekhar";
                    sn.mo = 8;
                    sn.no = sn.mo;
                    sn.eo = 0.32;
                    sn.zn = 4;
                    sn.bo = 5;
                    sn.oo = 3;
                    sn.po = 9;
                    sn.qo = 4;
                    sn.ro = 12;
                }
            } else {
                if ((un == 2)) {
                    {
                        sn.so = "kargadan";
                        sn.mo = 14;
                        sn.no = sn.mo;
                        sn.eo = 0.32;
                        sn.zn = 2;
                        sn.bo = 2.5;
                        sn.oo = 10;
                        sn.po = 20;
                        sn.qo = 1;
                        sn.ro = 2;
                    }
                } else {
                    if ((un == 3)) {
                        {
                            sn.so = "shir";
                            sn.mo = 9;
                            sn.no = sn.mo;
                            sn.eo = 0.35;
                            sn.zn = 4;
                            sn.bo = 5;
                            sn.oo = 7;
                            sn.po = 11;
                            sn.qo = 6;
                            sn.ro = 12;
                        }
                    } else {
                        if ((un == 4)) {
                            {
                                sn.so = "fil";
                                sn.mo = 16;
                                sn.no = sn.mo;
                                sn.eo = 0.32;
                                sn.zn = 2;
                                sn.bo = 1;
                                sn.oo = 8;
                                sn.po = 22;
                                sn.qo = 1;
                                sn.ro = 1;
                            }
                        }
                    }
                }
            }
        };
        sn.qo /= 10;
        sn.ro /= 10;
    };
}

function jh(sn, tn) {
    {
        sn.to = 0;
        if ((tn.so == "zarrafeh")) {
            {
                if ((sn.uo >= 5)) {
                    {
                        sn.vo = 1;
                        sn.uo += 1;
                        sn.to = 1;
                    }
                } else {
                    sn.vo = 0
                };
            }
        } else {
            if ((tn.so == "goorekhar")) {
                {
                    if ((sn.uo >= 8)) {
                        {
                            sn.vo = 4;
                            sn.to = 1;
                        }
                    } else {
                        if ((sn.uo >= 5)) {
                            {
                                sn.vo = 3;
                                sn.to = 1;
                            }
                        } else {
                            sn.vo = 2
                        }
                    };
                }
            } else {
                if ((tn.so == "shir")) {
                    {
                        if ((sn.uo >= 5)) {
                            {
                                sn.vo = 5;
                                sn.to = 1;
                            }
                        } else {
                            sn.vo = 2
                        };
                    }
                } else {
                    {
                        sn.vo = 2;
                    }
                }
            }
        };
        return sn.vo;
    };
}

function kh(sn, tn, un) {
    {
        if ((un == 1)) {
            {
                sn.wo = 800;
                sn.xo = 600;
                sn.yo = io.zo();
                sn.ap = io.bp();
                sn.cp = floor((sn.yo * sn.xo / sn.wo));
                if ((sn.cp < sn.ap)) {
                    {
                        dp(sn.yo, sn.cp);
                    }
                } else {
                    {
                        sn.ep = floor((sn.ap * sn.wo / sn.xo));
                        dp(sn.ep, sn.ap);
                    }
                };
                sn.fp = ((sn.yo / 2) - (gp() / 2));
                if ((sn.fp < 0)) {
                    sn.fp = 0
                };
                sn.hp = ((sn.ap / 2) - (ip() / 2));
                if ((sn.hp < 0)) {
                    sn.hp = 0
                };
                jp(sn.fp, sn.hp);
            }
        } else {
            if ((un == 2)) {
                {
                    dp(io.zo(), io.bp());
                }
            }
        };
    };
}

function hi(sn, tn) {
    {
        sn.kp = lp(1).ah;
        sn.mp = lp(1).bh;
        sn.np = 0;
        sn.ao(-0.6);
        op(sn, "__alarm__", 8, (io.pp * qp(8, 12)));
    };
}

function ji(sn, tn) {
    {
        sn.rp = 0;
        sn.co = 0.01;
    };
}

function li(sn, tn) {
    {
        if ((sn.np == 0)) {
            {
                if (((sn.ah - sn.kp) < 1)) {
                    {
                        sn.sp(sn.kp);
                        sn.np = 1;
                        sn.tp(0);
                    }
                };
            }
        };
    };
}

function oi(sn, tn) {
    {
        up((sn.ah + 100), sn.bh, 0);
        sn.vp = (io.pp * qp(60, 70));
        op(sn, "__alarm__", 8,
            sn.vp);
    };
}

function pi(sn, tn) {
    {
        op(sn, "__alarm__", 8, sn.vp);
        if (!(wp(0) > 0.5)) {
            {
                up((sn.ah + 100), sn.bh, 0);
            }
        };
    };
}

function ri(sn, tn) {
    {
        sn.xp = 0;
        sn.lo(global.yp);
        global.yp += 1;
        sn.zp = 0.04;
        sn.aq = 0;
        sn.bq = 0;
    };
}

function si(sn, tn) {
    {
        if ((cq(sn.ah, sn.bh, io.dq, io.eq) < 80)) {
            {
                sn.aq = 1;
            }
        } else {
            {
                sn.aq = 0;
            }
        }; if (((sn.aq > 0.5) || ((sn.fq <= 0.95)) || ((sn.fq >= 1.05)))) {
            {
                sn.gq(sn.fq + (sn.zp + (hq(sn.zp) * sn.fq / 40)));
                sn.iq(sn.fq);
                if ((sn.fq > 1.4)) {
                    {
                        sn.zp = (-1 * abs(sn.zp));
                    }
                } else {
                    if ((sn.fq < 0.8)) {
                        {
                            sn.zp = abs(sn.zp);
                        }
                    }
                };
            }
        };
        if (sn.bq > 0.5) {
            {
                sn.jq(sn.kq + (sn.ch * 3));
            }
        };
    };
}

function ui(sn, tn) {
    {
        if (((!(sn.bq > 0.5)) && ((global.lq == -1)))) {
            {
                sn.yn(qp(-8, -6));
                sn.rp = 270;
                sn.co = 0.2;
                sn.bq = 1;
                global.lq = sn.mq;
            }
        };
    };
}

function wi(sn, tn) {
    {
        nq(2, 7);
    };
}

function xi(sn, tn) {
    {
        sn.oq = "";
    };
}

function zi(sn, tn) {
    {
        pq(0);
        qq(0);
        rq(0);
        sn.oq = "";
        if (wp(11) > 0.5) {
            sn.oq = ("att:" + sq(lp(11).uo) + "#deff: " + sq(lp(11).tq))
        };
        sn.uq = ("#Ghp/Ghpmax= " + sq(global.vq) + "/" + sq(global.wq));
        sn.uq += ("#GhpAI/GhpmaxAI= " + sq(global.xq) + "/" + sq(global.yq));
        zq(sn.ah, sn.bh, (sn.oq + sn.uq), 0.7, 0.7, 0);
    };
}

function aj(sn, tn) {
    {;
        global.yp = 0;;
        global.lq = -1;;
        global.ar = 1;
        global.ko = 1;
        kh(sn, tn, 2, 0, 0, 0, 0);
    };
}

function cj(sn, tn) {
    {
        if ((io.jo() == 0)) {
            {
                br(1);
            }
        };
    };
}

function ej(sn, tn) {
    {
        if ((io.jo() == 0)) {
            {
                br(1);
            }
        };
        if (!(cr(0) > 0.5)) {
            {
                dr();
                er(0);
            }
        };
    };
}

function gj(sn, tn) {
    {
        if ((io.jo() == 1)) {
            {
                br(0);
            }
        } else {
            if ((io.jo() == 0)) {
                {
                    fr();
                }
            }
        };
    };
}

function ij(sn, tn) {
    {
        if ((io.jo() == 0)) {
            {
                br(1);
            }
        };
    };
}

function jj(sn, tn) {
    {;
        global.gr = 720;;
        global.wq = 1;
        global.vq = 1;
        global.yq = 1;
        global.xq = 1;
        sn.hr = global.ar;
        sn.ir = 0;
        sn.jr = (io.pp * 2 / ceil((global.ko / 5)));
        sn.kr = -1;
        op(sn, "__alarm__", 7, sn.jr);
        kh(sn, tn, 2, 0, 0, 0, 0);
    };
}

function lj(sn, tn) {
    {
        op(sn, "__alarm__", 7, sn.jr);
        if ((lr(11) < sn.hr)) {
            {
                sn.mr = lp(9).ah;
                sn.nr = lp(9).bh;
                if ((sn.kr == -1)) {
                    {
                        sn.mr = lp(8).ah;
                        sn.nr = lp(8).bh;
                    }
                };
                up(sn.mr, (sn.nr - 40), 11);
            }
        };
        if ((lr(11) >= sn.hr)) {
            {
                sn.kr *= -1;
            }
        };
    };
}

function mj(sn, tn) {
    {
        if (!(cr(0) > 0.5)) {
            {
                dr();
                er(0);
            }
        };
    };
}

function oj(sn, tn) {
    {
        or();
    };
}

function qj(sn, tn) {
    {
        if (pr(17) > 0.5) {
            {
                if (!(wp(3) > 0.5)) {
                    {
                        up((qr(io, "__view_xview__", 0) + 50), (qr(io, "__view_yview__", 0) + 50), 3);
                    }
                } else {
                    {
                        {
                            var rr = sr(3);
                            for (var tr in rr) {
                                var ur = rr[tr]; {
                                    vr(ur);
                                }
                            }
                        };
                    }
                };
            }
        };
    };
}

function rj(sn, tn) {
    {
        if ((io.jo() == 1)) {
            {
                br(0);
            }
        };
        nq(1, 6);
    };
}

function sj(sn, tn) {
    {};
}

function tj(sn, tn) {
    {
        sn.wr = 1;
        sn.xr = 0;
        sn.yr = 0;
        sn.zr = 0;
        sn.xp = 0;
        sn.xn = 0;
        sn.wn = "normal";
        if (wp(10) > 0.5) {
            {
                if ((sn.ah < lp(10).ah)) {
                    {
                        sn.fo = (qr(io, "__view_xview__", 0) + 50);
                        sn.vn = (lp(10).ah - (as(2) / 2) - 50);
                    }
                } else {
                    {
                        sn.fo = (lp(10).ah + (as(2) / 2) + 50);
                        sn.vn = (qr(io, "__view_xview__", 0) + qr(io, "__view_wview__", 0) - 50);
                    }
                };
            }
        };
        ih(sn, tn, global.lq);
    };
}

function vj(sn, tn) {
    {
        if (sn.wr > 0.5) {
            {
                sn.bs = 1;
            }
        } else {
            {
                sn.bs = gh(sn, tn);
            }
        };
        br(sn.bs);
    };
}

function wj(sn,
    tn) {
    {
        if (!(sn.xr > 0.5)) {
            {
                if (wp(10) > 0.5) {
                    {
                        sn.gq(hq((lp(10).ah - sn.ah)));
                    }
                };
                if ((((sn.wn == "jump")) && ((sn.qm > 0)) && ((sn.bh > global.gr)))) {
                    {
                        sn.wn = "normal";
                        sn.tp(0);
                        sn.co = 0;
                        if ((((lr(14) < 10)) && ((cs(100) > 60)))) {
                            {
                                up(sn.ah, sn.bh, 14);
                            }
                        };
                    }
                };
                if (!(sn.yr > 0.5)) {
                    {
                        sn.iq((hq(sn.ds) * (1 + (sn.qm / 20 * +1))));
                    }
                } else {
                    {
                        sn.gq(sn.fq - (hq(sn.fq) * 0.02));
                        sn.iq(sn.ds + 0.03);
                        if ((abs(sn.fq) < 1)) {
                            {
                                sn.gq((hq(sn.fq) * 1));
                                sn.yr = 0;
                            }
                        };
                    }
                }; if (sn.zr > 0.5) {
                    {
                        sn.jq(go(-5, 5));
                    }
                } else {
                    {
                        sn.jq(0);
                    }
                }; if (((sn.wr > 0.5) && ((global.vq <= 0)))) {
                    {
                        sn.xr = 1;
                        sn.yn(-6);
                        op(sn,
                            "__alarm__", 11, (3 * io.pp));
                    }
                } else {
                    if (((!(sn.wr > 0.5)) && ((global.xq <= 0)))) {
                        {
                            sn.xr = 1;
                            sn.yn(-6);
                            op(sn, "__alarm__", 11, (3 * io.pp));
                        }
                    }
                };
            }
        } else {
            {
                sn.co = 0.25;
                sn.jq(sn.kq + 18);
            }
        };
    };
}

function yj(sn, tn) {
    {
        if (sn.wr > 0.5) {
            eh(sn, tn, "r")
        };
    };
}

function ak(sn, tn) {
    {
        if (sn.wr > 0.5) {
            eh(sn, tn, "u")
        };
    };
}

function ck(sn, tn) {
    {
        if (sn.wr > 0.5) {
            eh(sn, tn, "l")
        };
    };
}

function dk(sn, tn) {
    {
        if (sn.wr > 0.5) {
            {
                if ((io.dq < (sn.ah - (sn.es() * 0.5)))) {
                    {
                        eh(sn, tn, "l");
                    }
                } else {
                    if ((io.dq > (sn.ah + (sn.es() * 0.5)))) {
                        {
                            eh(sn, tn, "r");
                        }
                    }
                }; if ((io.eq < (sn.bh - (sn.fs() * 0.5)))) {
                    {
                        eh(sn,
                            tn, "u");
                    }
                };
            }
        };
    };
}

function ek(sn, tn) {
    {
        global.wq = sn.mo;
        global.vq = sn.mo;
    };
}

function fk(sn, tn) {
    {
        if (!(sn.yr > 0.5)) {
            {
                sn.gq(sn.fq * 1.1);
                sn.iq(sn.ds * 0.9);
                sn.yr = 1;
            }
        };
    };
}

function gk(sn, tn) {
    {
        gs(sn, tn);
        sn.wr = 0;
        ih(sn, tn, hh(sn, tn));
    };
}

function hk(sn, tn) {
    {
        gs(sn, tn);
        if (wp(11) > 0.5) {
            {
                if ((lp(11).ah < lp(10).ah)) {
                    {
                        fh(sn, tn, "m");
                    }
                } else {
                    if ((lp(11).ah > (sn.ah - ((sn.bh - lp(11).bh) / 2)))) {
                        {
                            fh(sn, tn, "r");
                        }
                    } else {
                        if ((lp(11).ah < (sn.ah - 100))) {
                            {
                                fh(sn, tn, "l");
                            }
                        } else {
                            {
                                fh(sn, tn, "u");
                            }
                        }
                    }
                };
            }
        };
    };
}

function ik(sn, tn) {
    {
        global.yq = (sn.mo + floor((global.ko / 2)));
        global.xq = global.yq;
        sn.qo *= (1 + (floor((global.ko / 2)) / 10));
        sn.ro *= (1 + (floor((global.ko / 2)) / 10));
    };
}

function jk(sn, tn) {
    {
        sn.yr = 0;
        sn.xp = 0;
    };
}

function kk(sn, tn) {
    {
        if (sn.yr > 0.5) {
            {
                sn.gq(sn.fq - 0.02);
                sn.iq(sn.ds + 0.03);
                if ((sn.ds > 1)) {
                    {
                        sn.gq(1);
                        sn.iq(1);
                        sn.yr = 0;
                    }
                };
            }
        };
    };
}

function lk(sn, tn) {
    {
        sn.yr = 1;
        sn.iq(0.9);
        sn.gq(1.1);
        for (sn.hs = 0;
            (sn.hs < qp(4, 10)); sn.hs += 1) {
            if (((lr((14 < 15)) > 0.5) && ((cs(100) > 80)))) {
                {
                    up(sn.ah, (sn.bh - 50), 14);
                }
            };
        };
    };
}

function mk(sn, tn) {
    {
        sn.rp = 270;
        sn.co = 1;
        sn.uo = 1;
        sn.is = sn.bh;
        sn.js = (-4);
        sn.tq = 0;
        if (wp(8) > 0.5) {
            {
                lp(8).iq(1);
                lp(8).zr = 0;
            }
        };
        if (wp(9) > 0.5) {
            {
                lp(9).iq(1);
                lp(9).zr = 0;
            }
        };
        sn.to = 0;
        sn.vp = (io.pp * 0.15);
        op(sn, "__alarm__", 8, sn.vp);
    };
}

function ok(sn, tn) {
    {
        if ((sn.ah > lp(10).ah)) {
            global.xq -= 1
        } else {
            global.vq -= 1
        };
        up(sn.ah, sn.bh, 23);
        for (sn.hs = 0;
            (sn.hs < qp(8, 15)); sn.hs += 1) {
            up(sn.ah, sn.bh, 14);
        };
    };
}

function pk(sn, tn) {
    {
        op(sn, "__alarm__", 8, sn.vp);
        if (sn.to > 0.5) {
            {
                up(sn.ah, sn.bh, 22);
            }
        };
    };
}

function qk(sn, tn) {
    {
        sn.jq(sn.kq + (hq(sn.ks) * (1 + (abs(sn.ks) / 5))));
        if ((sn.bh > global.gr)) {
            {
                vr(sn);
            }
        };
        if ((((sn.is > sn.bh)) || ((sn.ks < 2)))) {
            {
                sn.ks *= 1.02;
            }
        };
    };
}

function rk(sn, tn) {
    {
        if ((sn.js != tn.hm)) {
            {
                sn.js = tn.hm;
                sn.vo = 6;
                if ((cs(100) > 50)) {
                    sn.vo = 7
                };
                ls(sn, sn.vo, qp(5, 10), 1, 0);
            }
        };
    };
}

function sk(sn, tn) {
    {
        if ((sn.js != tn.hm)) {
            {
                sn.js = tn.hm;
                if ((cs(100) > 50)) {
                    {
                        lp(sn.js).ro *= 1.2;
                    }
                } else {
                    if ((lp(sn.js).ro > 5)) {
                        {
                            lp(sn.js).ro *= 0.9;
                        }
                    }
                };
                sn.tq = go(tn.oo, tn.po);
                if ((abs(sn.uo) <= sn.tq)) {
                    {
                        up(sn.ah, sn.bh, 13);
                        sn.uo = go(tn.qo, tn.ro);
                        if ((tn.wn == "jump")) {
                            {
                                sn.uo *= 1.2;
                            }
                        };
                        sn.ms = sn.uo;
                        if ((sn.ms < 4)) {
                            sn.ms = 4
                        } else {
                            if ((sn.ms > 8)) {
                                sn.ms = 8
                            }
                        };
                        sn.vo = jh(sn, tn);
                        if ((((lp(10).ah - sn.ah) * (lp(10).ah - ns(sn.vo,
                            0))) < 0)) {
                            {
                                os(sn.vo, -1, 1);
                            }
                        };
                        ls(sn, sn.vo, sn.ms, 0, 0);
                        if (((!(cr(2) > 0.5)) && (!(cr(3) > 0.5)))) {
                            {
                                if ((cs(100) > 45)) {
                                    er(2)
                                } else {
                                    er(3)
                                };
                            }
                        };
                    }
                } else {
                    {
                        tn.zr = 1;
                    }
                };
            }
        };
    };
}

function tk(sn, tn) {
    {
        sn.ps = sn.mq;
        sn.xp = 0.6;
    };
}

function uk(sn, tn) {
    {
        if ((sn.mq < sn.ps)) {
            {
                vr(sn);
            }
        };
        sn.ps = sn.mq;
    };
}

function wk(sn, tn) {
    {
        sn.ps = sn.mq;
        sn.qs(65535);
        sn.gq(0.5);
        sn.iq(sn.fq);
        sn.xp = 2;
    };
}

function xk(sn, tn) {
    {
        if ((sn.mq < sn.ps)) {
            {
                vr(sn);
            }
        };
        sn.ps = sn.mq;
    };
}

function yk(sn, tn) {
    {
        sn.xp = 0;
        sn.lo(cs(sn.rs()));
        sn.yn(go(-2, -0.5));
        sn.ao(go(-1, 1));
        sn.co = 0.02;
        sn.rp = 270;
    };
}

function zk(sn, tn) {
    {
        if ((sn.bh > global.gr)) {
            {
                sn.ss -= 0.05;
                if ((sn.ss < 0.1)) {
                    {
                        vr(sn);
                    }
                };
            }
        };
    };
}

function al(sn, tn) {
    {
        ts(sn, tn.ah, tn.bh, ((sn.ch + tn.ch) / 4));
        sn.us(sn.vs + 180);
    };
}

function bl(sn, tn) {
    {
        sn.xp = 0;
        sn.lo(cs(sn.rs()));
        sn.yn(go(-5, 1));
        sn.ao(go(-10, -1));
        sn.co = 0.11;
        sn.rp = 270;
        if ((sn.ah < lp(10).ah)) {
            sn.ao(sn.pm * -1)
        };
    };
}

function cl(sn, tn) {
    {
        if ((sn.bh > (global.gr - cs(100)))) {
            {
                sn.ss -= 0.05;
                if ((sn.ss < 0.1)) {
                    {
                        vr(sn);
                    }
                };
            }
        };
    };
}

function dl(sn, tn) {
    {
        ts(sn, tn.ah, tn.bh, ((sn.ch + tn.ch) / 4));
        sn.us(sn.vs + 180);
    };
}

function el(sn, tn) {
    {
        sn.jr = (io.pp * 0.25);
        sn.vp = (io.pp * 0.6);
        op(sn, "__alarm__", 7, sn.jr);
        op(sn, "__alarm__", 8, sn.vp);
        if ((abs((global.vq / global.wq)) > abs((global.xq / global.yq)))) {
            {
                sn.ws = (100 * global.vq / global.wq);
            }
        } else {
            {
                sn.ws = (100 * global.xq / global.yq);
            }
        };
        sn.ws = ((sn.ws / 2) + 5);
        if (!(cr(1) > 0.5)) {
            {
                dr();
                er(1);
            }
        };
    };
}

function fl(sn, tn) {
    {
        op(sn, "__alarm__", 8, sn.vp);
        if ((lr(15) < sn.ws)) {
            {
                up(sn.ah, sn.bh, 15);
                up(sn.ah, sn.bh, 15);
            }
        };
    };
}

function gl(sn, tn) {
    {
        op(sn, "__alarm__", 7, sn.jr);
        if ((lr(15) < sn.ws)) {
            {
                up(sn.ah, sn.bh, 15);
            }
        };
    };
}

function hl(sn, tn) {
    {
        sn.jr = (io.pp * 1.5);
        op(sn, "__alarm__", 7, sn.jr);
        if ((abs((global.vq / global.wq)) > abs((global.xq / global.yq)))) {
            {
                sn.ws = (20 * global.vq / global.wq);
            }
        } else {
            {
                sn.ws = (20 * global.xq / global.yq);
            }
        };
        sn.ws = ((sn.ws / 2) + 5);
    };
}

function il(sn, tn) {
    {
        op(sn, "__alarm__", 7, sn.jr);
        if ((lr(14) < sn.ws)) {
            {
                up(qp(lp(8).fo, lp(9).vn), (qr(io, "__view_yview__", 0) - 50), 14);
            }
        };
    };
}

function jl(sn, tn) {
    {
        sn.ao(go(-0.5, -0.1));
        sn.gq(go(0.5, 1.2));
        sn.iq(sn.fq);
        sn.ss = go(0.4, 0.9);
        sn.xs((qp(-10, 10) * 100));
    };
}

function kl(sn, tn) {
    {
        ys(sn, 0);
        sn.ao(go(-0.5, -0.1));
        sn.gq(go(0.5, 1.2));
        sn.iq(sn.fq);
        sn.ss = go(0.4, 0.9);
        sn.xs((qp(-10, 10) * 100));
    };
}

function ll(sn, tn) {
    {
        sn.gq(1);
    };
}

function ml(sn, tn) {
    {
        ys(sn, 0);
        sn.ao(go(-0.5, -0.1));
        sn.gq(go(0.5, 1.2));
        sn.iq(sn.fq);
        sn.ss = go(0.4, 0.9);
        sn.xs((qp(-10, 10) * 100));
    };
}

function nl(sn, tn) {
    {
        sn.zs = 6;
        sn.at = 7;
        sn.mo = 100;
        sn.no = sn.mo;
        sn.bt = sn.no;
        sn.xr = 0;
    };
}

function ol(sn, tn) {
    {
        if ((global.vq > global.wq)) {
            global.vq = global.wq
        } else {
            if ((global.vq < 0)) {
                global.vq = 0
            }
        };
        sn.no = global.vq;
        sn.mo = global.wq;
        if ((sn.no < 0)) {
            sn.no = 0
        } else {
            if ((sn.no > sn.mo)) {
                sn.no = sn.mo
            }
        }; if ((abs((sn.bt - sn.no)) < 0.5)) {
            sn.bt = sn.no
        } else {
            if ((sn.bt > sn.no)) {
                sn.bt -= 0.4
            } else {
                if ((sn.bt < sn.no)) {
                    sn.bt += 0.25
                } else {
                    sn.bt = sn.no
                }
            }
        };
        ct(sn, sn.zs, -1, sn.ah, sn.bh);
        dt(sn, sn.at, -1, 0, 0, floor((sn.bt / sn.mo * sn.es())), sn.fs(), sn.ah, sn.bh);
        if ((((sn.no <= 0)) && (!(sn.xr > 0.5)))) {
            {
                sn.rp = 270;
                sn.co = 0.1;
                sn.xr = 1;
                up((lp(9).vn + 50), (io.et / 2), 16);
            }
        } else {
            if (sn.xr > 0.5) {
                {
                    sn.jq(sn.kq + 10);
                }
            }
        };
    };
}

function pl(sn, tn) {
    {
        sn.zs = 6;
        sn.at = 7;
        sn.mo = 100;
        sn.no = sn.mo;
        sn.bt = sn.no;
        sn.xr = 0;
    };
}

function ql(sn, tn) {
    {
        if ((global.xq > global.yq)) {
            global.xq = global.yq
        } else {
            if ((global.xq < 0)) {
                global.xq = 0
            }
        };
        sn.no = global.xq;
        sn.mo = global.yq;
        if ((sn.no < 0)) {
            sn.no = 0
        } else {
            if ((sn.no > sn.mo)) {
                sn.no = sn.mo
            }
        }; if ((abs((sn.bt - sn.no)) < 0.5)) {
            sn.bt = sn.no
        } else {
            if ((sn.bt > sn.no)) {
                sn.bt -= 0.4
            } else {
                if ((sn.bt < sn.no)) {
                    sn.bt += 0.25
                } else {
                    sn.bt = sn.no
                }
            }
        };
        ct(sn, sn.zs, -1, sn.ah, sn.bh);
        dt(sn, sn.at, -1, 0, 0, (sn.bt / sn.mo * sn.es()), sn.fs(), sn.ah, sn.bh);
        if ((((sn.no <= 0)) && (!(sn.xr > 0.5)))) {
            {
                sn.rp = 270;
                sn.co = 0.1;
                sn.xr = 1;
                up((lp(8).fo - 50), (io.et / 2), 16);
            }
        } else {
            if (sn.xr > 0.5) {
                {
                    sn.jq(sn.kq + 10);
                }
            }
        };
    };
}

function rl(sn,
    tn) {
    {
        sn.ss = 0.4;
    };
}

function sl(sn, tn) {
    {
        sn.ss -= 0.03;
        if ((sn.ss < 0.05)) {
            {
                vr(sn);
            }
        };
    };
}

function tl(sn, tn) {
    {
        sn.co = 0.1;
        sn.yn(go(-3, -6));
        sn.ao(go(4, 6));
        if ((sn.ah > lp(10).ah)) {
            sn.ao(-abs(sn.pm))
        } else {
            sn.ao(abs(sn.pm))
        };
        sn.qs(16776960);
    };
}

function ul(sn, tn) {
    {
        sn.jq(sn.kq + (sn.pm * 2));
    };
}

function vl(sn, tn) {
    {
        vr(sn);
    };
}

function wl(sn, tn) {
    {
        nq(1, 6);
    };
}
var ft = [];
var gt = "None";
var ht = 0;
var it = 0;

function log(jt) {
    setTimeout(function () {
        throw new kt(jt)
    }, 0)
}

function lt(mt) {
    for (var xh in ft) {
        if (ft[xh] == mt) {
            return xh
        }
    }
    log("Failed to find pre-exisiting mouse device index");
    return -1
}

function nt(mt) {
    var ot = -1;
    for (var xh in ft) {
        if ((ft[xh] == mt) || (ft[xh] == -1)) {
            ot = xh;
            break
        }
    }
    if (ot == -1) {
        ot = ft.length
    }
    ft[ot] = mt;
    return ot
}

function pt(event) {
    for (var qt = 0; qt < event.changedTouches.length; qt++) {
        var rt = event.changedTouches[qt];
        var type = "";
        var ot = -1;
        gt = event.type;
        switch (event.type) {
        case "touchstart":
            ot = nt(rt.st);
            break;
        case "touchend":
            ot = lt(rt.st);
            ft[ot] = -1;
            break;
        case "touchmove":
            ot = lt(rt.st);
            break;
        default:
            return
        }
        if (ot == 0) {
            if (tt != null) {
                ut = rt.screenX;
                vt = rt.screenY
            }
            switch (event.type) {
            case "touchstart":
                wt = 1;
                break;
            case "touchmove":
                wt = 1;
                break;
            case "touchend":
                wt = 0;
                break
            }
        }
        xt[ot].ah = rt.screenX;
        xt[ot].bh = rt.screenY;
        ht = rt.screenX;
        it = rt.screenY;
        switch (event.type) {
        case "touchstart":
            xt[ot].yt = zt | au | bu;
            break;
        case "touchend":
            xt[ot].yt = 0;
            break;
        case "touchmove":
        default:
            break;
        }
        event.preventDefault()
    }
}

function cu() {
    du.ontouchstart = pt;
    du.ontouchmove = pt;
    du.ontouchend = pt;
    du.ontouchcancel = pt
}
var eu, fu, gu, hu, iu, ju, ku;

function lu(mu, nu) {
    this.ou = [];
    this.pu = mu;
    this.qu = nu;
    var ru = mu * nu;
    for (var xh = 0; xh < ru; xh++) {
        this.ou[xh] = null
    }
}
lu.prototype.su = function (tu) {
    this.pu = tu.pu;
    this.qu = tu.qu;
    this.ou = tu.ou.slice()
};

function uu() {
    var vu = new wu();
    vu.xu = !0;
    return yu.zu(vu)
}

function av(bv, cv) {
    var dv = yu.ev(bv);
    if (dv) {
        return dv.zu(cv)
    }
    kt("Error: invalid ds_list ID (ds_list_add)");
    return -1
}

function fv() {
    var gv = {};
    var hm = hv.zu(gv);
    return hm
}

function iv(bv) {
    hv.jv(bv)
}

function kv(bv) {
    var gv = hv.ev(bv);
    if (gv) {
        var lv = {};
        hv.mv(bv, lv)
    }
}

function nv(bv, ov, cv) {
    var gv = hv.ev(bv);
    if (gv) {
        if (gv[ov] != undefined) {
            kt("Error: KEY(" + ov + ") already present in ds_map[" + bv + "], you can not add a key twice.")
        }
        gv[ov] = cv
    }
}
var pv = !1;
var qv = 'Trying to stop non-existing sound.',
    rv = 'Trying to draw a non-existing sprite.',
    sv = 'Trying to draw a non-existing background.',
    tv = 'Cannot compare arguments.',
    uv = 'Trying to replace non-existing resource.',
    vv = 'File does not exist.',
    wv = 'The particle emitter must first be created.';
var xv = -1,
    yv = [],
    zv = [];

function ys(aw, bw) {
    var cw = dw(bw);
    aw.cw(aw, (cw == 0) || (cw == 2) ? !0 : !1, (cw == 1) || (cw == 2) ? !0 : !1)
}

function nq(ew, fw) {
    br(dw(ew))
}

function gs(aw, gw) {
    if (!aw) return;
    hw(aw, gw)
}
var iw = 1970;
var jw = 1;
var kw = 1;
var lw = 365.25;
var mw = 30.4375;
var nw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var ow = [];

function pw(qw) {
    var rw = new Date();
    rw.setTime(qw);
    return (rw.getHours() - rw.getUTCHours()) * 60 * 60 * 1000
}
var sw = [];
var tw = [];
var uw = [];
var vw = Date.now();
var ww = function (xw) {
    if (yw) {
        var zw = String.fromCharCode(0x0a);
        xw = xw.replace('<b>', '').replace('</b>', '');
        var ax = document.getElementById('debug_console');
        var bx = Date.now() - vw;
        if (!ax) {
            alert(xw)
        } else {
            ax.value += xw + zw;
            var cx = ax.textLength
        }
        vw = Date.now()
    }
};

function dx() {
    var bm;
    for (bm = 0; bm < arguments.length;
        ++bm) {
        ww(arguments[bm])
    }
}

function kt() {
    var bm;
    for (bm = 0; bm < arguments.length; ++bm) {
        ww(arguments[bm])
    }
}

function ex(fx) {
    if (!uw[fx]) {
        uw[fx] = !0;
        dx(fx)
    }
}

function gx(fx) {
    if (!sw[fx]) {
        sw[fx] = !0;
        var hx = "Error: function " + fx + " is not supported.";
        dx(hx)
    }
}

function ix(fx) {
    if (!sw[fx]) {
        sw[fx] = !0;
        var hx = "Error: function " + fx + " is not yet implemented";
        dx(hx)
    }
}

function jx() {
    this.kx = "";
    this.lx = 0;
    this.mx = !1;
    this.nx = !1;
    this.ox = ""
}
jx.prototype.px = function () {
    var qx;
    var xh = this.lx;
    var rx = this.kx;
    while (xh < rx.length) {
        var yh = rx.charCodeAt(xh);
        if (yh == 0x0d || yh == 0x0a) {
            xh++;
            yh = rx.charCodeAt(xh);
            if (yh == 0x0d || yh == 0x0a) {
                xh++
            }
            break
        } else {
            xh++
        }
    }
    this.lx = xh
};
jx.prototype.sx = function () {
    var qx;
    var xh = this.lx;
    var rx = this.kx;
    while (xh < rx.length) {
        var yh = rx.charCodeAt(xh);
        if (yh == 0x0d || yh == 0x0a || yh == 0x09 || yh == 0x20) {
            xh++
        } else {
            break
        }
    }
    this.lx = xh
};

function rq(tx) {
    ux.vx = tx
}

function qq(tx) {
    ux.wx = tx
}

function pq(xx) {
    ux.yx = xx
}

function zx(ay, by, fx) {
    ux.cy(fx.toString(), ay, by, -1, -1, 0, 1, 1)
}

function zq(ay, by, fx, dy, ey, fy) {
    ux.cy(fx.toString(), ay, by, -1, -1, fy, dy, ey)
}

function gy(bv) {
    var hy = ux.ev(bv);
    if (!hy) return "";
    return hy.iy
}
var jy = gy;

function ky(ly, my, ny, oy, py, qy, ry) {
    var hy = new sy();
    hy.ty = !0;
    hy.dg = "fnt_" + ly;
    hy.iy = ly;
    hy.mh = my;
    hy.bold = ny;
    hy.nh = oy;
    hy.oh = py;
    hy.ph = qy;
    hy.uy = my + "pt " + ly + " ";
    if (ny) hy.uy = hy.uy + "bold ";
    if (oy) hy.uy = hy.uy + "Italic ";
    if (ry) {
        return ux.vy(hy)
    } else {
        return hy
    }
}
var wy = xy;

function lr(yy) {
    return zy.ev(yy).az.length;
}

function bz() {
    cz[0] = cz[1] = cz[2] = cz[3] = cz[4] = cz[5] = cz[6] = cz[7] = cz[8] = cz[9] = 0;
    dz[0] = dz[1] = dz[2] = dz[3] = dz[4] = dz[5] = dz[6] = dz[7] = dz[8] = dz[9] = ez;
}

function fz(gz, hz,
    iz) {
    var jz, kz, lz, mz, nz, oz;
    jz = (gz >> 16) & 0xff;
    lz = (gz >> 8) & 0xff;
    nz = (gz & 0xff);
    kz = (hz >> 16) & 0xff;
    mz = (hz >> 8) & 0xff;
    oz = (hz & 0xff);
    var pz = 1.0 - iz;
    var qz = dw(jz * pz + kz * iz);
    var rz = dw(lz * pz + mz * iz);
    var sz = dw(nz * pz + oz * iz);
    var tz = ((qz & 0xff) << 16) | ((rz & 0xff) << 8) | (sz & 0xff);
    return tz
}

function uz(gz, hz, iz) {
    return fz(gz, hz, iz)
}

function vz(wz, gw, xz, yz) {
    var zz = aab.ev(xz);
    if ((zz != null) && (zz != undefined)) {
        var bab = zz.cab[yz];
        if ((bab != null) && (bab != undefined)) {
            bab.dab(wz, wz)
        }
    }
}
var eab = !0;

function hw(wz, fab) {
    if (wz.gab.hab != null) {
        var iab = wz.jab;
        var gab = wz.gab;
        wz.jab = kab.lab;
        wz.gab = kab.hab;
        wz.mab(nab, oab, wz, fab);
        wz.jab = iab;
        wz.gab = gab;
    }
}
var pab = dx;
var qab = rab;

function rab(sab, tab) {
    uab.vab();
    var wab = [];
    wab[0] = 1;
    wab[1] = 0;
    wab[2] = 0;
    wab[3] = 1;
    wab[4] = 0;
    wab[5] = 0;
    uab.xab(wab[0], wab[1], wab[2], wab[3], wab[4], wab[5]);
    if (!uab.clearRect || sab != 0 || tab != 0) {
        uab.globalAlpha = tab;
        uab.fillStyle = yab(zab(sab), tab);
        uab.globalCompositeOperation = 'copy';
        uab.fillRect(abb, bbb, cbb, dbb)
    } else {
        uab.clearRect(abb, bbb, cbb, dbb)
    }
    uab.ebb()
}

function fbb(sab) {
    var gbb = 0.0;
    var hbb = 0.0;
    var ibb = 0.0;
    var jbb = 0.0;
    var kbb = 0.0;
    var lbb = 0.0;
    var rw = 0.0;
    var mbb = 0.0;
    gbb = ((sab >> 16) & 0xff) / 255.0;
    hbb = ((sab >> 8) & 0xff) / 255.0;
    ibb = (sab & 0xff) / 255.0;
    mbb = nbb(nbb(gbb, hbb), ibb);
    lbb = obb(obb(gbb, hbb), ibb);
    rw = lbb - mbb;
    if (lbb == 0) kbb = 0.0;
    else kbb = 1.0 * rw / lbb; if (kbb == 0) jbb = 0.0;
    else if (gbb == lbb) jbb = 60.0 * (hbb - ibb) / rw;
    else if (hbb == lbb) jbb = 120.0 + 60.0 * (ibb - gbb) / rw;
    else jbb = 240.0 + 60.0 * (gbb - hbb) / rw; if (jbb < 0) jbb = jbb + 360.0;
    var pbb;
    pbb = ((Math.floor(lbb * 255.0) << 16) & 0xff) | (Math.floor(kbb * 255.0) << 8) | (Math.floor(jbb * 255.0 / 360.0) & 0xff);
    return pbb
}

function qbb(rbb) {
    sbb = rbb;
    tbb = zab(rbb);
    ubb = vbb(tbb);
    wbb = yab(tbb, xbb)
}
var ybb = zbb;

function zbb(acb, bcb, ccb, dcb, gz, hz, ecb) {
    var width = ccb - acb;
    var height = dcb - bcb;
    fcb = 10;
    var tz = uab.globalAlpha = xbb;
    uab.beginPath();
    uab.moveTo(acb + fcb, bcb);
    uab.lineTo(acb + width - fcb, bcb);
    uab.quadraticCurveTo(acb + width, bcb, acb + width, bcb + fcb);
    uab.lineTo(acb + width, bcb + height - fcb);
    uab.quadraticCurveTo(acb + width, bcb + height, acb + width - fcb, bcb + height);
    uab.lineTo(acb + fcb, bcb + height);
    uab.quadraticCurveTo(acb, bcb + height, acb, bcb + height - fcb);
    uab.lineTo(acb,
        bcb + fcb);
    uab.quadraticCurveTo(acb, bcb, acb + fcb, bcb);
    uab.closePath();
    if (ecb) {
        uab.strokeStyle = yab(zab(gz), 1.0);
        uab.stroke()
    } else {
        uab.fillStyle = yab(zab(gz), 1.0);
        uab.fill()
    }
}
var gcb = hcb;

function hcb(acb, bcb, ccb, dcb, ecb) {
    acb = ~~acb;
    bcb = ~~bcb;
    ccb = ~~ccb;
    dcb = ~~dcb;
    uab.globalAlpha = xbb;
    if (ecb) {
        uab.lineWidth = 1;
        uab.strokeStyle = wbb;
        uab.icb(acb + 0.5, bcb + 0.5, ccb - acb, dcb - bcb)
    } else {
        uab.fillStyle = wbb;
        uab.jcb(acb, bcb, ccb - acb + 1, dcb - bcb + 1)
    }
}
var kcb = lcb;

function lcb(acb, bcb, ccb, dcb, gz, hz, mcb, ncb, ecb) {
    var tz = yab(zab(gz), 1.0);
    uab.globalAlpha = xbb;
    if (ecb) {
        uab.lineWidth = 1;
        uab.strokeStyle = tz;
        uab.icb(acb + 0.5, bcb + 0.5, (ccb - acb), (dcb - bcb))
    } else {
        uab.fillStyle = tz;
        uab.jcb(acb + 0.5, bcb + 0.5, (ccb - acb), (dcb - bcb));
    }
}
var ocb = pcb;

function pcb(acb, bcb, ccb, dcb, gz, hz, qcb, ecb) {
    uab.globalAlpha = xbb;
    uab.lineWidth = 1;
    var rcb = vbb(zab(gz));
    var scb = vbb(zab(hz));
    var tcb;
    if (qcb) {
        tcb = uab.createLinearGradient(acb, bcb, acb, dcb)
    } else {
        tcb = uab.createLinearGradient(acb, bcb, ccb, bcb)
    }
    tcb.addColorStop(0, rcb);
    tcb.addColorStop(1, scb);
    if (ecb) {
        uab.strokeStyle = tcb;
        uab.icb(acb + 0.5,
            bcb + 0.5, ccb - acb, dcb - bcb)
    } else {
        uab.fillStyle = tcb;
        uab.jcb(acb + 0.5, bcb + 0.5, ccb - acb, dcb - bcb)
    }
}
var ucb = vcb;

function vcb(ay, by) {
    uab.globalAlpha = xbb;
    uab.fillStyle = wbb;
    uab.jcb(ay, by, 1, 1)
}

function wcb(acb, bcb, ccb, dcb, mu) {
    xcb(acb, bcb, ccb, dcb, mu, sbb, sbb)
}

function ycb(acb, bcb, ccb, dcb) {
    wcb(acb, bcb, ccb, dcb, 1)
}
var zcb = adb;

function adb(ay, by) {
    var tz = bdb(du, ay, by);
    return tz & 0xffffff
}
var cdb = ddb;

function ddb(acb, bcb, ccb, dcb, edb, fdb, ecb) {
    acb += 0.5;
    bcb += 0.5;
    ccb += 0.5;
    dcb += 0.5;
    edb += 0.5;
    fdb += 0.5;
    uab.globalAlpha = xbb;
    uab.lineWidth = 1;
    if (ecb) {
        uab.strokeStyle = wbb;
        uab.gdb();
        uab.hdb(acb, bcb);
        uab.idb(ccb, dcb);
        uab.idb(edb, fdb);
        uab.idb(acb, bcb);
        uab.jdb();
        uab.kdb()
    } else {
        uab.strokeStyle = wbb;
        uab.lineJoin = "bevel";
        uab.fillStyle = wbb;
        uab.gdb();
        uab.hdb(acb, bcb);
        uab.idb(ccb, dcb);
        uab.idb(edb, fdb);
        uab.idb(acb, bcb);
        uab.ldb();
        uab.jdb();
        uab.kdb();
        uab.lineJoin = "miter"
    }
}
var mdb = ndb;

function ndb(acb, bcb, ccb, dcb, edb, fdb, gz, hz, mcb, ecb) {
    var rcb = vbb(zab(gz) | 0xff000000);
    acb += 0.5;
    bcb += 0.5;
    ccb += 0.5;
    dcb += 0.5;
    edb += 0.5;
    fdb += 0.5;
    uab.globalAlpha = xbb;
    uab.lineWidth = 1;
    if (ecb) {
        uab.strokeStyle = rcb;
        uab.gdb();
        uab.hdb(acb, bcb);
        uab.idb(ccb, dcb);
        uab.idb(edb, fdb);
        uab.idb(acb, bcb);
        uab.jdb();
        uab.kdb()
    } else {
        uab.strokeStyle = rcb;
        uab.lineJoin = "bevel";
        uab.fillStyle = rcb;
        uab.gdb();
        uab.hdb(acb, bcb);
        uab.idb(ccb, dcb);
        uab.idb(edb, fdb);
        uab.idb(acb, bcb);
        uab.ldb();
        uab.jdb();
        uab.kdb();
        uab.lineJoin = "miter"
    }
}
var odb = pdb;

function pdb(acb, bcb, ccb, dcb, qdb, rdb, sdb, tdb, udb, vdb, wdb, xdb) {
    var ydb;
    var zdb;
    var aeb;
    var beb;
    var tz;
    if (wdb) {
        kcb(acb, bcb, ccb, dcb, rdb, rdb, rdb, rdb, !1);
        if (xdb) {
            kcb(acb, bcb, ccb, dcb,
                ceb, ceb, ceb, ceb, !0)
        }
    }
    if (qdb < 0) {
        qdb = 0
    }
    if (qdb > 100) {
        qdb = 100
    }
    var deb = qdb / 100;
    switch (vdb) {
    case 0:
        ydb = acb;
        aeb = bcb;
        zdb = acb + deb * (ccb - acb);
        beb = dcb;
        break;
    case 1:
        ydb = ccb - deb * (ccb - acb);
        aeb = bcb;
        zdb = ccb;
        beb = dcb;
        break;
    case 2:
        ydb = acb;
        aeb = bcb;
        zdb = ccb;
        beb = bcb + deb * (dcb - bcb);
        break;
    case 3:
        ydb = acb;
        aeb = dcb - deb * (dcb - bcb);
        zdb = ccb;
        beb = dcb;
        break;
    default:
        ydb = acb;
        aeb = bcb;
        zdb = acb + deb * (ccb - acb);
        beb = dcb;
        break
    }
    if (qdb > 50) {
        tz = fz(tdb, udb, (qdb - 50.0) / 50.0)
    } else {
        tz = fz(sdb, tdb, qdb / 50.0)
    }
    kcb(ydb, aeb, zdb, beb, tz, tz, tz, tz, !1);
    if (xdb) {
        kcb(ydb, aeb,
            zdb, beb, ceb, ceb, ceb, ceb, !0)
    }
}
var eeb = feb;

function feb(geb, heb, ieb, jeb, mh) {
    var keb = Math.sqrt(((ieb - geb) * (ieb - geb)) + ((jeb - heb) * (jeb - heb)));
    if (keb != 0) {
        if (mh > keb) {
            mh = keb
        }
        var leb = mh * (ieb - geb) / keb;
        var meb = mh * (jeb - heb) / keb;
        ycb(geb, heb, ieb, jeb);
        cdb(ieb - leb - meb / 3.0, jeb - meb + leb / 3.0, ieb, jeb, ieb - leb + meb / 3.0, jeb - meb - leb / 3.0, !1)
    }
}

function neb(acb, bcb, ccb, dcb, ecb) {
    oeb(acb, bcb, ccb, dcb, tbb, tbb, ecb)
}
var oeb = peb;

function peb(ah, bh, geb, heb, gz, hz, qeb) {
    var zh = geb - ah;
    var ai = heb - bh;
    var reb = 0.5522848;
    seb = (zh / 2) * reb, teb = (ai / 2) * reb,
    ueb = ah + zh, veb = bh + ai, web = ah + zh / 2, xeb = bh + ai / 2;
    uab.beginPath();
    uab.moveTo(ah, xeb);
    uab.bezierCurveTo(ah, xeb - teb, web - seb, bh, web, bh);
    uab.bezierCurveTo(web + seb, bh, ueb, xeb - teb, ueb, xeb);
    uab.bezierCurveTo(ueb, xeb + teb, web + seb, veb, web, veb);
    uab.bezierCurveTo(web - seb, veb, ah, xeb + teb, ah, xeb);
    uab.closePath();
    var rcb = yab(zab(gz), 1.0);
    var scb = yab(zab(hz), 1.0);
    var tcb = uab.createRadialGradient(web, xeb, 0, web, xeb, min(zh / 2, ai / 2));
    tcb.addColorStop(0, rcb);
    tcb.addColorStop(1, scb);
    uab.globalAlpha = xbb;
    if (qeb) {
        uab.lineWidth = 1;
        uab.strokeStyle = tcb;
        uab.stroke()
    } else {
        uab.fillStyle = tcb;
        uab.fill()
    }
}
var yeb = zeb;

function zeb(ay, by, afb, gz, hz, ecb) {
    uab.globalAlpha = xbb;
    var rcb = yab(zab(gz), 1.0);
    var scb = yab(zab(hz), 1.0);
    var tcb = uab.createRadialGradient(ay, by, 0, ay, by, afb);
    tcb.addColorStop(0, rcb);
    tcb.addColorStop(1, scb);
    uab.beginPath();
    if (ecb) {
        uab.lineWidth = 1;
        uab.strokeStyle = tcb;
        uab.bfb(ay, by, afb, 0, Math.PI * 2, !0);
        uab.jdb()
    } else {
        uab.fillStyle = tcb;
        uab.bfb(ay, by, afb, 0, Math.PI * 2, !1);
        uab.ldb()
    }
    uab.kdb()
}
var cfb = dfb;

function dfb(ay, by, sab) {
    var rcb = yab(zab(sab), 1.0);
    uab.globalAlpha = xbb;
    uab.fillStyle = rcb;
    uab.jcb(ay, by, 1, 1)
}
var xcb = efb;

function efb(acb, bcb, ccb, dcb, mu, gz, hz) {
    uab.globalAlpha = xbb;
    var rcb = yab(zab(gz), 1.0);
    var scb = yab(zab(hz), 1.0);
    var tcb = uab.createLinearGradient(acb, bcb, ccb, dcb);
    tcb.addColorStop(0, rcb);
    tcb.addColorStop(1, scb);
    uab.strokeStyle = tcb;
    uab.gdb();
    uab.hdb(acb + 0.5, bcb + 0.5);
    uab.idb(ccb + 0.5, dcb + 0.5);
    uab.lineWidth = mu;
    uab.jdb();
    uab.kdb();
}

function ffb(ah, bh, geb, heb, rcb, scb, qeb) {
    oeb(ah, bh, geb, heb, rcb, scb, qeb)
}
var gfb = null;

function wp(yy) {
    var hfb = sr(yy);
    if (hfb != null && hfb.length > 0) {
        for (var ifb in hfb) {
            jfb = hfb[ifb];
            if (!jfb.kfb) return !0
        }
    }
    return !1
}

function lr(yy) {
    var lfb = sr(yy);
    if (lfb == null) return 0;
    var mfb = 0;
    for (var xh = 0; xh < lfb.length; xh++) {
        if (!lfb[xh].kfb) mfb++
    }
    return mfb
}

function nfb(wz, ay, by, yy) {
    var leb = wz.ah;
    var meb = wz.bh;
    wz.ofb(ay, by);
    var hm = pfb(null, Math.floor(yy), !1, qfb, ay, by, function (rfb) {
        if (rfb.sfb(wz, !0)) {
            return rfb.hm
        } else {
            return 0;
        }
    });
    wz.ofb(leb, meb);
    return hm
}

function up(ay, by, yy) {
    var tfb = zy.ev(yy);
    if (!tfb) {
        kt("Error: Trying to create an instance using non-existent object type (" + yy + ")");
        return qfb
    }
    var jfb = ufb.vfb(ay, by, yy);
    jfb.mab(wfb, 0, jfb, jfb);
    return jfb.hm
}

function vr(wz) {
    wz.mab(xfb, 0, wz, wz);
    wz.kfb = !0
}

function yfb(aw, ay, by) {
    var xh;
    var bottom, top;
    var zfb = [];
    var agb = ufb.bgb;
    for (xh in agb.cgb) {
        var jfb = agb.cgb[xh];
        if (jfb.dgb) jfb.egb();
        var fgb = jfb.fgb;
        if (!((ay > fgb.ggb) || (ay < fgb.left) || (by > fgb.bottom) || (by < fgb.top))) {
            zfb[zfb.length] = jfb
        }
    }
    var agb = ufb.bgb;
    for (xh = 0; xh < zfb.length; xh++) {
        vr(zfb[xh])
    }
}

function hgb(aw, igb, jgb) {
    if (jgb) aw.mab(xfb, 0, aw, aw);
    aw.kgb(igb, !0, !1);
    aw.lgb = aw.gab.mgb;
    var ngb = ogb.ev(aw.lgb);
    if (ngb) {
        aw.fgb.left = ngb.fgb.left;
        aw.fgb.ggb = ngb.fgb.ggb;
        aw.fgb.top = ngb.fgb.top;
        aw.fgb.bottom = ngb.fgb.bottom
    }
    if (jgb) aw.mab(wfb, 0, aw, aw)
}

function pgb(aw, igb, jgb) {
    if (!zy.qgb(igb)) {
        dx("Error: Trying to change an instance to an nonexistent object type.");
        return
    }
    hgb(aw, igb, jgb)
}
var rgb = pgb;

function pr(ov) {
    return tt.sgb[ov]
}
var tgb = 0x7fff;
var ugb = 0;
var floor = Math.floor;

function vgb(wgb) {
    var xh = wgb & 0xffffffff;
    var xgb = wgb - xh;
    if ((xh & 1) == 1) {
        if (xgb >= 0.5) {
            return xh + 1
        } else {
            return xh
        }
    } else {
        if (xgb <= 0.5) {
            return xh
        } else {
            return xh + 1
        }
    }
}
var round = vgb;
var dw = vgb;
var abs = Math.abs;

function cos(wgb) {
    var ay = Math.cos(wgb);
    var ru = ~~ (ay * 0x1000000);
    ay = ru / 0x1000000;
    return ay
}

function sin(wgb) {
    var ay = Math.sin(wgb);
    var ru = ~~ (ay * 0x1000000);
    ay = ru / 0x1000000;
    return ay
}

function tan(wgb) {
    var ay = Math.tan(wgb);
    var ru = ~~ (ay * 0x1000000);
    ay = ru / 0x1000000;
    return ay
}

function ygb(acb, bcb, ccb, dcb) {
    var ah = ccb - acb;
    var bh = dcb - bcb;
    if (ah === 0) {
        if (bh > 0) return 270.0;
        else if (bh < 0) return 90.0;
        else return 0.0
    } else {
        var keb = 180.0 * Math.atan2(bh, ah) / zgb;
        keb = (~~floor(keb * 1000000)) / 1000000.0;
        if (keb <= 0.0) {
            return -keb
        } else {
            return (360.0 - keb)
        }
    }
    return pbb
}

function cq(acb, bcb, ccb, dcb) {
    return abs(Math.sqrt(ahb(ccb - acb) + ahb(dcb - bcb)));
}

function nbb(wgb, bhb) {
    if (wgb < bhb) return wgb;
    else return bhb
}

function obb(wgb, bhb) {
    if (wgb > bhb) return wgb;
    else return bhb
}
var max = Math.max;
var min = Math.min;

function chb() {
    return Math.random()
}

function random(dhb) {
    var hq = 1;
    if (dhb != 0) {
        if (dhb < 0) {
            hq = -1
        }
        return chb() * dhb * hq
    }
    return 0
}

function cs(dhb) {
    var qz = chb() * (dhb + 1);
    return~~ qz
}

function go(ehb, fhb) {
    if (ehb == fhb) {
        return ehb
    }
    var ghb, hhb;
    if (ehb > fhb) {
        ghb = fhb;
        hhb = ehb
    } else {
        ghb = ehb;
        hhb = fhb
    }
    var ihb = chb();
    jhb = ghb + (ihb * (hhb - ghb));
    return jhb
}

function qp(ehb, fhb) {
    var ghb, hhb;
    if (ehb > fhb) {
        ghb = fhb;
        hhb = ehb
    } else {
        ghb = ehb;
        hhb = fhb
    }
    var geb = ghb | 0;
    var ieb = hhb | 0;
    var jhb = geb + random(ieb - geb + 1);
    return (jhb | 0)
}

function khb() {
    var lhb = khb.arguments;
    var mhb = khb.arguments.length;
    var bm = Math.floor(random(mhb));
    return lhb[bm]
}

function hq(ay) {
    if (ay == 0) return 0;
    if (ay < 0) return -1;
    return 1
}
var ceil = Math.ceil;

function nhb(ay) {
    return ay - ~~ay
}
var sqrt = Math.sqrt;

function ohb(ay) {
    return ay * ay
}
var phb = Math.pow;
var exp = Math.exp;
var qhb = Math.log;
var rhb = Math.asin;
var shb = Math.acos;
var thb = Math.atan2;

function uhb() {
    var lhb = uhb.arguments;
    var mhb = uhb.arguments.length;
    var mbb = lhb[0];
    for (var xh = 1; xh < mhb; xh++) {
        mbb += lhb[xh]
    }
    return (mbb / mhb)
}

function vhb() {
    var arguments = vhb.arguments;
    if (arguments.length == 0) {
        return 0
    }
    var xh, whb, jhb;
    for (xh = 0; xh < arguments.length; xh++) {
        var xhb = 0;
        var yhb = 0;
        for (whb = 0; whb < arguments.length; whb++) {
            if (arguments[whb] < arguments[xh]) {
                xhb = xhb + 1
            }
            if (arguments[whb] <= arguments[xh]) {
                yhb = yhb + 1
            }
        }
        if ((xhb < (arguments.length / 2)) && (yhb >= (arguments.length / 2))) {
            return arguments[xh];
        }
    }
    dx("Error: was not able to successfully find the median value");
    return 0
}

function zhb(wz, ay, by, aib, bib) {
    if (aib == cib) {
        if (bib) {
            return dib(wz, ay, by)
        } else {
            return eib(wz, ay, by)
        }
    } else {
        return (nfb(wz, ay, by, aib) == qfb)
    }
}

function fib(wz, ay, by, gib, aib, bib) {
    var pbb = !1;
    var hib = 0.0;
    var iib = 0.0;
    var jib = 0.0;
    if ((wz.ah == ay) && (wz.bh == by)) return !0;
    hib = sqrt(ahb(wz.ah - ay) + ahb(wz.bh - by));
    if (hib <= gib) {
        iib = ay;
        jib = by;
        pbb = !0
    } else {
        iib = wz.ah + gib * (ay - wz.ah) / hib;
        jib = wz.bh + gib * (by - wz.bh) / hib;
        pbb = !1
    } if (!zhb(wz, iib, jib,
        aib, bib)) {
        return pbb
    }
    wz.us(ygb(wz.ah, wz.bh, iib, jib));
    wz.ofb(iib, jib);
    return pbb
}

function kib(wz, ay, by, gib, bib) {
    return fib(wz, ay, by, gib, cib, bib)
}

function lib(wz, ay, by, gib, bib) {
    return fib(wz, ay, by, gib, cib, bib)
}

function mib(nib, oib, pib, qib, rib, sib) {
    this.tib = nib;
    this.uib = oib;
    this.vib = pib;
    this.wib = qib;
    this.xib = rib;
    this.yib = sib;
    this.zib = [];
    this.ajb()
};
mib.prototype.ajb = function () {
    var bjb = this.vib * this.wib;
    for (var xh = 0; xh < bjb; xh++) {
        this.zib[xh] = 0
    }
};
var cjb = djb;

function djb(bv) {
    var ejb = fjb.ev(bv);
    if (ejb) {
        uab.globalAlpha = xbb;
        var gjb = yab(0xff0000, 1.0);
        var hjb = yab(0x00ff00, 1.0);
        for (var bh = 0; bh < ejb.wib; bh++) {
            for (var ah = 0; ah < ejb.vib; ah++) {
                var tz = hjb;
                if (ejb.zib[bh + ejb.vib * ah] < 0) tz = gjb;
                uab.fillStyle = tz;
                uab.jcb((ejb.tib + ah * ejb.xib), (ejb.uib + bh * ejb.yib), ejb.xib, ejb.yib)
            }
        }
        return
    }
    kt("Error: invalid mp_grid ID (mp_grid_draw)");
}

function eib(wz, ay, by) {
    var leb, meb, pbb, ijb;
    pbb = !0;
    leb = wz.ah;
    meb = wz.bh;
    wz.ofb(ay, by);
    var cgb = ufb.jjb();
    for (var ifb in cgb) {
        ijb = cgb[ifb];
        if (ijb.kjb) {
            if (wz.sfb(ijb, !0)) {
                pbb = !1;
                break
            }
        }
    }
    wz.ofb(leb, meb);
    return pbb
}

function dib(wz,
    ay, by) {
    var leb, meb, pbb, ijb;
    pbb = !0;
    leb = wz.ah;
    meb = wz.bh;
    wz.ofb(ay, by);
    var cgb = ufb.jjb();
    for (var ifb in cgb) {
        ijb = cgb[ifb];
        if (wz.sfb(ijb, !0)) {
            pbb = !1;
            break
        }
    }
    wz.ofb(leb, meb);
    return pbb
}

function ljb(wz, ay, by, yy) {
    var leb, meb, pbb, ijb;
    pbb = !1;
    leb = wz.ah;
    meb = wz.bh;
    wz.ofb(ay, by);
    var cgb = sr(yy);
    for (var ifb in cgb) {
        ijb = cgb[ifb];
        if (wz.sfb(ijb, !0)) {
            pbb = !0;
            break
        }
    }
    wz.ofb(leb, meb);
    return pbb
}

function ts(wz, ay, by, mjb) {
    wz.ao(ay - wz.ah);
    wz.yn(by - wz.bh);
    wz.tp(mjb)
}

function njb(wz, ay, by, ojb) {
    if (ojb) {
        return dib(wz, ay, by)
    } else {
        return eib(wz,
            ay, by)
    }
}

function pjb(aw, ay, by, ojb) {
    if (ojb) return dib(aw, ay, by);
    else return eib(aw, ay, by)
}

function qjb(rjb) {
    if (zy.ev(rjb) === null) return !1;
    return !0
}
var sjb = tjb;
var ujb = vjb;
var wjb = xjb;
var yjb = zjb;
var akb = bkb;
var ckb = dkb;
var ekb = fkb;
var gkb = hkb;
var ikb = jkb;
var kkb = lkb;
var mkb = nkb;
var okb = pkb;
var qkb = rkb;
var skb = tkb;
var ukb = vkb;
var wkb = xkb;
var ykb = zkb;
var alb = blb;
var clb = dlb;
var elb = flb;
var glb = hlb;
var ilb = jlb;
var klb = llb;
var mlb = nlb;
var olb = plb;
var qlb = rlb;
var slb = tlb;
var ulb = vlb;
var wlb = xlb;
var ylb = zlb;
var amb = bmb;
var cmb = dmb;
var emb = fmb;
var gmb = hmb;
var imb = jmb;
var kmb = lmb;
var mmb = nmb;
var omb = pmb;
var qmb = rmb;
var smb = tmb;
var umb = vmb;
var wmb = xmb;
var ymb = zmb;
var anb = bnb;
var cnb = dnb;
var enb = fnb;
var gnb = hnb;

function ns(rjb, inb) {
    var jnb = knb.wg[rjb];
    if (!jnb) return -1;
    return jnb.lnb(inb)
}

function ls(aw, mnb, mjb, nnb, onb) {
    aw.pnb(mnb, mjb, 1, 0, onb, nnb)
}

function qnb(aw) {
    aw.pnb(-1, 0, 1, 0, !1, 0)
}
var rnb = snb;

function snb(bv, tnb, unb, onb) {
    var jnb = knb.wg[bv];
    if (!jnb) return;
    uab.globalAlpha = xbb;
    uab.strokeStyle = wbb;
    var leb, meb, vnb;
    var wnb = 0;
    var xnb = jnb.ynb(0);
    if (!onb) {
        tnb = tnb - xnb.ah;
        unb = unb - xnb.bh
    } else {
        tnb = 0;
        unb = 0
    }
    wnb = dw(jnb.length / 4.0);
    if (wnb == 0) return;
    var oh = !0;
    uab.gdb();
    for (var xh = 0; xh <= wnb; xh++) {
        xnb = jnb.ynb(xh / wnb);
        if (oh) {
            uab.hdb(tnb + xnb.ah, unb + xnb.bh);
            oh = !1
        } else {
            uab.idb(tnb + xnb.ah, unb + xnb.bh)
        }
    }
    uab.jdb();
    uab.kdb()
}

function os(bv, dy, ey) {
    var jnb = knb.wg[bv];
    if (!jnb) return;
    jnb.znb(dy, ey)
}

function or() {
    aob = ufb.hm
}

function br(ew) {
    aob = ew
}

function fr() {
    br(bob)
}

function er(cob) {
    dob.eob(cob)
}

function dr() {
    dob.fob()
}

function cr(cob) {
    return dob.gob(cob)
}
var hob = 0,
    iob = 1,
    job = 2,
    kob = 3;

function lob(cob) {
    if (ogb.ev(cob) == null) return !1;
    return !0
}

function as(cob) {
    var mob = ogb.ev(cob);
    if (mob == null) return 0;
    return mob.width
}
var nob = oob;

function oob(rjb, ay, by, mu, nu, pob, qob) {
    var rob = document.createElement(sob);
    var tob = rob.getContext('2d');
    uob(tob);
    vob = ogb.ev(rjb);
    vob.wob++;
    rob.width = vob.width;
    rob.height = vob.height;
    tob.xob(du, ay, by, mu, nu, 0, 0, rob.width, rob.height);
    rob.complete = !0;
    vob.wob++;
    var yob = new zob();
    vob.apb[vob.apb.length] = yob;
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = vob.width;
    yob.ai = vob.height;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = yob.zh;
    yob.wm = yob.ai;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = bpb(rob);
    yob.cpb = dpb[yob.zm];
    return rjb
}
var epb = fpb;

function fpb(bv, ay, by, mu, nu, pob, qob, gpb, hpb) {
    var rob = document.createElement(sob);
    var tob = rob.getContext('2d');
    uob(tob);
    rob.width = ipb.ev(bv).width;
    rob.height = ipb.ev(bv).height;
    tob.xob(ipb.ev(bv), 0, 0);
    rob.complete = !0;
    var vob = new jpb();
    var kpb = ogb.lpb(vob);
    vob.dg = "surface.copy";
    vob.width = rob.width;
    vob.height = rob.height;
    vob.fgb = new mpb();
    vob.fgb.ggb = vob.width;
    vob.fgb.bottom = vob.height;
    vob.vg = !0;
    vob.kg = !0;
    vob.preload = !0;
    vob.npb = 0;
    vob.opb = !1;
    vob.lg = gpb;
    vob.mg = hpb;
    vob.ppb = !0;
    vob.wob = 1;
    vob.qpb = 0;
    vob.rpb = !1;
    vob.spb = !1;
    vob.tpb = [];
    vob.apb = [];
    vob.sg = [];
    var yob = new zob();
    vob.apb[0] = yob;
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = vob.width;
    yob.ai = vob.height;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = yob.zh;
    yob.wm = yob.ai;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = bpb(rob);
    yob.cpb = dpb[yob.zm];
    return kpb
}
var upb = vpb;

function vpb(rjb, bv, ay, by, mu, nu, pob, qob) {
    var rob = document.createElement(sob);
    var tob = rob.getContext('2d');
    uob(tob);
    vob = ogb.ev(rjb);
    vob.wob++;
    rob.width = vob.width;
    rob.height = vob.height;
    tob.xob(ipb.ev(bv), 0, 0, mu, nu, 0, 0, rob.width, rob.height);
    rob.complete = !0;
    var yob = new zob();
    vob.apb[vob.apb.length] = yob;
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = vob.width;
    yob.ai = vob.height;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = yob.zh;
    yob.wm = yob.ai;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = bpb(rob);
    yob.cpb = dpb[yob.zm];
    return rjb
}
var wpb = xpb;

function xpb(rjb) {
    var mob = ogb.ev(rjb);
    if (mob == null) return 0;
    var vob = new jpb();
    var kpb = ogb.lpb(vob);
    vob.dg = mob.dg + ".copy";
    vob.width = mob.width;
    vob.height = mob.height;
    vob.fgb.su(mob.fgb);
    vob.vg = mob.vg;
    vob.kg = mob.kg;
    vob.preload = mob.preload;
    vob.npb = mob.npb;
    vob.opb = mob.opb;
    vob.lg = mob.lg;
    vob.mg = mob.mg;
    vob.ppb = !0;
    vob.wob = mob.wob;
    vob.qpb = mob.qpb;
    vob.rpb = mob.rpb;
    vob.spb = mob.spb;
    vob.tpb = [];
    vob.apb = [];
    vob.sg = [];
    for (var xh = 0; xh < mob.wob; xh++) {
        var yob = new zob();
        vob.apb[xh] = yob;
        yob.ppb(mob.apb[xh]);
        var ypb = zpb(mob.apb[xh]);
        yob.zm = bpb(ypb);
        yob.ah = 0;
        yob.bh = 0;
        yob.cpb = dpb[yob.zm]
    }
    return kpb
}

function aqb(bqb, cqb, dqb, eqb, fqb, gqb) {
    var zh = cqb.xm;
    var ai = cqb.ym;
    var hqb = [];
    var iqb = ai * zh;
    for (whb = 0; whb < iqb; whb++) hqb[whb] = !1;
    if (fqb == hob) {
        var jqb = kqb(cqb);
        var bm = 0;
        for (var xh = 0; xh < jqb.length; xh += 4) {
            if (jqb[xh + 3] >= gqb) hqb[bm] = !0;
            else hqb[bm] = !1;
            bm++
        }
    } else {
        switch (fqb) {
        case iob:
            {
                for (var bh = eqb.top; bh <= eqb.bottom; bh++) {
                    for (var ah = eqb.left; ah <= eqb.ggb; ah++) {
                        hqb[ah + (bh * zh)] = !0
                    }
                }
                break
            }
        case job:
            {
                var lqb = (eqb.left + eqb.ggb) / 2;
                var mqb = lqb - eqb.left + 0.5;
                var nqb = (eqb.top + eqb.bottom) / 2;
                var oqb = nqb - eqb.top + 0.5;
                for (var bh = eqb.top; bh <= eqb.bottom; bh++) {
                    for (var ah = eqb.left; ah <= eqb.ggb; ah++) {
                        if ((mqb > 0) && (oqb > 0)) {
                            hqb[ah + (bh * zh)] = ohb((ah - lqb) / mqb) + ohb((bh - nqb) / oqb) < 1
                        }
                    }
                }
                break
            }
        case kob:
            {
                var lqb = (eqb.left + eqb.ggb) / 2;
                var mqb = lqb - eqb.left + 0.5;
                var nqb = (eqb.top + eqb.bottom) / 2;
                var oqb = nqb - eqb.top + 0.5;
                for (var bh = eqb.top; bh <= eqb.bottom; bh++) {
                    for (var ah = eqb.left; ah <= eqb.ggb; ah++) {
                        if ((mqb > 0) && (oqb > 0)) {
                            hqb[ah + (bh * zh)] = Math.abs((ah - lqb) / mqb) + Math.abs((bh - nqb) / oqb) < 1
                        }
                    }
                }
                break
            }
        }
    } if (bqb != null) {
        for (var xh = 0; xh < hqb.length; xh++) {
            if (bqb[xh]) hqb[xh] = !0
        }
    }
    return hqb
}

function pqb(cv) {
    return String.fromCharCode(cv)
}

function qqb(rqb) {
    if (!rqb || rqb == "") return 0;
    return rqb.charCodeAt(0)
}

function sq(yy) {
    if (yy == undefined) {
        return "undefined"
    }
    if ((typeof (yy) == "number") && ((yy | 0) != yy)) {
        return yy.toFixed(2).toString()
    } else if (typeof (yy) == "boolean") {
        if (yy) return "1";
        else return "0"
    } else {
        return yy.toString()
    }
}
sqb = tqb;

function tqb(mu, nu) {
    var uqb = document.createElement(sob);
    uqb.pu = uqb.width = mu;
    uqb.qu = uqb.height = nu;
    uqb.complete = !0;
    uqb.vqb = !1;
    uqb.name = "";
    uqb.uab = uqb.getContext('2d');
    uob(uqb.uab);
    var yob = new zob();
    uqb.wqb = yob;
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = mu;
    yob.ai = nu;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = yob.zh;
    yob.wm = yob.ai;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = ipb.zu(uqb);
    yob.cpb = uqb;
    yob.xqb = [];
    yob.mfb = 0;
    yob.yqb = 4;
    yob.zqb = 0;
    yob.arb = null;
    yob.rob = uqb;
    return yob.zm
}
var brb = crb;

function crb(bv) {
    ipb.jv(bv)
}

function drb(bv) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        uab = uqb.uab;
        erb = !1
    }
}
var frb = grb;

function grb(bv) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        hrb.left = irb.left;
        hrb.top = irb.top;
        hrb.ggb = irb.ggb;
        hrb.bottom = irb.bottom;
        irb.left = 0;
        irb.top = 0;
        irb.ggb = uqb.pu;
        irb.bottom = uqb.qu;
        jrb.su(krb);
        krb.lrb = 0;
        krb.mrb = 0;
        krb.nrb = uqb.pu;
        krb.orb = uqb.qu;
        krb.prb = 0;
        krb.qrb = 0;
        krb.rrb = uqb.pu;
        krb.srb = uqb.qu;
        krb.trb = 0;
        krb.urb = 0;
        krb.vrb = uqb.pu;
        krb.wrb = uqb.qu;
        krb.xrb = krb.trb + krb.vrb;
        krb.yrb = krb.urb + krb.wrb;
        uab = uqb.uab;
        erb = !0
    }
}
var zrb = asb;

function asb() {
    uab = bsb;
    if (erb) {
        irb = hrb;
        krb.su(jrb)
    }
}

function bdb(csb, ay, by) {
    var data = null;
    var dsb = csb.getContext('2d');
    try {
        data = dsb.esb(0, 0, csb.width, csb.height);
    } catch (fsb) {
        return 0xff000000
    }
    gsb = data.data;
    var bm = ((csb.width * by) + ay) * 4;
    var hsb = gsb[bm] & 0xff;
    var isb = gsb[bm + 1] & 0xff;
    var jsb = gsb[bm + 2] & 0xff;
    var ksb = gsb[bm + 3] & 0xff;
    return (hsb | (isb << 8) | (jsb << 16) | (ksb << 24))
}
var lsb = msb;

function msb(bv,
    ay, by) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        return bdb(uqb, ay, by) & 0xffffff
    }
    return 0x00000000
}
var nsb = osb;

function osb(bv, ay, by) {
    var uqb = ipb.ev(bv);
    if (!uqb) return;
    ay = ~~ay;
    by = ~~by;
    uab.xob(uqb, ay, by)
}
var psb = qsb;

function qsb(bv, ay, by, dy, ey, rsb, tab) {
    gx("draw_surface_tiled_ext()")
}

function ssb(tsb, ay, by, usb) {
    var vsb = ipb.ev(tsb);
    var wsb = ipb.ev(usb);
    if (vsb != null && wsb != null) {
        var dsb = vsb.getContext('2d');
        dsb.save();
        dsb.globalCompositeOperation = 'copy';
        dsb.drawImage(wsb, ay, by);
        dsb.restore()
    }
}

function xsb(tsb, ay, by, usb, ysb,
    zsb, atb, btb) {
    var vsb = ipb.ev(tsb);
    var wsb = ipb.ev(usb);
    if (vsb != null && wsb != null) {
        var wab = [];
        var dsb = vsb.getContext('2d');
        dsb.save();
        wab[0] = 1;
        wab[1] = 0;
        wab[2] = 0;
        wab[3] = 1;
        wab[4] = 0;
        wab[5] = 0;
        dsb.setTransform(wab[0], wab[1], wab[2], wab[3], wab[4], wab[5]);
        dsb.beginPath();
        dsb.rect(ay, by, atb, btb);
        dsb.clip();
        dsb.globalCompositeOperation = 'copy';
        dsb.drawImage(wsb, ysb, zsb, atb, btb, ay, by, atb, btb);
        dsb.restore()
    }
}

function ct(wz, ctb, dtb, ay, by) {
    if (dtb < 0) dtb = ~~wz.mq;
    var mob = ogb.ev(ctb);
    if (mob != null) {
        mob.etb(dtb, ay, by, 1)
    }
}

function dt(wz,
    ctb, dtb, nib, oib, ftb, gtb, ay, by) {
    if (dtb < 0) dtb = ~~wz.dtb;
    var mob = ogb.ev(ctb);
    if (mob != null) {
        if (mob.wob <= 0) return;
        dtb = (~~dtb) % mob.wob;
        if (dtb < 0) dtb = dtb + mob.wob;
        htb(mob.apb[dtb], nib, oib, ftb, gtb, ay, by, 1, 1, 0xffffff, 1)
    }
}

function itb(jtb) {
    if (jtb) {
        du.style.cursor = ""
    } else {
        du.style.cursor = "none"
    }
}

function jp(ay, by) {
    var ktb = document.getElementById(sob);
    ktb.style.position = "absolute";
    ktb.style.left = ay + "px";
    ktb.style.top = by + "px"
}

function dp(mu, nu) {
    du.width = mu;
    du.height = nu;
    ltb = mu;
    mtb = nu;
    ntb = du.width;
    otb = du.height;
    ptb(du,
        qtb);
    rtb = qtb.top;
    stb = qtb.left;
    ttb = qtb.ggb;
    utb = qtb.bottom;
    vtb = ntb;
    wtb = otb;
    xtb = mu;
    ytb = ztb = 1;
    aub = 1
}

function gp() {
    return ttb - stb
}

function ip() {
    return utb - rtb
}
var bub;
var cub;
var dub;
var eub;
var fub;
var gub;
var hub;
var iub;
var jub;
var kub;
var lub;
var mub;
var nub = 0;
var oub = aa_1241_kz();

function aa_1241_kz() {
    return 0x87155211
}

function pub() {
    var qub = null;
    if (window.XMLHttpRequest) {
        qub = new XMLHttpRequest()
    }
    if (typeof (XMLHttpRequest) == "undefined") {
        qub = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (rub) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (rub) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (rub) {}
            throw new kt("This browser does not support XMLHttpRequest.")
        }
    }
    this.tub = qub;
    this.uub = !1
}
var vub = new pub();

function wub() {
    return xub
}

function yub() {
    return zub
}

function avb() {
    return bvb
}

function cvb() {
    return dvb
}

function evb() {
    var ru = new Date().getTime() * 1000;
    return ru - bub
}

function fvb() {
    bub = new Date().getTime() * 1000;
    var ru = 0;
    for (var xh = 0; xh < 12; xh++) {
        ow[xh] = ru;
        ru += nw[xh]
    }
    cub = 0;
    dub = 1;
    eub = 2;
    fub = 3;
    gub = 4;
    hub = 5;
    iub = 0;
    jub = 1;
    kub = 2;
    lub = 0;
    mub = 1
}

function gvb() {
    var ru = setTimeout(function () {
        for (var hvb in ogb.jg) {
            ogb.ivb(hvb);
            break
        }
        gvb()
    }, 1000)
}

function jvb(kvb, lvb) {
    for (var mvb in kvb) {
        var nvb = kvb[mvb];
        if (nvb instanceof Array) {
            var ovb = uu();
            av(lvb, ovb);
            jvb(nvb, ovb)
        } else if (typeof (nvb) == "object") {
            var pvb = fv();
            av(lvb, pvb);
            qvb(nvb, pvb)
        } else if (typeof (nvb) == "string") {
            av(lvb, nvb)
        }
    }
}

function qvb(rvb, svb) {
    for (var tvb in rvb) {
        if (rvb.hasOwnProperty(tvb)) {
            var nvb = rvb[tvb];
            if (nvb instanceof Array) {
                var uvb = uu();
                nv(svb, tvb, uvb);
                jvb(nvb, uvb)
            } else if (typeof (nvb) == "object") {
                var vvb = fv();
                nv(svb,
                    tvb, vvb);
                qvb(nvb, vvb)
            } else if (typeof (nvb) == "string") {
                nv(svb, tvb, nvb)
            }
        }
    }
}
var wvb = !1,
    xvb = -1,
    yvb = -1,
    zvb = 0,
    awb = 1,
    bwb = 2,
    cwb = 3,
    dwb = 4,
    ewb = 5,
    fwb = 6,
    gwb = 7,
    hwb = 8,
    iwb = 9,
    jwb = 10,
    kwb = 11,
    lwb = [0, 0, 0],
    mwb = [0, 0, 0],
    nwb = [0, 0, 0, 0, 0, 0],
    owb = [0, 0, 0],
    pwb = [0, 0, 0],
    qwb = [0, 0, 0],
    rwb = [0, 0, 0],
    swb = [0, 0, 0],
    twb = [0, 0, 0],
    uwb = [0, 0, 0],
    vwb = 0,
    wwb = 0;

function xwb() {
    if ((ufb.ywb() <= 30) || (zwb <= 30)) {
        return 1.0
    }
    if ((ufb.ywb() / zwb) < 1.2) {
        return 30.0 / ufb.ywb()
    } else {
        return 30.0 / zwb
    }
}

function axb() {
    if (!xjb(xvb)) {
        xvb = tjb();
        dkb(xvb, 100000)
    }
    if (!xjb(yvb)) {
        yvb = tjb();
        dkb(yvb, -100000)
    }
    if (!wvb) {
        bxb()
    }
}

function bxb() {
    wvb = !0;
    for (var xh = 0; xh <= 5; xh++) {
        nwb[xh] = xkb()
    }
    for (var xh = 0; xh <= 2; xh++) {
        owb[xh] = xkb();
        lwb[xh] = xkb();
        pwb[xh] = xkb();
        mwb[xh] = xkb();
        qwb[xh] = xkb();
        rwb[xh] = xkb();
        swb[xh] = xkb();
        twb[xh] = xkb();
        uwb[xh] = xkb()
    }
    vwb = xkb();
    wwb = xkb()
}

function cxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(nwb[0], exb);
        jlb(nwb[0], 0.1, 0.1, 0.05 * xgb, 0);
        lmb(nwb[0], 0, 360, 0, 0, !1);
        pmb(nwb[0], 0, 360, 0, 0);
        nmb(nwb[0], 2 * xgb, 2 * xgb, -0.1 * xgb, 0);
        bmb(nwb[0], 0.6, 0);
        fmb(nwb[0], dw(10.0 / xgb), dw(15.0 / xgb));
        rkb(dxb, ay, by, nwb[0], sab, 20);
        flb(nwb[1], exb);
        jlb(nwb[1], 0.1, 0.1, 0.1 * xgb, 0);
        lmb(nwb[1], 0, 360, 0, 0, !1);
        bmb(nwb[1], 0.8, 0);
        fmb(nwb[1], dw(15 / xgb), dw(15 / xgb));
        rkb(dxb, ay, by, nwb[1], fxb, 1)
    } else if (my == 2) {
        flb(nwb[4], exb);
        jlb(nwb[4], 0.4, 0.4, 0.2 * xgb, 0);
        lmb(nwb[4], 0, 360, 0, 0, !1);
        pmb(nwb[4], 0, 360, 0, 0);
        nmb(nwb[4], 7 * xgb, 7 * xgb, -0.2 * xgb, 0);
        bmb(nwb[4], 0.6, 0);
        fmb(nwb[4], dw(15 / xgb), dw(20 / xgb));
        rkb(dxb, ay, by, nwb[4], sab, 20);
        flb(nwb[5], exb);
        jlb(nwb[5], 0.4, 0.4, 0.4 * xgb, 0);
        lmb(nwb[5], 0, 360, 0, 0, !1);
        bmb(nwb[5], 0.8, 0);
        fmb(nwb[5],
            dw(20 / xgb), dw(20 / xgb));
        rkb(dxb, ay, by, nwb[5], fxb, 1)
    } else {
        flb(nwb[2], exb);
        jlb(nwb[2], 0.3, 0.3, 0.1 * xgb, 0);
        lmb(nwb[2], 0, 360, 0, 0, !1);
        pmb(nwb[2], 0, 360, 0, 0);
        nmb(nwb[2], 4 * xgb, 4 * xgb, -0.18 * xgb, 0);
        bmb(nwb[2], 0.6, 0);
        fmb(nwb[2], dw(12 / xgb), dw(17 / xgb));
        rkb(dxb, ay, by, nwb[2], sab, 20);
        flb(nwb[3], exb);
        jlb(nwb[3], 0.3, 0.3, 0.2 * xgb, 0);
        lmb(nwb[3], 0, 360, 0, 0, !1);
        bmb(nwb[3], 0.8, 0);
        fmb(nwb[3], dw(17 / xgb), dw(17 / xgb));
        rkb(dxb, ay, by, nwb[3], fxb, 1)
    }
}

function gxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(owb[0], hxb);
        bmb(owb[0], 1,
            0);
        jlb(owb[0], 0.0, 0.0, 0.15 * xgb, 0.0);
        fmb(owb[0], dw(10.0 / xgb), dw(12.0 / xgb));
        rkb(dxb, ay, by, owb[0], sab, 1)
    } else if (my == 2) {
        flb(owb[2], hxb);
        bmb(owb[2], 1, 0);
        jlb(owb[2], 0, 0, 0.4 * xgb, 0);
        fmb(owb[2], dw(18.0 / xgb), dw(20.0 / xgb));
        rkb(dxb, ay, by, owb[2], sab, 1)
    } else {
        flb(owb[1], hxb);
        bmb(owb[1], 1, 0);
        jlb(owb[1], 0, 0, 0.25 * xgb, 0);
        fmb(owb[1], dw(13.0 / xgb), dw(15.0 / xgb));
        rkb(dxb, ay, by, owb[1], sab, 1)
    }
}

function ixb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(lwb[0], hxb);
        bmb(lwb[0], 1, 0);
        jlb(lwb[0], 0, 0, 0.2 * xgb, 0);
        llb(lwb[0], 1, 0.5);
        fmb(lwb[0], dw(10.0 / xgb), dw(12.0 / xgb));
        rkb(dxb, ay, by, lwb[0], sab, 1)
    } else if (my == 2) {
        flb(lwb[2], hxb);
        bmb(lwb[2], 1, 0);
        jlb(lwb[2], 0, 0, 0.6 * xgb, 0);
        llb(lwb[2], 1, 0.5);
        fmb(lwb[2], dw(18.0 / xgb), dw(20.0 / xgb));
        rkb(dxb, ay, by, lwb[2], sab, 1)
    } else {
        flb(lwb[1], hxb);
        bmb(lwb[1], 1, 0);
        jlb(lwb[1], 0, 0, 0.35 * xgb, 0);
        llb(lwb[1], 1, 0.5);
        fmb(lwb[1], dw(13.0 / xgb), dw(15.0 / xgb));
        rkb(dxb, ay, by, lwb[1], sab, 1)
    }
}

function jxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(pwb[1], kxb);
        jlb(pwb[1], 0.1, 0.2, 0, 0);
        nmb(pwb[1], 0.5 * xgb, 3.0 * xgb, 0.0, 0.0);
        pmb(pwb[1], 0, 360, 0, 0);
        bmb(pwb[1], 1, 0.4);
        fmb(pwb[1], dw(15.0 / xgb), dw(25.0 / xgb));
        rmb(pwb[1], 0.10 * xgb, 270);
        rkb(dxb, ay, by, pwb[1], sab, 75)
    } else if (my == 2) {
        flb(pwb[1], kxb);
        jlb(pwb[1], 0.1, 0.2, 0, 0);
        nmb(pwb[1], 0.5 * xgb, 8.0 * xgb, 0.0, 0.0);
        pmb(pwb[1], 0, 360, 0, 0);
        bmb(pwb[1], 1, 0.4);
        fmb(pwb[1], dw(30.0 / xgb), dw(40.0 / xgb));
        rmb(pwb[1], 0.17 * xgb, 270);
        rkb(dxb, ay, by, pwb[1], sab, 250)
    } else {
        flb(pwb[1], kxb);
        jlb(pwb[1], 0.1, 0.2, 0, 0);
        nmb(pwb[1], 0.5 * xgb, 6.0 * xgb, 0.0, 0.0);
        pmb(pwb[1], 0, 360, 0, 0);
        bmb(pwb[1], 1, 0.4);
        fmb(pwb[1], dw(20.0 / xgb),
            dw(30.0 / xgb));
        rmb(pwb[1], 0.15 * xgb, 270);
        rkb(dxb, ay, by, pwb[1], sab, 150)
    }
}

function lxb(dxb, ay, by, my, sab) {
    var xh;
    var xgb = xwb();
    if (my == 0) {
        flb(mwb[0], exb);
        jlb(mwb[0], 0.2, 0.4, -0.01 * xgb, 0);
        bmb(mwb[0], 0.4, 0);
        fmb(mwb[0], dw(25.0 / xgb), dw(25.0 / xgb));
        for (xh = 0; xh <= 5; xh++) {
            rkb(dxb, ay - 5 + mxb(10), by - 5 + mxb(10), mwb[0], sab, 1)
        }
    } else if (my == 2) {
        flb(mwb[2], exb);
        jlb(mwb[2], 0.4, 1, -0.01 * xgb, 0);
        bmb(mwb[2], 0.4, 0);
        fmb(mwb[2], dw(50.0 / xgb), dw(50.0 / xgb));
        for (xh = 0; xh <= 15; xh++) {
            rkb(dxb, ay - 30 + mxb(60), by - 30 + mxb(60), mwb[2], sab, 1)
        }
    } else {
        flb(mwb[1],
            exb);
        jlb(mwb[1], 0.4, 0.7, -0.01 * xgb, 0);
        bmb(mwb[1], 0.4, 0);
        fmb(mwb[1], dw(30.0 / xgb), dw(30.0 / xgb));
        for (xh = 0; xh <= 10; xh++) {
            rkb(dxb, ay - 15 + mxb(30), by - 15 + mxb(30), mwb[1], sab, 1)
        }
    }
}

function nxb(dxb, ay, by, my, sab) {
    var xh;
    var xgb = xwb();
    if (my == 0) {
        flb(qwb[0], exb);
        jlb(qwb[0], 0.2, 0.4, -0.01 * xgb, 0);
        bmb(qwb[0], 0.4, 0);
        nmb(qwb[0], 3.0 * xgb, 4.0 * xgb, 0, 0);
        pmb(qwb[0], 90, 90, 0, 0);
        fmb(qwb[0], dw(25.0 / xgb), dw(25.0 / xgb));
        for (xh = 0; xh <= 5; xh++) {
            rkb(dxb, ay - 5 + mxb(10), by - 5 + mxb(10), qwb[0], sab, 1)
        }
    } else if (my == 2) {
        flb(qwb[2], exb);
        jlb(qwb[2], 0.4, 1, -0.01 * xgb, 0);
        bmb(qwb[2], 0.4, 0);
        nmb(qwb[2], 6.0 * xgb, 7.0 * xgb, 0, 0);
        pmb(qwb[2], 90, 90, 0, 0);
        fmb(qwb[2], dw(50.0 / xgb), dw(50.0 / xgb));
        for (xh = 0; xh <= 15; xh++) {
            rkb(dxb, ay - 30 + mxb(60), by - 30 + mxb(60), qwb[2], sab, 1)
        }
    } else {
        flb(qwb[1], exb);
        jlb(qwb[1], 0.4, 0.7, -0.01 * xgb, 0);
        bmb(qwb[1], 0.4, 0);
        nmb(qwb[1], 5.0 * xgb, 6.0 * xgb, 0, 0);
        pmb(qwb[1], 90, 90, 0, 0);
        fmb(qwb[1], dw(30.0 / xgb), dw(30.0 / xgb));
        for (xh = 0; xh <= 10; xh++) {
            rkb(dxb, ay - 15 + mxb(30), by - 15 + mxb(30), qwb[1], sab, 1)
        }
    }
}

function oxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(rwb[0], pxb);
        jlb(rwb[0], 0.4, 0.3, -0.02 * xgb, 0);
        lmb(rwb[0], 0, 360, 0, 0, !1);
        fmb(rwb[0], dw(20 / xgb), dw(20 / xgb));
        rkb(dxb, ay, by, rwb[0], sab, 1)
    } else if (my == 2) {
        flb(rwb[2], pxb);
        jlb(rwb[2], 1.2, 1.2, -0.04 * xgb, 0);
        lmb(rwb[2], 0, 360, 0, 0, !1);
        fmb(rwb[2], dw(30 / xgb), dw(30 / xgb));
        rkb(dxb, ay, by, rwb[2], sab, 1)
    } else {
        flb(rwb[1], pxb);
        jlb(rwb[1], 0.75, 0.75, -0.03 * xgb, 0);
        lmb(rwb[1], 0, 360, 0, 0, !1);
        fmb(rwb[1], dw(25 / xgb), dw(25 / xgb));
        rkb(dxb, ay, by, rwb[1], sab, 1)
    }
}

function qxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(swb[0], rxb);
        jlb(swb[0], 0.4, 0.4, -0.02 * xgb,
            0);
        lmb(swb[0], 0, 360, 0, 0, !1);
        fmb(swb[0], dw(20 / xgb), dw(20 / xgb));
        rkb(dxb, ay, by, swb[0], sab, 1)
    } else if (my == 2) {
        flb(swb[2], rxb);
        jlb(swb[2], 1.2, 1.2, -0.04 * xgb, 0);
        lmb(swb[2], 0, 360, 0, 0, !1);
        fmb(swb[2], dw(30 / xgb), dw(30 / xgb));
        rkb(dxb, ay, by, swb[2], sab, 1)
    } else {
        flb(swb[1], rxb);
        jlb(swb[1], 0.75, 0.75, -0.03 * xgb, 0);
        lmb(swb[1], 0, 360, 0, 0, !1);
        fmb(swb[1], dw(25 / xgb), dw(25 / xgb));
        rkb(dxb, ay, by, swb[1], sab, 1)
    }
}

function sxb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(twb[0], kxb);
        jlb(twb[0], 0.4, 0.4, -0.02 * xgb, 0);
        lmb(twb[0], 0, 360,
            0, 0, !1);
        fmb(twb[0], dw(20 / xgb), dw(20 / xgb));
        rkb(dxb, ay, by, twb[0], sab, 1)
    } else if (my == 2) {
        flb(twb[2], kxb);
        jlb(twb[2], 1.2, 1.2, -0.04 * xgb, 0);
        lmb(twb[2], 0, 360, 0, 0, !1);
        fmb(twb[2], dw(30 / xgb), dw(30 / xgb));
        rkb(dxb, ay, by, twb[2], sab, 1)
    } else {
        flb(twb[1], kxb);
        jlb(twb[1], 0.75, 0.75, -0.03 * xgb, 0);
        lmb(twb[1], 0, 360, 0, 0, !1);
        fmb(twb[1], dw(25 / xgb), dw(25 / xgb));
        rkb(dxb, ay, by, twb[1], sab, 1)
    }
}

function txb(dxb, ay, by, my, sab) {
    var xgb = xwb();
    if (my == 0) {
        flb(uwb[0], exb);
        jlb(uwb[0], 2, 2, 0, 0);
        llb(uwb[0], 1, 0.5);
        dmb(uwb[0], 0, 0.3, 0);
        fmb(uwb[0],
            dw(100.0 / xgb), dw(100.0 / xgb));
        rkb(dxb, ay, by, uwb[0], sab, 1)
    } else if (my == 2) {
        flb(uwb[2], exb);
        jlb(uwb[2], 8, 8, 0, 0);
        llb(uwb[2], 1, 0.5);
        dmb(uwb[2], 0, 0.3, 0);
        fmb(uwb[2], dw(100.0 / xgb), dw(100.0 / xgb));
        rkb(dxb, ay, by, uwb[02], sab, 1)
    } else {
        flb(uwb[1], exb);
        jlb(uwb[1], 4, 4, 0, 0);
        llb(uwb[1], 1, 0.5);
        dmb(uwb[1], 0, 0.3, 0);
        fmb(uwb[1], dw(100.0 / xgb), dw(100.0 / xgb));
        rkb(dxb, ay, by, uwb[1], sab, 1)
    }
}

function uxb(dxb, ay, by, my, sab) {
    var xh;
    var xgb = xwb();
    flb(vwb, vxb);
    jlb(vwb, 0.2, 0.3, 0.0, 0.0);
    lmb(vwb, 0, 0, 0, 0, !0);
    nmb(vwb, 7 * xgb, 7 * xgb, 0, 0);
    pmb(vwb,
        260, 260, 0, 0);
    zlb(vwb, 0.4);
    fmb(vwb, dw(0.2 * ufb.wxb() / xgb), dw(0.2 * ufb.wxb() / xgb));
    if (my == 0) {
        for (xh = 0; xh <= 1; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb(), -30.0 + mxb(20), vwb, sab, 1)
        }
    } else if (my == 2) {
        for (xh = 0; xh <= 8; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb(), -30.0 + mxb(20), vwb, sab, 1)
        }
    } else {
        for (xh = 0; xh <= 4; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb(), -30.0 + mxb(20), vwb, sab, 1)
        }
    }
}

function yxb(dxb, ay, by, my, sab) {
    var xh;
    var xgb = xwb();
    flb(wwb, zxb);
    jlb(wwb, 0.1, 0.25, 0.0, 0.0);
    zlb(wwb, 0.6);
    lmb(wwb, 0, 360, 0, 0, !1);
    nmb(wwb, 2.5 * xgb, 3.0 * xgb, 0.0, 0.0);
    pmb(wwb,
        240, 300, 0, 20);
    fmb(wwb, dw(0.5 * ufb.wxb() / xgb), dw(0.5 * ufb.wxb() / xgb));
    if (my == 0) {
        for (xh = 0; xh <= 0; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb() - 60, -30.0 + mxb(20), wwb, sab, 1)
        }
    } else if (my == 2) {
        for (xh = 0; xh <= 6; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb() - 60, -30.0 + mxb(20), wwb, sab, 1)
        }
    } else {
        for (xh = 0; xh <= 2; xh++) {
            rkb(dxb, mxb(1) * 1.2 * ufb.xxb() - 60, -30.0 + mxb(20), wwb, sab, 1)
        }
    }
}

function ayb(byb, fqb, ay, by, my, sab) {
    var cyb;
    axb();
    if (byb) {
        cyb = xvb
    } else {
        cyb = yvb
    }
    switch (fqb) {
    case zvb:
        cxb(cyb, ay, by, my, sab);
        break;
    case awb:
        gxb(cyb, ay, by, my, sab);
        break;
    case bwb:
        ixb(cyb,
            ay, by, my, sab);
        break;
    case cwb:
        jxb(cyb, ay, by, my, sab);
        break;
    case dwb:
        lxb(cyb, ay, by, my, sab);
        break;
    case ewb:
        nxb(cyb, ay, by, my, sab);
        break;
    case fwb:
        oxb(cyb, ay, by, my, sab);
        break;
    case gwb:
        qxb(cyb, ay, by, my, sab);
        break;
    case hwb:
        sxb(cyb, ay, by, my, sab);
        break;
    case iwb:
        txb(cyb, ay, by, my, sab);
        break;
    case jwb:
        uxb(cyb, ay, by, my, sab);
        break;
    case kwb:
        yxb(cyb, ay, by, my, sab);
        break
    }
}

function dyb() {
    var cgb = ufb.bgb.cgb;
    for (var eyb = 0; eyb < cgb.length; eyb++) {
        var ifb = cgb[eyb];
        var gab = ifb.gab;
        if (!ifb.kfb) {
            if (gab.fyb[gyb]) {
                if (lob(ifb.lgb) || lob(ifb.hyb)) {
                    var fgb = ifb.iyb();
                    if ((fgb.ggb < 0) || (fgb.left > ufb.xxb()) || (fgb.bottom < 0) || (fgb.top > ufb.wxb())) {
                        ifb.mab(gyb, jyb, ifb, ifb)
                    }
                } else {
                    if ((ifb.ah < 0) || (ifb.ah > ufb.xxb()) || (ifb.bh < 0) || (ifb.bh > ufb.wxb())) {
                        ifb.mab(gyb, jyb, ifb, ifb)
                    }
                }
            }
            if (gab.fyb[kyb]) {
                if (lob(ifb.lgb) || lob(ifb.hyb)) {
                    var fgb = ifb.iyb();
                    if ((fgb.left < 0) || (fgb.ggb > ufb.xxb()) || (fgb.top < 0) || (fgb.bottom > ufb.wxb())) {
                        ifb.mab(kyb, jyb, ifb, ifb)
                    }
                } else {
                    if ((ifb.ah < 0) || (ifb.ah > ufb.xxb()) || (ifb.bh < 0) || (ifb.bh > ufb.wxb())) {
                        ifb.mab(kyb, jyb, ifb, ifb)
                    }
                }
            }
        }
    }
}

function lyb() {
    for (var myb in nyb) {
        var oyb = zy.ev(myb);
        var pyb = oyb.qyb();
        for (var ryb = 0; ryb < pyb.length; ryb++) {
            var syb = pyb[ryb];
            if (!syb.kfb && syb.tyb) {
                var uyb = nyb[myb];
                for (var vyb in uyb) {
                    var wyb = uyb[vyb];
                    var xyb = zy.ev(wyb);
                    var yyb = xyb.qyb();
                    for (var zyb = 0; zyb < yyb.length; zyb++) {
                        var azb = yyb[zyb];
                        if (!azb.kfb && azb.tyb) {
                            if ((syb.gab == azb.gab) && (zyb < ryb)) continue;
                            if (syb.sfb(azb, !0)) {
                                if ((syb.kjb) || (azb.kjb)) {
                                    syb.ah = syb.bzb;
                                    syb.bh = syb.czb;
                                    syb.dzb = syb.ezb;
                                    azb.ah = azb.bzb;
                                    azb.bh = azb.czb;
                                    azb.dzb = azb.ezb
                                }
                                syb.mab(fzb, wyb, syb, azb);
                                azb.mab(fzb, myb, azb, syb);
                                if ((syb.kjb) || (azb.kjb)) {
                                    syb.gzb();
                                    azb.gzb();
                                    syb.ofb(syb.ah + syb.pm, syb.bh + syb.qm);
                                    azb.ofb(azb.ah + azb.pm, azb.bh + azb.qm);
                                    if (syb.sfb(azb, !0) == !0) {
                                        syb.ah = syb.bzb;
                                        syb.bh = syb.czb;
                                        syb.dzb = syb.ezb;
                                        azb.ah = azb.bzb;
                                        azb.bh = azb.czb;
                                        azb.dzb = azb.ezb
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function hzb() {
    if (ufb) {
        var izb;
        if (!ufb.jzb) {
            izb = kzb
        } else {
            izb = ufb.lzb
        }
        for (mzb in izb) {
            nzb = izb[mzb];
            if (nzb.fi) {
                if (nzb.ozb == -1) {
                    ptb(du, qtb)
                } else {
                    ptb(ipb.ev(nzb.ozb), qtb)
                } if (((tt.pzb - qtb.left) >= nzb.trb) && ((tt.pzb - qtb.left) < nzb.xrb) && ((tt.qzb - qtb.top) >= nzb.urb) && ((tt.qzb - qtb.top) < nzb.yrb)) {
                    io.dq = ((tt.pzb - qtb.left - nzb.trb) / nzb.rzb) + nzb.lrb;
                    io.eq = ((tt.qzb - qtb.top - nzb.urb) / nzb.szb) + nzb.mrb;
                    var leb = io.dq;
                    var meb = io.eq;
                    var tzb = zy.jjb();
                    for (var tfb in tzb) {
                        var hfb = tzb[tfb];
                        var uzb = hfb.fyb;
                        if (uzb[vzb] || uzb[wzb] || uzb[xzb] || uzb[yzb] || uzb[zzb] || uzb[aac] || uzb[bac] || uzb[cac] || uzb[dac] || uzb[eac] || uzb[fac] || uzb[gac]) {
                            if (hfb.hac.length > 0) {
                                var iac = hfb.hac.cgb;
                                for (var xh = iac.length - 1; xh >= 0; xh--) {
                                    var jfb = iac[xh];
                                    if (!jfb.kfb) {
                                        {
                                            if (jfb.dgb) jfb.egb();
                                            var ngb = ogb.ev(jfb.lgb);
                                            if ((leb >= jfb.fgb.left) && (leb < jfb.fgb.ggb) && (meb >= jfb.fgb.top) && (meb < jfb.fgb.bottom)) {
                                                var jac = !0;
                                                var kac;
                                                for (kac = 0; kac < 3; kac++) {
                                                    if (tt.lac[kac]) {
                                                        if (uzb[vzb + kac]) {
                                                            jfb.mab(vzb + kac, 0, jfb, jfb)
                                                        }
                                                        jac = !1
                                                    }
                                                }
                                                for (kac = 0; kac < 3; kac++) {
                                                    if (tt.mac[kac] == !0) {
                                                        if (uzb[yzb + kac]) {
                                                            jfb.mab(yzb + kac, 0, jfb, jfb)
                                                        }
                                                        jac = !1
                                                    }
                                                }
                                                for (kac = 0; kac < 3; kac++) {
                                                    if (tt.nac[kac] == !0) {
                                                        if (uzb[bac + kac]) {
                                                            jfb.mab(bac + kac, 0, jfb, jfb)
                                                        }
                                                    }
                                                }
                                                if (jac) {
                                                    jfb.mab(eac, 0, jfb, jfb)
                                                }
                                                if (!jfb.oac) {
                                                    jfb.mab(fac, 0, jfb, jfb);
                                                    jfb.oac = !0
                                                }
                                            } else {
                                                if (jfb.oac) {
                                                    jfb.mab(gac, 0, jfb, jfb);
                                                    jfb.oac = !1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var kac;
                    for (kac = 0; kac < 3; kac++) {
                        if (tt.lac[kac]) {
                            pac.mab(qac + kac)
                        }
                    }
                    for (kac = 0; kac < 3; kac++) {
                        if (tt.mac[kac] == !0) {
                            pac.mab(rac + kac)
                        }
                    }
                    for (kac = 0; kac < 3; kac++) {
                        if (tt.nac[kac] == !0) {
                            pac.mab(sac + kac)
                        }
                    }
                }
            }
        }
    }
}

function tac() {
    var cgb = ufb.bgb.cgb;
    for (var ifb = 0; ifb < cgb.length; ifb++) {
        var jfb = cgb[ifb];
        if (!jfb.kfb && (jfb.uac >= 0)) {
            if (!jfb.vac) {
                var zz = aab.ev(jfb.uac);
                if ((zz != null) && (zz != undefined)) {
                    var wac = zz.xac();
                    if (jfb.yac > wac) {
                        if (jfb.zac) {
                            jfb.yac -= wac
                        }
                    }
                    wac = zz.abc(jfb.yac);
                    jfb.yac += jfb.bbc;
                    var cbc = zz.abc(jfb.yac);
                    for (var whb = wac; whb < cbc; whb++) {
                        vz(jfb, jfb, jfb.uac, whb)
                    }
                }
            }
        }
    }
}

function dbc() {
    var cgb = ufb.bgb.cgb;
    for (var ifb in cgb) {
        var jfb = cgb[ifb];
        if (!jfb.kfb) {
            for (var ebc = 0; ebc < fbc; ebc++) {
                var event = gbc | (ebc + 1);
                var hfb = jfb.gab;
                if (hfb.fyb[event]) {
                    var hbc = ~~qr(jfb, "__alarm__", ebc);
                    if (hbc >= 0) {
                        hbc--;
                        op(jfb, "__alarm__", ebc, hbc)
                    }
                    if (hbc == 0) {
                        jfb.mab(gbc | (ebc + 1), 0, jfb, jfb)
                    }
                }
            }
        }
    }
}

function ibc() {
    this.jbc = [];
    this.jbc["__background_visible__"] = new kbc("__background_visible__", 1);
    this.jbc["__background_foreground__"] = new kbc("__background_foreground__", 1);
    this.jbc["__background_index__"] = new kbc("__background_index__", 1);
    this.jbc["__background_x__"] = new kbc("__background_x__",
        1);
    this.jbc["__background_y__"] = new kbc("__background_y__", 1);
    this.jbc["__background_width__"] = new kbc("__background_width__", 1);
    this.jbc["__background_height__"] = new kbc("__background_height__", 1);
    this.jbc["__background_htiled__"] = new kbc("__background_htiled__", 1);
    this.jbc["__background_vtiled__"] = new kbc("__background_vtiled__", 1);
    this.jbc["__background_xscale__"] = new kbc("__background_xscale__", 1);
    this.jbc["__background_yscale__"] = new kbc("__background_yscale__", 1);
    this.jbc["__background_hspeed__"] = new kbc("__background_hspeed__",
        1);
    this.jbc["__background_vspeed__"] = new kbc("__background_vspeed__", 1);
    this.jbc["__background_blend__"] = new kbc("__background_blend__", 1);
    this.jbc["__background_alpha__"] = new kbc("__background_alpha__", 1)
}
var zgb = 3.14159265,
    lbc = !0,
    mbc = !1,
    nbc = !0,
    zub = 0,
    obc = -1,
    pbc = 0,
    qbc = 1,
    rbc = 2,
    bvb = 0;
sbc = -1, tbc = 0, ubc = 1, vbc = 2, wbc = 3, xbc = 4, ybc = 5, zbc = 6, xub = 0, tbc = -1, acc = 0, bcc = 0, ccc = 1, dcc = 2, ecc = 3, fcc = 4, gcc = 5, hcc = 6, dvb = 0, icc = -1, bob = -100, jcc = -200, kcc = -300, lcc = -400;
mcc = -1, ncc = -2, cib = -3, qfb = -4, occ = -5, pcc = -7, qcc = -6;
var wfb = 0x000,
    xfb = 0x100,
    gbc = 0x200,
    rcc = 0x300,
    fzb = 0x400,
    scc = 0x500,
    tcc = 0x600,
    jyb = 0x700,
    ucc = 0x800,
    vcc = 0x900,
    wcc = 0xA00,
    xcc = 0xB00,
    ycc = rcc | 1,
    zcc = rcc | 2,
    adc = rcc | 3,
    gyb = jyb | 1,
    kyb = jyb | 2,
    bdc = jyb | 3,
    cdc = jyb | 4,
    ddc = jyb | 5,
    edc = jyb | 6,
    fdc = jyb | 7,
    gdc = jyb | 8,
    hdc = jyb | 9,
    idc = jyb | 10,
    jdc = jyb | 11,
    kdc = jyb | 12,
    ldc = jyb | 13,
    mdc = jyb | 14;
ndc = jyb | 15;
odc = jyb | 16;
pdc = jyb | 17;
qdc = jyb | 18;
rdc = jyb | 19;
sdc = jyb | 20;
tdc = jyb | 21;
udc = jyb | 22;
vdc = jyb | 23;
wdc = jyb | 24;
xdc = jyb | 25;
ydc = jyb | 26;
zdc = jyb | 27;
aec = jyb | 28;
bec = jyb | 29;
cec = jyb | 60, dec = jyb | 61, vzb = tcc | 1;
xzb = tcc | 2;
wzb = tcc | 3;
yzb = tcc | 4;
aac = tcc | 5;
zzb = tcc | 6;
bac = tcc | 7;
dac = tcc | 8;
cac = tcc | 9;
qac = tcc | 10;
eec = tcc | 11;
fec = tcc | 12;
rac = tcc | 13;
gec = tcc | 14;
hec = tcc | 15;
sac = tcc | 16;
iec = tcc | 17;
jec = tcc | 18;
eac = tcc | 19;
fac = tcc | 20;
gac = tcc | 21;
kec = gbc | 1;
lec = gbc | 2;
mec = gbc | 3;
nec = gbc | 4;
oec = gbc | 5;
pec = gbc | 6;
qec = gbc | 7;
rec = gbc | 8;
sec = gbc | 9;
tec = gbc | 10;
uec = gbc | 11;
vec = gbc | 12;
wec = 0;
xec = 1;
yec = 2;
zec = 3;
afc = 4;
bfc = 5;
cfc = 6;
dfc = 7;
efc = 8;
ffc = 9;
gfc = 10;
hfc = 11;
ifc = 0;
jfc = 1;
kfc = 2;
lfc = 3;
mfc = 4;
nfc = 5;
ofc = 6;
pfc = 7;
qfc = 8;
rfc = 9;
sfc = 10;
tfc = 11;
ufc = 16;
vfc = 17;
wfc = 18;
xfc = 19;
yfc = 21;
zfc = 22;
agc = 23;
bgc = 24;
cgc = 25;
dgc = 26;
egc = 27;
fgc = 28;
ggc = 31;
hgc = 32;
igc = 33;
jgc = 34;
kgc = 36;
lgc = 37;
mgc = 38;
ngc = 39;
ogc = 40;
pgc = 41;
qgc = 42;
rgc = 43;
sgc = 50;
tgc = 51;
ugc = 52;
vgc = 53;
wgc = 54;
xgc = 55;
ygc = 56;
zgc = 57;
ahc = 58;
bhc = 60;
chc = 61;
dhc = 0, ehc = 1, fhc = 2, ghc = 0, hhc = 1, ihc = 2, jhc = 3, khc = 4, lhc = 5, mhc = 6, nhc = 7, ohc = 8, phc = 9, qhc = 30, rhc = 40, shc = 50, thc = 10, uhc = 11, vhc = 12, whc = 13, xhc = 14, yhc = 15, zhc = 16, aic = 17, bic = 18, cic = 19, dic = 20, eic = 21, fic = 22, gic = 23, hic = 24, iic = 25, jic = 60;
kic = 61;
lic = vcc | 0, mic = vcc | 1, nic = vcc | 1, oic = vcc | 8, pic = vcc | 9, qic = vcc | 13, ric = vcc | 16,
sic = vcc | 17, tic = vcc | 18, uic = vcc | 19, vic = vcc | 27, wic = vcc | 32, xic = vcc | 33, yic = vcc | 34, zic = vcc | 35, ajc = vcc | 36, bjc = vcc | 37, cjc = vcc | 38, djc = vcc | 39, ejc = vcc | 40, fjc = vcc | 45, gjc = vcc | 46, hjc = vcc | 48, ijc = vcc | 49, jjc = vcc | 50, kjc = vcc | 51, ljc = vcc | 52, mjc = vcc | 53, njc = vcc | 54, ojc = vcc | 55, pjc = vcc | 56, qjc = vcc | 57, rjc = vcc | 65, sjc = vcc | 66, tjc = vcc | 67, ujc = vcc | 68, vjc = vcc | 69, wjc = vcc | 70, xjc = vcc | 71, yjc = vcc | 72, zjc = vcc | 73, akc = vcc | 74, bkc = vcc | 75, ckc = vcc | 76, dkc = vcc | 77, ekc = vcc | 78, fkc = vcc | 79, gkc = vcc | 80, hkc = vcc | 81, ikc = vcc | 82, jkc = vcc | 83, kkc = vcc | 84, lkc = vcc | 85,
mkc = vcc | 86, nkc = vcc | 87, okc = vcc | 88, pkc = vcc | 89, qkc = vcc | 90, rkc = vcc | 112, skc = vcc | 113, tkc = vcc | 114, ukc = vcc | 115, vkc = vcc | 116, wkc = vcc | 117, xkc = vcc | 118, ykc = vcc | 119, zkc = vcc | 120, alc = vcc | 121, blc = vcc | 122, clc = vcc | 123, dlc = vcc | 145, elc = vcc | 186, flc = vcc | 187, glc = vcc | 188, hlc = vcc | 189, ilc = vcc | 190, jlc = vcc | 191, klc = vcc | 192, llc = vcc | 219, mlc = vcc | 220, nlc = vcc | 221, olc = vcc | 222, plc = vcc | 223, qlc = vcc | 144, rlc = vcc | 96, slc = vcc | 97, tlc = vcc | 98, ulc = vcc | 99, vlc = vcc | 100, wlc = vcc | 101, xlc = vcc | 102, ylc = vcc | 103, zlc = vcc | 104, amc = vcc | 105, bmc = vcc | 106, cmc = vcc | 107,
dmc = vcc | 109, emc = vcc | 110, fmc = vcc | 111, gmc = scc | 0, hmc = scc | 1, imc = scc | 1, jmc = scc | 8, kmc = scc | 9, lmc = scc | 13, mmc = scc | 16, nmc = scc | 17, omc = scc | 18, pmc = scc | 19, qmc = scc | 27, rmc = scc | 32, smc = scc | 33, tmc = scc | 34, umc = scc | 35, vmc = scc | 36, wmc = scc | 37, xmc = scc | 38, ymc = scc | 39, zmc = scc | 40, anc = scc | 45, bnc = scc | 46, cnc = scc | 48, dnc = scc | 49, enc = scc | 50, fnc = scc | 51, gnc = scc | 52, hnc = scc | 53, inc = scc | 54, jnc = scc | 55, knc = scc | 56, lnc = scc | 57, mnc = scc | 65, nnc = scc | 66, onc = scc | 67, pnc = scc | 68, qnc = scc | 69, rnc = scc | 70, snc = scc | 71, tnc = scc | 72, unc = scc | 73, vnc = scc | 74, wnc = scc | 75,
xnc = scc | 76, ync = scc | 77, znc = scc | 78, aoc = scc | 79, boc = scc | 80, coc = scc | 81, doc = scc | 82, eoc = scc | 83, foc = scc | 84, goc = scc | 85, hoc = scc | 86, ioc = scc | 87, joc = scc | 88, koc = scc | 89, loc = scc | 90, moc = scc | 112, noc = scc | 113, ooc = scc | 114, poc = scc | 115, qoc = scc | 116, roc = scc | 117, soc = scc | 118, toc = scc | 119, uoc = scc | 120, voc = scc | 121, woc = scc | 122, xoc = scc | 123, yoc = scc | 145, zoc = scc | 186, apc = scc | 187, bpc = scc | 188, cpc = scc | 189, dpc = scc | 190, epc = scc | 191, fpc = scc | 192, gpc = scc | 219, hpc = scc | 220, ipc = scc | 221, jpc = scc | 222, kpc = scc | 223, lpc = scc | 144, mpc = scc | 96, npc = scc | 97, opc = scc | 98,
ppc = scc | 99, qpc = scc | 100, rpc = scc | 101, spc = scc | 102, tpc = scc | 103, upc = scc | 104, vpc = scc | 105, wpc = scc | 106, xpc = scc | 107, ypc = scc | 109, zpc = scc | 110, aqc = scc | 111, bqc = wcc | 0, cqc = wcc | 1, dqc = wcc | 1;
eqc = wcc | 8, fqc = wcc | 9, gqc = wcc | 13, hqc = wcc | 16, iqc = wcc | 17, jqc = wcc | 18, kqc = wcc | 19, lqc = wcc | 27, mqc = wcc | 32, nqc = wcc | 33, oqc = wcc | 34, pqc = wcc | 35, qqc = wcc | 36, rqc = wcc | 37, sqc = wcc | 38, tqc = wcc | 39, uqc = wcc | 40, vqc = wcc | 45, wqc = wcc | 46, xqc = wcc | 48, yqc = wcc | 49, zqc = wcc | 50, brc = wcc | 51, crc = wcc | 52, drc = wcc | 53, erc = wcc | 54, frc = wcc | 55, grc = wcc | 56, hrc = wcc | 57, irc = wcc | 65,
jrc = wcc | 66, krc = wcc | 67, lrc = wcc | 68, mrc = wcc | 69, nrc = wcc | 70, orc = wcc | 71, prc = wcc | 72, qrc = wcc | 73, rrc = wcc | 74, trc = wcc | 75, urc = wcc | 76, vrc = wcc | 77, wrc = wcc | 78, xrc = wcc | 79, yrc = wcc | 80, zrc = wcc | 81, asc = wcc | 82, bsc = wcc | 83, csc = wcc | 84, dsc = wcc | 85, esc = wcc | 86, fsc = wcc | 87, gsc = wcc | 88, hsc = wcc | 89, isc = wcc | 90, jsc = wcc | 112, ksc = wcc | 113, lsc = wcc | 114, msc = wcc | 115, nsc = wcc | 116, osc = wcc | 117, psc = wcc | 118, qsc = wcc | 119, rsc = wcc | 120, ssc = wcc | 121, tsc = wcc | 122, usc = wcc | 123, vsc = wcc | 145, wsc = wcc | 186, xsc = wcc | 187, ysc = wcc | 188, zsc = wcc | 189, atc = wcc | 190, btc = wcc | 191,
ctc = wcc | 192, dtc = wcc | 219, etc = wcc | 220, ftc = wcc | 221, gtc = wcc | 222, htc = wcc | 223, itc = wcc | 144, jtc = wcc | 96, ktc = wcc | 97, ltc = wcc | 98, mtc = wcc | 99, ntc = wcc | 100, otc = wcc | 101, ptc = wcc | 102, qtc = wcc | 103, rtc = wcc | 104, stc = wcc | 105, ttc = wcc | 106, utc = wcc | 107, vtc = wcc | 109, wtc = wcc | 110, xtc = wcc | 111;
var ytc = 0;
var ztc = 1;
var auc = 2;
var fbc = 12;
var buc = 8,
    cuc = 8,
    duc = 1,
    euc = 10;
var ceb = 0x000000,
    fuc = 0x000080,
    guc = 0x008000,
    huc = 0x008080,
    iuc = 0x800000,
    juc = 0x800080,
    kuc = 0x808000,
    luc = 0x808080,
    muc = 0xC0C0C0,
    nuc = 0x0000FF,
    ouc = 0x00FF00,
    puc = 0x00FFFF,
    quc = 0xFF0000,
    ruc = 0xFF00FF,
    suc = 0xFFFF00,
    tuc = 0xC0C0C0,
    uuc = 0x808080,
    vuc = 0xFFFFFF,
    wuc = 0xC0DCC0,
    xuc = 0xF0CAA6,
    yuc = 0xF0FBFF,
    zuc = 0xA4A0A0;
var global = zy = pac = tt = avc = io = bvc = cvc = dob = dvc = nyb = knb = aab = evc = ufb = fvc = kzb = gvc = hvc = ivc = jvc = kvc = lvc = yu = mvc = fjb = hv = nvc = ipb = ovc = pvc = cz = dz = qvc = ez = rvc = svc = tvc = uvc = vvc = wvc = xvc = yvc = qtb = irb = hrb = jrb = krb = zvc = awc = bwc = cwc = dwc = ewc = fwc = gwc = hwc = iwc = jwc = kwc = null,
    lwc = mwc = !0,
    nwc, owc = pwc = qwc = rwc = swc = yw = erb = twc = uwc = vwc = wwc = !1,
    xwc = aob = ywc = zwc = axc = bxc = ntb = otb = stb = ttb = rtb = utb = cxc = dxc = exc = xbb = tbb = sbb = ubb = wbb = ltb = mtb = vtb = wtb = fxc = gxc = hxc = ixc = jxc = kxc = kab = nab = oab = lxc = mxc = nxc = oxc = pxc = qxc = rxc = 0;
sxc = txc = uxc = vxc = wxc = xxc = yxc = zxc = ayc = byc = cyc = dyc = eyc = fyc = gyc = hyc = iyc = jyc = kyc = lyc = myc = nyc = oyc = pyc = fxb = qyc = ryc = syc = tyc = uyc = vyc = wyc = xyc = yyc = 0;
var sob = 'canvas';

function zyc() {
    var dx = !1;
    if ((bvc.bn) && (bvc.bn.cn) && (bvc.bn.cn == !0)) {
        dx = !0
    }
    if (!dx) {
        rgb = hgb;
        lp = azc;
        qr = bzc;
        op = czc;
        dzc = ezc;
        fzc = gzc
    } else {
        rgb = pgb;
        lp = hzc;
        qr = izc;
        op = jzc;
        dzc = kzc;
        fzc = lzc
    }
}

function mzc() {
    nzc();
    var ozc = new Audio();
    ozc.controls = !1;
    qwc = !! ozc.canPlayType && "" != ozc.canPlayType('audio/mpeg');
    rwc = !! ozc.canPlayType && "" != ozc.canPlayType('audio/ogg; codecs="vorbis"');
    ozc = null;
    if (qwc) dx("Browser CAN play MP3");
    if (rwc) dx("Browser CAN play OGG");
    zyc();
    kwc = xwc = 0;
    ufb = null;
    owc = !1;
    aob = -1;
    jrb = new pzc();
    fvc = new pzc();
    krb = new pzc();
    irb = new mpb();
    hrb = new mpb();
    fvc.fi = !0;
    kzb = [];
    kzb[0] = fvc;
    hvc = [];
    ivc = [];
    jvc = [];
    kvc = new qzc(5);
    lvc = new qzc(5);
    yu = new qzc(5);
    mvc = new qzc(5);
    fjb = new qzc(5);
    hv = new qzc(5);
    ipb = new qzc(5);
    nvc = new qzc(5);
    ovc = new zob();
    yvc = new qzc(5);
    qtb = new mpb();
    awc = new rzc();
    awc.szc = "DUMMY INSTANCE";
    sob = "canvas";
    xvc = "html5game/";
    if (typeof (g_GameSmileHTML5Dir) != "undefined") {
        xvc = g_GameSmileHTML5Dir;
    }
    pvc = [];
    cz = [];
    dz = [];
    qvc = "Hiscore Table";
    ez = "<Nobody>";
    rvc = "Press <ESC> to Continue";
    gxc = 0x000000;
    kxc = -1;
    hxc = 0xffff00;
    ixc = 0xffffff;
    svc = "verdana";
    jxc = 16;
    tvc = "";
    lwc = !0;
    bz();
    ipb.tzc();
    cxc = 0.0000001;
    erb = mwc = !1;
    iwc = kab = null;
    nab = oab = -1;
    exc = 1.0;
    ywc = 0;
    zwc = -1;
    axc = 0;
    bxc = 0;
    uzc = !0;
    fxc = 10000000;
    dxc = 100000;
    xbb = 1.0;
    sbb = 0x00000000;
    tbb = 0x000000;
    ubb = vbb(tbb);
    wbb = yab(tbb, xbb);
    fxb = vbb(0x000000);
    qyc = vbb(0xffffff);
    ryc = vbb(0x0000ff);
    syc = vbb(0x00ff00);
    tyc = vbb(0xff0000);
    uyc = vbb(0xff000000);
    vyc = vbb(0xffffffff);
    wyc = vbb(0xff0000ff);
    xyc = vbb(0xff00ff00);
    yyc = vbb(0xffff0000);
    uxc = 0;
    vxc = -1;
    wxc = -2;
    xxc = -3;
    yxc = -4;
    zxc = -6;
    ayc = -7;
    byc = -8;
    cyc = -9;
    dyc = -10;
    eyc = -11;
    fyc = -12;
    gyc = -13;
    hyc = -14;
    iyc = -15;
    jyc = -16;
    kyc = -17;
    lyc = -18;
    myc = -19;
    nyc = -20;
    oyc = -21;
    pyc = -22;
    sxc = -1;
    txc = 0;
    vzc();
    global.jbc = [];
    if (bvc.bn && bvc.bn.hn == !1) {
        du.style.cursor = "none"
    }
    uwc = !1;
    if (bvc.bn && bvc.bn.rn == !0) {
        uwc = !0
    }
    if (typeof wzc == 'function') {
        wzc()
    }
}

function xzc(yzc) {
    return yzc * (Math.PI / 180.0)
}

function zzc(ay, by) {
    if (ay == 0) return 0;
    var ru = ((ay * 0x1000000) % (by * 0x1000000));
    ru = ru / 0x1000000;
    return ru
}

function ahb(ay) {
    return ay * ay
}

function vbb(sab) {
    var tz = "rgba(" + (sab & 0xff).toString() + "," + ((sab >> 8) & 0xff).toString() + "," + ((sab >> 16) & 0xff).toString() + "," + ((sab >> 24) & 0xff).toString() + ")";
    return tz
}

function yab(sab, tab) {
    var tz = "rgba(" + ((sab >> 16) & 0xff).toString() + "," + ((sab >> 8) & 0xff).toString() + "," + ((sab >> 0) & 0xff).toString() + "," + ((tab * 255.0) & 0xff).toString() + ")";
    return tz
}

function aad(yzc) {
    return zgb * yzc / 180.0
}

function zab(sab) {
    return (((sab & 0xff) << 16) | (sab & 0xff00) | ((sab & 0xff0000) >> 16))
}

function xy(bad) {
    var cad = evb();
    while (bad > 0) {
        var dad = evb();
        bad -= (dad - cad);
        cad = dad
    }
}

function pfb(wz, yy, ead, fad) {
    var ebc = pfb.arguments;
    var mhb = pfb.arguments.length;
    var gad = ebc[mhb - 1];
    yy = Math.floor(yy);
    if (yy == cib) {
        var cgb = pac.jjb();
        for (var ifb = 0; ifb < cgb.length; ifb++) {
            var jfb = cgb[ifb];
            if ((ead) && (jfb == wz)) continue;
            if (jfb.had) continue;
            var qz = gad(jfb);
            if (qz) return qz
        }
    } else if (yy < 100000) {
        var hfb = zy.ev(yy);
        if (hfb === null) {
            return fad
        }
        var cgb = hfb.qyb();
        for (var ifb = 0; ifb < cgb.length; ifb++) {
            var jfb = cgb[ifb];
            if ((ead) && (wz == jfb)) continue;
            if (jfb.had) continue;
            var qz = gad(jfb);
            if (qz) return qz
        }
    } else {
        var jfb = pac.iad(yy);
        if ((ead) && (wz == jfb)) {
            return fad
        }
        if (jfb.had) {
            return fad
        }
        return gad(jfb)
    }
    return fad
}

function jad(wz, yy, ead, fad) {
    var ebc = jad.arguments;
    var mhb = jad.arguments.length;
    var gad = ebc[mhb - 1];
    var hib = 10000000000;
    var hm = -1;
    yy = Math.floor(yy);
    if (yy == cib) {
        var cgb = pac.jjb();
        for (var ifb = 0; ifb < cgb.length; ifb++) {
            var jfb = cgb[ifb];
            if ((ead) && (jfb == wz)) continue;
            if (jfb.had) continue;
            var rw = gad(jfb);
            if (rw < hib) {
                hib = rw
            }
        }
        if (hib != 10000000000) return hib
    } else if (yy < 100000) {
        var hfb = zy.ev(yy);
        if (hfb === null) {
            return fad
        }
        var cgb = hfb.qyb();
        for (var ifb = 0; ifb < cgb.length; ifb++) {
            var jfb = cgb[ifb];
            if ((ead) && (wz == jfb)) continue;
            if (jfb.had) continue;
            var rw = gad(jfb);
            if (rw < hib) {
                hib = rw
            }
        }
        if (hib != 10000000000) return hib
    } else {
        var jfb = pac.iad(yy);
        if ((ead) && (wz == jfb)) {
            return fad
        }
        if (jfb.had) {
            return fad
        }
        return gad(jfb)
    }
    return fad
}
var kad = {
    lad: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.mad = this.searchString(this.dataOS) || "an unknown OS";
        this.nad = this.oad()
    },
    oad: function () {
        if (navigator.appVersion.indexOf("CPU OS 5_") != -1) {
            return 5.0
        } else if (navigator.appVersion.indexOf("CPU OS 4_") != -1) {
            return 4.0
        } else if (navigator.appVersion.indexOf("CPU OS 3_") != -1) {
            return 3.0
        } else if (navigator.appVersion.indexOf("Android 4") != -1) {
            return 4.0
        } else if (navigator.appVersion.indexOf("Android 3") != -1) {
            return 3.0
        } else if (navigator.appVersion.indexOf("Android 2") != -1) {
            return 2.0
        } else {
            return icc
        }
    },
    searchString: function (data) {
        for (var xh = 0; xh < data.length; xh++) {
            var pad = data[xh].sq;
            var qad = data[xh].prop;
            this.versionSearchString = data[xh].versionSearch || data[xh].identity;
            if (pad) {
                if (pad.indexOf(data[xh].rad) != -1) {
                    return data[xh].identity
                }
            } else if (qad) {
                return data[xh].identity
            }
        }
    },
    searchVersion: function (pad) {
        var bm = pad.indexOf(this.versionSearchString);
        if (bm == -1) return;
        return parseFloat(pad.substring(bm + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
        sq: navigator.userAgent,
        rad: "Chrome",
        identity: "Chrome"
    }, {
        sq: navigator.userAgent,
        rad: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        sq: navigator.vendor,
        rad: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera"
    }, {
        sq: navigator.vendor,
        rad: "iCab",
        identity: "iCab"
    }, {
        sq: navigator.vendor,
        rad: "KDE",
        identity: "Konqueror"
    }, {
        sq: navigator.userAgent,
        rad: "Firefox",
        identity: "Firefox"
    }, {
        sq: navigator.userAgent,
        rad: "IceWeasel",
        identity: "IceWeasel"
    }, {
        sq: navigator.vendor,
        rad: "Camino",
        identity: "Camino"
    }, {
        sq: navigator.userAgent,
        rad: "Netscape",
        identity: "Netscape"
    }, {
        sq: navigator.userAgent,
        rad: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        sq: navigator.userAgent,
        rad: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        sq: navigator.userAgent,
        rad: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        sq: navigator.platform,
        rad: "Win",
        identity: "Windows"
    }, {
        sq: navigator.platform,
        rad: "Mac",
        identity: "Mac"
    }, {
        sq: navigator.userAgent,
        rad: "iPhone",
        identity: "iPhone"
    }, {
        sq: navigator.userAgent,
        rad: "iPod",
        identity: "iPhone"
    }, {
        sq: navigator.userAgent,
        rad: "iPad",
        identity: "iPad"
    }, {
        sq: navigator.userAgent,
        rad: "Android",
        identity: "Android"
    }, {
        sq: navigator.platform,
        rad: "Linux",
        identity: "Linux"
    }]
};

function nzc() {
    kad.lad();
    if (kad.mad == "Windows") {
        xub = acc
    } else if (kad.mad == "Mac") {
        xub = ccc
    } else if (kad.mad == "iPhone") {
        xub = ecc
    } else if (kad.mad == "iPad") {
        xub = ecc
    } else if (kad.mad == "Android") {
        xub = fcc
    } else if (kad.mad == "Linux") {
        xub = hcc
    } else {
        xub = tbc;
    }
    dvb = kad.nad;
    bvb = tbc;
    zub = obc;
    if (kad.browser == "Explorer") {
        dx("Internet Explorer detected");
        bvb = ubc
    } else if (kad.browser == "Firefox") {
        dx("Firefox detected");
        bvb = vbc
    } else if (kad.browser == "Chrome") {
        dx("Chrome detected");
        bvb = wbc
    } else if (kad.browser == "Safari") {
        if (xub == ecc) {
            bvb = ybc;
            zub = pbc;
            if (kad.mad == "iPad") zub = rbc;
            dx("Safari mobile detected")
        } else {
            dx("Safari detected");
            bvb = xbc
        }
    } else if (kad.browser == "Opera") {
        dx("BrowserDetect: " + kad.mad);
        dx("Opera detected");
        bvb = zbc
    } else {
        dx("Unknown Browser - Please report these strings");
        dx("----------------------------------------------");
        if (navigator.userAgent) dx("userAgent: " + navigator.userAgent);
        if (navigator.vendor) dx("vendor: " + navigator.vendor);
        dx("----------------------------------------------")
    }
}

function vzc() {
    try {
        if ('localStorage' in window && window['localStorage'] !== null) {
            nwc = !0
        }
    } catch (rub) {
        nwc = !1
    }
    return nwc
}
var sad = 0;
var tad = 0;
var uad = 0;
var vad = 0;
var wad = null;
var xad = null;

function yad() {
    global = new ibc();
    io = new zad();
    tt = new abd();
    bbd(du);
    pac = new cbd();
    zy = new dbd();
    avc = new ebd();
    ogb = new fbd();
    dvc = new gbd();
    dob = new hbd();
    ux = new ibd();
    nyb = [];
    knb = new jbd();
    aab = new kbd();
    evc = new lbd();
    mzc()
}

function mbd(nbd) {
    switch (nbd) {
    case 1:
        return "MEDIA_ERR_ABORTED";
    case 2:
        return "MEDIA_ERR_NETWORK";
    case 3:
        return "MEDIA_ERR_DECODE";
    case 4:
        return "MEDIA_ERR_SRC_NOT_SUPPORTED"
    }
    return "Unknown Error"
}

function obd(nbd) {
    switch (nbd) {
    case 0:
        return "NETWORK_EMPTY";
    case 1:
        return "NETWORK_IDLE";
    case 2:
        return "NETWORK_LOADING";
    case 3:
        return "NETWORK_NO_SOURCE"
    }
    return "Unknown Error"
}

function pbd(qbd) {
    dx("ImageLoaded: " + this.src);
    wad[this.rbd] = null;
    tad++
}

function sbd(qbd) {
    dx("ImageError: " + this.src);
    wad[this.rbd] = null;
    tad++
}

function tbd(qbd) {
    vad++;
    dx("ExtensionLoaded: ")
}

function ubd(qbd) {
    vad++;
    dx("ExtensionError: ")
}

function vbd(wbd) {
    wbd.removeEventListener('canplaythrough', xbd, !1);
    wbd.removeEventListener('error', ybd, !1);
    wbd.removeEventListener("loadstart", zbd, !1);
    wbd.removeEventListener("suspend", acd, !1);
    wbd.removeEventListener("stalled", bcd, !1);
    wbd.removeEventListener("stall", bcd, !1)
}

function xbd(qbd) {
    this.ccd = !0;
    if (wad[this.rbd] != null) {
        wad[this.rbd] = null;
        tad++
    }
    vbd(this);
    dx("SoundLoaded: " + this.rbd)
}

function ybd(qbd) {
    dx("SoundError: " + this.rbd + "   NetworkError: " + mbd(this.error["code"]));
    this.ccd = !1;
    if (wad[this.rbd] != null) {
        wad[this.rbd] = null;
        tad++
    }
    vbd(this)
}

function zbd(qbd) {
    this.dcd = !0
}

function acd(qbd) {
    dx("SoundSuspended: " + this.rbd);
    this.ccd = !0;
    if (wad[this.rbd] != null) {
        wad[this.rbd] = null;
        tad++
    }
    vbd(this)
}

function bcd(qbd) {}

function ecd(fcd) {
    dx("Loading: " + fcd);
    var bm = gcd(fcd);
    var yob = new zob();
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = 63;
    yob.ai = 63;
    yob.tm = -32;
    yob.um = -32;
    yob.vm = 63;
    yob.wm = 63;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = bm;
    yob.cpb = dpb[bm];
    yob.xqb = [];
    yob.yqb = 32;
    yob.mfb = 0;
    var hcd = hvc.length;
    hvc[hcd] = yob;
    return hcd
}

function icd(jcd) {
    dx("Loading: " + xvc + jcd);
    var rub = window.document.createElement('script');
    rub.setAttribute('src', xvc + jcd);
    rub.setAttribute('type', "text/javascript");
    rub.onload = tbd;
    rub.onerror = ubd;
    window.document.body.appendChild(rub);
    uad++
}

function kcd(lcd) {
    if (lcd.bg != undefined) {
        for (var xh = 0; xh < lcd.bg.length; xh++) {
            var mcd = lcd.bg[xh];
            if (mcd.ncd) {
                for (var ocd = 0; ocd < mcd.ncd.length; ocd++) {
                    icd(mcd.ncd[ocd])
                }
            }
        }
    }
}

function pcd(lcd) {
    wad = [];
    uad = 0;
    vad = 0;
    kcd(lcd)
}

function qcd(lcd) {
    if (lcd.rcd) document.title = lcd.rcd;
    xad = document.getElementById('GM4HTML5_loadingscreen');
    if (scd == "") {
        pcd(lcd);
        scd = tcd
    } else {
        try {
            scd = eval(scd)
        } catch (rub) {
            scd = tcd
        }
    }
    tad = 0;
    for (bm = 0; bm < lcd.an.length; bm++) {
        sad++;
        dx("Loading: " + xvc + lcd.an[bm]);
        var bm = gcd(xvc + lcd.an[bm]);
        dpb[bm].onload = pbd;
        dpb[bm].onerror = sbd;
        dpb[bm].rbd = lcd.an[bm];
        wad[dpb[bm].rbd] = dpb[ru]
    }
    for (var xh = 2; xh < 16; xh++) {
        sad++;
        var ucd = ecd(xvc + "particles/IDR_GIF" + xh + ".png");
        var ru = hvc[ucd].zm;
        dpb[ru].onload = pbd;
        dpb[ru].onerror = sbd;
        dpb[ru].rbd = "particles/IDR_GIF" + xh + ".png";
        wad[dpb[ru].rbd] = dpb[ru]
    }
    for (bm = 0; bm < lcd.cg.length; bm++) {
        if (lcd.cg[bm] != null) {
            sad++;
            dx("Loading: " + xvc + lcd.cg[bm].gg);
            var hm = vcd(xvc + lcd.cg[bm].gg, lcd.cg[bm].dg, lcd.cg[bm].fg, xbd, ybd);
            if (hm >= 0 && wad[wcd[hm].rbd]) {
                wad[wcd[hm].rbd] = wcd[hm]
            } else {
                sad--
            }
        }
    }
}

function xcd() {
    for (var xh in wad) {
        var ycd = wad[xh];
        if (ycd) {
            if ((ycd.zcd) && (ycd.readyState)) {
                if ((ycd.zcd == 1 || ycd.zcd == 3) && (ycd.dcd) && (ycd.readyState != 4)) {
                    if (ycd.ccd != !0) {
                        ycd.ccd = !1;
                        tad++;
                        wad[xh] = null;
                        vbd(ycd);
                        dx("SoundError: " + ycd.rbd + "   NetworkState: " + obd(ycd.zcd))
                    }
                }
            }
        }
    }
}

function add(bdd, hfb) {
    if (hfb.cdd) return;
    if (hfb.hab != null) {
        add(hfb.hab.ddd, hfb.hab)
    }
    for (var edd in hfb.fdd) {
        if (nyb[edd]) {
            if (nyb[edd][bdd]) {
                continue
            }
        }
        var gdd = !1;
        var hdd = hfb;
        while (hdd != null) {
            var hm = hdd.ddd;
            var idd = zy.ev(edd);
            while (idd != null) {
                var jdd = idd.ddd;
                if (nyb[jdd] && nyb[jdd][hm]) {
                    gdd = !0;
                    break
                }
                idd = idd.hab
            }
            hdd = hdd.hab
        }
        if (!gdd) {
            if (!nyb[bdd]) {
                nyb[bdd] = []
            }
            nyb[bdd][edd] = edd
        }
    }
    hfb.cdd = !0
}

function kdd() {
    var cgb = zy.jjb();
    for (var bdd in cgb) {
        var hfb = cgb[bdd];
        if (hfb.hab != null) {
            add(hfb.hab.ddd, hfb.hab)
        }
        add(bdd, hfb)
    }
}

function ldd(lcd) {
    var bm, mdd;
    dxc = 1000000;
    io.ndd = lcd.dn;
    zvc = new odd(lcd.di);
    var hm = 0;
    for (bm in lcd.ei) {
        var pdd = lcd.ei[bm];
        if (pdd != null) {
            var gab = qdd(hm, pdd);
            zy.zu(gab)
        }
        hm++
    }
    zy.rdd();
    kdd();
    for (bm in lcd.xl) {
        var sdd = lcd.xl[bm];
        if (sdd != null) {
            mdd = new tdd();
            mdd.udd(sdd);
            avc.zu(mdd)
        } else {
            xwc++;
            avc.zu(null)
        }
    }
    avc.vdd(lcd.rm);
    for (var xh = 0; xh < lcd.rm.length; xh++) {
        mdd = avc.wdd(xh);
        mdd.xdd = xh
    }
    io.ydd = avc.wdd(0).hm;
    io.zdd = avc.wdd(avc.aed.length - 1).hm;
    bed(lcd.sm);
    for (bm = 0; bm < lcd.jg.length; bm++) {
        if (lcd.jg[bm] == null) {
            ogb.lpb(null)
        } else {
            var ngb = ced(lcd.jg[bm]);
            ogb.lpb(ngb)
        }
    }
    for (bm = 0; bm < lcd.ug.length; bm++) {
        var ded = dvc.eed(lcd.ug[bm]);
        var ypb = dvc.fed(ded);
        if (ypb != null) ypb.ppb = ged
    }
    for (bm = 0; bm < lcd.lh.length; bm++) {
        ux.zu(lcd.lh[bm])
    }
    for (bm = 0; bm < lcd.wg.length; bm++) {
        var jnb = hed(lcd.wg[bm]);
        knb.zu(jnb)
    }
    for (bm = 0; bm < lcd.cg.length; bm++) {
        dob.zu(lcd.cg[bm])
    }
    if (lcd.ci != undefined) {
        for (bm = 0; bm < lcd.ci.length; bm++) {
            aab.zu(lcd.ci[bm])
        }
    }
    if (typeof ied == 'function') {
        jwc = new ied()
    }
    if (typeof jed == 'function') {
        jed()
    }
    if (lcd.bg != undefined) {
        for (var xh = 0; xh < lcd.bg.length; xh++) {
            var mcd = lcd.bg[xh];
            try {
                ked = eval(mcd.lad);
                if (ked) ked()
            } catch (fsb) {
                kt("Error calling extension initialisation function: " + mcd.lad)
            }
        }
    }
}
var led = 0;
var med = 1;
var ned = 2;
var oed = 3;
var ped = 4;
var qed = 5;
var red = 6;
var sed = 7;
var ted = 8;
var ued = 9;
var ved = 10;
var wed = 11;
var xed = 12;
var yed = 13;
var zed = 14;
var afd = 15;

function bfd(cfd) {
    this.mbb = new Float32Array(16);
    if (bfd.arguments.length > 0) {
        for (var xh = 0; xh < 16; xh++) {
            this.mbb[xh] = cfd.mbb[xh]
        }
    } else {
        this.dfd()
    }
};;
bfd.prototype.dfd = function (efd) {
    this.mbb[1] = this.mbb[2] = this.mbb[3] = this.mbb[4] = this.mbb[6] = this.mbb[7] = this.mbb[8] = this.mbb[9] = this.mbb[11] = this.mbb[12] = this.mbb[13] = this.mbb[14] = 0.0;
    this.mbb[0] = this.mbb[5] = this.mbb[10] = this.mbb[15] = 1.0
};
bfd.prototype.ffd = function (gfd, hfd, ifd) {
    var jfd = new kfd(ifd);
    var lfd = new kfd();
    var mfd = hfd.nfd(gfd);
    mfd.ofd();
    jfd.ofd();
    lfd.pfd(jfd, mfd);
    lfd.ofd();
    jfd.pfd(mfd, lfd);
    jfd.ofd();
    var qfd = gfd.rfd(lfd);
    var sfd = gfd.rfd(jfd);
    var tfd = gfd.rfd(mfd);
    this.mbb[led] = lfd.qfd;
    this.mbb[med] = jfd.qfd;
    this.mbb[ned] = mfd.qfd;
    this.mbb[oed] = 0.0;
    this.mbb[ped] = lfd.sfd;
    this.mbb[qed] = jfd.sfd;
    this.mbb[red] = mfd.sfd;
    this.mbb[sed] = 0.0;
    this.mbb[ted] = lfd.tfd;
    this.mbb[ued] = jfd.tfd;
    this.mbb[ved] = mfd.tfd;
    this.mbb[wed] = 0.0;
    this.mbb[xed] = -qfd;
    this.mbb[yed] = -sfd;
    this.mbb[zed] = -tfd;
    this.mbb[afd] = 1
};
bfd.prototype.ufd = function (mu, nu, vfd, wfd) {
    this.mbb[led] = 2.0 / mu;
    this.mbb[med] = this.mbb[ned] = 0.0;
    this.mbb[oed] = 0;
    this.mbb[qed] = 2.0 / nu;
    this.mbb[ped] = this.mbb[red] = 0.0;
    this.mbb[sed] = 0;
    this.mbb[ted] = this.mbb[ued] = 0.0;
    this.mbb[ved] = 1.0 / (wfd - vfd);
    this.mbb[wed] = 0;
    this.mbb[xed] = this.mbb[yed] = 0.0;
    this.mbb[zed] = vfd / (vfd - wfd);
    this.mbb[afd] = 1.0
};

function zob() {
    this.ah = 0;
    this.bh = 0;
    this.zh = 0;
    this.ai = 0;
    this.tm = 0;
    this.um = 0;
    this.vm = 0;
    this.wm = 0;
    this.xm = 0;
    this.ym = 0;
    this.zm = 0;
    this.ppb = ged
}

function ged(cqb) {
    this.ah = cqb.ah;
    this.bh = cqb.bh;
    this.zh = cqb.zh;
    this.ai = cqb.ai;
    this.tm = cqb.tm;
    this.um = cqb.um;
    this.vm = cqb.vm;
    this.wm = cqb.wm;
    this.xm = cqb.xm;
    this.ym = cqb.ym;
    this.zm = cqb.zm
};

function pab(qx) {
    ix("clipboard_set_text()")
};
var xfd = !0;

function kfd(yfd, zfd, agd) {
    if (kfd.arguments.length > 0) {
        if (kfd.arguments.length == 3) {
            this.qfd = yfd;
            this.sfd = zfd;
            this.tfd = agd
        } else {
            this.qfd = yfd.qfd;
            this.sfd = yfd.sfd;
            this.tfd = yfd.tfd
        }
    } else {
        this.qfd = 1.0;
        this.sfd = 0.0;
        this.tfd = 0.0
    }
}
kfd.prototype.zu = function (efd) {
    return new kfd(this.qfd + efd.qfd, this.sfd + efd.sfd, this.tfd + efd.tfd)
};
kfd.prototype.nfd = function (efd) {
    return new kfd(this.qfd - efd.qfd, this.sfd - efd.sfd, this.tfd - efd.tfd)
};
kfd.prototype.znb = function (xgb) {
    return new kfd(xgb * this.qfd, xgb * this.sfd, xgb * this.tfd)
};
kfd.prototype.ofd = function () {
    var cx = 1.0 / Math.sqrt((this.qfd * this.qfd) + (this.sfd * this.sfd) + (this.tfd * this.tfd));
    this.qfd = this.qfd * cx;
    this.sfd = this.sfd * cx;
    this.tfd = this.tfd * cx
};
kfd.prototype.pfd = function (bgd, cgd) {
    this.qfd = (bgd.sfd * cgd.tfd) - (bgd.tfd * cgd.sfd);
    this.sfd = (bgd.tfd * cgd.qfd) - (bgd.qfd * cgd.tfd);
    this.tfd = (bgd.qfd * cgd.sfd) - (bgd.sfd * cgd.qfd)
};
kfd.prototype.rfd = function (dgd) {
    return (this.qfd * dgd.qfd) + (this.sfd * dgd.sfd) + (this.tfd * dgd.tfd)
};

function qzc(egd) {
    var lhb = qzc.arguments;
    var mhb = qzc.arguments.length;
    this.cgb = [];
    this.fgd = [];
    this.length = 0;
    this.mfb = 0;
    if (mhb > 0) {
        for (var xh = 0; xh < mhb; xh++) {
            this.cgb[xh] = null;
            this.fgd.push(xh);
        }
    }
}
qzc.prototype.tzc = function () {
    var ggd;
    if (this.fgd.length == 0) {
        ggd = this.cgb.length;
        this.cgb[ggd] = null;
        return ggd
    }
    return this.fgd.pop()
};
qzc.prototype.zu = function (hgd) {
    var bm = this.tzc();
    this.cgb[bm] = hgd;
    this.mfb++;
    this.length = this.cgb.length;
    return bm
};
qzc.prototype.ev = function (aib) {
    var lv = this.cgb[aib];
    if (lv == undefined) lv = null;
    return lv
};
qzc.prototype.igd = function (jgd) {
    for (var vu = 0; vu < this.cgb.length; vu++) {
        if (this.cgb[vu] == jgd) return vu
    }
    return -1
};
qzc.prototype.kgd = function (jgd) {
    var bm = igd(jgd);
    if (bm < 0) return;
    cgb[bm] = null;
    fgd.push(bm);
    this.mfb--
};
qzc.prototype.jv = function (aib) {
    if (aib < 0 || aib >= this.cgb.length) return;
    this.cgb[aib] = null;
    this.fgd.push(aib);
    this.mfb--
};
qzc.prototype.ajb = function () {
    this.cgb = [];
    this.fgd = [];
    this.mfb = 0;
    this.length = this.cgb.length
};
qzc.prototype.mv = function (cob, cv) {
    if (cob < 0 || cob >= this.cgb.length) return;
    this.cgb[cob] = cv
};
var lgd = 0,
    mgd = 1,
    ngd = 2,
    ogd = 3,
    pgd = 4,
    qgd = 0,
    rgd = 1,
    sgd = -1;

function tgd() {
    this.ugd = "";
    this.vgd = -1;
    this.wgd = 0;
    this.xgd = null;
    this.ygd = lgd;
    this.zgd = !1
}

function lbd() {
    this.cgb = new qzc(5)
};
lbd.prototype.jjb = function () {
    return this.cgb
};
lbd.prototype.zu = function (bv, fcd, ahd, bhd) {
    var chd = new tgd();
    chd.vgd = bv;
    chd.ugd = fcd;
    chd.xgd = bhd;
    chd.ygd = ahd;
    this.cgb.zu(chd);
    bhd.dhd = chd
};
lbd.prototype.ehd = function () {
    var fhd = fv();
    io.ghd = fhd;
    var cgb = this.cgb.cgb;
    for (var xh = 0; xh < cgb.length; xh++) {
        var chd = cgb[xh];
        if (chd != null) {
            if (chd.zgd) {
                kv(fhd);
                nv(fhd, "filename", chd.ugd);
                nv(fhd, "id", chd.vgd);
                nv(fhd, "status", chd.wgd);
                if (chd.ygd == mgd) zy.hhd(cec, 0);
                else if (chd.ygd == ngd) zy.hhd(cec, 0);
                else if (chd.ygd == ogd) zy.hhd(cec, 0);
                else if (chd.ygd == pgd) zy.hhd(dec, 0);
                this.cgb.jv(xh)
            }
        }
    }
    iv(fhd);
    io.ghd = -1
};

function ihd() {
    this.dg = "";
    this.vg = !1;
    this.kg = !1;
    this.preload = !1;
    this.jhd = null
}

function khd(lhd) {
    var ypb = new ihd();
    ypb.dg = lhd.dg;
    if (lhd.vg != undefined) ypb.vg = lhd.vg;
    if (lhd.kg != undefined) ypb.kg = lhd.kg;
    if (lhd.preload != undefined) ypb.preload = lhd.preload;
    ypb.jhd = mhd(lhd.pg);
    return ypb
};

function nhd(lhd) {
    this.ajb();
    if (lhd.fi != undefined) this.fi = lhd.fi;
    if (lhd.ohd != undefined) this.ohd = lhd.ohd;
    if (lhd.bm != undefined) this.bm = lhd.bm;
    if (lhd.ah != undefined) this.ah = lhd.ah;
    if (lhd.bh != undefined) this.bh = lhd.bh;
    if (lhd.cm != undefined) this.phd = lhd.cm;
    if (lhd.dm != undefined) this.qhd = lhd.dm;
    if (lhd.pm != undefined) this.rhd = lhd.pm;
    if (lhd.qm != undefined) this.shd = lhd.qm;
    if (lhd.em != undefined) this.em = lhd.em;
    if (lhd.thd != undefined) this.thd = lhd.thd;
    if (lhd.uhd != undefined) this.uhd = lhd.uhd
}
nhd.prototype.ajb = function () {
    this.fi = !1;
    this.ohd = !1;
    this.bm = -1;
    this.ah = 0;
    this.bh = 0;
    this.phd = !0;
    this.qhd = !0;
    this.rhd = 0;
    this.shd = 0;
    this.vhd = 1;
    this.whd = 1;
    this.em = !1;
    this.thd = 1.0;
    this.uhd = 0xffffff
};

function gbd() {
    this.xhd = [];
    this.yhd = [];
    this.length = 0
}
gbd.prototype.fed = function (cob) {
    return this.xhd[cob]
};
gbd.prototype.ev = function (cob) {
    return this.yhd[cob]
};
gbd.prototype.ajb = function () {
    this.yhd = [];
    length = 0
};
gbd.prototype.eed = function (lhd) {
    var zhd = null;
    if (lhd != null) {
        zhd = khd(lhd)
    }
    return this.aid(zhd)
};
gbd.prototype.aid = function (bid) {
    var xh = this.xhd.length;
    this.xhd[xh] = bid;
    this.length = xh + 1;
    return xh
};
gbd.prototype.zu = function (lhd) {
    with(this) {
        var zhd = null;
        if (lhd != null) {
            zhd = new nhd(lhd)
        }
        yhd[yhd.length] = zhd
    }
};

function zad() {
    this.cid = 0;
    this.ydd = 0;
    this.zdd = 0;
    this.did = 0;
    this.eid = 0;
    this.fid = 0;
    this.gid = 0;
    this.hid = 100;
    this.ndd = 0;
    this.iid = "/";
    this.jid = "/";
    this.kid = "/";
    this.lid = 0;
    this.et = 0;
    this.mid = "room";
    this.pp = 30;
    this.nid = !1;
    this.oid = 0x00000000;
    this.pid = !1;
    this.qid = !1;
    this.rid = !1;
    this.sid = 0;
    this.tid = 0;
    this.uid = 0;
    this.vid = 0;
    this.wid = 0;
    this.xid = 0;
    this.yid = 0;
    this.zid = 1.0;
    this.ajd = 1.0;
    this.bjd = 0;
    this.cjd = 0;
    this.djd = 0;
    this.ejd = 1.0;
    this.fjd = !1;
    this.gjd = 0;
    this.hjd = 0;
    this.ijd = 0;
    this.jjd = 0;
    this.kjd = 0;
    this.ljd = 0;
    this.mjd = 0;
    this.njd = 0;
    this.ojd = 0;
    this.pjd = 0;
    this.qjd = 0;
    this.rjd = 0;
    this.sjd = 0;
    this.tjd = 0;
    this.ujd = 0;
    this.vjd = 0;
    this.dq = 0;
    this.eq = 0;
    this.wjd = 0;
    this.xjd = 0;
    this.yjd = 0;
    this.zjd = 0;
    this.akd = "";
    this.bkd = "";
    this.ckd = -1;
    this.dkd = !1;
    this.ekd = !1;
    this.fkd = !1;
    this.gkd = "score";
    this.hkd = "lives";
    this.ikd = "health";
    this.jkd = 0;
    this.kkd = 0;
    this.lkd = 0;
    this.mkd = 0;
    this.nkd = 0;
    this.okd = 0;
    this.pkd = 0;
    this.qkd = 0;
    this.rkd = 0;
    this.skd = 0;
    this.tkd = 0;
    this.ukd = 0;
    this.vkd = 0;
    this.xfd = 0;
    this.wkd = 0;
    this.xkd = 0;
    this.ykd = !0;
    this.zkd = !0;
    this.ald = 8.2;
    this.ghd = -1;
    this.bld = !1;
    this.jbc = [];
    this.jbc["__view_visible__"] = new kbc("__view_visible__", 1);
    this.jbc["__view_xview__"] = new kbc("__view_xview__", 1);
    this.jbc["__view_yview__"] = new kbc("__view_yview__",
        1);
    this.jbc["__view_wview__"] = new kbc("__view_wview__", 1);
    this.jbc["__view_hview__"] = new kbc("__view_hview__", 1);
    this.jbc["__view_xport__"] = new kbc("__view_xport__", 1);
    this.jbc["__view_yport__"] = new kbc("__view_yport__", 1);
    this.jbc["__view_wport__"] = new kbc("__view_wport__", 1);
    this.jbc["__view_hport__"] = new kbc("__view_hport__", 1);
    this.jbc["__view_angle__"] = new kbc("__view_angle__", 1);
    this.jbc["__view_hborder__"] = new kbc("__view_hborder__", 1);
    this.jbc["__view_vborder__"] = new kbc("__view_vborder__", 1);
    this.jbc["__view_hspeed__"] = new kbc("__view_hspeed__",
        1);
    this.jbc["__view_vspeed__"] = new kbc("__view_vspeed__", 1);
    this.jbc["__view_object__"] = new kbc("__view_object__", 1);
    this.jbc["__view_surface_id__"] = new kbc("__view_surface_id__", 1)
}
zad.prototype.zo = function () {
    return cld()
};
zad.prototype.bp = function () {
    return dld()
};
zad.prototype.jo = function () {
    return ufb.hm
};
zad.prototype.su = function (eld) {
    for (var mzb in eld) {
        var ucd = eld[mzb];
        this[mzb] = ucd
    }
};
var fld = 0;
var gld = 1;
var hld = 2;
var ild = 3;
var jld = 4;
var kld = 5;
var lld = 6;
var mld = 7;
var nld = 8;
var old = 9;
var pld = 10;
var qld = 11;
var rld = 12;
var sld = 13;
var tld = 14;

function uld() {
    this.vld = [];
    this.wld()
}
uld.prototype.wld = function (cob, xld) {
    this.vld.length = 0;
    this.yld = [];
    this.yld[0] = 1;
    this.yld[1] = 1;
    this.zld = undefined
};
uld.prototype.amd = function (cob, xld) {
    if (this.yld[cob] == xld) return;
    this.yld[cob] = xld;
    this.vld.push(gld);
    this.vld.push(xld)
};
uld.prototype.bmd = function (cmd) {
    if (this.zld == cmd) return;
    this.zld = cmd;
    this.vld.push(qld);
    this.vld.push(cmd)
};
uld.prototype.dmd = function (emd, fmd) {
    this.vld.push(hld);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.gmd = function (emd,
    fmd) {
    this.vld.push(ild);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.hmd = function (emd, fmd) {
    this.vld.push(jld);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.imd = function (emd, fmd) {
    this.vld.push(kld);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.jmd = function (emd, fmd) {
    this.vld.push(lld);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.kmd = function (emd, fmd) {
    this.vld.push(mld);
    this.vld.push(emd);
    this.vld.push(fmd)
};
uld.prototype.lmd = function (cfd) {
    this.vld.push(nld);
    var mmd = new bfd(cfd);
    this.vld.push(mmd)
};
uld.prototype.nmd = function (cfd) {
    this.vld.push(old);
    var mmd = new bfd(cfd);
    this.vld.push(mmd)
};
uld.prototype.omd = function (ay, by, mu, nu) {
    this.vld.push(pld);
    this.vld.push(ay);
    this.vld.push(by);
    this.vld.push(mu);
    this.vld.push(nu)
};
uld.prototype.pmd = function (qmd, sab) {
    this.vld.push(rld);
    this.vld.push(qmd);
    this.vld.push(~~sab)
};
uld.prototype.rmd = function (smd) {
    this.vld.push(sld);
    this.vld.push(smd)
};
uld.prototype.tmd = function () {
    var xh, vld, error;
    xh = 0;
    vld = this.vld;
    bwc.useProgram(bwc.umd);
    bwc.enable(bwc.BLEND);
    bwc.blendFuncSeparate(bwc.SRC_ALPHA, bwc.ONE_MINUS_SRC_ALPHA, bwc.ONE, bwc.ONE);
    bwc.activeTexture(bwc.TEXTURE0);
    while (xh < vld.length) {
        switch (vld[xh]) {
        case nld:
            bwc.uniformMatrix4fv(bwc.umd.vmd, !1, vld[xh + 1].mbb);
            xh += 2;
            break;
        case old:
            bwc.uniformMatrix4fv(bwc.umd.wmd, !1, vld[xh + 1].mbb);
            xh += 2;
            break;
        case rld:
            var tz = vld[xh + 2];
            bwc.clearColor((tz & 0xff) / 255.0, ((tz >> 8) & 0xff) / 255.0, ((tz >> 16) & 0xff) / 255.0, ((tz >> 24) & 0xff) / 255.0);
            bwc.clear(vld[xh + 1]);
            xh += 3;
            break;
        case pld:
            {
                bwc.viewport(vld[xh + 1], vld[xh + 2], vld[xh + 3], vld[xh + 4]);
                xh += 5;
                break
            }
        case sld:
            {
                bwc.bindFramebuffer(bwc.FRAMEBUFFER, vld[xh + 1]);
                xh += 2;
                break
            }
        case tld:
            {
                bwc.colorMask(vld[xh + 2], vld[xh + 3], vld[xh + 4], vld[xh + 1]);
                xh += 5;
                break
            }
        case gld:
            var cpb = vld[xh + 1];
            if (cpb == null) {
                cpb = bwc.xmd.cpb;
                bwc.activeTexture(bwc.TEXTURE0);
                bwc.bindTexture(bwc.TEXTURE_2D, cpb.ymd);
                bwc.uniform1i(bwc.umd.zmd, 0);
                bwc.uniform2f(bwc.umd.and, 1.0 / cpb.pu, 1.0 / cpb.qu)
            } else {
                bwc.activeTexture(bwc.TEXTURE0);
                bwc.bindTexture(bwc.TEXTURE_2D, cpb.ymd);
                bwc.uniform1i(bwc.umd.zmd, 0);
                bwc.uniform2f(bwc.umd.and, 1.0 / cpb.pu,
                    1.0 / cpb.qu)
            }
            xh += 2;
            break;
        case qld:
            {
                var bnd = vld[xh + 1];
                if (bnd.cnd) bnd.dnd();
                bnd.end = fnd;
                bwc.bindBuffer(bwc.ARRAY_BUFFER, bnd.gnd);
                bwc.enableVertexAttribArray(bwc.umd.hnd);
                bwc.vertexAttribPointer(bwc.umd.hnd, 2, bwc.SHORT, !1, 0, 0);
                bwc.bindBuffer(bwc.ARRAY_BUFFER, bnd.ind);
                bwc.enableVertexAttribArray(bwc.umd.jnd);
                bwc.vertexAttribPointer(bwc.umd.jnd, 4, bwc.UNSIGNED_BYTE, !0, 0, 0);
                bwc.bindBuffer(bwc.ARRAY_BUFFER, bnd.knd);
                bwc.enableVertexAttribArray(bwc.umd.lnd);
                bwc.vertexAttribPointer(bwc.umd.lnd, 2, bwc.SHORT, !1,
                    0, 0);
                xh += 2
            }
            break;
        case hld:
            {
                bwc.drawArrays(bwc.TRIANGLES, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        case ild:
            {
                bwc.drawArrays(bwc.TRIANGLE_FAN, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        case jld:
            {
                bwc.drawArrays(bwc.TRIANGLE_STRIP, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        case kld:
            {
                bwc.drawArrays(bwc.LINES, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        case lld:
            {
                bwc.drawArrays(bwc.LINE_STRIP, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        case mld:
            {
                bwc.drawArrays(bwc.POINT, vld[xh + 1], vld[xh + 2]);
                xh += 3;
                break
            }
        }
    }
    error = bwc.getError()
};

function sy() {
    this.ty = !1;
    this.mnd = !1;
    this.dg = "";
    this.iy = "";
    this.mh = 12;
    this.bold = !1;
    this.nh = !1;
    this.oh = 32;
    this.ph = 127;
    this.uy = "";
    this.prop = !1;
    this.nnd = 0;
    this.rh = 0;
    this.qh = 0;
    this.ond = 1;
    this.pnd = 1;
    this.wh = null;
    this.jhd = null;
    this.qnd = null
}
sy.prototype.rnd = function (lhd) {
    this.dg = lhd.dg;
    this.iy = lhd.sh;
    this.mh = lhd.mh;
    this.bold = lhd.bold;
    this.nh = lhd.nh;
    this.oh = lhd.oh & 0xffff;
    this.ty = !1;
    this.rh = 0;
    this.qh = 0;
    if (((lhd.oh >> 16) & 0xff) !== 0) this.qh = (lhd.oh >> 16) & 0xff;
    if (((lhd.oh >> 24) & 0xff) !== 0) this.rh = ((lhd.oh >> 24) & 0xff) - 1;
    this.ph = lhd.ph;
    this.ond = lhd.uh;
    this.pnd = lhd.vh;
    this.wh = [];
    var xgb = 99999999;
    var vu = -99999999;
    for (var snd in lhd.wh) {
        var bm = -2;
        tnd = lhd.wh[snd];
        if (tnd.yh != undefined) bm = tnd.yh.charCodeAt(0);
        else if (tnd.xh != undefined) bm = tnd.xh;
        this.wh[bm] = tnd;
        if (bm < xgb) xgb = bm;
        if (bm > vu) vu = bm
    }
    this.oh = xgb;
    this.ph = xgb;
    this.jhd = mhd(lhd.th)
};
sy.prototype.und = function (rqb) {
    if (this.ty) {
        if (this.mnd) {
            var yh = rqb.charCodeAt(0);
            if (yh < this.oh || yh > this.ph) yh = this.oh;
            var yob = this.qnd.apb[yh - this.oh];
            return yob.wm
        } else {
            return this.mh
        }
    } else {
        return this.wh[this.oh].ai
    }
};
sy.prototype.vnd = function (qx) {
    if (qx == null) return 0;
    if (this.ty) {
        if (this.mnd) {
            var pbb = 0;
            var xh = 0;
            while (xh < qx.length) {
                var yh = qx.charCodeAt(xh++);
                if (yh < this.oh || yh > this.ph) yh = this.oh;
                var yob = this.qnd.apb[yh - this.oh];
                if (this.prop) pbb += yob.vm;
                else pbb += yob.xm
            }
            return pbb
        } else {
            uab.font = this.uy;
            var wnd = uab.measureText(qx);
            return wnd.width
        }
    } else {
        var pbb = 0;
        var xh = 0;
        while (xh < qx.length) {
            var yh = qx.charCodeAt(xh++);
            var tnd = this.wh[yh];
            if (!tnd) tnd = this.wh[this.oh];
            pbb = pbb + tnd.shift
        }
        return pbb
    }
};
sy.prototype.xnd = function (ynd) {
    if (this.ty) {
        if (this.mnd) {
            var pbb = 0;
            if (ynd < this.oh || ynd > this.ph) ynd = this.oh;
            var yob = this.qnd.apb[ynd - this.oh];
            if (this.prop) pbb += yob.vm;
            else pbb += yob.xm;
            return pbb
        } else {
            uab.font = this.uy;
            var wnd = uab.measureText(String.fromCharCode(ynd));
            return wnd.width
        }
    }
    var tnd = this.wh[ynd];
    if (tnd) {
        return tnd.shift
    } else if (0x20 >= this.oh && 0x20 <= this.ph) {
        return this.wh[0x20].shift
    } else {
        return this.wh[this.oh].shift
    }
};
sy.prototype.znd = function (ay, by, aod, dy, ey, fy, sab, tab) {
    var bod;
    var cod = this.jhd;
    if (!cod.cpb.complete) return;
    var cx = aod.length;
    sab = sab & 0xffffff | ((tab * 255) << 24);
    for (var xh = 0; xh < cx; xh++) {
        ynd = aod.charCodeAt(xh);
        var tnd = this.wh[ynd];
        if (!tnd) tnd = this.wh[0x20];
        var dod = tnd.ah;
        var eod = tnd.bh;
        var fod = tnd.zh;
        var god = tnd.ai;
        if (Math.abs(fy) < 0.001) {
            uab.xob(cod, dod + cod.ah, eod + cod.bh, fod, god, ay + tnd.bi, by, fod * this.ond * dy, god * this.pnd * ey, sab)
        } else {
            uab.xob(cod, dod + cod.ah, eod + cod.bh, fod, god, ay + tnd.bi, by, fod, god, sab)
        }
        ay += this.xnd(ynd)
    }
};
sy.prototype.hod = function (ay, by, aod, dy, ey, fy, sab, tab) {
    var bod;
    var cod = dpb[this.jhd.zm];
    if (!cod.complete) return;
    uab.globalAlpha = tab;
    var cx = aod.length;
    sab = sab & 0xffffff;
    if (sab != 0xffffff) {
        bod = iod(this.jhd, sab)
    }
    fy = aad(fy);
    if (Math.abs(fy) > 0.001) {
        jod(ay, by, this.ond * dy, this.ond * ey, -fy);
        ay = 0;
        by = 0
    }
    for (var xh = 0; xh < cx; xh++) {
        ynd = aod.charCodeAt(xh);
        var tnd = this.wh[ynd];
        if (!tnd) tnd = this.wh[0x20];
        var dod = tnd.ah;
        var eod = tnd.bh;
        var fod = tnd.zh;
        var god = tnd.ai;
        if ((sab != 0xffffff) && (bod != null)) {
            if (Math.abs(fy) < 0.001) {
                uab.xob(bod, dod, eod, fod, god, ay + tnd.bi, by, fod * this.ond * dy, god * this.pnd * ey)
            } else {
                uab.xob(bod, dod, eod, fod, god, ay + tnd.bi, by, fod, god)
            }
        } else {
            if (Math.abs(fy) < 0.001) {
                uab.xob(cod, dod + this.jhd.ah, eod + this.jhd.bh, fod, god, ay + tnd.bi, by, fod * this.ond * dy, god * this.pnd * ey)
            } else {
                uab.xob(cod, dod + this.jhd.ah, eod + this.jhd.bh, fod, god, ay + tnd.bi, by, fod, god)
            }
        }
        ay += this.xnd(ynd)
    }
    if (Math.abs(fy) > 0.001) kod()
};
sy.prototype.lod = function (ay, by, aod, dy, ey, fy, sab, tab) {
    if (this.qnd == null) return;
    uab.globalAlpha = tab;
    var cx = aod.length;
    sab = sab & 0xffffff;
    var tz = sab | (xbb * 255) << 24;
    fy = aad(fy);
    var kbb = Math.sin(fy);
    var mod = Math.cos(fy);
    var nod = kbb * dy;
    var ood = mod * dy;
    var pod = this.ond * dy;
    var qod = this.pnd * ey;
    for (var xh = 0; xh < cx; xh++) {
        ynd = aod.charCodeAt(xh);
        if (ynd < this.oh || ynd > this.ph) {} else {
            var ah = ay;
            var bh = by;
            var yob = this.qnd.apb[ynd - this.oh];
            var cod = dpb[yob.zm];
            if (cod.complete) {
                var seb = yob.tm;
                var teb = yob.um;
                if (this.prop) seb = 0;
                if (sab != 0xffffff) {
                    var bod;
                    if (!bwc) {
                        bod = iod(yob, sab)
                    } else {
                        bod = yob
                    } if (Math.abs(fy) < 0.001) {
                        uab.xob(bod, 0, 0, yob.vm, yob.wm, ah + (seb * pod), bh + (teb * qod), yob.vm * pod, yob.wm * qod)
                    } else {
                        jod(ah, bh, pod, qod, -fy);
                        uab.xob(bod, 0, 0, yob.vm, yob.wm, seb, teb, yob.vm, yob.wm);
                        kod()
                    }
                } else {
                    if (bwc) {
                        cod = yob;
                    }
                    if (Math.abs(fy) < 0.001) {
                        uab.xob(cod, yob.ah, yob.bh, yob.zh, yob.ai, ah + (seb * pod), bh + (teb * qod), yob.vm * pod, yob.wm * qod)
                    } else {
                        jod(ah, bh, pod, qod, -fy);
                        uab.xob(cod, yob.ah, yob.bh, yob.zh, yob.ai, seb, teb, yob.vm, yob.wm);
                        kod()
                    }
                }
            }
        }
        var shift = this.xnd(ynd);
        ay = ay + ood * (shift + this.nnd);
        by = by - nod * (shift + this.nnd)
    }
};
sy.prototype.rod = function (ay, by, aod, dy, ey, fy, sab, tab) {
    if (this.qnd == null) return;
    uab.globalAlpha = tab;
    var cx = aod.length;
    sab = sab & 0xffffff;
    var tz = sab | (xbb * 255) << 24;
    fy = aad(fy);
    var kbb = Math.sin(fy);
    var mod = Math.cos(fy);
    var nod = kbb * dy;
    var ood = mod * dy;
    var pod = this.ond * dy;
    var qod = this.pnd * ey;
    for (var xh = 0; xh < cx; xh++) {
        ynd = aod.charCodeAt(xh);
        if (ynd < this.oh || ynd > this.ph) {} else {
            var ah = ay;
            var bh = by;
            var yob = this.qnd.apb[ynd - this.oh];
            var cod = dpb[yob.zm];
            if (cod.complete) {
                var seb = yob.tm;
                var teb = yob.um;
                if (this.prop) seb = 0;
                if (Math.abs(fy) < 0.001) {
                    uab.xob(yob, yob.ah, yob.bh, yob.zh, yob.ai, ah + (seb * pod), bh + (teb * qod), yob.vm * pod, yob.wm * qod, tz)
                } else {
                    jod(ah, bh, pod, qod, -fy);
                    uab.xob(yob, yob.ah, yob.bh, yob.zh, yob.ai, seb, teb, yob.vm, yob.wm, tz);
                    kod()
                }
            }
        }
        var shift = this.xnd(ynd);
        ay = ay + ood * (shift + this.nnd);
        by = by - nod * (shift + this.nnd)
    }
};

function ibd() {
    this.lh = [];
    this.length = 0;
    this.sod = null;
    this.yx = 0;
    this.wx = 0;
    this.vx = 0;
    var hy = ky("Arial", 12, !1, !1, 32, 127, !1);
    this.lh[-1] = hy;
    pxc = -1;
    this.yx = pxc
}
ibd.prototype.ajb = function () {
    this.lh = [];
    length = 0
};
ibd.prototype.zu = function (lhd) {
    var hy = null;
    if (lhd != null) {
        hy = new sy();
        hy.rnd(lhd)
    }
    this.lh[this.lh.length] = hy;
    return this.lh.length - 1;
};
ibd.prototype.vy = function (tod) {
    this.lh[this.lh.length] = tod;
    return this.lh.length - 1
};
ibd.prototype.uod = function () {
    if (this.yx >= 0 && this.yx <= this.lh.length && this.lh[this.yx] != null) {
        this.sod = this.lh[this.yx]
    } else {
        this.sod = this.lh[-1]
    }
};
ibd.prototype.ev = function (bv) {
    if (bv >= 0 && bv <= this.lh.length && this.lh[bv]) {
        return this.lh[bv]
    }
    return null
};

function vod(qx) {
    if (qx == null) return 0;
    var wod = qx;
    var xod = "";
    var xh = 0;
    var yod = 0;
    while (yod < wod.length) {
        var rx = wod[yod];
        if (rx == '#') {
            if (xh > 0) {
                if (wod[yod - 1] == '\\') {
                    xod = xod.substring(0, xod.length - 1) + '#'
                } else {
                    xod += String.fromCharCode(0x0a);
                    xh++
                }
            }
        } else {
            xod += rx;
            xh++
        }
        yod++
    }
    return xod
}
ibd.prototype.zod = function (aod, apd) {
    {
        var zw = String.fromCharCode(0x0a);
        if (aod == null) return;
        if (apd < 0) apd = 10000000;
        bpd = [];
        var cpd = 0;
        aod = vod(aod);
        var cx = aod.length;
        var dpd = aod;
        var epd = 0;
        var fpd = 0;
        while (epd < cx) {
            var gpd = 0;
            if (apd == 10000000) {
                while (fpd < cx && dpd[fpd] != zw) {
                    fpd++
                }
                bpd[cpd++] = dpd.substring(epd, fpd)
            } else {
                while (fpd < cx) {
                    if (dpd[fpd] != " ") break;
                    fpd++
                }
                while (fpd < cx && gpd < apd) {
                    yh = dpd[fpd];
                    if (yh == zw) break;
                    gpd += this.sod.xnd(yh.charCodeAt(0));
                    fpd++
                }
                if (gpd > apd) {
                    fpd--;
                    gpd -= this.sod.xnd(dpd.charCodeAt(fpd))
                }
                if (dpd[fpd] == zw) {
                    bpd[cpd++] = dpd.substring(epd, fpd)
                } else {
                    if (fpd == epd) return bpd;
                    if (fpd != cx) {
                        if ((dpd[fpd] != " ") || (dpd[fpd] != " " && dpd[fpd + 1] != " ")) {
                            while (fpd > epd) {
                                if (dpd[--fpd] == " ") break
                            }
                        }
                    }
                    if (fpd > 0) {
                        while (dpd[fpd - 1] == " ") {
                            fpd--
                        }
                    }
                    bpd[cpd++] = dpd.substring(epd, fpd)
                }
            }
            epd = ++fpd
        }
        return bpd
    }
};
ibd.prototype.cy = function (qx, ah, bh, hpd, apd, fy, dy, ey) {
    with(this) {
        var vhd = dy;
        var whd = ey;
        var ipd = 0.0;
        var jpd = 0.0;
        var bpd = [];
        var xh = 0;
        uod();
        bpd = zod(qx, apd);
        var kpd = aad(fy);
        var kbb = Math.sin(kpd);
        var mod = Math.cos(kpd);
        if (hpd < 0) {
            hpd = sod ? sod.und("M") : 20
        }
        var lpd = kbb * whd * hpd;
        var mpd = mod * whd * hpd;
        if (wx == 1) {
            bh = bh - Math.round((bpd.length * mpd) / 2.0);
            ah = ah - Math.round((bpd.length * lpd) / 2.0)
        }
        if (wx == 2) {
            bh = bh - Math.round(bpd.length * mpd);
            ah = ah - Math.round(bpd.length * lpd)
        }
        if (!sod) {
            uab.fillStyle = wbb;
            uab.globalAlpha = xbb;
            for (xh = 0; xh <= bpd.length - 1; xh++) {
                var npd = bpd[xh];
                if (npd != null) {
                    uab.fillText(npd, ah, bh + 13);
                    bh = bh + mpd;
                    ah = ah + lpd
                }
            }
        } else {
            for (xh = 0; xh <= bpd.length - 1; xh++) {
                ipd = 0;
                jpd = 0;
                var npd = bpd[xh];
                if (npd != null) {
                    if (vx == 1) ipd = -(vhd * sod.vnd(npd) / 2);
                    if (vx == 2) ipd = -(vhd * sod.vnd(npd));
                    var leb = ah + mod * ipd + kbb * jpd;
                    var meb = bh - kbb * ipd + mod * jpd;
                    if (sod.ty) {
                        if (sod.mnd) {
                            if (!bwc) {
                                sod.lod(leb, meb, npd, vhd, whd, fy, tbb, xbb)
                            } else {
                                sod.rod(leb, meb, npd, vhd, whd, fy, tbb, xbb)
                            }
                        } else {
                            opd(sod.uy, npd, leb, meb + 13, 1, 1, fy, tbb, xbb)
                        }
                    } else {
                        if (bwc) {
                            sod.znd(leb, meb, npd, vhd, whd, fy, tbb, xbb)
                        } else {
                            sod.hod(leb, meb, npd, vhd, whd, fy, tbb, xbb)
                        }
                    }
                }
                bh = bh + mpd;
                ah = ah + lpd
            }
        }
    }
};
var ppd;
var dpb;
var qpd = null;
var xtb = 1024;
var ytb = 768;
var rpd = 1;
var aub = 1;
var abb = 0;
var bbb = 0;
var cbb = 0;
var dbb = 0;
var spd = 0;
var tpd = 0;
var upd = 0;
var vpd = 0;
var wpd = [];
var fnd = 0;
var xpd = 0xffffff;
var ypd;
var zpd;
var aqd;
var bqd;
var kod;
var cqd;
var jod;
var htb;

function dqd() {
    return xtb
}

function eqd() {
    return ytb
}

function uob(fqd) {
    if (!fqd) return;
    fqd.gqd = fqd.transform;
    fqd.xab = fqd.setTransform;
    fqd.vab = fqd.save;
    fqd.ebb = fqd.restore;
    fqd.jcb = fqd.fillRect;
    fqd.icb = fqd.strokeRect;
    fqd.gdb = fqd.beginPath;
    fqd.bfb = fqd.arc;
    fqd.jdb = fqd.stroke;
    fqd.kdb = fqd.closePath;
    fqd.lineWidth = fqd.lineWidth;
    fqd.hdb = fqd.moveTo;
    fqd.idb = fqd.lineTo;
    fqd.ldb = fqd.fill;
    fqd.xob = fqd.drawImage;
    fqd.esb = fqd.getImageData;
    fqd.hqd = fqd.createImageData;
    fqd.iqd = fqd.putImageData;
    fqd.jqd = fqd.clip;
    fqd.kqd = fqd.rect
}

function bbd(lqd) {
    dpb = [];
    qpd = null;
    abb = 0;
    bbb = 0;
    cbb = 0;
    dbb = 0;
    spd = 0;
    tpd = 0;
    upd = 0;
    vpd = 0;
    wpd = [];
    wpd[0] = 1;
    wpd[1] = 0;
    wpd[2] = 0;
    wpd[3] = 0;
    wpd[4] = 1;
    wpd[5] = 0;
    if (!bwc) {
        if (lbc) {
            ypd = mqd
        } else {
            ypd = nqd
        }
        zpd = oqd;
        pqd = qqd;
        aqd = rqd;
        bqd = sqd;
        kod = tqd;
        cqd = uqd;
        jod = vqd;
        htb = wqd;
        xqd = yqd;
        zqd = ard;
        opd = brd;
        crd = drd;
        erd = frd;
        if (mbc) {
            if (lbc) {
                xpd = 0x1ffffff;
                ypd = grd
            } else {
                ypd = hrd
            }
            zpd = oqd;
            pqd = ird
        }
    } else {
        jrd()
    }
    aqd(0, 0, ntb, otb);
    bqd(0, 0, ntb, otb)
}

function yqd() {
    uab.vab()
}

function ard() {
    uab.ebb()
}

function bed(krd) {
    qpd = krd;
    for (var xh in krd) {
        var yob = krd[xh];
        yob.xqb = [];
        yob.mfb = 0;
        yob.yqb = 4;
        yob.zqb = 0;
        yob.arb = null;
        yob.rob = null;
        yob.cpb = dpb[yob.zm]
    }
}

function lrd() {
    this.ypb = null;
    this.mrd = 0
}

function iod(cqb, rbb) {
    var nrd = cqb.xqb[rbb];
    if (nrd != null) {
        nrd.mrd = fnd;
        return nrd.ypb
    }
    var ord = -9999999999;
    nrd = null;
    prd = -1;
    if (cqb.mfb < cqb.yqb) {
        nrd = new lrd();
        cqb.mfb++
    } else {
        for (var xh in cqb.xqb) {
            var qrd = cqb.xqb[xh];
            if (qrd != null) {
                var ru = fnd - qrd.mrd;
                if (ru > ord) {
                    prd = xh;
                    nrd = qrd;
                    ord = ru
                }
            }
        }
    } if (prd >= 0) cqb.xqb[prd] = null;
    cqb.xqb[rbb] = nrd;
    nrd.mrd = fnd;
    nrd.ypb = rrd(cqb, rbb);
    return nrd.ypb
}

function mhd(cob) {
    return qpd[cob]
}

function tqd() {
    uab.xab(wpd[0], wpd[3], wpd[1], wpd[4],
        wpd[2], wpd[5])
}

function uqd(sab) {
    uab.vab();
    var wab = [];
    wab[0] = 1;
    wab[1] = 0;
    wab[2] = 0;
    wab[3] = 1;
    wab[4] = 0;
    wab[5] = 0;
    uab.xab(wab[0], wab[1], wab[2], wab[3], wab[4], wab[5]);
    uab.fillStyle = vbb(sab | 0xff000000);
    uab.jcb(abb, bbb, cbb, dbb);
    uab.ebb()
}

function rqd(srd, trd, urd, vrd) {
    abb = srd;
    bbb = trd;
    cbb = urd;
    dbb = vrd
}

function wrd(ay, by, mu, nu, fy) {
    var xrd = new kfd((ay + mu / 2.0), (by + nu / 2.0), -16000.0);
    var yrd = new kfd((ay + mu / 2.0), (by + nu / 2.0), 0.0);
    var zrd = new kfd(Math.sin(-fy * (Math.PI / 180.0)), Math.cos(-fy * (Math.PI / 180.0)), 0.0);
    hwc.ffd(xrd, yrd,
        zrd);
    gwc.ufd(mu, -nu * qxc, 1.0, 32000.0)
}

function vqd(ay, by, ysb, zsb, fy) {
    var wab = [];
    wab[0] = Math.cos(fy);
    wab[3] = Math.sin(fy);
    wab[1] = -wab[3];
    wab[4] = wab[0];
    wab[0] *= ysb;
    wab[3] *= ysb;
    wab[1] *= zsb;
    wab[4] *= zsb;
    wab[2] = ay;
    wab[5] = by;
    uab.gqd(wab[0], wab[3], wab[1], wab[4], wab[2], wab[5])
}

function sqd(asd, bsd, csd, dsd, fy) {
    wpd[0] = 1;
    wpd[1] = 0;
    wpd[2] = 0;
    wpd[3] = 1;
    wpd[4] = 0;
    wpd[5] = 0;
    uab.xab(wpd[0], wpd[1], wpd[2], wpd[3], wpd[4], wpd[5]);
    uab.gdb();
    uab.kqd(abb, bbb, cbb, dbb);
    uab.jqd();
    var zh = cbb / csd;
    var ai = dbb / dsd;
    spd = asd;
    tpd = bsd;
    upd = csd;
    vpd = dsd;
    wpd[0] = zh;
    wpd[1] = 0;
    wpd[2] = -(asd * zh) + abb;
    wpd[3] = 0;
    wpd[4] = ai;
    wpd[5] = -(bsd * ai) + bbb;
    kod()
}

function gcd(ly) {
    var xh = dpb.length;
    var cpb = new Image();
    cpb.src = ly;
    dpb[xh] = cpb;
    return xh
}

function bpb(esd) {
    var xh = dpb.length;
    dpb[xh] = esd;
    return xh
}

function drd() {
    fnd++
}

function frd() {}

function zpb(cqb) {
    var rob = document.createElement(sob);
    var dsb = rob.getContext('2d');
    uob(dsb);
    rob.width = cqb.zh;
    rob.height = cqb.ai;
    dsb.xob(cqb.cpb, cqb.ah, cqb.bh, cqb.zh, cqb.ai, 0, 0, cqb.zh, cqb.ai);
    rob.complete = !0;
    return rob
}

function kqb(cqb) {
    var rob = document.createElement(sob);
    var dsb = rob.getContext('2d');
    uob(dsb);
    var hqb = [];
    var bjb = cqb.xm * cqb.ym * 4;
    for (var xh = 0; xh < bjb; xh++) hqb[xh] = 0;
    rob.width = cqb.zh;
    rob.height = cqb.ai;
    dsb.xob(cqb.cpb, cqb.ah, cqb.bh, cqb.zh, cqb.ai, 0, 0, cqb.zh, cqb.ai);
    rob.complete = !0;
    var data, gsb, fsd, gsd;
    try {
        data = dsb.getImageData(0, 0, cqb.zh, cqb.ai)
    } catch (fsb) {
        return hqb
    }
    hsd = data.data;
    var isd = (cqb.tm + (cqb.um * cqb.xm)) * 4;
    for (bh = 0; bh < cqb.ai; bh++) {
        var jsd = isd;
        var ksd = (bh * data.width) * 4;
        var lsd = cqb.zh * 4;
        for (ah = 0; ah < lsd; ah++) {
            hqb[jsd++] = hsd[ksd++]
        }
        isd += cqb.xm * 4
    }
    return hqb
}

function mqd(cqb,
    ay, by, tab) {
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    if (cqb.rob == null) cqb.rob = zpb(cqb);
    ay += cqb.tm;
    by += cqb.um;
    uab.globalAlpha = tab;
    uab.xob(cqb.rob, ~~ay, ~~by)
}

function grd(cqb, ay, by, tab) {
    mqd(cqb, ay, by, tab)
}

function nqd(cqb, ay, by, tab) {
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    uab.globalAlpha = tab;
    uab.xob(cqb.cpb, ~~cqb.ah, ~~cqb.bh, cqb.zh, cqb.ai, Math.floor(ay) + cqb.tm, Math.floor(by) + cqb.um, cqb.vm, cqb.wm)
}

function hrd(cqb, ay, by, tab) {
    nqd(cqb, ay, by, tab)
}

function oqd(cqb, ay, by, msd, nsd, sab, tab) {
    var osd = cqb.cpb;
    if (!osd) return;
    if (!osd.complete) return;
    var xh = 0;
    if (msd) xh = 1;
    if (nsd) xh |= 2;
    if (xh == 0) {
        uab.globalAlpha = tab;
        uab.xob(osd, cqb.ah, cqb.bh, cqb.zh, cqb.ai, ay + cqb.tm, by + cqb.um, cqb.vm, cqb.wm);
        return
    }
    var zh = cqb.xm;
    var ai = cqb.ym;
    if (msd) {
        zh = (((((krb.nrb + (cqb.xm - 1)) / cqb.xm) & 0xffffffff) + 2) * cqb.xm);
        ay = (((~~(spd / cqb.xm)) * cqb.xm) + (~~ay) % cqb.xm) - cqb.xm
    }
    if (nsd) {
        ai = (((((krb.orb + (cqb.ym - 1)) / cqb.ym) & 0xffffffff) + 2) * cqb.ym);
        by = (((~~(tpd / cqb.ym)) * cqb.ym) + (~~by) % cqb.ym) - cqb.ym
    }
    if ((cqb.arb != null) && (cqb.arb.width < zh || cqb.arb.height < ai)) {
        cqb.arb = null;
        cqb.psd = 0
    }
    if ((cqb.zqb != xh) || (!cqb.arb)) {
        cqb.zqb = xh;
        var qsd = document.createElement(sob);
        var dsb = qsd.getContext('2d');
        uob(dsb);
        qsd.width = zh;
        qsd.height = ai;
        uab.globalAlpha = 1;
        var rsd = zh / cqb.xm;
        var ssd = ai / cqb.ym;
        for (var bh = 0; bh < ssd; bh++) {
            for (var ah = 0; ah < rsd; ah++) {
                dsb.xob(osd, cqb.ah, cqb.bh, cqb.vm, cqb.wm, cqb.tm + (ah * cqb.xm), cqb.um + (bh * cqb.ym), cqb.vm, cqb.wm)
            }
        }
        cqb.arb = qsd
    }
    uab.globalAlpha = tab;
    uab.xob(cqb.arb, ay, by)
}

function qqd(cqb, gpb, hpb, ay, by, tsd, usd, vsd, gz, hz, mcb, ncb, tab) {
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    if ((abs(tsd) <= 0.0001) || (abs(usd) <= 0.0001) || (tab <= 0)) return;
    gz &= 0xffffff;
    var seb = -(gpb - cqb.tm);
    var teb = -(hpb - cqb.um);
    ay = ~~ay;
    by = ~~by;
    uab.globalAlpha = tab;
    if (gz != xpd) {
        var bod = iod(cqb, gz);
        if (Math.abs(vsd) < 0.001 && usd == 1 && tsd == 1) {
            uab.xob(bod, 0, 0, cqb.zh, cqb.ai, (ay + (seb * tsd)), (by + (teb * usd)), (cqb.vm * tsd), (cqb.wm * usd))
        } else {
            jod(ay, by, tsd, usd, -vsd);
            uab.xob(bod, 0, 0, cqb.zh, cqb.ai, seb, teb, cqb.vm, cqb.wm);
            kod()
        }
    } else {
        if (Math.abs(vsd) < 0.001 && usd == 1 && tsd == 1) {
            if (cqb.rob == null) cqb.rob = zpb(cqb);
            ay += seb;
            by += teb;
            uab.xob(cqb.rob, ~~ay, ~~by)
        } else {
            jod(ay, by, tsd, usd, -vsd);
            uab.xob(cqb.cpb, cqb.ah, cqb.bh, cqb.zh, cqb.ai, seb, teb, cqb.vm, cqb.wm);
            kod()
        }
    }
}

function ird(cqb, gpb, hpb, ay, by, tsd, usd, vsd, gz, hz, mcb, ncb, tab) {
    try {
        qqd(cqb.cpb, gpb, hpb, ay, by, tsd, usd, vsd, gz, hz, mcb, ncb, tab)
    } catch (fsb) {
        dx("error drawing image")
    }
}

function rrd(cqb, sab) {
    var qsd = document.createElement(sob);
    var dsb = qsd.getContext('2d');
    uob(dsb);
    qsd.width = cqb.zh;
    qsd.height = cqb.ai;
    dsb.xob(cqb.cpb, cqb.ah, cqb.bh, cqb.zh, cqb.ai, 0, 0, cqb.zh, cqb.ai);
    if (~~sab != 0xffffff) {
        var data, gsb, fsd,
            gsd;
        try {
            data = dsb.esb(0, 0, cqb.zh, cqb.ai)
        } catch (fsb) {
            return qsd
        }
        gsb = data.data;
        wsd = dsb.hqd(cqb.zh, cqb.ai);
        gsd = wsd.data;
        var qz = ((sab >> 16) & 0xff) / 255;
        var rz = ((sab >> 8) & 0xff) / 255;
        var sz = (sab & 0xff) / 255;
        var gpd = (data.height * data.width * 4);
        for (var xh = gpd - 4; xh >= 00; xh -= 4) {
            gsd[xh] = (gsb[xh] * qz) | 0;
            gsd[xh + 1] = (gsb[xh + 1] * rz) | 0;
            gsd[xh + 2] = (gsb[xh + 2] * sz) | 0;
            gsd[xh + 3] = (gsb[xh + 3])
        }
        wsd.data = gsd;
        dsb.iqd(wsd, 0, 0)
    }
    return qsd
}

function xsd(cqb, acb, bcb, ccb, dcb, edb, fdb, ysd, zsd, tab) {
    var osd = cqb.cpb;
    if (!osd) return;
    if (!osd.complete) return;
    uab.globalAlpha = tab;
    atd(osd, acb, bcb, ccb, dcb, edb, fdb, cqb.ah, cqb.bh, cqb.ah + cqb.zh, cqb.bh, cqb.ah + cqb.zh, cqb.bh + cqb.ai);
    atd(osd, edb, fdb, ysd, zsd, acb, bcb, cqb.ah + cqb.zh, cqb.bh + cqb.ai, cqb.ah, cqb.bh + cqb.ai, cqb.ah, cqb.bh)
}

function atd(ded, btd, ctd, geb, heb, ieb, jeb, dtd, etd, ftd, gtd, htd, itd) {
    uab.vab();
    uab.gdb();
    uab.hdb(btd, ctd);
    uab.idb(geb, heb);
    uab.idb(ieb, jeb);
    uab.kdb();
    uab.jqd();
    var jtd = dtd * (itd - gtd) - ftd * itd + htd * gtd + (ftd - htd) * etd;
    if (jtd == 0) return;
    var ktd = -(etd * (ieb - geb) - gtd * ieb + itd * geb + (gtd - itd) * btd) / jtd;
    var ltd = (gtd * jeb + etd * (heb - jeb) - itd * heb + (itd - gtd) * ctd) / jtd;
    var mtd = (dtd * (ieb - geb) - ftd * ieb + htd * geb + (ftd - htd) * btd) / jtd;
    var ntd = -(ftd * jeb + dtd * (heb - jeb) - htd * heb + (htd - ftd) * ctd) / jtd;
    var mqb = (dtd * (itd * geb - gtd * ieb) + etd * (ftd * ieb - htd * geb) + (htd * gtd - ftd * itd) * btd) / jtd;
    var oqb = (dtd * (itd * heb - gtd * jeb) + etd * (ftd * jeb - htd * heb) + (htd * gtd - ftd * itd) * ctd) / jtd;
    uab.gqd(ktd, ltd, mtd, ntd, mqb, oqb);
    uab.xob(ded, 0, 0);
    uab.ebb()
};

function wqd(cqb, nib, oib, ftb, gtb, ay, by, dy, ey, rsb, tab) {
    if (!cqb) return;
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    rsb &= 0xffffff;
    uab.globalAlpha = xbb;
    if (nib < cqb.tm) {
        var otd = cqb.tm - nib;
        ay += otd;
        ftb -= otd;
        nib = 0
    } else {
        nib -= cqb.tm;
        ftb -= cqb.tm
    } if (oib < cqb.um) {
        var otd = cqb.um - oib;
        by += otd;
        gtb -= otd;
        oib = 0
    } else {
        oib -= cqb.um;
        gtb -= cqb.um
    } if (ftb > (cqb.vm - nib - cqb.tm)) ftb = cqb.vm - nib - cqb.tm;
    if (gtb > (cqb.wm - oib - cqb.um)) gtb = cqb.wm - oib - cqb.um;
    if (ftb <= 0 || gtb <= 0) return;
    ay = ~~ay;
    by = ~~by;
    if (rsb != xpd) {
        var bod = iod(cqb, rsb);
        uab.xob(bod, nib, oib, ftb, gtb, ay, by, ftb * dy, gtb * ey);
        return
    }
    uab.xob(cqb.cpb, nib + cqb.ah, oib + cqb.bh, ftb, gtb, ay, by, ftb * dy, gtb * ey)
}

function ptd(cqb, ay, by, mu, nu, rsb, tab) {
    if (!cqb) return;
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    ay = ~~ay;
    by = ~~by;
    var qtd = mu / cqb.xm;
    var rtd = nu / cqb.ym;
    pqd(cqb, 0, 0, ay, by, qtd, rtd, 0, rsb, rsb, rsb, rsb, tab)
}

function brd(xx, rqb, ay, by, dy, ey, fy, sab, tab) {
    uab.globalAlpha = tab;
    uab.fillStyle = yab(sab, 1.0);
    uab.font = xx;
    jod(ay, by, dy, ey, -fy);
    uab.fillText(rqb, 0, 0);
    kod()
}
var std = 0,
    ttd = 0;

function utd(vtd) {
    this.wtd = !1;
    this.xtd = [];
    this.ytd = vtd;
    this.ztd = "";
    this.aud = 0;
    this.bud = 0
};

function cud(dud, eud) {
    var chd = fud(dud, eud);
    gud = new utd(dud);
    gud.ztd = chd;
    gud.hud();
    var mfb = 0;
    for (var xh in gud.xtd) {
        mfb++;
        break
    }
    if (mfb == 0) return null;
    return gud
}
utd.prototype.px = function () {
    while ((this.ztd.charCodeAt(this.aud) != 0x0a) && (this.ztd.charCodeAt(this.aud) != 0x0d) && (this.aud < this.iud)) {
        this.aud++
    }
    this.bud++;
    this.aud++;
    if (this.aud >= this.iud) return;
    if ((this.ztd.charCodeAt(this.aud) == 0x0a) && (this.ztd.charCodeAt(this.aud) == 0x0d)) {
        this.aud++
    }
};
utd.prototype.jud = function () {
    with(this) {
        if (this.aud >= iud) return !1;
        var yh = ztd.charCodeAt(aud);
        if (yh == 0x20 || yh == 0x09 || yh == 0x0a || yh == 0x0d || yh == qqb('#') || yh == qqb(';')) {
            return !0
        } else {
            return !1
        }
    }
};
utd.prototype.sx = function () {
    with(this) {
        while (jud() && (aud < iud)) {
            var yh = ztd.charCodeAt(aud);
            if (yh == '#' || yh == ';') {
                px()
            } else if (yh == 0x0a) {
                bud++
            }
            aud++
        }
        if (aud >= iud) return
    }
};
utd.prototype.kud = function () {
    with(this) {
        sx();
        while ((ztd.charAt(aud) != '[') && (aud < iud)) {
            aud++
        }
        if (aud >= iud) return null;
        aud++;
        var lud = aud;
        while ((ztd.charAt(aud) != ']') && (aud < iud)) {
            aud++
        }
        if (aud >= iud) return null;
        var cx = aud - lud;
        var mud = [];
        mud.nud = ztd.substr(lud, cx);
        aud++;
        return mud
    }
};
utd.prototype.oud = function (pud) {
    with(this) {
        sx();
        if (aud >= iud || ztd.charAt(aud) == '[') return !1;
        var lud = aud;
        var qud = -1;
        while ((ztd.charAt(aud) != '=') && (aud < iud)) {
            if (jud()) {
                if (qud < 0) qud = aud
            } else {
                qud = -1
            }
            aud++
        }
        if (aud >= iud) return !1;
        if (qud < 0) qud = aud;
        var cx = qud - lud;
        var rud = ztd.substr(lud, cx);
        while ((ztd.charAt(aud) != '=') && (aud < iud)) {
            aud++
        }
        if (aud >= iud) return !1;
        aud++;
        var sud = bud;
        sx();
        if (sud != bud) return !1;
        lud = aud;
        var tud = -1;
        var yh = ztd.charCodeAt(aud);
        while ((yh != 0x0a) && (yh != 0x0d) && (yh != qqb('#')) && (yh != qqb(';')) && (aud < iud)) {
            if (yh == 0x20 || yh == 0x09) {
                if (tud < 0) tud = aud
            } else {
                tud = -1
            } if (yh == qqb('\\')) aud++;
            aud++;
            yh = ztd.charCodeAt(aud)
        }
        if (tud >= 0) {
            cx = tud - lud
        } else {
            cx = aud - lud
        }
        var uud = ztd.substr(lud, cx);
        pud[rud] = uud;
        return !0
    }
};
utd.prototype.hud = function () {
    with(this) {
        if (ztd == null) return !1;
        iud = ztd.length;
        aud = 0;
        bud = 0;
        var mud = kud();
        if (mud == null) {
            ztd = null;
            return !1
        }
        xtd[mud.nud] = mud;
        while (aud < iud) {
            var gdd = oud(mud);
            if (!gdd) {
                if (aud < iud) {
                    if (ztd.charAt(aud) == '[') {
                        mud = kud();
                        if (mud == null) {
                            ztd = null;
                            return !0
                        }
                        xtd[mud.nud] = mud
                    }
                }
            }
        }
        ztd = null;
        return !0
    }
};
utd.prototype.vud = function (wud, xud) {
    with(this) {
        var mud = xtd[wud];
        if (mud != null && mud != undefined) {
            var uud = mud[xud];
            if (uud != undefined) return uud
        }
        return null
    }
};

function yud(zud) {
    try {
        var avd = new XMLHttpRequest();
        avd.open('HEAD', zud, !1);
        avd.send();
        ttd = avd.status;
        return avd.status != 404
    } catch (rub) {
        return !1
    }
}

function bvd(cvd, dvd) {
    try {
        var qfd = !window.XMLHttpRequest ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
        qfd.open(dvd ? 'PUT' : 'GET', cvd, !1);
        qfd.setRequestHeader('Content-Type', 'text/html');
        qfd.send(dvd ? dvd : '');
        ttd = qfd.status;
        return qfd.responseText
    } catch (rub) {
        return null
    }
}

function evd(fcd, jcd) {
    if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            localStorage["GameSmile." + fcd] = jcd
        } catch (fsb) {
            return !1
        }
    }
}

function fud(dud, eud) {
    var chd = null;
    if (eud) {
        if ((dud.substring(0, 7) == "http://") || (dud.substring(0, 8) == "https://")) return;
        if ('localStorage' in window && window['localStorage'] !== null) {
            try {
                chd = localStorage["GameSmile." + dud]
            } catch (fsb) {
                return null
            }
            if ((chd == undefined) || (chd == null)) return null
        }
    } else {
        var fvd;
        if ((dud.substring(0, 7) == "http://") || (dud.substring(0, 8) == "https://")) {
            fvd = dud
        } else {
            fvd = xvc + dud
        }
        chd = bvd(fvd, !1);
        if ((chd == null) || (chd == undefined)) return null;
        if (ttd == 404) return null
    }
    return chd
}

function gvd(dud, eud) {
    var chd = null;
    if (eud) {
        if ('localStorage' in window && window['localStorage'] !== null) {
            try {
                if (localStorage["GameSmile." + dud]) return !0;
                return !1
            } catch (fsb) {
                return !1
            }
        }
    } else {
        return yud(xvc + dud)
    }
}
var hvd = new Array("StepEvent", "DrawEvent", "LeftButtonPressed", "RightButtonPressed", "NoButtonPressed");
var ivd = new mpb(0, 0, 0, 0);
var jvd = null;
var kvd = -1;
var lvd = -1;

function rzc() {
    this.jbc = []
}

function mvd(nvd, ovd, bv, pvd, qvd) {
    this.jbc = [];
    this.ah = nvd;
    this.bh = ovd;
    this.bzb = nvd;
    this.czb = ovd;
    this.rvd = nvd;
    this.svd = ovd;
    this.pm = 0;
    this.qm = 0;
    this.vs = 0;
    this.ch = 0;
    this.tvd = 0;
    this.co = 0;
    this.rp = 270;
    this.jab = pvd;
    this.hm = bv;
    this.tyb = !0;
    for (var xh = 0; xh <= (fbc - 1); xh++) {
        op(this, "__alarm__", xh, -1)
    }
    this.kjb = !0;
    this.fi = !0;
    this.uvd = !1;
    this.vk = 0;
    this.fgb = new mpb(0, 0, 0, 0);
    this.lgb = 0;
    this.mq = 0;
    this.vvd = 0;
    this.wvd = 0;
    this.xvd = 0;
    this.yvd = 0;
    this.zvd = 0;
    this.fq = 1;
    this.ds = 1;
    this.kq = 0;
    this.ss = 1;
    this.awd = 0xffffff;
    this.xp = 1;
    this.hyb = -1;
    this.bwd = -1;
    this.dzb = 0;
    this.ezb = 0;
    this.ks = 0;
    this.os = 1;
    this.cwd = 0;
    this.dwd = 0;
    this.qnb = 0;
    this.ewd = 0;
    this.fwd = 0;
    this.uac = -1;
    this.yac = 0;
    this.bbc = 1;
    this.vac = !1;
    this.zac = !1;
    this.gwd = -1;
    this.hwd = !1;
    this.kfb = !1;
    this.iwd = null;
    this.jwd = !1;
    this.dgb = !0;
    this.oac = !1;
    this.gab = null;
    this.kgb(pvd, qvd, !0);
    this.lgb = this.gab.mgb;
    var ngb = ogb.ev(this.lgb);
    if (ngb) {
        this.fgb.left = ngb.fgb.left;
        this.fgb.ggb = ngb.fgb.ggb;
        this.fgb.top = ngb.fgb.top;
        this.fgb.bottom = ngb.fgb.bottom
    }
}
mvd.prototype.sp = function (ay) {
    this.ah = ay;
    this.dgb = !0
};
mvd.prototype.jq = function (kwd) {
    this.kq = kwd;
    this.dgb = !0
};
mvd.prototype.gq = function (lwd) {
    this.fq = lwd;
    this.dgb = !0
};
mvd.prototype.iq = function (lwd) {
    this.ds = lwd;
    this.dgb = !0
};
mvd.prototype.qs = function (sab) {
    this.awd = zab(sab)
};
mvd.prototype.lo = function (mwd) {
    var nwd = this.rs();
    if (mwd < 0) {
        mwd = nwd - zzc(Math.abs(mwd), nwd)
    } else {
        mwd = zzc(Math.abs(mwd), nwd)
    }
    this.mq = mwd
};
mvd.prototype.rs = function () {
    var ngb = ogb.ev(this.lgb);
    if (!ngb) return 0;
    return ngb.apb.length
};
mvd.prototype.es = function () {
    var ngb = ogb.ev(this.lgb);
    if (!ngb) return 0;
    return ngb.width * this.fq
};
mvd.prototype.fs = function () {
    var ngb = ogb.ev(this.lgb);
    if (!ngb) return 0;
    return ngb.height * this.ds
};;
mvd.prototype.xs = function (owd) {
    this.vk = owd;
    ufb.pwd[ufb.pwd.length] = this
};
mvd.prototype.ofb = function (qwd, zfd) {
    if ((this.ah == qwd) && (this.bh == zfd)) return;
    this.ah = qwd;
    this.bh = zfd;
    this.dgb = !0
};
mvd.prototype.kgb = function (igb, rwd, swd) {
    this.jab = igb;
    if (this.gab != null) {
        this.gab.twd(this);
        this.gab = null
    }
    if (igb == -1) igb = 0;
    this.gab = zy.ev(igb);
    if (this.gab != null) {
        if (rwd) {
            this.gab.uwd(this)
        }
        this.fyb = this.gab.fyb;
        this.hyb = this.gab.vwd;
        if (swd) {
            this.vk = this.gab.wwd
        } else {
            this.xs(this.gab.wwd)
        }
        this.kjb = this.gab.xwd;
        this.fi = this.gab.ywd;
        this.uvd = this.gab.zwd;
        this.dgb = !0
    }
};
mvd.prototype.axd = function () {
    with(this) {
        if (this.pm == 0) {
            if (this.qm > 0) {
                this.vs = 270
            } else if (this.qm < 0) {
                this.vs = 90
            } else {
                this.vs = 0
            }
        } else {
            var keb = bxd(180 * (Math.atan2(this.qm, this.pm)) / zgb);
            if (keb <= 0) {
                this.vs = -keb
            } else {
                this.vs = 360.0 - keb
            }
        } if (Math.abs(this.vs - dw(this.vs)) < 0.0001) {
            this.vs = dw(this.vs)
        }
        this.vs = zzc(this.vs, 360.0);
        this.ch = Math.sqrt(ahb(this.pm) + ahb(this.qm));
        if (Math.abs(this.ch - dw(this.ch)) < 0.0001) this.ch = dw(this.ch)
    }
};
mvd.prototype.cxd = function () {
    this.pm = this.ch * bxd(Math.cos(this.vs * 0.0174532925));
    this.qm = -this.ch * bxd(Math.sin(this.vs * 0.0174532925));
    if (Math.abs(this.pm - dw(this.pm)) < 0.0001) {
        this.pm = dw(this.pm)
    }
    if (Math.abs(this.qm - dw(this.qm)) < 0.0001) {
        this.qm = dw(this.qm)
    }
};

function bxd(dxd) {
    return keb = (~~(dxd * 1000000)) / 1000000.0
}
mvd.prototype.exd = function (fxd, qdb) {
    this.pm += qdb * bxd(Math.cos(fxd * 0.0174532925));
    this.qm -= qdb * bxd(Math.sin(fxd * 0.0174532925));
    this.axd()
};
mvd.prototype.gxd = function () {
    if (this.tvd != 0.0) {
        var hxd;
        if (this.ch > 0) {
            hxd = this.ch - this.tvd;
        } else {
            hxd = this.ch + this.tvd
        } if ((this.ch > 0) && (hxd < 0)) {
            this.tp(0)
        } else if ((this.ch < 0) && (hxd > 0)) {
            this.tp(0)
        } else if (this.ch != 0) {
            this.tp(hxd)
        }
    }
    if (this.co != 0) {
        this.exd(this.rp, this.co)
    }
};
mvd.prototype.ixd = function () {
    return ogb.jxd(this.lgb)
};
mvd.prototype.mab = function (qbd, cob, wz, fab) {
    var kxd = jvd;
    var lxd = kvd;
    var mxd = lvd;
    var jhb = !1;
    var nxd = !1;
    if (qbd == fzb) {
        var oxd = fab.gab;
        while (oxd != null && !nxd) {
            var hfb = this.gab;
            while (hfb != null && !nxd) {
                if (hfb.dab[qbd]) {
                    if (hfb.fdd[oxd.ddd]) {
                        jvd = hfb;
                        kvd = qbd;
                        lvd = oxd.ddd;
                        jhb = hfb.mab(qbd, oxd.ddd, wz, fab);
                        nxd = !0;
                        break
                    }
                }
                hfb = hfb.hab
            }
            oxd = oxd.hab
        }
    } else {
        var hfb = this.gab;
        var pxd = qbd | cob;
        while (hfb != null) {
            if (hfb.dab[pxd]) {
                jvd = hfb;
                kvd = qbd;
                lvd = cob;
                jhb = hfb.mab(qbd, cob, wz, fab);
                break
            }
            hfb = hfb.hab
        }
    }
    jvd = kxd;
    kvd = lxd;
    lvd = mxd;
    return jhb
};
mvd.prototype.ao = function (cv) {
    if (this.pm == cv) return;
    this.pm = cv;
    this.axd()
};
mvd.prototype.yn = function (cv) {
    if (this.qm == cv) return;
    this.qm = cv;
    this.axd()
};
mvd.prototype.us = function (cv) {
    this.vs = zzc(cv, 360.0);
    this.cxd()
};
mvd.prototype.tp = function (cv) {
    if (this.ch == cv) return;
    this.ch = cv;
    this.cxd()
};
mvd.prototype.egb = function () {
    var qxd, ru;
    if (this.hyb >= 0) {
        qxd = ogb.ev(this.hyb);
    } else {
        qxd = ogb.ev(this.lgb);
    }
    var fgb = this.fgb;
    if (qxd === null) {
        this.fgb.left = -100000;
        this.fgb.top = -100000;
        this.fgb.ggb = -100000;
        this.fgb.bottom = -100000;
        this.jwd = !1
    } else if (this.kq == 0) {
        var rxd = qxd.fgb;
        fgb.left = dw(this.ah + this.fq * (rxd.left - qxd.lg));
        fgb.ggb = dw(this.ah + this.fq * (rxd.ggb - qxd.lg + 1) - 1);
        if (fgb.left > fgb.ggb) {
            ru = fgb.left;
            fgb.left = fgb.ggb;
            fgb.ggb = ru
        }
        fgb.top = dw(this.bh + this.ds * (rxd.top - qxd.mg));
        fgb.bottom = dw(this.bh + this.ds * (rxd.bottom - qxd.mg + 1) - 1);
        if (fgb.top > fgb.bottom) {
            ru = fgb.top;
            fgb.top = fgb.bottom;
            fgb.bottom = ru
        }
        this.jwd = qxd.sxd()
    } else {
        var rxd = qxd.fgb;
        var txd, uxd;
        txd = this.fq * (rxd.left - qxd.lg);
        uxd = this.fq * (rxd.ggb - qxd.lg + 1) - 1;
        var vxd, wxd;
        vxd = this.ds * (rxd.top - qxd.mg);
        wxd = this.ds * (rxd.bottom - qxd.mg + 1) - 1;
        var mod, kbb;
        mod = Math.cos(this.kq * zgb / 180.0);
        kbb = Math.sin(this.kq * zgb / 180.0);
        var xxd = mod * uxd;
        var yxd = mod * txd;
        var zxd = kbb * wxd;
        var ayd = kbb * vxd;
        var ru;
        if (xxd < yxd) {
            ru = yxd;
            yxd = xxd;
            xxd = ru
        }
        if (zxd < ayd) {
            ru = ayd;
            ayd = zxd;
            zxd = ru
        }
        fgb.left = (this.ah + yxd + ayd) | 0;
        fgb.ggb = (this.ah + xxd + zxd) | 0;
        var byd = mod * wxd;
        var cyd = mod * vxd;
        var dyd = kbb * uxd;
        var eyd = kbb * txd;
        if (byd < cyd) {
            ru = cyd;
            cyd = byd;
            byd = ru
        }
        if (dyd < eyd) {
            ru = eyd;
            eyd = dyd;
            dyd = ru
        }
        fgb.top = (this.bh + cyd - dyd) | 0;
        fgb.bottom = (this.bh + byd - eyd) | 0;
        this.jwd = qxd.sxd()
    }
    this.fgb = fgb;
    this.dgb = !1
};
mvd.prototype.fyd = function (acb, bcb, ccb, dcb, gyd) {
    if (this.kfb) return !1;
    if (this.dgb) this.egb();
    var fgb = this.fgb;
    if (nbb(acb, ccb) >= fgb.ggb + 1) return !1;
    if (obb(acb, ccb) < fgb.left) return !1;
    if (nbb(bcb, dcb) >= fgb.bottom + 1) return !1;
    if (obb(bcb, dcb) < fgb.top) return !1;
    if ((!gyd) || (!this.jwd)) return !0;
    var mob;
    if (this.hyb < 0) {
        mob = ogb.ev(this.lgb)
    } else {
        mob = ogb.ev(this.hyb)
    } if ((mob === null) || (mob.wob == 0)) return !1;
    ivd.left = dw(nbb(acb, ccb));
    ivd.top = dw(nbb(bcb, dcb));
    ivd.ggb = dw(obb(acb, ccb));
    ivd.bottom = dw(obb(bcb, dcb));
    var pbb = mob.hyd(Math.floor(this.mq), fgb, dw(this.ah), dw(this.bh), this.fq, this.ds, this.kq, ivd);
    return pbb
};
mvd.prototype.sfb = function (wz, gyd) {
    if (!(this == wz) && !this.kfb && !wz.kfb) {
        if (this.dgb) this.egb();
        if (wz.dgb) wz.egb();
        var iyd = wz.fgb;
        var jyd = this.fgb;
        if (iyd.left >= (jyd.ggb + 1)) return !1;
        if ((iyd.ggb + 1) <= jyd.left) return !1;
        if (iyd.top >= (jyd.bottom + 1)) return !1;
        if ((iyd.bottom + 1) <= jyd.top) return !1;
        if (!gyd || (!this.jwd && !wz.jwd)) return !0;
        var kyd = null;
        var lyd = null;
        if (this.hyb < 0) {
            kyd = ogb.ev(this.lgb)
        } else {
            kyd = ogb.ev(this.hyb)
        } if ((kyd == null) || (kyd.wob == 0)) return !1;
        if (wz.hyb < 0) {
            lyd = ogb.ev(wz.lgb)
        } else {
            lyd = ogb.ev(wz.hyb)
        } if ((lyd == null) || (lyd.wob == 0)) return !1;
        return kyd.myd(this.mq | 0, this.fgb, dw(this.ah), dw(this.bh), this.fq, this.ds, this.kq, lyd, wz.mq | 0,
            wz.fgb, dw(wz.ah), dw(wz.bh), wz.fq, wz.ds, wz.kq)
    }
    return !1
};
mvd.prototype.pnb = function (rjb, mjb, lwd, nyd, onb, oyd) {
    this.bwd = -1;
    if (rjb < 0) return;
    var jnb = knb.wg[rjb];
    if (!jnb) return;
    if (jnb.length <= 0) return;
    if (lwd < 0) return;
    this.bwd = rjb;
    this.ks = mjb;
    if (this.ks >= 0) {
        this.dzb = 0
    } else {
        this.dzb = 1
    }
    this.ezb = this.dzb;
    this.os = lwd;
    this.cwd = nyd;
    this.qnb = oyd;
    if (onb) {
        if (this.ks >= 0) {
            this.ofb(jnb.lnb(0), jnb.pyd(0))
        } else {
            this.ofb(jnb.lnb(1), jnb.pyd(1))
        }
    }
    this.ewd = this.ah;
    this.fwd = this.bh
};
mvd.prototype.gzb = function () {
    var vnb, leb,
        meb;
    if (this.bwd < 0) return !1;
    if (this.ks == 0) return !1;
    var jnb = knb.wg[this.bwd];
    if (!jnb) return;
    if (jnb.length <= 0) return;
    var qyd = !1;
    var ryd = this.cwd * Math.PI / 180.0;
    var syd = jnb.ynb(this.dzb);
    leb = syd.ah;
    meb = syd.bh;
    vnb = syd.ch;
    syd = null;
    vnb = vnb / (100 * this.os);
    this.dzb = this.dzb + this.ks * vnb / jnb.length;
    var tyd = jnb.ynb(0);
    if ((this.dzb >= 1) || (this.dzb <= 0)) {
        qyd = !0;
        switch (this.qnb) {
        case 0:
            {
                this.dzb = 1;
                this.bwd = -1;
                break
            }
        case 1:
            {
                if (this.dzb < 0) {
                    this.dzb++
                } else {
                    this.dzb--
                }
                break
            }
        case 2:
            {
                var uyd = jnb.ynb(1);
                leb = uyd.ah - tyd.ah;
                meb = uyd.bh - tyd.bh;
                var vyd = this.os * (leb * Math.cos(ryd) + meb * Math.sin(ryd));
                var wyd = this.os * (meb * Math.cos(ryd) - leb * Math.sin(ryd));
                if (this.dzb < 0) {
                    this.ewd = this.ewd - vyd;
                    this.fwd = this.fwd - wyd;
                    this.dzb++;
                } else {
                    this.ewd = this.ewd + vyd;
                    this.fwd = this.fwd + wyd;
                    this.dzb--
                }
                break
            }
        case 3:
            {
                if (this.dzb < 0) {
                    this.dzb = -this.dzb;
                    this.ks = Math.abs(this.ks)
                } else {
                    this.dzb = 2 - this.dzb;
                    this.ks = -Math.abs(this.ks)
                }
                break
            }
        default:
            {
                this.dzb = 1;
                this.bwd = -1
            }
        }
    }
    syd = jnb.ynb(this.dzb);
    leb = syd.ah - tyd.ah;
    meb = syd.bh - tyd.bh;
    var iib = this.ewd + this.os * (leb * Math.cos(ryd) + meb * Math.sin(ryd));
    var jib = this.fwd + this.os * (meb * Math.cos(ryd) - leb * Math.sin(ryd));
    this.ao(iib - this.ah);
    this.yn(jib - this.bh);
    this.tp(0);
    this.ofb(iib, jib);
    return qyd
};
mvd.prototype.xyd = function (cob) {
    var pbb = -1;
    if ((cob >= 0) && (cob < fbc)) {
        pbb = qr(this, "__alarm__", cob)
    }
    return pbb
};
mvd.prototype.yyd = function (cob, cv) {
    if ((cob >= 0) && (cob < fbc)) {
        op(this, "__alarm__", cob, cv)
    }
};
mvd.prototype.iyb = function () {
    if (this.dgb) {
        this.egb()
    }
    return this.fgb
};
mvd.prototype.cw = function (zyd, qcb) {
    var zh, ai;
    if (!lob(this.lgb)) {
        zh = ai = 0
    } else {
        var mob = ogb.ev(this.lgb);
        zh = mob.width * this.fq;
        ai = mob.height * this.ds
    } if (zyd) {
        if ((this.pm < 0) && (this.ah < 0)) {
            this.ofb(this.ah + ufb.xxb() + zh, this.bh)
        }
        if ((this.pm > 0) && (this.ah >= ufb.xxb())) {
            this.ofb(this.ah - ufb.xxb() - zh, this.bh)
        }
    }
    if (qcb) {
        if ((this.qm < 0) && (this.bh < 0)) {
            this.ofb(this.ah, this.bh + ufb.wxb() + ai)
        }
        if ((this.qm > 0) && (this.bh >= ufb.wxb())) {
            this.ofb(this.ah, this.bh - ufb.wxb() - ai)
        }
    }
};

function cbd() {
    this.azd = new wu();
    this.azd.xu = !0;
    this.bzd = []
}
cbd.prototype.ajb = function () {
    this.bzd = [];
    this.azd.ajb()
};
cbd.prototype.jjb = function () {
    return this.azd.cgb
};
cbd.prototype.zu = function (jfb) {
    this.bzd[jfb.hm] = jfb;
    this.azd.zu(jfb)
};
cbd.prototype.iad = function (bv) {
    return this.bzd[bv]
};
cbd.prototype.ev = function (bv) {
    var jfb = this.bzd[bv];
    if (jfb != null) return jfb;
    var hfb = zy.ev(bv);
    if (hfb != null) {
        jfb = hfb.az.cgb[0];
        if (jfb != null) return jfb
    }
    return null
};
cbd.prototype.czd = function (wz) {
    this.azd.kgd(wz);
    var hm = wz.hm;
    this.bzd[hm] = null
};
cbd.prototype.dzd = function () {
    var cgb = ufb.bgb.cgb;
    for (var bm = 0; bm < cgb.length; bm++) {
        var jfb = cgb[bm];
        jfb.bzb = jfb.ah;
        jfb.czb = jfb.bh;
        jfb.ezb = jfb.dzb
    }
};
cbd.prototype.ezd = function () {
    var cgb = ufb.bgb.cgb;
    for (var bm = 0; bm < cgb.length; bm++) {
        var jfb = cgb[bm];
        jfb.gxd();
        if (jfb.gzb()) {
            jfb.mab(hdc, 0, jfb, jfb)
        }
        jfb.ah += jfb.pm;
        jfb.bh += jfb.qm;
        jfb.dgb = !0
    }
};
cbd.prototype.fzd = function () {
    var cgb = ufb.bgb.cgb;
    for (var bm = 0; bm < cgb.length; bm++) {
        var jfb = cgb[bm];
        jfb.mq += jfb.xp;
        var nwd = jfb.ixd();
        if (jfb.mq >= nwd) {
            jfb.mq -= nwd;
            var gab = jfb.gab;
            if (gab.fyb[gdc]) {
                jfb.mab(gdc, 0, jfb, jfb)
            }
        }
    }
};
cbd.prototype.mab = function (qbd, cob) {
    var gzd = !0;
    if (ufb) {
        var pxd = qbd;
        if (pxd != fzb) pxd |= cob;
        var cgb = ufb.bgb.cgb;
        for (var bm = 0; bm < cgb.length; bm++) {
            var jfb = cgb[bm];
            if (!jfb.kfb) {
                var gab = jfb.gab;
                if (gab.fyb[pxd]) {
                    gzd = jfb.mab(qbd, cob, jfb, jfb)
                }
            }
        }
    }
    return gzd
};
var lp;

function azc(bv) {
    var jfb = pac.ev(bv);
    if (!jfb) {
        jfb = zy.ev(bv);
        if (!jfb) jfb = jfb.hac.ev(0)
    }
    return jfb
}

function hzc(bv) {
    var jfb = pac.ev(bv);
    if (!jfb) {
        jfb = zy.ev(bv);
        if (!jfb) {
            ex("Unknown instance ID: " + bv);
            return awc
        }
        jfb = jfb.hac.ev(0);
        ex("Warning: Object ID being used to access instance" + bv);
    }
    return jfb
}
var hzd = 256;
var izd = 3;
var jzd = 1024;
var kzd = 1;
var lzd = 2;
var mzd = 4;
var bu = 1;
var zt = 2;
var au = 0x80000000;
var nzd = 128;
var ozd = 0,
    ut = 0,
    vt = 0,
    wt = 0,
    pzd = -1,
    qzd = 0,
    rzd = 0,
    szd = 0,
    tzd = 0,
    uzd = 0;
vzd = !1;
var wzd = [];
var xzd = [];
var yzd = [];
var zzd = [];
var aae = [];
var xt = [];
var bae = 0;
var cae = {
    8: String.fromCharCode(8),
    9: 0,
    13: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    27: 0,
    22: 0,
    32: " ",
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    45: 0,
    46: 0,
    47: 0,
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    58: "0",
    59: ";",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    91: 0,
    92: 0,
    93: 0,
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: 0,
    113: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    119: 0,
    120: 0,
    121: 0,
    122: 0,
    123: 0,
    144: 0,
    145: 0,
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "'",
    219: "[",
    220: "\\",
    221: "]",
    222: "#",
    223: "`"
};
var dae = {
    8: String.fromCharCode(8),
    9: 0,
    13: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    27: 0,
    22: 0,
    32: " ",
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    45: 0,
    46: 0,
    47: 0,
    48: ")",
    49: "!",
    50: "\"",
    51: "\£",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    58: ")",
    59: ":",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: 0,
    92: 0,
    93: 0,
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: 0,
    113: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    119: 0,
    120: 0,
    121: 0,
    122: 0,
    123: 0,
    144: 0,
    145: 0,
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "@",
    219: "{",
    220: "|",
    221: "}",
    222: "~",
    223: "¬"
};

function eae() {
    vzd = !0
}

function fae() {
    vzd = !1;
    gae()
}

function hae(which) {
    if (!document.getElementById) return;
    if (which.style.display == "block") {
        which.style.display = "none"
    } else {
        which.style.display = "block"
    }
}

function iae(jae, kae) {
    if (jae) {
        if (jae.ag) {
            if (jae.ag.bn) {
                if (jae.ag.bn.en) {
                    if (jae.ag.bn.en == ag.bn.en) {
                        jae.focus();
                        kae.focus();
                        return !0
                    }
                }
            }
        }
    }
    return !1
}

function lae() {
    var ktb = document.getElementById(sob);
    var mae;
    if ((bvb == wbc) || (bvb == vbc) || (bvb == xbc) || (bvb == ybc)) {
        mae = parent.frames;
        for (var nae = 0; nae < mae.length; nae++) {
            var oae = mae[nae];
            if (iae(oae, ktb)) break
        }
    } else {
        mae = parent.document.getElementsByTagName("IFRAME");
        for (var nae in mae) {
            var oae = mae[nae].contentWindow;
            if (iae(oae, ktb)) break
        }
    }
}

function pae(qae) {
    if (qae.repeat) {
        return
    }
    var rae;
    if (qae == null) {
        rae = window.event.which;
        if (rae == 122) return;
        if (rae != 121) window.event.preventDefault();
        else wwc = !0;
        window.event.preventDefault()
    } else {
        rae = qae.which;
        if (rae == 122) return;
        if (rae == 120) {
            if (yw) hae(document.getElementById('debug_console'))
        } else if (rae != 121) qae.preventDefault();
        else {
            if (!pwc) sae();
            wwc = !0
        }
        qae.preventDefault()
    } if (wzd[rae]) return;
    wzd[rae] = 1;
    xzd[rae] = 1;
    uzd = rae;
    if (bvb == ubc) {
        tzd = qae.char
    } else {
        if (qae.shiftKey) {
            tzd = dae[rae]
        } else {
            tzd = cae[rae]
        }
    } if (!tzd) tzd = ""
}

function tae(qae) {
    var rae;
    if (qae == null) {
        rae = window.event.which;
        if (rae == 122) return;
        window.event.preventDefault()
    } else {
        rae = qae.which;
        if (rae == 122) return;
        qae.preventDefault()
    }
    yzd[rae] = 1;
    wzd[rae] = 0;
    return !1
}

function uae(vae) {
    {
        ut = vae.pageX;
        vt = vae.pageY;
        xt[vae.button].ah = ut;
        xt[vae.button].bh = vt
    }
}

function wae(vae) {
    {
        if (!vzd) {
            lae()
        }
        ozd = vae.button;
        if (ozd == 2) ozd = 1;
        else if (ozd == 1) ozd = 2;
        rzd = pzd;
        pzd = ozd;
        wt |= (1 << ozd); {
            xt[vae.button].yt = zt | au | bu;
            xt[vae.button].ah = vae.pageX - stb;
            xt[vae.button].bh = vae.pageY - rtb
        }
    }
    return vae
}

function xae(vae) {
    ozd = vae.button;
    if (ozd == 2) ozd = 1;
    else if (ozd == 1) ozd = 2;
    szd = qzd;
    qzd = ozd;
    wt &= ~(1 << ozd);
    pzd = -1;
    xt[vae.button].yt = 0;
    return !1
}

function abd() {
    this.yae = "a";
    this.zae = [];
    this.abe = this.bbe = -1;
    this.sgb = [];
    this.cbe = [];
    this.dbe = [];
    this.ebe = this.fbe = 0;
    this.lac = [];
    this.nac = [];
    this.mac = [];
    this.gbe = this.hbe = !1;
    this.ibe = [];
    this.jbe = this.kbe = this.lbe = this.mbe = this.pzb = this.qzb = this.nbe = 0;
    for (var vu = 0; vu < jzd; vu++) {
        this.zae[vu] = ""
    }
    for (var vu = 0; vu < hzd; vu++) {
        this.sgb[vu] = this.cbe[vu] = this.dbe[vu] = !1;
        this.ibe[vu] = vu
    }
    for (var vu = 0; vu < izd; vu++) {
        this.lac[vu] = this.nac[vu] = this.mac[vu] = !1
    }
    this.obe = pbe;
    this.qbe = rbe;
    this.sbe = sbe;
    this.tbe = tbe;
    this.ube = ube;
    this.vbe = vbe;
    this.wbe = wbe;
    this.xbe = xbe;
    this.ybe = ybe;
    this.zbe = zbe;
    this.ace = ace;
    this.bce = bce;
    this.cce = cce;
    this.dce = dce;
    this.ece = ece;
    this.fce = fce;
    this.gce = gce;
    this.hce = hce;
    this.ice = ice;
    this.jce = jce;
    this.kce = kce;
    this.lce = lce;
    this.mce = mce;
    this.nce = oce;
    this.pce = qce;
    this.rce = sce;
    this.tce = tce;
    for (var vu = 0; vu < hzd; vu++) {
        wzd[vu] = yzd[vu] = !1
    }
    du.onmousemove = uae;
    du.onmousedown = wae;
    du.onmouseup = xae;
    document.body.onfocusin = eae;
    document.body.onfocusout = fae;
    document.onfocusin = eae;
    document.onfocusout = fae;
    window.uce = eae;
    window.vce = fae;
    window.onkeydown = function () {
        pae(arguments[0] || window.event);
    };
    window.onkeyup = function () {
        tae(arguments[0] || window.event)
    };
    aae = new Array(nzd);
    xt = new Array(nzd);
    for (var wce = 0; wce < nzd; wce++) {
        aae[wce] = new xce();
        xt[wce] = new xce()
    }
}

function xce() {
    this.yt = 0;
    this.ah = 0;
    this.bh = 0
}

function gae() {
    yce();
    zce();
    io.yjd = 0;
    io.yjd = "";
    uzd = 0;
    tzd = ""
}
abd.prototype.ajb = function () {
    this.ade();
    this.mce();
    io.yjd = 0;
    io.zjd = 0;
    io.yjd = "";
    uzd = 0;
    tzd = "";
    io.akd = "";
    io.bkd = "";
};

function sbe() {
    return this.yae
}

function tbe(bde) {
    this.yae = ynd
}

function ube() {
    return this.bbe
}

function vbe() {
    return this.abe
}

function wbe(ov) {
    if (ov < 0 || ov > 255) return !1;
    this.bbe = ov
}

function xbe(ov) {
    if (ov < 0 || ov > 255) return !1;
    this.abe = ov
}

function ybe(ov) {
    if (ov < 0 || ov > 255) return !1;
    return this.sgb[ov]
}

function zbe(ov) {
    if (ov < 0 || ov > 255) return !1;
    return this.dbe[ov]
}

function ace(ov) {
    if (ov < 0 || ov > 255) return !1;
    return this.cbe[ov]
}

function bce(ov) {
    if (ov < 0 || ov > 255) return;
    this.sgb[ov] = 0;
    this.dbe[ov] = 0;
    this.cbe[ov] = 0;
}
abd.prototype.ade = function () {
    this.bbe = 0;
    this.abe = 0;
    this.yae = 0;
    for (var xh = 0; xh <= hzd; xh++) {
        this.sgb[xh] = 0;
        this.dbe[xh] = 0;
        this.cbe[xh] = 0
    }
};

function yce() {
    for (var xh = 0; xh < hzd; xh++) {
        xzd[xh] = 0;
        yzd[xh] = 0;
        wzd[xh] = 0
    }
}

function cce() {
    return this.ebe
}

function dce() {
    return this.fbe
}

function ece(cde) {
    if ((cde < 1) || (cde > 3)) return;
    this.ebe = cde
}

function fce(cde) {
    if ((cde < 1) || (cde > 3)) return;
    this.fbe = cde
}

function gce(cde) {
    cde--;
    if (cde >= 0 && cde < izd) {
        return this.lac[cde]
    }
    return !1
}

function hce(cde) {
    cde--;
    if (cde >= 0 && cde < izd) {
        return this.mac[cde];
    }
}

function ice(cde) {
    cde--;
    if (cde >= 0 && cde < izd) {
        return this.nac[cde]
    }
    return !1
}

function jce() {
    return this.hbe
}

function kce() {
    return this.gbe
}

function lce(cde) {
    cde--;
    if (cde >= 0 && cde < izd) {
        this.lac[cde] = !1;
        this.mac[cde] = !1;
        this.nac[cde] = !1
    }
}

function mce() {
    this.ebe = 0;
    this.fbe = 0;
    for (var xh = 0; xh <= izd; xh++) {
        this.lac[xh] = !1;
        this.mac[xh] = !1;
        this.nac[xh] = !1
    }
    this.hbe = !1;
    this.gbe = !1
}

function zce() {
    szd = -1;
    qzd = -1;
    pzd = -1;
    wt = 0;
    xt[0].yt = 0;
    xt[0].ah = 0;
    xt[0].bh = 0;
    ozd = -1
}

function pbe() {
    for (var wce = 0; wce < xt.length; wce++) {
        aae[wce].yt = xt[wce].yt;
        aae[wce].ah = xt[wce].ah;
        aae[wce].bh = xt[wce].bh;
        xt[wce].yt &= ~bu
    }
    if (io.yjd != 0) io.zjd = io.yjd;
    io.yjd = uzd;
    if (uzd) {
        if (tzd) {
            if (uzd == 13) {} else if (uzd == 8) {
                io.akd = tzd;
                if (io.bkd.length > 0) {
                    io.bkd = io.bkd.substring(0, io.bkd.length - 1)
                }
            } else {
                io.akd = tzd;
                io.bkd += io.akd;
                if (io.bkd.length > 1024) {
                    io.bkd = io.bkd.substring(1, io.bkd.length - 1)
                }
            }
        }
        uzd = 0
    }
    this.pzb = ut;
    this.qzb = vt;
    this.kbe = wt;
    if ((this.kbe & 1) != 0) {
        this.lac[0] = 1;
        if ((this.lbe ^ this.kbe) != 0) {
            this.mac[0] = 1
        }
    } else {
        this.lac[0] = 0;
        if ((this.kbe ^ this.lbe) == 1) {
            this.nac[0] = 1
        }
    } if ((this.kbe & 2) != 0) {
        this.lac[1] = 1;
        if ((this.lbe ^ this.kbe) != 0) {
            this.mac[1] = 1
        }
    } else {
        this.lac[1] = 0;
        if ((this.kbe ^ this.lbe) == 2) {
            this.nac[1] = 1
        }
    } if ((this.kbe & 4) != 0) {
        this.lac[2] = 1;
        if ((this.lbe ^ this.kbe) != 0) {
            this.mac[2] = 1
        }
    } else {
        this.lac[2] = 0;
        if ((this.kbe ^ this.lbe) == 2) {
            this.nac[2] = 1
        }
    }
    this.lbe = this.kbe;
    io.dq = this.pzb;
    io.eq = this.qzb;
    io.wjd = pzd + 1;
    io.xjd = rzd;
    this.tce()
}

function tce() {
    var dde = 0;
    var ede = 0;
    var zh = ufb.xxb();
    var ai = ufb.wxb();
    var izb = ufb.jzb ? ufb.lzb : kzb;
    if (izb[0].fi) {
        zh = izb[0].rrb;
        ai = izb[0].srb
    }
    for (var wce in aae) {
        var fde = aae[wce];
        if ((fde.yt & au) != 0) {
            ede = 1;
            for (var gde in zzd) {
                var hde = zzd[gde];
                if ((hde.ide & kzd) != 0) {
                    var ah = (zh * fde.ah) / xtb;
                    var bh = (ai * fde.bh) / ytb;
                    if ((ah >= hde.ah) && (ah < hde.ieb) && (bh >= hde.bh) && (bh < hde.jeb)) {
                        dde |= ede
                    }
                }
                ede <<= 1
            }
            fde.yt = 0
        }
    }
    ede = 1;
    var jde = bae ^ dde;
    for (var gde in zzd) {
        var hde = zzd[gde];
        if ((hde.ide & kzd) != 0) {
            var kde = dde & ede;
            var bx = jde & ede;
            if (hde.lde != 0) {
                this.dbe[hde.lde] |= (kde && bx);
                this.sgb[hde.lde] |= (kde && !bx);
                this.cbe[hde.lde] |= (!kde && bx)
            } else {
                this.mac[hde.button - 1] |= (kde && bx);
                this.lac[hde.button - 1] |= (kde && !bx);
                this.nac[hde.button - 1] |= (!kde && bx)
            }
        }
        ede <<= 1
    }
    bae = dde
}

function nce(mde) {
    var cgb = ufb.bgb.cgb;
    var qae = scc | mde;
    for (var tfb = 0; tfb < cgb.length; tfb++) {
        var jfb = cgb[tfb];
        var hfb = jfb.gab;
        if (hfb.fyb[qae]) {
            jfb.mab(scc, mde, jfb, jfb)
        }
    }
}

function nde(ode) {
    var cgb = ufb.bgb.cgb;
    var qae = vcc | ode;
    for (var tfb = 0; tfb < cgb.length; tfb++) {
        var jfb = cgb[tfb];
        var hfb = jfb.gab;
        if (hfb.fyb[qae]) {
            jfb.mab(vcc, ode, jfb, jfb)
        }
    }
}

function rce(pde) {
    var cgb = ufb.bgb.cgb;
    var qae = wcc | pde;
    for (var tfb = 0; tfb < cgb.length; tfb++) {
        var jfb = cgb[tfb];
        var hfb = jfb.gab;
        if (hfb.fyb[qae]) {
            jfb.mab(wcc, pde, jfb, jfb)
        }
    }
}

function oce() {
    var qde = 0;
    for (var xh = 2; xh < hzd; xh++) {
        if (this.sgb[xh]) {
            qde = 1;
            nce(xh)
        }
    }
    nce(qde)
}

function qce() {
    var rde = 0;
    for (var xh = 2; xh < hzd; xh++) {
        if (this.dbe[xh]) {
            rde = 1;
            nde(xh)
        }
    }
    nde(rde)
}

function sce() {
    var sde = 0;
    for (var xh = 2; xh < hzd; xh++) {
        if (this.cbe[xh]) {
            sde = 1;
            rce(xh)
        }
    }
    rce(sde)
}

function rbe() {
    this.nbe++;
    for (var xh = 0; xh < hzd; xh++) {
        this.dbe[xh] = this.cbe[xh] = this.sgb[xh] = 0
    }
    var tde = 0;
    var ude = 0;
    for (var xh = 0; xh < hzd; xh++) {
        var lde = this.ibe[xh];
        this.dbe[lde] |= xzd[xh];
        this.cbe[lde] |= yzd[xh];
        this.sgb[lde] |= wzd[xh];
        tde |= xzd[xh];
        ude |= wzd[xh];
        xzd[xh] = 0;
        yzd[xh] = 0
    }
    this.dbe[1] = tde;
    this.sgb[1] = ude;
    this.dbe[0] = tde ^ 1;
    this.sgb[0] = ude ^ 1;
    for (var xh = 0; xh <= izd; xh++) {
        this.mac[xh] = !1;
        this.nac[xh] = !1
    }
    this.hbe = !1;
    this.gbe = !1;
    this.obe();
    var izb;
    if (!ufb.jzb) {
        izb = kzb
    } else {
        izb = ufb.lzb
    }
    for (var mzb = 7; mzb >= 0; mzb--) {
        nzb = izb[mzb];
        if (nzb && nzb.fi) {
            if (nzb.ozb == -1) {
                ptb(du, qtb)
            } else {
                ptb(ipb.ev(nzb.ozb), qtb)
            } if (((this.pzb - qtb.left) >= nzb.trb) && ((this.pzb - qtb.left) < nzb.xrb) && ((this.qzb - qtb.top) >= nzb.urb) && ((this.qzb - qtb.top) < nzb.yrb)) {
                io.dq = ((tt.pzb - qtb.left - nzb.trb) / nzb.rzb) + nzb.lrb;
                io.eq = ((tt.qzb - qtb.top - nzb.urb) / nzb.szb) + nzb.mrb;
                break
            }
        }
    }
}

function vde() {
    tt.nce();
    tt.pce();
    tt.rce()
}
abd.prototype.wde = function () {
    xqd();
    var wab = [];
    wab[0] = 1;
    wab[1] = 0;
    wab[2] = 0;
    wab[3] = 1;
    wab[4] = 0;
    wab[5] = 0;
    kod(wab);
    for (var vu = 0; vu < pvc.length; ++vu) {
        var rud = pvc[vu]
    }
    zqd()
};

function wu() {
    this.cgb = [];
    this.xu = !1;
    this.length = 0;
    this.mfb = 0
}
wu.prototype.tzc = function () {
    for (var vu = 0; vu < this.cgb.length; vu++) {
        if (this.cgb[vu] == null) return vu
    }
    return this.cgb.length
};
wu.prototype.zu = function (hgd) {
    var bm = this.tzc();
    this.cgb[bm] = hgd;
    this.mfb++;
    this.length = this.cgb.length;
    return bm
};
wu.prototype.ev = function (aib) {
    if (aib < 0 || aib >= this.cgb.length) return null;
    return this.cgb[aib]
};
wu.prototype.igd = function (jgd) {
    for (var vu = 0; vu < this.cgb.length; vu++) {
        if (this.cgb[vu] == jgd) return vu
    }
};
wu.prototype.kgd = function (jgd) {
    for (var vu = 0; vu < this.cgb.length; vu++) {
        if (this.cgb[vu] == jgd) {
            if (this.xu) {
                this.cgb.splice(vu, 1)
            } else {
                this.cgb[vu] = null
            }
            this.mfb--;
            this.length = this.cgb.length;
            return !0;
            break
        }
    }
    return !1
};
wu.prototype.jv = function (aib) {
    if (aib < 0 || aib >= this.cgb.length) return !1;
    if (this.xu) {
        this.cgb.splice(aib, 1)
    } else {
        this.cgb[aib] = null
    }
    this.mfb--;
    this.length = this.cgb.length;
    return !0
};
wu.prototype.ajb = function () {
    this.cgb = [];
    this.mfb = 0;
    this.length = this.cgb.length
};
wu.prototype.mv = function (cob, cv) {
    if (cob < 0 || cob >= this.cgb.length) return;
    this.cgb[cob] = cv
};
wu.prototype.xde = function (yde) {
    if (yde) {
        this.cgb.sort(function (ebc, sz) {
            return ebc - sz
        })
    } else {
        this.cgb.sort(function (ebc, sz) {
            return sz - ebc
        })
    }
};
wu.prototype.su = function (tu) {
    this.cgb = tu.cgb.slice();
    this.xu = tu.xu;
    this.length = tu.length;
    this.mfb = tu.mfb
};

function zde() {
    this.aee = null;
    this.bee = 0;
    this.cee = null
}

function dee() {
    this.aee = null;
    this.eee = !1;
    this.xgd = null
}

function fee(gee, ly) {
    this.yt = 0;
    this.ddd = gee;
    this.rcd = ly;
    this.vwd = -1;
    this.mgb = 0;
    this.wwd = 0;
    this.xwd = !1;
    this.ywd = !1;
    this.zwd = !1;
    this.lab = 0;
    this.hab = null;
    this.hee = -1;
    this.cdd = !1;
    this.hac = new wu();
    this.az = new wu();
    this.hac.xu = !0;
    this.az.xu = !0;
    this.iee = [];
    for (var ebc = 0; ebc < fbc; ebc++) {
        this.iee[ebc] = null
    }
    this.jee = [];
    this.kee = [];
    this.lee = [];
    this.fdd = [];
    this.di = [];
    this.dab = [];
    this.fyb = []
}
fee.prototype.jjb = function () {
    return this.hac.cgb
};
fee.prototype.qyb = function () {
    return this.az.cgb
};

function qdd(mee, nee) {
    var hfb = new fee(mee, nee.dg);
    with(hfb) {
        if (nee.qi != undefined) mgb = nee.qi;
        if (nee.fi != undefined) ywd = nee.fi;
        if (nee.kjb != undefined) xwd = nee.kjb;
        if (nee.vk != undefined) wwd = nee.vk;
        if (nee.uvd != undefined) zwd = nee.uvd;
        if (nee.parent != undefined) lab = nee.parent;
        if (nee.oee != undefined) vwd = nee.oee;
        if (nee.gi) {
            hfb.gi = nee.gi;
            hfb.dab[wfb] = !0
        }
        if (nee.nk) {
            hfb.nk = nee.nk;
            hfb.dab[xfb] = !0
        }
        if (nee.pee) {
            hfb.pee = nee.pee;
            hfb.dab[zcc] = !0
        }
        if (nee.ki) {
            hfb.ki = nee.ki;
            hfb.dab[ycc] = !0
        }
        if (nee.qee) {
            hfb.qee = nee.qee;
            hfb.dab[adc] = !0
        }
        if (nee.yi) {
            hfb.yi = nee.yi;
            hfb.dab[ucc] = !0
        }
        if (nee.ree) {
            hfb.ree = nee.ree;
            hfb.dab[eac] = !0
        }
        if (nee.see) {
            hfb.see = nee.see;
            hfb.dab[vzb] = !0
        }
        if (nee.tee) {
            hfb.tee = nee.tee;
            hfb.dab[xzb] = !0
        }
        if (nee.uee) {
            hfb.uee = nee.uee;
            hfb.dab[wzb] = !0
        }
        if (nee.ti) {
            hfb.ti = nee.ti;
            hfb.dab[yzb] = !0
        }
        if (nee.vee) {
            hfb.vee = nee.vee;
            hfb.dab[aac] = !0
        }
        if (nee.wee) {
            hfb.wee = nee.wee;
            hfb.dab[zzb] = !0
        }
        if (nee.xee) {
            hfb.xee = nee.xee;
            hfb.dab[bac] = !0
        }
        if (nee.yee) {
            hfb.yee = nee.yee;
            hfb.dab[dac] = !0
        }
        if (nee.zee) {
            hfb.zee = nee.zee;
            hfb.dab[cac] = !0
        }
        if (nee.bj) {
            hfb.bj = nee.bj;
            hfb.dab[qac] = !0
        }
        if (nee.afe) {
            hfb.afe = nee.afe;
            hfb.dab[eec] = !0;
        }
        if (nee.bfe) {
            hfb.bfe = nee.bfe;
            hfb.dab[fec] = !0
        }
        if (nee.cfe) {
            hfb.cfe = nee.cfe;
            hfb.dab[rac] = !0
        }
        if (nee.dfe) {
            hfb.dfe = nee.dfe;
            hfb.dab[gec] = !0
        }
        if (nee.efe) {
            hfb.efe = nee.efe;
            hfb.dab[hec] = !0
        }
        if (nee.ffe) {
            hfb.ffe = nee.ffe;
            hfb.dab[sac] = !0
        }
        if (nee.gfe) {
            hfb.gfe = nee.gfe;
            hfb.dab[iec] = !0
        }
        if (nee.hfe) {
            hfb.hfe = nee.hfe;
            hfb.dab[jec] = !0
        }
        if (nee.ife) {
            hfb.ife = nee.ife;
            hfb.dab[fac] = !0
        }
        if (nee.jfe) {
            hfb.jfe = nee.jfe;
            hfb.dab[gac] = !0
        }
        if (nee.vi) {
            hfb.vi = nee.vi;
            hfb.dab[gyb] = !0
        }
        if (nee.kfe) {
            hfb.kfe = nee.kfe;
            hfb.dab[kyb] = !0
        }
        if (nee.lfe) {
            hfb.lfe = nee.lfe;
            hfb.dab[bdc] = !0
        }
        if (nee.mfe) {
            hfb.mfe = nee.mfe;
            hfb.dab[cdc] = !0
        }
        if (nee.dj) {
            hfb.dj = nee.dj;
            hfb.dab[ddc] = !0
        }
        if (nee.nfe) {
            hfb.nfe = nee.nfe;
            hfb.dab[edc] = !0
        }
        if (nee.ofe) {
            hfb.ofe = nee.ofe;
            hfb.dab[fdc] = !0
        }
        if (nee.pfe) {
            hfb.pfe = nee.pfe;
            hfb.dab[gdc] = !0;
        }
        if (nee.qfe) {
            hfb.qfe = nee.qfe;
            hfb.dab[hdc] = !0
        }
        if (nee.rfe) {
            hfb.rfe = nee.rfe;
            hfb.dab[idc] = !0
        }
        if (nee.sfe) {
            hfb.sfe = nee.sfe;
            hfb.dab[jdc] = !0
        }
        if (nee.tfe) {
            hfb.tfe = nee.tfe;
            hfb.dab[kdc] = !0
        }
        if (nee.ufe) {
            hfb.ufe = nee.ufe;
            hfb.dab[ldc] = !0
        }
        if (nee.vfe) {
            hfb.vfe = nee.vfe;
            hfb.dab[mdc] = !0;
        }
        if (nee.wfe) {
            hfb.wfe = nee.wfe;
            hfb.dab[ndc] = !0
        }
        if (nee.xfe) {
            hfb.xfe = nee.xfe;
            hfb.dab[odc] = !0
        }
        if (nee.yfe) {
            hfb.yfe = nee.yfe;
            hfb.dab[pdc] = !0
        }
        if (nee.zfe) {
            hfb.zfe = nee.zfe;
            hfb.dab[qdc] = !0
        }
        if (nee.age) {
            hfb.age = nee.age;
            hfb.dab[rdc] = !0
        }
        if (nee.bge) {
            hfb.bge = nee.bge;
            hfb.dab[sdc] = !0
        }
        if (nee.cge) {
            hfb.cge = nee.cge;
            hfb.dab[tdc] = !0
        }
        if (nee.dge) {
            hfb.dge = nee.dge;
            hfb.dab[udc] = !0
        }
        if (nee.ege) {
            hfb.ege = nee.ege;
            hfb.dab[vdc] = !0
        }
        if (nee.fge) {
            hfb.fge = nee.fge;
            hfb.dab[wdc] = !0
        }
        if (nee.gge) {
            hfb.gge = nee.gge;
            hfb.dab[xdc] = !0
        }
        if (nee.hge) {
            hfb.hge = nee.hge;
            hfb.dab[ydc] = !0
        }
        if (nee.ige) {
            hfb.ige = nee.ige;
            hfb.dab[zdc] = !0
        }
        if (nee.jge) {
            hfb.jge = nee.jge;
            hfb.dab[aec] = !0
        }
        if (nee.kge) {
            hfb.kge = nee.kge;
            hfb.dab[bec] = !0
        }
        if (nee.lge) {
            hfb.lge = nee.lge;
            hfb.dab[cec] = !0
        }
        if (nee.mge) {
            hfb.mge = nee.mge;
            hfb.dab[dec] = !0
        }
        if (nee.nge) {
            hfb.iee[0] = nee.nge;
            hfb.dab[kec] = !0
        }
        if (nee.oge) {
            hfb.iee[1] = nee.oge;
            hfb.dab[lec] = !0
        }
        if (nee.pge) {
            hfb.iee[2] = nee.pge;
            hfb.dab[mec] = !0
        }
        if (nee.qge) {
            hfb.iee[3] = nee.qge;
            hfb.dab[nec] = !0;
        }
        if (nee.rge) {
            hfb.iee[4] = nee.rge;
            hfb.dab[oec] = !0
        }
        if (nee.sge) {
            hfb.iee[5] = nee.sge;
            hfb.dab[pec] = !0
        }
        if (nee.tge) {
            hfb.iee[6] = nee.tge;
            hfb.dab[qec] = !0
        }
        if (nee.kj) {
            hfb.iee[7] = nee.kj;
            hfb.dab[rec] = !0
        }
        if (nee.ii) {
            hfb.iee[8] = nee.ii;
            hfb.dab[sec] = !0
        }
        if (nee.uge) {
            hfb.iee[9] = nee.uge;
            hfb.dab[tec] = !0
        }
        if (nee.vge) {
            hfb.iee[10] = nee.vge;
            hfb.dab[uec] = !0
        }
        if (nee.uj) {
            hfb.iee[11] = nee.uj;
            hfb.dab[vec] = !0;
        }
        if (nee.wge) {
            hfb.kee[lic] = nee.wge;
            hfb.dab[lic] = !0
        }
        if (nee.hj) {
            hfb.kee[nic] = nee.hj;
            hfb.dab[nic] = !0
        }
        if (nee.xge) {
            hfb.kee[oic] = nee.xge;
            hfb.dab[oic] = !0
        }
        if (nee.yge) {
            hfb.kee[pic] = nee.yge;
            hfb.dab[pic] = !0
        }
        if (nee.zge) {
            hfb.kee[qic] = nee.zge;
            hfb.dab[qic] = !0
        }
        if (nee.ahe) {
            hfb.kee[ric] = nee.ahe;
            hfb.dab[ric] = !0
        }
        if (nee.bhe) {
            hfb.kee[sic] = nee.bhe;
            hfb.dab[sic] = !0
        }
        if (nee.che) {
            hfb.kee[tic] = nee.che;
            hfb.dab[tic] = !0
        }
        if (nee.dhe) {
            hfb.kee[uic] = nee.dhe;
            hfb.dab[uic] = !0
        }
        if (nee.fj) {
            hfb.kee[vic] = nee.fj;
            hfb.dab[vic] = !0
        }
        if (nee.ehe) {
            hfb.kee[wic] = nee.ehe;
            hfb.dab[wic] = !0
        }
        if (nee.fhe) {
            hfb.kee[xic] = nee.fhe;
            hfb.dab[xic] = !0
        }
        if (nee.ghe) {
            hfb.kee[yic] = nee.ghe;
            hfb.dab[yic] = !0
        }
        if (nee.hhe) {
            hfb.kee[zic] = nee.hhe;
            hfb.dab[zic] = !0
        }
        if (nee.ihe) {
            hfb.kee[ajc] = nee.ihe;
            hfb.dab[ajc] = !0
        }
        if (nee.jhe) {
            hfb.kee[bjc] = nee.jhe;
            hfb.dab[bjc] = !0
        }
        if (nee.khe) {
            hfb.kee[cjc] = nee.khe;
            hfb.dab[cjc] = !0
        }
        if (nee.lhe) {
            hfb.kee[djc] = nee.lhe;
            hfb.dab[djc] = !0
        }
        if (nee.mhe) {
            hfb.kee[ejc] = nee.mhe;
            hfb.dab[ejc] = !0
        }
        if (nee.nhe) {
            hfb.kee[fjc] = nee.nhe;
            hfb.dab[fjc] = !0
        }
        if (nee.ohe) {
            hfb.kee[gjc] = nee.ohe;
            hfb.dab[gjc] = !0
        }
        if (nee.phe) {
            hfb.kee[hjc] = (nee.phe);
            hfb.dab[hjc] = !0
        }
        if (nee.qhe) {
            hfb.kee[ijc] = (nee.qhe);
            hfb.dab[ijc] = !0
        }
        if (nee.rhe) {
            hfb.kee[jjc] = (nee.rhe);
            hfb.dab[jjc] = !0
        }
        if (nee.she) {
            hfb.kee[kjc] = (nee.she);
            hfb.dab[kjc] = !0
        }
        if (nee.the) {
            hfb.kee[ljc] = (nee.the);
            hfb.dab[ljc] = !0;
        }
        if (nee.uhe) {
            hfb.kee[mjc] = (nee.uhe);
            hfb.dab[mjc] = !0
        }
        if (nee.vhe) {
            hfb.kee[njc] = (nee.vhe);
            hfb.dab[njc] = !0
        }
        if (nee.whe) {
            hfb.kee[ojc] = (nee.whe);
            hfb.dab[ojc] = !0
        }
        if (nee.xhe) {
            hfb.kee[pjc] = (nee.xhe);
            hfb.dab[pjc] = !0
        }
        if (nee.yhe) {
            hfb.kee[qjc] = (nee.yhe);
            hfb.dab[qjc] = !0
        }
        if (nee.zhe) {
            hfb.kee[rjc] = (nee.zhe);
            hfb.dab[rjc] = !0
        }
        if (nee.aie) {
            hfb.kee[sjc] = (nee.aie);
            hfb.dab[sjc] = !0;
        }
        if (nee.bie) {
            hfb.kee[tjc] = (nee.bie);
            hfb.dab[tjc] = !0
        }
        if (nee.cie) {
            hfb.kee[ujc] = (nee.cie);
            hfb.dab[ujc] = !0
        }
        if (nee.die) {
            hfb.kee[vjc] = (nee.die);
            hfb.dab[vjc] = !0
        }
        if (nee.eie) {
            hfb.kee[wjc] = (nee.eie);
            hfb.dab[wjc] = !0
        }
        if (nee.fie) {
            hfb.kee[xjc] = (nee.fie);
            hfb.dab[xjc] = !0
        }
        if (nee.gie) {
            hfb.kee[yjc] = (nee.gie);
            hfb.dab[yjc] = !0
        }
        if (nee.hie) {
            hfb.kee[zjc] = (nee.hie);
            hfb.dab[zjc] = !0;
        }
        if (nee.iie) {
            hfb.kee[akc] = (nee.iie);
            hfb.dab[akc] = !0
        }
        if (nee.jie) {
            hfb.kee[bkc] = (nee.jie);
            hfb.dab[bkc] = !0
        }
        if (nee.pj) {
            hfb.kee[ckc] = (nee.pj);
            hfb.dab[ckc] = !0
        }
        if (nee.kie) {
            hfb.kee[dkc] = (nee.kie);
            hfb.dab[dkc] = !0
        }
        if (nee.lie) {
            hfb.kee[ekc] = (nee.lie);
            hfb.dab[ekc] = !0
        }
        if (nee.mie) {
            hfb.kee[fkc] = (nee.mie);
            hfb.dab[fkc] = !0
        }
        if (nee.nie) {
            hfb.kee[gkc] = (nee.nie);
            hfb.dab[gkc] = !0;
        }
        if (nee.oie) {
            hfb.kee[hkc] = (nee.oie);
            hfb.dab[hkc] = !0
        }
        if (nee.pie) {
            hfb.kee[ikc] = (nee.pie);
            hfb.dab[ikc] = !0
        }
        if (nee.qie) {
            hfb.kee[jkc] = (nee.qie);
            hfb.dab[jkc] = !0
        }
        if (nee.rie) {
            hfb.kee[kkc] = (nee.rie);
            hfb.dab[kkc] = !0
        }
        if (nee.sie) {
            hfb.kee[lkc] = (nee.sie);
            hfb.dab[lkc] = !0
        }
        if (nee.tie) {
            hfb.kee[mkc] = (nee.tie);
            hfb.dab[mkc] = !0
        }
        if (nee.uie) {
            hfb.kee[nkc] = (nee.uie);
            hfb.dab[nkc] = !0;
        }
        if (nee.vie) {
            hfb.kee[okc] = (nee.vie);
            hfb.dab[okc] = !0
        }
        if (nee.wie) {
            hfb.kee[pkc] = (nee.wie);
            hfb.dab[pkc] = !0
        }
        if (nee.xie) {
            hfb.kee[qkc] = (nee.xie);
            hfb.dab[qkc] = !0
        }
        if (nee.yie) {
            hfb.kee[rkc] = (nee.yie);
            hfb.dab[rkc] = !0
        }
        if (nee.zie) {
            hfb.kee[skc] = (nee.zie);
            hfb.dab[skc] = !0
        }
        if (nee.aje) {
            hfb.kee[tkc] = (nee.aje);
            hfb.dab[tkc] = !0
        }
        if (nee.bje) {
            hfb.kee[ukc] = (nee.bje);
            hfb.dab[ukc] = !0
        }
        if (nee.cje) {
            hfb.kee[vkc] = (nee.cje);
            hfb.dab[vkc] = !0
        }
        if (nee.dje) {
            hfb.kee[wkc] = (nee.dje);
            hfb.dab[wkc] = !0
        }
        if (nee.eje) {
            hfb.kee[xkc] = (nee.eje);
            hfb.dab[xkc] = !0
        }
        if (nee.fje) {
            hfb.kee[ykc] = (nee.fje);
            hfb.dab[ykc] = !0
        }
        if (nee.gje) {
            hfb.kee[zkc] = (nee.gje);
            hfb.dab[zkc] = !0
        }
        if (nee.hje) {
            hfb.kee[alc] = (nee.hje);
            hfb.dab[alc] = !0
        }
        if (nee.ije) {
            hfb.kee[blc] = (nee.ije);
            hfb.dab[blc] = !0
        }
        if (nee.jje) {
            hfb.kee[clc] = (nee.jje);
            hfb.dab[clc] = !0
        }
        if (nee.kje) {
            hfb.kee[qlc] = (nee.kje);
            hfb.dab[qlc] = !0
        }
        if (nee.lje) {
            hfb.kee[rlc] = (nee.lje);
            hfb.dab[rlc] = !0
        }
        if (nee.mje) {
            hfb.kee[slc] = (nee.mje);
            hfb.dab[slc] = !0
        }
        if (nee.nje) {
            hfb.kee[tlc] = (nee.nje);
            hfb.dab[tlc] = !0
        }
        if (nee.oje) {
            hfb.kee[ulc] = (nee.oje);
            hfb.dab[ulc] = !0
        }
        if (nee.pje) {
            hfb.kee[vlc] = (nee.pje);
            hfb.dab[vlc] = !0
        }
        if (nee.qje) {
            hfb.kee[wlc] = (nee.qje);
            hfb.dab[wlc] = !0
        }
        if (nee.rje) {
            hfb.kee[xlc] = (nee.rje);
            hfb.dab[xlc] = !0
        }
        if (nee.sje) {
            hfb.kee[ylc] = (nee.sje);
            hfb.dab[ylc] = !0
        }
        if (nee.tje) {
            hfb.kee[zlc] = (nee.tje);
            hfb.dab[zlc] = !0
        }
        if (nee.uje) {
            hfb.kee[amc] = (nee.uje);
            hfb.dab[amc] = !0;
        }
        if (nee.nj) {
            hfb.kee[bmc] = (nee.nj);
            hfb.dab[bmc] = !0
        }
        if (nee.vje) {
            hfb.kee[cmc] = (nee.vje);
            hfb.dab[cmc] = !0
        }
        if (nee.wje) {
            hfb.kee[dmc] = (nee.wje);
            hfb.dab[dmc] = !0
        }
        if (nee.xje) {
            hfb.kee[emc] = (nee.xje);
            hfb.dab[emc] = !0
        }
        if (nee.yje) {
            hfb.kee[fmc] = (nee.yje);
            hfb.dab[fmc] = !0
        }
        if (nee.zje) {
            hfb.jee[gmc] = (nee.zje);
            hfb.dab[gmc] = !0;
        }
        if (nee.ake) {
            hfb.jee[imc] = (nee.ake);
            hfb.dab[imc] = !0
        }
        if (nee.bke) {
            hfb.jee[jmc] = (nee.bke);
            hfb.dab[jmc] = !0
        }
        if (nee.cke) {
            hfb.jee[kmc] = (nee.cke);
            hfb.dab[kmc] = !0
        }
        if (nee.dke) {
            hfb.jee[lmc] = (nee.dke);
            hfb.dab[lmc] = !0
        }
        if (nee.eke) {
            hfb.jee[mmc] = (nee.eke);
            hfb.dab[mmc] = !0
        }
        if (nee.fke) {
            hfb.jee[nmc] = (nee.fke);
            hfb.dab[nmc] = !0
        }
        if (nee.gke) {
            hfb.jee[omc] = (nee.gke);
            hfb.dab[omc] = !0
        }
        if (nee.hke) {
            hfb.jee[pmc] = (nee.hke);
            hfb.dab[pmc] = !0
        }
        if (nee.ike) {
            hfb.jee[qmc] = (nee.ike);
            hfb.dab[qmc] = !0
        }
        if (nee.jke) {
            hfb.jee[rmc] = (nee.jke);
            hfb.dab[rmc] = !0
        }
        if (nee.kke) {
            hfb.jee[smc] = (nee.kke);
            hfb.dab[smc] = !0
        }
        if (nee.lke) {
            hfb.jee[tmc] = (nee.lke);
            hfb.dab[tmc] = !0
        }
        if (nee.mke) {
            hfb.jee[umc] = (nee.mke);
            hfb.dab[umc] = !0
        }
        if (nee.nke) {
            hfb.jee[vmc] = (nee.nke);
            hfb.dab[vmc] = !0
        }
        if (nee.bk) {
            hfb.jee[wmc] = (nee.bk);
            hfb.dab[wmc] = !0
        }
        if (nee.zj) {
            hfb.jee[xmc] = (nee.zj);
            hfb.dab[xmc] = !0
        }
        if (nee.xj) {
            hfb.jee[ymc] = (nee.xj);
            hfb.dab[ymc] = !0
        }
        if (nee.oke) {
            hfb.jee[zmc] = (nee.oke);
            hfb.dab[zmc] = !0
        }
        if (nee.pke) {
            hfb.jee[anc] = (nee.pke);
            hfb.dab[anc] = !0
        }
        if (nee.qke) {
            hfb.jee[bnc] = (nee.qke);
            hfb.dab[bnc] = !0
        }
        if (nee.rke) {
            hfb.jee[cnc] = (nee.rke);
            hfb.dab[cnc] = !0
        }
        if (nee.ske) {
            hfb.jee[dnc] = (nee.ske);
            hfb.dab[dnc] = !0
        }
        if (nee.tke) {
            hfb.jee[enc] = (nee.tke);
            hfb.dab[enc] = !0;
        }
        if (nee.uke) {
            hfb.jee[fnc] = (nee.uke);
            hfb.dab[fnc] = !0
        }
        if (nee.vke) {
            hfb.jee[gnc] = (nee.vke);
            hfb.dab[gnc] = !0
        }
        if (nee.wke) {
            hfb.jee[hnc] = (nee.wke);
            hfb.dab[hnc] = !0
        }
        if (nee.xke) {
            hfb.jee[inc] = (nee.xke);
            hfb.dab[inc] = !0
        }
        if (nee.yke) {
            hfb.jee[jnc] = (nee.yke);
            hfb.dab[jnc] = !0
        }
        if (nee.zke) {
            hfb.jee[knc] = (nee.zke);
            hfb.dab[knc] = !0
        }
        if (nee.ale) {
            hfb.jee[lnc] = (nee.ale);
            hfb.dab[lnc] = !0
        }
        if (nee.ble) {
            hfb.jee[mnc] = (nee.ble);
            hfb.dab[mnc] = !0
        }
        if (nee.cle) {
            hfb.jee[nnc] = (nee.cle);
            hfb.dab[nnc] = !0
        }
        if (nee.dle) {
            hfb.jee[onc] = (nee.dle);
            hfb.dab[onc] = !0
        }
        if (nee.ele) {
            hfb.jee[pnc] = (nee.ele);
            hfb.dab[pnc] = !0
        }
        if (nee.fle) {
            hfb.jee[qnc] = (nee.fle);
            hfb.dab[qnc] = !0
        }
        if (nee.gle) {
            hfb.jee[rnc] = (nee.gle);
            hfb.dab[rnc] = !0
        }
        if (nee.hle) {
            hfb.jee[snc] = (nee.hle);
            hfb.dab[snc] = !0
        }
        if (nee.ile) {
            hfb.jee[tnc] = (nee.ile);
            hfb.dab[tnc] = !0
        }
        if (nee.jle) {
            hfb.jee[unc] = (nee.jle);
            hfb.dab[unc] = !0
        }
        if (nee.kle) {
            hfb.jee[vnc] = (nee.kle);
            hfb.dab[vnc] = !0;
        }
        if (nee.lle) {
            hfb.jee[wnc] = (nee.lle);
            hfb.dab[wnc] = !0
        }
        if (nee.mle) {
            hfb.jee[xnc] = (nee.mle);
            hfb.dab[xnc] = !0
        }
        if (nee.nle) {
            hfb.jee[ync] = (nee.nle);
            hfb.dab[ync] = !0
        }
        if (nee.ole) {
            hfb.jee[znc] = (nee.ole);
            hfb.dab[znc] = !0
        }
        if (nee.ple) {
            hfb.jee[aoc] = (nee.ple);
            hfb.dab[aoc] = !0
        }
        if (nee.qle) {
            hfb.jee[boc] = (nee.qle);
            hfb.dab[boc] = !0
        }
        if (nee.rle) {
            hfb.jee[coc] = (nee.rle);
            hfb.dab[coc] = !0
        }
        if (nee.sle) {
            hfb.jee[doc] = (nee.sle);
            hfb.dab[doc] = !0
        }
        if (nee.tle) {
            hfb.jee[eoc] = (nee.tle);
            hfb.dab[eoc] = !0
        }
        if (nee.ule) {
            hfb.jee[foc] = (nee.ule);
            hfb.dab[foc] = !0
        }
        if (nee.vle) {
            hfb.jee[goc] = (nee.vle);
            hfb.dab[goc] = !0
        }
        if (nee.wle) {
            hfb.jee[hoc] = (nee.wle);
            hfb.dab[hoc] = !0
        }
        if (nee.xle) {
            hfb.jee[ioc] = (nee.xle);
            hfb.dab[ioc] = !0
        }
        if (nee.yle) {
            hfb.jee[joc] = (nee.yle);
            hfb.dab[joc] = !0
        }
        if (nee.zle) {
            hfb.jee[koc] = (nee.zle);
            hfb.dab[koc] = !0
        }
        if (nee.ame) {
            hfb.jee[loc] = (nee.ame);
            hfb.dab[loc] = !0
        }
        if (nee.bme) {
            hfb.jee[moc] = (nee.bme);
            hfb.dab[moc] = !0;
        }
        if (nee.cme) {
            hfb.jee[noc] = (nee.cme);
            hfb.dab[noc] = !0
        }
        if (nee.dme) {
            hfb.jee[ooc] = (nee.dme);
            hfb.dab[ooc] = !0
        }
        if (nee.eme) {
            hfb.jee[poc] = (nee.eme);
            hfb.dab[poc] = !0
        }
        if (nee.fme) {
            hfb.jee[qoc] = (nee.fme);
            hfb.dab[qoc] = !0
        }
        if (nee.gme) {
            hfb.jee[roc] = (nee.gme);
            hfb.dab[roc] = !0
        }
        if (nee.hme) {
            hfb.jee[soc] = (nee.hme);
            hfb.dab[soc] = !0
        }
        if (nee.ime) {
            hfb.jee[toc] = (nee.ime);
            hfb.dab[toc] = !0
        }
        if (nee.jme) {
            hfb.jee[uoc] = (nee.jme);
            hfb.dab[uoc] = !0
        }
        if (nee.kme) {
            hfb.jee[voc] = (nee.kme);
            hfb.dab[voc] = !0
        }
        if (nee.lme) {
            hfb.jee[woc] = (nee.lme);
            hfb.dab[woc] = !0
        }
        if (nee.mme) {
            hfb.jee[xoc] = (nee.mme);
            hfb.dab[xoc] = !0
        }
        if (nee.nme) {
            hfb.jee[lpc] = (nee.nme);
            hfb.dab[lpc] = !0
        }
        if (nee.ome) {
            hfb.jee[mpc] = (nee.ome);
            hfb.dab[mpc] = !0
        }
        if (nee.pme) {
            hfb.jee[npc] = (nee.pme);
            hfb.dab[npc] = !0
        }
        if (nee.qme) {
            hfb.jee[opc] = (nee.qme);
            hfb.dab[opc] = !0
        }
        if (nee.rme) {
            hfb.jee[ppc] = (nee.rme);
            hfb.dab[ppc] = !0
        }
        if (nee.sme) {
            hfb.jee[qpc] = (nee.sme);
            hfb.dab[qpc] = !0
        }
        if (nee.tme) {
            hfb.jee[rpc] = (nee.tme);
            hfb.dab[rpc] = !0
        }
        if (nee.ume) {
            hfb.jee[spc] = (nee.ume);
            hfb.dab[spc] = !0
        }
        if (nee.vme) {
            hfb.jee[tpc] = (nee.vme);
            hfb.dab[tpc] = !0
        }
        if (nee.wme) {
            hfb.jee[upc] = (nee.wme);
            hfb.dab[upc] = !0
        }
        if (nee.xme) {
            hfb.jee[vpc] = (nee.xme);
            hfb.dab[vpc] = !0
        }
        if (nee.yme) {
            hfb.jee[wpc] = (nee.yme);
            hfb.dab[wpc] = !0;
        }
        if (nee.zme) {
            hfb.jee[xpc] = (nee.zme);
            hfb.dab[xpc] = !0
        }
        if (nee.ane) {
            hfb.jee[ypc] = (nee.ane);
            hfb.dab[ypc] = !0
        }
        if (nee.bne) {
            hfb.jee[zpc] = (nee.bne);
            hfb.dab[zpc] = !0
        }
        if (nee.cne) {
            hfb.jee[aqc] = (nee.cne);
            hfb.dab[aqc] = !0
        }
        if (nee.dne) {
            hfb.lee[bqc] = (nee.dne);
            hfb.dab[bqc] = !0
        }
        if (nee.ene) {
            hfb.lee[dqc] = (nee.ene);
            hfb.dab[dqc] = !0
        }
        if (nee.fne) {
            hfb.lee[eqc] = (nee.fne);
            hfb.dab[eqc] = !0
        }
        if (nee.gne) {
            hfb.lee[fqc] = (nee.gne);
            hfb.dab[fqc] = !0
        }
        if (nee.hne) {
            hfb.lee[gqc] = (nee.hne);
            hfb.dab[gqc] = !0
        }
        if (nee.ine) {
            hfb.lee[hqc] = (nee.ine);
            hfb.dab[hqc] = !0
        }
        if (nee.jne) {
            hfb.lee[iqc] = (nee.jne);
            hfb.dab[iqc] = !0
        }
        if (nee.kne) {
            hfb.lee[jqc] = (nee.kne);
            hfb.dab[jqc] = !0
        }
        if (nee.lne) {
            hfb.lee[kqc] = (nee.lne);
            hfb.dab[kqc] = !0;
        }
        if (nee.mne) {
            hfb.lee[lqc] = (nee.mne);
            hfb.dab[lqc] = !0
        }
        if (nee.nne) {
            hfb.lee[mqc] = (nee.nne);
            hfb.dab[mqc] = !0
        }
        if (nee.one) {
            hfb.lee[nqc] = (nee.one);
            hfb.dab[nqc] = !0
        }
        if (nee.pne) {
            hfb.lee[oqc] = (nee.pne);
            hfb.dab[oqc] = !0
        }
        if (nee.qne) {
            hfb.lee[pqc] = (nee.qne);
            hfb.dab[pqc] = !0
        }
        if (nee.rne) {
            hfb.lee[qqc] = (nee.rne);
            hfb.dab[qqc] = !0;
        }
        if (nee.sne) {
            hfb.lee[rqc] = (nee.sne);
            hfb.dab[rqc] = !0
        }
        if (nee.tne) {
            hfb.lee[sqc] = (nee.tne);
            hfb.dab[sqc] = !0
        }
        if (nee.une) {
            hfb.lee[tqc] = (nee.une);
            hfb.dab[tqc] = !0
        }
        if (nee.vne) {
            hfb.lee[uqc] = (nee.vne);
            hfb.dab[uqc] = !0
        }
        if (nee.wne) {
            hfb.lee[vqc] = (nee.wne);
            hfb.dab[vqc] = !0
        }
        if (nee.xne) {
            hfb.lee[wqc] = (nee.xne);
            hfb.dab[wqc] = !0
        }
        if (nee.yne) {
            hfb.lee[xqc] = (nee.yne);
            hfb.dab[xqc] = !0
        }
        if (nee.zne) {
            hfb.lee[yqc] = (nee.zne);
            hfb.dab[yqc] = !0
        }
        if (nee.aoe) {
            hfb.lee[zqc] = (nee.aoe);
            hfb.dab[zqc] = !0
        }
        if (nee.boe) {
            hfb.lee[brc] = (nee.boe);
            hfb.dab[brc] = !0
        }
        if (nee.coe) {
            hfb.lee[crc] = (nee.coe);
            hfb.dab[crc] = !0
        }
        if (nee.doe) {
            hfb.lee[drc] = (nee.doe);
            hfb.dab[drc] = !0
        }
        if (nee.eoe) {
            hfb.lee[erc] = (nee.eoe);
            hfb.dab[erc] = !0;
        }
        if (nee.foe) {
            hfb.lee[frc] = (nee.foe);
            hfb.dab[frc] = !0
        }
        if (nee.goe) {
            hfb.lee[grc] = (nee.goe);
            hfb.dab[grc] = !0
        }
        if (nee.hoe) {
            hfb.lee[hrc] = (nee.hoe);
            hfb.dab[hrc] = !0
        }
        if (nee.ioe) {
            hfb.lee[irc] = (nee.ioe);
            hfb.dab[irc] = !0
        }
        if (nee.joe) {
            hfb.lee[jrc] = (nee.joe);
            hfb.dab[jrc] = !0
        }
        if (nee.koe) {
            hfb.lee[krc] = (nee.koe);
            hfb.dab[krc] = !0
        }
        if (nee.loe) {
            hfb.lee[lrc] = (nee.loe);
            hfb.dab[lrc] = !0
        }
        if (nee.moe) {
            hfb.lee[mrc] = (nee.moe);
            hfb.dab[mrc] = !0
        }
        if (nee.noe) {
            hfb.lee[nrc] = (nee.noe);
            hfb.dab[nrc] = !0
        }
        if (nee.ooe) {
            hfb.lee[orc] = (nee.ooe);
            hfb.dab[orc] = !0
        }
        if (nee.poe) {
            hfb.lee[prc] = (nee.poe);
            hfb.dab[prc] = !0
        }
        if (nee.qoe) {
            hfb.lee[qrc] = (nee.qoe);
            hfb.dab[qrc] = !0
        }
        if (nee.roe) {
            hfb.lee[rrc] = (nee.roe);
            hfb.dab[rrc] = !0
        }
        if (nee.soe) {
            hfb.lee[trc] = (nee.soe);
            hfb.dab[trc] = !0
        }
        if (nee.toe) {
            hfb.lee[urc] = (nee.toe);
            hfb.dab[urc] = !0
        }
        if (nee.uoe) {
            hfb.lee[vrc] = (nee.uoe);
            hfb.dab[vrc] = !0
        }
        if (nee.voe) {
            hfb.lee[wrc] = (nee.voe);
            hfb.dab[wrc] = !0
        }
        if (nee.woe) {
            hfb.lee[xrc] = (nee.woe);
            hfb.dab[xrc] = !0
        }
        if (nee.xoe) {
            hfb.lee[yrc] = (nee.xoe);
            hfb.dab[yrc] = !0
        }
        if (nee.yoe) {
            hfb.lee[zrc] = (nee.yoe);
            hfb.dab[zrc] = !0
        }
        if (nee.zoe) {
            hfb.lee[asc] = (nee.zoe);
            hfb.dab[asc] = !0
        }
        if (nee.ape) {
            hfb.lee[bsc] = (nee.ape);
            hfb.dab[bsc] = !0
        }
        if (nee.bpe) {
            hfb.lee[csc] = (nee.bpe);
            hfb.dab[csc] = !0
        }
        if (nee.cpe) {
            hfb.lee[dsc] = (nee.cpe);
            hfb.dab[dsc] = !0
        }
        if (nee.dpe) {
            hfb.lee[esc] = (nee.dpe);
            hfb.dab[esc] = !0
        }
        if (nee.epe) {
            hfb.lee[fsc] = (nee.epe);
            hfb.dab[fsc] = !0
        }
        if (nee.fpe) {
            hfb.lee[gsc] = (nee.fpe);
            hfb.dab[gsc] = !0
        }
        if (nee.gpe) {
            hfb.lee[hsc] = (nee.gpe);
            hfb.dab[hsc] = !0
        }
        if (nee.hpe) {
            hfb.lee[isc] = (nee.hpe);
            hfb.dab[isc] = !0
        }
        if (nee.ipe) {
            hfb.lee[jsc] = (nee.ipe);
            hfb.dab[jsc] = !0
        }
        if (nee.jpe) {
            hfb.lee[ksc] = (nee.jpe);
            hfb.dab[ksc] = !0
        }
        if (nee.kpe) {
            hfb.lee[lsc] = (nee.kpe);
            hfb.dab[lsc] = !0
        }
        if (nee.lpe) {
            hfb.lee[msc] = (nee.lpe);
            hfb.dab[msc] = !0
        }
        if (nee.mpe) {
            hfb.lee[nsc] = (nee.mpe);
            hfb.dab[nsc] = !0
        }
        if (nee.npe) {
            hfb.lee[osc] = (nee.npe);
            hfb.dab[osc] = !0
        }
        if (nee.ope) {
            hfb.lee[psc] = (nee.ope);
            hfb.dab[psc] = !0
        }
        if (nee.ppe) {
            hfb.lee[qsc] = (nee.ppe);
            hfb.dab[qsc] = !0
        }
        if (nee.qpe) {
            hfb.lee[rsc] = (nee.qpe);
            hfb.dab[rsc] = !0
        }
        if (nee.rpe) {
            hfb.lee[ssc] = (nee.rpe);
            hfb.dab[ssc] = !0
        }
        if (nee.spe) {
            hfb.lee[tsc] = (nee.spe);
            hfb.dab[tsc] = !0
        }
        if (nee.tpe) {
            hfb.lee[usc] = (nee.tpe);
            hfb.dab[usc] = !0
        }
        if (nee.upe) {
            hfb.lee[itc] = (nee.upe);
            hfb.dab[itc] = !0
        }
        if (nee.vpe) {
            hfb.lee[jtc] = (nee.vpe);
            hfb.dab[jtc] = !0
        }
        if (nee.wpe) {
            hfb.lee[ktc] = (nee.wpe);
            hfb.dab[ktc] = !0
        }
        if (nee.xpe) {
            hfb.lee[ltc] = (nee.xpe);
            hfb.dab[ltc] = !0
        }
        if (nee.ype) {
            hfb.lee[mtc] = (nee.ype);
            hfb.dab[mtc] = !0
        }
        if (nee.zpe) {
            hfb.lee[ntc] = (nee.zpe);
            hfb.dab[ntc] = !0
        }
        if (nee.aqe) {
            hfb.lee[otc] = (nee.aqe);
            hfb.dab[otc] = !0
        }
        if (nee.bqe) {
            hfb.lee[ptc] = (nee.bqe);
            hfb.dab[ptc] = !0
        }
        if (nee.cqe) {
            hfb.lee[qtc] = (nee.cqe);
            hfb.dab[qtc] = !0
        }
        if (nee.dqe) {
            hfb.lee[rtc] = (nee.dqe);
            hfb.dab[rtc] = !0
        }
        if (nee.eqe) {
            hfb.lee[stc] = (nee.eqe);
            hfb.dab[stc] = !0
        }
        if (nee.fqe) {
            hfb.lee[ttc] = (nee.fqe);
            hfb.dab[ttc] = !0
        }
        if (nee.gqe) {
            hfb.lee[utc] = (nee.gqe);
            hfb.dab[utc] = !0
        }
        if (nee.hqe) {
            hfb.lee[vtc] = (nee.hqe);
            hfb.dab[vtc] = !0
        }
        if (nee.iqe) {
            hfb.lee[wtc] = (nee.iqe);
            hfb.dab[wtc] = !0
        }
        if (nee.jqe) {
            hfb.lee[xtc] = (nee.jqe);
            hfb.dab[xtc] = !0
        }
        var xh = 0;
        if (nee.kqe != undefined) {
            while (xh < nee.kqe.length) {
                var lde = parseInt(nee.kqe[xh]) + 1;
                var ked = nee.kqe[xh + 1];
                var lqe = zvc.ev(lde);
                hfb.dab[xcc] = !0;
                hfb.dab[xcc | lde] = !0;
                var mqe = new zde();
                mqe.aee = ked;
                mqe.cee = lqe;
                mqe.bee = lde;
                hfb.di[xcc | lde] = mqe;
                xh += 2
            }
        }
        xh = 0;
        if (nee.ni != undefined) {
            while (xh < nee.ni.length) {
                hfb.dab[fzb] = !0;
                var lde = parseInt(nee.ni[xh]);
                var nqe = nee.ni[xh + 1];
                var oqe = new dee();
                oqe.aee = nqe;
                oqe.pqe = !1;
                oqe.xgd = this;
                hfb.fdd[lde] = oqe;
                xh += 2
            }
        }
    }
    return hfb
}
fee.prototype.mab = function (qbd, bm, wz, fab) {
    var qqe = nab;
    var rqe = oab;
    var sqe = kab;
    var tqe = pv;
    kab = this;
    nab = qbd;
    oab = bm;
    pv = !1;
    var gzd = !0;
    switch (qbd) {
    case wfb:
        if (this.gi) this.gi(wz, fab);
        else gzd = !1;
        break;
    case xfb:
        if (this.nk) this.nk(wz, fab);
        else gzd = !1;
        break;
    case gbc:
        gzd = !1;
        break;
    case rcc:
        gzd = !1;
        break;
    case fzb:
        if (this.fdd[bm]) this.fdd[bm].aee(wz, fab);
        break;
    case scc:
        if (this.jee[qbd | bm]) this.jee[qbd | bm](wz, fab);
        else gzd = !1;
        break;
    case tcc:
        gzd = !1;
        break;
    case jyb:
        gzd = !1;
        break;
    case ucc:
        if (this.yi) this.yi(wz, fab);
        else gzd = !1;
        break;
    case vcc:
        if (this.kee[qbd | bm]) this.kee[qbd | bm](wz, fab);
        else gzd = !1;
        break;
    case wcc:
        if (this.lee[qbd | bm]) this.lee[qbd | bm](wz,
            fab);
        else gzd = !1;
        break;
    case xcc:
        if (this.di[qbd | bm]) {
            var uqe = this.di[qbd | bm];
            var mqe = uqe.cee;
            var jhb = mqe.ked(wz, fab);
            if (jhb | vwc) {
                uqe.aee(wz, fab)
            }
        }
        break;
    case zcc:
        if (this.pee) this.pee(wz, fab);
        else gzd = !1;
        break;
    case ycc:
        if (this.ki) this.ki(wz, fab);
        else gzd = !1;
        break;
    case adc:
        if (this.qee) this.qee(wz, fab);
        else gzd = !1;
        break;
    case gyb:
        if (this.vi) this.vi(wz, fab);
        else gzd = !1;
        break;
    case kyb:
        if (this.kfe) this.kfe(wz, fab);
        else gzd = !1;
        break;
    case bdc:
        if (this.lfe) this.lfe(wz, fab);
        else gzd = !1;
        break;
    case cdc:
        if (this.mfe) this.mfe(wz, fab);
        else gzd = !1;
        break;
    case ddc:
        if (this.dj) this.dj(wz, fab);
        else gzd = !1;
        break;
    case edc:
        if (this.nfe) this.nfe(wz, fab);
        else gzd = !1;
        break;
    case fdc:
        if (this.ofe) this.ofe(wz, fab);
        else gzd = !1;
        break;
    case gdc:
        if (this.pfe) this.pfe(wz, fab);
        else gzd = !1;
        break;
    case hdc:
        if (this.qfe) this.qfe(wz, fab);
        else gzd = !1;
        break;
    case idc:
        if (this.rfe) this.rfe(wz, fab);
        else gzd = !1;
        break;
    case jdc:
        if (this.sfe) this.sfe(wz, fab);
        else gzd = !1;
        break;
    case kdc:
        if (this.tfe) this.tfe(wz, fab);
        else gzd = !1;
        break;
    case ldc:
        if (this.ufe) this.ufe(wz, fab);
        else gzd = !1;
        break;
    case cec:
        if (this.lge) this.lge(wz, fab);
        else gzd = !1;
        break;
    case dec:
        if (this.mge) this.mge(wz, fab);
        else gzd = !1;
        break;
    case mdc:
        if (this.vfe) this.vfe(wz, fab);
        else gzd = !1;
        break;
    case ndc:
        if (this.wfe) this.wfe(wz, fab);
        else gzd = !1;
        break;
    case odc:
        if (this.xfe) this.xfe(wz, fab);
        else gzd = !1;
        break;
    case pdc:
        if (this.yfe) this.yfe(wz, fab);
        else gzd = !1;
        break;
    case qdc:
        if (this.zfe) this.zfe(wz, fab);
        else gzd = !1;
        break;
    case rdc:
        if (this.age) this.age(wz, fab);
        else gzd = !1;
        break;
    case sdc:
        if (this.bge) this.bge(wz, fab);
        else gzd = !1;
        break;
    case tdc:
        if (this.cge) this.cge(wz,
            fab);
        else gzd = !1;
        break;
    case udc:
        if (this.dge) this.dge(wz, fab);
        else gzd = !1;
        break;
    case vdc:
        if (this.ege) this.ege(wz, fab);
        else gzd = !1;
        break;
    case wdc:
        if (this.fge) this.fge(wz, fab);
        else gzd = !1;
        break;
    case xdc:
        if (this.gge) this.gge(wz, fab);
        else gzd = !1;
        break;
    case ydc:
        if (this.hge) this.hge(wz, fab);
        else gzd = !1;
        break;
    case zdc:
        if (this.ige) this.ige(wz, fab);
        else gzd = !1;
        break;
    case aec:
        if (this.jge) this.jge(wz, fab);
        else gzd = !1;
        break;
    case bec:
        if (this.kge) this.kge(wz, fab);
        else gzd = !1;
        break;
    case eac:
        if (this.ree) this.ree(wz, fab);
        else gzd = !1;
        break;
    case vzb:
        if (this.see) this.see(wz, fab);
        else gzd = !1;
        break;
    case xzb:
        if (this.tee) this.tee(wz, fab);
        else gzd = !1;
        break;
    case wzb:
        if (this.uee) this.uee(wz, fab);
        else gzd = !1;
        break;
    case yzb:
        if (this.ti) this.ti(wz, fab);
        else gzd = !1;
        break;
    case aac:
        if (this.vee) this.vee(wz, fab);
        else gzd = !1;
        break;
    case zzb:
        if (this.wee) this.wee(wz, fab);
        else gzd = !1;
        break;
    case bac:
        if (this.xee) this.xee(wz, fab);
        else gzd = !1;
        break;
    case dac:
        if (this.yee) this.yee(wz, fab);
        else gzd = !1;
        break;
    case cac:
        if (this.zee) this.zee(wz, fab);
        else gzd = !1;
        break;
    case qac:
        if (this.bj) this.bj(wz,
            fab);
        else gzd = !1;
        break;
    case eec:
        if (this.afe) this.afe(wz, fab);
        else gzd = !1;
        break;
    case fec:
        if (this.bfe) this.bfe(wz, fab);
        else gzd = !1;
        break;
    case rac:
        if (this.cfe) this.cfe(wz, fab);
        else gzd = !1;
        break;
    case gec:
        if (this.dfe) this.dfe(wz, fab);
        else gzd = !1;
        break;
    case hec:
        if (this.efe) this.efe(wz, fab);
        else gzd = !1;
        break;
    case sac:
        if (this.ffe) this.ffe(wz, fab);
        else gzd = !1;
        break;
    case iec:
        if (this.gfe) this.gfe(wz, fab);
        else gzd = !1;
        break;
    case jec:
        if (this.hfe) this.hfe(wz, fab);
        else gzd = !1;
        break;
    case fac:
        if (this.ife) this.ife(wz, fab);
        else gzd = !1;
        break;
    case gac:
        if (this.jfe) this.jfe(wz, fab);
        else gzd = !1;
        break;
    case kec:
        if (this.iee[0] != null) this.iee[0](wz, fab);
        else gzd = !1;
        break;
    case lec:
        if (this.iee[1] != null) this.iee[1](wz, fab);
        else gzd = !1;
        break;
    case mec:
        if (this.iee[2] != null) this.iee[2](wz, fab);
        else gzd = !1;
        break;
    case nec:
        if (this.iee[3] != null) this.iee[3](wz, fab);
        else gzd = !1;
        break;
    case oec:
        if (this.iee[4] != null) this.iee[4](wz, fab);
        else gzd = !1;
        break;
    case pec:
        if (this.iee[5] != null) this.iee[5](wz, fab);
        else gzd = !1;
        break;
    case qec:
        if (this.iee[6] != null) this.iee[6](wz,
            fab);
        else gzd = !1;
        break;
    case rec:
        if (this.iee[7] != null) this.iee[7](wz, fab);
        else gzd = !1;
        break;
    case sec:
        if (this.iee[8] != null) this.iee[8](wz, fab);
        else gzd = !1;
        break;
    case tec:
        if (this.iee[9] != null) this.iee[9](wz, fab);
        else gzd = !1;
        break;
    case uec:
        if (this.iee[10] != null) this.iee[10](wz, fab);
        else gzd = !1;
        break;
    case vec:
        if (this.iee[11] != null) this.iee[11](wz, fab);
        else gzd = !1;
        break;
    default:
        gzd = !1
    }
    pv = tqe;
    nab = qqe;
    oab = rqe;
    kab = sqe;
    return gzd
};
fee.prototype.uwd = function (rfb) {
    this.hac.zu(rfb);
    var hfb = this;
    while (hfb != null) {
        hfb.az.zu(rfb);
        hfb = hfb.hab
    }
};
fee.prototype.twd = function (rfb) {
    this.hac.kgd(rfb);
    var vqe = this;
    while (vqe != null) {
        vqe.az.kgd(rfb);
        vqe = vqe.hab
    }
};
fee.prototype.wqe = function (qbd, cob) {
    if (!this.dab[qbd | cob]) return;
    var cgb = this.hac.cgb;
    for (var xh = 0; xh < cgb.length; xh++) {
        var jfb = cgb[xh];
        this.mab(qbd, cob, jfb, jfb)
    }
};

function dbd() {
    this.xqe = [];
    this.yqe = [];
    this.length = 0
}
dbd.prototype.jjb = function () {
    return this.yqe
};
dbd.prototype.zu = function (zqe) {
    this.length++;
    this.xqe[zqe.rcd] = zqe;
    this.yqe[zqe.ddd] = zqe
};
dbd.prototype.ev = function (mee) {
    return this.yqe[mee]
};
dbd.prototype.qgb = function (bv) {
    if (!this.yqe[bv]) return !1;
    else return !0
};
dbd.prototype.hhd = function (qbd, cob) {
    for (var tfb in zy.yqe) {
        var hfb = zy.yqe[tfb];
        if (hfb.dab[qbd | cob]) {
            hfb.wqe(qbd | cob)
        }
    }
};
dbd.prototype.rdd = function () {
    var cgb = this.yqe;
    for (var bm in cgb) {
        var hfb = cgb[bm];
        hfb.hab = zy.ev(hfb.lab);
        if (!hfb.hab) hfb.hab = null;
        for (var rub in hfb.dab) {
            var qae = hfb.dab[rub];
            if (qae) {
                hfb.fyb[rub] = !0
            }
        }
    }
    for (var bm in cgb) {
        var are = cgb[bm];
        var hfb = are.hab;
        while (hfb != null) {
            for (var rub in hfb.dab) {
                var qae = hfb.dab[rub];
                if (qae) {
                    are.fyb[rub] = !0
                }
            }
            hfb = hfb.hab
        }
    }
};

function sr(mee) {
    if (mee == cib) {
        return ufb.jjb().slice(0)
    }
    var hfb = zy.ev(mee);
    if (hfb != null) {
        return hfb.az.cgb.slice(0)
    }
    var jfb = pac.ev(mee);
    if (jfb != null) {
        var ru = [];
        ru[0] = jfb;
        return ru
    }
    return null
}

function bre() {
    this.cgb = [];
    this.length = 0;
    this.mfb = 0;
    this.cre = -1;
}
bre.prototype.ev = function (cob) {
    return this.cgb[cob]
};
bre.prototype.zu = function (hgd) {
    for (var xh = 0; xh < this.cgb.length; xh++) {
        if (hgd.vk < this.cgb[xh].vk) {
            this.cgb.splice(xh, 0, hgd);
            this.mfb++;
            this.length = this.cgb.length;
            return xh
        }
    }
    this.cgb[this.cgb.length] = hgd;
    this.mfb++;
    this.length = this.cgb.length;
    return this.length - 1
};
bre.prototype.dre = function (hgd) {
    if (this.cre < 0) {
        this.cre = this.cgb.length
    }
    this.cgb[this.cgb.length] = hgd;
    this.mfb++;
    this.length = this.cgb.length;
    return this.length - 1
};
bre.prototype.xde = function (hgd) {
    var xh = this.cre;
    if (xh < 0) return;
    var dv = [];
    while (xh < this.cgb.length) {
        dv[dv.length] = this.cgb[xh];
        xh++
    }
    this.cgb.splice(this.cre, this.cgb.length - this.cre);
    for (xh = 0; xh < dv.length; xh++) {
        this.zu(dv[xh])
    }
    this.cre = -1
};
bre.prototype.ivb = function (hgd) {
    for (var xh = 0; xh < this.cgb.length; xh++) {
        if (hgd == this.cgb[xh]) {
            this.cgb.splice(xh, 1);
            this.mfb--;
            this.length = this.cgb.length;
            return !0
        }
    }
    return !1
};
bre.prototype.ajb = function () {
    this.cgb = [];
    this.length = this.mfb = 0
};
bre.prototype.ev = function (cob) {
    return this.cgb[cob]
};
bre.prototype.su = function (tu) {
    this.cgb = tu.cgb.slice();
    this.length = tu.length;
    this.mfb = tu.mfb;
    this.cre = tu.cre
};
var ere = 0,
    fre = 1,
    gre = 2,
    vxb = 3,
    pxb = 4,
    hre = 5,
    hxb = 6,
    ire = 7,
    kxb = 8,
    rxb = 9,
    exb = 10,
    jre = 11,
    kre = 12,
    zxb = 13,
    lre = 14,
    mre = 0,
    nre = 1,
    ore = 2,
    pre = 3,
    qre = 4,
    rre = 5,
    sre = 0,
    tre = 1,
    ure = 2,
    vre = 0,
    wre = 1,
    xre = 2,
    yre = 3;

function zre() {
    this.wld = ase;
    this.ajb = ase;
    this.wld()
}

function ase() {
    this.bse = !0;
    this.cse = -1;
    this.dse = !0;
    this.ese = !1;
    this.fse = !1;
    this.gse = ere;
    this.hse = 1.0;
    this.ise = 1.0;
    this.jse = 0.0;
    this.kse = 0.0;
    this.vhd = 1.0;
    this.whd = 1.0;
    this.lse = 100;
    this.mse = 100;
    this.nse = 0;
    this.ose = 0;
    this.pse = 0;
    this.qse = 0;
    this.rse = 0.0;
    this.sse = 0.0;
    this.tse = 0.0;
    this.use = 0.0;
    this.vse = 0.0;
    this.wse = 0.0;
    this.xse = 0.0;
    this.yse = 0.0;
    this.zse = 0.0;
    this.ate = 0.0;
    this.bte = 0.0;
    this.cte = 0.0;
    this.dte = 0.0;
    this.ete = 0.0;
    this.fte = 270.0;
    this.gte = mre;
    this.hte = [];
    this.hte[0] = vuc;
    this.hte[1] = vuc;
    this.hte[2] = vuc;
    this.ite = 1.0;
    this.jte = 1.0;
    this.kte = 1.0;
    this.lte = !1;
}

function mte() {
    this.ajb = nte;
    this.wld = nte;
    this.wld()
}

function nte() {
    this.bse = !0;
    this.ote = 0;
    this.pte = 0;
    this.txd = 0.0;
    this.uxd = 0.0;
    this.vxd = 0.0;
    this.wxd = 0.0;
    this.gse = vre;
    this.qte = sre
}

function rte() {
    this.ste;
    this.pte;
    this.tte;
    this.ute;
    this.ah;
    this.bh;
    this.ch;
    this.vte;
    this.kpd;
    this.wte;
    this.thd;
    this.mh;
    this.xte;
    this.yte
};

function zte() {
    this.ajb = aue;
    this.wld = aue;
    this.wld()
}

function aue() {
    this.bse = !1;
    this.bue = [];
    this.cue = [];
    this.due = !1;
    this.vk = 0.0;
    this.eue = 0.0;
    this.fue = 0.0;
    this.gue = !0;
    this.hue = !0
};

function mxb(dhb) {
    var qz = chb();
    return qz * dhb
}

function iue(jue, kue, lue) {
    var mue = kue - jue;
    if (mue <= 0) return jue;
    var leb = 0.0;
    var pbb = 0.0;
    switch (lue) {
    case sre:
        pbb = jue + mxb(1) * mue;
        break;
    case tre:
        {
            do {
                leb = (mxb(1) - 0.5) * 6.0
            } while (!(exp(-(leb * leb) * 0.5) > mxb(1)));
            pbb = jue + ((leb + 3.0) * (1.0 / 6.0)) * mue
        }
        break;
    case ure:
        {
            do {
                leb = (mxb(1) - 0.5) * 6.0
            } while (!(exp(-(leb * leb) * 0.5) > mxb(1)));
            if (leb < 0.0) leb += 6.0;
            pbb = jue + (leb * (1.0 / 6.0)) * mue
        }
        break;
    default:
        pbb = jue + mxb(1) * mue
    }
    return pbb
}

function nue(nu, dhb) {
    var vte;
    if (nu == 0) {
        if (dhb > 0) {
            vte = 270
        } else if (dhb < 0) {
            vte = 90
        } else {
            vte = 0
        }
    } else {
        var keb = 180.0 * (Math.atan2(dhb, nu)) / Math.PI;
        if (keb <= 0) {
            vte = -keb
        } else {
            vte = 360.0 - keb
        }
    }
    return vte - 360.0 * Math.floor(vte / 360.0)
}

function oue(fxd, pue) {
    return pue * Math.cos(fxd * Math.PI / 180.0)
}

function que(fxd, pue) {
    return -pue * Math.sin(fxd * Math.PI / 180.0)
}

function rue(sue) {
    tue = ivc[sue.pte]; {
        if (sue.tte <= 0 || sue.ute <= 0) {
            switch (tue.gte) {
            case mre:
                sue.wte = tue.hte[0];
                break;
            case nre:
                sue.wte = tue.hte[0];
                break;
            case ore:
                sue.wte = tue.hte[0];
                break;
            case pre:
                {
                    var qz = ~~ (iue(tue.hte[0], tue.hte[1], sre));
                    var rz = ~~ (iue(tue.hte[2], tue.hte[3], sre));
                    var sz = ~~ (iue(tue.hte[4], tue.hte[5], sre));
                    sue.wte = (qz << 16) + (tz.rz << 8) + tz.sz
                }
                break;
            case qre:
                {
                    var ai = ~~ (iue(tue.hte[0], tue.hte[1], sre));
                    var rx = ~~ (iue(tue.hte[2], tue.hte[3], sre));
                    var mzb = ~~ (iue(tue.hte[4], tue.hte[5], sre));
                    sue.wte = 0xffffff
                }
                break;
            case rre:
                sue.wte = zab(uz(tue.hte[0], tue.hte[1], mxb(1)));
                break
            }
        } else {
            switch (tue.gte) {
            case nre:
                {
                    var uue = sue.tte / sue.ute;
                    if (uue > 1) uue = 1;
                    sue.wte = uz((tue.hte[0]), (tue.hte[1]), uue)
                }
                break;
            case ore:
                {
                    var uue = 2.0 * sue.tte / sue.ute;
                    if (uue > 2) uue = 2;
                    if (uue < 1) {
                        sue.wte = uz(tue.hte[0], tue.hte[1], uue)
                    } else {
                        sue.wte = uz(tue.hte[1], tue.hte[2], uue - 1)
                    }
                }
                break
            }
        }
    }
}

function vue(ay, by, wue) {
    var pbb = new rte;
    xue = ivc[wue];
    if (xue == null || xue == undefined) return null;
    pbb.ste = !0;
    pbb.pte = wue;
    pbb.ah = ay;
    pbb.bh = by;
    pbb.ch = iue(xue.rse, xue.sse, 0);
    pbb.vte = iue(xue.vse, xue.wse, 0);
    pbb.kpd = iue(xue.zse, xue.ate, 0);
    pbb.ute = iue(xue.lse, xue.mse, 0);
    pbb.tte = 0;
    pbb.wte = 0xffffff;
    rue(pbb);
    pbb.thd = xue.ite;
    pbb.mh = iue(xue.hse,
        xue.ise, 0);
    if (xue.fse) {
        pbb.xte = mxb(10000)
    } else {
        pbb.xte = 0
    }
    pbb.yte = mxb(100000);
    return pbb
}

function xkb() {
    var kac = ivc.length;
    ivc[kac] = new zre();
    return kac
}

function zkb(rjb) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return !1;
    ivc[rjb] = null;
    return !0
}

function dlb(rjb) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return !1;
    ivc[rjb].ajb();
    return !0
}

function blb(rjb) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return !1;
    return !0
}

function flb(rjb, zue) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gse = zue;
    yue.cse = -1
}

function hlb(rjb, ctb, ave, bve, cve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.cse = ctb;
    yue.dse = ave;
    yue.ese = bve;
    yue.fse = cve
}

function jlb(rjb, dve, eve, fve, gve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.hse = dve;
    yue.ise = eve;
    yue.jse = fve;
    yue.kse = gve
}

function llb(rjb, dy, ey) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.vhd = dy;
    yue.whd = ey
}

function fmb(rjb, hve, ive) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.lse = hve;
    yue.mse = ive
}

function hmb(rjb, jve, kve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.ose = jve;
    yue.nse = kve
}

function jmb(rjb, lve, mve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.qse = lve;
    yue.pse = mve
}

function nmb(rjb, nve, ove, pve, qve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.rse = nve;
    yue.sse = ove;
    yue.tse = pve;
    yue.use = qve
}

function pmb(rjb, rve, sve, tve, uve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.vse = rve;
    yue.wse = sve;
    yue.xse = tve;
    yue.yse = uve
}

function lmb(rjb, vve, wve, xve, yve, zve) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.zse = vve;
    yue.ate = wve;
    yue.bte = xve;
    yue.cte = yve;
    yue.dte = zve
}

function rmb(rjb, awe, bwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.ete = awe;
    yue.fte = bwe
}

function vlb(rjb, cwe, dwe, ewe, fwe, gwe, hwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = pre;
    yue.hte[0] = cwe;
    yue.hte[1] = dwe;
    yue.hte[2] = ewe;
    yue.hte[3] = fwe;
    yue.hte[4] = gwe;
    yue.hte[5] = hwe
}

function tlb(rjb, gz, hz) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = rre;
    yue.hte[0] = zab(gz);
    yue.hte[1] = zab(hz)
}

function xlb(rjb, iwe,
    jwe, kwe, lwe, mwe, nwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = qre;
    yue.hte[0] = iwe;
    yue.hte[1] = jwe;
    yue.hte[2] = kwe;
    yue.hte[3] = lwe;
    yue.hte[4] = mwe;
    yue.hte[5] = nwe
}

function nlb(rjb, owe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = mre;
    yue.hte[0] = zab(owe)
}

function plb(rjb, owe, pwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = nre;
    yue.hte[0] = zab(owe);
    yue.hte[1] = zab(pwe)
}

function rlb(rjb, owe, qwe, pwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.gte = mre;
    yue.hte[0] = zab(owe);
    yue.hte[1] = zab(qwe);
    yue.hte[2] = zab(pwe)
}

function zlb(rjb, rwe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.ite = rwe;
    yue.jte = rwe;
    yue.kte = rwe
}

function bmb(rjb, rwe, swe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.ite = rwe;
    yue.jte = (rwe + swe) / 2.0;
    yue.kte = swe
}

function dmb(rjb, rwe, twe, swe) {
    var yue = ivc[rjb];
    if (yue == null || yue == undefined) return;
    yue.ite = rwe;
    yue.jte = twe;
    yue.kte = swe
}

function tmb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return -1;
    var kac = uwe.cue.length;
    uwe.cue[kac] = new mte();
    return kac
}

function vmb(dxb, rjb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return !1;
    uwe.cue[rjb] = null;
    return !0;
}

function xmb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    uwe.cue = [];
    return !0
}

function zmb(dxb, rjb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return !1;
    return !0
}

function bnb(dxb, rjb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return !1;
    vwe.wld()
}

function dnb(dxb, rjb, wwe, xwe, ywe, zwe, zue, axe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return;
    vwe.txd = wwe;
    vwe.uxd = xwe;
    vwe.vxd = ywe;
    vwe.wxd = zwe;
    vwe.gse = zue;
    vwe.qte = axe
}

function fnb(dxb, rjb, bxe, cxe) {
    if (cxe < 0) {
        var chb = mxb(-cxe) | 0;
        if (chb == 0) {
            cxe = 1
        } else {
            return
        }
    }
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return;
    for (var xh = 0; xh <= cxe - 1; xh++) {
        var leb, meb;
        var dxe = !1;
        while (dxe == !1) {
            leb = iue(0.0, 1.0, vwe.qte);
            meb = iue(0.0, 1.0, vwe.qte);
            if ((vwe.qte == ure) && (vwe.gse != yre)) {
                if (mxb() < 0.5) {
                    leb = iue(0.0, 1.0, 0)
                } else {
                    meb = iue(0.0, 1.0, 0)
                }
            }
            switch (vwe.gse) {
            case vre:
                dxe = !0;
                break;
            case wre:
                if ((ahb(leb - 0.5) + ahb(meb - 0.5)) <= ahb(0.5)) dxe = !0;
                break;
            case xre:
                if ((Math.abs(leb - 0.5) + Math.abs(meb - 0.5)) <= 0.5) dxe = !0;
                break;
            case yre:
                dxe = !0;
                break;
            default:
                dxe = !0;
                break
            }
        }
        if (vwe.gse == yre) {
            pkb(dxb, vwe.txd + (vwe.uxd - vwe.txd) * leb, vwe.vxd + (vwe.wxd - vwe.vxd) * leb, bxe, 1)
        } else {
            pkb(dxb, vwe.txd + (vwe.uxd - vwe.txd) * leb, vwe.vxd + (vwe.wxd - vwe.vxd) * meb, bxe, 1)
        }
    }
}

function hnb(dxb, rjb, bxe, cxe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var vwe = uwe.cue[rjb];
    if (vwe == null || vwe == undefined) return;
    vwe.ote = cxe;
    vwe.pte = bxe
}

function pkb(dxb, ay, by, wue, cxe) {
    cxe = ~~cxe;
    wue = ~~wue;
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var xue = ivc[wue];
    if (xue == null || xue == undefined) return !1;
    for (var xh = 0; xh < cxe; xh++) {
        var bm = uwe.bue.length;
        uwe.bue[bm] = vue(ay, by, wue)
    }
}

function rkb(dxb, ay, by, wue, sab, cxe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var xue = ivc[wue];
    if (xue == null || xue == undefined) return !1;
    for (var xh = 1; xh <= cxe; xh++) {
        var bm = uwe.bue.length;
        uwe.bue[bm] = vue(ay, by, wue);
        uwe.bue[bm].wte = zab(sab);
    }
}

function tkb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    uwe.bue = [];
    return !0
}

function vkb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return 0;
    return uwe.bue.mfb
}

function tjb() {
    var bm = jvc.length;
    jvc[bm] = new zte();
    jvc[bm].ajb();
    return bm
}

function xjb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return !1;
    return !0
}

function vjb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    jvc[dxb] = null;
    return !0
}

function zjb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.ajb()
}

function exe() {
    for (var cyb in jvc) {
        var uwe = jvc[cyb];
        if (uwe) {
            uwe.bue = []
        }
    }
}

function bkb(dxb, fxe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.due = fxe
}

function dkb(dxb, owd) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.vk = owd
}

function fkb(dxb, ay, by) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.eue = ay;
    uwe.fue = by
}

function hkb(dxb, gxe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.gue = gxe;
}

function jkb(dxb, gxe) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    uwe.hue = gxe
}

function hxe(dxb) {
    var xh = 0;
    var wob = 0;
    var kac = 0;
    var uwe = jvc[dxb];
    var ixe = uwe.bue;
    xh = 0;
    while (xh < ixe.length) {
        var jxe = ixe[xh];
        var xue = ivc[jxe.pte];
        jxe.tte++;
        if (jxe.tte >= jxe.ute) {
            wob = xue.qse;
            if (wob < 0) {
                if (mxb(-wob) == 0) wob = 1
            }
            if (wob > 0) {
                pkb(dxb, jxe.ah, jxe.bh, xue.pse, wob)
            }
            ixe.splice(xh, 1)
        } else {
            wob = xue.ose;
            if (wob < 0) {
                if (mxb(-wob) == 0) wob = 1
            }
            if (wob > 0) {
                pkb(dxb, jxe.ah, jxe.bh, xue.nse, wob)
            }
            xh++
        }
    }
}

function kxe(dxb) {
    var xh = 0;
    var whb = 0;
    var pm = 0.0;
    var qm = 0.0;
    var lxe = 0.0;
    var efd = 0.0;
    var mxe = 0.0;
    var nxe = 0.0;
    var oxe = 0.0;
    var pxe = 0.0;
    var qxe = 0.0;
    var rxe = 0.0;
    var sxe = 0.0;
    var uwe = jvc[dxb];
    var ixe = uwe.bue;
    for (xh = 0; xh < ixe.length; xh++) {
        var jxe = ixe[xh];
        var xue = ivc[jxe.pte];
        jxe.ch = jxe.ch + xue.tse;
        if (jxe.ch < 0) jxe.ch = 0;
        jxe.vte = jxe.vte + xue.xse;
        jxe.kpd = jxe.kpd + xue.bte;
        pxe = 0;
        qxe = 0;
        if ((xue.ete != 0) || (uwe.txe > 0)) {
            pm = oue(jxe.vte, jxe.ch);
            qm = que(jxe.vte, jxe.ch);
            if (xue.ete != 0) {
                lxe = oue(xue.fte,
                    xue.ete);
                efd = que(xue.fte, xue.ete);
                pm = pm + lxe;
                qm = qm + efd;
            }
            jxe.vte = nue(pm, qm);
            jxe.ch = Math.sqrt(pm * pm + qm * qm)
        }
        rxe = ((jxe.tte + 3 * jxe.yte) % 24) / 6.0;
        if (rxe > 2.0) rxe = 4.0 - rxe;
        rxe = rxe - 1.0;
        sxe = ((jxe.tte + 4 * jxe.yte) % 20) / 5.0;
        if (sxe > 2.0) {
            sxe = 4.0 - sxe
        }
        sxe = sxe - 1.0;
        pm = oue(jxe.vte + rxe * xue.yse, jxe.ch + sxe * xue.use);
        qm = que(jxe.vte + rxe * xue.yse, jxe.ch + sxe * xue.use);
        jxe.ah = jxe.ah + pm + pxe;
        jxe.bh = jxe.bh + qm + qxe
    }
}

function uxe(dxb) {
    var uwe = jvc[dxb];
    var ixe = uwe.bue;
    for (var xh = 0; xh < ixe.length; xh++) {
        var jxe = ixe[xh];
        var xue = ivc[jxe.pte];
        jxe.mh = jxe.mh + xue.jse;
        if (jxe.mh < 0) {
            jxe.mh = 0
        }
        rue(jxe);
        var vxe;
        if (jxe.ute > 0) {
            vxe = 2.0 * jxe.tte / jxe.ute
        } else {
            vxe = 1
        } if (vxe < 1) {
            jxe.thd = xue.ite * (1 - vxe) + xue.jte * vxe
        } else {
            jxe.thd = xue.jte * (2 - vxe) + xue.kte * (vxe - 1)
        }
    }
}

function lkb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return 0;
    hxe(dxb);
    kxe(dxb);
    uxe(dxb);
    var wxe = uwe.cue;
    for (var xh = 0; xh < wxe.length; xh++) {
        if (wxe[xh].ote != 0) {
            fnb(dxb, xh, wxe[xh].pte, wxe[xh].ote)
        }
    }
}

function xxe() {
    for (var xh = 0; xh < jvc.length; xh++) {
        var uwe = jvc[xh];
        if (uwe != null) {
            if (uwe.gue) {
                lkb(xh)
            }
        }
    }
}

function yxe(sue, tnb, unb) {
    var qxd = null;
    var osd = null;
    if (sue.ute <= 0) return;
    var xue = ivc[sue.pte];
    qxd = ogb.ev(xue.cse);
    if (qxd == null) {
        var gse = xue.gse;
        if ((gse >= 0) && (gse < lre)) {
            osd = hvc[gse]
        } else {
            return
        }
    }
    var ggd;
    if (osd != null) {} else {
        if (qxd.nwd <= 0) return;
        if (!xue.dse) {
            ggd = sue.xte
        } else if (xue.ese) {
            ggd = sue.xte + (qxd.wob * sue.tte / sue.ute)
        } else {
            ggd = sue.xte + sue.tte
        }
    }
    var qz = ((sue.tte + 2 * sue.yte) % 16) / 4.0;
    if (qz > 2.0) qz = 4.0 - qz;
    qz = qz - 1.0;
    var zxe = sue.kpd;
    if (xue.dte) zxe = zxe + sue.vte;
    zxe = zxe + qz * xue.cte;
    qz = ((sue.tte + sue.yte) % 16) / 4.0;
    if (qz > 2.0) qz = 4.0 - qz;
    qz = qz - 1.0;
    var rx = sue.mh + qz * xue.kse;
    var yh = sue.wte;
    if (osd != null) {
        var vhd, whd, kpd;
        var pod = xue.vhd * rx;
        var qod = xue.whd * rx;
        var aye = zxe;
        var bye = ~~ (sue.ah + tnb);
        var cye = ~~ (sue.bh + unb);
        if (pod == 1 && qod == 1 && aye == 0 && sue.wte == 0xffffff) {
            ypd(osd, sue.thd)
        } else {
            pqd(osd, 0, 0, bye, cye, pod, qod, aye * 0.017453293, yh, yh, yh, yh, sue.thd)
        }
    } else {
        qxd.dye(ggd, sue.ah + tnb, sue.bh + unb, ivc[sue.pte].vhd * rx, ivc[sue.pte].whd * rx, zxe, yh, sue.thd)
    }
}

function nkb(dxb) {
    var uwe = jvc[dxb];
    if (uwe == null || uwe == undefined) return;
    var ixe = uwe.bue;
    if (uwe.due) {
        for (var xh = 0; xh < uwe.bue.length; xh++) {
            yxe(ixe[xh], uwe.eue, uwe.fue)
        }
    } else {
        for (var xh = uwe.bue.length - 1; xh >= 0; xh--) {
            yxe(ixe[xh], uwe.eue, uwe.fue)
        }
    }
}

function eye(fye) {
    for (var xh = 0; xh < jvc.length; xh++) {
        var uwe = jvc[xh];
        if (uwe != null) {
            if (uwe.hue) {
                if (Math.abs(uwe.vk - fye) < 0.01) nkb(xh)
            }
        }
    }
}

function gye() {
    var pbb = -1000000000;
    for (var xh = 0; xh < jvc.length; xh++) {
        var uwe = jvc[xh];
        if (uwe != null && uwe.bue.length > 0) {
            if (uwe.hue) {
                if (uwe.vk > pbb) pbb = uwe.vk
            }
        }
    }
    return pbb
}

function hye(fye) {
    var pbb = -1000000000;
    for (var xh = 0; xh < jvc.length; xh++) {
        var uwe = jvc[xh];
        if (uwe != null && uwe.bue.length > 0) {
            if (uwe.hue) {
                if ((uwe.vk > pbb) && (uwe.vk < fye)) pbb = uwe.vk;
            }
        }
    }
    return pbb
}
var iye = 0,
    jye = 1;
var kye = 0;

function lye(ay, by, mjb) {
    this.ah = ay;
    this.bh = by;
    this.ch = mjb;
    this.vu = 0
}

function mye() {
    this.name = "";
    this.hm = kye++;
    this.eg = 0;
    this.xg = 0;
    this.yg = 0;
    this.ajb()
}
mye.prototype.ajb = function () {
    this.zg = [];
    this.nye = [];
    this.mfb = 0;
    this.oye = 0;
    this.length = 0
};
mye.prototype.pye = function () {
    var xh = 0;
    this.length = 0;
    if (this.oye <= 0) return;
    this.nye[0].vu = 0;
    for (xh = 1; xh < this.oye; xh++) {
        this.nye[xh].vu = this.length = this.length + sqrt(ahb(this.nye[xh].ah - this.nye[xh - 1].ah) + ahb(this.nye[xh].bh - this.nye[xh - 1].bh))
    }
};
mye.prototype.qye = function (nvd, ovd, rye) {
    with(this) {
        this.oye++;
        if (this.oye > this.nye.length) {}
        var sye = new lye();
        this.nye[oye - 1] = sye;
        sye.ah = nvd;
        sye.bh = ovd;
        sye.ch = rye
    }
};
mye.prototype.tye = function () {
    this.oye = 0;
    if (this.mfb <= 0) return;
    for (var xh = 0; xh < this.mfb; xh++) {
        this.qye(this.zg[xh].ah, this.zg[xh].bh, this.zg[xh].ch)
    }
    if (this.xg) {
        this.qye(this.zg[0].ah, this.zg[0].bh, this.zg[0].ch)
    }
};
mye.prototype.uye = function (owd, acb, bcb, vye, ccb, dcb, wye, edb, fdb, xye) {
    if (owd == 0) return;
    var lqb = (acb + ccb + ccb + edb) / 4.0;
    var nqb = (bcb + dcb + dcb + fdb) / 4.0;
    var yye = (vye + wye + wye + xye) / 4.0;
    if (ahb(ccb - acb) + ahb(dcb - bcb) > 16.0) {
        this.uye(owd - 1, acb, bcb, vye, (ccb + acb) / 2.0, (dcb + bcb) / 2.0, (wye + vye) / 2.0, lqb, nqb, yye)
    }
    this.qye(lqb, nqb, yye);
    if (ahb(ccb - edb) + ahb(dcb - fdb) > 16.0) {
        this.uye(owd - 1, lqb, nqb, yye, (edb + ccb) / 2.0, (fdb + dcb) / 2.0, (xye + wye) / 2.0, edb, fdb, xye)
    }
};
mye.prototype.zye = function () {
    var xh = 0;
    var ggd = 0;
    this.oye = 0;
    if (this.mfb <= 0) return;
    if (!this.xg) {
        this.qye(this.zg[0].ah, this.zg[0].bh, this.zg[0].ch)
    }
    if (this.xg) {
        ggd = this.mfb - 1
    } else {
        ggd = this.mfb - 3
    }
    for (xh = 0; xh <= ggd; xh++) {
        var aze = this.zg[xh % this.mfb];
        var bze = this.zg[(xh + 1) % this.mfb];
        var cze = this.zg[(xh + 2) % this.mfb];
        this.uye(this.yg, (aze.ah + bze.ah) / 2.0, (aze.bh + bze.bh) / 2.0, (aze.ch + bze.ch) / 2.0, bze.ah, bze.bh, bze.ch, (bze.ah + cze.ah) / 2.0, (bze.bh + cze.bh) / 2.0, (bze.ch + cze.ch) / 2.0)
    }
    if (!this.xg) {
        this.qye(this.zg[this.mfb - 1].ah, this.zg[this.mfb - 1].bh, this.zg[this.mfb - 1].ch)
    } else {
        this.qye(this.nye[0].ah, this.nye[0].bh, this.nye[0].ch)
    }
};
mye.prototype.dze = function () {
    if (this.eg == 1) {
        this.zye()
    } else {
        this.tye()
    }
    this.pye()
};

function hed(lhd) {
    var jnb = new mye();
    if ((lhd != undefined) && (lhd != null)) {
        if (lhd.yg != undefined) {
            jnb.yg = lhd.yg
        }
        if (lhd.xg != undefined) {
            jnb.xg = lhd.xg;
        }
        if (lhd.eg != undefined) {
            jnb.eg = lhd.eg
        }
        if (lhd.dg != undefined) {
            jnb.name = lhd.dg
        }
        if (lhd.zg != undefined) {
            jnb.mfb = lhd.zg.length
        }
        for (var ucd in lhd.zg) {
            var eze = lhd.zg[ucd];
            var fze = new lye(eze.ah, eze.bh, eze.ch);
            jnb.zg[jnb.zg.length] = fze
        }
        jnb.dze()
    }
    return jnb
}
var gze = new lye(0, 0, 100);
mye.prototype.ynb = function (rjb) {
    var hze = 0;
    if (this.oye <= 0) {
        gze.ah = 0;
        gze.bh = 0;
        gze.ch = 0;
        return gze
    }
    if ((this.oye == 1) || (this.length == 0) || (rjb <= 0)) {
        return this.nye[0]
    }
    if (rjb >= 1) {
        return this.nye[this.oye - 1]
    }
    var vu = this.length * rjb;
    hze = 0;
    while ((hze < this.oye - 2) && (vu >= this.nye[hze + 1].vu)) {
        hze++
    }
    var syd = this.nye[hze];
    vu = vu - syd.vu;
    var zh = this.nye[hze + 1].vu - syd.vu;
    if (zh != 0) {
        hze++;
        gze.ah = syd.ah + vu * (this.nye[hze].ah - syd.ah) / zh;
        gze.bh = syd.bh + vu * (this.nye[hze].bh - syd.bh) / zh;
        gze.ch = syd.ch + vu * (this.nye[hze].ch - syd.ch) / zh;
        syd = gze
    }
    return syd
};
mye.prototype.lnb = function (rjb) {
    ucd = this.ynb(rjb);
    return ucd.ah
};
mye.prototype.pyd = function (rjb) {
    ucd = this.ynb(rjb);
    return ucd.bh
};
mye.prototype.ize = function (tnb, unb) {
    for (var xh = 0; xh <= this.mfb - 1; xh++) {
        this.zg[xh].ah += tnb;
        this.zg[xh].bh += unb
    }
    this.dze()
};
mye.prototype.jze = function () {
    var txd = 100000000;
    var uxd = -100000000;
    var vxd = 100000000;
    var wxd = -100000000;
    for (var xh = 0; xh <= this.mfb - 1; xh++) {
        if (this.zg[xh].ah < txd) txd = this.zg[xh].ah;
        if (this.zg[xh].ah > uxd) uxd = this.zg[xh].ah;
        if (this.zg[xh].bh < vxd) vxd = this.zg[xh].bh;
        if (this.zg[xh].bh > wxd) wxd = this.zg[xh].bh
    }
    return new lye((txd + uxd) / 2.0, (vxd + wxd) / 2.0, 0)
};
mye.prototype.znb = function (dy, ey) {
    var kze = this.jze();
    this.ize(-kze.ah, -kze.bh);
    for (var xh = 0; xh <= this.mfb - 1; xh++) {
        this.zg[xh].ah = this.zg[xh].ah * dy;
        this.zg[xh].bh = this.zg[xh].bh * ey
    }
    this.ize(kze.ah, kze.bh);
    this.dze()
};
mye.prototype.lze = function (nvd, ovd, rye) {
    eze = new lye(nvd, ovd, rye);
    if (!this.zg) this.zg = [];
    this.zg[this.zg.length] = eze;
    this.mfb++;
    this.dze()
};

function jbd() {
    this.wg = [];
    kye = 0
}
jbd.prototype.zu = function (mze) {
    this.wg[mze.hm] = mze
};
jbd.prototype.ivb = function (mze) {
    this.wg[mze.hm] = undefined
};

function nze(owd) {
    this.vk = owd;
    this.fi = !0;
    this.oze = new wu()
}
nze.prototype.zu = function (pze) {
    this.oze.zu(pze)
};
nze.prototype.ivb = function (pze) {
    this.oze.kgd(pze)
};
nze.prototype.dye = function (kqd) {
    var cgb = this.oze.cgb;
    for (var bm = 0; bm < cgb.length; bm++) {
        var qze = cgb[bm];
        if (qze != null) {
            if (((qze.ah + qze.zh) > kqd.left) && (qze.ah < kqd.ggb)) {
                qze.dye()
            }
        }
    }
};
nze.prototype.jjb = function () {
    return this.oze.cgb
};

function rze() {
    this.sze = new bre();
    this.tze = -1
}
rze.prototype.ev = function (owd) {
    var uze;
    for (var bm = 0; bm < this.sze.mfb; bm++) {
        uze = this.sze.ev(bm);
        if (uze.vk == owd) return uze
    }
    return null
};
rze.prototype.ivb = function (owd) {
    var uze = this.ev(owd);
    if (uze) {
        sze.ivb(uze)
    }
};
rze.prototype.zu = function (pze) {
    var uze;
    uze = this.ev(pze.vk);
    if (!uze) {
        uze = new nze(pze.vk);
        this.sze.zu(uze)
    }
    uze.zu(pze)
};
rze.prototype.vze = function (pze) {
    uze = this.ev(pze.vk);
    if (uze) {
        uze.ivb(pze)
    }
};
rze.prototype.wze = function () {
    this.tze = this.sze.length - 1;
    return this.sze.ev(this.tze)
};
rze.prototype.xze = function () {
    this.tze--;
    if (this.tze < 0) return null;
    return this.sze.ev(this.tze)
};

function yze() {
    this.zze = [];
    this.bi = 0;
    this.aaf = yze.prototype.baf;
    this.caf = yze.prototype.daf;
};
yze.prototype.eaf = function () {
    return (this.zze.length == 0)
};
yze.prototype.daf = function (jgd) {
    this.zze.push(jgd)
};
yze.prototype.baf = function () {
    if (this.eaf()) return undefined;
    var faf = this.zze[this.bi];
    if ((++this.bi * 2) >= this.zze.length) {
        this.zze = this.zze.slice(this.bi);
        this.bi = 0
    }
    return faf
};

function tdd() {
    this.hm = xwc++;
    this.gaf()
}
tdd.prototype.gaf = function () {
    this.haf = "";
    this.iaf = "";
    this.jaf = 30;
    this.kaf = 1024;
    this.laf = 768;
    this.maf = !1;
    this.naf = !1;
    this.oaf = 0xc0c0c0;
    this.paf = !0;
    this.qaf = !0;
    this.raf = [];
    for (var ru = 0; ru < buc; ru++) {
        this.raf[ru] = null
    }
    this.jzb = !1;
    this.saf = null;
    this.bgb = new bre();
    this.taf = new wu();
    this.taf.xu = !0;
    this.pwd = [];
    this.uaf = 0;
    this.vaf = [];
    this.waf = new rze();
    this.lzb = [];
    this.xaf = [];
    this.yaf = null;
    this.zaf = "Room"
};
tdd.prototype.abf = function () {
    return this.jzb
};
tdd.prototype.xxb = function () {
    return this.kaf
};
tdd.prototype.wxb = function () {
    return this.laf
};
tdd.prototype.ywb = function () {
    return this.jaf
};
tdd.prototype.jjb = function () {
    return this.bgb.cgb
};
tdd.prototype.bbf = function (cv) {
    this.kaf = cv;
    io.lid = cv
};
tdd.prototype.cbf = function (cv) {
    this.laf = cv;
    io.et = cv
};
tdd.prototype.dbf = function (cv) {
    this.jaf = cv;
    io.pp = cv
};
tdd.prototype.ebf = function (ly) {
    this.zaf = ly
};
tdd.prototype.fbf = function (gbf) {
    this.iaf = gbf;
    io.mid = gbf
};
tdd.prototype.hbf = function (cv) {
    this.maf = cv;
    io.nid = cv
};
tdd.prototype.ibf = function () {
    this.yaf = {
        dg: "room_empty_" + this.hm,
        width: 640,
        height: 480,
        am: [{}, {}, {}, {}, {}, {}, {}, {}],
        fm: [{}, {}, {}, {}, {}, {}, {}, {}],
        gm: [],
        im: []
    };
    this.udd(this.yaf)
};
tdd.prototype.jbf = function (lhd) {
    if (lhd != null) {
        this.yaf.width = lhd.width;
        this.yaf.height = lhd.height;
        this.yaf.zl = lhd.zl;
        this.yaf.kbf = lhd.kbf;
        this.yaf.lbf = lhd.lbf;
        this.yaf.mbf = lhd.mbf;
        this.yaf.yl = lhd.yl;
        this.yaf.ch = lhd.ch;
        this.yaf.uvd = lhd.uvd;
        for (var xh = 0; xh < lhd.am.length; xh++) {
            var nbf = lhd.am[xh];
            if (nbf != null) {
                this.yaf.am[xh] = {
                    fi: nbf.fi,
                    bm: nbf.bm,
                    qm: nbf.qm,
                    pm: nbf.pm,
                    ohd: nbf.ohd,
                    ah: nbf.ah,
                    bh: nbf.bh,
                    cm: nbf.cm,
                    dm: nbf.dm,
                    pm: nbf.pm,
                    qm: nbf.qm,
                    em: nbf.em,
                    thd: nbf.thd,
                    uhd: nbf.uhd
                }
            }
        }
        for (var xh = 0; xh < lhd.fm.length; xh++) {
            var obf = lhd.fm[xh];
            if (obf) {
                this.yaf.fm[xh] = {
                    fi: obf.fi,
                    pbf: obf.pbf,
                    qbf: obf.qbf,
                    jm: obf.jm,
                    km: obf.km,
                    rbf: obf.rbf,
                    sbf: obf.sbf,
                    lm: obf.lm,
                    mm: obf.mm,
                    nm: obf.nm,
                    om: obf.om,
                    pm: obf.pm,
                    qm: obf.qm,
                    bm: obf.bm
                }
            }
        }
        this.yaf.gm = new Array(lhd.gm.length);
        for (var xh = 0; xh < lhd.gm.length; xh++) {
            var tbf = lhd.gm[xh];
            if (tbf) {
                this.yaf.gm[xh] = {
                    ah: tbf.ah,
                    bh: tbf.bh,
                    bm: tbf.bm,
                    hm: tbf.hm
                }
            }
        }
        this.yaf.im = new Array(lhd.gm.length);
        for (var xh = 0; xh < lhd.im.length; xh++) {
            var ubf = lhd.im[xh];
            if (ubf != null) {
                this.yaf.im[xh] = {
                    ah: ubf.ah,
                    bh: ubf.bh,
                    bm: ubf.bm,
                    vbf: ubf.vbf,
                    wbf: ubf.wbf,
                    zh: ubf.zh,
                    ai: ubf.ai,
                    vk: ubf.vk,
                    hm: ubf.hm
                }
            }
        }
    }
};
tdd.prototype.udd = function (xbf) {
    with(this) {
        gaf();
        yaf = xbf;
        if (xbf.dg != undefined) ebf(xbf.dg);
        if (xbf.yl != undefined) fbf(xbf.yl);
        if (xbf.width != undefined) bbf(xbf.width);
        if (xbf.height != undefined) cbf(xbf.height);
        if (xbf.ch != undefined) dbf(xbf.ch);
        if (xbf.uvd != undefined) hbf(xbf.uvd);
        if (xbf.zl != undefined) oaf = xbf.zl;
        if (xbf.kbf != undefined) paf = xbf.kbf;
        if (xbf.lbf != undefined) jzb = xbf.lbf;
        if (xbf.mbf != undefined) qaf = xbf.mbf;
        this.bbf(this.kaf);
        this.cbf(this.laf);
        this.dbf(this.jaf);
        this.fbf(this.iaf);
        this.hbf(this.maf);
        lzb = [];
        uaf = 0;
        for (var bm in xbf.im) {
            var ybf = xbf.im[bm];
            if (ybf != null) {
                var qze = zbf(ybf);
                this.waf.zu(qze);
                this.vaf[qze.hm] = qze;
                this.uaf++
            }
        }
        if (xbf.acf != undefined) saf = xbf.acf;
        var xh = 0;
        for (var mzb in xbf.fm) {
            lzb[mzb] = bcf(xbf.fm[mzb])
        }
    }
};
tdd.prototype.ccf = function () {
    var xh;
    var dcf = 0;
    var ecf = [];
    for (xh = this.bgb.length - 1; xh >= 0; xh--) {
        this.fcf(this.bgb.ev(0))
    }
    for (xh = this.taf.length - 1; xh >= 0; xh--) {
        this.fcf(this.taf.ev(0))
    }
};
tdd.prototype.gcf = function () {
    var xh, zh, ai;
    if (ufb.abf()) {} else {
        zh = ufb.xxb();
        ai = ufb.wxb()
    } if (zh > dqd()) zh = dqd();
    if (ai > eqd()) ai = eqd()
};
tdd.prototype.vfb = function (ay, by,
    hcf) {
    return this.uwd(ay, by, dxc++, hcf, !0)
};
tdd.prototype.uwd = function (ay, by, bv, igb) {
    var icf = new mvd(ay, by, bv, igb, !0);
    this.bgb.dre(icf);
    pac.zu(icf);
    return icf
};
tdd.prototype.jcf = function () {
    var bm = 0;
    for (xh in this.lzb) {
        nzb = this.lzb[xh];
        op(io, "__view_visible__", bm, nzb.fi);
        op(io, "__view_xview__", bm, nzb.lrb);
        op(io, "__view_yview__", bm, nzb.mrb);
        op(io, "__view_wview__", bm, nzb.nrb);
        op(io, "__view_hview__", bm, nzb.orb);
        op(io, "__view_xport__", bm, nzb.prb);
        op(io, "__view_yport__", bm, nzb.qrb);
        op(io, "__view_wport__", bm, nzb.rrb);
        op(io, "__view_hport__", bm, nzb.srb);
        op(io, "__view_angle__", bm, nzb.kcf);
        op(io, "__view_hborder__", bm, nzb.nm);
        op(io, "__view_vborder__", bm, nzb.om);
        op(io, "__view_hspeed__", bm, nzb.pm);
        op(io, "__view_vspeed__", bm, nzb.qm);
        op(io, "__view_object__", bm, nzb.iab);
        op(io, "__view_surface_id__", bm, nzb.ozb);
        bm++
    }
};
tdd.prototype.lcf = function () {
    var bm = 0;
    for (xh in this.lzb) {
        nzb = this.lzb[xh];
        nzb.fi = qr(io, "__view_visible__", bm);
        nzb.lrb = qr(io, "__view_xview__", bm);
        nzb.mrb = qr(io, "__view_yview__", bm);
        nzb.nrb = qr(io, "__view_wview__",
            bm);
        nzb.orb = qr(io, "__view_hview__", bm);
        nzb.prb = qr(io, "__view_xport__", bm);
        nzb.qrb = qr(io, "__view_yport__", bm);
        nzb.rrb = qr(io, "__view_wport__", bm);
        nzb.srb = qr(io, "__view_hport__", bm);
        nzb.kcf = qr(io, "__view_angle__", bm);
        nzb.nm = qr(io, "__view_hborder__", bm);
        nzb.om = qr(io, "__view_vborder__", bm);
        nzb.pm = qr(io, "__view_hspeed__", bm);
        nzb.qm = qr(io, "__view_vspeed__", bm);
        nzb.iab = qr(io, "__view_object__", bm);
        nzb.ozb = qr(io, "__view_surface_id__", bm);
        bm++
    }
};
tdd.prototype.mcf = function () {
    for (var xh = 0; xh < dvc.yhd.length; xh++) {
        var mzb = qr(global, "__background_visible__", xh);
        var xgb = qr(global, "__background_foreground__", xh);
        if (mzb && !xgb) {
            var zhd = dvc.ev(xh);
            zhd.pm = qr(global, "__background_hspeed__", xh);
            zhd.qm = qr(global, "__background_vspeed__", xh);
            zhd.ah = qr(global, "__background_x__", xh);
            zhd.bh = qr(global, "__background_y__", xh);
            zhd.ah += zhd.pm;
            zhd.bh += zhd.qm;
            op(global, "__background_x__", xh, zhd.ah);
            op(global, "__background_y__", xh, zhd.bh)
        }
    }
};
tdd.prototype.ncf = function () {
    var xh;
    var vu, ru, ocf, pcf;
    var nzb;
    var jfb;
    if (!this.jzb) return;
    this.lcf();
    for (xh in this.lzb) {
        nzb = this.lzb[xh];
        if ((nzb.fi) && (nzb.iab >= 0)) {
            jfb = null;
            if (nzb.iab < 100000) {
                var hfb = zy.ev(nzb.iab);
                if (hfb != null) {
                    var cgb = hfb.qyb();
                    for (var tfb in cgb) {
                        jfb = cgb[tfb];
                        if (!jfb.kfb) break;
                        jfb = null
                    }
                }
            } else {
                jfb = pac.ev(nzb.iab);
                if (!jfb && jfb.kfb) jfb = null
            } if (jfb != null) {
                vu = nzb.lrb;
                ru = nzb.mrb;
                ocf = Math.round(jfb.ah);
                pcf = Math.round(jfb.bh);
                if (2 * nzb.nm >= nzb.nrb) {
                    vu = ocf - nzb.nrb / 2
                } else if (ocf - nzb.nm < nzb.lrb) {
                    vu = ocf - nzb.nm
                } else if (ocf + nzb.nm > nzb.lrb + nzb.nrb) {
                    vu = ocf + nzb.nm - nzb.nrb
                }
                if (2 * nzb.om >= nzb.orb) {
                    ru = pcf - nzb.orb / 2
                } else if (pcf - nzb.om < nzb.mrb) {
                    ru = pcf - nzb.om
                } else if (pcf + nzb.om > nzb.mrb + nzb.orb) {
                    ru = pcf + nzb.om - nzb.orb
                }
                if (vu < 0) vu = 0;
                if (vu + nzb.nrb > this.kaf) vu = this.kaf - nzb.nrb;
                if (ru < 0) ru = 0;
                if (ru + nzb.orb > this.laf) ru = this.laf - nzb.orb;
                if (nzb.pm >= 0) {
                    if ((vu < nzb.lrb) && (nzb.lrb - vu > nzb.pm)) vu = nzb.lrb - nzb.pm;
                    if ((vu > nzb.lrb) && (vu - nzb.lrb > nzb.pm)) vu = nzb.lrb + nzb.pm
                }
                if (nzb.qm >= 0) {
                    if ((ru < nzb.mrb) && (nzb.mrb - ru > nzb.qm)) ru = nzb.mrb - nzb.qm;
                    if ((ru > nzb.mrb) && (ru - nzb.mrb > nzb.qm)) ru = nzb.mrb + nzb.qm
                }
                nzb.lrb = vu;
                nzb.mrb = ru
            }
        }
    }
    this.jcf()
};
var qcf = !1;
tdd.prototype.rcf = function (kqd) {
    var uze = this.waf.wze();
    var scf = uze.vk;
    for (var xh = this.bgb.length - 1; xh >= 0; xh--) {
        var jfb = this.bgb.ev(xh);
        if (jfb.kfb || jfb.fi == 0) continue;
        while (scf > jfb.vk) {
            uze.dye(kqd);
            uze = this.waf.xze();
            if (uze) {
                scf = uze.vk
            } else {
                scf = -1000000000000
            }
        }
        if (!jfb.fyb[ucc]) {
            var ngb = ogb.ev(jfb.lgb);
            if (ngb) {
                if ((jfb.fq == 1.0) && (jfb.ds == 1.0) && (jfb.kq == 0.0) && (jfb.awd == 0xffffff)) {
                    ngb.etb(jfb.mq, jfb.ah, jfb.bh, jfb.ss)
                } else {
                    ngb.dye(jfb.mq, jfb.ah, jfb.bh, jfb.fq, jfb.ds, jfb.kq, jfb.awd, jfb.ss);
                }
            }
        } else {
            jfb.mab(ucc,
                0, jfb, jfb)
        }
    }
    while (uze) {
        uze.dye(kqd);
        uze = this.waf.xze()
    }
};
tdd.prototype.tcf = function (kqd) {
    var ngb, jfb, xh, cgb, qnd;
    cgb = this.bgb.cgb;
    qnd = ogb.jg;
    for (xh = cgb.length - 1; xh >= 0; xh--) {
        jfb = cgb[xh];
        if (jfb.kfb || !jfb.fi) continue;
        if (!jfb.fyb[ucc]) {
            ngb = qnd[jfb.lgb];
            if (ngb) {
                if ((jfb.fq == 1.0) && (jfb.ds == 1.0) && (jfb.kq == 0.0) && (jfb.awd == 0xffffff)) {
                    ngb.etb(jfb.mq, jfb.ah, jfb.bh, jfb.ss)
                } else {
                    ngb.dye(jfb.mq, jfb.ah, jfb.bh, jfb.fq, jfb.ds, jfb.kq, jfb.awd, jfb.ss)
                }
            }
        } else {
            jfb.mab(ucc, 0, jfb, jfb)
        }
    }
};
tdd.prototype.ucf = function (kqd) {
    var vcf = gye();
    for (var xh = this.bgb.length - 1; xh >= 0; xh--) {
        var jfb = this.bgb.ev(xh);
        if (jfb.kfb || jfb.fi == 0) continue;
        while (vcf > jfb.vk) {
            eye(vcf);
            vcf = hye(vcf)
        }
        if (!jfb.fyb[ucc]) {
            var ngb = ogb.ev(jfb.lgb);
            if (ngb) {
                if ((jfb.fq == 1.0) && (jfb.ds == 1.0) && (jfb.kq == 0.0) && (jfb.awd == 0xffffff)) {
                    ngb.etb(jfb.mq, jfb.ah, jfb.bh, jfb.ss);
                } else {
                    ngb.dye(jfb.mq, jfb.ah, jfb.bh, jfb.fq, jfb.ds, jfb.kq, jfb.awd, jfb.ss)
                }
            }
        } else {
            jfb.mab(ucc, 0, jfb, jfb)
        }
    }
    while (vcf > -1000000000) {
        eye(vcf);
        vcf = hye(vcf)
    }
};
tdd.prototype.wcf = function (kqd) {
    for (var bm in this.vaf) {
        var qze = this.vaf[bm];
        if (((qze.ah + qze.zh) > kqd.left) && (qze.ah < kqd.ggb)) {
            qze.dye()
        }
    }
    var vcf = gye();
    for (var xh = this.bgb.length - 1; xh >= 0; xh--) {
        var jfb = this.bgb.ev(xh);
        if (jfb.kfb || jfb.fi == 0) continue;
        while (vcf > jfb.vk) {
            eye(vcf);
            vcf = hye(vcf)
        }
        if (!jfb.fyb[ucc]) {
            var ngb = ogb.ev(jfb.lgb);
            if (ngb) {
                if ((jfb.fq == 1.0) && (jfb.ds == 1.0) && (jfb.kq == 0.0) && (jfb.awd == 0xffffff)) {
                    ngb.etb(jfb.mq, jfb.ah, jfb.bh, jfb.ss)
                } else {
                    ngb.dye(jfb.mq, jfb.ah, jfb.bh, jfb.fq, jfb.ds, jfb.kq, jfb.awd, jfb.ss)
                }
            }
        } else {
            jfb.mab(ucc, 0, jfb, jfb)
        }
    }
    while (vcf > -1000000000) {
        eye(vcf);
        vcf = hye(vcf)
    }
};
tdd.prototype.xcf = function (kqd) {
    irb = kqd;
    if (this.paf) {
        cqd(io.oid)
    }
    for (var xh = 0; xh < dvc.yhd.length; xh++) {
        var zhd = dvc.ev(xh);
        if (zhd) {
            zhd.fi = qr(global, "__background_visible__", xh);
            zhd.ohd = qr(global, "__background_foreground__", xh);
            zhd.ah = qr(global, "__background_x__", xh);
            zhd.bh = qr(global, "__background_y__", xh);
            zhd.bm = qr(global, "__background_index__", xh);
            zhd.phd = qr(global, "__background_htiled__", xh);
            zhd.qhd = qr(global, "__background_vtiled__", xh);
            zhd.thd = qr(global, "__background_alpha__", xh);
            zhd.uhd = qr(global,
                "__background_blend__", xh);
            zhd.pm = qr(global, "__background_hspeed__", xh);
            zhd.qm = qr(global, "__background_vspeed__", xh);
            if (zhd != null && zhd.fi && !zhd.ohd) {
                var ypb = dvc.fed(zhd.bm);
                if (ypb != null) {
                    if (zhd.em) {
                        ptd(ypb.jhd, zhd.ah, zhd.bh, this.kaf, this.laf, zhd.uhd, zhd.thd)
                    } else {
                        zpd(ypb.jhd, zhd.ah, zhd.bh, zhd.phd, zhd.qhd, zhd.uhd, zhd.thd)
                    }
                }
            }
        }
    }
    if (this.waf.sze.mfb > 0) {
        if (jvc.length != 0) {
            this.wcf(kqd)
        } else {
            this.rcf(kqd)
        }
    } else if (jvc.length != 0) {
        this.ucf(kqd)
    } else {
        this.tcf(kqd)
    }
    for (var xh = 0; xh < dvc.yhd.length; xh++) {
        var zhd = dvc.ev(xh);
        if (zhd != null && zhd.fi && zhd.ohd) {
            var ypb = dvc.fed(zhd.bm);
            if (ypb != null) {
                if (zhd.em) {
                    ptd(ypb.jhd, zhd.ah, zhd.bh, this.kaf, this.laf, zhd.uhd, zhd.thd)
                } else {
                    zpd(ypb.jhd, zhd.ah, zhd.bh, zhd.phd, zhd.qhd)
                }
            }
        }
    }
};
tdd.prototype.ycf = function () {
    var mob = ogb.ev(sxc);
    if (mob != null) {
        mob.dye(txc, tt.pzb - qtb.left, tt.qzb - qtb.top, 1.0, 1.0, 0, 0xffffff, 1.0)
    }
    txc++;
    if (txc > mob.wob) txc -= mob.wob
};
tdd.prototype.dye = function () {
    var qz = new mpb();
    this.ncf();
    var izb;
    if (!this.jzb) {
        izb = kzb;
        rpd = ntb / ufb.kaf;
        aub = otb / ufb.laf
    } else {
        izb = this.lzb;
        if (this.qaf) cqd(oxc)
    }
    var zcf = rpd;
    var adf = aub;
    kwc = 0;
    for (xh in izb) {
        krb = izb[xh];
        if (krb.fi) {
            var bdf = bsb;
            xqd();
            if (krb.ozb != -1) {
                drb(krb.ozb);
                rpd = 1.0;
                aub = 1.0
            }
            krb.trb = krb.prb * rpd;
            krb.urb = krb.qrb * aub;
            krb.vrb = krb.rrb * rpd;
            krb.wrb = krb.srb * aub;
            krb.xrb = krb.trb + krb.vrb;
            krb.yrb = krb.urb + krb.wrb;
            krb.rzb = krb.vrb / krb.nrb;
            krb.szb = krb.wrb / krb.orb;
            aqd(krb.trb, krb.urb, krb.vrb, krb.wrb);
            bqd(krb.lrb, krb.mrb, krb.nrb, krb.orb, krb.kcf);
            qz.left = krb.lrb;
            qz.top = krb.mrb;
            qz.ggb = krb.lrb + krb.nrb;
            qz.bottom = krb.mrb + krb.orb;
            io.gjd = kwc;
            this.xcf(qz);
            if (krb.ozb != -1) zrb();
            kwc++;
            zqd();
            bsb = du.getContext('2d');
            rpd = zcf;
            aub = adf
        }
    }
    if (sxc >= 0) this.ycf()
};
tdd.prototype.cdf = function () {
    var ddf = [];
    var lfb = pac.azd.cgb;
    for (var xh in lfb) {
        var jfb = lfb[xh];
        if (jfb.kfb) {
            ddf[ddf.length] = jfb
        }
    }
    for (var xh = 0; xh < ddf.length; xh++) {
        var jfb = ddf[xh];
        this.fcf(jfb)
    }
};
tdd.prototype.fcf = function (jfb) {
    pac.czd(jfb);
    this.bgb.ivb(jfb);
    this.taf.kgd(jfb);
    jfb.gab.twd(jfb)
};
tdd.prototype.edf = function (wz) {
    if (wz.tyb) {
        this.bgb.ivb(wz);
        wz.gab.twd(wz);
        this.taf.zu(wz);
        wz.tyb = !1;
    }
};
tdd.prototype.fdf = function (wz) {
    if (!wz.tyb) {
        this.taf.kgd(wz);
        this.bgb.dre(wz);
        wz.gab.uwd(wz);
        wz.tyb = !0
    }
};
tdd.prototype.vze = function (bv) {
    var qze = this.vaf[bv];
    if (qze) {
        this.waf.vze(qze);
        this.vaf[bv] = null;
        this.uaf--
    }
};
tdd.prototype.gdf = function () {
    if (this.pwd.length == 0) return;
    var dv = this.pwd;
    for (var xh = 0; xh < this.pwd.length; xh++) {
        var jfb = dv[xh];
        this.bgb.ivb(jfb);
        this.bgb.zu(jfb, jfb.vk)
    }
    this.pwd = []
};

function ebd() {
    this.hdf = [];
    this.aed = []
}
ebd.prototype.vdd = function (idf) {
    this.aed = idf
};
ebd.prototype.zu = function (jdf) {
    return this.hdf[this.hdf.length] = jdf
};
ebd.prototype.ev = function (kdf) {
    return this.hdf[kdf]
};
ebd.prototype.wdd = function (kdf) {
    return this.hdf[this.aed[kdf]];
};
ebd.prototype.ivb = function (kdf) {
    this.hdf[kdf] = null
};
var wcd = [];

function ldf() {
    this.dg = "";
    this.eg = 0;
    this.fg = "";
    this.gg = "";
    this.hg = 0;
    this.volume = 1;
    this.ig = 0;
    this.preload = !0;
    this.mdf = 1.0;
    this.ndf = 0;
    this.odf = []
}
ldf.prototype.pdf = function (lhd) {
    this.dg = lhd.dg;
    this.eg = lhd.eg;
    this.fg = lhd.fg;
    this.gg = lhd.gg;
    this.hg = lhd.hg;
    this.volume = lhd.volume;
    this.ig = lhd.ig;
    this.preload = lhd.preload;
    this.mdf = 1.0;
    this.qdf(this.dg)
};
ldf.prototype.qdf = function (wbd) {
    this.ndf = 0;
    this.odf = [];
    for (var xh = 0; xh < duc; xh++) {
        if (wcd[this.dg] != null) {
            this.odf[xh] = wcd[this.dg]
        }
    }
};

function vcd(zud, bv, rdf, sdf, tdf) {
    if (nbc == !1) {
        return -1
    }
    var udf = !1;
    var vdf;
    var bm;
    bm = zud.indexOf(rdf);
    if (bm >= 0) {
        zud = zud.substr(0, bm)
    }
    if (rwc) {
        rdf = "ogg"
    } else if (qwc) {
        rdf = "mp3"
    } else {
        rdf = "ogg"
    }
    udf = !0;
    if (udf) {
        zud = zud + "." + rdf;
        var wdf = new Audio();
        wdf.rbd = zud;
        wdf.autobuffer = !0;
        if (typeof wdf.loop == 'boolean') wdf.loop = !1;
        wdf.preload = 'auto';
        wdf.dcd = !1;
        wdf.xdf = !1;
        var wsb = document.createElement('source');
        wsb.setAttribute("src", zud);
        if (rdf == "ogg") {
            wsb.setAttribute("type", 'audio/ogg');
            wsb.setAttribute("codecs", 'vorbis')
        } else {
            wsb.setAttribute("type", 'audio/mpeg')
        }
        wdf.setAttribute("networkState", 0);
        wdf.insertBefore(wsb, null);
        document.body.appendChild(wdf);
        wcd[bv] = wdf;
        wdf.addEventListener('canplaythrough', sdf, !1);
        wdf.addEventListener('error', tdf, !1);
        wdf.addEventListener("loadstart", zbd, !1);
        wdf.addEventListener("suspend", acd, !1);
        wdf.addEventListener("stalled", bcd, !1);
        wdf.addEventListener("stall", bcd, !1);
        wdf.load()
    }
    return bv
}

function hbd() {
    this.cg = [];
    this.length = 0
}
hbd.prototype.ivb = function (cob) {
    if (this.cg[cob]) {
        this.ydf(cob);
        this.cg[cob] = undefined
    }
};

function zdf() {
    aef.xdf = !1
}
hbd.prototype.eob = function (cob) {
    var aef = this.cg[cob];
    if (!aef) return;
    var aef = aef.odf[this.cg[cob].ndf];
    this.cg[cob].ndf++;
    if (this.cg[cob].ndf >= duc) this.cg[cob].ndf = 0;
    if (aef != null) {
        try {
            aef.removeEventListener('ended', bef, !1);
            aef.removeEventListener('ended', zdf, !1);
            if (typeof aef.loop == 'boolean') {
                aef.loop = !1
            }
            try {
                if (aef.currentTime != 0) {
                    aef.currentTime = 0
                }
            } catch (fsb) {
                if (swc) dx("Error setting current sound time: " + this.cg[cob].dg)
            }
            aef.volume = this.cg[cob].mdf * exc;
            aef.addEventListener('ended', zdf, !1);
            aef.xdf = !0;
            aef.play()
        } catch (fsb) {
            if (swc) dx("Error playing sound: " + this.cg[cob].dg)
        }
    }
};
hbd.prototype.ydf = function (ahd) {
    with(this) {
        var cef = this.cg[ahd];
        if (!cef) return;
        cef = cef.odf;
        for (var xh in cef) {
            aef = cef[xh];
            if (aef != null) {
                try {
                    aef.pause();
                    aef.xdf = !1
                } catch (fsb) {
                    if (swc) dx("Error stopping sound: " + this.cg[ahd].dg)
                }
            }
        }
    }
};
hbd.prototype.fob = function () {
    for (var def in this.cg) {
        if (this.cg[def]) {
            var cef = this.cg[def].odf;
            for (var xh in cef) {
                aef = cef[xh];
                if (aef != null) {
                    try {
                        aef.pause();
                        aef.xdf = !1
                    } catch (fsb) {
                        if (swc) dx("Error stopping sound: " + aef.dg)
                    }
                }
            }
        }
    }
};

function bef() {
    try {
        this.currentTime = 0
    } catch (fsb) {
        if (swc) dx("Error setting current sound time: " + this.cg[cob].dg)
    }
    this.play()
}
hbd.prototype.gob = function (ahd) {
    with(this) {
        var cef = cg[ahd];
        if (!cef) return;
        cef = cef.odf;
        var eef = !1;
        for (var xh in cef) {
            aef = cef[xh];
            if (aef != null) {
                try {
                    if (aef.xdf) {
                        eef = !0;
                        break
                    }
                } catch (fsb) {
                    if (swc) dx("Error checking play state: " + this.cg[ahd].dg)
                }
            }
        }
        return eef
    }
};
hbd.prototype.ev = function (cob) {
    return this.cg[cob]
};
hbd.prototype.ajb = function () {
    this.cg = [];
    length = 0
};
hbd.prototype.zu = function (lhd) {
    with(this) {
        var zhd = null;
        if (lhd != null) {
            zhd = new ldf();
            zhd.pdf(lhd)
        }
        cg[cg.length] = zhd
    }
};

function mpb() {
    this.left = 0;
    this.top = 0;
    this.ggb = 0;
    this.bottom = 0
}
mpb.prototype.su = function (eqb) {
    this.left = eqb.left;
    this.ggb = eqb.ggb;
    this.top = eqb.top;
    this.bottom = eqb.bottom
};

function jpb() {
    this.dg = "sprite";
    this.width = 16;
    this.height = 16;
    this.fgb = new mpb;
    this.vg = !0;
    this.kg = !0;
    this.preload = !0;
    this.npb = 0;
    this.opb = !1;
    this.lg = 0;
    this.mg = 0;
    this.ppb = !1;
    this.wob = 0;
    this.qpb = 8;
    this.rpb = !1;
    this.spb = !1;
    this.tpb = [];
    this.fef = [];
    this.apb = [];
    this.sg = []
}
jpb.prototype.sxd = function () {
    return this.opb
};
jpb.prototype.gef = function () {
    return this.wob
};
jpb.prototype.hef = function () {
    var ief = (this.mg * this.mg);
    var jef = (this.lg * this.lg);
    var kef = (this.width - this.lg) * (this.width - this.lg);
    var lef = (this.height - this.mg) * (this.height - this.mg);
    var mef = ~~ceil(sqrt(jef + ief));
    var nef = ~~ceil(sqrt(kef + ief));
    var oef = ~~ceil(sqrt(jef + lef));
    var pef = ~~ceil(sqrt(kef + lef));
    this.qpb = obb(mef, obb(nef, obb(oef, pef)))
};

function qef(ref, qmd) {
    if (ref.sg[qmd] != null) {
        var mbb = [];
        var src = 0;
        var sef = 0;
        var rw;
        while (src < ref.sg[qmd].length) {
            var tef = ref.sg[qmd][src++];
            if (tef & 0x80) {
                tef = (tef & 0x7f) + 1;
                rw = ref.sg[qmd][src++];
                for (var mzb = 0; mzb < tef; mzb++) {
                    mbb[sef++] = rw
                }
            } else {
                tef++;
                for (var mzb = 0; mzb < tef; mzb++) {
                    mbb[sef++] = ref.sg[qmd][src++];
                }
            }
        }
    }
    ref.sg[qmd] = mbb
}

function ced(uef) {
    var ngb = new jpb();
    if (uef.dg != undefined) ngb.dg = uef.dg;
    if (uef.width != undefined) ngb.width = uef.width;
    if (uef.height != undefined) ngb.height = uef.height;
    if (uef.rg != undefined) ngb.fgb.left = uef.rg;
    if (uef.ng != undefined) ngb.fgb.ggb = uef.ng;
    if (uef.tg != undefined) ngb.fgb.top = uef.tg;
    if (uef.og != undefined) ngb.fgb.bottom = uef.og;
    if (uef.vg != undefined) ngb.vg = uef.vg;
    if (uef.kg != undefined) ngb.kg = uef.kg;
    if (uef.preload != undefined) ngb.preload = uef.preload;
    if (uef.vef != undefined) ngb.npb = uef.vef;
    if (uef.qg != undefined) ngb.opb = uef.qg;
    if (uef.lg != undefined) ngb.lg = uef.lg;
    if (uef.mg != undefined) ngb.mg = uef.mg;
    ngb.sg = null;
    if (uef.sg != undefined) ngb.sg = uef.sg;
    ngb.apb = [];
    for (var xh = uef.pg.length - 1; xh >= 0; xh--) {
        ngb.apb[xh] = uef.pg[xh]
    }
    ngb.wob = ngb.apb.length;
    ngb.hef();
    for (var xh = 0; xh < ngb.apb.length; xh++) {
        ngb.apb[xh] = mhd(ngb.apb[xh]);
        if (ngb.apb[xh].vm == 0) ngb.apb[xh].vm = 1;
        if (ngb.apb[xh].wm == 0) ngb.apb[xh].wm = 1
    }
    if (ngb.sg) {
        for (var xh = 0; xh < uef.sg.length; xh++) {
            if (!uef.wef) qef(ngb, xh);
            ngb.rpb = !0;
            var mh = ngb.width * ngb.height;
            var xef = [];
            xef[mh - 1] = 0;
            var yef = ((ngb.width + 7) >> 3);
            var zef = 0;
            for (var bh = 0; bh < ngb.height; ++bh, zef += yef) {
                var mbb = 0x80;
                var aff = zef;
                for (var ah = 0; ah < ngb.width; ++ah, mbb >>= 1) {
                    if (mbb == 0) {
                        mbb = 0x80;
                        ++aff
                    }
                    xef[ah + (bh * ngb.width)] = ((ngb.sg[xh][aff] & mbb) != 0)
                }
            }
            ngb.tpb[xh] = xef
        }
    }
    uef.wef = !0;
    return ngb
}
jpb.prototype.etb = function (bff, ay, by, tab) {
    if (this.wob <= 0) return;
    var qpb = this.qpb;
    if (((irb.top - by) <= qpb) && ((by - irb.bottom) <= qpb) && ((irb.left - ay) <= qpb) && ((ay - irb.ggb) <= qpb)) {
        bff = (~~bff) % this.wob;
        if (bff < 0) bff = bff + this.wob;
        ypd(this.apb[bff], ay - this.lg, by - this.mg, tab)
    }
};
jpb.prototype.dye = function (rjb, ay, by, dy, ey, fy, rbb, tab) {
    if (this.wob <= 0) return;
    var cff = abs(this.qpb * dy);
    var dff = abs(this.qpb * ey);
    var qpb;
    if (cff > dff) {
        qpb = cff
    } else {
        qpb = dff
    } if (((irb.top - by) <= qpb) && ((by - irb.bottom) <= qpb) && ((irb.left - ay) <= qpb) && ((ay - irb.ggb) <= qpb)) {
        rjb = (~~rjb) % this.wob;
        if (rjb < 0) rjb += this.wob;
        fy = zzc(fy, 360.0);
        pqd(this.apb[rjb], this.lg, this.mg, ay, by, dy, ey, fy * Math.PI / 180.0, rbb, rbb, rbb, rbb, tab)
    }
};
jpb.prototype.eff = function (fff, gff, acb, bcb, hff, iff, fy, ay, by) {
    var leb, meb;
    if (!this.rpb) return !0;
    if (this.wob <= 0) return !1;
    fff = fff % this.tpb.length;
    if (fff < 0) fff = fff + this.tpb.length;
    if (Math.abs(fy) < 0.0001) {
        leb = Math.floor((ay - acb) / hff + this.lg);
        meb = Math.floor((by - bcb) / iff + this.mg)
    } else {
        var kbb = Math.sin(-fy * Math.PI / 180.0);
        var mod = Math.cos(-fy * Math.PI / 180.0);
        leb = Math.floor((mod * (ay - acb) + kbb * (by - bcb)) / hff + this.lg);
        meb = Math.floor((mod * (by - bcb) - kbb * (ay - acb)) / iff + this.mg)
    } if ((leb < 0) || (leb >= this.width)) return !1;
    if ((meb < 0) || (meb >= this.height)) return !1;
    return this.tpb[fff][leb + (meb * this.width)]
};
jpb.prototype.hyd = function (fff, gff, acb, bcb, hff, iff, fy, jff) {
    if (!this.rpb) return !0;
    if (this.wob <= 0) return !1;
    fff = fff % this.tpb.length;
    if (fff < 0) {
        fff = fff + this.tpb.length
    }
    var vu = obb(gff.left, jff.left);
    var qz = nbb(gff.ggb, jff.ggb);
    var ru = obb(gff.top, jff.top);
    var sz = nbb(gff.bottom, jff.bottom);
    if ((hff == 1) && (iff == 1) && (Math.abs(this.kcf) < 0.0001)) {
        for (var xh = vu; xh <= qz; xh++) {
            for (var whb = ru; whb <= sz; whb++) {
                var leb = xh - acb + this.lg;
                var meb = whb - bcb + this.mg;
                if ((leb < 0) || (leb >= this.zh)) continue;
                if ((meb < 0) || (meb >= this.ai)) continue;
                if (this.tpb[fff][leb + (meb * this.zh)] == !0) return !0
            }
        }
    } else {
        var kbb = Math.sin(-fy * zgb / 180.0);
        var mod = Math.cos(-fy * zgb / 180.0);
        var kff = 1.0 / hff;
        var lff = 1.0 / iff;
        for (var xh = vu; xh <= qz; xh++) {
            for (var whb = ru; whb <= sz; whb++) {
                var leb = Math.floor((mod * (xh - acb) + kbb * (whb - bcb)) * kff + this.lg);
                var meb = Math.floor((mod * (whb - bcb) - kbb * (xh - acb)) * lff + this.mg);
                if ((leb < 0) || (leb >= this.width)) continue;
                if ((meb < 0) || (meb >= this.height)) continue;
                if (this.tpb[fff][leb + (meb * this.width)]) return !0
            }
        }
    }
    return !1
};
jpb.prototype.mff = function (fff, gff, acb, bcb, hff, iff, fy, jff) {
    var xh, whb;
    if (!this.rpb) return !0;
    if (nff > 3) {
        nff = (1 + nff) - 1
    }
    if (this.wob <= 0) return !1;
    fff = fff % this.tpb.length;
    if (fff < 0) fff = fff + this.tpb.length;
    var vu = obb(gff.left, jff.left);
    var qz = nbb(gff.ggb,
        jff.ggb);
    var ru = obb(gff.top, jff.top);
    var sz = nbb(gff.bottom, jff.bottom);
    var lqb = ((jff.ggb + jff.left) / 2);
    var nqb = ((jff.bottom + jff.top) / 2);
    var lsd = 1.0 / ((jff.ggb - jff.left) / 2);
    var jbb = 1.0 / ((jff.bottom - jff.top) / 2);
    var off = this.tpb[fff];
    if ((hff == 1) && (iff == 1) && (Math.abs(fy) < 0.0001)) {
        for (xh = vu; xh <= qz; xh++) {
            var pff = ahb((xh - lqb) * lsd);
            var leb = xh - acb + this.lg;
            if ((leb < 0) || (leb >= this.width)) continue;
            for (whb = ru; whb <= sz; whb++) {
                if (pff + ahb((whb - nqb) * jbb) > 1) continue;
                var meb = whb - bcb + this.mg;
                if ((meb < 0) || (meb >= this.height)) continue;
                if (off[leb + (meb * this.width)]) return !0
            }
        }
    } else {
        var kbb = Math.sin(-fy * Math.PI / 180.0);
        var mod = Math.sin(-fy * Math.PI / 180.0);
        var kff = 1.0 / hff;
        var lff = 1.0 / iff;
        for (xh = vu; xh <= qz; xh++) {
            var qff = (xh - acb);
            var rff = mod * qff;
            var sff = kbb * qff;
            var tff = ahb((xh - lqb) * lsd);
            for (whb = ru; whb <= sz; whb++) {
                var uff = (whb - nqb) * jbb;
                if ((tff + (uff * uff)) > 1) continue;
                var vff = whb - bcb;
                var leb = ~~ ((rff + kbb * vff * kff) + this.lg);
                if ((leb < 0) || (leb >= this.width)) continue;
                var meb = ~~ ((mod * vff - sff * lff) + this.mg);
                if ((meb < 0) || (meb >= this.height)) continue;
                if (off[leb + (meb * this.width)]) return !0
            }
        }
    }
    return !1
};
jpb.prototype.myd = function (fff, gff, acb, bcb, wff, xff, yff, zff, agf, bgf, ccb, dcb, cgf, dgf, egf) {
    if (zff == null) return !1;
    if (this.wob <= 0) return !1;
    if (zff.wob <= 0) return !1;
    if (this.tpb.length > 0) fff = fff % this.tpb.length;
    if (fff < 0) {
        fff = fff + this.tpb.length;
    }
    if (zff.tpb.length > 0) agf = agf % zff.tpb.length;
    if (agf < 0) {
        agf = agf + zff.tpb.length
    }
    wff = 1.0 / wff;
    xff = 1.0 / xff;
    cgf = 1.0 / cgf;
    dgf = 1.0 / dgf;
    var vu = obb(gff.left, bgf.left);
    var qz = nbb(gff.ggb, bgf.ggb);
    var ru = obb(gff.top, bgf.top);
    var sz = nbb(gff.bottom, bgf.bottom);
    if ((wff == 1) && (cgf == 1) && (xff == 1) && (dgf == 1) && (yff == 0) && (egf == 0)) {
        for (var xh = vu; xh <= qz; xh++) {
            for (var whb = ru; whb <= sz; whb++) {
                var leb = xh - acb + this.lg;
                var meb = whb - bcb + this.mg;
                if ((leb < 0) || (leb >= this.width)) continue;
                if ((meb < 0) || (meb >= this.height)) continue;
                if (this.rpb) {
                    if (!this.tpb[fff][leb + (meb * this.width)]) continue
                }
                leb = xh - ccb + zff.lg;
                meb = whb - dcb + zff.mg;
                if ((leb < 0) || (leb >= zff.width)) continue;
                if ((meb < 0) || (meb >= zff.height)) continue;
                if (zff.rpb) {
                    if (!zff.tpb[agf][leb + (meb * zff.width)]) continue;
                }
                return !0
            }
        }
    } else if ((yff == 0) && (egf == 0)) {
        for (var xh = vu; xh <= qz; xh++) {
            for (var whb = ru; whb <= sz; whb++) {
                var leb = Math.floor(((xh - acb) * wff + this.lg));
                var meb = Math.floor(((whb - bcb) * xff + this.mg));
                if ((leb < 0) || (leb >= this.width)) continue;
                if ((meb < 0) || (meb >= this.height)) continue;
                if (this.rpb) {
                    if (!this.tpb[fff][leb + (meb * this.width)]) continue
                }
                leb = Math.floor(((xh - ccb) * cgf + zff.lg));
                meb = Math.floor(((whb - dcb) * dgf + zff.mg));
                if ((leb < 0) || (leb >= zff.width)) continue;
                if ((meb < 0) || (meb >= zff.height)) continue;
                if (zff.rpb) {
                    if (!zff.tpb[agf][leb + (meb * zff.width)]) continue;
                }
                return !0
            }
        }
    } else {
        var fgf = Math.sin(-yff * zgb / 180);
        var ggf = Math.cos(-yff * zgb / 180);
        var hgf = Math.sin(-egf * zgb / 180);
        var igf = Math.cos(-egf * zgb / 180);
        for (var xh = vu; xh <= qz; xh++) {
            for (var whb = ru; whb <= sz; whb++) {
                var leb = Math.floor(((ggf * (xh - acb) + fgf * (whb - bcb)) * wff + this.lg));
                var meb = Math.floor(((ggf * (whb - bcb) - fgf * (xh - acb)) * xff + this.mg));
                if ((leb < 0) || (leb >= this.width)) continue;
                if ((meb < 0) || (meb >= this.height)) continue;
                if (this.rpb) {
                    if (!this.tpb[fff][leb + (meb * this.width)]) continue
                }
                leb = Math.floor(((igf * (xh - ccb) + hgf * (whb - dcb)) * cgf + zff.lg));
                meb = Math.floor(((igf * (whb - dcb) - hgf * (xh - ccb)) * dgf + zff.mg));
                if ((leb < 0) || (leb >= zff.width)) continue;
                if ((meb < 0) || (meb >= zff.height)) continue;
                if (zff.rpb) {
                    if (!zff.tpb[agf][leb + (meb * zff.width)]) continue
                }
                return !0
            }
        }
    }
    return !1
};
jpb.prototype.jgf = function (fff, gff, acb, bcb, hff, iff, fy, kgf, lgf, mgf, ngf) {
    if (!this.rpb) {
        return !0
    }
    if (this.wob <= 0) {
        return !1
    }
    fff = fff % this.tpb.length;
    if (fff < 0) {
        fff = fff + this.tpb.length
    }
    if ((kgf == mgf) || (lgf == ngf)) {
        var ogf = new mpb();
        ogf.left = kgf;
        ogf.top = nbb(lgf, ngf);
        ogf.ggb = mgf;
        ogf.bottom = obb(lgf, ngf);
        return this.hyd(fff, gff, acb, bcb, hff, iff, fy, ogf)
    }
    var kbb = Math.sin(-fy * Math.PI / 180.0);
    var mod = Math.cos(-fy * Math.PI / 180.0);
    if (Math.abs(mgf - kgf) >= Math.abs(ngf - lgf)) {
        if (mgf < kgf) {
            var uue = mgf;
            mgf = kgf;
            kgf = cv;
            uue = ngf;
            ngf = pgf;
            lgf = uue
        }
        var keb = (ngf - lgf) / (mgf - kgf);
        for (var xh = obb(gff.left, kgf); xh <= nbb(gff.ggb, mgf); xh++) {
            var leb = Math.floor((mod * (xh - acb) + kbb * (lgf + (xh - kgf) * keb - bcb)) / hff + this.lg);
            var meb = Math.floor((mod * (lgf + (xh - kgf) * keb - bcb) - kbb * (xh - acb)) / iff + this.mg);
            if ((leb < 0) || (leb >= this.width)) continue;
            if ((meb < 0) || (meb >= this.height)) continue;
            if (this.tpb[fff][leb + (meb * this.width)]) return !0
        }
    } else {
        if (ngf < lgf) {
            var uue = ngf;
            ngf = lgf;
            lgf = uue;
            uue = mgf;
            mgf = kgf;
            kgf = uue
        }
        var keb = (mgf - kgf) / (ngf - lgf);
        for (var xh = obb(gff.top, lgf); xh <= nbb(gff.bottom, ngf); xh++) {
            var leb = Math.floor((mod * (kgf + (xh - lgf) * keb - acb) + kbb * (xh - bcb)) / hff + this.lg);
            var meb = Math.floor((mod * (xh - bcb) - kbb * (kgf + (xh - lgf) * keb - acb)) / iff + this.mg);
            if ((leb < 0) || (leb >= this.width)) continue;
            if ((meb < 0) || (meb >= this.height)) continue;
            if (this.tpb[fff][leb + (meb * this.width)]) return !0
        }
    }
    return !1
};

function fbd() {
    this.jg = []
}
fbd.prototype.lpb = function (ref) {
    var ggd = this.jg.length;
    this.jg[ggd] = ref;
    return ggd
};
fbd.prototype.jxd = function (qgf) {
    if (qgf < 0 || qgf > this.jg.length) return null;
    return this.jg[qgf].apb.length
};
fbd.prototype.ev = function (qgf) {
    if (qgf < 0 || qgf > this.jg.length) return null;
    return this.jg[qgf]
};
fbd.prototype.ivb = function (bv) {
    if (this.jg[bv] != undefined) this.jg[bv] = undefined
};

function rgf() {
    this.ah = 0;
    this.bh = 0;
    this.bm = 0;
    this.vbf = 0;
    this.wbf = 0;
    this.zh = 0;
    this.ai = 0;
    this.vk = 0.0;
    this.hm = fxc++;
    this.vhd = 1.0;
    this.whd = 1.0;
    this.uhd = 0xffffff;
    this.thd = 1.0;
    this.fi = !0
}

function zbf(sgf) {
    var qze = new rgf();
    if (sgf.ah != undefined) qze.ah = sgf.ah;
    if (sgf.bh != undefined) qze.bh = sgf.bh;
    if (sgf.bm != undefined) qze.bm = sgf.bm;
    if (sgf.vbf != undefined) qze.vbf = sgf.vbf;
    if (sgf.wbf != undefined) qze.wbf = sgf.wbf;
    if (sgf.zh != undefined) qze.zh = sgf.zh;
    if (sgf.ai != undefined) qze.ai = sgf.ai;
    if (sgf.vk != undefined) qze.vk = sgf.vk;
    if (sgf.hm != undefined) qze.hm = sgf.hm;
    if (sgf.vhd != undefined) qze.vhd = sgf.vhd;
    if (sgf.whd != undefined) qze.whd = sgf.whd;
    if (sgf.thd != undefined) qze.thd = sgf.thd;
    if (sgf.uh != undefined) qze.vhd = sgf.uh;
    if (sgf.vh != undefined) qze.whd = sgf.vh;
    if (sgf.zl != undefined) qze.uhd = sgf.zl;
    if (fxc < sgf.hm) fxc = sgf.hm + 1;
    return qze
}
rgf.prototype.dye = function () {
    var ypb = dvc.fed(this.bm);
    if (ypb != null) {
        var yob = ypb.jhd;
        if (yob.zm >= dpb.length) return;
        if (!dpb[yob.zm].complete) return;
        if (!bwc) {
            uab.globalAlpha = this.thd;
            uab.xob(dpb[yob.zm], yob.ah + this.vbf, yob.bh + this.wbf, this.zh, this.ai, this.ah, this.bh, this.zh * this.vhd, this.ai * this.whd)
        } else {
            var tz = this.uhd | ((this.thd * 255) << 24);
            uab.xob(yob, yob.ah + this.vbf, yob.bh + this.wbf, this.zh, this.ai, this.ah, this.bh, this.zh * this.vhd, this.ai * this.whd, tz)
        }
    }
};

function tgf(lhd) {
    if ((lhd != null) && (lhd != undefined)) {
        this.dg = lhd.dg;
        this.cab = lhd.cab
    } else {
        this.dg = "";
        this.cab = []
    }
}
tgf.prototype.abc = function (ugf) {
    if (this.cab.length == 0) {
        return 0
    }
    if (ugf > this.cab[this.cab.length - 1]) {
        return this.cab.length
    }
    for (var xh = 0; xh < this.cab.length; xh++) {
        if (this.cab[xh].vgf >= ugf) {
            return xh
        }
    }
    return this.cab.length
};
tgf.prototype.xac = function () {
    return this.cab[this.cab.length - 1].vgf
};

function kbd() {
    this.ci = []
}
kbd.prototype.zu = function (lhd) {
    var zhd = null;
    if (lhd != null) {
        zhd = new tgf(lhd)
    }
    this.ci[this.ci.length] = zhd
};
kbd.prototype.ev = function (rjb) {
    if ((rjb < 0) || (rjb >= this.ci.length)) {
        return undefined
    }
    return this.ci[rjb]
};
kbd.prototype.ajb = function (rjb) {
    if ((rjb >= 0) || (rjb < this.ci.length)) {
        this.ci[rjb].cab.ajb()
    }
};
kbd.prototype.ivb = function (rjb) {
    if ((rjb >= 0) || (rjb < this.ci.length)) {
        this.ci[rjb] = null
    }
};

function odd(wgf) {
    this.cgb = wgf
}
odd.prototype.ev = function (cob) {
    return this.cgb[cob]
};
odd.prototype.ehd = function (xgf) {
    for (var xh = 1; xh < this.cgb.length; xh++) {
        var lqe = this.cgb[xh];
        if (lqe.ygf == xgf) {
            pac.mab(xcc, xh)
        }
    }
};

function kbc(vtd, zgf) {
    this.zaf = vtd;
    this.ahf = [];
    this.bhf = zgf
}
var qr, op, dzc, fzc;

function chf(ly) {
    return "\"" + ly.substr(5, ly.length - 7) + "\""
}

function dhf(ly) {
    return ly.substr(5, ly.length - 7)
}

function jzc(wz, vtd, wgb, cv) {
    try {
        if (!wz) {
            ex("ERROR: Accessing array with in an invalid instance/global");
            return
        }
        var ehf = wz.jbc[vtd];
        if (!ehf) {
            ehf = global.jbc[vtd];
            if (!ehf) {
                ehf = new kbc(vtd, 1);
                wz.jbc[vtd] = ehf
            }
        }
        if (ehf.bhf != 1) {
            ex("ERROR: Illegal number of dimensions when accessing array " + chf(ehf.zaf));
            return
        }
        ehf.ahf[~~wgb] = cv
    } catch (fsb) {
        ex("ERROR: Accessing array " + chf(vtd))
    }
}

function czc(wz, vtd, wgb, cv) {
    var ehf = wz.jbc[vtd];
    if (!ehf) {
        ehf = global.jbc[vtd];
        if (!ehf) {
            ehf = new kbc(vtd, 1);
            wz.jbc[vtd] = ehf
        }
    }
    ehf.ahf[~~wgb] = cv
}

function izc(wz, vtd, wgb) {
    try {
        var ehf = wz.jbc[vtd];
        if (!ehf) {
            ehf = global.jbc[vtd];
            if (!ehf) {
                ex("Error: Trying to access unknown array " + chf(vtd));
                return 0
            }
        } else if (ehf.bhf != 1) {
            ex("ERROR: Illegal number of dimensions when accessing array " + chf(ehf.zaf));
            return 0
        }
        wgb = ~~wgb;
        if (ehf.ahf[wgb] === undefined) {
            ex("Error: Out of bounds trying to access \"" + dhf(vtd) + "[" + wgb + "]\", or value never written.");
            return 0
        }
        return ehf.ahf[wgb]
    } catch (fsb) {
        ex("Error: Trying to access unknown array " + chf(vtd));
        return 0
    }
}

function bzc(wz, vtd, wgb) {
    wgb = ~~wgb;
    var ehf = wz.jbc[vtd];
    if (ehf) return ehf.ahf[wgb];
    return global.jbc[vtd].ahf[wgb]
}

function lzc(wz, vtd, wgb, bhb, cv) {
    try {
        var ehf = wz.jbc[vtd];
        if (!ehf) {
            ehf = new kbc(vtd, 2);
            wz.jbc[vtd] = ehf
        } else if (ehf.bhf != 2) {
            ex("ERROR: Illegal number of dimensions when accessing array " + chf(ehf.zaf));
            return 0
        }
        wgb = ~~wgb;
        bhb = ~~bhb;
        if (!ehf.ahf[wgb]) ehf.ahf[wgb] = [];
        ehf.ahf[wgb][bhb] = cv
    } catch (fsb) {
        ex("Error: Trying to access unknown array " + chf(vtd));
        return 0
    }
}

function gzc(wz, vtd, wgb, bhb, cv) {
    var ehf = wz.jbc[vtd];
    if (!ehf) {
        ehf = new kbc(vtd, 2);
        wz.jbc[vtd] = ehf
    }
    wgb = ~~wgb;
    bhb = ~~bhb;
    if (!ehf.ahf[wgb]) ehf.ahf[wgb] = [];
    ehf.ahf[wgb][bhb] = cv
}

function kzc(wz, vtd, wgb, bhb) {
    try {
        var ehf = wz.jbc[vtd];
        if (!ehf) {
            ex("Error: Trying to access unknown array " + chf(vtd));
            return 0
        } else if (ehf.bhf != 2) {
            ex("ERROR: Illegal number of dimensions when accessing array " + chf(ehf.zaf));
            return 0
        }
        wgb = ~~wgb;
        bhb = ~~bhb;
        if (ehf.ahf[wgb] == undefined || ehf.ahf[wgb][bhb] == undefined) {
            ex("Error: Out of bounds trying to access \"" + dhf(ehf.zaf) + "[" + wgb + "][" + bhb + "]\", or value never written.", !1);
            return 0
        }
        return ehf.ahf[wgb][bhb]
    } catch (fsb) {
        ex("Error: Trying to access unknown array " + chf(vtd));
        return 0
    }
}

function ezc(wz, vtd, wgb, bhb) {
    wgb = ~~wgb;
    bhb = ~~bhb;
    var ehf = wz.jbc[vtd];
    return ehf.ahf[wgb][bhb]
}
var fhf = 6 * 32000;
var ghf = -1;
var hhf = 0;
var ihf = 1;
var jhf = 2;
var khf = 3;
var lhf = 4;
var mhf = 5;
var nhf = 20;

function ohf(my, phf) {
    this.end = -1;
    this.qhf = new Int16Array(my * 2);
    this.rhf = new Int16Array(my * 2);
    this.shf = new Int32Array(my);
    this.max = my;
    this.thf = 0;
    this.uhf = phf;
    this.cnd = !1;
    this.gnd = bwc.createBuffer();
    this.knd = bwc.createBuffer();
    this.ind = bwc.createBuffer();
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.gnd);
    bwc.bufferData(bwc.ARRAY_BUFFER, this.qhf, bwc.DYNAMIC_DRAW);
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.knd);
    bwc.bufferData(bwc.ARRAY_BUFFER, this.rhf, bwc.DYNAMIC_DRAW);
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.ind);
    bwc.bufferData(bwc.ARRAY_BUFFER, this.shf, bwc.DYNAMIC_DRAW)
}
ohf.prototype.dnd = function () {
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.gnd);
    bwc.bufferSubData(bwc.ARRAY_BUFFER, 0, this.qhf);
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.ind);
    bwc.bufferSubData(bwc.ARRAY_BUFFER,
        0, this.shf);
    bwc.bindBuffer(bwc.ARRAY_BUFFER, this.knd);
    bwc.bufferSubData(bwc.ARRAY_BUFFER, 0, this.rhf);
    this.thf = 0;
    this.cnd = !1
};

function vhf() {
    this.whf = [];
    this.whf[nhf] = new wu();
    this.whf[nhf].xu = !0;
    this.xhf = 0;
    this.yld = null;
    this.yhf = null;
    this.zhf = ghf
}
vhf.prototype.aif = function () {
    if (this.yhf == null) return;
    var mh = this.yhf.thf - this.xhf;
    switch (this.zhf) {
    case hhf:
        dwc.amd(0, this.yld);
        dwc.bmd(this.yhf);
        dwc.dmd(this.xhf, mh);
        break;
    case ihf:
        dwc.amd(0, this.yld);
        dwc.bmd(this.yhf);
        dwc.gmd(this.xhf, mh);
        break;
    case jhf:
        dwc.amd(0,
            this.yld);
        dwc.bmd(this.yhf);
        dwc.hmd(this.xhf, mh);
        break;
    case khf:
        dwc.amd(0, null);
        dwc.bmd(this.yhf);
        dwc.imd(this.xhf, mh);
        break;
    case lhf:
        dwc.amd(0, null);
        dwc.bmd(this.yhf);
        dwc.jmd(this.xhf, mh);
        break;
    case mhf:
        dwc.amd(0, null);
        dwc.bmd(this.yhf);
        dwc.kmd(this.xhf, mh);
        break
    }
    this.yhf = this.yld = null;
    this.zhf = ghf
};
vhf.prototype.bif = function (cif, cqb, dif, eif) {
    var xh, fif, bnd, osd;
    if (cqb != null) osd = cqb.cpb;
    else osd = null; if (this.yhf != null) {
        if ((this.yhf.uhf == dif) && ((this.yhf.thf + eif) <= this.yhf.max) && (this.yld == osd) && (this.zhf == cif) && ((cif != lhf) && (cif != jhf) && (cif != ihf))) {
            return this.yhf
        } else {
            var gif = this.yhf;
            this.aif();
            if ((gif.uhf == dif) && ((gif.thf + eif) <= gif.max)) {
                this.yhf = gif;
                this.xhf = gif.thf;
                this.zhf = cif;
                this.yld = osd;
                return this.yhf;
            }
        }
    }
    this.zhf = cif;
    this.yld = osd;
    fif = this.whf[dif].cgb;
    for (xh = fif.length - 1; xh >= 0; xh--) {
        bnd = fif[xh];
        if ((bnd.end != fnd) && (bnd.thf + eif) <= bnd.max) {
            bnd.cnd = !0;
            this.xhf = bnd.thf;
            this.yhf = bnd;
            return bnd
        }
    }
    if (eif < fhf) eif = fhf;
    bnd = new ohf(eif, dif);
    bnd.cnd = !0;
    this.xhf = bnd.thf;
    this.yhf = bnd;
    this.whf[dif].zu(bnd);
    return bnd
};

function pzc() {
    this.fi = !1;
    this.lrb = 0;
    this.mrb = 0;
    this.nrb = 640;
    this.orb = 480;
    this.prb = 0;
    this.qrb = 0;
    this.rrb = 640;
    this.srb = 480;
    this.kcf = 0;
    this.trb = 0;
    this.urb = 0;
    this.xrb = 0;
    this.yrb = 0;
    this.vrb = 0;
    this.wrb = 0;
    this.rzb = 1;
    this.szb = 1;
    this.nm = 32;
    this.om = 32;
    this.pm = -1;
    this.qm = -1;
    this.iab = -1;
    this.ozb = -1
}
pzc.prototype.su = function (tu) {
    this.fi = tu.fi;
    this.lrb = tu.lrb;
    this.mrb = tu.mrb;
    this.nrb = tu.nrb;
    this.orb = tu.orb;
    this.prb = tu.prb;
    this.qrb = tu.qrb;
    this.rrb = tu.rrb;
    this.srb = tu.srb;
    this.kcf = tu.kcf;
    this.trb = tu.trb;
    this.urb = tu.urb;
    this.xrb = tu.xrb;
    this.yrb = tu.yrb;
    this.vrb = tu.vrb;
    this.wrb = tu.wrb;
    this.rzb = tu.rzb;
    this.szb = tu.szb;
    this.nm = tu.nm;
    this.om = tu.om;
    this.pm = tu.pm;
    this.qm = tu.qm;
    this.iab = tu.iab;
    this.ozb = tu.ozb
};

function bcf(hif) {
    iif = new pzc();
    if (hif.fi != undefined) iif.fi = hif.fi;
    if (hif.pbf != undefined) iif.lrb = hif.pbf;
    if (hif.qbf != undefined) iif.mrb = hif.qbf;
    if (hif.jm != undefined) iif.nrb = hif.jm;
    if (hif.km != undefined) iif.orb = hif.km;
    if (hif.rbf != undefined) iif.prb = hif.rbf;
    if (hif.sbf != undefined) iif.qrb = hif.sbf;
    if (hif.lm != undefined) iif.rrb = hif.lm;
    if (hif.mm != undefined) iif.srb = hif.mm;
    if (hif.kcf != undefined) iif.srb = hif.kcf;
    if (hif.nm != undefined) iif.nm = hif.nm;
    if (hif.om != undefined) iif.om = hif.om;
    if (hif.pm != undefined) iif.pm = hif.pm;
    if (hif.qm != undefined) iif.qm = hif.qm;
    if (hif.bm != undefined) iif.iab = hif.bm;
    return iif
}
var jif = 0;
var kif = 1;
var lif = 2;
var mif = 16;
var nif = 24;
var oif = [];
var pif = [];
var qif = 0;
var rif = 0;

function sif(lqd) {
    bwc = tif(lqd);
    if (!bwc) return !1;
    if (!uif()) return !1;
    if (!vif()) return !1;
    cwc = new vhf();
    dwc = new uld();
    ewc = [];
    ewc[jif] = new bfd();
    ewc[kif] = new bfd();
    ewc[lif] = new bfd();
    fwc = [];
    for (var xh = 0; xh < mif; xh++) {
        fwc[xh] = new bfd()
    }
    rxc = 0;
    qxc = 1;
    gwc = new bfd();
    hwc = new bfd();
    wif(nif);
    return !0
}

function jrd() {
    ypd = xif;
    zpd = yif;
    pqd = zif;
    bqd = ajf;
    aqd = bjf;
    kod = cjf;
    cqd = djf;
    jod = ejf;
    htb = fjf;
    xqd = gjf;
    zqd = hjf;
    opd = ijf;
    crd = jjf;
    erd = kjf;
    gcb = ljf;
    ybb = mjf;
    kcb = njf;
    ocb = ojf;
    ucb = pjf;
    zcb = qjf;
    cdb = rjf;
    mdb = sjf;
    oeb = tjf;
    yeb = ujf;
    cfb = vjf;
    xcb = wjf;
    qab = xjf;
    sqb = yjf;
    frb = zjf;
    zrb = akf;
    brb = bkf;
    lsb = ckf;
    nsb = dkf;
    ssb = ekf;
    xsb = fkf;
    upb = gkf;
    epb = hkf;
    nob = ikf;
    nob = ikf;
    epb = hkf;
    upb = gkf;
    cjb = jkf;
    rnb = kkf;
    bwc.xob = lkf
}

function tif(lqd) {
    var mkf = null;
    var nkf = ["webgl",
        "experimental-webgl", "moz-webgl", "webkit-3d"
    ]; {
        for (var xh = 0; xh < nkf.length; xh++) {
            try {
                mkf = lqd.getContext(nkf[xh], {
                    rh: !1,
                    thd: !0,
                    okf: !1
                });
                if (mkf) break
            } catch (fsb) {
                return null
            }
        }
    }
    if (mkf) {
        mkf.viewportWidth = lqd.width;
        mkf.viewportHeight = lqd.height;
        qif = mkf.viewportWidth;
        rif = mkf.viewportHeight
    }
    return mkf
}

function vif() {
    var xmd = document.createElement(sob);
    xmd.pu = xmd.width = 16;
    xmd.qu = xmd.height = 16;
    xmd.complete = !0;
    xmd.vqb = !1;
    xmd.name = "";
    xmd.uab = xmd.getContext('2d');
    xmd.uab.save();
    xmd.uab.setTransform(1, 0, 0, 1, 0, 0);
    xmd.uab.globalAlpha = 1;
    xmd.uab.fillStyle = '#ffffff';
    xmd.uab.fillRect(0, 0, 16, 16);
    xmd.uab.restore();
    var yob = new zob();
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = 15;
    yob.ai = 15;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = 15;
    yob.wm = 15;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = -1;
    yob.cpb = xmd;
    yob.xqb = [];
    yob.yqb = 1;
    yob.mfb = 0;
    pkf(yob);
    bwc.xmd = yob;
    return !0
}
var qkf = function (rkf, type, source) {
    var rx = bwc.createShader((type == 'vertex') ? bwc.VERTEX_SHADER : bwc.FRAGMENT_SHADER);
    bwc.shaderSource(rx, source);
    bwc.compileShader(rx);
    if (!bwc.getShaderParameter(rx, bwc.COMPILE_STATUS)) {
        return
    }
    bwc.attachShader(rkf,
        rx)
};

function uif() {
    var skf = "uniform mat4 pmatrix;" + "uniform mat4 vmatrix;" + "uniform vec2 oneoveruv;" + " " + "attribute vec2 vertex;" + "attribute vec4 color;" + "attribute vec2 UV;" + "varying vec4 fcolor;" + "varying vec2 texc;" + " " + "void main(void)" + "{" + "    fcolor = color;" + "    texc   = UV * oneoveruv;" + "    gl_Position = (pmatrix * vmatrix) * vec4( vertex.x, vertex.y, 1, 1);" + "}";
    var tkf = "precision mediump float;" + "uniform sampler2D pTexure;" + " " + "varying vec4 fcolor;" + "varying vec2 texc;" + " " + "void main(void)" + "{" + "    vec4 color   = texture2D( pTexure, texc ).rgba * fcolor.bgra;" + "    gl_FragColor = color;" + "}";
    var ukf = bwc.createProgram();
    var error = bwc.getError();
    qkf(ukf, "vertex", skf);
    qkf(ukf, "fragment", tkf);
    bwc.linkProgram(ukf);
    error = bwc.getError();
    if (!bwc.getProgramParameter(ukf, bwc.LINK_STATUS)) {
        alert("Could not initialise shaders\n\n" + bwc.getShaderInfoLog(vkf));
        return !1;
    }
    bwc.useProgram(ukf);
    ukf.wkf = bwc.getUniformLocation(ukf, "ViewMatrix");
    bwc.umd = ukf;
    ukf.hnd = bwc.getAttribLocation(ukf, "vertex");
    ukf.jnd = bwc.getAttribLocation(ukf, "color");
    ukf.lnd = bwc.getAttribLocation(ukf, "UV");
    ukf.vmd = bwc.getUniformLocation(ukf,
        "pmatrix");
    ukf.wmd = bwc.getUniformLocation(ukf, "vmatrix");
    ukf.and = bwc.getUniformLocation(ukf, "oneoveruv");
    ukf.zmd = bwc.getUniformLocation(ukf, "pTexure");
    return !0
}

function gjf() {}

function hjf() {}

function ajf(asd, bsd, csd, dsd, fy) {
    wrd(asd, bsd, csd, dsd, fy);
    dwc.nmd(hwc);
    dwc.lmd(gwc);
    spd = asd;
    tpd = bsd;
    upd = csd;
    vpd = dsd;
    bjf(abb, bbb, cbb, dbb)
}

function bjf(srd, trd, urd, vrd) {
    abb = srd;
    bbb = trd;
    cbb = urd;
    dbb = vrd;
    dwc.omd(srd, trd, urd, vrd)
}

function jjf() {
    dwc.wld();
    bwc.disable(bwc.CULL_FACE)
}

function kjf() {
    cwc.aif();
    fnd++;
    dwc.tmd()
}

function pkf(cqb) {
    var xkf = bwc.createTexture();
    cqb.cpb.ymd = xkf;
    xkf.ykf = cqb.cpb;
    cqb.cpb.pu = cqb.cpb.width;
    cqb.cpb.qu = cqb.cpb.height;
    bwc.bindTexture(bwc.TEXTURE_2D, xkf);
    bwc.pixelStorei(bwc.UNPACK_WEBGL, !0);
    bwc.texImage2D(bwc.TEXTURE_2D, 0, bwc.RGBA, bwc.RGBA, bwc.UNSIGNED_BYTE, cqb.cpb);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MAG_FILTER, bwc.NEAREST);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MIN_FILTER, bwc.NEAREST);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MIN_FILTER, bwc.LINEAR);
    bwc.texParameteri(bwc.TEXTURE_2D,
        bwc.TEXTURE_WRAP_S, bwc.CLAMP_TO_EDGE);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_WRAP_T, bwc.CLAMP_TO_EDGE);
    bwc.bindTexture(bwc.TEXTURE_2D, null)
}

function xif(cqb, ay, by, tab) {
    var bnd, kde, zkf, alf, blf, clf, tz;
    if (!cqb.cpb.ymd) pkf(cqb);
    bnd = cwc.bif(hhf, cqb, nhf, 6);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += 6;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    ay = ~~ (ay + cqb.tm);
    by = ~~ (by + cqb.um);
    alf[dlf + 0] = alf[dlf + 8] = alf[dlf + 10] = ay;
    alf[dlf + 1] = alf[dlf + 3] = alf[dlf + 11] = by;
    alf[dlf + 2] = alf[dlf + 6] = alf[dlf + 4] = ay + cqb.vm;
    alf[dlf + 5] = alf[dlf + 7] = alf[dlf + 9] = by + cqb.wm;
    clf[dlf + 0] = clf[dlf + 8] = clf[dlf + 10] = cqb.ah;
    clf[dlf + 1] = clf[dlf + 3] = clf[dlf + 11] = cqb.bh;
    clf[dlf + 2] = clf[dlf + 4] = clf[dlf + 6] = cqb.ah + cqb.zh;
    clf[dlf + 5] = clf[dlf + 7] = clf[dlf + 9] = cqb.bh + cqb.ai;
    tz = ((tab * 255.0) << 24) | 0xffffff;
    blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = tz;
}

function lkf(cqb, elf, flf, glf, hlf, ay, by, mu, nu, sab) {
    var bnd, kde, zkf, alf, blf, clf, tz;
    if (!cqb.cpb.ymd) pkf(cqb);
    if (sab == undefined) sab = 0xffffffff;
    bnd = cwc.bif(hhf, cqb, nhf, 6);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += 6;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    ay = ~~ay;
    by = ~~by;
    alf[dlf + 0] = alf[dlf + 8] = alf[dlf + 10] = ay;
    alf[dlf + 1] = alf[dlf + 3] = alf[dlf + 11] = by;
    alf[dlf + 2] = alf[dlf + 6] = alf[dlf + 4] = ay + mu;
    alf[dlf + 5] = alf[dlf + 7] = alf[dlf + 9] = by + nu;
    clf[dlf + 0] = clf[dlf + 8] = clf[dlf + 10] = elf;
    clf[dlf + 1] = clf[dlf + 3] = clf[dlf + 11] = flf;
    clf[dlf + 2] = clf[dlf + 4] = clf[dlf + 6] = elf + glf;
    clf[dlf + 5] = clf[dlf + 7] = clf[dlf + 9] = flf + hlf;
    blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = sab
}

function djf(sab) {
    dwc.pmd(bwc.COLOR_BUFFER_BIT | bwc.DEPTH_BUFFER_BIT, sab | 0xff000000)
}

function xjf(sab,
    tab) {
    sab = ((tab * 255.0) << 24) | zab(sab);
    dwc.pmd(bwc.COLOR_BUFFER_BIT | bwc.DEPTH_BUFFER_BIT, sab)
}

function cjf(ilf) {
    if (cjf.arguments.length > 0) {
        var wab = cjf.arguments[0]
    } else {}
}

function ejf(ay, by, ysb, zsb, fy) {}

function yif(cqb, ay, by, dm, cm, sab, tab) {
    var bnd, kde, zkf, alf, blf, clf, zh, ai;
    if (!cqb.cpb.ymd) pkf(cqb);
    jlf = cqb.xm + ~~ay;
    klf = cqb.ym + ~~by;
    if (cm) {
        ay = (((~~(spd / cqb.xm)) * cqb.xm) + (~~ay) % cqb.xm) - cqb.xm;
        jlf = (((((krb.nrb + (cqb.xm - 1)) / cqb.xm) & 0xffffffff) + 2) * cqb.xm) + ~~ay
    }
    if (dm) {
        by = (((~~(tpd / cqb.ym)) * cqb.ym) + (~~by) % cqb.ym) - cqb.ym;
        klf = (((((krb.orb + (cqb.ym - 1)) / cqb.ym) & 0xffffffff) + 2) * cqb.ym) + ~~by
    }
    ay = ~~ay;
    by = ~~by;
    var tsd = 1;
    var usd = 1;
    var gpb = 0;
    var hpb = 0;
    var lsd = ~~ (tsd * cqb.xm);
    var jbb = ~~ (usd * cqb.ym);
    if ((lsd <= 0) || (jbb <= 0)) return;
    var zl = ~~ ((tab * 255.0) << 24) | (sab & 0xffffff);
    var geb = (-tsd * (gpb - cqb.tm));
    var heb = (-usd * (hpb - cqb.um));
    var llf = tsd * cqb.vm;
    var mlf = usd * cqb.wm;
    var leb = ay + geb;
    var meb = ~~by + heb;
    var nlf = cqb.ah;
    var olf = nlf + cqb.zh;
    var mzb = cqb.bh;
    var efd = cqb.bh + cqb.ai;
    var teb = meb;
    while (leb < jlf) {
        meb = teb;
        var zdb = leb + llf;
        while (meb < klf) {
            bnd = cwc.bif(hhf, cqb,
                nhf, 6);
            dlf = bnd.thf << 1;
            zkf = bnd.thf;
            bnd.thf += 6;
            alf = bnd.qhf;
            blf = bnd.shf;
            clf = bnd.rhf;
            var beb = meb + mlf;
            blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = zl;
            alf[dlf + 0] = (leb);
            alf[dlf + 1] = (meb);
            clf[dlf + 0] = (nlf);
            clf[dlf + 1] = (mzb);
            alf[dlf + 2] = (zdb);
            alf[dlf + 3] = (meb);
            clf[dlf + 2] = (olf);
            clf[dlf + 3] = (mzb);
            alf[dlf + 4] = (zdb);
            alf[dlf + 5] = (beb);
            clf[dlf + 4] = (olf);
            clf[dlf + 5] = (efd);
            alf[dlf + 6] = (zdb);
            alf[dlf + 7] = (beb);
            clf[dlf + 6] = (olf);
            clf[dlf + 7] = (efd);
            alf[dlf + 8] = (leb);
            alf[dlf + 9] = (beb);
            clf[dlf + 8] = (nlf);
            clf[dlf + 9] = (efd);
            alf[dlf + 10] = (leb);
            alf[dlf + 11] = (meb);
            clf[dlf + 10] = (nlf);
            clf[dlf + 11] = (mzb);
            if (!dm) {
                break
            }
            meb = meb + jbb
        }
        if (!cm) {
            break
        }
        leb = leb + lsd
    }
}

function zif(cqb, gpb, hpb, ay, by, tsd, usd, vsd, sab, hz, mcb, ncb, tab) {
    var bnd, kde, zkf, alf, blf, clf;
    if (!cqb.cpb.ymd) pkf(cqb);
    bnd = cwc.bif(hhf, cqb, nhf, 6);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += 6;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    var geb = ~~ (-tsd * (gpb - cqb.tm));
    var heb = ~~ (-usd * (hpb - cqb.um));
    var ieb = ~~ (geb + tsd * (cqb.vm));
    var jeb = ~~ (heb + usd * (cqb.wm));
    if (Math.abs(vsd) < 0.001) {
        alf[dlf + 0] = alf[dlf + 8] = alf[dlf + 10] = ay + geb;
        alf[dlf + 1] = alf[dlf + 3] = alf[dlf + 11] = by + heb;
        alf[dlf + 2] = alf[dlf + 6] = alf[dlf + 4] = ay + ieb;
        alf[dlf + 5] = alf[dlf + 7] = alf[dlf + 9] = by + jeb
    } else {
        var kbb = Math.sin(vsd);
        var mod = Math.cos(vsd);
        var plf = geb * mod;
        var qlf = ieb * mod;
        var rlf = heb * mod;
        var slf = jeb * mod;
        var tlf = geb * kbb;
        var ulf = ieb * kbb;
        var vlf = heb * kbb;
        var wlf = jeb * kbb;
        alf[dlf + 0] = alf[dlf + 10] = ay + plf + vlf;
        alf[dlf + 1] = alf[dlf + 11] = by - tlf + rlf;
        alf[dlf + 4] = alf[dlf + 6] = ay + qlf + wlf;
        alf[dlf + 5] = alf[dlf + 7] = by - ulf + slf;
        alf[dlf + 3] = by - ulf + rlf;
        alf[dlf + 2] = ay + qlf + vlf;
        alf[dlf + 8] = ay + plf + wlf;
        alf[dlf + 9] = by - tlf + slf
    }
    clf[dlf + 0] = clf[dlf + 8] = clf[dlf + 10] = cqb.ah;
    clf[dlf + 1] = clf[dlf + 3] = clf[dlf + 11] = cqb.bh;
    clf[dlf + 2] = clf[dlf + 4] = clf[dlf + 6] = cqb.ah + cqb.zh;
    clf[dlf + 5] = clf[dlf + 7] = clf[dlf + 9] = cqb.bh + cqb.ai;
    var ebc = (tab * 255.0) << 24;
    sab = ebc | (sab & 0xffffff);
    if (hz == undefined) {
        hz = sab;
        mcb = sab;
        ncb = sab;
    } else {
        hz = hz | ebc;
        mcb = mcb | ebc;
        ncb = ncb | ebc
    }
    blf[zkf] = blf[zkf + 5] = sab;
    blf[zkf + 1] = hz;
    blf[zkf + 2] = blf[zkf + 3] = mcb;
    blf[zkf + 4] = ncb
}

function fjf(cqb, nib, oib, ftb, gtb, ay, by, dy, ey, rsb, tab) {
    if (!cqb) return;
    if (!cqb.cpb) return;
    if (!cqb.cpb.complete) return;
    rsb &= 0xffffff;
    rsb |= (xbb * 255) << 24;
    if (nib < cqb.tm) {
        var otd = cqb.tm - nib;
        ay += otd;
        ftb -= otd;
        nib = 0
    } else {
        nib -= cqb.tm;
        ftb -= cqb.tm
    } if (oib < cqb.um) {
        var otd = cqb.um - oib;
        by += otd;
        gtb -= otd;
        oib = 0
    } else {
        oib -= cqb.um;
        gtb -= cqb.um
    } if (ftb > (cqb.vm - nib - cqb.tm)) ftb = cqb.vm - nib - cqb.tm;
    if (gtb > (cqb.wm - oib - cqb.um)) gtb = cqb.wm - oib - cqb.um;
    if (ftb <= 0 || gtb <= 0) return;
    ay = ~~ay;
    by = ~~by;
    lkf(cqb, nib + cqb.ah, oib + cqb.bh, ftb, gtb, ay, by, ftb * dy, gtb * ey, rsb)
}

function ijf(xx, rqb, ay, by, dy, ey, fy, sab, tab) {}

function ljf(acb, bcb, ccb, dcb, ecb) {
    var bnd, kde, zkf, alf, blf, clf;
    acb = ~~acb;
    bcb = ~~bcb;
    ccb = ~~ccb;
    dcb = ~~dcb;
    var xlf = hhf;
    var mfb = 6;
    if (ecb) {
        xlf = khf;
        mfb = 8
    }
    bnd = cwc.bif(xlf, null, nhf, mfb);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += mfb;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    var tz = ~~ ((xbb * 255.0) << 24) | (tbb & 0xffffff);
    if (!ecb) {
        alf[dlf + 10] = alf[dlf + 8] = alf[dlf + 0] = acb;
        alf[dlf + 11] = alf[dlf + 3] = alf[dlf + 1] = bcb;
        alf[dlf + 6] = alf[dlf + 4] = alf[dlf + 2] = ccb;
        alf[dlf + 9] = alf[dlf + 7] = alf[dlf + 5] = dcb;
        blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = tz
    } else {
        blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = blf[zkf + 6] = blf[zkf + 7] = tz;
        alf[dlf + 10] = alf[dlf + 14] = alf[dlf + 12] = alf[dlf + 0] = acb;
        alf[dlf + 15] = alf[dlf + 5] = alf[dlf + 3] = alf[dlf + 1] = bcb;
        alf[dlf + 8] = alf[dlf + 6] = alf[dlf + 4] = alf[dlf + 2] = ccb;
        alf[dlf + 7] = alf[dlf + 9] = alf[dlf + 11] = alf[dlf + 13] = dcb
    }
}

function wif(cxe) {
    var xh = 0;
    nif = 4 * (nbb(64, obb(4, cxe)) / 4);
    for (xh = 0; xh <= nif; xh++) {
        oif[xh] = Math.cos(xh * 2 * Math.PI / nif);
        pif[xh] = Math.sin(xh * 2 * Math.PI / nif)
    }
}

function mjf(acb, bcb, ccb, dcb, gz, hz, ecb) {
    var xh, zh, ai;
    zh = 10;
    ai = 10;
    if (zh > Math.abs(ccb - acb)) zh = Math.abs(ccb - acb);
    if (ai > Math.abs(dcb - bcb)) ai = Math.abs(dcb - bcb);
    ylf = (gz & 0xffffff) | ((xbb * 255.0) << 24);
    zlf = (hz & 0xffffff) | ((xbb * 255.0) << 24);
    var xlf = ihf;
    var mfb = nif + 6;
    if (ecb) {
        xlf = lhf
    }
    var web = (acb + ccb) * 0.5;
    var xeb = (bcb + dcb) * 0.5;
    var amf = Math.abs(ccb - acb) * 0.5 - zh * 0.5;
    var bmf = Math.abs(dcb - bcb) * 0.5 - ai * 0.5;
    bnd = cwc.bif(xlf, null, nhf, mfb);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    alf = bnd.qhf;
    blf = bnd.shf;
    alf[dlf] = web;
    alf[dlf + 1] = xeb;
    blf[zkf] = ylf;
    dlf += 2;
    zkf++;
    for (xh = 0; xh <= nif / 4; xh++) {
        alf[dlf] = (web + amf + zh * oif[xh] / 2);
        alf[dlf + 1] = (xeb + bmf + ai * pif[xh] / 2);
        blf[zkf] = zlf;
        dlf += 2;
        zkf++
    }
    for (xh = nif / 4; xh <= nif / 2; xh++) {
        alf[dlf] = (web - amf + zh * oif[xh] / 2);
        alf[dlf + 1] = (xeb + bmf + ai * pif[xh] / 2);
        blf[zkf] = zlf;
        dlf += 2;
        zkf++
    }
    for (xh = nif / 2; xh <= 3 * (nif / 4); xh++) {
        alf[dlf] = (web - amf + zh * oif[xh] / 2);
        alf[dlf + 1] = (xeb - bmf + ai * pif[xh] / 2);
        blf[zkf] = zlf;
        dlf += 2;
        zkf++
    }
    for (xh = 3 * (nif / 4); xh <= nif; xh++) {
        alf[dlf] = (web + amf + zh * oif[xh] / 2);
        alf[dlf + 1] = (xeb - bmf + ai * pif[xh] / 2);
        blf[zkf] = zlf;
        dlf += 2;
        zkf++
    }
    alf[dlf] = alf[(bnd.thf << 1) + 2];
    alf[dlf + 1] = alf[(bnd.thf << 1) + 3];
    blf[zkf] = zlf;
    if (ecb) {
        var cmf = bnd.thf << 1;
        alf[cmf] = alf[cmf + 2];
        alf[cmf + 1] = alf[cmf + 3];
        blf[bnd.thf] = blf[bnd.thf + 1]
    }
    bnd.thf += mfb
}

function njf(acb, bcb, ccb, dcb, gz, hz, mcb, ncb, ecb) {
    var bnd, kde, zkf, alf, blf, clf;
    acb = ~~acb;
    bcb = ~~bcb;
    ccb = ~~ccb;
    dcb = ~~dcb;
    var ebc = ((xbb * 255.0) << 24);
    gz = zab(gz) | ebc;
    hz = zab(hz) | ebc;
    mcb = zab(mcb) | ebc;
    ncb = zab(ncb) | ebc;
    var xlf = hhf;
    var mfb = 6;
    if (ecb) {
        xlf = khf;
        mfb = 8
    }
    bnd = cwc.bif(xlf, null, nhf, mfb);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += mfb;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    var tz = ~~ ((xbb * 255.0) << 24) | (tbb & 0xffffff);
    if (!ecb) {
        alf[dlf + 10] = alf[dlf + 8] = alf[dlf + 0] = acb;
        alf[dlf + 11] = alf[dlf + 3] = alf[dlf + 1] = bcb;
        alf[dlf + 6] = alf[dlf + 4] = alf[dlf + 2] = ccb;
        alf[dlf + 9] = alf[dlf + 7] = alf[dlf + 5] = dcb;
        blf[zkf + 0] = blf[zkf + 5] = gz;
        blf[zkf + 2] = blf[zkf + 3] = mcb;
        blf[zkf + 1] = hz;
        blf[zkf + 4] = ncb
    } else {
        blf[zkf + 0] = blf[zkf + 7] = gz;
        blf[zkf + 1] = blf[zkf + 2] = hz;
        blf[zkf + 3] = blf[zkf + 4] = mcb;
        blf[zkf + 5] = blf[zkf + 6] = ncb;
        alf[dlf + 10] = alf[dlf + 14] = alf[dlf + 12] = alf[dlf + 0] = acb;
        alf[dlf + 15] = alf[dlf + 5] = alf[dlf + 3] = alf[dlf + 1] = bcb;
        alf[dlf + 8] = alf[dlf + 6] = alf[dlf + 4] = alf[dlf + 2] = ccb;
        alf[dlf + 7] = alf[dlf + 9] = alf[dlf + 11] = alf[dlf + 13] = dcb
    }
}

function ojf(acb, bcb, ccb, dcb, gz, hz, qcb, ecb) {}

function pjf(ay, by) {
    vjf(ay, by, sbb)
}

function vjf(ay, by, sab) {
    var bnd, kde, zkf, alf, blf, clf;
    bnd = cwc.bif(mhf, null, nhf, 1);
    dlf = bnd.thf << 1;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    var tz = ~~ ((xbb * 255.0) << 24) | zab(sab);
    alf[dlf + 0] = ~~ay;
    alf[dlf + 1] = ~~by;
    blf[bnd.thf] = tz;
    bnd.thf++
}

function qjf(ay, by) {
    var dmf = new Uint8Array(16);
    ay = ~~ay;
    by = ~~by;
    cwc.aif();
    dwc.tmd();
    bwc.readPixels(ay, rif - by, 1, 1, bwc.RGBA, bwc.UNSIGNED_BYTE, dmf);
    var tz = dmf[2] << 16 | (dmf[1] << 8) | (dmf[0]);
    dwc.wld();
    return tz
}

function rjf(acb, bcb, ccb, dcb, edb, fdb, ecb) {
    var bnd, kde, zkf, alf, blf, clf;
    bnd = cwc.bif(hhf,
        null, nhf, 3);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    alf = bnd.qhf;
    blf = bnd.shf;
    alf[dlf + 0] = ~~acb;
    alf[dlf + 1] = ~~bcb;
    alf[dlf + 2] = ~~ccb;
    alf[dlf + 3] = ~~dcb;
    alf[dlf + 4] = ~~edb;
    alf[dlf + 5] = ~~fdb;
    blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = ((xbb * 255.0) << 24) | tbb;;
    bnd.thf += 3
}

function sjf(acb, bcb, ccb, dcb, edb, fdb, emf, fmf, gmf, ecb) {
    var bnd, kde, zkf, alf, blf, clf;
    var ebc = ((xbb * 255.0) << 24);
    emf = ebc | zab(emf);
    fmf = ebc | zab(fmf);
    gmf = ebc | zab(gmf);
    bnd = cwc.bif(hhf, null, nhf, 3);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    alf = bnd.qhf;
    blf = bnd.shf;
    alf[dlf + 0] = ~~acb;
    alf[dlf + 1] = ~~bcb;
    alf[dlf + 2] = ~~ccb;
    alf[dlf + 3] = ~~dcb;
    alf[dlf + 4] = ~~edb;
    alf[dlf + 5] = ~~fdb;
    blf[zkf] = emf;
    blf[zkf + 1] = fmf;
    blf[zkf + 2] = gmf;
    bnd.thf += 3
}

function tjf(acb, bcb, ccb, dcb, gz, hz, ecb) {
    var web = (acb + ccb) / 2;
    var xeb = (bcb + dcb) / 2;
    var amf = Math.abs((acb - ccb) / 2);
    var bmf = Math.abs((bcb - dcb) / 2);
    var ebc = ((xbb * 255.0) << 24);
    gz = ebc | zab(gz);
    hz = ebc | zab(hz);
    var hmf;
    var mzb;
    if (ecb) {
        bnd = cwc.bif(lhf, null, nhf, nif + 1);
        dlf = bnd.thf << 1;
        zkf = bnd.thf;
        alf = bnd.qhf;
        blf = bnd.shf;
        bnd.thf += nif + 1;
        for (var xh = 0; xh <= (nif + 1); xh++) {
            alf[dlf] = (web + amf * oif[xh]);
            alf[dlf + 1] = (xeb + bmf * pif[xh]);
            blf[zkf] = hz;
            dlf += 2;
            zkf++
        }
    } else {
        bnd = cwc.bif(hhf, null, nhf, (nif * 3));
        dlf = bnd.thf << 1;
        zkf = bnd.thf;
        alf = bnd.qhf;
        blf = bnd.shf;
        bnd.thf += (nif * 3);
        for (var xh = 0; xh <= nif; xh++) {
            alf[dlf + 0] = web;
            alf[dlf + 1] = xeb;
            blf[zkf] = gz;
            alf[dlf + 2] = (web + amf * oif[xh]);
            alf[dlf + 3] = (xeb + bmf * pif[xh]);
            blf[zkf + 1] = hz;
            alf[dlf + 4] = (web + amf * oif[xh + 1]);
            alf[dlf + 5] = (xeb + bmf * pif[xh + 1]);
            blf[zkf + 2] = hz;
            dlf += 6;
            zkf += 3
        }
    }
}

function ujf(ay, by, afb, gz, hz, ecb) {
    tjf(ay - afb, by - afb, ay + afb, by + afb, gz, hz, ecb)
}

function wjf(acb, bcb, ccb, dcb, mu, gz, hz) {
    var ebc = ((xbb * 255.0) << 24);
    gz = ebc | zab(gz);
    hz = ebc | zab(hz);
    bnd = cwc.bif(ihf, null, nhf, 4);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    alf = bnd.qhf;
    blf = bnd.shf;
    bnd.thf += 4;
    var leb = (ccb - acb);
    var meb = (dcb - bcb);
    var vu = Math.sqrt((leb * leb) + (meb * meb));
    if (vu < 0.0001) return;
    leb = 0.5 * mu * leb / vu;
    meb = 0.5 * mu * meb / vu;
    alf[dlf] = (acb - meb);
    alf[dlf + 1] = (bcb + leb);
    blf[zkf] = gz;
    alf[dlf + 2] = (ccb - meb);
    alf[dlf + 3] = (dcb + leb);
    blf[zkf + 1] = hz;
    alf[dlf + 4] = (ccb + meb);
    alf[dlf + 5] = (dcb - leb);
    blf[zkf + 2] = hz;
    alf[dlf + 6] = (acb + meb);
    alf[dlf + 7] = (bcb - leb);
    blf[zkf + 3] = gz
}

function imf(cqb, mu, nu) {
    var jmf = bwc.createFramebuffer();
    bwc.bindFramebuffer(bwc.FRAMEBUFFER, jmf);
    jmf.width = mu;
    jmf.height = nu;
    cqb.kmf = jmf;
    lmf = bwc.createTexture();
    bwc.bindTexture(bwc.TEXTURE_2D, lmf);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MAG_FILTER, bwc.NEAREST);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MIN_FILTER, bwc.NEAREST);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_MIN_FILTER, bwc.LINEAR);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_WRAP_S, bwc.CLAMP_TO_EDGE);
    bwc.texParameteri(bwc.TEXTURE_2D, bwc.TEXTURE_WRAP_T, bwc.CLAMP_TO_EDGE);
    cqb.cpb.ymd = lmf;
    bwc.texImage2D(bwc.TEXTURE_2D, 0, bwc.RGBA, jmf.width, jmf.height, 0, bwc.RGBA, bwc.UNSIGNED_BYTE, null);
    var mmf = bwc.createRenderbuffer();
    bwc.bindRenderbuffer(bwc.RENDERBUFFER, mmf);
    bwc.renderbufferStorage(bwc.RENDERBUFFER, bwc.DEPTH_COMPONENT16, jmf.width, jmf.height);
    bwc.framebufferTexture2D(bwc.FRAMEBUFFER, bwc.COLOR_ATTACHMENT0, bwc.TEXTURE_2D, lmf, 0);
    bwc.framebufferRenderbuffer(bwc.FRAMEBUFFER, bwc.nmf, bwc.RENDERBUFFER, mmf);
    cqb.mmf = mmf;
    bwc.bindTexture(bwc.TEXTURE_2D, null);
    bwc.bindRenderbuffer(bwc.RENDERBUFFER,
        null);
    bwc.bindFramebuffer(bwc.FRAMEBUFFER, null)
}

function yjf(mu, nu) {
    var yob = new zob();
    yob.cpb = document.createElement("surf");
    yob.pu = mu;
    yob.qu = nu;
    yob.cpb.width = 8;
    yob.cpb.height = 8;
    yob.cpb.pu = mu;
    yob.cpb.qu = nu;
    imf(yob, mu, nu);
    yob.ah = 0;
    yob.bh = 0;
    yob.zh = mu;
    yob.ai = nu;
    yob.tm = 0;
    yob.um = 0;
    yob.vm = yob.zh;
    yob.wm = yob.ai;
    yob.xm = yob.zh;
    yob.ym = yob.ai;
    yob.zm = ipb.zu(yob);
    yob.wqb = yob;
    yob.cpb.complete = !0;
    yob.xqb = [];
    yob.mfb = 0;
    yob.yqb = 4;
    yob.zqb = 0;
    yob.arb = null;
    yob.rob = yob.cpb;
    return yob.zm
}

function zjf(bv) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        cwc.aif();
        qif = uqb.pu;
        rif = uqb.qu;
        hrb.left = irb.left;
        hrb.top = irb.top;
        hrb.ggb = irb.ggb;
        hrb.bottom = irb.bottom;
        irb.left = 0;
        irb.top = 0;
        irb.ggb = uqb.pu;
        irb.bottom = uqb.qu;
        jrb.su(krb);
        krb.lrb = 0;
        krb.mrb = 0;
        krb.nrb = uqb.pu;
        krb.orb = uqb.qu;
        krb.prb = 0;
        krb.qrb = 0;
        krb.rrb = uqb.pu;
        krb.srb = uqb.qu;
        krb.trb = 0;
        krb.urb = 0;
        krb.vrb = uqb.pu;
        krb.wrb = uqb.qu;
        krb.xrb = krb.trb + krb.vrb;
        krb.yrb = krb.urb + krb.wrb;
        iwc = uqb.kmf;
        dwc.rmd(uqb.kmf);
        qxc = -1;
        bqd(krb.lrb, krb.mrb, krb.nrb, krb.orb, krb.kcf);
        erb = !0
    }
}

function akf() {
    cwc.aif();
    if (erb) {
        irb.left = hrb.left;
        irb.ggb = hrb.ggb;
        irb.top = hrb.top;
        irb.bottom = hrb.bottom;
        krb.su(jrb)
    }
    qxc = 1;
    iwc = null;
    dwc.rmd(null);
    bqd(krb.lrb, krb.mrb, krb.nrb, krb.orb, krb.kcf);
    qif = bwc.viewportWidth;
    rif = bwc.viewportHeight
}

function bkf(bv) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        bwc.deleteFramebuffer(uqb.kmf);
        bwc.deleteRenderbuffer(uqb.mmf);
        bwc.deleteTexture(uqb.cpb.ymd);
        uqb.cpb.ymd = undefined;
        ipb.jv(bv)
    }
}

function ckf(bv, ay, by) {
    var uqb = ipb.ev(bv);
    if (uqb != null) {
        var dmf = new Uint8Array(16);
        ay = ~~ay;
        by = ~~by;
        cwc.aif();
        dwc.tmd();
        bwc.bindFramebuffer(bwc.FRAMEBUFFER,
            uqb.kmf);
        bwc.readPixels(ay, by, 1, 1, bwc.RGBA, bwc.UNSIGNED_BYTE, dmf);
        bwc.bindFramebuffer(bwc.FRAMEBUFFER, iwc);
        var tz = dmf[2] | (dmf[1] << 8) | (dmf[1] << 16);
        dwc.wld();
        return tz
    }
    return 0x00000000
}

function dkf(bv, ay, by) {
    var uqb = ipb.ev(bv);
    if (!uqb) return;
    ay = ~~ay;
    by = ~~by;
    uab.xob(uqb, 0, 0, uqb.pu, uqb.qu, ay, by, uqb.pu, uqb.qu, 0xffffffff)
}

function ekf(tsb, ay, by, usb) {
    ix("surface_copy() (WebGL)");
}

function fkf(tsb, ay, by, usb, ysb, zsb, atb, btb) {
    var vsb = ipb.ev(tsb);
    var wsb = ipb.ev(usb);
    if (vsb != null && wsb != null) {}
    ix("surface_copy_part() (WebGL)")
}

function ikf(rjb, ay, by, mu, nu, pob, qob) {
    ix("sprite_add_from_screen() (WebGL)");
    return -1
}

function hkf(bv, ay, by, mu, nu, pob, qob, gpb, hpb) {
    ix("sprite_create_from_surface() (WebGL)");
    return -1
}

function gkf(rjb, bv, ay, by, mu, nu, pob, qob) {
    ix("sprite_add_from_surface() (WebGL)");
    return -1
}

function jkf(bv) {
    var ejb = fjb.ev(bv);
    if (ejb) {
        var bnd, kde, zkf, alf, blf, clf, acb, bcb, ccb, dcb;
        var gjb = ~~ ((xbb * 255.0) << 24) | (0xff0000 & 0xffffff);
        var hjb = ~~ ((xbb * 255.0) << 24) | (0x00ff00 & 0xffffff);
        var mfb = 6 * (ejb.wib * ejb.vib);
        bnd = cwc.bif(hhf, null, nhf,
            mfb);
        dlf = bnd.thf << 1;
        zkf = bnd.thf;
        bnd.thf += mfb;
        alf = bnd.qhf;
        blf = bnd.shf;
        for (var bh = 0; bh < ejb.wib; bh++) {
            for (var ah = 0; ah < ejb.vib; ah++) {
                var tz = hjb;
                if (ejb.zib[bh + ejb.vib * ah] < 0) tz = gjb;
                acb = ~~ (ejb.tib + ah * ejb.xib);
                bcb = ~~ (ejb.uib + bh * ejb.yib);
                ccb = acb + ejb.xib;
                dcb = bcb + ejb.yib;
                alf[dlf + 10] = alf[dlf + 8] = alf[dlf + 0] = acb;
                alf[dlf + 11] = alf[dlf + 3] = alf[dlf + 1] = bcb;
                alf[dlf + 6] = alf[dlf + 4] = alf[dlf + 2] = ccb;
                alf[dlf + 9] = alf[dlf + 7] = alf[dlf + 5] = dcb;
                blf[zkf] = blf[zkf + 1] = blf[zkf + 2] = blf[zkf + 3] = blf[zkf + 4] = blf[zkf + 5] = tz;
                dlf += 12;
                zkf += 6
            }
        }
        return
    }
    kt("Error: invalid mp_grid ID (mp_grid_draw)")
}

function kkf(bv, tnb, unb, onb) {
    var jnb = knb.wg[bv];
    if (!jnb) return;
    var bnd, kde, zkf, alf, blf, clf;
    var tz = ~~ ((xbb * 255.0) << 24) | (tbb & 0xffffff);
    var leb, meb, vnb;
    var wnb = 0;
    var xnb = jnb.ynb(0);
    if (!onb) {
        tnb = tnb - xnb.ah;
        unb = unb - xnb.bh
    } else {
        tnb = 0;
        unb = 0
    }
    wnb = dw(jnb.length / 4.0);
    if (wnb == 0) return;
    var mfb = wnb * 2;
    bnd = cwc.bif(khf, null, nhf, mfb);
    dlf = bnd.thf << 1;
    zkf = bnd.thf;
    bnd.thf += mfb;
    alf = bnd.qhf;
    blf = bnd.shf;
    clf = bnd.rhf;
    for (var xh = 0; xh < wnb; xh++) {
        xnb = jnb.ynb(xh / wnb);
        acb = ~~ (tnb + xnb.ah);
        bcb = ~~ (unb + xnb.bh);
        xnb = jnb.ynb((xh + 1) / wnb);
        ccb = ~~ (tnb + xnb.ah);
        dcb = ~~ (unb + xnb.bh);
        blf[zkf] = blf[zkf + 1] = tz;
        alf[dlf + 0] = acb;
        alf[dlf + 1] = bcb;
        alf[dlf + 2] = ccb;
        alf[dlf + 3] = dcb;
        dlf += 4;
        zkf += 2
    }
}
var omf = 0;
var pmf = 100;
var du = null;
var qmf, rmf, smf, tmf, umf, vmf, wmf;
var uab = null;
var bsb = null;
var xmf = 0;
var ymf = 0;
var zmf = 0;
var anf = 0;
var bnf = 0;
var bx = 0;
var cnf = 0;
var zwb = 60;
var dnf;
window.onload = enf;
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fnf,
        ax) {
        dnf = window.setTimeout(fnf, 1000 / 60)
    }
})();

function gnf() {
    var yh = document.getElementById(sob);
    var bh = document.createElement('textarea');
    bh.setAttribute("id", "debug_console");
    bh.setAttribute("cols", "100");
    bh.setAttribute("rows", "20");
    bh.style.display = "none";
    var hnf = yh.parentNode;
    hnf.insertBefore(bh, yh.nextSibling);
    oub = 0x71562
}

function ptb(lqd, kqd) {
    kqd.left = 0;
    kqd.top = 0;
    syd = lqd;
    if (syd.offsetParent) {
        while (syd != null) {
            kqd.left += syd.offsetLeft;
            kqd.top += syd.offsetTop;
            syd = syd.offsetParent
        }
    }
    kqd.ggb = kqd.left + ntb;
    kqd.bottom = kqd.top + otb;
}

function inf(zud) {
    uvc = [];
    vvc = [];
    wvc = [];
    lxc = 0;
    var jnf = zud.search;
    var knf = zud.protocol + "//" + zud.host + zud.pathname;
    vvc[0] = knf;
    wvc[0] = null;
    if (jnf[0] == "?") jnf = jnf.substring(1, jnf.length);
    var bm = epd = 0;
    var lnf = "";
    var uue = null;
    while (bm < jnf.length) {
        var yh = jnf[bm];
        if (yh == "&") {
            if (lnf != "") {
                if (epd != bm) uue = jnf.substring(epd, bm);
                vvc[vvc.length] = lnf;
                wvc[wvc.length] = uue;
                uvc[lnf] = uue;
                lxc++;
                lnf = "";
                uue = null
            }
            epd = bm + 1
        } else if (yh == "=") {
            lnf = jnf.substring(epd, bm);
            uue = null;
            epd = bm + 1
        }
        bm++
    }
    if (lnf != "") {
        if (epd != bm) uue = jnf.substring(epd,
            bm);
        vvc[vvc.length] = lnf;
        wvc[wvc.length] = uue;
        uvc[lnf] = uue;
        lxc++;
        lnf = uue = ""
    }
}

function sae() {
    qmf = du.style.position;
    rmf = du.style.left;
    smf = du.style.top;
    tmf = du.style;
    umf = du.parentNode;
    vmf = du.nextSibling;
    wmf = !1;
    if (umf == document.body) {
        wmf = !0
    }
}

function enf() {
    if (!document.getElementById || !document.createElement) return;
    du = document.getElementById(sob);
    uab = null;
    if (!du) return;
    inf(window.location);
    bvc = ag;
    twc = !1;
    bwc = null;
    if ((bvc.bn.qn) && (bvc.bn.qn != 0)) {
        var mnf = sif(du);
        if (mnf) {
            uab = bwc;
        } else {
            if (bvc.bn.qn == 1) {
                twc = !0
            }
            uab = du.getContext('2d')
        }
    } else {
        uab = du.getContext('2d')
    }
    bsb = uab;
    nnf = bwc;
    gnf();
    sae();
    uob(uab);
    document.body.oncontextmenu = function () {
        return !1
    };
    ltb = du.width;
    mtb = du.height;
    ntb = ltb;
    otb = mtb;
    qtb = new mpb();
    ptb(du, qtb);
    rtb = qtb.top;
    stb = qtb.left;
    ttb = qtb.ggb;
    utb = qtb.bottom;
    cu();
    xad = document.getElementById('GM4HTML5_loadingscreen');
    if (bvc.bn && bvc.bn.cn) {
        yw = !0;
        hae(document.getElementById('debug_console'))
    }
    if (bwc) dx("WebGL Enabled!");
    yad();
    fvb();
    if (twc) {
        xmf = -2
    } else {
        if (yw) io.bld = bvc.bn.cn;
        scd = "";
        if (bvc.bn) {
            if (bvc.bn.onf) {
                scd = bvc.bn.onf
            }
        }
        if (scd != "") {
            pcd(bvc);
            xmf = -1
        } else {
            qcd(bvc);
            xmf = 0
        }
    }
    requestAnimFrame(pnf)
}

function pnf() {
    requestAnimFrame(pnf);
    switch (xmf) {
    case -2:
        {
            qnf(uab, ntb, otb);
            break
        }
    case -1:
        if (uad == vad) {
            qcd(bvc);
            xmf = 0;
            scd(uab, ntb, otb, sad, tad, xad)
        }
        break;
    case 0:
        if (tad >= sad) {
            tad = sad;
            xmf = 1
        }
        xcd();
        scd(uab, ntb, otb, sad, tad, xad);
        break;
    case 1:
        ldd(bvc);
        xmf = 2;
        break;
    case 2:
        rnf();
        xmf = 3;
        break;
    case 3:
        snf();
        break
    }
}

function tnf(ah, bh, zl, xw) {
    uab.fillStyle = zl;
    uab.lineStyle = zl;
    uab.font = "14px Verdana";;
    uab.textAlign = "center";
    uab.fillText(xw,
        ah, bh);
    uab.textAlign = "left"
}

function qnf(fqd, ftb, gtb) {
    uab.fillStyle = yab(0x151515, 1.0);
    uab.fillRect(0, 0, ftb, gtb);
    tnf(ftb / 2, (gtb / 2), yab(0x8d8f90, 1.0), "WebGL is Required to run this application.")
}

function tcd(uab, ftb, gtb, unf, vnf, wnf) {
    if (bwc) return;
    if (wnf) {
        qab(0, 0);
        uab.drawImage(xad, 0, 0, ftb, gtb)
    } else {
        var xnf = (ftb / 100) * 50;
        var ynf = 2;
        var ah = (ftb - xnf) / 2;
        var bh = 10 + (gtb - ynf) / 2;
        uab.fillStyle = yab(0x151515, 1.0);
        uab.fillRect(0, 0, ftb, gtb);
        if (vnf != 0) {
            var zh = (xnf / unf) * vnf;
            uab.fillStyle = yab(0x404040, 1.0);
            uab.fillRect(ah,
                bh, xnf, ynf);
            uab.fillStyle = yab(0x8d8f90, 1.0);
            uab.fillRect(ah, bh, zh, ynf)
        }
        tnf(ftb / 2, (gtb / 2), yab(0x8d8f90, 1.0), "Volleymal")
    }
}

function znf(jdf) {
    dvc.ajb();
    var aof = jdf.yaf.am;
    for (var xh = 0; xh < aof.length; xh++) {
        dvc.zu(aof[xh]);
        var zhd = dvc.ev(xh);
        op(global, "__background_visible__", xh, zhd.fi);
        op(global, "__background_foreground__", xh, zhd.ohd);
        op(global, "__background_index__", xh, zhd.bm);
        op(global, "__background_x__", xh, zhd.ah);
        op(global, "__background_y__", xh, zhd.bh);
        op(global, "__background_width__", xh, zhd.width);
        op(global,
            "__background_height__", xh, zhd.height);
        op(global, "__background_htiled__", xh, zhd.phd);
        op(global, "__background_vtiled__", xh, zhd.qhd);
        op(global, "__background_xscale__", xh, zhd.vhd);
        op(global, "__background_yscale__", xh, zhd.whd);
        op(global, "__background_vspeed__", xh, zhd.shd);
        op(global, "__background_hspeed__", xh, zhd.rhd);
        op(global, "__background_blend__", xh, zhd.uhd);
        op(global, "__background_alpha__", xh, zhd.thd)
    }
    io.oid = jdf.oaf
}

function bof(cxe, cof) {
    var dof = ufb;
    pac.mab(edc, 0);
    var uvd = [];
    if (dof != null) {
        var xh;
        for (xh = dof.bgb.length - 1; xh >= 0; xh--) {
            var jfb = dof.bgb.ev(xh);
            if (jfb.uvd === !0) {
                uvd[uvd.length] = jfb;
                jfb.eof = !0
            }
        }
        for (xh = uvd.length - 1; xh >= 0; xh--) {
            dof.bgb.ivb(uvd[xh])
        }
        if (dof.maf === !1) {
            dof.ccf()
        }
    }
    aob = -1;
    tt.ajb();
    exe();
    ufb = avc.ev(cxe);
    var fof = ufb.maf;
    if (fof === !0 && ufb.naf === !1) {
        fof = !1
    }
    if (fof === !1) {
        ufb.udd(ufb.yaf);
        ufb.jcf()
    }
    io.cid = ufb.hm;
    ufb.gcf();
    gof();
    znf(ufb);
    if (fof === !1) {
        ufb.ccf();
        with(ufb) {
            ufb.ccf();
            bgb = new bre();
            var hof = yaf.gm;
            for (var vu = 0; vu < yaf.gm.length; vu++) {
                var gdd = !1;
                var iof = yaf.gm[vu];
                for (var nlf = uvd.length - 1; nlf >= 0; nlf--) {
                    if (iof.hm == uvd[nlf].hm) {
                        gdd = !0;
                        break
                    }
                }
                if (!gdd) {
                    var ijb = ufb.uwd(iof.ah, iof.bh, iof.hm, iof.bm);
                    if (iof.uh != undefined) ijb.fq = iof.uh;
                    if (iof.vh != undefined) ijb.ds = iof.vh;
                    if (iof.zl != undefined) ijb.awd = iof.zl;
                    ijb.eof = !1
                }
            }
            var hof = yaf.gm;
            for (var vu = 0; vu < yaf.gm.length; vu++) {
                var iof = yaf.gm[vu];
                var ijb = pac.ev(iof.hm);
                if (ijb.eof == !1) {
                    ijb.eof = !0;
                    if (!uwc) {
                        if (iof.acf) iof.acf(ijb);
                        ijb.mab(wfb, 0, ijb, ijb)
                    } else {
                        ijb.mab(wfb, 0, ijb, ijb);
                        if (iof.acf) iof.acf(ijb)
                    }
                }
            }
        }
    }
    for (var nlf = 0; nlf < uvd.length; nlf++) {
        ufb.bgb.zu(uvd[nlf])
    }
    if (cof) {
        pac.mab(bdc, 0)
    }
    if ((fof == !1) && (ufb.saf != null)) {
        jof = new rzc();
        ufb.saf(jof);
        jof = null
    }
    pac.mab(ddc, 0);
    ufb.naf = !0
}

function kof(lof) {
    bof(lof, !1)
}

function rnf() {
    io.fid = 0;
    io.gid = -1;
    ywc = 0;
    zwc = -1;
    axc = 0;
    bxc = 0;
    bof(avc.wdd(0).hm, !0);
    ymf = zmf = evb();
    bnf = ~~ (ymf / 1000000) + 4;
    io.jkd = zwb
}

function mof() {
    ivc = [];
    jvc = [];
    yvb = -1;
    xvb = -1;
    wvb = 0;
    ufb.bgb.ajb();
    ufb.taf.ajb();
    var cgb = zy.yqe;
    for (var xh in cgb) {
        var hfb = cgb[xh];
        hfb.hac.ajb();
        hfb.az.ajb()
    }
    pac.ajb()
}

function nof() {
    tt.wde()
}

function oof() {
    if (ufb.bgb.cre >= 0) ufb.bgb.xde();
    if (ufb.pwd.length > 0) ufb.gdf();
}

function pof() {
    tt.qbe();
    pac.dzd();
    zvc.ehd(ytc);
    pac.mab(zcc, 0);
    oof();
    if (aob != -1) return;
    evc.ehd();
    oof();
    if (aob != -1) return;
    tac();
    oof();
    if (aob != -1) return;
    dbc();
    oof();
    if (aob != -1) return;
    vde();
    oof();
    if (aob != -1) return;
    hzb();
    oof();
    if (aob != -1) return;
    zvc.ehd(ztc);
    pac.mab(ycc, 0);
    oof();
    if (aob != -1) return;
    pac.ezd();
    dyb();
    oof();
    if (aob != -1) return;
    lyb();
    oof();
    if (aob != -1) return;
    zvc.ehd(auc);
    pac.mab(adc, 0);
    oof();
    if (aob != -1) return;
    xxe();
    if (ufb != null) {
        ufb.cdf();
        ufb.dye();
        oof()
    }
    ufb.mcf();
    pac.fzd();
    oof();
    nof()
}

function gof() {
    var left, ggb, top, bottom;
    left = 0;
    ggb = -999999;
    top = 0;
    bottom = -999999;
    with(ufb) {
        if (jzb) {
            for (xh in lzb) {
                nzb = lzb[xh];
                if (nzb.fi && nzb.ozb == -1) {
                    if (ggb < nzb.prb + nzb.rrb) ggb = nzb.prb + nzb.rrb;
                    if (bottom < nzb.qrb + nzb.srb) bottom = nzb.qrb + nzb.srb
                }
            }
        } else {
            left = 0;
            ggb = ufb.kaf;
            top = 0;
            bottom = ufb.laf
        }
    }
    xtb = ntb;
    ytb = otb;
    rpd = ntb / (ggb - left);
    aub = otb / (bottom - top);
    fvc.rrb = xtb / rpd;
    fvc.srb = ytb / aub;
    fvc.nrb = xtb / rpd;
    fvc.orb = ytb / aub;
    var qz = new mpb();
    qz.left = left;
    qz.top = top;
    qz.ggb = ggb;
    qz.bottom = bottom;
    irb = qz
}

function cld() {
    var zh = 640;
    if (typeof (window.innerWidth) == 'number') {
        zh = window.innerWidth
    } else if (document.documentElement && document.documentElement.clientWidth) {
        zh = document.documentElement.clientWidth
    } else if (document.body && document.body.clientWidth) {
        zh = document.body.clientWidth
    }
    return zh
}

function dld() {
    var ai = 480;
    if (typeof (window.innerHeight) == 'number') {
        ai = window.innerHeight
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ai = document.documentElement.clientHeight
    } else if (document.body && document.body.clientHeight) {
        ai = document.body.clientHeight
    }
    return ai;
}

function qof() {
    ptb(du, qtb);
    rtb = qtb.top;
    stb = qtb.left;
    ttb = qtb.ggb;
    utb = qtb.bottom;
    if (!ag.gn) {
        uab.mozImageSmoothingEnabled = !1
    }
    var zh = cld();
    var ai = dld();
    if ((pwc) && (!wwc)) {
        if ((vtb != zh) || (wtb != ai)) {
            wwc = !0;
            pwc = !1
        }
    }
    if (wwc) {
        wwc = !1;
        if (pwc) {
            zh = ltb;
            ai = mtb;
            pwc = !1;
            du.style.position = qmf;
            du.style.left = rmf;
            du.style.top = smf;
            du.style = tmf;
            if (!wmf) {
                if (du.parentNode != umf) {
                    umf.insertBefore(du, vmf)
                }
            }
        } else {
            pwc = !0;
            jp(0, 0);
            if (!wmf) {
                if (du.parentNode == umf) {
                    umf.removeChild(du);
                    document.body.insertBefore(du, null)
                }
            }
        }
        du.width = zh;
        du.height = ai;
        ntb = du.width;
        otb = du.height;
        stb = du.offsetLeft;
        ttb = stb + ntb;
        rtb = du.offsetTop;
        utb = stb + otb;
        vtb = ntb;
        wtb = otb;
        xtb = zh;
        ytb = rof = 1;
        aub = 1;
        gof()
    }
}
var sof = 0;
var tof = 0.0;

function snf() {
    zmf = evb();
    if (zmf < ymf || ((zmf - ymf) > 2000000)) {
        ymf = zmf;
        bnf = ymf
    }
    if (ufb.ywb() <= 0) {
        ufb.dbf(1)
    }
    bx = ~~ (zmf - ymf);
    tof = ~~ (1000000.0 / ufb.ywb()) - bx;
    anf = max(0, tof);
    anf = min(anf, 1000000.0);
    var uof = 1000000.0 / ufb.ywb();
    if (anf > 14000) return;
    ymf = zmf + anf;
    if (ymf < bnf) {
        bnf = ymf
    }
    if (~~ymf > (bnf + 1000000)) {
        zwb = cnf;
        cnf = 0;
        bnf = ~~ymf;
        ymf = 0
    }
    cnf++;
    io.jkd = zwb;
    if (!owc) {
        nff = 0;
        qof();
        if (ufb === null) {
            fvc.xrb = fvc.vrb = fvc.rrb = fvc.nrb = ntb;
            fvc.yrb = fvc.wrb = fvc.srb = fvc.orb = otb
        } else {
            gof()
        } if (aob == -1) crd(); {
            pof()
        }
        if (sof < nff) sof = nff;
        if (aob < 0) erd();
        switch (aob) {
        case -1:
            break;;
        case bob:
        case lcc:
            vof = !1;
            return;
        case jcc:
            mof();
            rnf();
            break;
        case kcc:
            ldd();
            break;
        default:
            kof(aob)
        }
    }
}