import { NavLink } from "react-router";
import{ useEffect, useRef, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import Nav from "./assets/Nav";
import Logo from "./assets/Logo.jsx";

function App() {

    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const boxesRef = useRef([]);
    const [currentBox, setCurrentBox] = useState(0);

    const scrollToNextBox = useCallback(() => {
        if (!boxesRef.current || boxesRef.current.length === 0) return;

        if (currentBox < boxesRef.current.length - 1) {
            const nextBox = boxesRef.current[currentBox + 1];
            if (nextBox) {
                nextBox.scrollIntoView({
                    behavior: "smooth",
                    block: 'center',
                    inline: 'center'
                });
                setCurrentBox(currentBox + 1);
            }
        } else {
        setTimeout(() => {
            window.location.href = '/portfolio';
        }, 2000);
    }
    }, [currentBox]);

    useEffect(() => {
        boxesRef.current = document.querySelectorAll('.box');

        const handleKeyUp = (e) => {
            if (e.key === 'Enter') {
                console.log(e.key);
                window.location.href = '/portfolio';
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                console.log(e.key);
                scrollToNextBox();
            }
			if (e.key === 'ArrowUp') {
                e.preventDefault();
                console.log(e.key);
                toTop();
            }
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [scrollToNextBox]);

	const { t } = useTranslation();

	return (
		<>
			<Nav />
			<div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box box-1 my-3" onClick={scrollToNextBox}>
                            <h2>Taukane</h2>
                            <p>{t('intro')}</p>
                        </div>
                        <div className="box box-2 my-3" onClick={scrollToNextBox}>
                            <h2>Designer</h2>
                            <p>{t('designer')}</p>
                        </div>
                        <div className="box box-3 my-3" onClick={scrollToNextBox}>
                            <h2>{t('web')}</h2>
                        </div>
                        <div className="box my-5 p-5" onClick={() => {window.location.href = '/portfolio';}}>
                            <div className="apresenta rounded">
                                <NavLink to="/portfolio" onClick={toTop} title="Portfolio Designer Web e Grafico">
                                    <Logo />
                                    <h1>Portfolio Designer Web e Grafico</h1>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			<a href="#" onClick={toTop} title="Topo Portfolio" id="topo">
				<img
					src="image/top.jpg"
					alt="Taukane - Diretor de Arte Web"
					title="Diretor de Arte Web Curitiba"
					className="img-fluid rounded shadow-lg"
					width={50}
					height={50}
				/>
			</a>
			<span className="scroller"></span>
		</>
	)
}
export default App