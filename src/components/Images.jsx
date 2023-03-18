import { ScrollView,Center,Container,Image,Heading} from "native-base";


export function Baner(){
  return(
    <ScrollView
    horizontal={true}
    >
      <Container flex={1} >
      <Center flexDirection="row">
     
      <Image  size={100} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
      <Image  size={100} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
      <Image  size={100} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
      <Image  size={100} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
      <Image  size={100} borderRadius={100}  source={{
      uri: "https://th.bing.com/th/id/OIP.ioK7f4nydCsNJIQsvgqQywHaE8?pid=ImgDet&rs=1"
    }} alt="Alternate Text" />
      </Center>
      </Container>

    </ScrollView>
  )
}