let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let span2, span1;

span1 = document.createElement("span");
span2 = document.createElement("span");
container.append(span1);
container.append(span2);
container.classList.contains;
btn.addEventListener("click", function () {
    span1.textContent = "Hãy nói nội dung bạn muốn";
    span1.classList.add("mes");
    if (span1.classList.contains("success")) {
        span1.classList.remove("success");
    }
    const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
    recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
        console.log(event.results);
        span2.classList.add("action");
        const transcript = event.results[0][0].transcript.toLowerCase();
        span1.classList.add("success");
        span1.textContent = "Đã nói xong ! Xem nó mở dúng cái yêu cầu chưa :)";
        span2.textContent = `Đợi chút đang tìm ${transcript}`;
        handleVoiceCommand(transcript);
    };
    recognition.start();
});
function handleVoiceCommand(transcript) {
    let test;

    if (transcript.includes("google")) {
        test = "google";
        window.open("https://www.google.com", "_blank");
    } else if (transcript.includes("facebook")) {
        test = "facebook";
        window.open("https://www.facebook.com", "_blank");
    } else if (transcript.includes("youtube")) {
        test = "youtube";
        window.open("https://www.youtube.com", "_blank");
    } else if (transcript.includes("google drive")) {
        test = "google drive";
        window.open("https://drive.google.com", "_blank");
    } else if (
        transcript.includes("google maps") ||
        transcript.includes("bản đồ")
    ) {
        test = "Bản đồ";
        window.open("https://www.google.com/maps", "_blank");
    } else if (
        transcript.includes("chỉ đường") ||
        transcript.includes("tới") ||
        transcript.includes("đường tới")
    ) {
        const location = transcript
            .replace(/chỉ đường|tới|đường tới/g, "")
            .trim();
        test = location;
        window.open(
            `https://www.google.com/maps/search/${encodeURIComponent(
                location
            )}`,
            "_blank"
        );
    } else if (
        transcript.includes("bài hát") ||
        transcript.includes("bài") ||
        transcript.includes("nghe bài hát")
    ) {
        const song = transcript.replace(/bài hát|nghe bài hát|bài/g, "").trim();
        test = song;
        window.open(
            `https://mp3.zing.vn/tim-kiem/bai-hat.html?q=${encodeURIComponent(
                song
            )}`,
            "_blank"
        );
    } else if (
        transcript.includes("video") ||
        transcript.includes("mở video") ||
        transcript.includes("xem video")
    ) {
        const video = transcript
            .replace(/video|mở video|xem video/g, "")
            .trim();
        test = video;
        window.open(
            `https://www.youtube.com/results?search_query=${encodeURIComponent(
                video
            )}`,
            "_blank"
        );
    } else {
        span2.textContent = `Chịu không thấy !`;
    }
    if (test) {
        span2.innerHTML = `Ok rồi nhé mở <span class="newtap">${test}</span> rồi đó`;
    }
}
