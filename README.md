# Google Vision API

This project represents a PoC around how to use Google Vision API for OCR
i.e. Optical Character Recognition. Vision API supports multiple features
like Handwritten OCR, logo detection, GIS etc.

In this project you can upload any image that has handwritten text on it
and you will get OCR of the image. currently There are two branches, `master`
and `simple`

## Master branch

The master branch contains the main implementation, it's written in React
and tailwind CSS. It roughly represents how I would have created the UI
unfortunately because of some issue it's not working. I didn't want to
invest more time in User Interface so I stopped and created another branch
called `simple`

## Simple branch

The Simple Branch contains E2E working solution but it's written without any
front-end framework, just plain document API. It made development faster but
less manageable. I guess for a small PoC, no framework works.

## Tech Stack

-   Express is used for back-end with `multer` to upload and store files.
-   UI is written in plain web stack.
    -   React and Tailwind CSS is used in another branch

## Steps

### Install

```
npm install
```

### Run

```
npm start
```

Note that UI from "master" branch doesn't work, but you can view the UI at least. do Checkout both branches.
