function generateColumnName(word){
    let tableName = '';
      let start = 0;
      let index = start;
      while (index < word.length){
         if( word.charCodeAt(index) > 64 && word.charCodeAt(index) < 91){ 
          tableName += word.slice(start,index) + '_';
             start = index;
      }
      ++index
    }
          tableName += word.slice(start,index)
          return tableName.toLowerCase();
  }

  console.log(generateColumnName("studentName"));
  
  