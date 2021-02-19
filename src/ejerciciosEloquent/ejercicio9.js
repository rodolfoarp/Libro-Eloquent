const size = 8;
let hash = "";

for(let i = 1; i <= size; i++){
    for(let j = 1; j <= size; j++){
        if((i + j) % 2 === 0){
        hash += " ";
        } else {
        hash += "#";
        }
    }
    hash += "\n"
}

console.log(hash)




/* let numeral = ' # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #';
console.log(numeral) */








