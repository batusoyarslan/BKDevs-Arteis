document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current + "+";
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 100, 3000); // İkinci parametre olan "duration" değerini artırarak daha yavaş saymasını sağlayabilirsiniz
    counter("count2", 0, 60, 3000); // İkinci parametre olan "duration" değerini artırarak daha yavaş saymasını sağlayabilirsiniz
    counter("count3", 0, 15, 3000); // İkinci parametre olan "duration" değerini artırarak daha yavaş saymasını sağlayabilirsiniz
    counter("count4", 0, 13, 3000); // İkinci parametre olan "duration" değerini artırarak daha yavaş saymasını sağlayabilirsiniz
});
