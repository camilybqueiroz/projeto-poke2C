import './Menu.css'

const menu = () => {

    return (
        <div className="Menu">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link ative" href="/home">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/pokeflex">
                        PokeFlex
                    </a>
                    <li className="nav-item">
                        <a className="nav-link" href="/pokegrid">
                            PokeFlex
                        </a>
                    </li>


                </li>

            </ul>

        </div>
    )
}

export default Menu