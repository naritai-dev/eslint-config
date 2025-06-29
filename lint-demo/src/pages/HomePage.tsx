"use client";

import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import { useCounter } from "../hooks/useCounter";

const HomePage: React.FC = () => {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Welcome to Our Website
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="Counter Example">
                        <div className="text-center">
                            <p className="text-2xl font-bold mb-4">{count}</p>
                            <div className="space-x-2">
                                <Button onClick={increment}>Increment</Button>
                                <Button onClick={decrement} variant="secondary">
                                    Decrement
                                </Button>
                                <Button onClick={reset} disabled={count === 0}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Features">
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Modern React with TypeScript
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Tailwind CSS Styling
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Custom Hooks
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                ESLint Compliant
                            </li>
                        </ul>
                    </Card>

                    <Card title="About">
                        <p className="text-gray-600">
                            This is a sample website demonstrating modern React
                            development practices with strict ESLint rules and
                            TypeScript for type safety.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
