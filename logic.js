const findWinner=()=>{

    if(tiktacArray[0]== tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
       setWinMessage(tiktacArray[0]+" has won")
    }
    else if(tiktacArray[3]== tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
        setWinMessage(tiktacArray[3]+" has won")
    }
    else if(tiktacArray[6]== tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
        setWinMessage(tiktacArray[6]+" has won")
    }
    else if(tiktacArray[0]== tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won")
    }
    else if(tiktacArray[1]== tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]){
        setWinMessage(tiktacArray[1]+" has won")
    }
    else if(tiktacArray[2]== tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won")
    }
    else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]==tiktacArray[6] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won")
    }
    else if(tiktacArray[0]== tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won")
    }
}