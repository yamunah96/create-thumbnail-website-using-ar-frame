AFRAME.registerComponent("sideview", {
    init: function () {
      this.creatPlaces()
    },
    tick: function () {
        const placesContainer = document.querySelector("#places-container");

        const { state } = placesContainer.getAttribute("tour");
    
        if (state === "view" || state === "change-view") {
    
          this.el.setAttribute("visible", true);
        } else {
          this.el.setAttribute("visible", false);
        }

    },
    creatPlaces: function () {
        const sideViewer = document.querySelector("#side-view")

        var Px = -140
        var Py = 25

        for (var i = 1; i <= 4; i++) {
            const position = {
                x: Px += 50,
                y: Py += 2,
                z: -40
            }
            const myentity = this.createPlaceImages(position, i)
            sideViewer.appendChild(myentity)
        }
    },
    createPlaceImages: function (position, id) {
        const entity = document.createElement("a-entity")
        entity.setAttribute("id", `place-${id}`)

        entity.setAttribute("visible", true)
        entity.setAttribute('geometry', {
            primitive: "circle",
            radius: 2.5
        })
        
       entity.setAttribute("material", {
        color:"red"
      });
      
        entity.setAttribute("position", position)
        entity.setAttribute("cursor-event", {})

        // console.log(entity)

        return entity

    }

})