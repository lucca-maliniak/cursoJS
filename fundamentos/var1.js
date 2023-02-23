// tipo var só existe dois escopos: global ou em um escopo de uma funcao
{
    {
        {
            {
                var sera = "Sera?"
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
}

teste()
// console.log("teste", local)