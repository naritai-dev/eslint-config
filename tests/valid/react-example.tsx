'use client';

import React from 'react';

// 適切な型定義
interface User {
    readonly id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (userId: string) => void;
}

// 適切なコンポーネント設計
export const UserCard: React.FC<UserCardProps> = ({
    user,
    onEdit,
    onDelete,
}) => {
    const handleEdit = React.useCallback((): void => {
        onEdit(user);
    }, [user, onEdit]);

    const handleDelete = React.useCallback((): void => {
        onDelete(user.id);
    }, [user.id, onDelete]);

    const formattedName = React.useMemo((): string => {
        return user.name.trim().toLowerCase();
    }, [user.name]);

    return (
        <article className='user-card' role='article'>
            <header>
                <h3>{formattedName}</h3>
                {user.avatar !== undefined && user.avatar !== '' && (
                    <div className='avatar-placeholder'>
                        Avatar: {user.name}
                    </div>
                )}
            </header>
            <p>{user.email}</p>
            <footer>
                <button onClick={handleEdit} aria-label={`Edit ${user.name}`}>
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    aria-label={`Delete ${user.name}`}
                >
                    Delete
                </button>
            </footer>
        </article>
    );
};

// 使用例を示すコンポーネント
export const UserCardExample: React.FC = () => {
    const sampleUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar.jpg',
    };

    const handleEdit = (user: User): void => {
        console.log('Edit user:', user);
    };

    const handleDelete = (userId: string): void => {
        console.log('Delete user:', userId);
    };

    return (
        <UserCard
            user={sampleUser}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};
