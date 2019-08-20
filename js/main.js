(function (){
    let startBtn = $('.startBtn');
    let maininput = $('.main-input');
    let allline = $('.line');
    let allText = [];
    let score = 0;
    let displayResult = $('.displayResult');

    startBtn.on('click',starGame);

    function starGame() {
        $(this).hide();
        maininput.focus();
        //setup

        let speed = 1;
        let textLength = 3;
        let typingWords = words.filter(word => word.length == textLength);
        let lvl = 6;

        let speedUp = setInterval(function(){
            textLength ++;
            typingWords = words.filter(word => word.length == textLength);
        },20000)

        maininput.on ('keyup', checkInputTyping);
        function checkInputTyping() {
            let inputVal = $(this).val();
            let self = $(this);

            if (allText.includes(inputVal)) {
                let index = allText.indexOf(inputVal);
                allText.splice(index,1);
                $('span').filter(function(){
                    return $(this).text() == inputVal;
                }).css('background','blue').fadeOut(100,function(){
                    $(this).remove();
                })
                self.val("");
                score++;
                displayResult.html(score);
            }
        }

        //insert spans

        function insertSpans()  {
            for (var i = 0; i<allline.length; i++) {
                let rand = Math.floor(Math.random() * 20);
                if (rand <= lvl) {
                    let text = chooseText()
                    allText.push(text);
                    $(allline[i]).append(`<span>${text}</span>`)
                }
            }
            setTimeout(insertSpans,7000)           
        }    
        insertSpans();

        function chooseText() {
            let rand = Math.floor(Math.random() * typingWords.length);
            typingWords.splice(rand,1);
            let savedText = typingWords [rand];

            return savedText;
        }
        //animate spans
        let allSpans = $('span'); 
        let moveAll = setInterval(function(){
            let allSpans = $('span');
            allSpans.css({
                left : '+=' +speed
            })
            //testiranje 
            $.each(allSpans,(index,el)=> {
                let position = $(el).position().left;
                if(position > 850) {
                    clearAllIntervals()
                    clearallSpans()
                } else if (position > 700 && position < 710){
                    $(el).addClass('danger');
                }
            })
        },10)

        function clearAllIntervals() {
            clearInterval(moveAll);
           
        }
        function clearallSpans()  {
            if position 
            allSpans.remove();

        }
       
                
    } // end start game


}) ()


