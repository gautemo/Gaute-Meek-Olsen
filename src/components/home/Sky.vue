<script setup lang="ts">
import { useMouseInElement, useThrottle } from '@vueuse/core'
import { computed, ref } from 'vue'

const sky = ref(null)
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(sky, { touch: false })

const move = useThrottle(
  computed(() => {
    const midX = elementWidth.value / 2
    const midY = elementHeight.value / 2
    const x = (midX - elementX.value) / 150
    const y = (midY - elementY.value) / 150
    return { x, y }
  }),
  45
)
</script>

<template>
  <div class="container" ref="sky">
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMinYMin slice"
      :viewBox="`0 0 211.667 158.75`"
    >
      <defs>
        <path
          id="reuse-0"
          d="M91.533 107.41q.455 0 .843.211.387.212.64.569.145-.042.29-.067.144-.031.294-.031.367 0 .693.144.325.14.568.388.243.243.383.568.14.326.14.698v.046q.325.197.506.533.18.33.18.728 0 .29-.103.548-.103.258-.284.46-.176.201-.424.33-.248.125-.532.156h-6.175q-.331 0-.62-.124-.29-.13-.507-.352-.217-.222-.346-.516-.124-.3-.124-.636 0-.33.124-.625.129-.295.346-.512.222-.222.517-.351.294-.13.63-.135.217-.248.507-.387.289-.14.62-.14h.02q.062-.32.228-.594.165-.28.403-.48.243-.202.542-.316.305-.114.641-.114z"
        />
        <path
          id="reuse-1"
          d="M31.549 107.735q-1.365.372-2.44 1.406-1.033 1.033-1.446 2.439-.372-1.364-1.365-2.356-1.075-1.117-2.521-1.489 1.405-.372 2.439-1.405 1.075-1.034 1.447-2.44.413 1.447 1.447 2.44 1.074 1.033 2.439 1.405z"
        />
      </defs>
      <g>
        <g fill="#f9f9f9" fill-opacity=".699" class="cloud-small">
          <g>
            <use xlink:href="#reuse-0" transform="translate(-213.339 -313.179) scale(3.70813)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="translate(-296.637 -322.185) scale(3.70813)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="translate(-242.666 -358.775) scale(3.70813)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="translate(-256.997 -384.389) scale(3.70813)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="translate(-179.243 -369.448) scale(3.70813)" />
          </g>
        </g>
        <g fill="#f9f9f9" fill-opacity=".699" class="cloud-big">
          <g>
            <use xlink:href="#reuse-0" transform="matrix(5.31372 0 0 5.31372 -313.279 -501.356)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="matrix(5.31372 0 0 5.31372 -346.82 -538.25)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="matrix(5.31372 0 0 5.31372 -406.889 -523.005)" />
          </g>
          <g>
            <use xlink:href="#reuse-0" transform="matrix(5.31372 0 0 5.31372 -455.675 -545.264)" />
          </g>
        </g>
        <g fill="#fe0" fill-opacity=".671" class="star-big">
          <use xlink:href="#reuse-1" transform="translate(3.549 -68.582) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(32.804 -77.102) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(86.424 -67.015) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(141.372 -68.077) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(168.447 -48.964) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(90.14 -26.667) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(132.347 -26.401) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(160.75 -30.649) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(50.058 .409) scale(.83885)" />
          <use xlink:href="#reuse-1" transform="translate(7.056 -8.351) scale(.83885)" />
        </g>
        <g fill="#fe0" fill-opacity=".671" class="star-medium">
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 108.844 55.535)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 85.212 27.233)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 31.585 -.282)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 62.189 -3.37)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 114.973 -11.513)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 147.542 -40.432)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 174.214 -30.886)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 184.603 10.948)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 130.976 33.129)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 152.876 48.852)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 177.303 49.133)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 28.216 45.763)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 1.263 38.183)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 -2.668 -9.267)" />
          <use xlink:href="#reuse-1" transform="matrix(.48214 0 0 .48214 48.431 69.067)" />
        </g>
        <g fill="#fe0" fill-opacity=".671" class="star-small">
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 81.361 110.044)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 93.512 94.602)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 111.31 75.597)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 120.964 59.91)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 149.321 100.334)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 131.522 114.814)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 61.534 46.334)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 22.618 46.334)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 90.193 23.106)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 144.796 22.804)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 128.204 5.91)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 170.918 11.464)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 193.064 34.268)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 28.35 98.524)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 42.529 14.357)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 165.167 17.905)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 167.227 13.946)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 164.76 22.786)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 169.745 29.334)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 175.176 29.725)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 178.477 25.945)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 178.974 21.686)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 175.673 21.721)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 172.248 21.597)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 175.1 11.286)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 177.995 11.85)" />
          <use xlink:href="#reuse-1" transform="matrix(.17475 0 0 .17475 166.482 26.822)" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.container {
  flex: 1;
  position: relative;
  display: grid;
  place-items: center;
  --move-x: v-bind(move.x);
  --move-y: v-bind(move.y);
}

svg {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: visible;
}

@media only screen and (max-width: 800px) {
  .container {
    overflow: hidden;
    place-items: normal;
    justify-content: center;
  }
}

.cloud-big {
  --size: 10;
}

.cloud-small {
  --size: 6;
}

.star-big {
  --size: 3;
}

.star-medium {
  --size: 2;
}

.star-small {
  --size: 1;
}

.cloud-big,
.cloud-small,
.star-big,
.star-medium,
.star-small {
  transform: translate(calc(var(--move-x) * var(--size) * 0.15px), calc(var(--move-y) * var(--size) * 0.15px));
}
</style>

<style>
html:not(.dark) :is(.star-big, .star-medium, .star-small) {
  display: none;
}
</style>
