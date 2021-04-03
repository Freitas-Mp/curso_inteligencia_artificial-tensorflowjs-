$("#result").text('')

function executar(){
  let text=""
  const fill= tf.fill([2,2],0)
  text+="fill: \n\n"
  text+=fill+"\n\n"

  const ziro= tf.zeros([2,2])
  text+="zero: \n\n"
  text+=ziro+"\n\n"
  
  const ones= tf.ones([2,2])
  text+="one: \n\n"
  text+=ones+"\n\n"

  const linspace= tf.linspace(0,9,10)
  text+="linspace: \n\n"
  text+=linspace+"\n\n"
  
  const renge1= tf.range(0,9,1)
  const renge2= tf.range(0,21,2)
  text+="range: \n\n"
  text+=renge1+"\n\n"
  text+=renge2+"\n\n"
  
  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}