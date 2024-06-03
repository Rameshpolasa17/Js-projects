let bagItems=[];
onLoad();

function onLoad(){
    let bagItemsstr=localStorage.getItem('bagItems')
    bagItems=bagItemsstr ? JSON.parse(bagItemsstr): [];
    displayItemsOnHomePage()

    displayBagIcon()
}

function addtoBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
      bagItemCountElement.style.visibility='visible'
      bagItemCountElement.innerText = bagItems.length;
    } else {
      bagItemCountElement.style.visibility='hidden'
    }
  }

function displayItemsOnHomePage(){
    let itemContainer=document.querySelector('.items_container')
    if(!itemContainer){
        return;
    }
    let innerHtml=``
    items.forEach(item=>{
        innerHtml+=`
        <div class="item_container">
            <img class="item_img" src="${item.item_img}">
            <div class="rating">
                ${item.rating.stars} | ${item.rating.noOfReviews} 
            </div>
            <div class="brand_name">${item.brand_name}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current_price">RS ${item.current_price}</span>
                <span class="original_price">RS ${item.original_price}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="add_bag" onclick="addtoBag(${item.id})">Add to Bag</button>
        </div>`
})

itemContainer.innerHTML= innerHtml
}