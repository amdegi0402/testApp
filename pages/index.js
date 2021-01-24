import Link from 'next/link';
import style from '../static/Style';
import Counter from '../component/Counter';




//main
export default () =><div>
    {style}
    <h1>page_1</h1>
    <p>Welocome!!</p>
    <hr />
    <Counter />
    <div>
        <Link href="/other">
            <button>Go To OtherPage &gt;&gt;</button>
        </Link>
    </div>
</div>