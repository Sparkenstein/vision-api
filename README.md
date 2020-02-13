# Google Vision API

This project represents a PoC around how to use Google Vision API for OCR
i.e. Optical Character Recognition. Vision API supports multiple features
like Handwritten OCR, logo detection, GIS etc.

In this project you can upload any image that has handwritten text on it
and you will get OCR of the image

## Tech Stack

-   Express for web server.
-   Multer to upload files.
-   UI is written in plain web stack
    -   DOM api to manipulate DOM, no frameworks used
    -   TailwindCSS to style elements

## Steps

### Install

```
npm install
```

### Run

```
npm start
```

## Improvements Needed

-   Database integration, sqlite probably
-   UI improvements
-   Get borders and plot boxes around original text
-   Use async variants of node API if possible
-   Tailwind purging unused CSS
