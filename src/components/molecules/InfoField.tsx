interface InfoFieldProps {
    label: string
    value: string
    loading: boolean
}

const InfoField = ({label, value, loading}: InfoFieldProps) => {
    return (
        <div className="flex gap-2">
            <h2 className="font-bold text-lg">{label} :</h2>
            <p className="text-gray-500 mt-0.5">
                {loading ? (
                    <span className="flex flex-row gap-2 ml-2 mt-3 items-center">
                        <span className="w-2 h-2 rounded-full bg-[#FFE6C9] animate-bounce [animation-delay:.7s]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#FFE6C9] animate-bounce [animation-delay:.3s]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#FFE6C9] animate-bounce [animation-delay:.7s]"></span>
                    </span>
                ) : (
                    value
                )}
            </p>
        </div>
    )
}

export default InfoField
