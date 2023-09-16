import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from './styles'


export default function App(){
  const [resultado, setResultado] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

 function verificar(){
    imc = (peso / (altura * altura))


    if (imc <= 18.5)
      setResultado('Abaixo do Peso')
    else if (imc <= 25)
      setResultado('Peso Ideal')
    else if (imc <= 30)
      setResultado('Sobrepeso')
    else if (imc <= 35)
      setResultado('Obesidade Grau I')
    else if (imc <= 40)
      setResultado('Obesidade Grau II')
    else
      setResultado('Obesidade Grau III ou Mórbida')
  }

return(
  <View>
<Text style={styles.titulo}>
          Cálculo do IMC
</Text>

<TextInput
      style={styles.input}
      placeholder="Peso (kg)"
      onChangeText={setPeso}
      />

<TextInput
      style={styles.input}
      placeholder="Altura (m)"
      onChangeText={setAltura}
      />

<Button title="Verificar" onPress={verificar} />

<Text style={styles.resultadoTitulo}>
          RESULTADO: 
</Text>

<Text style={styles.resultado}>
          {resultado}
</Text>

  </View>
  );
}
