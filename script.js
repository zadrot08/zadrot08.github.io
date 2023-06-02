let apple1 = document.querySelector(".apple1")
let apple2 = document.querySelector(".apple2")
let apple3 = document.querySelector(".apple3")
let apple4 = document.querySelector(".apple4")
let apple5 = document.querySelector(".apple5")
let apple_gold = document.querySelector(".apple_gold")
let apples1 = 0
let apples2 = 0
let apples3 = 0
let apples4 = 0
let apples5 = 0
let apples_gold = 0
let all_apples = 0
let all = document.querySelector(".nadpis")
all.innerHTML = "apples: " + all_apples

setTimeout(function(){
   
 

    apple1.style.display = 'block'
}, 500)
setTimeout(function(){
   
 

    apple2.style.display = 'block'
}, 1000)
setTimeout(function(){
   
 

    apple3.style.display = 'block'
}, 1500)
setTimeout(function(){
   
 

    apple4.style.display = 'block'
}, 2000)
setTimeout(function(){
   
 

    apple5.style.display = 'block'
}, 2500)
setTimeout(function(){
   
 

    apple_gold.style.display = 'block'
}, 36000)
apple1.addEventListener("click", function(){
    apples1 += 1
    if(apples1 <= 6){
        anime({
            targets: '.apple1',
            keyframes:[
                {rotate: 45},
                {rotate: -90},
                {rotate: 0}
            ],
            
            duration: 700,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple1',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 160},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples1 = 0
        all_apples +=1
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})
apple2.addEventListener("click", function(){
    apples2 += 1
    if(apples2 <= 6){
        anime({
            targets: '.apple2',
            keyframes:[
                {rotate: 45},
                {rotate: -90},
                {rotate: 0}
            ],
            
            duration: 700,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple2',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 80},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples2 = 0
        all_apples +=1
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})
apple3.addEventListener("click", function(){
    apples3 += 1
    if(apples3 <= 6){
        anime({
            targets: '.apple3',
            keyframes:[
                {rotate: 45},
                {rotate: -90},
                {rotate: 0}
            ],
            
            duration: 700,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple3',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 180},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples3 = 0
        all_apples +=1
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})
apple4.addEventListener("click", function(){
    apples4 += 1
    if(apples4 <= 6){
        anime({
            targets: '.apple4',
            keyframes:[
                {rotate: 45},
                {rotate: -90},
                {rotate: 0}
            ],
            
            duration: 700,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple4',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 290},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples4 = 0
        all_apples +=1
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})
apple5.addEventListener("click", function(){
    apples5 += 1
    if(apples5 <= 6){
        anime({
            targets: '.apple5',
            keyframes:[
                {rotate: 45},
                {rotate: -90},
                {rotate: 0}
            ],
            
            duration: 700,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple5',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 260},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples5 = 0
        all_apples +=1
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})
apple_gold.addEventListener("click", function(){
    apples_gold += 1
    if(apples_gold <= 30){
        anime({
            targets: '.apple_gold',
            keyframes:[
                {rotate: 360},
                {rotate: -360},
                {rotate: 0}
            ],
            
            duration: 1500,
            easing: 'linear'

            

        })
        
    }
    else{
        
        anime({
            targets: '.apple_gold',
            keyframes:[
                {top: 800},
                {opacity: 0},
                {top: 207},
                {opacity: 1}
      
            ],
            
            duration: 4000,
            easing: 'linear'
        })
        apples_gold = 0
        all_apples += 10
        all.innerHTML = "apples: " + all_apples
        
        
        

        


    }

})


