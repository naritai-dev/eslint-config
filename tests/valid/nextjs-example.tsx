'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

// 適切な型定義
interface Post {
    readonly id: string;
    title: string;
    content: string;
    author: string;
    publishedAt: string;
    imageUrl?: string;
}

interface PostCardProps {
    post: Post;
}

// 適切なメタデータ
export const metadata = {
    title: 'Blog Posts',
    description: 'Latest blog posts from our team',
    keywords: ['blog', 'posts', 'articles'],
};

// 適切な画像コンポーネント
export const PostImage: React.FC<{ src: string; alt: string }> = ({
    src,
    alt,
}) => (
    <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className='post-image'
    />
);

// 適切なPostCardコンポーネント
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <article className='post-card' role='article'>
            <header>
                <h2>
                    <Link
                        href={`/posts/${post.id}`}
                        className='hover:underline'
                    >
                        {post.title}
                    </Link>
                </h2>
                {post.imageUrl !== undefined && post.imageUrl !== '' && (
                    <PostImage src={post.imageUrl} alt={post.title} />
                )}
            </header>
            <p>{post.content.substring(0, 150)}...</p>
            <footer>
                <p>By {post.author}</p>
                <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                </time>
            </footer>
        </article>
    );
};

// 適切なローディングコンポーネント
export const PostCardSkeleton: React.FC = () => (
    <div className='post-card-skeleton animate-pulse'>
        <div className='mb-2 h-4 w-3/4 rounded bg-gray-200'></div>
        <div className='mb-2 h-32 rounded bg-gray-200'></div>
        <div className='mb-1 h-3 w-full rounded bg-gray-200'></div>
        <div className='h-3 w-2/3 rounded bg-gray-200'></div>
    </div>
);

// 適切なエラー境界
export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <Suspense fallback={<PostCardSkeleton />}>{children}</Suspense>;
};

// 適切なフォームコンポーネント
export const ContactForm: React.FC = () => {
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormData({ name: '', email: '', message: '' });
            // eslint-disable-next-line no-alert
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Form submission error:', error);
            // eslint-disable-next-line no-alert
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-describedby='name-error'
                />
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-describedby='email-error'
                />
            </div>

            <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    aria-describedby='message-error'
                />
            </div>

            <button
                type='submit'
                disabled={isSubmitting === true}
                aria-describedby='submit-status'
            >
                {isSubmitting === true ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

// 適切なレイアウトコンポーネント
export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div className='layout'>
        <header role='banner'>
            <nav role='navigation' aria-label='Main navigation'>
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>

        <main role='main'>{children}</main>

        <footer role='contentinfo'>
            <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
    </div>
);

// 適切なページコンポーネント
export const BlogPage: React.FC = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchPosts = async (): Promise<void> => {
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading === true) {
        return (
            <div className='posts-grid'>
                {Array.from({ length: 6 }).map((_, index: number) => (
                    <PostCardSkeleton key={`skeleton-${String(index)}`} />
                ))}
            </div>
        );
    }

    if (error !== null) {
        return <div className='error-message'>Error: {error}</div>;
    }

    return (
        <div className='posts-grid'>
            {posts.map((post: Post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

// 適切なAPI Route（Next.js App Router）
export async function GET(): Promise<Response> {
    try {
        const posts: Post[] = await fetchPostsFromDatabase();
        return Response.json(posts);
    } catch {
        return Response.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        );
    }
}

// 適切なデータベース関数
async function fetchPostsFromDatabase(): Promise<Post[]> {
    // 実際のデータベースクエリ
    return [
        {
            id: '1',
            title: 'Getting Started with Next.js',
            content:
                'Learn how to build modern web applications with Next.js...',
            author: 'John Doe',
            publishedAt: '2024-01-15T10:00:00Z',
            imageUrl: '/images/nextjs-intro.jpg',
        },
    ];
}

export default BlogPage;
