function convertTemp(temperatureValue){
    const newTemp=temperatureValue+273
    console.log("Temperature in kelvin is "+newTemp+"k")
}
convertTemp(35)

function convertTemp1(temperatureValue, conversionUnit){

    /* if(conversionUnit==='c'){
      const  newTC=temperatureValue-273
      console.log("Temperature in celcius is "+newTC+"c")
    }else if(conversionUnit==='k'){
      const  newTK=temperatureValue+273
      console.log("Temperature in kelvin is "+newTK+"k")
    } */
    const newT=conversionUnit==='k'?temperatureValue+273+"k":temperatureValue-273+"c"
    console.log(newT)

}
convertTemp1(35,'k')