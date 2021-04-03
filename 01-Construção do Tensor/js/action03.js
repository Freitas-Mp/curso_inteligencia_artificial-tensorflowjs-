$("#result").text('')

function executar(){
  let text=""
  const tensor1= tf.tensor([1,2,2,2],[2,2])
  const tensor2= tf.tensor([[[1,2,3],[3,4,7],[1,1,1]]])
  const tensor3= tf.tensor([1,2,3,3,4,7,1,1,1],[1,3,3])
  
  tensor2.print()
  
  text+="Tensor de tipo tensor1: \n"+tensor1+"\n\n"
  text+="Tensor de tipo tensor2: \n"+tensor2+"\n\n"
  text+="Tensor de tipo tensor3: \n"+tensor3+"\n\n"
  
  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}