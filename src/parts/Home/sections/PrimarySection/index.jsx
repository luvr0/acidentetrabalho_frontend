import DefaultButton from '../../../../components/DefaultButton'
import './style.css'

function PrimarySection() {

    return (

        <section className="primarysection background-primaryimage">
            <div className='background-blur'>

                <div>

                    <img src="https://global-files-nginx.builderall.com/11723672-3a8b-43cb-8321-cfd3d88e6519/227e4a9cc708957f43f36a063c633638d8da059de74500a0d5ec7bf16d724c97.png" alt="" />
                    <h1>Sofreu um acidente de trabalho e deseja garantir todas as indenizações a que tem direito?</h1>
                    <h2>
                        <span style={{ fontWeight: 200 }}>Descubra o que é um acidente de trabalho e quais são suas garantias: </span>
                        <span>você pode receber indenizações milionárias!</span>
                    </h2>
                    <DefaultButton/>
                </div>

            </div>
        </section>


    )
}

export default PrimarySection