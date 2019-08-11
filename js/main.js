(function(){
    let startBtn = $ ('.startBtn');
    let maininput = $ ('.maininput');
    let allLines = $('.line');




    startBtn.on('click' , startGame);
    function startGame(){
        $(this).hide();
        //setup
        let speed = 1;
        let textLength = 3;
        let typingWords = words.filter(word => word.length == textLength );
        let lvl = 6;
        // insert spanse 

        function insertSpans() {
          for(var i = 0; i < allLines.length; i++ ) {
              let rand = Math.floor(Math.random() * 20);
              if(rand <= lvl) {
                  let text = chooseText();                  
                  $(allLines[i]).append(`<span> ${text} </span>`);                  
              }
          }
        }

        insertSpans();
        
        function chooseText(){
            let rand = Math.floor(Math.random() * typingWords.length);
            let savedText = typingWords[rand];
            typingWords.splice(rand,1);             

            return savedText;           
        }  
        
        //animation span

        let moveAll = setInterval (function(){
            let allSpans = $('span');
            allSpans.css({
                left: '+=' +speed
            })
            //testiranje

            $.each(allSpans,(index,el)=> {
                let position = $(el).position().left;
                if (position > 850) {
                    clearAllIntervals()
                } else if (position > 700 && position <710) {
                    $(el).addClass ('danger');
                }
            }) 

        },10) 

        function clearAllIntervals() {
            clearInterval(moveAll);
        }
        

    } //end startGame

})()