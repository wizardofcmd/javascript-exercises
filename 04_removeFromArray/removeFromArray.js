const removeFromArray = function(arr, ...removal) {
    let newArr = [];
    let itemsToRemove = [];
    removal.forEach(arg => itemsToRemove.push(arg));
    console.log(removal);

    for (const item of arr) {
        newArr.push(item);
        if (itemsToRemove.includes(item)) {
            removeItemIndex = itemsToRemove.indexOf(item);
            removeItemType = typeof(itemsToRemove[removeItemIndex]);

            itemType = typeof(item);
            
            if (itemType === removeItemType) {
                newArr.pop();
            }
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
