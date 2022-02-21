var player;
var wheel;

runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	player = runtime.getInstanceByUid(2);
	wheel = runtime.getInstanceByUid(8);
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	runtime.layout.scrollX += (player.x - runtime.layout.scrollX) * 5 * runtime.dt;
	runtime.layout.scrollY += (player.y - runtime.layout.scrollY) * 5 * runtime.dt;
	wheel.x = player.x;
	wheel.y = player.y;
	wheel.angle += player.behaviors.Platform.vectorX / 2000;
	player.angle = player.behaviors.Platform.vectorX / 1000;
	
	if(player.behaviors.Platform.vectorX > 0){
		player.width = 62.5;
	}
	else if(player.behaviors.Platform.vectorX < 0){
		player.width = -62.5;
	}
}