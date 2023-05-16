import {gql} from '@apollo/client'

export const CREATE_WHY_US = gql`
mutation createWhyUs ($attributes: WhyUsInput!){
    createWhyUs(data: $attributes) {
      data {
        attributes {
          rate
          description
        }
      }
    }
  }  
`

// export const CREATE_WHY_US = gql`
// mutation createWhyUs($rate: Int!, $description: String!) {
//     createWhyUs(data: { rate: $rate, description: $description }) {
//       data {
//         attributes {
//           rate
//           description
//         }
//       }
//     }
//   }
// `

export const DELETE_WHY_US = gql`
    mutation deleteWhyUs($id: ID!) {
        deleteWhyUs(id: $id) {
        data {
            id
            attributes {
              rate
              description
            }
        }
        }
    }   
`