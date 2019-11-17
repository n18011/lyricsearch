// const algoliasearch = require('algoliasearch');
// const algoliasearch = require('algoliasearch/reactnative');
const algoliasearch = require('algoliasearch/lite')
// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

const client = algoliasearch(process.env.REACT_APP_ID, process.env.REACT_APP_ADMINKEY)

export { client }
