import React from 'react'

export const Pattern = () => {
    return (
        <svg
            className="absolute -z-0 inset-0 h-full w-full stroke-sky-100 [mask-image:radial-gradient(75%_100%_at_top_center,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                    width="25"
                    height="25"
                    x="50%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            ></rect>
        </svg>
    )
}
