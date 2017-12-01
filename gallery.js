class Gallery{
   constructor(el, data =[]){
     this.el = el;
     this.data = data;
   }
    //Form HTML
    render(){
      this.el.innerHTML = `
      <div class = "largeImg">
        <img src="https://js.cx/gallery/img1-lg.jpg" alt="Large image">
      </div>
      
      <div>
        <ul class = "thumbs">
        </ul>
      </div>
      `;
      //Add images thumbs
      for(let link of this.data){
        let liTag = document.createElement('li');
        
        liTag.innerHTML = link;
        this.el.querySelector('ul').append(liTag);
      }
    }

    eventListener(){
      let elem = document.querySelector('.thumbs');
      
      elem.onclick = function(event){
        let target = event.target;
        
        if(target.tagName == 'LI'){
          let attr = target.querySelector('a').getAttribute(href);
          
          let imgLargeEl = document.querySelector('.largeImg');
          imgLargeEl.innerHTML = `
                            <img src= ${attr} alt = "Large image">`;
        }
      }
    }

  }