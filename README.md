# Image Viewer Vanilla JS

A lightweight, dependency-free image viewer popup for vanilla JavaScript projects. Easily display images in an overlay with one CSS class and a simple JS function. Includes a demo (`index.html`) ready to be hosted on GitHub Pages.

## Features

- Popup overlay for image viewing
- Simple integration: just add the `product-image` class to your images
- Overlay appears inside any container you specify
- Supports dynamically-loaded images via the `loadZoomOverlay` function
- Can be imported and used as a module in other JavaScript files

## Getting Started

### 1. Add Required Files

Include the JS and CSS files in your HTML:

```html
<link rel="stylesheet" href="image-viewer.css">
<script src="image-viewer-vanilla.js"></script>
```

### 2. Mark Images

Add the `product-image` class to any `<img>` you want to enable the popup on:

```html
<img src="example.jpg" class="product-image" alt="Example">
```

### 3. Add Overlay Container

Insert the overlay markup inside the element where you want the popup to appear:

```html
<div class="overlay" id="imageOverlay">
    <div class="close-hint">Click outside to close</div>
    <img src="" alt="" class="overlay-image" id="overlayImage">
</div>
```

Place this HTML inside the container element (e.g., a modal, a section, or directly in `<body>`) where you want the overlay to appear.

### 4. Handling Dynamically Loaded Images

If images are loaded after page load, you must call the `loadZoomOverlay` function from the JS file after your images are in the DOM.  
You can also import and use this function in another JavaScript file as shown below.

#### Import and Use in Another JS File

```js
import { loadZoomOverlay } from './image-viewer-vanilla.js';
// After images are added to the DOM:
loadZoomOverlay();
```

## Demo

See the included [`index.html`](https://image-viewer-vanilla-js.github.io/image-viewer-vanilla-js/) for a working demo.  
You can open this file directly in your browser to try out the image viewer.


## License

MIT
