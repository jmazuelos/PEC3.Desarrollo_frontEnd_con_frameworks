//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones y salidas indicadas en los comentarios.


interface Plane{
  model:string,
  npassengers:number
}

interface HangarHash{
	[key: string]: Plane;
} 

let myHangar:HangarHash = {}

myHangar['123Z']={
	model:'airbus',
	npassengers:200
}
myHangar['H789']={ 
	model:'boeing',
	npassengers:151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

function showHangarHash(myHangar: HangarHash): void{
	let msg: string = '';
	Object.keys(myHangar).forEach(key => {
		msg += myHangar[key] + ':' + myHangar[key]['model'] + '(' + myHangar[key]['npassengers'] + ')';
		console.log(msg);
		msg = '';
	})
}

showHangarHash(myHangar);
