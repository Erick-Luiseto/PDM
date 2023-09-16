import { useState } from 'react'
import { View, Text, Button, Image} from 'react-native'
import {styles} from './styles'


export default function App(){

  let img = 'https://i.pinimg.com/222x/1c/74/2a/1c742a4ef25074f095faf13ca39ac5f3.jpg';

  const [resultado, setResultado] = useState()


return(
<View style={styles.area}>

<Text style={styles.titulo}>
          Jogo do N° Aleatório
</Text>

<Image
      source={{ uri: img }}
      style={{ width: 300, height: 300}}
/>


<Text style={styles.enunciado}>
          Pense em um n° de 0 a 10 
</Text>

<Button title="Descobrir" onPress={() => setResultado(Math.floor(Math.random() * 10))} />

<Text style={styles.resultado}>
          {resultado}
</Text>

</View>
    );
}
