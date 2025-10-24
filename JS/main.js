document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    var iframe = this.querySelector('iframe');
    var videoSrc = iframe.src;
    iframe.src = videoSrc;
});