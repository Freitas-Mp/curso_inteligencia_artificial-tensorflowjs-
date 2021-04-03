$("#result").text('')

function executar(){
  let text=""
 
  
  const tensor= tf.tensor([2.4])
  const asScalar= tensor.asScalar()
  text+="ANTES: \n\n"
  text+="TENSOR: \n\n"
  text+=tensor+"\n\n"

  text+="DEPOIS: \n\n"
  text+="asScalar: \n\n"
  text+=asScalar+"\n\n"
  
  const tensor2d= tf.tensor([2,4,2,3,2,2,2,2,2],[1,3,3])
  const flatten= tensor2d.flatten()
  text+="FLATTEN: \n\n"

  text+="ANTES: \n\n"
  text+=tensor2d+"\n\n"

  text+="DEPOIS: \n\n"
  text+=flatten+"\n\n"

  const tensor1= tf.tensor([2,4,2,3,2,2,2,2,2],[1,3,3])
  const as1D= tensor1.as1D()

  const tensor2= tf.tensor([2,4,2,3])
  const as2D= tensor2.as2D(2,2)

  const tensor3= tf.tensor([2,4,2,3,2,2,2,2,2])
  const as3D= tensor3.as3D(1,3,3)

  const tensor4= tf.tensor([2,4,2,3])
  const as4D= tensor4.as4D(1,2,2,1)

  const tensor5= tf.tensor([2,4,2,3,3,5,6,7,])
  const as5D= tensor5.as5D(1,2,2,2,1)

  const tensor6= tf.tensor([2.6,4.5,2.44,3.22,3.11,5.9,6.90,7.60])
  const asType= tensor6.asType("int32")

  text+="ASTYPE: \n\n"

  text+="ANTES: \n\n"
  text+=tensor6+"\n\n"

  text+="DEPOIS: \n\n"
  text+=asType+"\n\n"

  text+="as1D: \n\n"

  text+="ANTES: \n\n"
  text+=tensor1+"\n\n"

  text+="DEPOIS: \n\n"
  text+=as1D+"\n\n"

  text+="as2D: \n\n"

  text+="ANTES: \n\n"
  text+=tensor2+"\n\n"

  text+="DEPOIS: \n\n"
  text+=as2D+"\n\n"

  text+="as3D: \n\n"

  text+="ANTES: \n\n"
  text+=tensor3+"\n\n"

  text+="DEPOIS: \n\n"
  text+=as3D+"\n\n"
  
  text+="as4D: \n\n"

  text+="ANTES: \n\n"
  text+=tensor4+"\n\n"

  text+="DEPOIS: \n\n"
  text+=as4D+"\n\n"
  
  text+="as5D: \n\n"

  text+="ANTES: \n\n"
  text+=tensor5+"\n\n"

  text+="DEPOIS: \n\n"
  text+=as5D+"\n\n"
  
  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}