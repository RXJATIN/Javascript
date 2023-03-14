const NOME1 = "Paola";
        const NOME2 = "Paolo";

        let n1 = 1;
        let n2 = 4;

        /*let numero = prompt("Inserisci un valore");
        let risultato = 0;

        for(let i=0; i<=numero; i++)
        {
            document.write((risultato)+"<br>");
            risultato += i;
        }

        document.write((risultato));*/

        let tabella=0;
        let num=0;

        for(let x=0; x<10; x++)
        {
            for(i=1; i<=10; i++)
            {
                num=(x*10)+i;
                if(num<=10)
                {
                    document.write("|&nbsp; &nbsp");
                }
                else
                {
                    document.write("|&nbsp;");
                }
                document.write(num+" ");
            }
            document.write('<br>');
        }

        document.write('<br>');
        document.write('<br>');
       let numero = prompt("Inserisci un valore: ");
       while(numero!=0)
       {
            let numero = prompt("Inserisci un valore: ");
            document.write(numero);
            somma+=numero;
       }
            

        

        document.write(somma);
        /*if(numero%2===0)
        {
            alert("Pari");
        }
        else
        {
            alert("Dispari");
        }


        if(n2===4)
        {
            alert("Uguali");
        }
        else
        {
            alert("Diversi");
        }*/

