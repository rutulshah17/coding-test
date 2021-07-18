export const randomizeArray = (arr) => {
    arr = arr.sort(() => Math.random() - 0.5)
    return arr;
}