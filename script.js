const suspectInfo = {
  James: [ 'Jacob', 'Bill', 'Lucas' ],
  Johnny: [ 'David', 'Kyle', 'Lucas' ],
  Peter: [ 'Lucy', 'Kyle' ]
}

const dead = [ 'Lucas', 'Bill' ]



function killer(suspectInfo, dead) {
  let result = ''
  for(let i = 0 ; i<dead.length;i++){
  	for(let key in suspectInfo){
  		suspectInfo[key].filter(item=>{
  			if(item == dead[i]){
  				result = key
  			}
  		})
  	}
  }
return result
}


killer(suspectInfo,dead)