module.exports = function towelSort (matrix) {
	if(!matrix || !matrix.length) return []; 
  return matrix.map((el,index)=>{
	  if(index % 2 ===1) {
		  el.sort((a,b)=> b-a);
	  }
	  return el;
  }).flat();
}