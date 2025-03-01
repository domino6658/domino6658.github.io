document.documentElement.classList.add('fonts-loading');
const fontOutfit = new FontFaceObserver('Outfit');
const fontInter = new FontFaceObserver('Inter');
Promise.all([fontOutfit.load(), fontInter.load()]).then(function() {
    document.documentElement.classList.remove('fonts-loading');
}).catch(function() {
    document.documentElement.classList.remove('fonts-loading');
});