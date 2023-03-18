import MyTabs from "./src/routes/app.routes";
import {NativeBaseProvider} from 'native-base'
import {THEME} from './src/style/theme'
export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>


 <MyTabs/>
 </NativeBaseProvider>
  );
}

