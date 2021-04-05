window.addEventListener('DOMContentLoaded', () =>
{
    // cards option
    const cards = [
        {
            name: 'fries',
            img:'./img/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'./img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:'./img/ice-cream.png'
        },
        {
            name: 'pizza',
            img:'./img/pizza.png'
        },
        {
            name: 'milkshake',
            img:'./img/milkshake.png'
        },
        {
            name: 'hotdog',
            img:'./img/hotdog.png'
        },
        {
            name: 'fries',
            img:'./img/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'./img/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:'./img/ice-cream.png'
        },
        {
            name: 'pizza',
            img:'./img/pizza.png'
        },
        {
            name: 'milkshake',
            img:'./img/milkshake.png'
        },
        {
            name: 'hotdog',
            img:'./img/hotdog.png'
        }
    ]
    cards.sort(() => 0.5 - Math.random())
    // var for sistem
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []    
    let score = 0

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result') 
    const restart = document.querySelector('.restart')   
    
    restart.addEventListener('click', restartBtn)

    function createBoard()
    {
       for ( let i = 0; i < cards.length; i++)
       {
           const card = document.createElement('img')
           card.setAttribute('src', './img/blank.png')
           card.setAttribute('data-id',i)            
           grid.appendChild(card)        
           card.addEventListener('click', openCard)                                  
       }    
    }

    function openCard()
    {
         let cardId = this.getAttribute('data-id')
         cardsChosenId.push(cardId)         
         cardsChosen.push(cards[cardId].name)
         this.setAttribute('src', cards[cardId].img)
         if(cardsChosen.length === 2)
         {
             setTimeout(checkForMatch,500)
            
         }         
    } 
    
    function checkForMatch()
    {
        const cardsImage = document.querySelectorAll('img')
        let optionIdOne = cardsChosenId[0]
        let optionIdTwo = cardsChosenId[1]
        if(optionIdOne === optionIdTwo)
        {
            cardsImage[optionIdOne].setAttribute('src','./img/blank.png')
            cardsImage[optionIdTwo].setAttribute('src','./img/blank.png')
            // alert('you clicked the same image')
        }
        else if(cardsChosen[0] === cardsChosen[1])
        {
            // alert('you found a match')
            cardsImage[optionIdOne].setAttribute('src','./img/white.png')
            cardsImage[optionIdTwo].setAttribute('src','./img/white.png')
            cardsImage[optionIdOne].removeEventListener('click', openCard)
            cardsImage[optionIdTwo].removeEventListener('click', openCard)
            cardsWon.push(cardsChosen)           
        }
        else
        {
            cardsImage[optionIdOne].setAttribute('src','./img/blank.png')
            cardsImage[optionIdTwo].setAttribute('src','./img/blank.png')
            // alert('sorry try again')
        }
        cardsChosen = []
        cardsChosenId = []
       scoreUpdate()       
        console.log(cardsWon)
    }
   
    function scoreUpdate() 
    {
        result.textContent = cardsWon.length *10
        if(cardsWon.length === cards.length/2)
        {
            result.textContent = 'Congratulation! you have WON!'
        }
    }

    function restartBtn() 
    {
        window.location.reload()
    }
    
  createBoard()
   
})