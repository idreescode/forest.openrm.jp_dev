(function(){
    var prev = document.getElementById('interviewPrevious');
    if (prev) {
        prev.onclick = function() {
            document.getElementById('interviewCards').classList.remove('paged');
        };
    }

    var next = document.getElementById('interviewNext');
    if (next) {
        next.onclick = function() {
            document.getElementById('interviewCards').classList.add('paged');
        };
    }
})();