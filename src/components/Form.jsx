import {
  Box,
  Center,
  Container,
  Heading,
  Input,
  ScrollView,
  Text,
  Button,
  KeyboardAvoidingView,
  Image,
  
} from "native-base";

import {Alert} from "react-native"
import { useState } from "react";

export function Formulario() {
  const [peso, setPeso] = useState("");
  const [litros, setLitros] = useState("")
  const [total, setTotal] = useState(0);

//si la vaca produce 5 litros de leche le vamos a dar 60 gramos de concentrado//


const valor =  peso * 0.20

  function calcular() {

if(litros === ""){
  Alert.alert("por favor ingrese los litros produzidos por su vaca")
}
if(peso === ""){
  Alert.alert("por favor ingrese el peso de su vaca")
}

try {
  setTotal(((litros * 60 / 5  )+ valor)/2);
} catch (error) {
  Alert.alert("no he mos podido Calcular el la ración exacta para su vaca")
};

    setPeso("");
    setLitros("")
  }




  return (
    <ScrollView bgColor="white">
    <KeyboardAvoidingView 
  >
        <Container bgColor="white" mt={5}>
          <Center>
          <Image  size={150} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
            <Heading fontSize="2xl" mt={5} mb={5} textAlign="center">
              Calcule la ración exacta de alimento
            </Heading>
           

            <Box alignItems="center" maxW="700px">
              <Input
                mx="8"
                fontSize="md"
                placeholder="Producción de leche (l/d)"
                borderColor="green.500"
                color="green.500"
                w="100%"
                textAlignVertical="top"
                onChangeText={setLitros}
                value={litros}
                mb={4}
              />

<Input
                mx="8"
                
                fontSize="md"
                placeholder="Peso de su vaca (Kg)"
                borderColor="green.500"
                color="green.500"
                w="100%"
                textAlignVertical="top"
                onChangeText={setPeso}
                value={peso}
              />
            </Box>
            <Heading fontSize="lg" textAlign="center" mt={3} mb={3}>
          La ración de concentrado a suministrar  es de:
            </Heading>
            <Heading mb={3}>{total} G</Heading>
            <Button bgColor="green.500" mb={5} onPress={calcular}>
              Calcule la cantidad de ración
            </Button>
          
          </Center>
        </Container>

      </KeyboardAvoidingView>

    </ScrollView>
  );
}
