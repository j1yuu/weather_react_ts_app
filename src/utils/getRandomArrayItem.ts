export default function getRandomArrayItem(arr: any[]) {
    const index = Math.floor(Math.random() * arr.length)

    return arr[index]
}