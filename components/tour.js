AFRAME.registerComponent("tour", {
    schema:{
        state:{type:"string", default:"place-list"},
        selectCard:{type:"string",default:"#card1"}
    },
    init: function () {
        this.placContainer= this.el
        this.createCards()

    },

    tick:function(){
        const {state}= this.el.getAttribute("tour")
         if(state === "view"){
            this.hideFirstScreen([this.placContainer])
            this.shownextScreen()
         }

    },
    hideFirstScreen:function(elementList){
        elementList.map(i=>{
           i.setAttribute("visible",false)
        })
    },

    shownextScreen:function(){
        const {selectCard} = this.data
        const skyEl= document.querySelector("#main-container")
        skyEl.setAttribute("material",{
            src:`./assets/360_images/${selectCard}/place-0.jpg`,
            color:"white"
        })
    },
    createCards: function () {
        const thumbNailRef = [
            {
                id: "taj-mahal",
                title: "Taj Mahal",
                url: "./assets/images/taj_mahal.png"
            },

            {
                id: "new-york-city",
                title: "New York",
                url: "./assets/images/new_york_city.png"
            }
        ]

        var perviousXposition=-60
        for ( var item of thumbNailRef){
            // console.log("what its item:  ",item)
            var posX=perviousXposition+25
            var posY=10
            var posZ=-40
            const position={x:posX,y:posY,z:posZ}

            perviousXposition=posX

            const mBorder= this.createBorder(position,item.id)

            const mThumbNail= this.createThuumbNail(item)
            mBorder.appendChild(mThumbNail)

            const mTitle= this.createTitle(position,item)
            mBorder.appendChild(mTitle)


            this.placContainer.appendChild(mBorder)


            // console.log(mBorder)


            // displaying thumbNail entity
            
        }

    },

    createThuumbNail:function(item){
        var entity= document.createElement("a-entity")
        entity.setAttribute("visible",true)
        entity.setAttribute("geometry",{
            primitive:"circle",
            radius:10
        })
        entity.setAttribute("material",{src:item.url})
        return  entity

    },

    createBorder:function(position,id){
        const entity=document.createElement("a-entity")
        entity.setAttribute("visible", true)
        entity.setAttribute("id",id)
        entity.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        })
        entity.setAttribute("position",position)
        entity.setAttribute("material",{
            color:"orange",
            opacity:1
        })

        entity.setAttribute("cursor-event",{})

        return entity

    },
    createTitle:function(position,item){
        const entity=document.createElement("a-entity")
        entity.setAttribute("visible", true)
        entity.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:60,
            color:"black",
            value:item.title
        })
        var changePosition=position
        changePosition.y=-20
        entity.setAttribute("position",position)

        return entity

    }


    
})