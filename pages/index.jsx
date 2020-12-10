import Link from 'next/link';

export default function Index(){
    return(
        <div>
            <Link href='/produtos'>
                <a title="Produtos">Produtos</a>
            </Link>
            <p>Começando com next.JS</p>
        </div>
    )
}