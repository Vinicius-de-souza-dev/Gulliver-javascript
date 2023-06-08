var cidades = prompt("Qual cidade deseja visitar ? \n 1 - São Pulo  2 - Las Vegas  3 - Moscou");
switch(cidades){ 
    case "1":
        alert("A Terra da Garoa!\nFundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista")

        var roteiroA = "Região: Avenida Paulista\nMASP\nParque Trianon\nRua Augusta ou\n"
        var roteiroB = "Região: Centro\nCatedral da Sé\nPátio do Colégio\nRua Augusta ou\n"
        var roteiroC = "Região: Vila Madalena\nBeco do Batman\nFeirinha da Benedito Calixto\nLivraria da Vila"
        var roteirossp = roteiroA + roteiroB + roteiroC;
        alert(roteirossp);
        break;
    case "2":
        alert("Viva Las Vegas!\nA cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar! Segue algumas dicas de locais para visitar")

        var roteiroD = "Região: Las Vegas Boulevard South\nFonte do Bellagio\nPrincipais Cassinos\nMadame Tussauds ou\n"
        var roteiroE = "Região: Downtown\nFremont\nLas Vegas Art Museum\nMuseu Nacional do Crime Organizado ou\n"
        var roteiroF = "Região: Las Vegas Boulevard North\nOutlet Premium North\nStratosphere\nApple Fashion Show"
        var roetiroslv = roteiroD + roteiroE + roteiroF;
        alert(roetiroslv);
        break;
    case "3":
        alert("Privet!\nA capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada, segue algumas dicas de locais para visitar")

        var roteiroG = "Região: Praça Vermelha\nMuseu Histórico do Estado\nCatedral de São Basílico\nMausoléu de Lênin ou\n"
        var roteiroH = "Região: Centro\nTeatro Bolshoi\nMonumento a Karl Marx\nRio Moscou ou\n"
        var roteiroI = "Região: Obras pela cidade\nMetrô de Moscou\nAs Sete Irmãs\nMoscow Leningradsky Railway Station"
        var roteirosms = roteiroG + roteiroH + roteiroI;
        alert(roteirosms);
        break;
    default:
        alert("Ops! Opção inválida, vamos tentar de novo!")
}