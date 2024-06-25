import { openDB } from 'idb';

// Open the IndexedDB
const dbPromise = openDB('vyzen-form-db', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('formData')) {
            db.createObjectStore('formData', { keyPath: 'id' });
        }
    },
});

// Store data in IndexedDB
export async function storeData(data) {
    try {
        console.log('Storing data:', data);
        const db = await dbPromise;
        const tx = db.transaction('formData', 'readwrite');
        const store = tx.objectStore('formData');
        await store.put(data);
        await tx.done;
        console.log('Data stored successfully');
    } catch (error) {
        console.error('Error storing data:', error);
    }
}

// Load data from IndexedDB
export async function loadData() {
    try {
        const db = await dbPromise;
        
        return await db.getAll('formData');
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}

// Clear data from IndexedDB
export async function clearData() {
    try {
        const db = await dbPromise;
        const tx = db.transaction('formData', 'readwrite');
        await tx.objectStore('formData').clear();
        await tx.done;
        console.log('IndexedDB data cleared successfully');
    } catch (error) {
        console.error('Error clearing IndexedDB data:', error);
    }
}
