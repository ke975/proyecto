import { ScrollView,Image,Box, Flex, Heading, Container,Center,Divider } from "native-base";
import React from "react";

export function Race(){

const Table = [

  {id:"1",porcentaje:"6%"},
  {id:"2",porcentaje:"50%"},
  {id:"3",porcentaje:"1%"},
  {id:"4",porcentaje:"30%"},
  {id:"5",porcentaje:"13%"}

]
const Formula = [

  {id:"1",porcentaje:"17%, 20%" },
  {id:"2",porcentaje:"18%"},
  {id:"3",porcentaje:"0.5%, 1%"},
  {id:"4",porcentaje:"3%"},
  {id:"5",porcentaje:"50 mg/kg"},
  {id:"6",porcentaje:"8,000 mg/kg"},
  {id:"7",porcentaje:"1,500 mg/kg"},
  {id:"8",porcentaje:"8,000 mg/kg"},
  {id:"9",porcentaje:"500 mg/kg"},
  {id:"10",porcentaje:"2,000 mg/kg"},
  {id:"11",porcentaje:"160 mg/kg"},
  {id:"12",porcentaje:"30 mg/kg"},
  {id:"13",porcentaje:"300,000 mg/kg"},
  {id:"14",porcentaje:"50,000 U.I./kg"},
  {id:"15",porcentaje:"100,000 U.I./kg"},
  {id:"16",porcentaje:"3%"},
  {id:"16",porcentaje:"Calcio-fósforo 1.3:1 ,Zinc-cobre4:1"}
]


  return(
    <ScrollView bgColor="white">
 
          <Heading mt="5" mb={5} color="green.500" textAlign="center">Concentrado Mineral proteico </Heading>
           <Container alignItems="center" >
          <Center >

       
     
          <Image  size={200}  ml="16" mb="5" borderRadius={100}  source={{
                  
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
       </Center>
    </Container>


      <Box  bgColor="green.50" borderRadius={10}   rounded="lg" overflow="hidden"   mx={3} >
      <Heading mt="5" mb={5} color="gray.900" textAlign="center">Contenido por Kg</Heading>
        <ScrollView horizontal >
      <Flex direction="column" mt="2"  borderColor="gray.300">
        <Heading color="gray.700" fontsize ="md" m="3" ml="5" >Proteína(urea)</Heading>
        
        <Heading color="gray.700"  fontsize ="md" m="3" ml="5" >Sales minerales</Heading>
        <Heading  color="gray.700" fontsize ="md" m="3" ml="5" >Azufre</Heading>
        <Heading color="gray.700" fontsize ="md" m="3"  ml="5">Maíz Amarillo</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="5" >Melaza</Heading>
      </Flex>
      <Flex direction="column" mt="2"  >
      {

        Table.map(item=>{
          return(
            <Heading color="gray.700" key={item.id} ml="16" m="3">
            {item.porcentaje}
           </Heading>
          )
   
        })

 
      }

      </Flex>
      </ScrollView>

 
   
 
      </Box>
      <Divider thickness="4" my="5" _light={{
        bg: "green.500"
      }} _dark={{
        bg: "green.500"
      }} />
      <Heading textAlign="center" color="green.500" > Propiedades nutricionales</Heading>
      <Divider thickness="4" my="5" _light={{
        bg: "green.500"
      }} _dark={{
        bg: "green.500"
      }} />
      <Box  bgColor="green.50" borderRadius={10}   rounded="lg" overflow="hidden" mt="5"   mx={3} >
        
      <Heading mt="5" mb={5} color="gray.900" textAlign="center">Conposición nutricional</Heading>
        <ScrollView horizontal >
          

      <Flex direction="column" mt="2"  borderColor="gray.300">
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Calcio</Heading>
        
        <Heading color="gray.700"  fontsize ="md" m="3" ml="2" >Fósforo</Heading>
        <Heading  color="gray.700" fontsize ="md" m="3" ml="2" >Sal Común(NaCI)</Heading>
        <Heading color="gray.700" fontsize ="md" m="3"  ml="2">Magenesio</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Biotina</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Zinc</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Magneso</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Hierro</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Cobre</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Yodo</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Cobalto</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Selenio</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Vitimina A</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Vitimina D3</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Vitimina E</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Humedad</Heading>
        <Heading color="gray.700" fontsize ="md" m="3" ml="2" >Relación</Heading>






      </Flex>

      <Flex direction="column" mt="2"  >
      {

        Formula.map(item=>{
          return(
            <Heading color="gray.700" key={item.id} ml="8" m="3">
            {item.porcentaje}
           </Heading>
          )
   
        })

 
      }

      </Flex>
      </ScrollView>

 
   
 
      </Box>

    </ScrollView>



  )
}