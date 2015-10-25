function rotate(object,x,y,z)
{
	object.rotation.x = x;
	object.rotation.y = y;
	object.rotation.z = z;
};

function translate(object,x,y,z)
{
	object.position.x += x;
	object.position.y += y;
	object.position.z += z;
};

function scale(object,x,y,z)
{
	object.scale.x *= x;
	object.scale.y *= y;
	object.scale.z *= z;
};

function uniformScale(object,scale)
{
	object.scale.x *= scale;
	object.scale.y *= scale;
	object.scale.z *= scale;
};

function zoomIn(camera,amount)
{
	camera.position.z -= amount;
};

function zoomOut(camera,amount)
{
	camera.position.z += amount;
};

function zoom(camera,amount)
{
	// negative numbers will zoom out
	// positive will zoom in
	camera.position.z -= amount;
};