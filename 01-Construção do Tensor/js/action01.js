$("#result").text('')

function executar(){
  let text=""
  const escalar=tf.scalar(1.5)
  const tensor1d= tf.tensor1d([1,2,3])
  const tensor2d= tf.tensor2d([[1,2],[2,2]])
  const tensor3d= tf.tensor3d([[[5,1,3],[1,0,2],[3,2,1]]])
  //const tensor3d= tf.tensor3d([5,1,3,1,0,2,3,2,1],[1,3,3])
  //const tensor4d= tf.tensor4d([[[[1,7,0],[2,2,1],[3,4,5]],[[3,3,3],[4,4,4],[5,4,4]]]])
  const tensor4d= tf.tensor4d([1,7,0,2,2,1,3,4,5,3,3,3,4,4,4,5,4,4],[1,2,3,3])
  text+="Tensor escalar: \n"+escalar+"\n\n"
  text+="Tensor de 1 dimensão: \n"+tensor1d+"\n\n"
  text+="Tensor de 2 dimensão: \n"+tensor2d+"\n\n"
  text+="Tensor de 3 dimensão: \n"+tensor3d+"\n\n"
  text+="Tensor de 4 dimensão: \n"+tensor4d+"\n\n"
  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}