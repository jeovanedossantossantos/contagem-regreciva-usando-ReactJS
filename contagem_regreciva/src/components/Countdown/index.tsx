import React, { useRef, useEffect, useState } from "react";
import { Container, Display } from './style';


export default function Countdown() {
  const [tempo, setTempo] = useState(0);
  const [segundos, setSegundos] = useState(0)

  // localStorage.setItem('Tempo', 'Questionario'); 

  useEffect(() => {
    var resto = 0

    var paraContagem =  setTimeout(() => {

      setSegundos(segundos - resto  + 1)
      if (segundos === 5) {

        setTempo(tempo + 1)

      }
      
    }, 1000);
    if (segundos === 5) {
      resto = segundos +1
    }
    if(tempo===15){
      clearTimeout(paraContagem)
      }
    

  })




  return (
   
      <Container>
        <Display> 
          <div>Tempo máximo 15 minutos</div>
          <div>{tempo < 10 ? "0" + tempo : tempo} : {segundos < 10 ? "0" + segundos : segundos}</div>
        </Display>
      </Container>
   
  );
}