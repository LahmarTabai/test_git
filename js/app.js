document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    const container = document.querySelector(".content-grid")
    let index = 12 /* for create number image */

    /* add elements */
    window.addEventListener('scroll',()=>{
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        /* testing property */
        // console.log(scrollTop, scrollHeight, clientHeight)

        if(clientHeight + scrollTop >= scrollHeight - 20){
            console.log("Create")
            addStuff(3)
        }
    })

    /* function */
    let addStuff=(nb)=>{
        for(let i = 0; i < nb; i++){
            index++;
            const newItem = document.createElement('li')
            newItem.className = "item"

            const newImg = document.createElement("img")
            newImg.src = `https://loremflickr.com/320/240?random=${index}`
            newItem.appendChild(newImg)
            
            container.appendChild(newItem)
        }

    }
})