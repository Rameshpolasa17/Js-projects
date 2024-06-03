const fees=99;
let bagitemObjects;
onLoad()
function onLoad(){
    loadBagItemObjects()
    displaybagItems();
    displayBagSummary()
}
console.log('hello')

function loadBagItemObjects(){
    
   bagitemObjects= bagItems.map(check=>{
        for (let i = 0; i < items.length; i++) {
            if(check==items[i].id){
                return items[i]
            }
            
        }
    })
    // console.log(loadBagItemObjects)
}

function displayBagSummary(){

    let totalItem=bagitemObjects.length;
    let totalMRP=0
    let totalDiscount=0

    bagitemObjects.forEach( bagItem =>{
        totalMRP+=bagItem.current_price
        totalDiscount+=bagItem.original_price-bagItem.current_price
    });

    let finalPayment=totalMRP+fees

    let bagSummaryElement= document.querySelector(`.bag-summary`)
    bagSummaryElement.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class=".add_bag">PLACE ORDER</div>
  </button>
  `
}

function displaybagItems(){
    let containerElement= document.querySelector('.bag-items-container')
    // containerElement.innerHTML=``
let innerHTMLL=``
bagitemObjects.forEach(bagItem => {
    innerHTMLL+= generateItemHTML(bagItem)
});

containerElement.innerHTML=innerHTMLL
}

function removeFromBag(itemId){
    bagItems=bagItems.filter(bagitemId=> bagitemId!= itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    loadBagItemObjects()
    displaybagItems();
    displayBagIcon()
    displayBagSummary()
}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="item_img" src="${item.item_img}">
      </div>
      <div class="item-right-part">
        <div class="brand_name">${item.brand_name}</div>
        <div class="item_name">${item.item_name}</div>
        <div class="price">
          <span class="current_price">Rs ${item.current_price}</span>
          <span class="original_price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
    </div>`;
  }