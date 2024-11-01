export async function navQuery(){
    const siteNavQueryRes = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                menus(where: {location: PRIMARY}) {
                  nodes {
                    name
                    menuItems(first: 50) {
                        nodes {
                            uri
                            label
                            childItems {
                              nodes {
                                label
                                uri
                                
                                
                              }
                            }
                        }
                    }
                  }
                }
                generalSettings {
                    title
                    url
                    description
                }
            }
            `
        })
    });
    const{ data } = await siteNavQueryRes.json();
    return data;
}

export async function navQueryFooterOne(){
  const siteNavQueryResFooterOne = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: FOOTER_ONE}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                          target
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResFooterOne.json();
  return data;
}

export async function navQueryFooterTwo(){
  const siteNavQueryResFooterTwo = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: FOOTER_TWO}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResFooterTwo.json();
  return data;
}

export async function navQueryFooterThree(){
  const siteNavQueryResFooterThree = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: FOOTER_THREE}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResFooterThree.json();
  return data;
}

export async function navQueryFooterFour(){
  const siteNavQueryResFooterFour = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: FOOTER_FOUR}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResFooterFour.json();
  return data;
}

export async function navQueryFooterFive(){
  const siteNavQueryResFooterFive = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: FOOTER_FIVE}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResFooterFive.json();
  return data;
}

export async function navQueryLocations(){
  const siteNavQueryResLocations = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: LOCATIONS}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          order
                          label
                      }
                  }
                }
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryResLocations.json();
  return data;
}

export async function homePagePostsQuery(){
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                posts {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            `
        })
    });
    const{ data } = await response.json();
    return data;
}


export async function getNodeByURI(uri){
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                  }
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        date
                        title
                        excerpt
                        content
                        uri
                        categories {
                          nodes {
                            name
                            uri
                          }
                        }
                        featuredImage {
                          node {
                            srcSet
                            sourceUrl
                            altText
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
                uri: uri
            }
        })
    });
    const{ data } = await response.json();
    return data;
}

export async function getAllUris(){
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages(first: 100) {
              nodes {
                uri
              }
            }
          }
          `
      })
  });
  const{ data } = await response.json();
  const uris = Object.values(data)
    .reduce(function(acc, currentValue){
      return acc.concat(currentValue.nodes)
    }, [])
    .filter(node => node.uri !== null)
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
      return {params: {
        uri: trimmedURI
      }}
    })

  return uris;

}
