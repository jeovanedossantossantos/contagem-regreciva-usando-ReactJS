import React, { useEffect, useState } from "react";
import { Container } from "./style";


interface Cronometro3Props {
  tempoFinal: number
  background?: string | undefined;
  color?: string | undefined;
  fontSize?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
}
const Cronometro3 = ({ tempoFinal,background,color,fontSize,width,height }: Cronometro3Props) => {
  let date = new Date()
  const [horas, setHoras] = useState(date.getHours());
  const [minutos1, setMinutos1] = useState(date.getMinutes())
  const [segundos1, setSegundos1] = useState(date.getSeconds())

  const tempoTOTAL = (horas * 3600) + ((minutos1 + tempoFinal - 1) * 60) + segundos1

  const [minutos, setMinutos] = useState(tempoFinal - 1)
  const [segundos, setSegundos] = useState(59)


 
  if (localStorage.getItem("timeAtual")?.length === undefined) {
    localStorage.setItem("timeAtual", JSON.stringify({
      minuto: minutos,
      segundos: segundos
    }));
  }
  const contando = localStorage.getItem("timeAtual")
  const lista = [] as any
  lista.push(contando)
  const valor = JSON.parse(lista)
 
  const [minutos2, setMinutos2] = useState(valor.minuto);
  const [segundos2, setSegundos2] = useState(valor.segundos)


  useEffect(() => {
    if (!localStorage.getItem("tenpoTotal")) {
      let ob = []
      ob.push(({
        tempoTOTAL: tempoTOTAL,

      }))

      localStorage.setItem("tenpoTotal", JSON.stringify(ob))

    }
    const lista = []
    if (localStorage.getItem("timeFinal")?.length === undefined) {
      let ob = []
      ob.push(({
        minuto: tempoFinal - 1,
        segundos: segundos
      }))

      localStorage.setItem("timeFinal", JSON.stringify(ob))
    } else {
      if (localStorage.getItem("timeAtual")?.length === undefined) {
        const contando = localStorage.getItem("timeAtual")
        const lista = [] as any
        lista.push(contando)
        const valor = JSON.parse(lista)
        
        setMinutos2(valor.minuto)
        setSegundos2(valor.segundos)
      }




    }

    const paraContagem = setTimeout(() => {
      if (segundos2 - 1 < 0) {
        setSegundos2(59)
        setMinutos2(minutos2 - 1)

      } else {
        setSegundos2(segundos2 - 1)
      }

      localStorage.setItem("timeAtual", JSON.stringify({
        minuto: minutos2,
        segundos: segundos2
      }));


    }, 1000);

    if (minutos2 <= 0 && segundos2 <= 0) {

      clearTimeout(paraContagem)

    }
  })


  return (
    <Container background={background} color={color} fontSize={fontSize} width={width} height={height}>
      <div>
        {minutos2 < 10 ? "0" + minutos2 : minutos2} : {segundos2 < 10 ? "0" + segundos2 : segundos2}
      </div>
     
    </Container>
  )

}

export default Cronometro3;

