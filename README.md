# React Additional Material-UI Components

This repository contains React components heavily dependent on [Material-UI](https://github.com/callemall/material-ui) web components. It contains some simple, low-level components as well as some higher order components that leverage several Material-UI low-level components. These web components are built to be used in a ReactJS web application.

## Dependencies

* _[aphrodite](https://github.com/Khan/aphrodite)_
* _[material-ui](https://github.com/callemall/material-ui)_
* _[react](https://github.com/facebook/react)_
* _[react-measure](https://github.com/souporserious/react-measure)_
* _[utilitarian](https://github.com/arizonatribe/utilitarian)_

## Components

### Forms
* _Blur Field_ - A Text Field that submits its form value `onBlur`
* _Editable Label_ - A label that toggles into an editable Text Field
* _Form Field_ - Simple template wrapper around a [Material-UI Text Field](http://www.material-ui.com/#/components/text-field)
* _Image Uploader_ - An Image uploading component that base64 encodes a given image
* _Error Message_ - A customized error message pane that slides smoothly below any kind of page header component 

### Buttons

* _Speed Dial_ - A customized Speed Dial, inspired heavily by [react-mui-speeddial](https://github.com/jampy/react-mui-speeddial)

### Containers

* _Container Toolbar_ - A templated [Material-UI Toolbar](http://www.material-ui.com/#/components/toolbar)
* _Resizable Container_ - A responsive [Material-UI Card](http://www.material-ui.com/#/components/card) that can be maximized (to nearly full-width) or restored-down to centered & partial-width of the page.

### Misc low-level Components.

* _Conditional Render_ - Based on the [react-conditional-render](https://github.com/mathieuancelin/react-conditional-render) component and modified to perform nested evaluation of truthiness on Objects, Arrays, and objects returned by Functions.
* _Load Script_ - A web component wrapper for a script tag that will load a given external script
* _Overlay_ - Very simple semi-opaque overlay (best if it sits next to a [Material-UI Drawer](http://www.material-ui.com/#/components/drawer))
* _Progress_ - Simple, simple Linear progress wrapper
* _Spinner_ - Simple boolean-driven spinner 
