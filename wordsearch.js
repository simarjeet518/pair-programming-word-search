const vertical = (matrix) => {
        let result = [];
        for (let i = 0; i < matrix[0].length; i++) {
          result.push([]);
        }
                                                               //pair programming with simarjeet ,dongnyuk kim(matt)
        for (let x = 0; x < matrix.length; x++) {
          for (let y = 0; y < matrix[0].length; y++) {
            result[y].push(matrix[x][y]);
          }
        }
        
        return result;
      };
    
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let result = false;
    for (l of horizontalJoin) {
        if(l.includes(word)){
            result = true;
            break;
        } 
    }
    if(!result) {
       let verticalJoin = vertical(letters);
       //console.log(verticalJoin);
       verticalJoin = verticalJoin.map(ls => ls.join(''));
       for (l of verticalJoin) {
        if(l.includes(word)){
            result = true;
            break;
        } 
    }
    }
    return result;
}

// const diagonal = function(array,word) {
//     let newArr = [];
//         let k =0;
//     let len = array.length;
//     for ( let i = 0 ; i < array.length ; i++) {
//         newArr =[];
//          len =len-1;
//           k++;
//         for(let j = 0 ; j <= len ; j++) {
   
//                 newArr.push(array[j][k])
//                 k++;
//         }
//         k=0;
//         newArr = newArr.join('');
//         console.log(newArr);
//         if(word === newArr) 
//         {
//             return true;
//         }
//     }
//     return false;

// }

//    diagonal([['A','B','C'],
//              ['D','E','F'],
//              ['G','H','I']],'c');




module.exports = wordSearch