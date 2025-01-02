import image from '../../../../assets/images/Carvalho__Almeida_8.png'
import DefaultButton from '../../../../components/DefaultButton';
import './style.css';

function SecondSection() {
    return (
        <section className='secondsection'>
            <div className="background">
                <div className="container">
                    <img className='logo' src="https://global-files-nginx.builderall.com/11723672-3a8b-43cb-8321-cfd3d88e6519/227e4a9cc708957f43f36a063c633638d8da059de74500a0d5ec7bf16d724c97.png" alt="Imagem 1" />
                    <img className='image' src={image} />
                    <DefaultButton />
                </div>
                <div className="text-container">
                    <h1 className="texth1">
                        O que é acidente de trabalho?
                    </h1>
                    <h2 className="texth2">
                        <span>
                            Um acidente de trabalho é qualquer evento que ocorre durante as atividades profissionais e resulta em lesões físicas ou problemas de saúde.
                        </span>
                        <br />
                        <br />
                        <span>
                            Isso inclui <b> acidentes físicos, como quedas ou cortes, e doenças relacionadas a condições de trabalho </b>, como:
                        </span>
                        <br />
                        <br />
                        <ol>
                            <li><b>Exposição a substâncias químicas </b> (ex: solventes, produtos tóxicos);</li>
                            <li><b>Ruído excessivo </b> (causando perda de audição);</li>
                            <li><b>Temperaturas extremas </b> (resultando em insolação ou hipotermia);</li>
                            <li><b>Movimentação inadequada de cargas </b> (lesões nas costas);</li>
                            <li><b>Trabalho em altura </b> (risco de quedas).</li>
                        </ol>
                        <br />
                        <br />
                        <span>
                            Além disso, acidentes podem ocorrer fora do local de trabalho, como no trajeto para casa, se o trabalhador estiver a serviço da empresa.
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;
