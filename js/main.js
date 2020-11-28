var fontFamily = document.getElementById('fontFamily');
fontFamily.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';

/* Builds the list of villages on the Friendship Page. */

function loadVillagersList() {
    
}



//console.log(villagers.length)

var friendshipURL = window.location.href;




if (friendshipURL.includes('?')) {
    //Remove list and populate with villager data
    
    let name = friendshipURL.split('?');
    var villagerList = document.getElementById('villager-list');

    villagerList.innerHTML = '<div class="col col-6-xs col-6-sm col-2-md col-6-lg"><img src="img/feature-assets/villager-photos/' + name[1] + '.png"></div><div class="col col-6-xs col-6-sm col-2-md col-6-lg"><h2>' + name[1] + ' loves:</h2><ul class="loves-list" id="lovesList"></ul><a class="back-button" href="features/friendship.html">Back</a></div>';

    var numberOfVillagers = villagers.length;

    for (let i = 0; i < numberOfVillagers; i++) {
        //console.log(villagers[i].name)
        
        if (villagers[i].name === name[1]) {
            var numOfLoves = villagers[i].loves.length;

            for (let j = 0; j < numOfLoves; j++) {
                console.log(villagers[i].loves[j])
                console.log("built")
                var lovesList = document.getElementById("lovesList")
                lovesList.innerHTML = lovesList.innerHTML + '<li>' + villagers[i].loves[j] + '</li>'
                console.log("wrote")
            }

        } else {
            
        }

    }
    
} else {
    var numberOfVillagers = villagers.length;

    for (let i = 0; i < numberOfVillagers; i++) {
        var villagerList = document.getElementById('villager-list');
        
        villagerList.innerHTML = villagerList.innerHTML + '<div class="col col-4-xs col-6-sm col-2-md col-2-lg"><a class="villager" href="features/friendship.html?' + villagers[i].name +'"><img src="img/feature-assets/villager-photos/' + villagers[i].name +'.png"><h2 class="villager-title">' + villagers[i].name + '</h2></a></div>'
}



    
    







    //var name = villagers[i].name

    //villagerList.innerHTML = name

}