import DefaultButton from '../../../../components/DefaultButton'
import './style.css'

function FifthSection() {

    return (

        <section className='fifthsection'>
            <div className='background-fifthsection'>
                <div className='fifthcontainer'>
                    <h1>Entre em Contato Agora!</h1>
                    <h2>
                        Se você está aqui, provavelmente teve os seus direitos
                        trabalhistas violados.
                    </h2>
                    <DefaultButton text='Fale com a Especialista' isWhatsapp={true}/>
                    <img src="https://global-files-nginx.builderall.com/11723672-3a8b-43cb-8321-cfd3d88e6519/227e4a9cc708957f43f36a063c633638d8da059de74500a0d5ec7bf16d724c97.png" alt="" />
                </div>
            </div>
        </section>

    )

}

export default FifthSection