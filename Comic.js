AFRAME.registerComponent("comic", {
    init: function () {
      this.posterContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const postersRef = [
        {
          id: "supermam",
          title: "Super Man",
          url: "./assets/download 1.jpg",
        },
        {
          id: "spider man",
          title: "Spider Man",
          url: "./assets/download 2.jpg",
        },
  
        {
          id: "captain aero",
          title: "Captain Aero",
          url: "./assets/download 3.jpg",
        },
        {
          id: "outer space",
          title: "Outer Space",
          url: "./assets/download 4.jpg",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position,item.id)
  
        const poster = this.createposter(position,item)
        borderEl.appendChild(poster)
  
        this.posterContainer.appendChild(borderEl);
        
      }
    },
        // Border Element
        createBorder: function (position, id) {
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("id", id);
          entityEl.setAttribute("visible", true);
          entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
          });
          entityEl.setAttribute("position", position);
          entityEl.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
      
          return entityEl;
        },

        createPoster: function(item){
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible",true);
          entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:"20",
            height:"28"
          })

          entityEl.setAttribute("position",{x:0,y:5,z:0.1})
          entityEl.setAttribute("material",{src: item.url})
        },

  });
  