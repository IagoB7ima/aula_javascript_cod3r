// O var é uma variável global, ou seja, ela pode ser acessada de fora do escopo.
{
    {
        {
            {
                var sera ='Será???';
                console.log(sera);
            }
        }
    }
}

console.log(sera);

// O var dentro de uma função é um escopo local, ou seja, ela só pode ser acessada dentro da função.
function teste() {
    var local = 123;
    console.log(local);
}

teste();
