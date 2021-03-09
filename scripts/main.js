//Le Zooom

const defaultMinZoomLim = Vars.renderer.minZoom;
const defaultMaxZoomLim = Vars.renderer.maxZoom;
// console.log("default min zoom: "+defaultMinZoomLim);
// console.log("defaultn max zoom: "+defaultMaxZoomLim)

const minZoomLim = 0.5;
const maxZoomLim = 25;

// default extended zoom limits
const minZoom = 0.75;
const maxZoom = 20;

function resetZoomLim(toOriginal){
	if(toOriginal){
		Vars.renderer.minZoom = defaultMinZoomLim;
  	Vars.renderer.maxZoom = defaultMaxZoomLim;
	} else {
  	Vars.renderer.minZoom = minZoomLim;
  	Vars.renderer.maxZoom = maxZoomLim;
  }
}


function updateZoom(min, max){

  Vars.renderer.minZoom = min;
  Vars.renderer.maxZoom = max;
}

if(!Vars.headless){
	updateZoom(minZoomLim,maxZoomLim)
}