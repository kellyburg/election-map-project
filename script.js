var createCandidate = function(candidateName, partyRgb){
    var politician={};
    politician.name=candidateName;
    politician.electionResults=null;
    politician.totalVotes=0;
    politician.partyColor= partyRgb;
    politician.tallyVotes = function (candidate){
      this.totalVotes=0;
      for(i=0; i<this.electionResults.length; i++){
        this.totalVotes+=this.electionResults[i];
       }
    };
      return politician;
    };
    
    var clarisa = createCandidate("Clarisa Connelly", [132, 17, 11]);
    var lenny = createCandidate("Lenny Lansberry",  [245, 141, 136]);
    clarisa.electionResults=[5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
    lenny.electionResults=[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
    
    clarisa.electionResults[9]=1;
    lenny.electionResults[9]=28;
    clarisa.electionResults[4]=17;
    lenny.electionResults[4]=38;
    clarisa.electionResults[43]=11;
    lenny.electionResults[43]=27;
    
    var setStateResults = function(state){
    theStates[state].winner=null;
      if (clarisa.electionResults[state]>lenny.electionResults[state]){
          theStates[state].winner=clarisa;
          }
      else if (lenny.electionResults[state]>clarisa.electionResults[state]){
          theStates[state].winner=lenny;
          }
      var stateWinner=theStates[state].winner;
      
      if (stateWinner!==null){
        theStates[state].rgbColor=stateWinner.partyColor;
      }
      else{
        theStates[state].rgbColor=[11, 32, 57];
      }
    };
    
    
    clarisa.tallyVotes();
    lenny.tallyVotes();
    
    
    var winner;
    if(clarisa.totalVotes>lenny.totalVotes){
      winner="clarisa";
    }
    else if (lenny.totalVotes>clarisa.totalVotes){
      winner="lenny";
    }
    else{
      winner=null;
    }
    console.log(clarisa);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    