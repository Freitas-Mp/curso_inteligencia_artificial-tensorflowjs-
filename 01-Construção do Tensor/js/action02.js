$("#result").text('')

function executar(){
  let text=""
  const int32= tf.tensor2d([1,2,2,2],[2,2],'int32')
  const float32= tf.tensor2d([1.5,2.1,2.78,2.0],[2,2],'float32')
  const bool= tf.tensor2d([true,false,true,false],[2,2],'bool')
  const string= tf.tensor2d(['mp','vp','lp','jd'],[2,2],'string')
  text+="Tensor de tipo int32: \n"+int32+"\n\n"
  text+="Tensor de tipo float32: \n"+float32+"\n\n"
  text+="Tensor de tipo bool: \n"+bool+"\n\n"
  text+="Tensor de tipo string: \n"+string+"\n\n"
  exibir(text)
}

function exibir(str=""){
	$("#result").text(str)
}