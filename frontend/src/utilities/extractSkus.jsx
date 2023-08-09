/*

  FUNCTION SUMMARY:
  - I wanted users to see a dropdown of SKUs that correlated with URLs
  - Since the 'sku for a product is the last component in the URI path for that product's URL', this function is used to extract that last component (fragment)

*/
export function extractLastFragments(urls) {
  return urls.map((url) => {
    const fragments = url.split('/')
    return fragments[fragments.length - 1]
  })
}
