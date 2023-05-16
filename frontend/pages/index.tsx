import { FC } from 'react'
import { GetStaticProps } from 'next'
import {gql, useMutation} from '@apollo/client'
import {GET_WHY_US, GET_HEADER, GET_AREA_OF_PRACTICES, GET_HOME_PAGE} from '../graphQL/queries'
import {CREATE_WHY_US, DELETE_WHY_US} from '../graphQL/mutations'
import Client from '../graphQL/apolloClient'
import { Inter } from 'next/font/google'
import Navigation from '../containers/navigation'
import Wrapper from '../components/layout/wrapper';
import Header from '../containers/header'
import IntroduceOurself from '../containers/introduceOurself'
import WhyUs from '../containers/whyUs';
import AreaOfPractice from '../containers/areaOfPractice'
import Footer from '../containers/footer';
import WhyUsType from '../models/whyUs';
import HeaderType from '../models/header';
import AreaType from '../models/areaOfPractice';


// type Props = {
//     whyUs: WhyUsType[],
//     header: HeaderType,
//     areaOfPractice: AreaType[]
// }

const inter = Inter({ subsets: ['latin'] });

const addWhyUsHandler = async() => {
  const {data} = await Client.mutate({
    mutation: CREATE_WHY_US,
    variables: {
      attributes: {
        rate: 65,
      description: "yeah its work as fine as i wanted to be"
      }
    },
  });
  console.log(data)
}

// const removeWhyUsHandler = async (whyUsId :number) :Promise<void> => {
//   const {data} = await client.mutate({
//     mutation: DELETE_WHY_US,
//     variables: {
//       id: whyUsId
//     }
//   })
//   console.log(data);
// }




const Home :FC<any> = ({homePage}) => {

  // const removeWhyUsHandler = async (whyUsId :number) :Promise<void> => {
  //   removeWhyUs({
  //     variables: { id: whyUsId },
  //     refetchQueries: [{ query: GET_WHY_US }]
  //   });
  // }

  // const removeWhyUsHandler = async (whyUsId :number) :Promise<void> => {
  //   removeWhyUs({
  //     variables: { id: whyUsId },
  //     update(cache, mutationResult) {
  //       console.log({ cache, mutationResult });
  //     },
  //   });
  // }

  const [removeWhyUs, {data, loading , error}] = useMutation(DELETE_WHY_US)

  const removeWhyUsHandler = async (whyUsId :number) :Promise<void> => {
    removeWhyUs({
      variables: { id: whyUsId },
      update(cache, {data: whyUs}){
        cache.modify({
        fields: {
          whyUses(existingRefs, { readField }) {
            console.log('omar')
            return existingRefs.filter((ref :any) => whyUsId !== readField('id', ref))
          },
        },
      });
      }
    })
  }

  let hero = null;
  let blocks :any[] = [];
  let footer = null; 


  homePage.blocks.map((block :any) => {
    switch(block.__typename){
      case 'ComponentLayoutHero':
        hero = <Header header={block}/>
        break;
      case "ComponentLayoutIntroduceOurself":
        blocks.push(<IntroduceOurself introduceOurself={block}/>)
        break;
      case "ComponentLayoutWhyUs":
        blocks.push(<WhyUs whyUs={block} addWhyUs={addWhyUsHandler} removeWhyUs={removeWhyUsHandler}/>);
        break;
      case "ComponentLayoutAreaOfPractice":
        blocks.push(<AreaOfPractice areaOfPractice={block}/>)
        break;
      case "ComponentLayoutFooter":
        footer = <Footer footer={block}/>
        break;
    }
  })

  return (
    <div className={`border-box text-white ${inter.className}`}>
      <Wrapper>
          <Navigation header={homePage.header}/>
      </Wrapper>
      <Wrapper class="pt-0">
          { hero }
      </Wrapper>
      <Wrapper class="opacity-90">
          {
            blocks.map((block :any) => {
              return (
                <div key={Math.random()}>
                {block}
                </div>
                );
            })
          }
      </Wrapper>
      <Wrapper>
          { footer }
      </Wrapper>
    </div>
  )
}

// export const getStaticProps :GetStaticProps = async () => {

//   const result = await fetch("http://localhost:3000/api/whyUsData");
//   const data = await result.json();

//   return ({
//       props: {
//           whyUs: data
//       },
//       revalidate: 1
//   });
// }
export const getServerSideProps = async () => {

  const HOME = await Client.query({query: GET_HOME_PAGE});
  return {
      props: {
          homePage: HOME.data.homePage.data.attributes,
      }
  };

  // const WHY_US = await Client.query({query: GET_WHY_US});
  // const HEADER = await Client.query({query: GET_HEADER});
  // const AREA_OF_PRACTICES = await Client.query({query: GET_AREA_OF_PRACTICES});
  // return {
  //     props: {
  //         whyUs: WHY_US.data.whyUses.data,
  //         header: HEADER.data.header.data,
  //         areaOfPractice: AREA_OF_PRACTICES.data.areaOfPractices.data
  //     }
  // };
}


export default Home;
