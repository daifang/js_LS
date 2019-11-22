function Grisaia() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Grisaia");
			resolve()
		}, 1000);
	})
}
function kasami() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("kasami");
			resolve()
		}, 1000);
	})
}
function katsuki() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("katsuki");
			resolve()
		}, 1000);
	})
}
Grisaia().then(kasami).then(katsuki);

Grisaia();
kasami();
katsuki();

(async function () {
    await Grisaia();
    await kasami();
    await katsuki();
})()

