import Image from "next/image";

type LogoProps = {
    showTitle?: boolean;
}

const Logo = ({showTitle}:LogoProps) => {
    return (
        <div className="flex items-center justify-center p-4">
        <Image src="/logo.png" alt="TaskFlow Logo" width={60} height={60} />
        {showTitle && <span className="ml-4 text-xl font-bold">TaskFlow</span>}
        </div>
    )
}

export default Logo;