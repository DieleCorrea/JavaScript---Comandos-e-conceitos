var agora = new Date(); //Instancia para pegar a hora do dia de hoje 
var hora = agora.getHours(); // Aqui joga a hotra do dia de hoje        
console.log(`Agora são exatamente ${hora} horas`);
if(hora < 12){
    console.log('Bom dia')
}else if(hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite');
}