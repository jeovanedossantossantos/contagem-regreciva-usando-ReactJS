import React, { useRef, useEffect, useState } from "react";


interface Cronometro3Props {
  tempoFinal: number
}
const Cronometro3 = ({ tempoFinal }: Cronometro3Props) => {
  let date = new Date()
  const [horas, setHoras] = useState(date.getHours());
  const [minutos1, setMinutos1] = useState(date.getMinutes())
  const [segundos1, setSegundos1] = useState(date.getSeconds())

  const tempoTOTAL = (horas * 3600) + ((minutos1 + tempoFinal) * 60) + segundos1

  // const [minutosFinal, setMinutoFinal] = useState(date.ge)
  // Eu tenho que guradar o tempo da prova e ver quanto tempo se passou
  const [minutos, setMinutos] = useState(tempoFinal - 1)
  const [segundos, setSegundos] = useState(59)

  const [minutos2, setMinutos2] = useState(tempoFinal - 1)
  const [segundos2, setSegundos2] = useState(59)

  const terminoTempo = () => {
    const contando = localStorage.getItem('tenpoTotal')
    // console.log(contando)
    const lista = [] as any
    lista.push(contando)
    const valor = JSON.parse(lista)

    const tempoTotal = JSON.parse(lista)

    let date = new Date()
    const horas = date.getHours()
    const minutos1 = date.getMinutes()
    const segundos1= date.getSeconds()

    const tempoAtual = (horas * 3600) + ((minutos1) * 60) + segundos1

  

    if(tempoAtual>= tempoTotal){
      return true
    }
    return false
    



  }

  useEffect(() => {
    
  })

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
        minuto: tempoFinal,
        segundos: segundos
      }))

      localStorage.setItem("timeFinal", JSON.stringify(ob))
    } else {
      if (localStorage.getItem("timeAtual")?.length === undefined) {
        const contando = localStorage.getItem("timeAtual")
        const lista = [] as any
        lista.push(contando)
        const valor = JSON.parse(lista)
        console.log("Segundos " + valor.segundos);
        setMinutos(valor.minuto)
        setSegundos(valor.segundos)
      }


      //  setMinutos(valor.minuto)
      //  setSegundos(valor.segundos)
      //  const valores = JSON.parse(contando)

    }

    const paraContagem = setTimeout(() => {
      if (segundos - 1 < 0) {
        setSegundos(59)
        setMinutos(minutos - 1)

      } else {
        setSegundos(segundos - 1)
      }
      localStorage.setItem("timeAtual", JSON.stringify({
        minuto: minutos,
        segundos: segundos
      }));


    }, 1000);


// console.log(terminoTempo())
    if (terminoTempo() === true) {

      clearTimeout(paraContagem)

    }
  })





  return (
    <div>
      {minutos + ":" + segundos}
    </div>
  )

}

export default Cronometro3;

