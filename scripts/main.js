var player;
var wheel;
var hand;

var dummy;

setTimeout(function() { alert("|    <----- STICK"); }, 86400000);


runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	player = runtime.getInstanceByUid(2);
	wheel = runtime.getInstanceByUid(8);
	hand = runtime.getInstanceByUid(9);
	dummy = runtime.getInstanceByUid(10);
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	runtime.layout.scrollX += (player.x - runtime.layout.scrollX) * 5 * runtime.dt;
	runtime.layout.scrollY += (player.y - runtime.layout.scrollY) * 5 * runtime.dt;
	wheel.x = player.x;
	wheel.y = player.y;
	hand.x = player.x + player.behaviors.Platform.vectorX / 100;
	hand.y = player.y;
	wheel.angle += player.behaviors.Platform.vectorX / 2000;
	player.angle = player.behaviors.Platform.vectorX / 2000;
	
	dummy.x += ((player.x + 100) - dummy.x) / 50;
	dummy.y += ((player.y - 50) - dummy.y) / 50 + Math.sin(runtime.gameTime * 2) * 0.5;
	
	if(player.behaviors.Platform.vectorX > 0){
		player.width = 62.5;
		hand.width = 17;
	}
	else if(player.behaviors.Platform.vectorX < 0){
		player.width = -62.5;
		hand.width = -17;
	}
}