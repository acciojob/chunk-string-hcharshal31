function stringChop(str, size, x) {
	let chunkArr = [];
	for(let i = 0; i < size; i + x){
	    let chunk = "";
	    for(let j = i; j < i + x; j++){
			if(j > size - 1){
				break
			}
		    chunk += str[j];
	    }
	    chunkArr.push(chunk);
  }
	return chunkArr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
