let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function calcularMedia(atletas) {
     for (let i = 0; i < atletas.length; i++) {
       let notas = atletas[i].notas;
       notas.sort(function(a, b){return a - b});
       notas = notas.slice(1, -1);
       let media = notas.reduce((a, b) => a + b, 0) / notas.length;
       console.log(`Atleta: ${atletas[i].nome}`);
       console.log(`Notas Obtidas: ${notas.join(",")}`);
       console.log(`Média Válida: ${media}`);
     }
   }
   
   calcularMedia(atletas);