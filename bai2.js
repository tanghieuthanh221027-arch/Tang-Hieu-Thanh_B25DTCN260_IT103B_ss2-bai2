const distanceKm = 4;
const isRaining = false;

const baseFare = 12000;
const pricePerAdditionalKm = 4500;
const weatherMultiplier = 1.2;

let totalFare = 0;

if (distanceKm <= 2) {
    totalFare = baseFare;
} else {
    const additionalDistance = distanceKm - 2;
    totalFare = baseFare + additionalDistance * pricePerAdditionalKm;
}

if (isRaining) {
    totalFare = totalFare * weatherMultiplier;
}

console.log("Khoảng cách di chuyển:", distanceKm, "km");
console.log("Tổng cước phí chuyến đi:", totalFare, "VNĐ");