// make sure this function has read the whole html
$(document).ready(function(){
    // scroll top button
    $('.scrolltopbutton').on('click', function() {
        $("html, body").animate({ scrollTop: 0}, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".scrolltopbutton").stop().animate({
                opacity: 1
            }, 300);
        } else {
            $(".scrolltopbutton").stop().animate({
                opacity: 0
            }, 300);
        }
    });

// audio play
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://www.dropbox.com/s/vspmhd3ymcww0r8/DogWoof-SoundBible.com-457935112.mp3?dl=0');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });

    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});
    // project page interaction
    // $('.projectimages').on('click', function() {
    //     $("#showprojectimages").attr("alt", $(this).attr('alt'));
    //     $("#showprojectimages").attr("src", $(this).attr('src'));
    //     var titleholder;
    //     var textholder;
    //     var resultholder;
    //     if( $(this).attr('src') === "images/orange.jpg"){
    //         titleholder = "Assessment of Orange Grading by Computer Vision Technique"
    //         textholder ="Wrote a MATLAB program to extract features of 133 navel oranges as inputs for support vector machine to classify oranges into three categories."
    //         resultholder = "Prediction accuracy could reach 80%.";
    //     }else if ( $(this).attr('src') === "images/computer.jpg"){
    //         titleholder = "Linux Kernel Component Design";
    //         textholder ="Wrote a concurrent program using Mesa Monitor and Semaphore that schedules disk requests. Implemented operating system kernel library including mutex, condition variable. Wrote kernel code for external pager, MMU and interrupt handler in C++."
    //         resultholder = "Implemented operating system kernel library."
    //     }else{
    //         titleholder = "Movie Recommender System";
    //         textholder = "Implemented K means clustering algorithm in Python, and applied it to the movie recommender system"
    //         resultholder = "Prediction accuracy could reach 75%."
    //     }
    //     $("#showtitle").text(titleholder);
    //     $("#showparagraph").text(textholder);
    //     $("#resultdescription").text(resultholder);

    // });
});
