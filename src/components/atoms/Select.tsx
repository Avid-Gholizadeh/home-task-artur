import type {SelectHTMLAttributes} from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode
}

export default function Select({children, ...props}: SelectProps) {
    return (
        <select
            className="border-1 border-[#DED2D9] text-[14px] rounded-[5px] h-[45px] w-full p-2  outline-none placeholder:text-gray-400 placeholder:opacity-70 font-['Nunito_Sans']"
            {...props}
        >
            {children}
        </select>
    )
}
