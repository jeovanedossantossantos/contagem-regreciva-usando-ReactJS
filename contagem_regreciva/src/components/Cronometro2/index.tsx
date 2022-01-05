import React, { useRef, useEffect, useState } from "react";
import { Container, Display } from './style';
// import './horas.js'
interface Cronometro2Props {
  tempoFinal: number
}

const Cronometro2 = ({ tempoFinal }: Cronometro2Props) => {
  let date = new Date()
  const [horas, setHoras] = useState(date.getHours());
  const [minutos, setMinutos] = useState(date.getMinutes())
  const [segundos, setSegundos] = useState(date.getSeconds())
  const [horasf, setHorasf] = useState(0);
  const [minutosf, setMinutosf] = useState(0)
  const [segundosf, setSegundosf] = useState(0)

  const [texto, setTexto]=useState('')
  useEffect(() => {
    let objetos = Array()
    let horaDeInicio = []

    if (localStorage.getItem("horaDeInicio")?.length === undefined) {
      let t1 = Math.trunc(((horas*3600) + ((minutos+tempoFinal)*60) + segundos)/3600)
      let t2 = ((horas*3600) + ((minutos+tempoFinal)*60) + segundos)%3600
      let t3 = Math.trunc(t2/60 )
      let t4 = t2%60

      horaDeInicio.push({
        horaInicial: horas,
        minutosInicial: minutos,
        segundosInicial: segundos,

        tempoInicalEmSegundo: (horas*3600) + (minutos*60) + segundos,
        tempoFinalEmsegundos: (horas*3600) + ((minutos+tempoFinal)*60) + segundos,
        horaFinal: t1,
        minutosFinal: t3,
        segundosFinal: t4 


      })
      
      localStorage.setItem("horaDeInicio", JSON.stringify(horaDeInicio))
    }

    

    let lista = [] as any
    lista.push(localStorage.getItem("horaDeInicio"))
    objetos.push(JSON.parse(lista))
    let ob = objetos[0][0]
    
    setHorasf(ob.horaFinal)
    setMinutosf(ob.minutosFinal)
    setSegundosf(ob.segundosFinal)

  

    var paraContagem = setTimeout(() => {
      setHoras(date.getHours())
      setMinutos(date.getMinutes())
      setSegundos(date.getSeconds())
      

    }, 1000);

    if((horas===horasf) && (minutos===minutosf) && (segundos===segundosf)){
      setTexto("Tempo encerrado!")
      clearTimeout(paraContagem)

    }

  })




  return (

    <Container>
      <Display>
     {
       texto==="" ? <div> 
         <div>Tempo máximo {horasf <= 9 ? "0"+horasf: horasf} : {minutosf<=9 ? "0"+minutosf:minutosf} :
          {segundosf<=9? "0"+segundosf: segundosf}</div>
       <div>{horas <= 9 ? "0"+horas: horas} : {minutos<=9 ? "0"+minutos:minutos} :
          {segundos<=9? "0"+segundos: segundos}</div>
       </div> : 
       <div>{texto}</div>
     }
        {/* <div>Tempo máximo {tempoFinal} minutos</div>
        <div>{tempo < 10 ? "0" + tempo : tempo} : {segundos < 10 ? "0" + segundos : segundos}</div> */}
      </Display>
    </Container>

  );
}

export default Cronometro2