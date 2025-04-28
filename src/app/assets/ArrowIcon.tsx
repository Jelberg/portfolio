import React from 'react';

interface ArrowIconProps {
    hover?: boolean;
    className?: string;
    align?: 'left' | 'right' | 'center';
}

const ArrowIcon = ({
    hover = false,
    className = '',
    align = 'right' // Valor por defecto a la derecha
}: ArrowIconProps) => {
    return (
        <div className={`flex justify-${align} ${className}`}>
            <div
                className={`flex items-center transition-all duration-300 ${
                    hover ? 'pr-2' : ''
                }`}
            >
                {/* Línea */}
                <div
                    className={`h-[3px] transition-all duration-300 ${
                        hover ? 'bg-primary w-20' : 'bg-gray-300 w-24'
                    }`}
                />

                {/* Flecha */}
                <div
                    className={`transition-all duration-300 ${
                        hover
                            ? 'opacity-100 translate-x-1'
                            : 'opacity-0 translate-x-0'
                    }`}
                >
                    <div className="w-5 h-5 border-r-3 border-t-3 border-primary transform rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default ArrowIcon;
