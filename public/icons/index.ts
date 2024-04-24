// @ts-nocheck
// this is piece of crap code but works
const icons = {}

function importAll(r) {
  r.keys().forEach((key) => {
    icons[key.replace('./', '').replace('.svg', '')] = r(key).default
  })
}

// Import all svg files from the current directory
importAll(require.context('./', false, /\.svg$/))

export default icons