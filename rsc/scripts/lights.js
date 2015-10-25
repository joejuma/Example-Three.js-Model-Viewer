var lightArray = new Array();

function createAmbientLight(scene,color)
{
	/* 
		Abstracts the Three.js to increase readability
	*/
	var light = new THREE.AmbientLight(color);
	scene.add(light);
	return light;
};

/*
	Add point light(I haven't done this yet because i'm figuring out the paramter list)
	Add hemi light
	
*/