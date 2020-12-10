import Link from 'next/link';

export default function Produtos(){
    return(
        <div>
            <Link href='/'>
                <a title="Index">Home</a>
            </Link>
            <p>Começando com Next.js</p>
        </div>
    )
}