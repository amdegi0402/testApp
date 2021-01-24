import Link from 'next/link'
import style from '../static/Style';

export default () =><div>
    {style}
    <h1>page_2</h1>
    <p>This is Other Page</p>
    <hr />
    <div>
        <Link href="/">
            <button>Back to IndexPage</button>
        </Link>
    </div>
</div>