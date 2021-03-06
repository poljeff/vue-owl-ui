const Logo = {
  name: 'Logo',
  props: {
    size: {
      type: [Number, String],
      default: 20,
    },
  },

  computed: {
    sSize() {
      const { size } = this
      let width, height

      if (size.includes && size.includes('x')) {
        ;[width, height] = size.split('x')
      } else {
        width = height = size
      }

      return {
        width, height,
      }
    },
  },

  render(h) {
    const { sSize } = this
    return (
      <svg width={sSize.width} height={sSize.height} version="1.0" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,128.000000) scale(0.050000,-0.050000)" stroke="none">
          <path d="M1140 2537 c-1391 -109 -1526 -2211 -160 -2496 1343 -281 2157 1416
          1081 2252 -111 85 -117 95 -107 159 l11 68 -82 0 c-60 0 -83 -8 -83 -30 0 -37
          -8 -37 -116 1 -122 42 -346 61 -544 46z m344 -239 c212 -45 301 -96 289 -166
          -6 -34 -16 -143 -23 -242 l-11 -180 285 -144 286 -143 6 -112 c50 -922 -1107
          -1421 -1766 -761 -721 720 -60 1956 934 1748z m700 -500 c107 -184 100 -190
          -104 -83 l-182 95 11 70 c6 39 11 106 12 150 l0 80 106 -112 c58 -62 129 -152
          157 -200z" />
          <path d="M930 2172 c-435 -205 -329 -839 140 -839 345 0 591 357 452 657 -98
          212 -359 292 -592 182z m382 -114 c84 -51 136 -171 123 -287 -46 -412 -655
          -430 -655 -20 0 275 298 447 532 307z" />
          <path d="M1021 1856 c-49 -52 -52 -92 -10 -152 44 -63 135 -59 188 9 97 123
          -71 258 -178 143z" />
          <path d="M1670 1541 c-524 -127 -499 -890 30 -887 546 3 684 765 160 884 -101
          24 -106 24 -190 3z m290 -180 c271 -212 51 -604 -327 -584 -300 16 -279 568
          24 635 29 6 62 14 73 18 49 16 166 -19 230 -69z" />
          <path d="M1653 1183 c-69 -76 -17 -203 84 -203 57 0 123 68 123 127 0 99 -140
          151 -207 76z" />
          <path d="M882 1077 c-50 -148 -53 -143 107 -153 l128 -8 11 67 c27 165 29 160
          -68 189 -131 40 -133 39 -178 -95z" />
        </g>
      </svg>
    )
  },
}

module.exports = Logo
