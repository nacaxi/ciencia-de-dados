const url = "https://servicodados.ibge.gov.br/api/v3/agregados/2575/periodos/200101%7C200102%7C200103%7C200104%7C200105%7C200106%7C200107%7C200108%7C200109%7C200110%7C200111%7C200112%7C200201%7C200202%7C200203%7C200204%7C200205%7C200206%7C200207%7C200208%7C200209%7C200210%7C200211%7C200212%7C200301%7C200302%7C200303%7C200304%7C200305%7C200306%7C200307%7C200308%7C200309%7C200310%7C200311%7C200312%7C200401%7C200402%7C200403%7C200404%7C200405%7C200406%7C200407%7C200408%7C200409%7C200410%7C200411%7C200412%7C200501%7C200502%7C200503%7C200504%7C200505%7C200506%7C200507%7C200508%7C200509%7C200510%7C200511%7C200512%7C200601%7C200602%7C200603%7C200604%7C200605%7C200606%7C200607%7C200608%7C200609%7C200610%7C200611%7C200612%7C200701%7C200702%7C200703%7C200704%7C200705%7C200706%7C200707%7C200708%7C200709%7C200710%7C200711%7C200712%7C200801%7C200802%7C200803%7C200804%7C200805%7C200806%7C200807%7C200808%7C200809%7C200810%7C200811%7C200812%7C200901%7C200902%7C200903%7C200904%7C200905%7C200906%7C200907%7C200908%7C200909%7C200910%7C200911%7C200912%7C201001%7C201002%7C201003%7C201004%7C201005%7C201006%7C201007%7C201008%7C201009%7C201010%7C201011%7C201012%7C201101%7C201102%7C201103%7C201104%7C201105%7C201106%7C201107%7C201108%7C201109%7C201110%7C201111%7C201112%7C201201%7C201202%7C201203%7C201204%7C201205%7C201206%7C201207%7C201208%7C201209%7C201210%7C201211%7C201212%7C201301%7C201302%7C201303%7C201304%7C201305%7C201306%7C201307%7C201308%7C201309%7C201310%7C201311%7C201312%7C201401%7C201402%7C201403%7C201404%7C201405%7C201406%7C201407%7C201408%7C201409%7C201410%7C201411%7C201412%7C201501%7C201502%7C201503%7C201504%7C201505%7C201506%7C201507%7C201508%7C201509%7C201510%7C201511%7C201512/variaveis/1353%7C1351?localidades=N1[all]&classificacao=11773[95021]"

async function visualizarDados(){
  const res = await fetch(url)
  const dados = await res.json()
  região = 0
  tipo_dados = (dados[0]['variavel'])
  resultado_dados = (dados[0]['resultados'][0]["series"][0]["serie"])
}

visualizarDados()