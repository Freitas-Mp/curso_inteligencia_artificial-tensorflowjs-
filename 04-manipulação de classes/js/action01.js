$("#result").text('')

function executar(){
  let text=""

  const tensor1= tf.tensor([true,false,true,false])
  const toFloat= tensor1.toFloat()

  const tensor2= tf.tensor([1.3,2.5,5.6,7.8])
  const toInt= tensor1.toInt()

  const tensor3= tf.tensor([1,0,1,0])
  const toBool= tensor1.toBool()

  
  
  
  text+="toBool: \n\n"
  
  text+="ANTES: \n\n"
  text+=tensor3+"\n\n"
  
  text+="DEPOIS: \n\n"
  text+=toBool+"\n\n"
  
  text+="toInt: \n\n"
  
  text+="ANTES: \n\n"
  text+=tensor2+"\n\n"
  
  text+="DEPOIS: \n\n"
  text+=toInt+"\n\n"
  
  text+="dispose: \n\n"
  
  text+="ANTES: \n\n"
  text+=tensor2+"\n\n"
  
  const disspose= tensor2.dispose()
  text+="DEPOIS: \n\n"
  text+="tensor deletado"+"\n\n"

  text+="toFloat: \n\n"

  text+="ANTES: \n\n"
  text+=tensor1+"\n\n"

  text+="DEPOIS: \n\n"
  text+=toFloat+"\n\n"

  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}