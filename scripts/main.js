//Le Zooom

const defaultMinZoomLim = Vars.renderer.minZoom;
const defaultMaxZoomLim = Vars.renderer.maxZoom;

const minZoomLim = 0.5;
const maxZoomLim = 25;

// default extended zoom limits
const minZoom = 0.75;
const maxZoom = 20;

function resetZoomLim(toOriginal){
	if(!Vars.headless){
		if(toOriginal){
			Vars.renderer.minZoom = defaultMinZoomLim;
	  	Vars.renderer.maxZoom = defaultMaxZoomLim;
		} else {
	  	Vars.renderer.minZoom = minZoomLim;
	  	Vars.renderer.maxZoom = maxZoomLim;
	  }
	}
}

function updateZoom(min, max){
	if(!Vars.headless){
	  Vars.renderer.minZoom = min;
	  Vars.renderer.maxZoom = max;
	}
}

updateZoom(minZoomLim,maxZoomLim)