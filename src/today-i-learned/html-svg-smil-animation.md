---
title: SVG SMIL animation
date: 2024-09-08
category: HTML
description: How animate SVGs with SMIL.
---

I know you can animate SVGs with CSS, but today I learned of a new option called SMIL.

Look at this circle changing colors, with the code:

```html
<svg viewBox="0 0 20 20" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="10">
    <animate
      attributeName="fill"
      attributeType="XML"
      begin="0s"
      dur="3s"
      values="#a8d0e6; #f8e9a1; #f76c6c; #a8d0e6;"
      keyTimes="0; 0.3; 0.6; 1"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

<svg viewBox="0 0 20 20" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="10">
    <animate
      attributeName="fill"
      attributeType="XML"
      begin="0s"
      dur="3s"
      values="#a8d0e6; #f8e9a1; #f76c6c; #a8d0e6;"
      keyTimes="0; 0.3; 0.6; 1"
      repeatCount="indefinite"
    />
  </circle>
</svg>

The real benefit over CSS is that the animation works where CSS don't, if it is an .svg file and not inlined in the HTML.

```html
<img src="/ball.svg" alt="Cool ball changing colors" />
```

This would not be able to be animated with CSS because it's not in the DOM.

I learned it from [My speaking at JavaZone](https://vimeo.com/1006184430).
