import { STORAGE_YOUR_FAVORITES } from './globals/variables';

export const isItemInStorage = (newItem) => {
    let yourFavorties = getStorage();
    if(!yourFavorties){
        return [];
    }
    if(yourFavorties.find(currentFav => currentFav.id == newItem.id)){
        return true;
    }
    return yourFavorties;
}

export const setStorage = (newItem, storageItem = STORAGE_YOUR_FAVORITES, test = true) => {
    if(storageItem == STORAGE_YOUR_FAVORITES){
        let arrayofFavs;
        if(test === true){
            arrayofFavs = isItemInStorage(newItem);
            if(arrayofFavs === true){
                console.log("Movie already in favorite")
                return false;
            }
        }
        else{
            arrayofFavs = getStorage();
        }
        arrayofFavs.push(newItem);
        const arrayofFavsStorage = JSON.stringify(arrayofFavs);
        localStorage.setItem(storageItem, arrayofFavsStorage);
        return arrayofFavs;
        }
    else{
        console.log('Invalid storage item:  "movie-app-your-favorites"');
        return false;
    }
}  

export const getStorage = (storageItem = STORAGE_YOUR_FAVORITES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else if(storageItem === STORAGE_YOUR_FAVORITES){
        return [];
    }else{
        return false;
    }   
}

export const removeFromStorage = (movie, storageItem = STORAGE_YOUR_FAVORITES) => {
    let items = getStorage();
    let indexOfItemToRemove = items.findIndex(function(item){
        return item.id == movie.id
    });
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}