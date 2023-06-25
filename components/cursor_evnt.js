AFRAME.registerComponent("cursor-event", {
    schema: {
        selectItemId: { default: "", type: "string" }
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.hadnleMouseLeaveEvents()
        this.handleClick()
        // this.handlePlaceListState()

    },

    handlePlaceListState: function () {
        var id = this.el.getAttribute("id")
        var placeId = ["taj-mahal", "new-york-city"]
        if (placeId.includes(id)) {
            var placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-event", {
                selectItemId: id
            });
            this.el.setAttribute("material", {
                color: "green",
                opacity: 1
            })

        }
        // console.log("display id's", id)
        // console.log(placeContainer)
    },


    handleMouseEnterEvents: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
            this.handlePlaceListState();
        });
    },

    hadnleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const placesContainer = document.querySelector("#places-container");
            const { state } = placesContainer.getAttribute("tour");
            if (state === "places-list") {
            const { selectItemId } = this.data
            if (selectItemId) {
                const el = document.querySelector(`#${selectItemId}`)
                const id = el.getAttribute("id")

                // console.log("s", selectItemId)
                // console.log("i", id)

                if (id === selectItemId) {
                    el.setAttribute("material", {
                        color: "orange",
                        opacity: 1
                    })
                }
            }
        }
        })

    },

    handleClick: function () {
        this.el.addEventListener("click", (e) => {
            const placeContainer = document.querySelector("#places-container")

            const { state } = placeContainer.getAttribute("tour")
            if (state === "place-list") {
                const id = this.el.getAttribute("id")
                const placeId = ["taj-mahal", "new-york-city"]
                if (placeId.includes(id)) {
                    placeContainer.setAttribute("tour", {
                        state: "view",
                        selectCard: id
                    })

                }

            }
            if (state === "view") {
                this.handleViewState()
            }
            if (state === "change-view") {
                this.handleViewState()
            }


        });


    },

    handleViewState: function () {
        const el = this.el
        const id = el.getAttribute("id")

        const placeContainer = document.querySelector("#places-container")
        // console.log(placeContainer)
        const selectItemId = placeContainer.getAttribute("cursor-event")

        const sId= selectItemId.selectItemId


        // console.log(placeContainer)
        // console.log(selectItemId)
      
        

        const sideViewerId = ['place-1', 'place-2', 'place-3', 'place-4']
        // console.log(sideViewerId)
        console.log("id",id)
        console.log("sId",sId)

      
        if (sideViewerId.includes(id)) {
            placeContainer.setAttribute("tour", {
                state: 'change-view'
            })

            const sky = document.querySelector("#main-container")
            sky.setAttribute("material", {
                src: `./assets/360_images/${sId}/${id}.jpg`,
            },
            )
        }

    }

})