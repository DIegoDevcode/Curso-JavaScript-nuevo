function calculateDiscountedPrice (price, discountPercentage){
    const discount =(price * discountPercentage) / 100
    const priceWithDiscound = price - discount
    return priceWithDiscound
}

const originalPrice = 200
const discountPercentage =  40
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log(`
    Origanl Price: ${originalPrice}
    Discount Percentage: ${discountPercentage}%
    Final Price: ${finalPrice}`);