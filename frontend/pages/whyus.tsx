// import { FC } from 'react'
// import { GetStaticProps } from 'next'
// import {gql, useQuery} from '@apollo/client' 
// import client from '../graphQL/apolloClient'
// import { Inter } from 'next/font/google'
// import Navigation from '../containers/navigation'
// import Header from '../containers/header'
// import IntroduceOurself from '../containers/introduceOurself'
// import WhyUs from '../containers/whyUs';
// import AreaOfPractice from '../containers/areaOfPractice'
// import Footer from '../containers/footer';
// import Type from '../models/whyUs';


// type Props = {
//     whyUs: Type[]
// }

// const inter = Inter({ subsets: ['latin'] });


// const GET_WHY_US = gql` 
//   query getWhyUs {
//     whyUses{
//       data{
//         id
//         attributes{
//           rate
//           description
//         }
//       }
//     }
//   }
// `

// const Home = () => {

//   const {loading, error, data} = useQuery(GET_WHY_US);

//   if (error) {return <div>Error loading one user.</div>};
//   if (loading) {return <div>Loading.....</div>};
//   return (
//     <div className={`border-box text-white ${inter.className}`}>
//       <div className='px-10 bg-black py-10'>
//         <div className='container mx-auto'>
//             <Navigation/>
//             <Header/>
//         </div>
//       </div>
//       <div className='px-10 py-10 bg-black opacity-90'>
//         <div className='container mx-auto'>
//           <IntroduceOurself/>
//           <WhyUs whyUs={data.whyUses.data}/>
//           <AreaOfPractice/>
//         </div>
//       </div>
//       <div className='px-10 bg-black py-10'>
//         <div className='container mx-auto'>
//           <Footer/>
//         </div>
//       </div>
//     </div>
//   )
// }

// // export const getStaticProps :GetStaticProps = async () => {

// //   const result = await fetch("http://localhost:3000/api/whyUsData");
// //   const data = await result.json();

// //   return ({
// //       props: {
// //           whyUs: data
// //       },
// //       revalidate: 1
// //   });
// // }


// // export const getStaticProps :GetStaticProps = async () => {

// //   const {data} = await client.query({
// //     query: gql(`
// //       query getWhyUs {
// //         whyUses{
// //           data{
// //             id
// //             attributes{
// //               rate
// //               description
// //             }
// //           }
// //         }
// //       }
// //     `),
// //   });

// //   console.log(data);

// //   return {
// //       props: {
// //           whyUs: data.whyUses.data
// //       },
// //       revalidate: 1
// //   };
// // }


// export default Home;
