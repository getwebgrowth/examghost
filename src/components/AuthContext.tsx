'use client';
import React, { createContext, useContext, useState } from 'react';
import AuthModal from './AuthModal';

type AuthTab = 'login' | 'register';

interface AuthContextType {
    isOpen: boolean;
    tab: AuthTab;
    openAuth: (tab?: AuthTab) => void;
    closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState<AuthTab>('register');

    const openAuth = (selectedTab: AuthTab = 'register') => {
        setTab(selectedTab);
        setIsOpen(true);
    };

    const closeAuth = () => {
        setIsOpen(false);
    };

    return (
        <AuthContext.Provider value={{ isOpen, tab, openAuth, closeAuth }}>
            {children}
            <AuthModal />
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
