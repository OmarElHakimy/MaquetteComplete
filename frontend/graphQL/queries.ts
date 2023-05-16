import {gql} from '@apollo/client' 


export const GET_WHY_US = gql` 
    query getWhyUs {
        whyUses{
            data{
            id
            attributes{
                rate
                description
            }
            }
        }
    }
`

export const GET_AREA_OF_PRACTICES = gql`
query getAreaOfPractices {
    areaOfPractices {
      data {
        id
        attributes {
          title
          cover {
            data {
              attributes {
                formats: url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HEADER = gql `
query getHeader {
    header {
      data {
        id
        attributes {
          firstTitle
          secondeTitle
          description
          placeholderInput
          titleInput
        }
      }
    }
  }
`

export const GET_HOME_PAGE = gql`
  query getHomePage {
    homePage {
      data {
        attributes {
          header {
            button {
              title
              href
            }
            menu {
              navItem {
                title
                url
              }
            }
          }
          blocks {
            ... on ComponentLayoutHero {
              __typename
              title
              firstTitle
              secondeTitle
              description
              images {
                data {
                  attributes {
                    formats: url
                  }
                }
              }
              input {
                label
                buttonTitle
              }
            }
            ... on ComponentLayoutIntroduceOurself {
              __typename
              title
              subTitle
              description
            }
            ... on ComponentLayoutWhyUs {
              __typename
              title
              card {
                rate
                description
              }
              button {
                title
              }
            }
            ... on ComponentLayoutAreaOfPractice {
              __typename
              title
              card {
                title
                cover {
                  data {
                    attributes {
                      formats: url
                    }
                  }
                }
              }
            }
            ... on ComponentLayoutFooter {
              __typename
              title
              logo {
                data {
                  attributes {
                    formats: url
                  }
                }
              }
              menu {
                title
                url
              }
              copyright
              routes {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`