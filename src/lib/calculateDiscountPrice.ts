export const calculateDiscountPrice = (price: number, discountPercentage: number): string => {
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice.toFixed(2);
};