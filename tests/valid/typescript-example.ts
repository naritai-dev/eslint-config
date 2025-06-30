// 適切な型定義
interface User {
    readonly id: string;
    name: string;
    email?: string;
    createdAt: Date;
}

type UserId = string;

interface DataStoreItem {
    id: string;
}

class DataStore<T extends DataStoreItem> {
    private readonly data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    get(id: string): T | undefined {
        return this.data.find((item: T) => item.id === id);
    }

    getAll(): readonly T[] {
        return this.data;
    }
}

export class UserService {
    private readonly store: DataStore<User> = new DataStore<User>();

    async addUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        const user: User = {
            ...userData,
            id: crypto.randomUUID(),
            createdAt: new Date(),
        };
        this.store.add(user);
        return user;
    }

    getUser(id: UserId): User | undefined {
        return this.store.get(id);
    }

    getAllUsers(): readonly User[] {
        return this.store.getAll();
    }
}

export default UserService;
