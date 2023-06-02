export default function Separator({ className }: { className?: string }) {
    return <hr className={`w-full border-zinc-400 dark:border-zinc-700 border-2 ${className || ''}`} />
}