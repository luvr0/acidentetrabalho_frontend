import './style.css'

function ThirdSection() {

    return (

        <section className='thirdsection'>
            <div className='background-thirdimage'>


                <h1>Você Pode Receber Indenizações Milionárias!</h1>
                <h2>
                    <span style={{
                        fontWeight: 200
                    }}>Em caso de um acidente de trabalho, o trabalhador pode ter direito a três tipos principais de indenizações cumulativas</span>
                </h2>
                <nav>
                    <ol>
                        <li>
                            <img src="https://359261591215.my.canva.site/media/d41bff6f3c91c96e24c9f755537a0339.png" alt="" />
                            <h3>Danos Morais</h3>
                            <span>Compensação pelo sofrimento e dor
                                resultantes do acidente. <b>O valor da
                                indenização pode variar, chegando
                                até 50 vezes o salário do
                                trabalhador</b>, dependendo da
                                gravidade da situação.
                            </span>
                        </li>
                        <li>
                            <img src="https://359261591215.my.canva.site/media/e2b46bb9c2468ca5ad6ab7e3921ca704.png" alt="" />
                            <h3>Danos Materiais</h3>
                            <span>O trabalhador pode <b>receber uma
                                pensão mensal vitalícia</b>, que
                                corresponde a um percentual da
                                remuneração do mês do acidente.
                            </span>
                        </li>
                        <li>
                            <img src="https://359261591215.my.canva.site/media/7abc461e04f7379b4097b738fd77212c.png" alt="" />
                            <h3>Danos Estéticos</h3>
                            <span><b>Compensam lesões que deixam
                                marcas permanentes</b>, como
                                cicatrizes ou deformidades, que
                                podem impactar a vida social da
                                pessoa.
                            </span>
                        </li>
                    </ol>
                </nav>

            </div>
        </section>

    )

}

export default ThirdSection