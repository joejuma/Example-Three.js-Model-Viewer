function changeColor(object,color)
{
	object.material.color.setHex(color);
};

function changeHeight(object,height)
{
	object.scale.x = 1.0;
	object.scale.y = 1.0 * height;
	object.scale.z = 1.0;
};

function changeLighting(light,bool)
{
	// True:Bright, False:Dark
	bool = !bool;
	if(bool)
	{
		light.color.setHex(0xaeaeae);
		light.intensity = 1;
	}
	else if(!bool)
	{
		light.color.setHex(0x1e1e1e);
		light.intensity = 0.10;
	}
	else
	{
		console.log('Error:bool is neither true nor false?');
	};
	return bool;
};

function swivel(object,amount)
{
	rotate(object,0.5,amount,0);
};


function canvasResize(camera,renderer)
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	
	renderer.setSize(window.innerWidth,window.innerHeight);
};

function rgbToHex(r,g,b)
{
	var color = (r << 16) + (g << 8) + b;
	return ('0x' + color.toString(16));
};



function initSliders()
{
	$('#Height').slider({
		min:10,
		max:100,
		value:100,
		slide: function(event,ui){
			changeHeight(cube,(ui.value * 0.01));
		}
	});
	
	$('#Rotate').slider({
		min:1,
		max:360,
		value:50,
		slide: function(event,ui){
					swivel(cube,(ui.value * 0.01));
		}
	});
	
	$('#Red').slider({
		min:0,
		max:255,
		value:255,
		slide: function(event,ui){
			var r = cube.material.color.r;
			var g = cube.material.color.g;
			var b = cube.material.color.b;
			r = (ui.value * 0.003912);
			cube.material.color.setRGB(r,g,b);
		}
	});
	
	$('#Green').slider({
		min:0,
		max:255,
		value:255,
		slide: function(event,ui){
			var r = cube.material.color.r;
			var g = cube.material.color.g;
			var b = cube.material.color.b;
			g = (ui.value * 0.003912);
			cube.material.color.setRGB(r,g,b);
		}
	});
	$('#Blue').slider({
		min:0,
		max:255,
		value:255,
		slide: function(event,ui){
			var r = cube.material.color.r;
			var g = cube.material.color.g;
			var b = cube.material.color.b;
			b = (ui.value * 0.003912);
			cube.material.color.setRGB(r,g,b);
		}
	});
}


function loadCallback(geometry){
	var material = new THREE.MeshLambertMaterial({color:0xffffff});
	cube = new THREE.Mesh(geometry,material);
	scene.add(cube);
};