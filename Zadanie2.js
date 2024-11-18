function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}
const Object = {
    name: "Maksim",
    age: 25,
    city: "City!"
};

console.log(hasProperty("name", Object)); // true
console.log(hasProperty("country", Object)); // false