# Imbibe

I love cocktails but often find myself at a loss for what to make. I built Imbibe so I could keep track of what ingredients I have and get suggestions for tasty drinks I can make.

This was also a demo app for [a talk I gave on Concurrent React](https://hackmd.io/@lXZpl7NVSeaMOAd8an67Ow/Sy5iFNwpQ). There are examples of concurrent mode (using `ReactDOM.createRoot()`), code-splitting components with `React.lazy()` and `<Suspense>`, the new context API with `createContext()`, plus some hooks (`useState()`, `useEffect()` and `useMemo()`).

I also had fun playing around with a less conventional, less "app-like", design with every drink page theming the site a different colour.

<img width="1050" alt="Screenshot 2019-06-11 at 09 29 54" src="https://user-images.githubusercontent.com/9408641/59256299-9272f300-8c2b-11e9-8389-bf4712d2b68c.png">

<img width="1050" alt="Screenshot 2019-06-11 at 09 30 53" src="https://user-images.githubusercontent.com/9408641/59256337-a4ed2c80-8c2b-11e9-97af-fee6c5328550.png">

## Run locally

1. Clone this repo
1. Run `npm install`
1. Run `npm start` to start the dev server
