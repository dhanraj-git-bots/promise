function applyLogic() {
    console.log("Promise done");
}

function loadFiles(fileAlreadyLoaded) {
	let prmse = new _promise();
	if (fileAlreadyLoaded) {
		prmse.resolve();
	} else {
		setTimeout(function () { //Assume this is the load call and it takes 5 seconds
			prmse.resolve();
	    }, 5000);
	}
	return prmse;
}

function init(fileAlreadyLoaded) {
    loadFiles(fileAlreadyLoaded).done(applyLogic);
}