import React from 'react'

const BlurBottom = () => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '0',
                width: '100%',
                height: '20px',
                background:
                    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(5px)',
                zIndex: '1',
            }}
        >
            {/* Add your content here */}
        </div>
    )
}

export default BlurBottom
