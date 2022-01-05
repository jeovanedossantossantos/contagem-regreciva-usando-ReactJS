import React, { useRef, useEffect, useState } from "react";
import { Container, Display } from './style';
// import './horas.js'
interface CronometroProps {
  tempoFinal: number
}

const Cronometro = ({ tempoFinal }: CronometroProps) => {
  let date = new Date()
  const [tempo, setTempo] = useState(0);
  const [segundos, setSegundos] = useState(0)

  // let ob = JSON.parse();




  function TempoDeProva() {

  }



  // 
  useEffect(() => {
    let objetos = Array()
    let horaDeInicio = []
    let tempoAcabo = false
    let date = new Date()
    let convertendo = (date.getHours() * 60) + date.getMinutes() + tempoFinal
    let horaTemina = Math.trunc(convertendo / 60)
    let horaResto = convertendo % 60
    if (localStorage.getItem("horaDeInicio")?.length === undefined) {



      horaDeInicio.push({
        horaInicial: date.getHours(),
        minutoInicial: date.getMinutes(),
        segundos: date.getSeconds(),
        horaFinal: horaTemina,
        minutoFinal: horaResto,
        tempoInicial: ((date.getHours() * 60) + date.getMinutes()),
        tempoFinal: convertendo,

      })
      
      localStorage.setItem("horaDeInicio", JSON.stringify(horaDeInicio))

      // console.log(JSON.parse(lista))
      // console.log(objetos)
      // lista.push(localStorage.getItem(localStorage.key(0)))

      // console.log(ob)

    }
    let lista = [] as any

    lista.push(localStorage.getItem("horaDeInicio"))


    // let lista = []
    objetos.push(JSON.parse(lista))
    // console.log((objetos[0][0]).segundos)
    let ob = objetos[0][0]
    // let minutos = Math.trunc((date.getMinutes() - (ob.tempoInicial + ob.tempoInicial) / 60000))
    let tempoDeInicio = ob.tempoInicial //milisegundos
    // setTempo(minutos)
    var resto = 0

    var paraContagem = setTimeout(() => {

      setSegundos(segundos - resto + 1)
      if (segundos === 5) {

        setTempo(tempo + 1)

      }

    }, 1000);
    
    // let jaTerminou = ((date.getHours() * 60) + date.getMinutes()) 
    if (segundos === 5) {
      resto = segundos + 1
      // jaTerminou+=1
    }
    // console.log(jaTerminou)
    // console.log(ob.tempoFinal)
    if (tempo ===  tempoFinal) {
      clearTimeout(paraContagem)
    }


  })




  return (

    <Container>
      <Display>
        <div>Tempo máximo {tempoFinal} minutos</div>
        <div>{tempo < 10 ? "0" + tempo : tempo} : {segundos < 10 ? "0" + segundos : segundos}</div>
      </Display>
    </Container>

  );
}

export default Cronometro