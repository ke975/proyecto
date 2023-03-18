import { Center, Container, Heading, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

export function Home(){
  return(
  <ScrollView bgColor="white" >
    <Center alignItems="center">
    <Container>
      
      <Image mt={8} size={200} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
    <Heading fontSize="xl" textAlign="center" color="green.500" mt={5}>Bloque nutricional</Heading>
      
    </Container>

    <Container>
    <Text fontSize="md" mt={3} textAlign="justify">
  Las deficiencias nutricionales en el ganado bovino genera problemas fisiológicos, 
reproductivos y productivos, así como, la alta incidencia de ectoparásitos por la baja 
inmunidad. Lo que representan un impacto negativo en lo económico y en el bienestar 
animal.</Text>

<Text mb={8} fontSize="md" textAlign="justify">En este contexto, la propuesta de innovación tecnológica para el sector pecuario, es un 
paquete tecnológico que consta de un concentrado mineral - proteico, a fin de superar 
las deficiencias de estos elementos esenciales en la dieta, además este suplemento 
alimenticio contendrá como valor agregado azufre en su composición, como un aditivo 
repelente para ectoparásitos del ganado.</Text>


    </Container>


  </Center>
  </ScrollView>
  )
}