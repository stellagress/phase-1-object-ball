


function gameObject (){

    const teams = {
        
        home: {
            teamName : "Auburn",
            colors : ['Orange', 'White', 'Black'],
            players: {
                "Alan Anderson": {
                    stats:{
                        number: "value1",
                        shoe: "value2",
                        points: "value3",
                        rebounds: "value4",
                        assists: "value5",
                        steals: "value6",
                        blocks: "value7",
                        slamDunks: "value8"
                    },
                },
    
                "Reggie Evans":{
                    stats:{
                        stats:{
                            number: "value1",
                            shoe: "value2",
                            points: "value3",
                            rebounds: "value4",
                            assists: "value5",
                            steals: "value6",
                            blocks: "value7",
                            slamDunks: "value8"
                        }
                    }
                }
    
                    
                
            }
        },
    
    
    
        away : {
            teamName : "Alabama",
            colors: ['Red','White'],
            players: {
                "name": {
                    stats:{
                        number: "value1",
                        shoe: "value2",
                        points: "value3",
                        rebounds: "value4",
                        assists: "value5",
                        steals: "value6",
                        blocks: "value7",
                        slamDunks: "value8"
    
                    }
                }
            }
        }
    }
    
    
    
        return teams
    }
    
    
    
    
    
    // function homeTeamName() {
    //   let object = gameObject();
    //   return object["home"]["teamName"];
    // }
    
    function homeTeamName() {
      return gameObject()["home"]["teamName"];
    }
    
    console.log(homeTeamName());
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    