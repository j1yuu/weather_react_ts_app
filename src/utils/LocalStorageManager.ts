export class LocalStorageManager {
    private createItemState(key: string) {
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    };

    getItemState<T>(key: string): T {
        const data = localStorage.getItem(key);
        
        return data ? JSON.parse(data) : this.createItemState(key)
    };

    setItemState<T>(key: string, item: T) {
        localStorage.setItem(key, JSON.stringify(item))
    }
};