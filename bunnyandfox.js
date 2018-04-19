$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");





    $("#bunny_container").addClass("bunny_container_walk_in");
    $("#bunny_container").addClass("bunny_start_position");
    $("#bunny_sprite").addClass("bunny_paws");
   // $("#bunny_container").on("animationend", trin1A);



    $("#fox_container").addClass("fox_container_walk_in");
    $("#fox_sprite").addClass("fox_paws");
    $("#fox_container").on("animationend", trin1A);


    //start_music
    //bunny_walk_in
    //fox_walk_in
    //sommer music stop
}

function trin1A() {
    console.log("trin1A");


    $("#bunny_container").addClass("bunny_container_stop");


   // $("#fox_container").off("animationend", trin1A);


    $("#fox_container").removeClass("fox_container_walk_in");
    $("#fox_sprite").removeClass("fox_paws");
    $("#fox_container").addClass("fox_container_stop");



    //scary music/thunder
    //bunny_walk_stop
    //fox_walk_stop
}

function beslutningA() {
    consol.log("beslutningA");

    document.getElementById("runaway").onclick = doFunction;

    var el = document.getElementById("runaway");
    if (el.addEventListener)
        el.addEventListener("click", doFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', doFunction);


    document.getElementById("fight").onclick = doFunction;

    var el = document.getElementById("fight");
    if (el.addEventListener)
        el.addEventListener("click", doFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', doFunction);


    //buttons A and B are shown
    //music "theme stab"
    //bunny_flee
    //fox_attack
    //music "theme stab" stop
}

function trin2A() {
    consol.log("trin2A");

    //bunny_stop
    //fox_stop
    //music_sad_start
    //music_sad_stop

}

function brave_bunny() {
    console.log("brave_bunny");

    //action_music_start
    //rambo_bunny
    //egg_bombs
    //timer
    //action_music_stop
}

function bunny_win() {
    console.log("bunny_win");

    //victory_music_start
    //dead_fox


}
