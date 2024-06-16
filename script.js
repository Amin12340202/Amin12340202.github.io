async function enterFullScreen() {
    await
    document.documentElement.requestFullscreen();
}
async function exitFullScreen() {
    await document.exitFullscreen();
}
document.getElementById("full").addEventListener("click", enterFullScreen);
document.getElementById("full").addEventListener("click", exitFullScreen);